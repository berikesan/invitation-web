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
    <section className="py-28 px-8 bg-[#0D0D1A] overflow-hidden relative">
      {/* Subtle sapphire glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1B2A6B]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37]/50 uppercase tracking-[0.6em] text-[9px] font-light mb-4 block">
            The Couple
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37] tracking-widest uppercase">Mempelai</h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-[#D4AF37]/30" />
            <span className="text-[#D4AF37]/40 text-xs">◆</span>
            <div className="h-px w-16 bg-[#D4AF37]/30" />
          </div>
        </div>

        <div className="md:flex md:items-start md:justify-center md:gap-16 space-y-20 md:space-y-0">
          {/* Groom — ornate rectangular frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-72 h-[480px] md:w-[360px] md:h-[600px] mx-auto mb-8">
              <div className="absolute inset-[-6px] border border-[#D4AF37]/20 pointer-events-none" />
              <div
                className="relative w-full h-full overflow-hidden border-2 border-[#D4AF37]"
                style={{ boxShadow: "inset 0 0 20px rgba(212,175,55,0.08), 0 0 30px rgba(212,175,55,0.1)" }}
              >
                <div className="absolute inset-[4px] border border-[#D4AF37]/20 z-10 pointer-events-none" />
                <Image
                  src={couple.groom.image}
                  alt={couple.groom.name}
                  fill
                  sizes="(max-width: 768px) 320px, 440px"
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#D4AF37] mb-2 italic">{couple.groom.name}</h2>
            <p className="text-sm text-[#E5E4E2]/60 mb-3 font-light tracking-wide">{couple.groom.fullName}</p>
            <div className="w-10 h-px bg-[#D4AF37]/30 mx-auto mb-3" />
            <p className="text-xs text-[#E5E4E2]/40 leading-relaxed px-8 italic">{couple.groom.parents}</p>
          </motion.div>

          {/* Separator */}
          <div className="flex md:hidden justify-center items-center gap-3 py-2">
            <div className="h-px w-12 bg-[#D4AF37]/30" />
            <span className="text-[#D4AF37]/40 text-xs">◆</span>
            <div className="h-px w-12 bg-[#D4AF37]/30" />
          </div>
          <div className="hidden md:flex flex-col items-center justify-center gap-4 pt-14">
            <div className="w-px h-16 bg-[#D4AF37]/20" />
            <span className="text-[#D4AF37]/40 text-xs">◆</span>
            <div className="w-px h-16 bg-[#D4AF37]/20" />
          </div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-72 h-[480px] md:w-[360px] md:h-[600px] mx-auto mb-8">
              <div className="absolute inset-[-6px] border border-[#D4AF37]/20 pointer-events-none" />
              <div
                className="relative w-full h-full overflow-hidden border-2 border-[#D4AF37]"
                style={{ boxShadow: "inset 0 0 20px rgba(212,175,55,0.08), 0 0 30px rgba(212,175,55,0.1)" }}
              >
                <div className="absolute inset-[4px] border border-[#D4AF37]/20 z-10 pointer-events-none" />
                <Image
                  src={couple.bride.image}
                  alt={couple.bride.name}
                  fill
                  sizes="(max-width: 768px) 320px, 440px"
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#D4AF37] mb-2 italic">{couple.bride.name}</h2>
            <p className="text-sm text-[#E5E4E2]/60 mb-3 font-light tracking-wide">{couple.bride.fullName}</p>
            <div className="w-10 h-px bg-[#D4AF37]/30 mx-auto mb-3" />
            <p className="text-xs text-[#E5E4E2]/40 leading-relaxed px-8 italic">{couple.bride.parents}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
