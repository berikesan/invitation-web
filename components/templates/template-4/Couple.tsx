"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import coupleImg from "@/public/couple.png";

const couple = {
  groom: {
    name: "Dewax",
    fullName: "I Gusti Ngurah Dewantara",
    parents: "Putra dari Bapak I Wayan Sugita & Ibu Ni Ketut Rahayu",
    image: coupleImg,
  },
  bride: {
    name: "Chika",
    fullName: "Ni Luh Putu Chika Amara",
    parents: "Putri dari Bapak I Gusti Ngurah Agung & Ibu Ni Nyoman Sari",
    image: coupleImg,
  },
};

export default function CoupleSection() {
  return (
    <section className="py-28 px-8 bg-[#FDF8F0] overflow-hidden relative">
      {/* Decorative bg circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#E8A0A0]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[#F7E7CE]/30 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#E8A0A0] uppercase tracking-[0.5em] text-[9px] font-light mb-4 block">
            The Couple
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#B76E79] italic">Mempelai</h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12 bg-[#E8A0A0]/50" />
            <span className="text-[#E8A0A0] text-base">✿</span>
            <div className="h-px w-12 bg-[#E8A0A0]/50" />
          </div>
        </div>

        <div className="md:flex md:items-start md:justify-center md:gap-16 space-y-20 md:space-y-0">
          {/* Groom — arch frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-72 h-[480px] md:w-[360px] md:h-[600px] mx-auto mb-14">
              <div className="absolute inset-[-6px] rounded-tr-[120px] rounded-bl-[120px] border border-[#C97B7B]/25 pointer-events-none" />
              <div className="relative w-full h-full rounded-tr-[112px] rounded-bl-[112px] overflow-hidden border-2 border-[#B76E79] shadow-lg">
                <Image
                  src={couple.groom.image}
                  alt={couple.groom.name}
                  fill
                  sizes="(max-width: 768px) 288px, 360px"
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#B76E79] mb-2">{couple.groom.name}</h2>
            <p className="text-sm text-[#C97B7B]/80 mb-3 font-light">{couple.groom.fullName}</p>
            <div className="w-8 h-px bg-[#E8A0A0]/50 mx-auto mb-3" />
            <p className="text-xs text-[#C97B7B]/60 leading-relaxed px-8 italic">{couple.groom.parents}</p>
          </motion.div>

          {/* Separator */}
          <div className="flex md:hidden justify-center items-center gap-3 py-2">
            <div className="h-px w-12 bg-[#E8A0A0]/40" />
            <span className="text-[#E8A0A0] text-xl">✿</span>
            <div className="h-px w-12 bg-[#E8A0A0]/40" />
          </div>
          <div className="hidden md:flex flex-col items-center justify-center gap-3 pt-16">
            <div className="w-px h-16 bg-[#E8A0A0]/30" />
            <span className="text-[#E8A0A0] text-xl">✿</span>
            <div className="w-px h-16 bg-[#E8A0A0]/30" />
          </div>

          {/* Bride — arch frame, mirrored */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-72 h-[480px] md:w-[360px] md:h-[600px] mx-auto mb-14">
              <div className="absolute inset-[-6px] rounded-tl-[120px] rounded-br-[120px] border border-[#C97B7B]/25 pointer-events-none" />
              <div className="relative w-full h-full rounded-tl-[112px] rounded-br-[112px] overflow-hidden border-2 border-[#B76E79] shadow-lg">
                <Image
                  src={couple.bride.image}
                  alt={couple.bride.name}
                  fill
                  sizes="(max-width: 768px) 288px, 360px"
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#B76E79] mb-2">{couple.bride.name}</h2>
            <p className="text-sm text-[#C97B7B]/80 mb-3 font-light">{couple.bride.fullName}</p>
            <div className="w-8 h-px bg-[#E8A0A0]/50 mx-auto mb-3" />
            <p className="text-xs text-[#C97B7B]/60 leading-relaxed px-8 italic">{couple.bride.parents}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
