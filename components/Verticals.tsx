"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Pickaxe, 
  ShieldCheck, 
  Truck, 
  ArrowUpRight, 
  Eye, 
  Flame, 
  Radar, 
  Settings 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VERTICALS = [
  {
    title: "Mining & Energy",
    description: "Real-time gas sensing + structural overlays for deep-earth hazardous operations.",
    icon: Pickaxe,
    highlight: "Safety Amber",
    color: "var(--accent-amber)",
    size: "col-span-1 md:col-span-2 row-span-2",
    stats: [
      { label: "Gas Detection", value: "Sub-50ms" },
      { label: "Depth Rating", value: "3,500m" }
    ],
    features: ["LiDAR Wayfinding", "Structural Stress Mapping"]
  },
  {
    title: "Defense & Tactical",
    description: "IFF (Friend/Foe) + Thermal sensor fusion for situational dominance in field maneuvers.",
    icon: Radar,
    highlight: "Hazard Red",
    color: "var(--accent-red)",
    size: "col-span-1 md:col-span-1 row-span-1",
    stats: [
      { label: "Targeting", value: "AI-Augmented" },
      { label: "Encryption", value: "Quantum-Safe" }
    ],
    features: ["Thermal Integration", "Tactical Mesh"]
  },
  {
    title: "Logistics & Fleet",
    description: "Real-time fleet telemetry and loading optimization for global supply chain frontline.",
    icon: Truck,
    highlight: "Cyber Blue",
    color: "var(--accent-cyan)",
    size: "col-span-1 md:col-span-1 row-span-1",
    stats: [
      { label: "Efficiency Gain", value: "42%" },
      { label: "Routing", value: "Dynamic" }
    ],
    features: ["Inventory Tracking", "Loading HUD"]
  },
  {
    title: "Remote Mentoring",
    description: "See what the worker sees. Expert guidance projected directly into the visor, hands-free.",
    icon: Eye,
    highlight: "Cyber Blue",
    color: "var(--accent-cyan)",
    size: "col-span-1 md:col-span-2 row-span-1",
    stats: [
      { label: "Latency", value: "15ms" },
      { label: "Support", value: "24/7 Global" }
    ],
    features: ["Bi-Directional Video", "Spatial Annotations"]
  }
];

export const Verticals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".bento-item", {
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black" id="logistics">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-cyan-500" />
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">Industrial Verticals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              SITUATIONAL <span className="text-cyan-400">DOMINANCE.</span>
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs uppercase font-mono tracking-widest leading-relaxed border-l border-neutral-800 pl-6">
            Operational Excellence Across Every High-Hazard Sector.
          </p>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-3 gap-6 h-auto md:h-[900px]">
          {VERTICALS.map((v, i) => (
            <div
              key={i}
              className={`${v.size} bento-item hud-glass relative group p-8 flex flex-col justify-between overflow-hidden`}
              style={{ borderColor: `${v.color}20` }}
            >
              {/* Background HUD Decor */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <v.icon className="w-24 h-24" style={{ color: v.color }} />
              </div>
              <div className="blueprint-line opacity-10 mb-8" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm">
                    <v.icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <div className="flex gap-4">
                    {v.stats.map((s, idx) => (
                      <div key={idx} className="text-right">
                        <div className="text-[8px] font-mono text-neutral-500 uppercase">{s.label}</div>
                        <div className="text-sm font-bold text-white font-mono">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {v.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
                  {v.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {v.features.map((f, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-900/50 border border-neutral-800 text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-end mt-8">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1 h-3 bg-neutral-800" />
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[10px] font-mono text-cyan-500 hover:text-cyan-400 uppercase tracking-widest transition-colors">
                  Case Study
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div 
                className="absolute top-0 left-0 w-8 h-8 border-t border-l"
                style={{ borderColor: `${v.color}40` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
