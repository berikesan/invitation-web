"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomSelect from "@/components/shared/CustomSelect";
import couple1 from "@/public/couple.png";
import couple2 from "@/public/couple-2.png";
import couple3 from "@/public/couple-3.png";
import gallery1 from "@/public/gallery-1.png";

const photos = [
  { src: couple1, alt: "Couple 1" },
  { src: couple2, alt: "Couple 2" },
  { src: couple3, alt: "Couple 3" },
  { src: gallery1, alt: "Gallery" },
  { src: couple1, alt: "Couple Close-up" },
  { src: couple2, alt: "Couple Standing" },
];

function GallerySlider() {
  const [index, setIndex] = useState(0);
  const displayPhotos = [...photos, ...photos.slice(0, 2)];

  const next = () => setIndex(i => (i < displayPhotos.length - 2 ? i + 1 : 0));
  const prev = () => setIndex(i => (i > 0 ? i - 1 : displayPhotos.length - 2));

  return (
    <div className="relative w-full overflow-hidden group mb-12 select-none px-6">
      <div className="max-w-7xl mx-auto overflow-hidden p-1 border border-[#D4AF37]/15 bg-[#0D0D1A]">
        <motion.div
          animate={{
            x: typeof window !== "undefined" && window.innerWidth >= 768
              ? `calc(-${index} * (50% + 4px))`
              : `calc(-${index} * (100% + 8px))`,
          }}
          transition={{ type: "tween", duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }}
          onDragEnd={(_, { offset }) => {
            if (offset.x < -100) next();
            else if (offset.x > 100) prev();
          }}
          className="flex gap-2 h-[400px] md:h-[600px]"
        >
          {displayPhotos.map((photo, i) => (
            <div key={i} className="min-w-full md:min-w-[calc(50%-4px)] h-full relative overflow-hidden border border-[#D4AF37]/10">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority={i < 3} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-40 pointer-events-none">
        <button onClick={prev} className="pointer-events-auto p-3 text-[#D4AF37] bg-[#0D0D1A]/90 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all border border-[#D4AF37]/30">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="pointer-events-auto p-3 text-[#D4AF37] bg-[#0D0D1A]/90 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all border border-[#D4AF37]/30">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: displayPhotos.length - 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn("h-px rounded-none transition-all duration-500", i === index ? "bg-[#D4AF37] w-12" : "bg-[#D4AF37]/20 w-6")}
          />
        ))}
      </div>
    </div>
  );
}

export function GallerySection() {
  return (
    <section className="py-24 bg-[#0D0D1A] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1B2A6B]/15 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mx-auto px-6 text-center mb-16">
          <span className="text-[#D4AF37]/40 uppercase tracking-[0.6em] text-[9px] font-light mb-4 block">
            Capturing Moments
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37] tracking-wider uppercase mb-4">Galeri Kenangan</h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-[#D4AF37]/30" />
            <span className="text-[#D4AF37]/40 text-xs">◆</span>
            <div className="h-px w-16 bg-[#D4AF37]/30" />
          </div>
        </div>

        <GallerySlider />

        <div className="px-6 grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="aspect-square relative overflow-hidden border border-[#D4AF37]/10 group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RSVPSection({ guestName }: { guestName?: string }) {
  const [status, setStatus] = useState("Hadir");
  const [name, setName] = useState(guestName || "");
  const [guests, setGuests] = useState("1 Orang");

  useEffect(() => {
    if (guestName) setName(guestName);
  }, [guestName]);

  return (
    <section className="py-20 px-8 bg-[#1A1A2E] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#D4AF37]/40 text-[9px] uppercase tracking-[0.6em] font-light block mb-4">RSVP</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] tracking-widest uppercase mb-2">
            Konfirmasi Kehadiran
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-[#D4AF37]/30" />
            <span className="text-[#D4AF37]/40 text-xs">◆</span>
            <div className="h-px w-16 bg-[#D4AF37]/30" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative"
        >
          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#D4AF37]/30" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#D4AF37]/30" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#D4AF37]/30" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#D4AF37]/30" />

          <form className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-light block">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-[#D4AF37]/25 pb-2 text-sm text-[#E5E4E2] focus:border-[#D4AF37] outline-none transition-all placeholder:text-[#E5E4E2]/20 font-light"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-light block">Jumlah Tamu</label>
                <CustomSelect
                  options={["1 Orang","2 Orang","3 Orang","4 Orang","5 Orang"]}
                  value={guests}
                  onChange={setGuests}
                  theme={{
                    bg: "bg-transparent",
                    border: "border-[#D4AF37]/25",
                    text: "text-[#E5E4E2]",
                    placeholder: "text-[#E5E4E2]/30",
                    optionHover: "hover:bg-[#D4AF37]/10",
                    optionText: "text-[#E5E4E2]",
                    checkColor: "text-[#D4AF37]",
                    chevronColor: "text-[#D4AF37]",
                    triggerClass: "bg-transparent border-b border-[#D4AF37]/25 pb-2 font-light outline-none",
                    panelClass: "bg-[#1A1A2E] border border-[#D4AF37]/20 rounded-lg shadow-xl",
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-light block">Status Kehadiran</label>
              <div className="flex gap-3">
                {["Hadir", "Tidak Hadir"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStatus(s)}
                    className={cn(
                      "flex-1 py-3 text-xs font-light transition-all border",
                      status === s
                        ? "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/50"
                        : "bg-transparent text-[#E5E4E2]/40 border-[#D4AF37]/15 hover:border-[#D4AF37]/30"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-light block">Pesan atau Ucapan</label>
              <textarea
                className="w-full bg-transparent border-b border-[#D4AF37]/25 pb-2 text-sm text-[#E5E4E2] focus:border-[#D4AF37] outline-none h-28 transition-all resize-none placeholder:text-[#E5E4E2]/20 font-light"
                placeholder="Tulis ucapan selamat..."
              />
            </div>

            <button className="w-full border border-[#D4AF37] text-[#D4AF37] py-4 font-light uppercase tracking-[0.4em] text-[10px] hover:bg-[#D4AF37]/10 active:scale-[0.98] transition-all">
              Kirim Konfirmasi
            </button>
          </form>
        </motion.div>

        <div className="mt-24 text-center pb-16">
          <span className="text-[#D4AF37] text-5xl md:text-7xl font-accent block mb-5 italic">Thank You</span>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#D4AF37]/30" />
            <span className="text-[#D4AF37]/40 text-xs">◆</span>
            <div className="h-px w-16 bg-[#D4AF37]/30" />
          </div>
          <p className="text-[9px] text-[#E5E4E2]/30 tracking-[0.5em] uppercase font-light mb-10">Dewax &amp; Chika • 2026</p>
          <div className="border-t border-[#D4AF37]/15 pt-8">
            <p className="text-lg font-serif text-[#D4AF37]/50 tracking-widest mb-1">Beri Kesan</p>
            <p className="text-[9px] text-[#E5E4E2]/20 tracking-[0.2em] uppercase mb-5">Digital Wedding Invitation &copy; {new Date().getFullYear()}</p>
            <div className="flex items-center justify-center gap-3">
              <a href="https://www.instagram.com/beri.kesan" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]/60"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://wa.me/6281338345375" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]/60"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
