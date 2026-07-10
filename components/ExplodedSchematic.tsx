"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Fan, Shield, Wifi } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ExplodedSchematic = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
      }
    });

    // 1. Initial State: Fade in Central Unit
    tl.from(".schematic-core", { scale: 0.8, opacity: 0, duration: 1 })
      
      // 2. Expand Layers
      .to(".layer-1", { y: -150, opacity: 1, duration: 2 }, "expand")
      .to(".layer-2", { y: -50, opacity: 1, duration: 2 }, "expand")
      .to(".layer-3", { y: 50, opacity: 1, duration: 2 }, "expand")
      .to(".layer-4", { y: 150, opacity: 1, duration: 2 }, "expand")
      
      // 3. Connect Lines
      .to(".connector-line", { height: 100, opacity: 1, stagger: 0.2 }, "connect")
      
      // 4. Reveal Specs
      .from(".spec-card", { x: -50, opacity: 0, stagger: 0.2 }, "specs");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,176,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,176,0,0.03)_1px,transparent_1px)] bg-[background-size:40px_40px] pointer-events-none" />

       <div className="absolute top-10 left-10 z-10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-[1px] bg-amber-500" />
             <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">System Architecture // Exploded View</span>
          </div>
       </div>

       <div className="relative w-full max-w-5xl h-[800px] flex items-center justify-center">
          
          {/* Central Connecting Rod (Visual Only) */}
          <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent left-1/2 -translate-x-1/2" />

          {/* Layer 1: Sensor Array (Top) */}
          <div className="layer-1 absolute z-40 flex items-center gap-8 opacity-0">
             <div className="w-64 text-right spec-card">
                <h3 className="text-white font-bold uppercase tracking-tight">Sensor Phalanx</h3>
                <p className="text-zinc-500 text-xs mt-1">LiDAR + Thermal + Optical suite housed in shock-mounted magnesium alloy.</p>
             </div>
             <div className="w-32 h-12 border border-amber-500/50 bg-amber-500/10 rounded-lg flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(255,176,0,0.1)]">
                <Shield className="w-6 h-6 text-amber-500" />
             </div>
             <div className="w-64 opacity-0" /> {/* Spacer */}
          </div>

          {/* Layer 2: Compute Core */}
          <div className="layer-2 absolute z-30 flex items-center gap-8 opacity-0">
             <div className="w-64 opacity-0" /> {/* Spacer */}
             <div className="w-40 h-24 border border-cyan-500/50 bg-cyan-900/10 rounded-xl flex items-center justify-center backdrop-blur-md relative">
                <Cpu className="w-10 h-10 text-cyan-400 animate-pulse" />
                <div className="absolute -bottom-6 text-[8px] font-mono text-cyan-500 uppercase tracking-widest">Sovereign Edge Core</div>
             </div>
             <div className="w-64 text-left spec-card">
                <h3 className="text-white font-bold uppercase tracking-tight">Spatial Core</h3>
                <p className="text-zinc-500 text-xs mt-1">High-performance AI processing for real-time situational awareness and object detection.</p>
             </div>
          </div>
          {/* Layer 3: Connectivity Mesh */}
          <div className="layer-3 absolute z-20 flex items-center gap-8 opacity-0">
             <div className="w-64 text-right spec-card">
                <h3 className="text-white font-bold uppercase tracking-tight">Zero-Trust Mesh</h3>
                <p className="text-zinc-500 text-xs mt-1">LoRaWAN + 5G + Wi-Fi 6 redundant links for GPS-denied environments.</p>
             </div>
             <div className="w-32 h-12 border border-white/20 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-md">
                <Wifi className="w-6 h-6 text-white" />
             </div>
             <div className="w-64 opacity-0" /> {/* Spacer */}
          </div>

          {/* Layer 4: Power & Cooling (Bottom) */}
          <div className="layer-4 absolute z-10 flex items-center gap-8 opacity-0">
             <div className="w-64 opacity-0" /> {/* Spacer */}
             <div className="w-32 h-12 border border-white/20 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-md">
                <Fan className="w-6 h-6 text-white animate-[spin_3s_linear_infinite]" />
             </div>
             <div className="w-64 text-left spec-card">
                <h3 className="text-white font-bold uppercase tracking-tight">Active Cooling</h3>
                <p className="text-zinc-500 text-xs mt-1">20mm MagLev fan maintaining thermal stability up to 45°C ambient.</p>
             </div>
          </div>

          {/* Main Visual Anchor (The "Core") */}
          <div className="schematic-core w-96 h-96 rounded-full border border-white/5 flex items-center justify-center relative">
             <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="w-64 h-64 bg-white/[0.02] rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Image src="/helmet3.png" width={500} height={500} className="w-full h-full object-contain opacity-50 grayscale hover:grayscale-0 transition-all duration-500" alt="Core Unit" />
             </div>
          </div>

       </div>
    </section>
  );
};
