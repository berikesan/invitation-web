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
          key="cover-2"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 1.2, ease: [0.45, 0, 0.55, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F9F7F4] overflow-hidden"
        >
          {/* Subtle background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#E8D5B7/40,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#E8D5B7/30,transparent_60%)]" />

          <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-md w-full">
            {/* Circular image frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative w-56 h-56 md:w-72 md:h-72 mb-10"
            >
              <div className="w-full h-full rounded-full overflow-hidden border border-[#C8A96E] shadow-sm">
                <Image
                  src={coupleImg}
                  alt="Dewax & Chika"
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Thin outer ring */}
              <div className="absolute inset-[-6px] rounded-full border border-[#C8A96E]/30 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-5 w-full"
            >
              {/* Divider */}
              <div className="flex items-center gap-4 justify-center">
                <div className="h-px w-16 bg-[#C8A96E]/40" />
                <span className="text-[#C8A96E] text-[10px] uppercase tracking-[0.3em] font-light">Wedding Invitation</span>
                <div className="h-px w-16 bg-[#C8A96E]/40" />
              </div>

              <h1 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] tracking-wide leading-snug">
                Dewax & Chika
              </h1>

              <div className="space-y-1">
                <p className="text-[10px] text-stone-400 font-light tracking-widest uppercase">
                  Kepada Yth.
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-[#1A1A1A] tracking-tight">
                  {guestName}
                </h2>
              </div>

              <p className="text-[10px] md:text-xs text-stone-400 max-w-[260px] mx-auto leading-relaxed">
                Dengan hormat, kami mengundang kehadiran Anda di hari istimewa kami.
              </p>

              {/* Divider */}
              <div className="h-px w-32 bg-[#C8A96E]/30 mx-auto" />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpen}
                className="mt-4 border border-[#1A1A1A] text-[#1A1A1A] px-10 py-3 rounded-none shadow-none transition-all font-light text-[10px] tracking-[0.3em] uppercase hover:bg-[#1A1A1A] hover:text-[#F9F7F4] mx-auto flex"
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
