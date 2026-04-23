"use client";

import { motion } from "framer-motion";
import { Home, Heart, CalendarCheck, Camera, Music } from "lucide-react";
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
    { icon: <CalendarCheck className="w-5 h-5" />, label: "Acara", href: "#events" },
    { icon: <Camera className="w-5 h-5" />, label: "Galeri", href: "#gallery" },
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
      <nav className="bg-[#B76E79]/90 backdrop-blur-2xl rounded-2xl shadow-2xl p-4 flex items-center justify-around border border-white/20">
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
                  isPlaying ? "text-[#FDF8F0]" : "text-[#FDF8F0]/40"
                )}
              >
                {item.icon}
                {isPlaying && (
                  <motion.div
                    layoutId="music-indicator-4"
                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#F7E7CE] rounded-full"
                  />
                )}
              </button>
            ) : (
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href!)}
                className="flex flex-col items-center gap-1 text-[#FDF8F0]/70 hover:text-[#FDF8F0] transition-colors"
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
