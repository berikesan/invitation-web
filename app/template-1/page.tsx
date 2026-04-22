"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Cover from "@/components/templates/template-1/Cover";
import CoupleSection from "@/components/templates/template-1/Couple";
import EventsSection from "@/components/templates/template-1/Events";
import { GallerySection, RSVPSection } from "@/components/templates/template-1/BottomSections";
import BottomNav from "@/components/shared/BottomNav";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import AudioPlayer from "@/components/shared/AudioPlayer";
import couple1 from "@/public/couple.png";
import couple2 from "@/public/couple-2.png";
import couple3 from "@/public/couple-3.png";

function HeroSlideshow() {
  const images = [couple1, couple2, couple3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 flex">
        <div className="relative w-full h-full flex">
          {[0, 1, 2].map((colIdx) => (
            <div key={colIdx} className={cn(
              "relative flex-1 h-full overflow-hidden",
              colIdx !== 1 && "hidden md:block border-x border-white/5"
            )}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 8, ease: "linear" }
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[index]}
                    alt={`Couple variant ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
    </div>
  );
}

function InvitationContent() {
  const searchParams = useSearchParams();
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const toggleMusic = () => setIsPlaying(!isPlaying);
  const guestName = searchParams.get("to") || "";

  return (
    <main className="min-h-screen relative flex flex-col items-center selection:bg-bali-gold selection:text-deep-crimson bg-stone-50 scroll-smooth">
      <AudioPlayer isOpened={isOpened} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Cover onOpen={handleOpen} isOpened={isOpened} />

      {isOpened && (
        <div id="home" className="w-full bg-white min-h-screen shadow-2xl relative transition-all duration-1000">
          <section className="h-screen relative flex flex-col items-center justify-end pb-32 md:pb-48 text-center overflow-hidden bg-stone-900">
            <HeroSlideshow />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="relative z-30 max-w-2xl px-4"
            >
              <span className="text-white tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 block font-black leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                The Wedding of
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tighter leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,1)] font-bold">
                Dewax <span className="font-sans font-light">&</span> Chika
              </h1>
              <p className="text-xs md:text-lg text-white font-black uppercase tracking-[0.4em] drop-shadow-[0_2px_6px_rgba(0,0,0,1)] mb-4">
                BULELENG, 4 APRIL 2026
              </p>
              <p className="text-[10px] md:text-sm text-white/90 font-medium italic max-w-[280px] md:max-w-md mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-6">
                &ldquo;Om Atmanepada – Dua jiwa, satu dharma.&rdquo;
              </p>
            </motion.div>

            {/* Atmospheric Drifting Fog Effect */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] z-20 pointer-events-none">
              <motion.div
                animate={{ x: [-100, 100], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_30%,transparent_70%)] blur-3xl scale-y-50 translate-y-20"
              />
              <motion.div
                animate={{ x: [100, -100], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_20%,transparent_60%)] blur-3xl scale-y-75 translate-y-32"
              />
              <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-white via-white/80 to-transparent" />
            </div>
          </section>

          <div id="couple" className="scroll-mt-20"><CoupleSection /></div>
          <div id="events" className="scroll-mt-20"><EventsSection /></div>
          <div id="gallery" className="scroll-mt-20"><GallerySection /></div>
          <div id="rsvp" className="scroll-mt-20"><RSVPSection guestName={guestName} /></div>

          <BottomNav isPlaying={isPlaying} onToggleMusic={toggleMusic} />
        </div>
      )}
    </main>
  );
}

export default function Template1Page() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-deep-crimson text-bali-gold font-serif italic text-xl">Loading...</div>}>
      <InvitationContent />
    </Suspense>
  );
}
