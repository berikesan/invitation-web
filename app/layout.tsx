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
  title: "The Wedding of Dewax & Chika",
  description: "Om Swastiastu. Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Dewax & Chika. 4 April 2026.",
  icons: {
    icon: "/couple.png",
  },
  openGraph: {
    title: "The Wedding of Dewax & Chika",
    description: "Undangan Pernikahan Dewax & Chika • 4 April 2026 • Buleleng, Bali.",
    images: [{ url: "/couple.png" }],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
