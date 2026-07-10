"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Eye, Flame, Activity, Waves, Crosshair, Scan, Zap, AlertTriangle, Radio, Target, ShieldCheck } from "lucide-react";
import gsap from "gsap";

const MODES = [
  { 
    id: "optical", 
    label: "Optical_Pass", 
    icon: Eye, 
    color: "text-white",
    accent: "#ffffff",
    desc: "Standard AR overlay with 1440p resolution and 180° FOV."
  },
  { 
    id: "thermal", 
    label: "Thermal_Fusion", 
    icon: Flame, 
    color: "text-orange-500",
    accent: "#f97316",
    desc: "Long-wave infrared (LWIR) overlay for identifying heat leaks and equipment stress."
  },
  { 
    id: "defect", 
    label: "Defect_Inference", 
    icon: Target, 
    color: "text-cyan-400",
    accent: "#22d3ee",
    desc: "Offline neural network inference for sub-millimeter defects in EV battery lines and aircraft fuselages."
  },
  { 
    id: "airgap", 
    label: "Airgap_Telemetry", 
    icon: Radio, 
    color: "text-green-400",
    accent: "#4ade80",
    desc: "Defense-grade secure intranet operations (LAN/WAN). Zero public cloud leakage."
  }
];

const TelemetryItem = ({ label, value, unit, color }: { label: string, value: string | number, unit: string, color: string }) => (
  <div className="space-y-1">
    <div className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest">{label}</div>
    <div className="flex items-baseline gap-1">
      <span className={`text-xl font-black font-mono ${color}`}>{value}</span>
      <span className="text-[8px] text-zinc-500 font-bold uppercase">{unit}</span>
    </div>
  </div>
);

export const VisorSimulator = () => {
  const [activeMode, setActiveMode] = useState("optical");
  const visorRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (hudRef.current) {
      gsap.fromTo(hudRef.current, 
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeMode]);

  const currentMode = MODES.find(m => m.id === activeMode) || MODES[0];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,176,0,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-amber-500" />
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.4em] font-bold">
                Operational Interface v4.0
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              Mission <br/> <span className="text-amber-500">Visualization.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                aria-label={`Switch to ${mode.label}`}
                onClick={() => setActiveMode(mode.id)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-3 ${
                  activeMode === mode.id 
                    ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-105" 
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <mode.icon className={`w-4 h-4 ${activeMode === mode.id ? "animate-pulse" : ""}`} />
                <span>{mode.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Visor Viewport */}
        <div 
          ref={visorRef}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] group"
        >
          {/* Base Image Layer */}
          <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
             <Image 
               src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070" 
               alt="Industrial Environment" 
               fill
               className={`object-cover transition-all duration-1000 ${
                 activeMode === 'thermal' ? 'brightness-50 contrast-150 saturate-0' :
                 activeMode === 'defect' ? 'grayscale brightness-[0.3] contrast-125' :
                 activeMode === 'airgap' ? 'sepia hue-rotate-[140deg] brightness-50 contrast-125' :
                 'brightness-90'
               }`}
             />
          </div>

          {/* Mode-Specific Post-Processing */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${activeMode === 'thermal' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-purple-600/30 to-orange-500/40 mix-blend-screen" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_100%)]" />
          </div>

          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${activeMode === 'defect' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05)_0%,transparent_70%)]" />
          </div>

          {/* Interactive HUD Layer */}
          <div ref={hudRef} className="absolute inset-0 p-8 md:p-12 pointer-events-none select-none">
            
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg">
                  <div className={`w-2 h-2 rounded-full animate-ping bg-${currentMode.accent}`} style={{ backgroundColor: currentMode.accent }} />
                  <span className="text-[10px] font-mono font-black text-white uppercase tracking-[0.2em]">{activeMode}_STREAM_FEED</span>
                </div>
                <div className="flex gap-4 pl-1">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3 h-3 text-white/40" />
                    <span className="text-[9px] font-mono text-white/40 uppercase">COMMS: ENCRYPTED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-amber-500" />
                    <span className="text-[9px] font-mono text-white/40 uppercase">PWR: 88%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-1.5">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`w-1 h-4 rounded-full transition-all duration-500 ${i < 6 ? 'bg-white/60' : 'bg-white/10'}`} />
                  ))}
                </div>
                <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest">SIGNAL_STRENGTH_V4</span>
              </div>
            </div>

            {/* Central Combat/Nav Reticle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="relative">
                <Crosshair className="w-24 h-24 text-white/10 stroke-[0.5]" />
                <div className={`absolute inset-0 animate-[spin_10s_linear_infinite] border-2 border-dashed rounded-full opacity-20`} style={{ borderColor: currentMode.accent }} />
                
                {/* Dynamic Target Box */}
                <div className={`absolute top-[-40px] left-[-40px] w-20 h-20 border-t-2 border-l-2 opacity-60 transition-colors duration-500`} style={{ borderColor: currentMode.accent }} />
                <div className={`absolute bottom-[-40px] right-[-40px] w-20 h-20 border-b-2 border-r-2 opacity-60 transition-colors duration-500`} style={{ borderColor: currentMode.accent }} />
                
                {/* Scanning Line */}
                <div className="absolute top-0 left-[-60px] w-[120px] h-[1px] bg-white/20 animate-[bounce_4s_infinite]" />
              </div>
            </div>

            {/* Floating Data Nodes */}
            <div className={`absolute top-1/4 right-1/4 transition-all duration-700 ${activeMode === 'defect' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Defect_Inference</span>
                </div>
                <div className="text-[9px] text-cyan-200/60 leading-tight">EV_BATTERY_CELL_04: MICROFRACTURE<br/>CONFIDENCE: 99.82%</div>
              </div>
            </div>

            <div className={`absolute bottom-1/3 left-1/4 transition-all duration-700 ${activeMode === 'airgap' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-green-500/10 backdrop-blur-md border border-green-500/30 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">SECURE_INTRANET</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">LAN <span className="text-[10px] text-green-400">ONLY</span></div>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12 right-4 md:right-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
              <div className="flex gap-4 md:gap-12 bg-black/60 backdrop-blur-xl border border-white/5 p-4 md:p-8 rounded-2xl md:rounded-3xl w-full md:w-auto justify-around md:justify-start">
                <TelemetryItem label="Surf_Temp" value={activeMode === 'thermal' ? 124 : 32} unit="°C" color={activeMode === 'thermal' ? 'text-orange-500' : 'text-white'} />
                <div className="w-[1px] h-10 md:h-12 bg-white/5" />
                <TelemetryItem label="O2_SAT" value={99.8} unit="%" color="text-cyan-400" />
                <div className="w-[1px] h-10 md:h-12 bg-white/5" />
                <TelemetryItem label="HRV" value={72} unit="BPM" color="text-white" />
              </div>

              <div className="flex flex-col items-center md:items-end gap-2 md:gap-4 w-full md:w-auto">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                  <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">System_Secure</span>
                </div>
                <div className="text-center md:text-right hidden sm:block">
                  <div className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter leading-none">SENTINEL<span className="text-amber-500/10">v4.0</span></div>
                  <div className="text-[7px] md:text-[8px] font-mono text-white/20 uppercase tracking-[0.5em] mt-1">Sovereign OS Integrated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Visor Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-50 bg-[background-size:100%_4px,3px_100%] pointer-events-none opacity-40" />
          
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[9px] font-mono text-amber-500 font-bold uppercase tracking-widest">Active_Kernel_Log</span>
           </div>
           <p className="text-zinc-400 font-medium text-lg leading-relaxed italic">
              "{currentMode.desc}"
           </p>
        </div>
      </div>
    </section>
  );
};
