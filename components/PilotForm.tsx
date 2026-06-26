"use client";

import React, { useState } from "react";
import { Terminal, Send, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";

export const PilotForm = () => {
  const [status, setStatus] = useState<"idle" | "transmitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("transmitting");
    
    // Simulate industrial-grade transmission delay
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden scroll-mt-24">
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
                Garageby Technologies Private Limited is selecting 10 industrial partners for the SentinelAR field-readiness phase. Qualified partners receive full hardware provisioning and on-site integration support.
              </p>
            </div>
            
            <div className="space-y-6 border-l border-white/5 pl-8 py-4">
              <div className="flex gap-4 items-center">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <div className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest">On-Site Calibration (Odisha Belt)</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {status === "success" ? (
              <div className="bg-white/[0.02] border border-amber-500/30 p-12 rounded-sm text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto border border-amber-500/20">
                  <CheckCircle2 className="w-10 h-10 text-amber-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Transmission Successful</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    Manifest received and encrypted. Our systems architects will review your deployment parameters and establish a secure link within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-black hover:text-white transition-colors"
                >
                  Return to Link Terminal
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="relative bg-white/[0.02] border border-white/10 p-10 rounded-sm space-y-8 group hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="absolute top-4 right-4 text-[8px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500/40 rounded-full animate-pulse" /> [READY_TO_TRANSMIT]
                </div>

                <div className="space-y-6">
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold group-focus-within:text-amber-500 transition-colors">_Organization_ID</label>
                      <input 
                        name="organization"
                        required
                        disabled={status === "transmitting"}
                        className="w-full bg-black/40 border-b border-white/10 p-4 font-mono text-sm text-white focus:border-amber-500 outline-none transition-all placeholder:text-zinc-700 disabled:opacity-50" 
                        placeholder="e.g. ACME_STEEL_KALINGANAGAR" 
                      />
                    </div>
                    
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold group-focus-within:text-amber-500 transition-colors">_Deployment_Sector</label>
                      <select 
                        name="sector"
                        disabled={status === "transmitting"}
                        className="w-full bg-black/40 border-b border-white/10 p-4 font-mono text-sm text-white focus:border-amber-500 outline-none transition-all appearance-none cursor-pointer disabled:opacity-50"
                      >
                          <option className="bg-zinc-900 text-white">Sub-Surface Mining</option>
                          <option className="bg-zinc-900 text-white">Steel & Smelting</option>
                          <option className="bg-zinc-900 text-white">Strategic Operations</option>
                          <option className="bg-zinc-900 text-white">Logistics & Supply Chain</option>
                      </select>
                    </div>

                    <div className="space-y-2 group">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold group-focus-within:text-amber-500 transition-colors">_Environment_Manifest</label>
                      <textarea 
                        name="manifest"
                        required
                        disabled={status === "transmitting"}
                        className="w-full bg-black/40 border-b border-white/10 p-4 font-mono text-sm text-white focus:border-amber-500 outline-none transition-all h-32 placeholder:text-zinc-700 disabled:opacity-50" 
                        placeholder="Describe the industrial environment (Temp, Humidity, Dust)..." 
                      />
                    </div>
                </div>

                <button 
                  type="submit"
                  disabled={status === "transmitting"}
                  className="w-full py-6 bg-amber-500 text-black font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-amber-500/10 flex items-center justify-center gap-4 group disabled:bg-zinc-800 disabled:text-zinc-500 disabled:scale-100 disabled:cursor-not-allowed"
                >
                    {status === "transmitting" ? (
                      <>Transmitting... <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Transmit Manifest <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                </button>
                
                <div className="flex justify-between items-center text-[8px] font-mono text-zinc-600">
                    <span>[SECURE_AES_256_LINK]</span>
                    <span>STATUS: {status.toUpperCase()} // V1.0.2</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-white/5 pointer-events-none" />
    </section>
  );
};
