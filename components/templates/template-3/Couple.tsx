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
    <section className="py-28 px-8 bg-white overflow-hidden relative">
      {/* Subtle botanical bg */}
      <div className="absolute top-0 right-0 text-[#3D5A3E]/5 text-[180px] select-none leading-none">🌿</div>
      <div className="absolute bottom-0 left-0 text-[#3D5A3E]/5 text-[180px] select-none leading-none rotate-180">🌿</div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#8FAF8A] uppercase tracking-[0.4em] text-[9px] font-light mb-3 block">
            The Couple
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#3D5A3E]">Mempelai</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-[#C4622D]/30" />
            <span className="text-[#C4622D]/60 text-sm">✦</span>
            <div className="h-px w-12 bg-[#C4622D]/30" />
          </div>
        </div>

        <div className="md:flex md:items-start md:justify-center md:gap-16 space-y-20 md:space-y-0">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-72 h-[480px] md:w-[360px] md:h-[600px] mx-auto mb-8">
              <div className="absolute inset-[-6px] rounded-3xl border border-[#C4622D]/30" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#3D5A3E] shadow-lg">
                <Image
                  src={couple.groom.image}
                  alt={couple.groom.name}
                  fill
                  sizes="(max-width: 768px) 320px, 440px"
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#C4622D] mb-2">{couple.groom.name}</h2>
            <p className="text-sm text-[#3D5A3E] mb-3 font-medium">{couple.groom.fullName}</p>
            <p className="text-xs text-[#6B4226]/60 leading-relaxed px-8 italic">{couple.groom.parents}</p>
          </motion.div>

          {/* Separator */}
          <div className="flex md:hidden justify-center items-center gap-3 py-2">
            <div className="h-px w-12 bg-[#8FAF8A]/50" />
            <span className="text-[#8FAF8A] text-xl">🌿</span>
            <div className="h-px w-12 bg-[#8FAF8A]/50" />
          </div>
          <div className="hidden md:flex flex-col items-center justify-center gap-4 pt-10">
            <div className="w-px h-20 bg-[#8FAF8A]/40" />
            <span className="text-[#8FAF8A] text-xl">🌿</span>
            <div className="w-px h-20 bg-[#8FAF8A]/40" />
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
              <div className="absolute inset-[-6px] rounded-3xl border border-[#C4622D]/30" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#3D5A3E] shadow-lg">
                <Image
                  src={couple.bride.image}
                  alt={couple.bride.name}
                  fill
                  sizes="(max-width: 768px) 320px, 440px"
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#C4622D] mb-2">{couple.bride.name}</h2>
            <p className="text-sm text-[#3D5A3E] mb-3 font-medium">{couple.bride.fullName}</p>
            <p className="text-xs text-[#6B4226]/60 leading-relaxed px-8 italic">{couple.bride.parents}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
