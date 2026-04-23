import type { Metadata } from "next";
import "./template.css";

export const metadata: Metadata = {
  title: "The Wedding of Dewax & Chika",
  description: "Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Dewax & Chika. 20 Juni 2026.",
  icons: { icon: "/couple.png" },
  openGraph: {
    title: "The Wedding of Dewax & Chika",
    description: "Undangan Pernikahan Dewax & Chika • 20 Juni 2026.",
    images: [{ url: "https://berikesan.com/invitation/couple.png" }],
    type: "website",
  },
};

export default function Template3Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
