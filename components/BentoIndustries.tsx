"use client";

import React from "react";
import Link from "next/link";
import { Factory, Mountain, Wind, ShieldCheck, ChevronRight } from "lucide-react";

export const BentoIndustries = () => {
  const sites = [
    { 
      title: "Kalinganagar Steel Cluster", 
      partner: "TATA STEEL",
      desc: "Thermal fusion for high-heat blast furnace monitoring. Climate-adapted cooling active at 45°C ambient.", 
      icon: Factory, 
      span: "md:col-span-2",
      slug: "steel",
      img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2070" 
    },
    { 
      title: "Talcher Coal Fields", 
      partner: "MCL",
      desc: "Ghost-path navigation through heavy coal dust and methane-rich zones in GPS-denied subsurface mines.", 
      icon: Mountain, 
      span: "md:col-span-1",
      slug: "mining",
      img: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=2070"
    },
    { 
      title: "Angul Aluminum Complex", 
      partner: "NALCO",
      desc: "IoT sync for real-time electrolytic cell diagnostics. T-LED peripheral arch monitoring core vitals.", 
      icon: Wind, 
      span: "md:col-span-1",
      slug: "aluminum",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
    },
    { 
      title: "Tactical Defense Ops", 
      partner: "DRDO / STRATEGIC",
      desc: "Zero-latency 3D spatial awareness for high-stress mission profiles in GPS-shielded environments.", 
      icon: ShieldCheck, 
      span: "md:col-span-2",
      slug: "defense",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2070"
    },
  ];

  return (
    <section id="verticals" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20">
              <span className="text-[10px] font-mono text-amber-500 font-black uppercase tracking-[0.4em]">Operational Proving Grounds</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">Field <br/> <span className="text-amber-500">Validation.</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm font-medium leading-relaxed border-r border-white/5 pr-8 text-right">
            Surviving the monsoon, dust, and 45°C ambient reality of Odisha's high-hazard industrial belts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sites.map((site, i) => (
            <div key={i} className={`group p-10 rounded-sm bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all duration-700 relative overflow-hidden ${site.span}`}>
              {/* Field-Cam Filtered Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={site.img} 
                  alt={site.title} 
                  className="w-full h-full object-cover grayscale opacity-15 contrast-125 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(5,5,5,0.8)_100%)]" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-sm bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <site.icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="text-[9px] font-mono text-gray-600 font-black uppercase tracking-widest mb-1">Deployment Site</span>
                       <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-black text-white uppercase tracking-tighter">{site.partner}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{site.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-sm max-w-sm group-hover:text-gray-400 transition-colors">{site.desc}</p>
                  </div>
                </div>
                
                <Link href={`/sectors/${site.slug}`} className="mt-12 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 group-hover:text-white transition-colors">
                  Analyze Operational Data <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* HUD scanlines */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(255,176,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,176,0,0.5)_1px,transparent_1px)] bg-[background-size:20px_20px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
