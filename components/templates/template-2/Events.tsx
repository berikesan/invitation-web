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
    <div className="flex gap-3 md:gap-6 justify-center py-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center"
        >
          <span className="text-2xl md:text-4xl font-serif text-[#1A1A1A] font-light tabular-nums w-16 md:w-24 text-center">
            {String(item.value).padStart(2, "0")}
          </span>
          <div className="w-full h-px bg-[#C8A96E]/40 my-2" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function EventsSection() {
  return (
    <section className="bg-[#F9F7F4]">
      {/* Countdown */}
      <div className="py-20 px-8 text-center border-b border-[#C8A96E]/15">
        <span className="text-[#C8A96E] text-[9px] uppercase tracking-[0.4em] font-light block mb-6">
          Menghitung Hari
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] font-light mb-2">Menuju Hari Bahagia</h2>
        <Countdown />
      </div>

      {/* Event Card */}
      <div className="py-24 px-8">
        <div className="max-w-xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="glass-card p-10 md:p-14 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="w-8 h-px bg-[#C8A96E]/60 mb-8" />
              <span className="text-[9px] font-light text-[#C8A96E] tracking-[0.5em] uppercase mb-6">
                The Celebration
              </span>

              <h2 className="text-4xl md:text-6xl font-accent text-[#1A1A1A] mb-10 leading-relaxed">
                {event.label}
              </h2>

              <div className="space-y-6 text-sm text-stone-500 mb-12 w-full">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C8A96E]/60" />
                  <span className="font-light text-[#1A1A1A] tracking-wide">{event.date}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C8A96E]/60" />
                  <span className="tracking-wide">{event.time}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8A96E]/60" />
                  <span className="italic max-w-[240px] leading-relaxed">{event.location}</span>
                </div>
              </div>

              <div className="w-8 h-px bg-[#C8A96E]/40 mb-8" />

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={event.mapUrl}
                target="_blank"
                className="border border-[#1A1A1A] text-[#1A1A1A] px-10 py-3 font-light text-[10px] uppercase tracking-[0.3em] hover:bg-[#1A1A1A] hover:text-[#F9F7F4] transition-all"
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
