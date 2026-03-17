"use client";

import React from "react";
import { Zap, Battery, ShieldCheck } from "lucide-react";

export const PriceComparison = () => {
  return (
    <section id="pricing" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <span className="w-2 h-2 bg-amber-500 animate-pulse rounded-full" />
            <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest">Market Positioning</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Industrial Tech. <br/> <span className="text-amber-500">Democratized.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium pt-4 leading-relaxed">
            Legacy enterprise AR solutions are priced as luxury tools for a few. SentinelAR is engineered for mass deployment across your entire industrial workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               label: "Target ROI", 
               val: "Mass Deployment", 
               icon: ShieldCheck, 
               desc: "Optimized for a 75% lower Total Cost of Ownership (TCO) compared to standard enterprise headsets." 
             },
             { 
               label: "Supply Chain", 
               val: "Local Sourcing", 
               icon: Zap, 
               desc: "Leveraging the Odisha industrial ecosystem and high-volume hardware to eliminate import-heavy cost barriers." 
             },
             { 
               label: "Pilot Integration", 
               val: "Phase-0 Access", 
               icon: Battery, 
               desc: "Priority hardware allocation for strategic partners during the field-readiness and prototyping phase." 
             }
           ].map((stat, i) => (
             <div key={i} className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4 ${i === 0 ? 'border-amber-500/30 bg-amber-500/[0.02]' : ''}`}>
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                   <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</div>
                   <div className="text-2xl font-black text-white uppercase tracking-tight">{stat.val}</div>
                </div>
                <p className="text-zinc-600 text-xs leading-relaxed font-medium">{stat.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
