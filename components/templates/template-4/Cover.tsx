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
  const guestName = searchParams.get("to") || "Tamu Undangan";

  return (
    <AnimatePresence mode="wait">
      {!isOpened && (
        <motion.section
          key="cover-4"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 1.2, ease: [0.45, 0, 0.55, 1] },
          }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Full-bleed background image */}
          <Image
            src={coupleImg}
            alt="Dewax & Chika"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />

          {/* Dark gradient overlay — heavier at top and bottom */}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="absolute top-12 inset-x-0 text-center"
          >
            <span className="text-white/70 text-[9px] uppercase tracking-[0.55em] font-light">
              The Wedding of
            </span>
          </motion.div>

          {/* Couple name — upper-center */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="absolute top-[17%] inset-x-0 text-center px-8"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wide italic drop-shadow-lg">
              Dewax &amp; Chika
            </h1>
            <p className="text-white/60 text-[10px] tracking-[0.3em] mt-3 font-light">
              Kamis, 20 November 2026
            </p>
          </motion.div>

          {/* Bottom card — guest name + button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9 }}
            className="absolute bottom-0 inset-x-0 px-8 pb-14 pt-10 flex flex-col items-center text-center"
          >
            {/* Thin rose divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#E8A0A0]/60" />
              <span className="text-[#E8A0A0] text-sm">✿</span>
              <div className="h-px w-10 bg-[#E8A0A0]/60" />
            </div>

            <p className="text-white/50 text-[9px] uppercase tracking-[0.4em] font-light mb-1">
              Kepada Yth
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 drop-shadow">
              {guestName}
            </h2>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpen}
              className="border border-white/50 text-white px-10 py-3 rounded-full text-[10px] tracking-widest uppercase font-light backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors"
            >
              Buka Undangan
            </motion.button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
