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
          key="cover-3"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 1.2, ease: [0.45, 0, 0.55, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F5EFE0] overflow-hidden"
        >
          {/* Botanical corner decorations */}
          <div className="absolute top-6 left-6 text-[#3D5A3E]/15 text-6xl select-none">🌿</div>
          <div className="absolute top-6 right-6 text-[#3D5A3E]/15 text-6xl select-none rotate-90">🌿</div>
          <div className="absolute bottom-6 left-6 text-[#3D5A3E]/15 text-6xl select-none -rotate-90">🌿</div>
          <div className="absolute bottom-6 right-6 text-[#3D5A3E]/15 text-6xl select-none rotate-180">🌿</div>

          <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-md w-full">
            {/* Rounded rect image frame with double border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative mb-10"
            >
              {/* Outer border */}
              <div className="absolute inset-[-8px] rounded-3xl border border-[#C4622D]/40 pointer-events-none" />
              {/* Inner frame */}
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden border-2 border-[#3D5A3E] shadow-xl">
                <Image
                  src={coupleImg}
                  alt="Dewax & Chika"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <span className="text-[#8FAF8A] text-[9px] uppercase tracking-[0.4em] font-light">
                Garden Wedding
              </span>

              <h1 className="text-3xl md:text-4xl font-serif text-[#3D5A3E]">
                Dewax & Chika
              </h1>

              <div className="flex items-center gap-3 justify-center">
                <div className="h-px w-10 bg-[#C4622D]/40" />
                <span className="text-[#C4622D]/60 text-sm">✦</span>
                <div className="h-px w-10 bg-[#C4622D]/40" />
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-[#6B4226]/60 font-light">Kepada Yth.</p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#3D5A3E]">{guestName}</h2>
              </div>

              <p className="text-[10px] text-[#6B4226]/60 max-w-[260px] mx-auto leading-relaxed font-light">
                Dengan penuh kebahagiaan, kami mengundang kehadiran Anda.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpen}
                className="mt-6 bg-[#3D5A3E] text-[#F5EFE0] px-10 py-3 rounded-full shadow-lg transition-colors font-medium text-[10px] tracking-widest uppercase hover:bg-[#2d4330] mx-auto flex"
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
