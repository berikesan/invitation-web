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
  }
};

export default function CoupleSection() {
  return (
    <section className="py-24 px-8 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-bali-gold uppercase tracking-[0.4em] text-[10px] md:text-sm font-bold mb-2 block">The Couple</span>
          <h2 className="text-4xl md:text-6xl font-serif text-deep-crimson">Mempelai</h2>
        </div>

        <div className="md:flex md:items-center md:justify-center md:gap-12 lg:gap-24 space-y-24 md:space-y-0 max-w-5xl mx-auto">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-48 h-64 md:w-64 md:h-80 mx-auto mb-6 rounded-t-full border-4 border-bali-gold overflow-hidden shadow-xl">
              <Image src={couple.groom.image} alt={couple.groom.name} fill sizes="(max-width: 768px) 192px, 256px" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-deep-crimson mb-2">{couple.groom.name}</h2>
            <p className="text-sm md:text-lg font-semibold text-stone-800 mb-4">{couple.groom.fullName}</p>
            <p className="text-xs md:text-sm text-stone-500 leading-relaxed px-10 italic">{couple.groom.parents}</p>
          </motion.div>

          {/* Ornament (Hidden on desktop) */}
          <div className="flex md:hidden justify-center items-center gap-4 py-4">
             <div className="h-px w-12 bg-bali-gold/30" />
             <span className="text-bali-gold text-2xl">✨</span>
             <div className="h-px w-12 bg-bali-gold/30" />
          </div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:flex-1"
          >
            <div className="relative w-48 h-64 md:w-64 md:h-80 mx-auto mb-6 rounded-t-full border-4 border-bali-gold overflow-hidden shadow-xl">
              <Image src={couple.bride.image} alt={couple.bride.name} fill sizes="(max-width: 768px) 192px, 256px" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <h2 className="text-3xl md:text-5xl font-accent text-deep-crimson mb-2">{couple.bride.name}</h2>
            <p className="text-sm md:text-lg font-semibold text-stone-800 mb-4">{couple.bride.fullName}</p>
            <p className="text-xs md:text-sm text-stone-500 leading-relaxed px-10 italic">{couple.bride.parents}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
