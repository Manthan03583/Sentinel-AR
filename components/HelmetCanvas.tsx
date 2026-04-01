"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Float, 
  PerspectiveCamera,
  Environment
} from "@react-three/drei";
import * as THREE from "three";

const PrototypeHelmet = () => {
  const groupRef = useRef<THREE.Group>(null);
  const internalRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.1;
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.05;
    }
    if (internalRef.current) {
      internalRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
        
        {/* 1. Main Atlas V3 Shell (Based on Blueprint) */}
        <mesh castShadow>
          <sphereGeometry args={[1.5, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.52]} />
          <meshPhysicalMaterial 
            color="#f8fafc" 
            roughness={0.7} 
            metalness={0.2}
            clearcoat={0.2}
            envMapIntensity={1}
          />
        </mesh>

        {/* 2. Top Weatherproof Cooling Channels (Blueprint Detail) */}
        <group position={[0, 0.2, 0]}>
          {[...Array(6)].map((_, i) => (
            <mesh key={i} position={[0, 1.35, -0.6 + i * 0.25]} rotation={[-0.2, 0, 0]}>
              <boxGeometry args={[0.8, 0.05, 0.1]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.3} metalness={0.8} />
            </mesh>
          ))}
        </group>

        {/* 3. Front High-Intensity Sensor Array (Photos 7/8) */}
        <group position={[0, 0.45, 1.2]}>
          <mesh>
            <capsuleGeometry args={[0.18, 0.9, 16, 32]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Central Spotlight */}
          <mesh position={[0, 0, 0.15]}>
            <circleGeometry args={[0.12, 32]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <pointLight position={[0, 0, 0.3]} color="#ffffff" intensity={2} distance={5} />
          {/* Side 4K Lenses */}
          {[-0.35, 0.35].map((x, i) => (
            <mesh key={i} position={[x, 0, 0.12]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#000" metalness={1} roughness={0} />
            </mesh>
          ))}
        </group>

        {/* 4. Advanced Internal Cutaway (Blueprint Detail) */}
        <group position={[1.0, 0.2, 0.1]} rotation={[0, 0.5, 0]}>
          {/* Cutaway Frame */}
          <mesh>
            <boxGeometry args={[0.9, 0.7, 0.3]} />
            <meshStandardMaterial color="#000" />
          </mesh>
          {/* PCB & Components */}
          <group position={[0, 0, 0.05]}>
            <mesh>
              <planeGeometry args={[0.8, 0.6]} />
              <meshStandardMaterial color="#064e3b" />
            </mesh>
            {/* Visualizing "Motherboard" Details */}
            {[...Array(4)].map((_, i) => (
              <mesh key={i} position={[(i - 1.5) * 0.15, 0.1, 0.01]}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
                <meshStandardMaterial color="#1e293b" />
              </mesh>
            ))}
            {/* Animated Cooling Fan */}
            <group ref={internalRef} position={[0.2, -0.1, 0.02]}>
               <mesh>
                 <circleGeometry args={[0.15, 6]} />
                 <meshStandardMaterial color="#475569" side={THREE.DoubleSide} />
               </mesh>
            </group>
          </group>
          {/* Blue LED Rim */}
          <mesh position={[0, 0, 0.16]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.5, 0.01, 16, 100]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>
        </group>

        {/* 5. Internal Padded Liner (Blueprint Detail) */}
        <mesh position={[0, -0.1, 0]} scale={[0.98, 0.98, 0.98]}>
          <sphereGeometry args={[1.5, 32, 32, 0, Math.PI * 2, Math.PI * 0.52, Math.PI * 0.1]} />
          <meshStandardMaterial color="#111827" roughness={0.9} />
        </mesh>

        {/* 6. Ghost Path Ground Projection (Photo 5/6/7) */}
        <group position={[0, -3.5, 1.5]} rotation={[-Math.PI / 2.2, 0, 0]}>
          <mesh>
            <planeGeometry args={[2, 4]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.15} />
          </mesh>
          {/* Holographic Lines */}
          {[...Array(4)].map((_, i) => (
            <mesh key={i} position={[(i - 1.5) * 0.5, 0, 0.01]}>
              <planeGeometry args={[0.02, 4]} />
              <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
            </mesh>
          ))}
        </group>

        {/* 7. Holographic Visor (Notched) */}
        <group position={[0, -0.2, 0.7]}>
          <mesh rotation={[0.1, 0, 0]}>
            <sphereGeometry args={[1.3, 32, 32, 0, Math.PI, Math.PI * 0.2, Math.PI * 0.45]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.2} 
              transmission={0.95} 
              thickness={2}
              roughness={0}
            />
          </mesh>
          {/* HUD Overlay Mockup */}
          <group position={[0, 0.4, 0.6]}>
            <mesh>
               <planeGeometry args={[0.4, 0.2]} />
               <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
            </mesh>
          </group>
        </group>

      </Float>
    </group>
  );
};

const HUDOverlay = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Scanning Line */}
      <Float speed={5} rotationIntensity={0} floatIntensity={2}>
        <mesh position={[0, 0, 2.5]}>
          <planeGeometry args={[4, 0.01]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

export const HelmetCanvas = () => {
  return (
    <div className="w-full h-[500px] lg:h-[700px] relative bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]">
      {/* Background Technical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/5 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-amber-500/5 border-dashed rounded-full animate-[spin_40s_linear_reverse_infinite]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={40} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
        <spotLight position={[0, 5, 0]} intensity={2} distance={10} angle={0.5} penumbra={1} color="#fff" />
        
        <PrototypeHelmet />
        <HUDOverlay />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        
        <Environment preset="city" />
      </Canvas>

      {/* UI Elements */}
      <div className="absolute top-10 left-10 p-6 border-l-2 border-cyan-500 bg-black/40 backdrop-blur-md">
        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em] mb-2">System_Diagnostic</div>
        <div className="space-y-1">
          <div className="flex justify-between gap-8">
            <span className="text-[9px] text-zinc-500 uppercase">Neural_Link</span>
            <span className="text-[9px] text-green-500 uppercase font-bold">Stable</span>
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-[9px] text-zinc-500 uppercase">Sensor_Fusion</span>
            <span className="text-[9px] text-cyan-500 uppercase font-bold">Active</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 p-6 border-r-2 border-amber-500 bg-black/40 backdrop-blur-md text-right">
        <div className="text-[10px] font-mono text-amber-500 uppercase tracking-[0.3em] mb-2">Proprietary_Tech</div>
        <div className="text-xl font-black text-white uppercase tracking-tighter">SENTINEL_v4.0</div>
        <div className="text-[8px] text-zinc-500 uppercase mt-1">Industrial Grade Spatial OS</div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/10" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/10" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/10" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/10" />
    </div>
  );
};
