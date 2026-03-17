"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Shield, 
  Activity, 
  Zap, 
  ChevronRight,
  Database,
  Flame,
  Settings,
  Eye
} from "lucide-react";

const SECTOR_DATA = {
  title: "Manufacturing",
  headline: "Precision Through Spatial Overlays.",
  desc: "High-speed assembly lines and complex machinery demand zero cognitive delay. SentinelAR projects critical telemetry and 3D digital twin guides directly into the technician's field of view, turning maintenance into a seamless workflow.",
  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
  stats: [
    { label: "Uptime Increase", val: "24%" },
    { label: "Training Speed", val: "3x Faster" },
    { label: "Error Reduction", val: "68%" }
  ],
  interventions: [
    {
      title: "Real-time Thermal Overlays",
      desc: "Instantly visualize heat stress on active machinery, identifying potential failures before they occur through integrated thermal sensor fusion.",
      icon: Flame
    },
    {
      title: "Step-by-Step Maintenance",
      desc: "Hands-free 3D animations overlaid on physical assets guide technicians through complex repairs, eliminating the need for manuals.",
      icon: Settings
    },
    {
      title: "Remote Expert Support",
      desc: "Connect instantly with off-site specialists who see exactly what the technician sees, providing real-time spatial annotations.",
      icon: Eye
    }
  ]
};

export default function ManufacturingPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-[#F8FAFC] antialiased pb-20">
      {/* Subpage Header */}
      <nav className="fixed top-0 w-full z-50 py-6 px-8 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/#verticals" className="flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-colors font-mono text-[10px] font-bold tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" /> Back to Verticals
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center">
              <Shield className="text-black w-4 h-4" />
            </div>
            <span className="font-bold text-lg uppercase tracking-tight">Sentinel<span className="text-amber-500">AR</span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end px-8 md:px-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={SECTOR_DATA.img} alt={SECTOR_DATA.title} className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-block px-4 py-1 border border-amber-500 text-amber-500 text-[9px] font-bold tracking-[0.4em] uppercase">
            Sector Briefing // 02
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            {SECTOR_DATA.title}
          </h1>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
            {SECTOR_DATA.headline}
          </p>
        </div>
      </section>

      {/* Operational Stats */}
      <section className="py-12 px-8 md:px-20 border-y border-zinc-900 bg-white/5">
        <div className="max-w-77xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {SECTOR_DATA.stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              <div className="text-4xl font-bold text-white uppercase">{stat.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Manufacturing <br/> <span className="text-amber-500">Excellence.</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              {SECTOR_DATA.desc}
            </p>
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <Activity className="text-amber-500 w-6 h-6" />
                <span className="font-mono text-xs text-zinc-300 font-bold tracking-widest uppercase">Line-Speed Telemetry Active</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium italic">
                "We've reduced our unplanned downtime by nearly 30% by giving our maintenance team 'X-ray vision' into our complex assembly units."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {SECTOR_DATA.interventions.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-zinc-900/30 border border-zinc-800 hover:border-amber-500/40 transition-all group">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none">Optimize your <br/> <span className="text-amber-500">Factory Floor</span> today.</h2>
          <div className="flex justify-center">
            <button className="px-12 py-6 bg-amber-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-xl shadow-amber-500/20 flex items-center gap-4">
              Initialize Technical Pilot <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
