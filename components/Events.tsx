"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
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
    <div className="flex gap-2 md:gap-4 justify-center py-8">
      {items.map((item, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: i * 0.1 }}
           className="bg-[#3F3F3F] text-white w-16 h-20 md:w-24 md:h-28 rounded-xl flex flex-col items-center justify-center shadow-lg"
        >
          <span className="text-xl md:text-3xl font-bold">{item.value}</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 mt-1">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="bg-white relative">
      {/* Top Countdown Header */}
      <div className="py-20 px-8 text-center bg-stone-50 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-[#8B5E3C] mb-4">Menuju Hari Bahagia</h2>
          <Countdown />
        </div>
      </div>

      {/* Main Section with Background Image */}
      <div className="relative min-h-[90vh] flex items-center justify-center py-32 overflow-hidden">
         {/* Backdrop Couple Image with Soft Fades */}
         <div className="absolute inset-0 z-0">
            <Image 
              src="/couple.png" 
              alt="Background Couple" 
              fill 
              className="object-cover desaturate-[0.3] opacity-50" 
            />
            {/* Soft Fades for premium transitions */}
            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-stone-50 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-stone-50 to-transparent z-10" />
            <div className="absolute inset-0 bg-white/40 z-0" />
         </div>

         <div className="max-w-7xl mx-auto px-8 relative z-20 w-full flex justify-center">
            <div className="max-w-xl w-full">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/95 backdrop-blur-md p-10 md:p-14 rounded-4xl shadow-2xl border border-stone-100 flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-2"
                >
                  <span className="text-[10px] md:text-xs font-bold text-[#8B5E3C] tracking-[0.4em] uppercase mb-8 opacity-60">
                     THE CELEBRATION
                  </span>
                  
                  <h2 className="text-4xl md:text-6xl font-accent text-[#8B5E3C] mb-10 leading-relaxed">
                    {event.label}
                  </h2>

                  <div className="space-y-8 text-sm md:text-lg font-light text-stone-600 mb-12 w-full">
                    <div className="flex flex-col items-center gap-3">
                       <Calendar className="w-6 h-6 text-[#8B5E3C]/40" />
                       <span className="font-semibold text-stone-800 tracking-wide">{event.date}</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                       <Clock className="w-6 h-6 text-[#8B5E3C]/40" />
                       <span className="text-stone-700 tracking-wide">{event.time}</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                       <MapPin className="w-6 h-6 text-[#8B5E3C]/40" />
                       <span className="max-w-[280px] leading-relaxed italic text-stone-500">{event.location}</span>
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={event.mapUrl}
                    target="_blank"
                    className="bg-[#3F3F3F] text-white px-10 py-4 md:py-5 rounded-full font-bold text-[10px] md:text-sm uppercase tracking-widest shadow-xl flex items-center gap-4 transition-all hover:bg-stone-800"
                  >
                    Buka Lokasi Map
                  </motion.a>
                </motion.div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
}
