import nodemailer from "nodemailer";

export const runtime = "nodejs";

const hits = new Map(); // ip -> timestamps (simple in-memory rate limit)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const clean = (v, max) => String(v ?? "").trim().slice(0, max);
const json = (body, status = 200) => Response.json(body, { status });

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (limited(ip)) return json({ error: "Too many messages. Please try again later." }, 429);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: pretend success so bots move on.
  if (body.website) return json({ ok: true });

  const data = {
    name: clean(body.name, 100),
    email: clean(body.email, 150),
    company: clean(body.company, 120),
    fleet: clean(body.fleet, 40),
    message: clean(body.message, 3000),
  };

  if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.message.length < 10) {
    return json({ error: "Please complete your name, a valid email and a message." }, 400);
  }

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "-"}`,
    `Fleet size: ${data.fleet || "-"}`,
    "",
    data.message,
  ].join("\n");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !CONTACT_TO_EMAIL) {
    if (process.env.NODE_ENV === "production") {
      console.error("Contact form: SMTP_HOST / CONTACT_TO_EMAIL not configured");
      return json({ error: "Contact is temporarily unavailable. Please email us directly." }, 503);
    }
    console.log("[contact:dev] SMTP not configured, message not sent:\n" + text);
    return json({ ok: true });
  }

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });
    await transport.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: `${data.name} <${data.email}>`,
      subject: `Fleetrust contact: ${data.name}${data.company ? ` (${data.company})` : ""}`,
      text,
    });
    return json({ ok: true });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return json({ error: "We could not send your message. Please try again." }, 502);
  }
}
