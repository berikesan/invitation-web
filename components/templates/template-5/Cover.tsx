"use client";

import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import coupleImg from "@/public/couple.png";

interface CoverProps {
  onOpen: () => void;
  isOpened: boolean;
}

export default function Cover({ onOpen, isOpened }: CoverProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Nama Tamu";

  return (
    <AnimatePresence mode="wait">
      {!isOpened && (
        <motion.section
          key="cover-5"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 1.2, ease: [0.45, 0, 0.55, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D1A] overflow-hidden"
        >
          {/* Full-bleed couple bg at 30% opacity */}
          <div className="absolute inset-0 z-0">
            <Image src={coupleImg} alt="Background" fill sizes="100vw" className="object-cover opacity-25" priority />
            <div className="absolute inset-0 bg-[#0D0D1A]/60" />
          </div>

          {/* Gold corner accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#D4AF37]/40 pointer-events-none" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#D4AF37]/40 pointer-events-none" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#D4AF37]/40 pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[#D4AF37]/40 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-md w-full">
            {/* Rectangular gold-bordered portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative mb-10"
            >
              {/* Outer gold border */}
              <div className="absolute inset-[-8px] border border-[#D4AF37]/25 pointer-events-none" />
              {/* Inner frame */}
              <div
                className="relative w-52 h-64 md:w-60 md:h-72 overflow-hidden border-2 border-[#D4AF37]"
                style={{ boxShadow: "inset 0 0 20px rgba(212,175,55,0.12)" }}
              >
                {/* Inner thin border */}
                <div className="absolute inset-[4px] border border-[#D4AF37]/30 z-10 pointer-events-none" />
                <Image
                  src={coupleImg}
                  alt="Dewax & Chika"
                  fill
                  sizes="(max-width: 768px) 208px, 240px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <span className="text-[#D4AF37]/60 text-[9px] uppercase tracking-[0.6em] font-light">
                Dark Luxe Wedding
              </span>

              <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] tracking-widest uppercase">
                Dewax & Chika
              </h1>

              <div className="flex items-center gap-3 justify-center">
                <div className="h-px w-10 bg-[#D4AF37]/40" />
                <span className="text-[#D4AF37]/50 text-xs">◆</span>
                <div className="h-px w-10 bg-[#D4AF37]/40" />
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-[#E5E4E2]/40 font-light tracking-widest">Kepada Yth.</p>
                <h2 className="text-xl font-light text-[#E5E4E2]">{guestName}</h2>
              </div>

              <p className="text-[10px] text-[#E5E4E2]/40 max-w-[240px] mx-auto leading-relaxed font-light">
                Dengan hormat, kami mengundang kehadiran Anda.
              </p>

              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "rgba(212,175,55,0.1)" }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpen}
                className="mt-6 border border-[#D4AF37] text-[#D4AF37] px-10 py-3 font-light text-[10px] tracking-[0.4em] uppercase transition-all mx-auto flex"
              >
                Buka Undangan
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
