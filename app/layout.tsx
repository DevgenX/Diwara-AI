import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./landing.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diwara | Voice-command your desktop workflow",
  description:
    "Diwara is a desktop AI companion that can act on your computer, navigate instantly, annotate the screen, research, run flashcard sessions, start practice exams, save presets, and replay study sessions.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Diwara | Voice-command your desktop workflow",
    description:
      "Voice-command actions, instant navigation, live annotations, research, coding help, presets, exams, replay, and multi-monitor study workflows in one desktop assistant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
