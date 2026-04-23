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
    <section className="py-28 px-8 bg-[#F9F7F4] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#C8A96E] uppercase tracking-[0.5em] text-[9px] md:text-xs font-light mb-4 block">
            The Couple
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">Mempelai</h2>
          <div className="w-12 h-px bg-[#C8A96E]/50 mx-auto mt-6" />
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
            <div className="relative w-72 h-[480px] md:w-[360px] md:h-[600px] mx-auto mb-8 rounded-full overflow-hidden border border-[#C8A96E]">
              <Image
                src={couple.groom.image}
                alt={couple.groom.name}
                fill
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover transition-all duration-700"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#1A1A1A] mb-2 leading-none">{couple.groom.name}</h2>
            <p className="text-sm font-light text-[#1A1A1A]/70 mb-3 tracking-wide">{couple.groom.fullName}</p>
            <div className="w-8 h-px bg-[#C8A96E]/40 mx-auto mb-3" />
            <p className="text-xs text-stone-400 leading-relaxed px-8 italic">{couple.groom.parents}</p>
          </motion.div>

          {/* Separator */}
          <div className="hidden md:flex flex-col items-center justify-center gap-3 pt-8">
            <div className="w-px h-16 bg-[#C8A96E]/30" />
            <span className="text-[#C8A96E]/60 text-lg font-serif">&</span>
            <div className="w-px h-16 bg-[#C8A96E]/30" />
          </div>

          <div className="flex md:hidden justify-center items-center gap-4">
            <div className="h-px w-12 bg-[#C8A96E]/30" />
            <span className="text-[#C8A96E]/60 text-lg font-serif">&</span>
            <div className="h-px w-12 bg-[#C8A96E]/30" />
          </div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-72 h-[480px] md:w-[360px] md:h-[600px] mx-auto mb-8 rounded-full overflow-hidden border border-[#C8A96E]">
              <Image
                src={couple.bride.image}
                alt={couple.bride.name}
                fill
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover transition-all duration-700"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-[#1A1A1A] mb-2 leading-none">{couple.bride.name}</h2>
            <p className="text-sm font-light text-[#1A1A1A]/70 mb-3 tracking-wide">{couple.bride.fullName}</p>
            <div className="w-8 h-px bg-[#C8A96E]/40 mx-auto mb-3" />
            <p className="text-xs text-stone-400 leading-relaxed px-8 italic">{couple.bride.parents}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
