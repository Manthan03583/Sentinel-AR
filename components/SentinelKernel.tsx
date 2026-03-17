"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Lock, CloudOff, Zap, ShieldAlert, Wifi, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: CloudOff,
    title: "Zero-Cloud Dependency",
    desc: "100% local inference ensures operational integrity in shielded environments.",
  },
  {
    icon: Lock,
    title: "Secure Mesh",
    desc: "AES-256 encrypted peer-to-peer communication between active units.",
  },
  {
    icon: Zap,
    title: "Dual-System Redundancy",
    desc: "Independent Safety Logic for always-on threat detection even during system restarts.",
  },
];

export const SentinelKernel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCrashed, setIsCrashed] = useState(false);

  useGSAP(() => {
    gsap.from(".feature-row", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  // Simulate a failover every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsCrashed(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-[#080808] border-y border-white/5 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-12 relative z-10">
          <div className="feature-row space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
               <span className="w-2 h-2 bg-amber-500 animate-pulse rounded-full" />
               <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest">Dual-Layer Safety Protocol</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 uppercase tracking-tighter">SENTINEL<span className="text-amber-500"> KERNEL</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
              A bespoke Edge-AI operating system designed for zero-latency. We separated the AR stack from the Safety stack to ensure worker protection is <span className="text-amber-500">Always-On.</span>
            </p>
          </div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="feature-row flex gap-6 items-start p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all duration-500 group">
                <div className="p-3 bg-black rounded-xl border border-white/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black mb-1 text-white uppercase tracking-tight">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fail-Safe Animation Container */}
        <div className="feature-row relative h-[600px] w-full bg-black border border-white/5 rounded-[3rem] overflow-hidden flex flex-col items-center justify-center p-12 group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,176,0,0.05)_0%,transparent_70%)] opacity-50" />
          
          {/* Main Neural Kernel */}
          <div className={`relative z-10 text-center space-y-8 transition-all duration-700 ${isCrashed ? 'opacity-20 grayscale scale-95 blur-sm' : 'opacity-100'}`}>
            <div className="w-48 h-48 mx-auto border-2 border-amber-500/50 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,176,0,0.1)] relative">
              <Cpu className="w-20 h-20 text-amber-500" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[8px] font-black uppercase tracking-widest">NEURAL KERNEL</div>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[10px] tracking-widest text-amber-500 font-black uppercase">Spatial AR Engine</div>
              <div className="text-xs text-zinc-500 font-bold uppercase">Processing High-Density Sensor Fusion</div>
            </div>
          </div>

          {/* Crash Overlay */}
          <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-300 ${isCrashed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
             <div className="text-red-500 font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 animate-pulse">!! PRIMARY_OS_RESTART !!</div>
             <div className="w-full h-[1px] bg-red-500/20 absolute top-1/2" />
          </div>

          {/* Safety Fail-Safe (Always Active) */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-full px-12">
             <div className={`p-6 rounded-2xl border transition-all duration-500 flex items-center justify-between ${isCrashed ? 'bg-red-500/10 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center gap-4">
                   <div className={`p-2 rounded-lg ${isCrashed ? 'bg-red-500 text-white animate-pulse' : 'bg-zinc-800 text-zinc-500'}`}>
                      <ShieldAlert className="w-5 h-5" />
                   </div>
                   <div>
                      <div className={`text-[8px] font-black uppercase tracking-widest ${isCrashed ? 'text-red-500' : 'text-zinc-500'}`}>Safety Logic Node</div>
                      <div className="text-xs font-black text-white uppercase tracking-tight">Always-On Threat Detection</div>
                   </div>
                </div>
                <div className="flex gap-2">
                   <div className={`w-1.5 h-1.5 rounded-full ${isCrashed ? 'bg-red-500 animate-ping' : 'bg-green-500'}`} />
                   <div className="text-[10px] font-mono text-white/40 font-bold uppercase">LIVE</div>
                </div>
             </div>
          </div>

          <div className="absolute top-12 left-12 font-mono text-[8px] text-zinc-700 space-y-1">
             <div>[KERNEL_ID]: 0x7FF_ALPHA</div>
             <div>[UPTIME]: 342:12:05</div>
             <div>[VOLTAGE]: 3.8V STABLE</div>
          </div>

          {/* Background Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,176,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,176,0,0.03)_1px,transparent_1px)] bg-[size:40px:40px] pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

