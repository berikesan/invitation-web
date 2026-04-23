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
          className="bg-[#3D5A3E] text-[#F5EFE0] w-16 h-20 md:w-24 md:h-28 rounded-2xl flex flex-col items-center justify-center shadow-md"
        >
          <span className="text-xl md:text-3xl font-bold tabular-nums">{item.value}</span>
          <span className="text-[9px] uppercase tracking-widest opacity-60 mt-1">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="bg-[#F5EFE0]">
      {/* Countdown */}
      <div className="py-20 px-8 text-center">
        <span className="text-[#8FAF8A] text-[9px] uppercase tracking-[0.4em] font-light block mb-4">
          Menghitung Hari
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#3D5A3E] mb-2">Menuju Hari Bahagia</h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-10 bg-[#C4622D]/30" />
          <span className="text-[#C4622D]/40 text-sm">✦</span>
          <div className="h-px w-10 bg-[#C4622D]/30" />
        </div>
        <Countdown />
      </div>

      {/* Event detail with bg image */}
      <div className="relative min-h-[85vh] flex items-center justify-center py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={coupleImg}
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30 saturate-50"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F5EFE0] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F5EFE0] to-transparent z-10" />
          <div className="absolute inset-0 bg-[#3D5A3E]/20" />
        </div>

        <div className="relative z-20 max-w-xl w-full px-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-card p-10 md:p-14 rounded-3xl flex flex-col items-center text-center"
            >
              <span className="text-[9px] font-light text-[#C4622D] tracking-[0.4em] uppercase mb-6">
                The Celebration
              </span>

              <h2 className="text-4xl md:text-6xl font-accent text-[#3D5A3E] mb-10 leading-relaxed">
                {event.label}
              </h2>

              <div className="space-y-6 text-sm text-[#6B4226]/70 mb-10 w-full">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C4622D]/50" />
                  <span className="font-medium text-[#3D5A3E]">{event.date}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C4622D]/50" />
                  <span>{event.time}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C4622D]/50" />
                  <span className="italic max-w-[240px] leading-relaxed">{event.location}</span>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={event.mapUrl}
                target="_blank"
                className="bg-[#3D5A3E] text-[#F5EFE0] px-10 py-4 rounded-full font-medium text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#2d4330] transition-colors"
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
