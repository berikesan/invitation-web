"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import coupleImg from "@/public/couple.png";

const events = [
  {
    title: "Resepsi Pernikahan",
    label: "Resepsi",
    date: "Sabtu, 20 Juni 2026",
    time: "18:00 WITA - Selesai",
    location: "Ayana Resort & Spa, Jimbaran",
    mapUrl: "https://maps.google.com",
  },
];

const targetDate = new Date("2026-06-20T10:00:00");

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <div className="flex gap-3 md:gap-5 justify-center py-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="w-16 h-20 md:w-24 md:h-28 flex flex-col items-center justify-center border border-[#D4AF37]/40 relative"
          style={{ boxShadow: "inset 0 0 15px rgba(212,175,55,0.05)" }}
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/50" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4AF37]/50" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4AF37]/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/50" />
          <span className="text-xl md:text-3xl font-serif text-[#D4AF37] tabular-nums">{item.value}</span>
          <span className="text-[9px] uppercase tracking-widest text-[#E5E4E2]/40 mt-1">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="bg-[#1A1A2E]">
      {/* Countdown */}
      <div className="py-20 px-8 text-center border-b border-[#D4AF37]/10">
        <span className="text-[#D4AF37]/40 text-[9px] uppercase tracking-[0.6em] font-light block mb-4">
          Menghitung Hari
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] tracking-widest uppercase mb-2">
          Menuju Hari Bahagia
        </h2>
        <Countdown />
      </div>

      {/* Event detail */}
      <div className="relative min-h-[85vh] flex items-center justify-center py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={coupleImg} alt="Background" fill sizes="100vw" className="object-cover opacity-20 grayscale" />
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#1A1A2E] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#1A1A2E] to-transparent z-10" />
          <div className="absolute inset-0 bg-[#0D0D1A]/60" />
        </div>

        <div className="relative z-20 max-w-xl w-full px-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-card p-10 md:p-14 flex flex-col items-center text-center relative"
            >
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D4AF37]/40" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#D4AF37]/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#D4AF37]/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]/40" />

              <span className="text-[9px] font-light text-[#D4AF37]/50 tracking-[0.6em] uppercase mb-8">
                The Celebration
              </span>

              <h2 className="text-4xl md:text-6xl font-accent text-[#D4AF37] mb-10 leading-relaxed italic">
                {event.label}
              </h2>

              <div className="w-16 h-px bg-[#D4AF37]/30 mb-10" />

              <div className="space-y-6 text-sm text-[#E5E4E2]/50 mb-12 w-full">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#D4AF37]/50" />
                  <span className="font-light text-[#E5E4E2]/80 tracking-wide">{event.date}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-5 h-5 text-[#D4AF37]/50" />
                  <span className="tracking-wide">{event.time}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4AF37]/50" />
                  <span className="italic max-w-[240px] leading-relaxed">{event.location}</span>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.04, backgroundColor: "rgba(212,175,55,0.1)" }}
                whileTap={{ scale: 0.96 }}
                href={event.mapUrl}
                target="_blank"
                className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-light text-[10px] uppercase tracking-[0.4em] transition-all"
              >
                Buka Lokasi Map
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
