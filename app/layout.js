import "../styles/globals.css";
import { Providers } from "./components/Providers";

export const metadata = {
  title: "Victor Pacheco | Full Stack Developer",
  description:
    "Portfolio de Victor Pacheco, Full Stack Developer especializado en React.js, Next.js, Node.js y más. Proyectos reales, código limpio.",
  authors: [{ name: "Victor Pacheco" }],
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio", "Victor Pacheco"],
  openGraph: {
    title: "Victor Pacheco | Full Stack Developer",
    description:
      "Full Stack Developer especializado en React.js, Next.js y Node.js. Mirá mis proyectos y ponete en contacto.",
    url: "https://portfolio-orpin-nu-45.vercel.app",
    siteName: "Victor Pacheco Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Pacheco | Full Stack Developer",
    description: "Full Stack Developer — React, Next.js, Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
