"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

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
          className="bg-[#B76E79] text-[#FDF8F0] w-16 h-20 md:w-24 md:h-28 rounded-2xl flex flex-col items-center justify-center shadow-md"
        >
          <span className="text-xl md:text-3xl font-serif tabular-nums">{item.value}</span>
          <span className="text-[9px] uppercase tracking-widest opacity-70 mt-1">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="bg-[#FDF8F0]">
      {/* Countdown */}
      <div className="py-20 px-8 text-center border-b border-[#E8A0A0]/20">
        <span className="text-[#E8A0A0] text-[9px] uppercase tracking-[0.5em] font-light block mb-4">
          Menghitung Hari
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#B76E79] italic mb-2">Menuju Hari Bahagia</h2>
        <Countdown />
      </div>

      {/* Event card — ivory bg, blush accents */}
      <div className="py-24 px-8 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#E8A0A0]/10 blur-3xl pointer-events-none" />
        <div className="max-w-xl mx-auto relative z-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-card p-10 md:p-14 rounded-3xl flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-[#E8A0A0]/50" />
                <span className="text-[#E8A0A0] text-base">✿</span>
                <div className="h-px w-10 bg-[#E8A0A0]/50" />
              </div>

              <span className="text-[9px] font-light text-[#C97B7B] tracking-[0.5em] uppercase mb-6">
                The Celebration
              </span>

              <h2 className="text-4xl md:text-6xl font-accent text-[#B76E79] mb-10 leading-relaxed">
                {event.label}
              </h2>

              <div className="space-y-6 text-sm text-[#C97B7B]/70 mb-10 w-full">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#E8A0A0]/70" />
                  <span className="font-medium text-[#B76E79]">{event.date}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-5 h-5 text-[#E8A0A0]/70" />
                  <span>{event.time}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#E8A0A0]/70" />
                  <span className="italic max-w-[240px] leading-relaxed">{event.location}</span>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={event.mapUrl}
                target="_blank"
                className="bg-[#B76E79] text-[#FDF8F0] px-10 py-4 rounded-full font-light text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#a05f69] transition-colors"
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
