"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Lock, Zap, ShieldAlert, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const KERNEL_LOGS = [
  "Initializing Security_Foundation...",
  "Loading Sovereign_Visual_Pipe...",
  "Calibrating Spatial_Fusion_Engine...",
  "Establishing Secure_Mesh_Link...",
  "Safety_Protocol_Node: ACTIVE",
  "Edge_AI_Inference: ONLINE",
  "Core_Stability_Check: 99.9%",
  "Isolation_Protocol: VERIFIED",
  "Syncing with Industrial_Node_01...",
  "SECURE_BOOT_STREAM: SUCCESS"
];

const features = [
  {
    icon: Cpu,
    title: "Atlas V1 Compute Module",
    desc: "Our proprietary 8-layer HDI PCB architected for the RK3588S SoC, delivering 6 TOPs of local NPU power.",
  },
  {
    icon: ShieldAlert,
    title: "Hardened Linux Stack",
    desc: "An optimized, air-gapped Linux environment tailored for the Atlas V1 hardware, ensuring maximum hardware acceleration for computer vision with near-zero latency.",
  },
  {
    icon: Zap,
    title: "Zero-Trust Sovereignty",
    desc: "Complete hardware-level isolation. No cloud, no external dependencies, pure local execution.",
  },
];

const KernelTerminalLogs = ({ isCrashed }: { isCrashed: boolean }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      if (!isCrashed) {
        setLogs(prev => [KERNEL_LOGS[logIndex], ...prev].slice(0, 5));
        setLogIndex(prev => (prev + 1) % KERNEL_LOGS.length);
      }
    }, 1500);

    return () => clearInterval(logInterval);
  }, [isCrashed, logIndex]);

  return (
    <div className="h-20 md:h-24 w-48 md:w-64 mx-auto overflow-hidden text-left font-mono text-[7px] md:text-[8px] space-y-1 bg-white/[0.02] p-3 md:p-4 border border-white/5 rounded-lg">
       <div className="flex items-center gap-2 mb-2 text-zinc-500 border-b border-white/5 pb-1">
          <Terminal className="w-2 h-2" />
          <span>HARDENED_BOOT_STREAM</span>
       </div>
       {logs.map((log, i) => (
          <div key={i} className={`truncate ${i === 0 ? 'text-amber-500' : 'text-zinc-600'}`}>
             {">"} {log}
          </div>
       ))}
    </div>
  );
};

export const SentinelKernel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCrashed, setIsCrashed] = useState(false);

  useGSAP(() => {
    gsap.from(".feature-row", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"
    });
  }, { scope: containerRef });

  useEffect(() => {
    const crashInterval = setInterval(() => {
      setIsCrashed(prev => !prev);
    }, 8000);

    return () => {
      clearInterval(crashInterval);
    };
  }, []);

  return (
    <section id="tech" ref={containerRef} className="py-32 bg-[#080808] border-y border-white/5 text-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-12 relative z-10">
          <div className="feature-row space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
               <span className="w-2 h-2 bg-amber-500 animate-pulse rounded-full" />
               <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest">The Engine</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 uppercase tracking-tighter">SENTINEL<span className="text-amber-500"> OS</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
              A Hardened Linux Stack. An optimized, air-gapped Linux environment tailored for the <span className="text-amber-500 uppercase">Atlas V1</span> hardware, ensuring maximum hardware acceleration for computer vision with near-zero latency.
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
        <div className="feature-row relative h-[500px] md:h-[650px] w-full bg-black border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center justify-between p-8 md:p-12 group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,176,0,0.05)_0%,transparent_70%)] opacity-50" />
          
          <div className="w-full flex justify-between items-start z-10">
             <div className="space-y-1">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">NPU_Load</div>
                <div className="flex gap-1">
                   {[...Array(6)].map((_, i) => (
                      <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-amber-500' : 'bg-zinc-800'}`} />
                   ))}
                </div>
             </div>
             <div className="text-right">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Active_TOPs</div>
                <div className="text-lg font-black text-amber-500">{isCrashed ? "0.0" : "6.0"}</div>
             </div>
          </div>

          <div className={`relative z-10 text-center space-y-6 md:space-y-8 transition-all duration-700 ${isCrashed ? 'opacity-20 grayscale scale-95 blur-sm' : 'opacity-100'}`}>
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto border-2 border-amber-500/50 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(255,176,0,0.1)] relative">
              <Cpu className={`w-12 h-12 md:w-20 md:h-20 text-amber-500 ${!isCrashed && 'animate-pulse'}`} />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[7px] md:text-[8px] font-black uppercase tracking-widest">ATLAS V1 COMPUTE</div>
              
              <div className="absolute inset-0 border border-dashed border-amber-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-2 border border-dotted border-cyan-500/20 rounded-full animate-[spin_15s_linear_reverse_infinite]" />
            </div>
            
            <KernelTerminalLogs isCrashed={isCrashed} />
          </div>

          <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-300 p-4 text-center ${isCrashed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
             <div className="text-red-500 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4 animate-pulse text-center">!! INTERFACE_RESTART_ISOLATED !!</div>
             <div className="w-full h-[1px] bg-red-500/20 absolute top-1/2" />
             <div className="mt-4 text-[7px] md:text-[8px] font-mono text-red-500/50">HARDENED_SYSTEM_UNAFFECTED...</div>
          </div>

          <div className="relative z-30 w-full">
             <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all duration-500 flex items-center justify-between ${isCrashed ? 'bg-red-500/10 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 'bg-white/5 border-white/10'}`}>
                <div className="flex items-center gap-3 md:gap-4">
                   <div className={`p-2 rounded-lg ${isCrashed ? 'bg-red-500 text-white animate-pulse' : 'bg-zinc-800 text-zinc-500'}`}>
                      <ShieldAlert className="w-4 h-4 md:w-5 md:h-5" />
                   </div>
                   <div>
                      <div className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${isCrashed ? 'text-red-500' : 'text-zinc-500'}`}>Hardware Fail-Safe</div>
                      <div className="text-[10px] md:text-xs font-black text-white uppercase tracking-tight">Always-On Safety Layer</div>
                   </div>
                </div>
                <div className="flex gap-2">
                   <div className={`w-1.5 h-1.5 rounded-full ${isCrashed ? 'bg-red-500 animate-ping' : 'bg-green-500'}`} />
                   <div className="text-[8px] md:text-[10px] font-mono text-white/40 font-bold uppercase hidden xs:block">ACTIVE</div>
                </div>
             </div>
          </div>

          <div className="absolute top-1/2 -left-20 -rotate-90 font-mono text-[8px] text-zinc-800 tracking-[1em] uppercase hidden lg:block">
             Atlas_V1_Hardened_Stack
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,176,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,176,0,0.03)_1px,transparent_1px)] bg-[background-size:40px_40px] pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
