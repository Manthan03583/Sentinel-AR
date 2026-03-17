"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EyeOff, Eye, Maximize, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const IndustrialScroller = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    tl.to(".keyhole-hud", {
      width: "100%",
      opacity: 0,
      duration: 1
    })
    .to(".sentinel-visor", {
      opacity: 1,
      scale: 1,
      duration: 1
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#050505] relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FFB000] font-mono text-sm tracking-widest uppercase">Operational Hazard</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">THE KEYHOLE PROBLEM</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Traditional AR headsets limit field-of-view to 20°, creating dangerous blind spots. SentinelAR eliminates tunnel vision.</p>
        </div>

        <div className="relative h-[600px] w-full border border-gray-800 rounded-xl overflow-hidden bg-gray-900">
          
          {/* Traditional HUD Layer */}
          <div className="keyhole-hud absolute inset-0 z-20 bg-black/80 flex items-center justify-center transition-all">
            <div className="w-64 h-48 border-2 border-red-500/50 bg-black/40 backdrop-blur-sm relative p-4">
              <div className="absolute top-2 left-2 text-red-500 text-xs font-mono animate-pulse">WARNING: LIMITED FOV</div>
              <EyeOff className="text-red-500 w-8 h-8 absolute bottom-4 right-4" />
              <div className="text-center text-gray-500 text-xs mt-12">Restricted View <br/> 20° Diagonal</div>
            </div>
          </div>

          {/* Sentinel Visor Layer */}
          <div className="sentinel-visor absolute inset-0 z-10 opacity-0 scale-95 flex items-end pb-12 justify-center bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            {/* Wide HUD Overlay */}
            <div className="w-full max-w-6xl px-12 flex justify-between items-end pb-8 border-b border-[#FFB000]/30">
              <div className="flex gap-8">
                 <div className="text-[#FFB000]">
                    <div className="text-xs font-mono text-gray-400 mb-1">LATENCY</div>
                    <div className="text-xl font-bold font-mono">35ms</div>
                 </div>
                 <div className="text-[#FFB000]">
                    <div className="text-xs font-mono text-gray-400 mb-1">RESOLUTION</div>
                    <div className="text-xl font-bold font-mono">1080p</div>
                 </div>
              </div>

              <div className="flex gap-2 items-center text-[#FFB000]">
                <Maximize className="w-5 h-5" />
                <span className="font-mono font-bold tracking-widest text-sm">180° SPATIAL AWARENESS ACTIVE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
