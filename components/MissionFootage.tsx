"use client";

import React, { useState, useEffect } from "react";
import { Activity, Target, Eye, Database } from "lucide-react";

export const MissionFootage = () => {
  const [stats, setStats] = useState({ temp: 1420, o2: 98.4, lat: 28, bpm: 72 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        temp: 1420 + Math.floor(Math.random() * 5),
        o2: Number((98.4 + Math.random() * 0.2).toFixed(1)),
        lat: 28 + Math.floor(Math.random() * 3),
        bpm: 72 + Math.floor(Math.random() * 4)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="footage" className="relative h-[90vh] mx-4 rounded-sm overflow-hidden bg-black group border border-white/5">
      {/* Field-Cam Video Simulation */}
      <img 
        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2069" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-[10s] ease-linear grayscale contrast-125"
        alt="Industrial Environment"
      />
      
      {/* Visor 180° Curved Lens Simulation (Edge Vignette) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      
      {/* Live HUD Overlay */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none chromatic-aberration">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="w-1.5 h-1.5 bg-red-500 animate-pulse rounded-full" />
              <div className="text-[10px] font-mono font-black text-white uppercase tracking-[0.4em]">REC // MISSION_LOG_042</div>
            </div>
            <div className="flex gap-8">
               <div className="flex items-center gap-3">
                  <Target className="w-4 h-4 text-amber-500" />
                  <div className="text-[10px] font-mono text-zinc-400">SLAM: <span className="text-white">LOCKED</span></div>
               </div>
               <div className="flex items-center gap-3">
                  <Eye className="w-4 h-4 text-amber-500" />
                  <div className="text-[10px] font-mono text-zinc-400">HUD: <span className="text-white">VISUAL_SILENCE_ACTIVE</span></div>
               </div>
            </div>
          </div>
          <div className="text-right space-y-2">
             <div className="text-[10px] font-mono text-amber-500 font-bold tracking-widest uppercase">Telemetry Stream</div>
             <div className="text-xs text-white font-mono">LAT: {stats.lat}MS // O2: {stats.o2}%</div>
             <div className="text-[9px] text-zinc-600 font-mono underline">ENCRYPTED_LINK_ACTIVE</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
           <div className="relative">
              <div className="w-64 h-64 border border-amber-500/20 rounded-full flex items-center justify-center animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-1 h-24 bg-amber-500/20 rotate-45" />
                 <div className="w-1 h-24 bg-amber-500/20 -rotate-45" />
              </div>
           </div>
        </div>

        <div className="flex justify-between items-end">
           <div className="space-y-4 max-w-sm">
              <div className="flex items-center gap-4">
                 <Activity className="w-6 h-6 text-amber-500 animate-pulse" />
                 <div className="space-y-1">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Worker Vitals</div>
                    <div className="text-2xl font-mono font-bold text-white tracking-tighter">{stats.bpm} <span className="text-xs text-zinc-600">BPM</span></div>
                 </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
                 [ACTIVE_SCAN]: DETECTING VOLATILE HEAT SIGNATURE AT 14M... <br/>
                 [SYSTEM]: OVERLAYING THERMAL GHOST_PATH...
              </div>
           </div>
           <div className="flex gap-10 items-end">
              <div className="flex flex-col items-end gap-2">
                 <Database className="w-5 h-5 text-amber-500" />
                 <div className="text-[9px] font-mono text-zinc-500 uppercase text-right leading-tight">
                    EDGE_CORE_NVIDIA <br/>
                    BUF_FLUSH_STABLE
                 </div>
              </div>
              <button className="px-8 py-3 bg-amber-500 text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl pointer-events-auto hover:bg-white transition-all">
                 Request Raw Feed
              </button>
           </div>
        </div>
      </div>

      <div className="scanline opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
    </section>
  );
};
