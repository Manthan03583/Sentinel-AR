"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { BenchmarkIntegrations } from "@/components/BenchmarkIntegrations";
import { HardSpecs } from "@/components/HardSpecs";
import { BentoIndustries } from "@/components/BentoIndustries";
import { TechSection } from "@/components/TechSection";
import { MissionFootage } from "@/components/MissionFootage";
import { Gallery } from "@/components/Gallery";
import { PilotForm } from "@/components/PilotForm";
import { KeyholeProblem } from "@/components/KeyholeProblem";
import { SentinelKernel } from "@/components/SentinelKernel";
import { PriceComparison } from "@/components/PriceComparison";
import { OdishaAdvantage } from "@/components/OdishaAdvantage";
import { IndustrialScroller } from "@/components/IndustrialScroller";
import { Architecture } from "@/components/Architecture";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ValueProposition = () => {
  return (
    <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
       <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(255,176,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,176,0,0.5)_1px,transparent_1px)] bg-[background-size:30px_30px]" />
       
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          {[
            { label: "Odisha-Rugged", status: "MONSOON_READY_BUILD", desc: "Labyrinth-design 'Rain Gills' and Gore-Tex™ membranes prevent coal dust and water ingress while allowing heat to vent." },
            { label: "Thermal Resilience", status: "CLIMATE_ADAPTATION", desc: "Active cooling via a 20mm MagLev fan ensures the NVIDIA core remains stable in 45°C ambient industrial environments." },
            { label: "Zero-Trust Mesh", status: "SECURE_LOCAL_KERNAL", desc: "Edge processing ensures mission-critical telemetry stays within your private network via LoRaWAN and 5G/Wi-Fi 6 links." }
          ].map((item, i) => (
            <div key={i} className="group space-y-6">
              <div className="items-center gap-4 flex">
                <div className="text-5xl font-black text-white/10 group-hover:text-amber-500/20 transition-colors duration-500">0{i+1}</div>
                <div className="h-px flex-1 bg-white/5 group-hover:bg-amber-500/20 transition-all duration-500" />
                <div className="text-[8px] font-mono text-amber-500/40 uppercase tracking-[0.3em] font-bold">{item.status}</div>
              </div>
              <h3 className="text-3xl font-bold text-white uppercase tracking-tighter group-hover:text-amber-500 transition-colors duration-500">{item.label}</h3>
              <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-400 transition-colors duration-500">{item.desc}</p>
              <div className="flex gap-1 pt-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-4 h-1 bg-amber-500/10 group-hover:bg-amber-500/40 transition-colors duration-500" style={{ transitionDelay: `${j * 100}ms` }} />
                ))}
              </div>
            </div>
          ))}
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 group">
               <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center">
                 <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M16 2L4 7V15C4 22.38 9.11 29.22 16 31C22.89 29.22 28 22.38 28 15V7L16 2Z" fill="#FFB000"/>
                 </svg>
               </div>
               <span className="font-bold text-xl text-white uppercase tracking-tight">Sentinel<span className="text-amber-500">AR</span></span>
               <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest border-l border-gray-800 pl-4">Industrial OS v4.0</span>
            </div>
            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">© 2026 Sentinel AR Technologies Pvt. Ltd. All rights reserved.</p>
         </div>
         <div className="flex gap-10 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-amber-500">Platform</a>
            <a href="#" className="hover:text-amber-500">Security</a>
            <a href="#" className="hover:text-amber-500">Partners</a>
            <a href="#" className="hover:text-amber-500">Legal</a>
         </div>
      </div>
    </footer>
  );
};

export default function SentinelOS() {
  return (
    <main className="bg-[#050505] min-h-screen text-[#F8FAFC] selection:bg-amber-500 selection:text-black antialiased">
      <Navbar />
      <Hero />
      <KeyholeProblem />
      <SentinelKernel />
      <BentoIndustries />
      <OdishaAdvantage />
      <PriceComparison />
      <PilotForm />
      <Footer />
    </main>
  );
}
