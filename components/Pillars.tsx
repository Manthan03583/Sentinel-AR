"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ShieldAlert, 
  Lightbulb, 
  Activity, 
  Wind, 
  Package, 
  ArrowUpRight 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    id: "safety",
    title: "Zero-Harm Environments",
    description: "Real-time AI computer vision identifies 'Red Zones' and moving machinery blind spots, projecting visual warnings directly onto the visor.",
    icon: ShieldAlert,
    color: "var(--accent-red)",
    data: "98.4% Danger Detection Rate"
  },
  {
    id: "knowledge",
    title: "Immersive Knowledge Transfer",
    description: "Providing junior technicians with 3D 'digital twin' overlays and step-by-step spatial guidance for complex maintenance tasks.",
    icon: Lightbulb,
    color: "var(--accent-cyan)",
    data: "70% Skill Gap Reduction"
  },
  {
    id: "predictive",
    title: "Predictive Maintenance",
    description: "Real-time telemetry (pressure, temperature, flow rates) is mapped onto physical assets via the visor, enabling 'eyes-on' diagnostics.",
    icon: Activity,
    color: "var(--accent-cyan)",
    data: "15ms Data Latency"
  },
  {
    id: "atmospheric",
    title: "Atmospheric Transparency",
    description: "Utilizing LiDAR and Thermal sensor fusion to project wireframe maps of the environment, allowing safe navigation through smoke or dust.",
    icon: Wind,
    color: "var(--accent-amber)",
    data: "85m Thermal Range"
  },
  {
    id: "logistics",
    title: "Spatial Logistics",
    description: "Reducing search-time and inventory errors through object recognition and indoor AR-wayfinding within vast industrial warehouses.",
    icon: Package,
    color: "var(--accent-cyan)",
    data: "40% Efficiency Gain"
  }
];

export const Pillars = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".pillar-card");
    
    cards.forEach((card: unknown) => {
      const el = card as HTMLElement;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Hover-like persistent animation for HUD feel
      gsap.to(el.querySelector(".card-glow"), {
        opacity: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Animate section title
    gsap.from(".section-title span", {
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-black relative overflow-hidden" id="vision">
      <div className="max-w-7xl mx-auto">
        <div className="section-title mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-cyan-500" />
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">Strategic Pillars</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="inline-block mr-4">REDEFINING</span>
            <span className="inline-block text-cyan-400">OPERATIONAL</span>
            <span className="inline-block">SAFETY.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="pillar-card group relative hud-glass p-8 rounded-sm hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="card-glow absolute inset-0 bg-cyan-500/5 opacity-0 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm">
                    <pillar.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-[8px] font-mono text-cyan-500/50 uppercase tracking-widest border-b border-cyan-500/20 pb-1">
                    {pillar.data}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-12">
                  {pillar.description}
                </p>

                <button className="flex items-center gap-2 text-[10px] font-mono text-cyan-500 hover:text-cyan-400 uppercase tracking-widest transition-colors">
                  Analyze Protocol
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

              {/* Decorative HUD corners */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-500/30" />
            </div>
          ))}
          
          {/* Technical Teaser Card */}
          <div className="pillar-card group relative border border-dashed border-neutral-800 p-8 rounded-sm flex flex-col items-center justify-center text-center opacity-50">
            <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center mb-6">
              <div className="w-2 h-2 bg-neutral-700 rounded-full animate-ping" />
            </div>
            <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
              Scanning for Additional Interventions...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
