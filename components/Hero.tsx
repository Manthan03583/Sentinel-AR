"use client";

import React, { useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  Float, 
  Points,
  PointMaterial
} from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, Cpu, Zap, ShieldAlert } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LiDARCloud = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 3000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group position={[-2, 0, 0]}>
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial transparent color="#FFB000" size={0.012} sizeAttenuation={true} depthWrite={false} opacity={0.25} />
      </Points>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="#FFB000" wireframe opacity={0.05} transparent />
      </mesh>
    </group>
  );
};

export const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-text", { y: 60, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" });
    gsap.from(".hero-visual", { scale: 0.95, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.4 });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <LiDARCloud />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-12 order-1 lg:order-1">
            <div className="hero-text space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/5 border border-amber-500/10 rounded-sm">
                <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                <span className="text-[8px] md:text-[9px] font-mono text-amber-500 font-black uppercase tracking-[0.3em]">Protocol: SentinelAR // Sovereign Spatial Computing</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-white uppercase">
                The World&apos;s First <br/>
                <span className="text-amber-500 drop-shadow-[0_0_15px_rgba(255,176,0,0.3)]">Standalone, <br/> Air-Gapped</span> <br/>
                AR Platform.
              </h1>
            </div>

            <p className="hero-text text-base md:text-lg text-gray-400 max-w-lg font-medium leading-relaxed border-l-2 border-amber-500/20 pl-6">
              From 180°C steel smelters to GPS-denied combat zones. No cloud. No latency. <span className="text-white">Pure Sovereign Intelligence.</span>
            </p>

            <div className="hero-text flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact" className="bg-amber-500 text-black px-8 lg:px-12 py-4 lg:py-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl shadow-amber-500/20 active:scale-95 text-center">
                Initiate Technical Pilot
              </Link>
              <Link href="#tech" className="px-8 lg:px-12 py-4 lg:py-5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all text-center">
                Briefing Dossier
              </Link>
            </div>

            <div className="hero-text grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10 pt-12 border-t border-white/5 opacity-60 grayscale hover:grayscale-0 transition-all">
              {[
                { label: "Core", val: "Sovereign AI", icon: Cpu },
                { label: "Link", val: "Encrypted Mesh", icon: Zap },
                { label: "Build", val: "Aerospace-Grade Thermals", icon: ShieldAlert }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-[10px] md:text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
                    <stat.icon className="w-3 h-3 text-amber-500" /> {stat.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual relative order-2 lg:order-2 px-4 md:px-0">
             <div className="relative group overflow-hidden bg-white/[0.02] border border-white/5 p-4 rounded-3xl backdrop-blur-sm shadow-2xl">
                <Image 
                  src="/helmet3.png" 
                  alt="SentinelAR Final Production Candidate"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto drop-shadow-[0_0_50px_rgba(255,176,0,0.1)] grayscale-[0.2] hover:grayscale-0 transition-all duration-700 max-w-[500px] mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex flex-col items-end gap-2">
                   <div className="px-3 py-1 bg-amber-500 text-black text-[8px] md:text-[9px] font-black uppercase tracking-widest">SENTINEL-AR-PRO</div>
                   <div className="px-3 py-1 bg-black/80 border border-white/10 text-amber-500 text-[8px] md:text-[9px] font-mono tracking-widest">SYNC_4.0ms</div>
                </div>
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 font-mono text-[7px] md:text-[8px] text-zinc-500 space-y-1">
                   <div>[SCAN_VOL_LIDAR]: 34.2m³</div>
                   <div>[TEMP_CORE]: 32.4°C (STABLE)</div>
                </div>
                <div className="scanline opacity-20" />
             </div>
             <div className="absolute -inset-10 bg-amber-500/5 blur-[120px] -z-10 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
    </section>
  );
};
