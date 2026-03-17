"use client";

import React from "react";
import { Terminal, Send, ShieldCheck } from "lucide-react";

export const PilotForm = () => {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-amber opacity-5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20">
                <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-[0.4em]">Operational Deployment Phase</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">Initiate <br/> <span className="text-amber-500">Pilot.</span></h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                Sentinel AR Technologies Pvt. Ltd. is selecting 10 industrial partners for the SentinelAR field-readiness phase. Qualified partners receive full hardware provisioning and on-site integration support.
              </p>
            </div>
            
            <div className="space-y-6 border-l border-white/5 pl-8 py-4">
              <div className="flex gap-4 items-center">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <div className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest">On-Site Calibration (Odisha Belt)</div>
              </div>
              <div className="flex gap-4 items-center">
                <Terminal className="w-5 h-5 text-amber-500" />
                <div className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest">NVIDIA Orin Nano Provisioning</div>
              </div>
            </div>
          </div>

          <form className="relative bg-white/[0.02] border border-white/10 p-10 rounded-sm space-y-8 group hover:border-amber-500/30 transition-all duration-500">
             <div className="absolute top-4 right-4 text-[8px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500/40 rounded-full animate-pulse" /> [READY_TO_TRANSMIT]
             </div>

             <div className="space-y-6">
                <div className="space-y-2 group">
                   <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold group-focus-within:text-amber-500 transition-colors">_Organization_ID</label>
                   <input className="w-full bg-black/40 border-b border-white/10 p-4 font-mono text-sm text-white focus:border-amber-500 outline-none transition-all placeholder:text-zinc-700" placeholder="e.g. ACME_STEEL_KALINGANAGAR" />
                </div>
                
                <div className="space-y-2 group">
                   <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold group-focus-within:text-amber-500 transition-colors">_Deployment_Sector</label>
                   <select className="w-full bg-black/40 border-b border-white/10 p-4 font-mono text-sm text-white focus:border-amber-500 outline-none transition-all appearance-none cursor-pointer">
                      <option className="bg-zinc-900 text-white">Sub-Surface Mining (MCL)</option>
                      <option className="bg-zinc-900 text-white">Steel & Smelting (TATA STEEL)</option>
                      <option className="bg-zinc-900 text-white">Strategic Operations (DRDO)</option>
                      <option className="bg-zinc-900 text-white">Logistics & Supply Chain</option>
                   </select>
                </div>

                <div className="space-y-2 group">
                   <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold group-focus-within:text-amber-500 transition-colors">_Environment_Manifest</label>
                   <textarea className="w-full bg-black/40 border-b border-white/10 p-4 font-mono text-sm text-white focus:border-amber-500 outline-none transition-all h-32 placeholder:text-zinc-700" placeholder="Describe the industrial environment (Temp, Humidity, Dust)..." />
                </div>
             </div>

             <button className="w-full py-6 bg-amber-500 text-black font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-amber-500/10 flex items-center justify-center gap-4 group">
                Transmit Manifest <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
             
             <div className="flex justify-between items-center text-[8px] font-mono text-zinc-600">
                <span>[SECURE_AES_256_LINK]</span>
                <span>STATUS: IDLE // V1.0.2</span>
             </div>
          </form>
        </div>
      </div>
      
      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-white/5 pointer-events-none" />
    </section>
  );
};
