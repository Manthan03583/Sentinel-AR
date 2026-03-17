"use client";

import React from "react";
import { Maximize2, Cpu, Layers, Globe } from "lucide-react";

export const TechSection = () => {
  return (
    <section id="tech" className="py-32 bg-white text-black rounded-[3rem] mx-4 my-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">Flexible <br/> <span className="text-amber-500">Deployment.</span></h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              From modular safety retrofits to immersive AR command, SentinelAR OS scales with your operational needs. Choose the tier that matches your mission profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Maximize2, title: "Modular Base", text: "Universal clip-on for existing PPE." },
              { icon: Cpu, title: "Edge-AI Core", text: "On-device processing for zero-latency." },
              { icon: Layers, title: "Integrated Pro", text: "Integrated 180° AR visor system." },
              { icon: Globe, title: "Hybrid Sync", text: "Cloud-Edge connectivity via Wi-Fi 6." },
            ].map((f, i) => (
              <div key={i} className="space-y-2">
                <f.icon className="w-6 h-6 text-amber-500" />
                <h4 className="font-bold text-lg">{f.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-black rounded-[2.5rem] flex items-center justify-center overflow-hidden shadow-2xl group">
             <div className="text-center p-12 transition-transform duration-700 group-hover:scale-110">
                <div className="text-amber-500 font-mono text-sm tracking-widest uppercase font-bold mb-4">Deployment Tiers</div>
                <div className="text-white space-y-4">
                  <div className="text-5xl font-black uppercase tracking-tighter">Scalable</div>
                  <div className="text-xl text-zinc-400 font-medium italic">"Base Variant to Pro Suite"</div>
                </div>
                <div className="mt-10 flex flex-col gap-3">
                   <div className="px-6 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm font-bold text-left flex justify-between">
                      <span>Sentinel-Lite</span>
                      <span className="text-amber-500">BASE_SAFETY</span>
                   </div>
                   <div className="px-6 py-3 bg-amber-500 rounded-xl text-black text-sm font-black text-left flex justify-between">
                      <span>Sentinel-Pro</span>
                      <span>SPATIAL_OS</span>
                   </div>
                </div>
             </div>
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,176,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,176,0,0.2)_1px,transparent_1px)] bg-[background-size:30px_30px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
