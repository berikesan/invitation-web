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
          key="cover"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 1.2, ease: [0.45, 0, 0.55, 1] } 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg w-full">
            
            {/* Artistic Frame for Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 mb-10"
            >
              <div className="absolute inset-0 bg-[#D4A373]/20 rounded-full blur-2xl" />
              <div 
                className="relative w-full h-full overflow-hidden shadow-2xl"
                style={{ 
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.1)"
                }}
              >
                <Image
                  src={coupleImg}
                  alt="Dewax & Chika"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover scale-110"
                  priority
                />
              </div>
              {/* Botanical Decoration (CSS representation) */}
              <div className="absolute -top-4 -left-4 w-12 h-12 text-green-800/20">🌿</div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 text-green-800/20 rotate-180">🌿</div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-3xl md:text-4xl font-serif text-[#8B5E3C] tracking-wide">
                Dewax & Chika
              </h1>
              
              <div className="space-y-1">
                <p className="text-[10px] md:text-sm text-stone-500 font-light">
                  Kpd Bpk/Ibu/Saudara/i
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-stone-800 tracking-tight">
                  {guestName}
                </h2>
              </div>

              <p className="text-[10px] md:text-xs text-stone-500 max-w-[280px] mx-auto leading-relaxed">
                Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpen}
                className="mt-8 bg-[#3F3F3F] text-white px-10 py-3 rounded-full shadow-lg transition-colors font-medium text-xs tracking-widest uppercase flex items-center gap-2 mx-auto"
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

