"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const HelmetModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Helmet Shell Placeholder */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.4, 128, 32]} />
          <meshStandardMaterial 
            color="#020617" 
            metalness={0.9} 
            roughness={0.1} 
            emissive="#06b6d4"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* T-LED Visor Glow Placeholder */}
      <mesh position={[0, 0, 1.2]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2.5, 0.8]} />
        <MeshWobbleMaterial 
          color="#06b6d4" 
          speed={1} 
          factor={0.1} 
          transparent 
          opacity={0.6}
          emissive="#06b6d4"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Atmospheric Lights */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
      <ambientLight intensity={0.2} />
    </group>
  );
};

export const HelmetCanvas = () => {
  return (
    <div className="w-full h-[500px] lg:h-[700px] relative">
      {/* Background HUD Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-amber-500/10 border-dashed rounded-full animate-[spin_20s_linear_reverse_infinite]" />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <HelmetModel />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Technical Labels */}
      <div className="absolute bottom-10 left-10 p-4 hud-glass border-l-2 border-l-cyan-500">
        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">Optic Engine</div>
        <div className="text-xs font-bold text-white">180° INFINITY T-LED</div>
      </div>
      <div className="absolute top-10 right-10 p-4 hud-glass border-r-2 border-r-amber-500">
        <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-1">Kernel Status</div>
        <div className="text-xs font-bold text-white">SYSTEM_ACTIVE_NODES: 24</div>
      </div>
    </div>
  );
};
