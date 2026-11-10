import "./globals.css";
import { Michroma, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const michroma = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-michroma" });
const plex = IBM_Plex_Sans({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-plex" });
const plexMono = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-plex-mono" });

const title = "Fleetrust | Run every flight, pilot and booking from one place";
const description =
  "Fleetrust keeps your air tour operation organized: bookings, aircraft, pilots and passengers in one simple app.";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, type: "website", siteName: "Fleetrust" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${michroma.variable} ${plex.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
