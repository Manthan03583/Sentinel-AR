"use client";

import React from "react";
import { MapPin, Users, Zap, Building2, Landmark, GraduationCap } from "lucide-react";

const PILOTS = [
  { name: "Mahanadi Coalfields", role: "Subsidiary of World's Largest Coal Miner", icon: Landmark },
  { name: "Tata Steel", role: "Global Steel Leader (30MTPA+)", icon: Building2 },
  { name: "NALCO", role: "Global Aluminum Major", icon: Building2 },
  { name: "DRDO / STRATEGIC", role: "Tactical Mesh Testing", icon: Zap }
];

export const OdishaAdvantage = () => {
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-white text-black rounded-[2rem] md:rounded-[3rem] mx-2 md:mx-4 my-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden md:block">
        <MapPin className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest">Industrial Density advantage</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none">The Industrial <br/> <span className="text-amber-500">Sandbox.</span></h2>
              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                SentinelAR is headquartered within the <span className="text-black">Global Metals & Mining corridor</span> to ensure 24/7 field-testing capabilities in the world&apos;s most extreme high-heat and subsurface environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
               <div className="space-y-3">
                  <GraduationCap className="w-8 h-8 text-amber-500" />
                  <h4 className="text-xl font-black uppercase tracking-tight">R&D Partnership</h4>
                  <p className="text-sm text-gray-500 font-medium">Direct collaboration with specialized AR/VR research centers for optics and HUD calibration.</p>
               </div>
               <div className="space-y-3">
                  <Users className="w-8 h-8 text-amber-500" />
                  <h4 className="text-xl font-black uppercase tracking-tight">Strategic Grants</h4>
                  <p className="text-sm text-gray-500 font-medium">Backed by strategic industrial grants to accelerate deployment in high-hazard zones.</p>
               </div>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-amber-500 text-black px-4 md:px-6 py-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Active Pilot Ecosystem</div>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              {PILOTS.map((pilot, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 group/item">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-zinc-200 rounded-xl md:rounded-2xl flex items-center justify-center text-zinc-400 group-hover/item:text-amber-500 group-hover/item:border-amber-500/50 transition-all shadow-sm shrink-0">
                    <pilot.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-base md:text-lg font-black uppercase tracking-tight text-zinc-900 leading-tight">{pilot.name}</div>
                    <div className="text-[9px] md:text-xs font-mono text-zinc-500 font-bold uppercase tracking-widest">{pilot.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 pt-8 border-t border-zinc-200 space-y-4">
               <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">Economic Impact_Manifest</div>
               <div className="text-2xl md:text-3xl font-black text-black">45% <span className="text-amber-500">Lower COGS.</span></div>
               <p className="text-sm text-gray-500 font-medium leading-relaxed">
                 By utilizing <span className="text-black">AI-accelerated hardware design</span> and local PCBA assembly in the Odisha industrial belt, we have eliminated the &quot;Enterprise Tax,&quot; making mission-critical AR affordable for every worker.
               </p>
            </div>          </div>
        </div>
      </div>
    </section>
  );
};
