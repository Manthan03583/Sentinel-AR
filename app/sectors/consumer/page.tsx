"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Shield, 
  Rocket, 
  Zap, 
  ChevronRight,
  Database,
  Cpu,
  Eye,
  Activity,
  Maximize2
} from "lucide-react";

const SECTOR_DATA = {
  title: "Phase 3: The Universal Wearable",
  headline: "Indestructible Spatial Intelligence for Everyone.",
  desc: "The Atlas V1 architecture is a universal spatial computing engine. We are miniaturizing our industrial-grade safety tech for the $100B+ global consumer market—starting with high-performance motorcycle and action-sports wearables.",
  img: "/helmet5.png",
  stats: [
    { label: "Market Potential", val: "$100B+" },
    { label: "Hardware Weight", val: "< 250g" },
    { label: "Battery Life", val: "12 Hours" }
  ],
  interventions: [
    {
      title: "High-Speed HUD",
      desc: "Real-time navigation and hazard alerts projected directly onto the visor for motorcycle riders and extreme athletes, processed locally with zero latency.",
      icon: Maximize2
    },
    {
      title: "Air-Gapped Privacy",
      desc: "Unlike consumer AR, Sentinel OS ensures your spatial data never leaves the device. No cloud logging, no tracking, pure local intelligence.",
      icon: Shield
    },
    {
      title: "Impact-Resistant Build",
      desc: "Leveraging our industrial magnesium-polymer frames to create the world's most durable consumer wearable, built for the road and the trail.",
      icon: Zap
    }
  ]
};

export default function ConsumerPage() {
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
            Product Roadmap // 2027
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Universal <br/> <span className="text-amber-500">Wearables.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
            {SECTOR_DATA.headline}
          </p>
        </div>
      </section>

      {/* Operational Stats */}
      <section className="py-12 px-8 md:px-20 border-y border-zinc-900 bg-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
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
            <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Strategic <br/> <span className="text-amber-500">Expansion.</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              {SECTOR_DATA.desc}
            </p>
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <Rocket className="text-amber-500 w-6 h-6" />
                <span className="font-mono text-xs text-zinc-300 font-bold tracking-widest uppercase">Atlas V1 Miniaturization Active</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium italic">
                &quot;We are taking the core safety DNA of the smelter and putting it into every helmet on the road. The Atlas V1 is the engine for the next generation of human vision.&quot;
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
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none">Be part of the <br/> <span className="text-amber-500">Sovereign Vision.</span></h2>
          <div className="flex justify-center">
            <Link href="/#contact" className="px-12 py-6 bg-amber-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-xl shadow-amber-500/20 flex items-center gap-4">
              Join the Alpha Waiting List <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
