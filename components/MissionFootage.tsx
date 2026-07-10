"use client";

import React from "react";
import Image from "next/image";
import { Play, Maximize2, Radio } from "lucide-react";

const FEEDS = [
  {
    id: "CAM_01",
    sector: "TALCHER_SHAFT_4",
    status: "RECORDING",
    img: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=1080",
    overlay: "LIDAR_MESH_ACTIVE"
  },
  {
    id: "CAM_02",
    sector: "ANGUL_POTLINE_B",
    status: "LIVE_STREAM",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1080",
    overlay: "THERMAL_CRITICAL"
  },
  {
    id: "CAM_03",
    sector: "KALINGA_BLAST_F",
    status: "BUFFERING",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1080",
    overlay: "OPTICAL_PASS"
  }
];

export const MissionFootage = () => {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-500 animate-pulse">
                 <Radio className="w-4 h-4" />
                 <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Encrypted Uplink Active</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Mission <span className="text-zinc-600">Replay.</span></h2>
           </div>
           <div className="text-right hidden md:block">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Total Bandwidth</div>
              <div className="text-2xl font-mono text-white font-bold">4.2 TB/s</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {FEEDS.map((feed, i) => (
              <div key={i} className="group relative aspect-square bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-500">
                 {/* Video Feed Image */}
                 <Image 
                   src={feed.img} 
                   alt={feed.id} 
                   fill
                   className="object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
                 />
                 
                 {/* Scanline Overlay */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[background-size:100%_3px,3px_100%] pointer-events-none opacity-40" />
                 
                 {/* Vignette */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 z-10" />

                 {/* HUD Overlay */}
                 <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none">
                    <div className="flex justify-between items-start">
                       <div>
                          <div className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
                             <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> {feed.status}
                          </div>
                          <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest mt-1">{feed.id} // {feed.sector}</div>
                       </div>
                       <Maximize2 className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </div>

                    <div className="flex justify-between items-end">
                       <div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest bg-black/50 px-2 py-1 rounded">
                          [{feed.overlay}]
                       </div>
                       <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 fill-white" />
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};
