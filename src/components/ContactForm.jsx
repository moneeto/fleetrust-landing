"use client";

import { useState } from "react";

const fleetSizes = ["1 aircraft", "2 to 5 aircraft", "6 to 15 aircraft", "More than 15"];
const field =
  "w-full border border-line bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none";
const label = "mb-1 block font-mono text-[11px] uppercase tracking-wider text-muted";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-white p-8">
        <p className="font-semibold">Message sent.</p>
        <p className="mt-1 text-muted">Thanks for writing. We will get back to you soon.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-medium text-primary underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-line bg-white p-6">
      {/* Honeypot: hidden from people, bots fill it in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={label}>Name</span>
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label>
          <span className={label}>Email</span>
          <input name="email" type="email" required maxLength={150} autoComplete="email" className={field} />
        </label>
        <label>
          <span className={label}>Company</span>
          <input name="company" maxLength={120} autoComplete="organization" className={field} />
        </label>
        <label>
          <span className={label}>Fleet size</span>
          <select name="fleet" defaultValue="" className={field}>
            <option value="" disabled>Select</option>
            {fleetSizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className={label}>Message</span>
        <textarea name="message" required minLength={10} maxLength={3000} rows={5} className={`${field} resize-y`} />
      </label>
      {status === "error" && (
        <p role="alert" className="border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#0b5ed7] disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
