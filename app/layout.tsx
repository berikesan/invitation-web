import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berikesan — Invitation Templates",
  description: "Digital wedding invitation templates by berikesan.com",
  openGraph: {
    title: "Berikesan — Invitation Templates",
    description: "Digital wedding invitation templates by berikesan.com",
    url: "https://berikesan.com/invitation",
    siteName: "Berikesan",
    images: [
      {
        url: "https://berikesan.com/invitation/logo-opengraph.png",
        width: 1000,
        height: 1000,
        alt: "Berikesan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berikesan — Invitation Templates",
    description: "Digital wedding invitation templates by berikesan.com",
    images: ["https://berikesan.com/invitation/logo-opengraph.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
