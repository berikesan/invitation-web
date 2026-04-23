"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomSelectTheme {
  bg: string;           // dropdown panel bg
  border: string;       // trigger + panel border
  text: string;         // selected value text
  placeholder: string;  // placeholder text color
  optionHover: string;  // option hover bg
  optionText: string;   // option text color
  checkColor: string;   // checkmark color
  chevronColor: string; // chevron icon color
  triggerClass: string; // full trigger className (bg, border, radius, padding, etc.)
  panelClass: string;   // full panel className
}

interface Props {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  theme: CustomSelectTheme;
}

export default function CustomSelect({ options, value, onChange, placeholder = "Pilih...", theme }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={cn("w-full flex items-center justify-between gap-2 text-sm transition-all", theme.triggerClass)}
      >
        <span className={value ? theme.text : theme.placeholder}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={15}
          className={cn("transition-transform duration-200 shrink-0", theme.chevronColor, open && "rotate-180")}
        />
      </button>

      {open && (
        <ul className={cn("absolute left-0 right-0 z-50 mt-1 py-1 overflow-hidden", theme.panelClass)}>
          {options.map(opt => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors",
                  theme.optionHover,
                  theme.optionText
                )}
              >
                <span>{opt}</span>
                {value === opt && <Check size={13} className={theme.checkColor} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
