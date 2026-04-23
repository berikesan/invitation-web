"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Cover from "@/components/templates/template-5/Cover";
import CoupleSection from "@/components/templates/template-5/Couple";
import EventsSection from "@/components/templates/template-5/Events";
import { GallerySection, RSVPSection } from "@/components/templates/template-5/BottomSections";
import BottomNav from "@/components/templates/template-5/BottomNav";
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
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 flex">
      <div className="relative w-full h-full flex">
        {[0, 1, 2].map((colIdx) => (
          <div key={colIdx} className={cn(
            "relative flex-1 h-full overflow-hidden",
            colIdx !== 1 && "hidden md:block border-x border-[#D4AF37]/15"
          )}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 8, ease: "linear" } }}
                className="absolute inset-0"
              >
                <Image src={images[index]} alt={`Couple ${index}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" priority />
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
    document.body.style.overflow = isOpened ? "auto" : "hidden";
  }, [isOpened]);

  const guestName = searchParams.get("to") || "";

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#0D0D1A] scroll-smooth">
      <AudioPlayer isOpened={isOpened} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Cover onOpen={() => setIsOpened(true)} isOpened={isOpened} />

      {isOpened && (
        <div id="home" className="w-full min-h-screen relative transition-all duration-1000">
          {/* Hero */}
          <section className="h-screen relative flex flex-col items-center justify-end pb-32 md:pb-48 text-center overflow-hidden bg-[#0D0D1A]">
            <HeroSlideshow />

            {/* Dark overlay for cinematic feel */}
            <div className="absolute inset-0 z-10 bg-[#0D0D1A]/50 pointer-events-none" />

            {/* Bottom fade to midnight */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#0D0D1A] to-transparent z-20 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="relative z-30 max-w-2xl px-6"
            >
              <span className="text-[#D4AF37]/70 tracking-[0.6em] text-[9px] uppercase mb-6 block font-light drop-shadow-sm">
                The Wedding of
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-[#D4AF37] mb-6 tracking-widest uppercase leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                Dewax <span className="text-[#E5E4E2]/80 font-light">&</span> Chika
              </h1>
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-16 bg-[#D4AF37]/40" />
                <span className="text-[#D4AF37]/50 text-xs">◆</span>
                <div className="h-px w-16 bg-[#D4AF37]/40" />
              </div>
              <p className="text-[10px] md:text-sm text-[#E5E4E2]/60 font-light uppercase tracking-[0.5em] mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
                Buleleng, 4 April 2026
              </p>
              <p className="text-[10px] md:text-xs text-[#E5E4E2]/40 font-light italic max-w-xs mx-auto drop-shadow-sm">
                &ldquo;A love as eternal as the night sky.&rdquo;
              </p>
            </motion.div>
          </section>

          <div id="couple" className="scroll-mt-20"><CoupleSection /></div>
          <div id="events" className="scroll-mt-20"><EventsSection /></div>
          <div id="gallery" className="scroll-mt-20"><GallerySection /></div>
          <div id="rsvp" className="scroll-mt-20"><RSVPSection guestName={guestName} /></div>

          <BottomNav isPlaying={isPlaying} onToggleMusic={() => setIsPlaying(!isPlaying)} />
        </div>
      )}
    </main>
  );
}

export default function Template5Page() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#0D0D1A] text-[#D4AF37] font-serif tracking-widest uppercase text-xl">Loading...</div>}>
      <InvitationContent />
    </Suspense>
  );
}
