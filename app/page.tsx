"use client";

import React from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Navbar } from "@/components/Navbar";
import { BentoIndustries } from "@/components/BentoIndustries";
import { PilotForm } from "@/components/PilotForm";
import { KeyholeProblem } from "@/components/KeyholeProblem";
import { VisorSimulator } from "@/components/VisorSimulator";
import { PriceComparison } from "@/components/PriceComparison";
import { OdishaAdvantage } from "@/components/OdishaAdvantage";

// Dynamically import Three.js components to prevent ChunkLoadErrors and SSR issues
const Hero = dynamic(() => import("@/components/Hero").then((mod) => mod.Hero), {
  ssr: false,
});

const SentinelKernel = dynamic(() => import("@/components/SentinelKernel").then((mod) => mod.SentinelKernel), {
  ssr: false,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
      <VisorSimulator />
      <BentoIndustries />
      <OdishaAdvantage />
      <PriceComparison />
      <PilotForm />
      <Footer />
    </main>
  );
}
