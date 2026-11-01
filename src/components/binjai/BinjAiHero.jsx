"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  Activity,
  CheckCircle2,
  Database,
  Layers,
  Zap,
  Volume2,
  Send,
  MessageSquare
} from "lucide-react";

export default function BinjAiHero({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance simulated pipeline animation loop silently
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToWorkflow = (e) => {
    e.preventDefault();
    const element = document.getElementById("workflow");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white">
      {/* Background Ambient Glows & Geometric Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      {/* Top Ambient Deep Radial Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-900/15 via-orange-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Sovereign Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md text-neutral-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)] animate-pulse" />
          <span>The Autonomous Meta-to-Voice AI Engine</span>
          <span className="text-neutral-500">•</span>
          <span className="text-orange-400 font-mono text-[11px]">~200-300ms Latency</span>
        </motion.div>

        {/* Sovereign Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.08] mb-6 text-white"
        >
          Turn Meta Ad Leads into{" "}
          <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Qualified Calls.
          </span>{" "}
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(249,115,22,0.4)]">
            Instantly.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-400 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          Stop losing leads to slow response times. Our autonomous AI Voice Agents pick up leads straight from Meta ads, execute human-like calls in seconds, and filter out the noise to give you only the data that matters.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto"
        >
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>Deploy Your AI Agent</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

        
        </motion.div>

        {/* ========================================================
            HERO VISUAL: SILENT MOTION GRAPHIC PIPELINE ANIMATION
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl rounded-3xl bg-[#09090e]/90 border border-white/10 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.85)] relative overflow-hidden"
        >
          {/* Top Bar Header of the Visual Box */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                Live Autonomous Pipeline
              </span>
              <span className="text-[11px] font-mono text-neutral-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                Latency: ~240ms
              </span>
            </div>

            {/* Pipeline Stage Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {["1. Meta Lead", "2. AI Core", "3. Voice Call", "4. Qualified Data"].map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-full transition-all ${
                    activeStep === idx
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "text-neutral-500 hover:text-neutral-300 bg-white/[0.02]"
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          {/* Graphic Node Network Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 relative items-center">
            {/* Step 1: Meta Lead Node */}
            <div
              className={`rounded-2xl p-4 transition-all duration-500 border ${
                activeStep === 0
                  ? "bg-gradient-to-b from-blue-950/40 to-neutral-900/80 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  Step 01
                </span>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white mb-0.5">Meta Ad Lead Form</div>
                <div className="text-[11px] text-neutral-400">Facebook / Instagram Ads</div>
                <div className="mt-3 p-2 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-neutral-300">
                  <div className="text-neutral-400">Lead: <span className="text-white">Aarav Sharma</span></div>
                  <div className="text-neutral-400">Inquiry: <span className="text-orange-400">3BHK Penthouse</span></div>
                  <div className="text-green-400 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Webhook Triggered
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Pulsing AI Engine Core */}
            <div
              className={`rounded-2xl p-4 transition-all duration-500 border relative ${
                activeStep === 1
                  ? "bg-gradient-to-b from-orange-950/40 to-neutral-900/80 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.25)] scale-[1.02]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Zap size={16} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                  Step 02
                </span>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white mb-0.5">BinjAI Neural Core</div>
                <div className="text-[11px] text-neutral-400">Sub-Second Dispatcher</div>

                {/* Animated Core Graphic */}
                <div className="mt-3 flex items-center justify-center h-16 relative">
                  <div className="w-12 h-12 rounded-full border border-dashed border-orange-500/40 animate-spin" />
                  <div className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.8)]">
                    <Sparkles size={14} className="text-black" />
                  </div>
                </div>
                <div className="text-[10px] font-mono text-center text-neutral-400 mt-1">
                  Context Parsed in <span className="text-orange-400">240ms</span>
                </div>
              </div>
            </div>

            {/* Step 3: Voice Call & Waveform Graphic */}
            <div
              className={`rounded-2xl p-4 transition-all duration-500 border ${
                activeStep === 2
                  ? "bg-gradient-to-b from-purple-950/40 to-neutral-900/80 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <PhoneCall size={16} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                  Step 03
                </span>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white mb-0.5">Autonomous Voice Call</div>
                <div className="text-[11px] text-neutral-400">Two-way Human Cadence</div>

                {/* Audio Waveform Graphic */}
                <div className="mt-3 p-2.5 rounded-lg bg-black/40 border border-white/5 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1 text-purple-300">
                      <Volume2 size={12} /> Connected: 00:28
                    </span>
                    <span className="text-green-400 text-[9px]">Empathetic AI</span>
                  </div>

                  {/* Equalizer Frequency Bars */}
                  <div className="flex items-center justify-center gap-1 h-7">
                    {[40, 75, 100, 60, 85, 30, 95, 45, 80, 65, 90, 50, 70, 40].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-gradient-to-t from-purple-500 to-amber-400 rounded-full transition-all duration-200"
                        style={{
                          height: `${activeStep === 2 ? h : Math.max(20, h * 0.3)}%`,
                          animation: activeStep === 2 ? `pulse 1s ease-in-out infinite ${i * 0.08}s` : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Zero-Noise Filtered Data Output */}
            <div
              className={`rounded-2xl p-4 transition-all duration-500 border ${
                activeStep === 3
                  ? "bg-gradient-to-b from-emerald-950/40 to-neutral-900/80 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Database size={16} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Step 04
                </span>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white mb-0.5">Filtered CRM Card</div>
                <div className="text-[11px] text-neutral-400">Zero Noise • Ready to Close</div>

                <div className="mt-3 p-2 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Intent:</span>
                    <span className="text-emerald-400 font-bold">★★★★★ High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Budget:</span>
                    <span className="text-white">₹2.4 Cr Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Site Visit:</span>
                    <span className="text-amber-400">Sun 11:30 AM</span>
                  </div>
                  <div className="text-[9px] text-emerald-400 flex items-center gap-1 pt-0.5">
                    <CheckCircle2 size={10} /> Synced to CRM & WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Live Data Flow Bar */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <span>Simulated Speed: <strong className="text-white">Instant Sub-Second Ingestion</strong></span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span className="text-neutral-400">Status: <span className="text-green-400">Active Pipeline</span></span>
              <span className="text-neutral-400">Junk Leads Discarded: <span className="text-orange-400">78.4%</span></span>
              <span className="text-neutral-400">Live Call Response: <span className="text-white">~200-300ms</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

