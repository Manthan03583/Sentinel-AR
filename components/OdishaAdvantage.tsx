"use client";

import React from "react";
import { MapPin, Users, Zap, Building2, Landmark, GraduationCap } from "lucide-react";

const PILOTS = [
  { name: "Mahanadi Coalfields", role: "Sub-Surface Navigation", icon: Landmark },
  { name: "Tata Steel", role: "Thermal Safety Scans", icon: Building2 },
  { name: "NALCO", role: "Asset Health Monitoring", icon: Building2 },
  { name: "DRDO", role: "Tactical Mesh Testing", icon: Zap }
];

export const OdishaAdvantage = () => {
  return (
    <section id="ecosystem" className="py-32 bg-white text-black rounded-[3rem] mx-4 my-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
        <MapPin className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest">Regional Tech Cluster</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none">The Odisha <br/> <span className="text-amber-500">Advantage.</span></h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-xl">
                Strategically headquartered in Bhubaneswar to leverage India&apos;s most aggressive industrial policy and world-class research facilities at VARCoE (IIT Bhubaneswar) and O-Hub.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3">
                  <GraduationCap className="w-8 h-8 text-amber-500" />
                  <h4 className="text-xl font-black uppercase tracking-tight">Academic Backbone</h4>
                  <p className="text-sm text-gray-500 font-medium">Direct access to the Optical Labs at VARCoE for Reflective HUD calibration.</p>
               </div>
               <div className="space-y-3">
                  <Users className="w-8 h-8 text-amber-500" />
                  <h4 className="text-xl font-black uppercase tracking-tight">O-Hub Incubation</h4>
                  <p className="text-sm text-gray-500 font-medium">Part of the Startup Odisha ecosystem, ensuring rapid regulatory clearance.</p>
               </div>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-100 p-12 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-amber-500 text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest">Active Pilot Ecosystem</div>
            
            <div className="space-y-8 relative z-10">
              {PILOTS.map((pilot, i) => (
                <div key={i} className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-400 group-hover/item:text-amber-500 group-hover/item:border-amber-500/50 transition-all shadow-sm">
                    <pilot.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black uppercase tracking-tight text-zinc-900">{pilot.name}</div>
                    <div className="text-xs font-mono text-zinc-500 font-bold uppercase tracking-widest">{pilot.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200 space-y-4">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">Economic Impact_Manifest</div>
              <div className="text-3xl font-black text-black">45% <span className="text-amber-500">Lower COGS.</span></div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Utilizing local PCBA assembly and high-volume mobile components to disrupt the $20B industrial AR market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
