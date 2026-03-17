"use client";

import React from "react";
import { Shield, Navigation, Activity, Eye, Thermometer } from "lucide-react";

export const CoreCapabilities = () => {
  const capabilities = [
    {
      title: "Visual Silence HUD",
      tag: "[FOCUS_DRIVEN_UX]",
      desc: "Information is only rendered when mission-critical. Peripheral Data Arch monitors Gas levels (O2/CH4) and humidity without obstructing the central field of view.",
      icon: Eye
    },
    {
      title: "Ghost-Path Navigation",
      tag: "[CYAN_PATH_ACTIVE]",
      desc: "LiDAR-locked SLAM paints a minimalist Cyan path directly onto the physical floor, guiding workers through complex industrial sites with sub-centimeter precision.",
      icon: Navigation
    },
    {
      title: "Threat-Logic AI",
      tag: "[ACTIVE_HAZARD_SYNC]",
      desc: "Instant red-wireframe alerts for moving machinery or gas leaks. Identifies Red Zones and projects 3D spatial boundaries onto the environment.",
      icon: Shield
    },
    {
      title: "Thermal Fusion Overlays",
      tag: "[HEAT_SIGNATURE_SYNC]",
      desc: "Detect steam leaks or electrical hotspots in real-time. Overlays thermal heat signatures directly onto physical assets via the SentinelAR visor interface.",
      icon: Thermometer
    },
    {
      title: "Bone Conduction Audio",
      tag: "[PIEZO_AUDIO_LINK]",
      desc: "Communicate with remote experts while keeping ears open to environmental warnings. High-fidelity audio transmission through the tech-spine chassis.",
      icon: Activity
    }
  ];

  return (
    <section id="vision" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/10 mb-2">
            <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest">SentinelAR Operational Layer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">THE WORLD <br/> <span className="text-amber-500">AUGMENTED.</span></h2>
          <p className="text-gray-500 max-w-xl font-medium pt-4 leading-relaxed">Built for the Odisha/Jharkhand industrial belt. Climate-adapted hardware designed for 45°C heat and monsoon conditions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between group">
               <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                      <cap.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-500/60 font-bold uppercase tracking-widest">{cap.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{cap.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-400 transition-colors">{cap.desc}</p>
               </div>
               <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-600">
                  <span className="group-hover:text-amber-500 transition-colors">OS_LAYER_0{i+1}</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="w-1.5 h-3 bg-amber-500/20 group-hover:bg-amber-500/40 transition-all" style={{ transitionDelay: `${j * 50}ms` }} />
                    ))}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
