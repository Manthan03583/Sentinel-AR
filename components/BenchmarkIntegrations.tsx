"use client";

import React from "react";
import { Shield, Wifi, Truck, Activity } from "lucide-react";

export const BenchmarkIntegrations = () => {
  const features = [
    {
      title: "Safety Surveillance",
      tag: "[SURVEILLANCE_ACTIVE]",
      desc: "Comprehensive PPE detection and danger zone compliance monitoring using dual helmet-mounted high-resolution cameras.",
      icon: Shield
    },
    {
      title: "5G & LoRaWAN Dual-Link",
      tag: "[BACKUP_COMM_ACTIVE]",
      desc: "High-speed 5G for AR streaming with a LoRaWAN fail-safe for vital telemetry in deep-earth or shielded zones.",
      icon: Wifi
    },
    {
      title: "Fleet Mesh Tracking",
      tag: "[ASSET_LOCATOR_ON]",
      desc: "Real-time tracking of personnel and equipment movement across complex industrial sites via an integrated GPS/IMU mesh.",
      icon: Truck
    },
    {
      title: "Biometric Health Hub",
      tag: "[HEALTH_MONITOR_SYNC]",
      desc: "Continuous IoT monitoring of heart rate, core temperature, and automated 'Man-Down' fall detection with instant SOS triggering.",
      icon: Activity
    }
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-zinc-600 font-mono text-xs tracking-widest uppercase italic">Standard Integration Modules</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">Meeting the <br/> <span className="text-amber-500">Benchmark.</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm font-medium leading-relaxed">
            Every SentinelAR unit includes the full suite of industry-standard AI-oT safety and connectivity features as a baseline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6">
                <f.icon className="w-5 h-5" />
              </div>
              <div className="text-[8px] font-mono text-amber-500/40 mb-2 font-bold tracking-widest">{f.tag}</div>
              <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{f.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
