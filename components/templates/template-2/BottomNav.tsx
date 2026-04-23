"use client";

import { motion } from "framer-motion";
import { Home, Heart, CalendarDays, GalleryHorizontal, Music } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
}

export default function BottomNav({ isPlaying, onToggleMusic }: BottomNavProps) {
  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "#home" },
    { icon: <Heart className="w-5 h-5" />, label: "Mempelai", href: "#couple" },
    { icon: <CalendarDays className="w-5 h-5" />, label: "Acara", href: "#events" },
    { icon: <GalleryHorizontal className="w-5 h-5" />, label: "Galeri", href: "#gallery" },
    {
      icon: (
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
        >
          <Music className="w-5 h-5" />
        </motion.div>
      ),
      label: "Musik",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        onToggleMusic();
      },
    },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg"
    >
      <nav className="bg-[#1A1A1A]/90 backdrop-blur-2xl rounded-full shadow-2xl px-6 py-3 flex items-center justify-around border border-white/10">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            {item.label === "Musik" ? (
              <button
                onClick={item.onClick}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all duration-300",
                  isPlaying ? "text-[#C8A96E]" : "text-[#C8A96E]/40"
                )}
              >
                {item.icon}
                {isPlaying && (
                  <motion.div
                    layoutId="music-indicator-2"
                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#C8A96E] rounded-full"
                  />
                )}
              </button>
            ) : (
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href!)}
                className="flex flex-col items-center gap-1 text-[#C8A96E]/60 hover:text-[#C8A96E] transition-colors"
              >
                {item.icon}
              </a>
            )}
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}
