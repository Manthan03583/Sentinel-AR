"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-[padding,background-color,backdrop-filter,border-color] duration-500 border-b ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-white/10' : 'py-6 bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L4 7V15C4 22.38 9.11 29.22 16 31C22.89 29.22 28 22.38 28 15V7L16 2Z" fill="#050505"/>
              <rect x="14" y="11" width="4" height="8" rx="1" fill="#FFB000"/>
              <rect x="12" y="14" width="8" height="2" rx="0.5" fill="#FFB000"/>
            </svg>
          </div>
          <span className="font-bold text-2xl tracking-tight text-white uppercase">
            Sentinel<span className="text-amber-500">AR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400 font-mono tracking-widest uppercase text-[10px]">
          <Link href="#tech" className="hover:text-amber-500 transition-colors">Technology</Link>
          <Link href="#verticals" className="hover:text-amber-500 transition-colors">Industries</Link>
          <Link href="#contact" className="hover:text-amber-500 transition-colors">Contact</Link>
          <Link href="#contact" className="bg-white text-black px-6 py-2 rounded-sm font-black hover:bg-amber-500 hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5">
            Initiate Pilot
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link href="#tech" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter text-white">Technology</Link>
          <Link href="#verticals" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter text-white">Industries</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter text-white">Contact</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-4 bg-amber-500 text-black px-10 py-4 rounded-sm font-black text-xl uppercase tracking-widest shadow-2xl shadow-amber-500/20">
            Initiate Pilot
          </Link>
      </div>
    </nav>
  );
};
