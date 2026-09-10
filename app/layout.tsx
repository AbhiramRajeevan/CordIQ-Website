import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { FloatingContact } from "@/components/FloatingContact";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CordIQ | IT, Web, CCTV, Networking & AMC in Pune",
  description:
    "CordIQ is a Pune-based IT company offering website & web app development, CCTV installation, IT networking, office IT setup, and computer AMC for schools, clinics, offices and SMEs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint so the correct theme class is already on
            <html> by the time anything renders — avoids a flash of the wrong
            theme. suppressHydrationWarning above is required because this
            script can change the class attribute React didn't render itself. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark)document.documentElement.classList.add('dark');}catch(e){}})();",
          }}
        />
      </head>
      <body className="font-body antialiased pb-[52px] md:pb-0">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
