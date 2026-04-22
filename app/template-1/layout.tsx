import type { Metadata } from "next";
import "./template.css";

export const metadata: Metadata = {
  title: "The Wedding of Dewax & Chika",
  description: "Om Swastiastu. Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Dewax & Chika. 4 April 2026.",
  icons: {
    icon: "/couple.png",
  },
  openGraph: {
    title: "The Wedding of Dewax & Chika",
    description: "Undangan Pernikahan Dewax & Chika • 4 April 2026 • Buleleng, Bali.",
    images: [{ url: "https://berikesan.com/invitation/couple.png" }],
    type: "website",
  },
};

export default function Template1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
