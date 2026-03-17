"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pickaxe, Factory, Truck, Flame, Box, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const verticals = [
  {
    icon: Pickaxe,
    title: "Mining & Sub-Surface",
    desc: "Real-time gas sensing + LiDAR structural overlays for deep-earth operations.",
    color: "#FFB000",
    size: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    icon: Factory,
    title: "Steel & Heavy Mfg",
    desc: "Thermal imaging integration + Digital Twin schematics for active machinery.",
    color: "#EF4444",
    size: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    icon: Truck,
    title: "Global Logistics",
    desc: "Fleet telemetry + 360° Vision Bubble for loading docks.",
    color: "#3B82F6",
    size: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Defense & Tactical",
    desc: "IFF (Friend/Foe) + Secure Meshcom integration.",
    color: "#10B981",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
];

export const VerticalsBento = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".bento-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#FFB000] font-mono text-sm tracking-widest uppercase">Target Markets</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">INDUSTRY 4.0 VERTICALS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[600px]">
          {verticals.map((item, idx) => (
            <div
              key={idx}
              className={`bento-card relative p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group overflow-hidden ${item.size}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-500">
                <item.icon className="w-24 h-24" style={{ color: item.color }} />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end">
                <item.icon className="w-8 h-8 mb-4" style={{ color: item.color }} />
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{item.desc}</p>
              </div>

              {/* Decorative Corner */}
              <div 
                className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 opacity-50"
                style={{ borderColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
