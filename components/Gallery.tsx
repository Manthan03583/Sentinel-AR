"use client";

import React from "react";

export const Gallery = () => {
  const milestones = [
    { src: "/helmet5.png", phase: "Milestone 01 // Structural", title: "The Tech-Spine", desc: "Raw AL6061-T6 Aluminum internal chassis. Structural foundation for all sensor mounting points." },
    { src: "/helmet6.png", phase: "Milestone 02 // Optics", title: "180° T-LED Assembly", desc: "Curved optical stack integration before monocoque sealing. 1200 Nit sunlight readability." },
    { src: "/helmet7.png", phase: "Milestone 03 // Thermal", title: "Active Cooling Core", desc: "MagLev fan and Gore-Tex™ membrane integration for 45°C ambient resilience." },
    { src: "/helmet8.png", phase: "Milestone 04 // QC", title: "Final Stress Test", desc: "SentinelAR unit undergoing coal dust and water ingress testing (IP67 certification phase)." },
    { src: "/helmet2.png", phase: "Milestone 05 // Prototype", title: "Field Alpha", desc: "First full assembly used in initial TATA Steel Kalinganagar site walkthroughs." },
    { src: "/helmet3.png", phase: "Milestone 06 // Production", title: "SentinelAR Final", desc: "The production-ready monocoque design. Optimized for 50/50 weight distribution." }
  ];

  return (
    <section id="gallery" className="py-32 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20">
              <span className="text-[9px] font-mono text-amber-500 font-bold uppercase tracking-[0.4em]">Hardware Development Dossier</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">Build <br/> <span className="text-amber-500">Milestones.</span></h2>
          </div>
          <p className="text-gray-500 text-lg font-medium border-l border-white/10 pl-8 leading-relaxed">From raw CNC-machined aluminum to the finalized monocoque build. Every iteration stress-tested for the Odisha monsoon and coal belt dust.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((item, i) => (
            <div key={i} className="group relative bg-white/[0.03] border border-white/10 p-2 overflow-hidden hover:border-amber-500/40 transition-all duration-500">
              <div className="aspect-square relative overflow-hidden bg-black">
                {/* Default Color Image */}
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Technical X-Ray Overlay on Hover */}
                <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-100 mix-blend-color transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 x-ray-filter transition-opacity duration-500 pointer-events-none">
                   <img src={item.src} className="w-full h-full object-contain p-8 scale-110" alt="x-ray" />
                </div>

                {/* Engineering Data Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black via-black/40 to-transparent translate-y-4 group-hover:translate-y-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[8px] font-mono text-amber-500 font-bold uppercase tracking-[0.2em] mb-2">
                       <span>{item.phase}</span>
                       <span className="animate-pulse">● LOG_ACTIVE</span>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">{item.title}</h3>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                    <div className="flex gap-1 pt-2">
                      {[...Array(8)].map((_, j) => (
                        <div key={j} className="w-full h-0.5 bg-amber-500/20 group-hover:bg-amber-500 transition-colors" style={{ transitionDelay: `${j * 30}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-amber-500 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
