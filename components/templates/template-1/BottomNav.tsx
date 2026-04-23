"use client";

import { motion } from "framer-motion";
import { Home, Users, Calendar, Image as ImageIcon, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
}

export default function BottomNav({ isPlaying, onToggleMusic }: BottomNavProps) {
  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { icon: <Home className="w-5 h-5 md:w-6 md:h-6" />, label: "Home", href: "#home" },
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, label: "Mempelai", href: "#couple" },
    { icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />, label: "Acara", href: "#events" },
    { icon: <ImageIcon className="w-5 h-5 md:w-6 md:h-6" />, label: "Galeri", href: "#gallery" },
    {
      icon: (
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
        >
          <Music2 className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      ),
      label: "Musik",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        onToggleMusic();
      }
    },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg"
    >
      <nav className="bg-[#B08968]/90 backdrop-blur-2xl rounded-4xl shadow-2xl p-4 flex items-center justify-around border border-white/20">
        {navItems.map((item, index) => {
          return (
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
                    isPlaying ? "text-white" : "text-white/40"
                  )}
                >
                  {item.icon}
                  {isPlaying && (
                    <motion.div
                      layoutId="music-indicator"
                      className="absolute -top-1 -right-1 w-2 h-2 bg-[#FFD700] rounded-full"
                    />
                  )}
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href!)}
                  className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors"
                >
                  {item.icon}
                </a>
              )}
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
}
