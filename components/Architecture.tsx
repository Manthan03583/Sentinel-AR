"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, HardDrive, Network, Globe, Box } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SPECS = [
  { icon: Cpu, label: "Processing", value: "Edge-AI Neural Kernel" },
  { icon: Zap, label: "Latency", value: "Sub-10ms Sensor Fusion" },
  { icon: Network, label: "Connectivity", value: "5G / Mesh / Off-Grid" },
  { icon: HardDrive, label: "Storage", value: "Ruggedized Flash Tier 1" },
];

export const Architecture = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal technical specs
    gsap.from(".spec-item", {
      scrollTrigger: {
        trigger: ".spec-item",
        start: "top 85%",
      },
      x: -30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power2.out",
    });

    // Animate schematic elements
    gsap.to(".schematic-line", {
      scrollTrigger: {
        trigger: ".schematic-box",
        start: "top 70%",
      },
      width: "100%",
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.inOut",
    });

    gsap.from(".schematic-node", {
      scrollTrigger: {
        trigger: ".schematic-box",
        start: "top 70%",
      },
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black relative" id="architecture">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Schematic Side */}
        <div className="w-full lg:w-1/2 relative p-12 hud-glass border-cyan-500/10 min-h-[400px] flex items-center justify-center">
          <div className="schematic-box relative w-full h-full border border-cyan-500/20 border-dashed rounded-lg p-12">
            
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 schematic-node bg-cyan-500/10 border border-cyan-500/40 p-6 rounded-full shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              <Globe className="w-10 h-10 text-cyan-400" />
            </div>

            {/* Connecting Nodes */}
            <div className="absolute top-1/4 left-1/4 schematic-node bg-neutral-900 border border-neutral-700 p-3 rounded-full">
              <Cpu className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="absolute top-1/4 right-1/4 schematic-node bg-neutral-900 border border-neutral-700 p-3 rounded-full">
              <Network className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="absolute bottom-1/4 left-1/4 schematic-node bg-neutral-900 border border-neutral-700 p-3 rounded-full">
              <Zap className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 schematic-node bg-neutral-900 border border-neutral-700 p-3 rounded-full">
              <HardDrive className="w-4 h-4 text-cyan-500" />
            </div>

            {/* Connecting Lines (Simulated) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-500/10 -translate-y-1/2 z-0" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-cyan-500/10 -translate-x-1/2 z-0" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-cyan-500/30 uppercase tracking-[0.5em]">
              Kernel.Schematic_v4
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-cyan-500" />
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
                Technical Architecture
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              SENTINEL<span className="text-cyan-400"> KERNEL</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
              A high-performance Edge-AI architecture that processes computer vision 
              and sensor fusion locally, ensuring zero-latency performance in remote or 
              shielded environments where connectivity is unreliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECS.map((spec, i) => (
              <div key={i} className="spec-item p-6 border border-neutral-900 bg-neutral-950 hover:border-cyan-500/20 transition-all rounded-sm">
                <div className="flex items-center gap-4 mb-3">
                  <spec.icon className="w-4 h-4 text-cyan-500" />
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    {spec.label}
                  </span>
                </div>
                <div className="text-lg font-bold text-white tracking-tight">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border border-amber-500/20 bg-amber-500/5 rounded-sm">
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
              <Box className="w-4 h-4" />
              Ruggedized Integration
            </h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              IP67-rated hardware designed to survive vibrations, dust, and 
              extreme temperatures of the industrial floor. Fully integrated 
              with existing SCADA, ERP, and IoT systems via SentinelAR API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
