"use client";

import React, { useState } from "react";
import { TrendingUp, AlertTriangle, Users, DollarSign, Calculator } from "lucide-react";

export const RoiCalculator = () => {
  const [workers, setWorkers] = useState(500);
  const [downtimeCost, setDowntimeCost] = useState(5000); // per hour
  const [incidents, setIncidents] = useState(12); // per year

  // Simple calculation logic (for demo purposes)
  const projectedSavings = Math.floor((workers * 0.2 * 1500) + (downtimeCost * 20)); // Arbitrary formula
  const riskReduction = Math.floor(incidents * 0.45);

  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Input Column */}
        <div className="space-y-12">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Calculator className="w-5 h-5 text-amber-500" />
                 </div>
                 <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold">Impact Analysis Engine</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                 Calculate <span className="text-zinc-600">ROI.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                 Estimate the operational savings and safety improvements by deploying SentinelAR across your workforce.
              </p>
           </div>

           <div className="space-y-8 p-8 border border-white/5 rounded-2xl bg-white/[0.02]">
              
              {/* Slider 1: Workforce Size */}
              <div className="space-y-4">
                 <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2 text-zinc-400"><Users className="w-4 h-4" /> Active Personnel</div>
                    <div className="text-white">{workers} Units</div>
                 </div>
                 <input 
                   type="range" 
                   min="50" 
                   max="5000" 
                   step="50" 
                   value={workers} 
                   onChange={(e) => setWorkers(parseInt(e.target.value))}
                   className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                 />
              </div>

              {/* Slider 2: Downtime Cost */}
              <div className="space-y-4">
                 <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2 text-zinc-400"><DollarSign className="w-4 h-4" /> Downtime Cost / Hr</div>
                    <div className="text-white">${downtimeCost.toLocaleString()}</div>
                 </div>
                 <input 
                   type="range" 
                   min="1000" 
                   max="50000" 
                   step="1000" 
                   value={downtimeCost} 
                   onChange={(e) => setDowntimeCost(parseInt(e.target.value))}
                   className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                 />
              </div>

              {/* Slider 3: Annual Incidents */}
              <div className="space-y-4">
                 <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2 text-zinc-400"><AlertTriangle className="w-4 h-4" /> Annual Incidents</div>
                    <div className="text-white">{incidents} Events</div>
                 </div>
                 <input 
                   type="range" 
                   min="0" 
                   max="100" 
                   step="1" 
                   value={incidents} 
                   onChange={(e) => setIncidents(parseInt(e.target.value))}
                   className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                 />
              </div>
           </div>
        </div>

        {/* Output Column (Big Data Viz) */}
        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-xl -z-10" />
           <div className="bg-black border border-white/10 rounded-3xl p-10 space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                 <TrendingUp className="w-32 h-32 text-white" />
              </div>

              <div className="space-y-2 relative z-10">
                 <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Projected Annual Savings</div>
                 <div className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                    ${(projectedSavings / 1000).toFixed(1)}k
                 </div>
                 <div className="text-sm font-bold text-green-500 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> +12.5% vs Industry Avg
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                 <div className="space-y-1">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Incident Reduction</div>
                    <div className="text-3xl font-bold text-white">-{riskReduction} <span className="text-sm text-zinc-600 font-normal">/ yr</span></div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Efficiency Boost</div>
                    <div className="text-3xl font-bold text-white">22%</div>
                 </div>
              </div>

              <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 group">
                 Download Full Analysis <Calculator className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};
