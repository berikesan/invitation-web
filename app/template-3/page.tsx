"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Cover from "@/components/templates/template-3/Cover";
import CoupleSection from "@/components/templates/template-3/Couple";
import EventsSection from "@/components/templates/template-3/Events";
import { GallerySection, RSVPSection } from "@/components/templates/template-3/BottomSections";
import BottomNav from "@/components/templates/template-3/BottomNav";
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
            colIdx !== 1 && "hidden md:block border-x border-white/5"
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
    <main className="min-h-screen relative flex flex-col items-center bg-[#F5EFE0] scroll-smooth">
      <AudioPlayer isOpened={isOpened} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Cover onOpen={() => setIsOpened(true)} isOpened={isOpened} />

      {isOpened && (
        <div id="home" className="w-full min-h-screen relative transition-all duration-1000">
          {/* Hero */}
          <section className="h-screen relative flex flex-col items-center justify-end pb-28 md:pb-40 text-center overflow-hidden">
            <HeroSlideshow />

            {/* Earthy green tint overlay */}
            <div className="absolute inset-0 z-10 bg-[#3D5A3E]/25 pointer-events-none" />

            {/* Bottom fade to cream */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#F5EFE0] to-transparent z-20 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="relative z-30 max-w-xl px-6"
            >
              <span className="text-[#8FAF8A] tracking-[0.5em] text-[9px] uppercase mb-4 block font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                The Wedding of
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-5 tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Dewax <span className="font-light text-[#8FAF8A]">&</span> Chika
              </h1>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-white/40" />
                <span className="text-white/60 text-sm">🌿</span>
                <div className="h-px w-10 bg-white/40" />
              </div>
              <p className="text-[10px] text-white/80 font-light uppercase tracking-[0.4em] mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                Buleleng, 4 April 2026
              </p>
              <p className="text-[10px] text-white/60 italic max-w-xs mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                &ldquo;In the garden of life, love blooms eternal.&rdquo;
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

export default function Template3Page() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#F5EFE0] text-[#3D5A3E] font-serif text-xl">Loading...</div>}>
      <InvitationContent />
    </Suspense>
  );
}
