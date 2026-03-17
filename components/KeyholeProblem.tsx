"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MoveRight, ShieldAlert, Eye, Maximize2 } from "lucide-react";

export const KeyholeProblem = () => {
  const [isWide, setIsWide] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isWide) {
      gsap.to(visorRef.current, {
        width: "100%",
        duration: 1.5,
        ease: "power4.inOut",
      });
      gsap.to(".hud-data", {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 1,
      });
    } else {
      gsap.to(visorRef.current, {
        width: "30%",
        duration: 1.5,
        ease: "power4.inOut",
      });
      gsap.to(".hud-data", {
        opacity: 0,
        x: 20,
        duration: 0.5,
      });
    }
  }, [isWide]);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#050505] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-3">
            <div className="w-8 h-[1px] bg-amber-500" />
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">The "Keyhole" Problem</span>
            <div className="w-8 h-[1px] bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            The <span className="text-amber-500">Keyhole</span> Problem.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Traditional AR devices offer a limited 30° FOV, creating a dangerous 
            "tunnel vision" effect for industrial workers. SentinelAR eliminates the keyhole with 
            a <span className="text-amber-500">110° Panoramic Infinity Visor</span> for total situational dominance.
          </p>
        </div>

        {/* Comparison Tool */}
        <div className="w-full h-[600px] relative bg-neutral-900/50 rounded-[3rem] overflow-hidden border border-white/5">
          {/* Background Industrial Scene (Simulated) */}
          <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center" />
          
          {/* The Visor Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-12">
            <div 
              ref={visorRef} 
              className="relative h-full w-[30%] bg-amber-500/5 backdrop-blur-[1px] border-x border-amber-500/20 transition-all shadow-[0_0_100px_rgba(245,158,11,0.05)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" />
              
              {/* HUD Content inside Visor - Visual Silence philosophy */}
              <div className="absolute top-10 left-10 hud-data opacity-0 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-amber-500" />
                  <div>
                    <div className="text-[8px] font-mono text-amber-500/60 uppercase font-black tracking-widest">Active_Scan</div>
                    <div className="text-xl font-black font-mono text-white tracking-tighter">O2: 19.4%</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-10 hud-data opacity-0 text-right space-y-4">
                <div className="flex items-center gap-2 justify-end">
                   <div>
                    <div className="text-[8px] font-mono text-cyan-400/60 uppercase font-black tracking-widest">Thermal_Map</div>
                    <div className="text-xl font-black font-mono text-white tracking-tighter">CORE: 32.4°C</div>
                  </div>
                  <div className="w-1 h-8 bg-cyan-500" />
                </div>
              </div>

              {/* Center Reticle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 border border-white/5 rounded-full flex items-center justify-center group">
                  <div className="w-1 h-1 bg-amber-500 rounded-full animate-ping" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Ready_Sync</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/5">
            <button 
              onClick={() => setIsWide(false)}
              className={`px-8 py-4 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 ${!isWide ? 'bg-white text-black font-black' : 'bg-transparent text-neutral-500 hover:text-white'}`}
            >
              <Eye className="w-4 h-4" />
              Standard 30°
            </button>
            <button 
              onClick={() => setIsWide(true)}
              className={`px-8 py-4 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 ${isWide ? 'bg-amber-500 text-black font-black' : 'bg-transparent text-neutral-500 hover:text-white'}`}
            >
              <Maximize2 className="w-4 h-4" />
              Sentinel 110°
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
