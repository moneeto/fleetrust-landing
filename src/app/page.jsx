import ContactForm from "@/components/ContactForm";

const apk = process.env.NEXT_PUBLIC_APK_URL || "/downloads/fleetrust.apk";
const app = process.env.NEXT_PUBLIC_APP_URL || "#contact";
const version = process.env.NEXT_PUBLIC_APK_VERSION || "1.0.0";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@fleetrust.com";

const nav = [
  ["What is Fleetrust", "#what"],
  ["Platform", "#platform"],
  ["New Features", "#features"],
  ["Download", "#download"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const benefits = [
  ["No double bookings", "Fleetrust checks aircraft, pilot and time before it confirms a flight."],
  ["One shared schedule", "Your whole team sees the same calendar, at the desk or in the hangar."],
  ["Digital pass for every guest", "Passengers get a boarding pass with a QR code for a fast check-in."],
  ["Decisions with real information", "See what is booked, what is free and what your fleet is doing."],
];

const steps = [
  ["Set up your fleet", "Add your services, aircraft and pilots once. Choose when you are open."],
  ["Take bookings", "Pick a service, passengers, aircraft, pilot and time. Fleetrust warns you about any clash."],
  ["Fly", "Your day on one screen: who flies, in which aircraft, with which pilot."],
];

const shots = [
  {
    title: "Calendar",
    text: "See every flight in month, week, day or agenda view. Each aircraft has its own color, so the day reads at a glance.",
    imgs: [
      ["4.png", "Week view of the Fleetrust booking calendar"],
      ["3.png", "Agenda view listing the next flights"],
    ],
  },
  {
    title: "Bookings list",
    text: "Find any booking by code, client, aircraft, flight type, status or pilot. Filter by day, week or month, and print the list.",
    imgs: [["2.png", "List of bookings with filters"]],
  },
  {
    title: "New booking",
    text: "A few short steps: type, service, passengers, aircraft and pilot, date and time. When you confirm, the passenger receives the boarding pass by email.",
    imgs: [
      ["5.png", "New booking step to enter passengers"],
      ["6.png", "Date and time step with the reservation confirmed message"],
    ],
  },
  {
    title: "Booking detail",
    text: "Dates, client, aircraft, pilot, passengers, notes and total in one view. Edit or cancel from there.",
    imgs: [["7.png", "Detail of a booking"]],
  },
];

const platform = [
  ["Services and add-ons", "Define your tours and the extras guests can add."],
  ["Aircraft and pilots", "Keep your fleet and crew organized and assign them in a click."],
  ["Availability", "Tell Fleetrust when you operate. Bookings only land in those hours."],
  ["Team roles", "Admins manage everything. Staff handle daily operations."],
  ["Boarding pass and check-in", "A pass with QR code for each passenger and a scanner for the gate."],
  ["Gallery, reviews and social", "Show your flights, collect reviews and keep social media in one place."],
];

const features = [
  ["Sign in with Google or biometrics", "Use your Google account, or your fingerprint or face on your phone."],
  ["Availability control", "Set your operating hours and keep bookings inside them."],
  ["Team management", "Invite your team and give each person the right access."],
  ["Guided setup tour", "A walk-through from an empty account to your first booking."],
  ["Android app", "Install the app and run your day from your phone."],
  ["Built-in help", "Answers to common questions, right inside the app."],
];

const installSteps = [
  "Download the APK to your Android phone.",
  "Open the file and allow installation from this source if your phone asks.",
  "Open Fleetrust and sign in with Google or your email.",
];

const faqs = [
  ["What is Fleetrust?", "A tool to manage your aircraft operations, organize your hangar and make decisions with valuable information."],
  ["Who is Fleetrust for?", "Air tour operators and small fleets that take bookings for flights and want aircraft, pilots and guests organized in one place."],
  ["How do I get started?", "Register with Google or your email. Add your services, aircraft, pilots and, if you want, add-ons. Then start taking bookings."],
  ["Does it work on my phone?", "Yes. It works in your browser and there is also an Android app."],
  ["How do passengers get their boarding pass?", "Each booking generates a boarding pass with a QR code for every passenger. You scan it at check-in."],
  ["Can my team have different permissions?", "Yes. Admins manage users and settings, the rest of the team works on daily operations."],
  ["I forgot my password", "On the sign-in page, open Forgot password, enter your email and follow the link we send. Choose a new password of at least 8 characters and sign in again."],
  ["How do I talk to someone?", "Use the contact form below and we will reply by email."],
];

const wrap = "mx-auto max-w-6xl px-6";
const label = "font-mono text-xs uppercase tracking-widest text-muted";
const btn = "inline-block px-6 py-3 text-sm font-semibold";

function Shot({ src, alt, className = "", priority = false }) {
  return (
    <img
      src={`/images/${src}`}
      alt={alt}
      width={1700}
      height={940}
      loading={priority ? "eager" : "lazy"}
      className={`block h-auto w-full border border-line ${className}`}
    />
  );
}

function Section({ id, n, title, intro, tone = "", children }) {
  return (
    <section id={id} className={`border-t border-line py-20 md:py-28 ${tone}`}>
      <div className={wrap}>
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className={label}>{n}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          </div>
          {intro && <p className="max-w-xl text-lg leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-3`}>
          <a href="#top" className="font-brand text-lg tracking-wide">Fleetrust</a>
          <nav aria-label="Main" className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
            {nav.map(([name, href]) => (
              <a key={href} href={href} className="hover:text-text">{name}</a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="py-20 md:py-28">
          <div className={wrap}>
            {/* <p className={label}>Air tour operations software</p> */}
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Run every flight, pilot and booking from one place.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Fleetrust keeps your air tour operation organized, so you spend less time on spreadsheets and more
              time flying.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className={`${btn} bg-primary text-white hover:bg-[#0b5ed7]`}>Get Fleetrust</a>
              <a href="#platform" className={`${btn} border border-ink hover:bg-paper`}>See the platform</a>
            </div>

            <Shot src="1.png" alt="Fleetrust booking calendar in month view" className="mt-16" priority />
          </div>
        </section>

        <Section
          id="what"
          n="01"
          title="What is Fleetrust"
          intro="Fleetrust is the way to start digitalizing your bookings, aircrafts, pilots and passengers together from your device."
          tone="bg-paper"
        >
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <div key={t} className="bg-white p-6">
                <p className="font-mono text-xs text-primary">0{i + 1}</p>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
          <dl className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {benefits.map(([t, d]) => (
              <div key={t} className="border-t border-ink pt-4">
                <dt className="font-semibold">{t}</dt>
                <dd className="mt-1 text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section
          id="platform"
          n="02"
          title="Platform"
          intro="Everything your operation needs, from the first booking to the boarding gate. Each tool is made to be learned in minutes."
        >
          {shots.map(({ title, text, imgs }) => (
            <div key={title} className="border-t border-line py-12 first:border-t-0 first:pt-0">
              <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="max-w-xl text-muted">{text}</p>
              </div>
              <div className={`mt-6 grid gap-4 ${imgs.length > 1 ? "lg:grid-cols-2" : ""}`}>
                {imgs.map(([src, alt]) => (
                  <Shot key={src} src={src} alt={alt} />
                ))}
              </div>
            </div>
          ))}

          <h3 className={`${label} mt-8 border-t border-ink pt-4`}>Also in the platform</h3>
          <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {platform.map(([t, d]) => (
              <div key={t} className="bg-white p-6">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="features" n="03" title="New Features" intro="We keep improving Fleetrust with what operators ask for." tone="bg-paper">
          <ul className="border-b border-line">
            {features.map(([t, d]) => (
              <li key={t} className="grid gap-1 border-t border-line py-5 md:grid-cols-[2fr_3fr] md:gap-12">
                <h3 className="font-semibold">
                  {t} <span className="ml-2 font-mono text-[11px] uppercase text-primary">New</span>
                </h3>
                <p className="text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </Section>

        <section id="download" className="bg-ink py-20 text-white md:py-28">
          <div className={`${wrap} grid gap-12 md:grid-cols-2`}>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/50">04</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Download</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                Install the Fleetrust Android app, or open it in your browser. Same account, same schedule.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={apk} download className={`${btn} bg-primary text-white hover:bg-[#0b5ed7]`}>
                  Download for Android
                </a>
                <a href={app} className={`${btn} border border-white/40 hover:bg-white/10`}>Open web app</a>
              </div>
              <p className="mt-3 font-mono text-xs text-white/50">Android APK, version {version}</p>
            </div>
            <ol className="self-end border-t border-white/20">
              {installSteps.map((s, i) => (
                <li key={s} className="flex gap-4 border-b border-white/20 py-4 text-white/80">
                  <span className="font-mono text-xs text-white/50">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Section id="faq" n="05" title="FAQ" intro="Cannot find what you need? Use the contact form below.">
          <div className="border-b border-line">
            {faqs.map(([q, a], i) => (
              <details key={q} name="faq" open={i === 0} className="group border-t border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden className="font-mono text-muted group-open:hidden">+</span>
                  <span aria-hidden className="hidden font-mono text-muted group-open:inline">&minus;</span>
                </summary>
                <p className="max-w-2xl pb-5 leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          n="06"
          title="Contact"
          intro="Tell us a bit about your operation. We reply by email, usually within one business day."
          tone="bg-paper"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
            <p className="text-muted">
              Or write directly to <a href={`mailto:${email}`} className="font-medium text-primary underline">{email}</a>
            </p>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-8">
        <div className={`${wrap} flex flex-wrap justify-between gap-4 text-sm text-muted`}>
          <span className="font-brand text-text">Fleetrust</span>
          <span>© {new Date().getFullYear()} Fleetrust. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
