"use client";

import React from "react";

export const HardSpecs = () => {
  return (
    <section id="specs" className="py-32 bg-white text-black rounded-[3rem] mx-4 my-8 relative overflow-hidden">
      {/* Background Brand Pattern */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none select-none">
        <div className="text-[12rem] font-black leading-none uppercase tracking-tighter">SENTINELAR</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest font-mono">Product Dossier: SentinelAR</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">The <br/> <span className="text-amber-500">Monocoque</span> Build.</h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                Internalized components within a high-impact Sabic CYCOLOY™ shell. Designed for zero snags and IP67 industrial durability.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Internal Chassis */}
              <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 group hover:border-amber-500/30 transition-colors">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-black uppercase tracking-tighter">AL6061-T6 Tech-Spine</h4>
                  <span className="px-3 py-1 bg-zinc-200 text-zinc-600 text-[10px] font-black uppercase rounded-full tracking-widest">Internal Chassis</span>
                </div>
                <p className="text-sm text-gray-500 mb-6 font-medium">CNC-machined aluminum frame acting as the primary heatsink and structural mounting point for the sensor fusion layer.</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Thermal</div>
                    <div className="text-sm font-bold">Active MagLev Cooling</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Resilience</div>
                    <div className="text-sm font-bold">45°C Ambient Ready</div>
                  </div>
                </div>
              </div>

              {/* Dual Kernel Processing */}
              <div className="p-8 rounded-3xl bg-black text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v3"/><path d="M11 3v3"/><path d="M15 3v3"/><path d="M3 7h3"/><path d="M3 11h3"/><path d="M3 15h3"/><path d="M7 21v-3"/><path d="M11 21v-3"/><path d="M15 21v-3"/><path d="M21 7h-3"/><path d="M21 11h-3"/><path d="M21 15h-3"/><path d="M11 11h2"/><path d="M11 13h2"/></svg>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-amber-500">Dual-Kernel Core</h4>
                  <span className="px-3 py-1 bg-amber-500 text-black text-[10px] font-black uppercase rounded-full tracking-widest">Orin Nano + S3</span>
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                    <div className="w-1 h-10 bg-amber-500" />
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Spatial AI (Primary)</div>
                      <div className="text-sm font-bold">NVIDIA Jetson Orin Nano</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-1 h-10 bg-zinc-700" />
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Safety Fail-Safe (Safety Kernel)</div>
                      <div className="text-sm font-bold">ESP32-S3 // LoRaWAN SOS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-12 bg-zinc-100 rounded-[2.5rem] border border-zinc-200">
             <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Strategic Advantage</h3>
             <div className="space-y-8">
                <div>
                   <div className="flex justify-between text-xs font-black uppercase tracking-tight mb-2">
                      <span>M3 Modular Visor Strategy</span>
                      <span className="text-amber-600">60s Replacement</span>
                   </div>
                   <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[95%]" />
                   </div>
                </div>
                
                <div className="p-6 bg-white rounded-2xl border border-zinc-200 space-y-4">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-bold">Bhubaneswar Beta-Testing Hub</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-zinc-50 rounded-lg text-center">
                      <div className="text-[9px] font-bold text-gray-400 uppercase">Partner</div>
                      <div className="text-xs font-black">TATA STEEL</div>
                    </div>
                    <div className="p-3 bg-zinc-50 rounded-lg text-center">
                      <div className="text-[9px] font-bold text-gray-400 uppercase">Partner</div>
                      <div className="text-xs font-black">NALCO</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-black">Supply Chain Optimization</div>
                   <div className="text-2xl font-black tracking-tight leading-none uppercase">45% Lower <span className="text-amber-600">TCO.</span></div>
                   <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                     Sourced via Bangalore/NCR clusters and tested in the Odisha industrial belt for a drastically lower entry barrier compared to global competitors.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
