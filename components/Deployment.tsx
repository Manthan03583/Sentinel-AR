"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, HardDrive, BarChart, Server, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MODELS = [
  {
    icon: HardDrive,
    title: "Ruggedized Hardware",
    description: "Deployment of custom IP67-rated 180° T-LED visors designed for extreme conditions.",
    data: "Deployment-Ready: v4.2"
  },
  {
    icon: Server,
    title: "Sentinel-OS SaaS",
    description: "Recurring software licensing for the core spatial intelligence and AI-processing kernel.",
    data: "Subscription: Enterprise"
  },
  {
    icon: BarChart,
    title: "Enterprise Integration",
    description: "API-first architecture designed to ingest data from existing SCADA, ERP, and IoT systems.",
    data: "Integration-Tier: Unified"
  }
];

export const Deployment = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal deployment cards
    gsap.from(".deployment-card", {
      scrollTrigger: {
        trigger: ".deployment-card",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    // Animate CTA Button
    gsap.to(".cta-pulse", {
      scale: 1.05,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-black relative" id="deployment">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-3">
            <div className="w-8 h-[1px] bg-cyan-500" />
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
              Business & Deployment Model
            </span>
            <div className="w-8 h-[1px] bg-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            MISSION<span className="text-cyan-400"> READY.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Digitize your frontline operations with a unified &quot;Single Pane of Glass&quot; 
            on every worker&apos;s visor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left py-12">
          {MODELS.map((model, i) => (
            <div key={i} className="deployment-card hud-glass p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <model.icon className="w-12 h-12 text-cyan-400" />
              </div>
              
              <div className="text-[8px] font-mono text-cyan-500/50 uppercase tracking-widest mb-4">
                {model.data}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                {model.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA Area */}
        <div className="relative py-24 px-8 rounded-lg overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-cyan-500/5 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] z-[-1]" />
          
          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl">
              Eliminate the Information Gap Today.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="cta-pulse relative bg-cyan-500 text-black px-12 py-5 rounded-sm font-mono text-sm uppercase tracking-widest font-bold hover:bg-cyan-400 transition-all flex items-center gap-4">
                Initialize System
                <ArrowRight className="w-4 h-4" />
                <div className="absolute -inset-1 border border-cyan-500/50 rounded-sm opacity-50" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full animate-pulse" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest">
                  Systems Awaiting Deployment
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Corner HUD */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40" />
        </div>
      </div>
    </section>
  );
};
