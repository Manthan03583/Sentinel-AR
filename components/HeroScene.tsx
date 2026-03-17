"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, MeshDistortMaterial, Float, Sparkles, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { ArrowDown, Cpu, Shield, Zap } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HelmetModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.35, 128, 32]} />
          <MeshDistortMaterial 
            color="#050505" 
            metalness={0.9} 
            roughness={0.1} 
            distort={0.1}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Active Visor HUD Plane */}
      <mesh position={[0, 0, 1.3]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2.8, 1]} />
        <meshBasicMaterial 
          color="#FFB000" 
          transparent 
          opacity={0.05} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* HUD Data Points */}
      <Sparkles count={50} scale={3} size={2} speed={0.4} opacity={0.5} color="#FFB000" />
      
      <pointLight position={[5, 5, 5]} intensity={1} color="#FFB000" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#F8FAFC" />
    </group>
  );
};

export const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5
    })
    .from(".hero-subtext", {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, "-=0.8")
    .from(".hero-hud", {
      opacity: 0,
      x: -20,
      stagger: 0.2,
      duration: 1,
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <Environment preset="city" />
            <HelmetModel />
            <ContactShadows opacity={0.4} scale={10} blur={2.5} far={4} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay UI */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 hero-hud">
              <div className="w-2 h-2 bg-[#FFB000] rounded-full animate-pulse" />
              <span className="text-xs font-mono text-[#FFB000] tracking-[0.3em] uppercase">System Online // v4.0.2</span>
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
              THE SPATIAL OS <br/>
              FOR <span className="text-[#FFB000]">SITUATIONAL</span> <br/>
              DOMINANCE.
            </h1>

            <p className="hero-subtext text-lg text-gray-400 max-w-xl font-light leading-relaxed">
              Pivot from consumer toys to mission-critical hardware. 
              Digitize the frontline with 180° spatial intelligence and Edge-AI sensor fusion.
            </p>

            <div className="hero-hud flex gap-6 pt-8 pointer-events-auto">
              <button className="bg-[#FFB000] text-black px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-[#e69f00] transition-colors flex items-center gap-3">
                Initialize System <ArrowDown className="w-4 h-4" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                Request Briefing
              </button>
            </div>
          </div>

          {/* Right Column HUD Stats */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-end h-full pb-32 space-y-6 items-end">
            <div className="hero-hud backdrop-blur-md bg-white/5 border border-white/10 p-6 w-64">
              <div className="flex justify-between items-center mb-2">
                <Cpu className="w-5 h-5 text-[#FFB000]" />
                <span className="text-xs font-mono text-gray-400">LATENCY</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white">35ms</div>
            </div>

            <div className="hero-hud backdrop-blur-md bg-white/5 border border-white/10 p-6 w-64">
              <div className="flex justify-between items-center mb-2">
                <Shield className="w-5 h-5 text-[#FFB000]" />
                <span className="text-xs font-mono text-gray-400">RATING</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white">IP67 RUGGED</div>
            </div>

            <div className="hero-hud backdrop-blur-md bg-white/5 border border-white/10 p-6 w-64">
              <div className="flex justify-between items-center mb-2">
                <Zap className="w-5 h-5 text-[#FFB000]" />
                <span className="text-xs font-mono text-gray-400">UPTIME</span>
              </div>
              <div className="text-2xl font-mono font-bold text-white">99.99%</div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};
