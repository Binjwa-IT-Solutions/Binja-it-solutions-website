"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Webhook,
  PhoneCall,
  Filter,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FileText,
  Clock,
  Layers
} from "lucide-react";

export default function BinjAiPipeline() {
  const steps = [
    {
      step: "01",
      tag: "REAL-TIME INGESTION",
      title: "Real-Time Meta Integration",
      description:
        "Seamless webhook synchronization with Facebook and Instagram Lead Ads. The moment a user submits a form, the data flows directly into your engine without polling delays or drop-offs.",
      icon: <Webhook className="text-blue-400" size={24} />,
      badgeColor: "border-blue-500/20 bg-blue-500/10 text-blue-400",
      accentGlow: "from-blue-600/10 via-transparent to-transparent",
      visual: (
        <div className="mt-6 rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-neutral-300 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 pb-2 border-b border-white/5">
            <span className="flex items-center gap-1.5 text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              POST /api/v1/meta-leads
            </span>
            <span className="text-green-400">200 OK • 18ms</span>
          </div>
          <div className="space-y-1 text-[11px] leading-relaxed text-neutral-400">
            <div><span className="text-purple-400">"ad_id"</span>: <span className="text-amber-300">"act_291048_ig_story"</span>,</div>
            <div><span className="text-purple-400">"lead_phone"</span>: <span className="text-green-300">"+91 98401 XXXXX"</span>,</div>
            <div><span className="text-purple-400">"campaign"</span>: <span className="text-neutral-200">"Bangalore_Luxury_Villas"</span>,</div>
            <div><span className="text-purple-400">"status"</span>: <span className="text-blue-400">"Ingested_Instantaneous"</span></div>
          </div>
        </div>
      ),
      bulletPoints: [
        "Instantaneous Meta Webhook listener with HMAC SHA-256 validation",
        "Direct connection to Facebook & Instagram Lead Ad forms",
        "Zero polling intervals—instant event dispatch"
      ]
    },
    {
      step: "02",
      tag: "SUB-SECOND DISPATCH",
      title: "Autonomous AI Voice Calling",
      description:
        "Sub-second response trigger. Your AI voice agent calls the lead immediately, conversing naturally in local context and languages without human intervention or robotic delays.",
      icon: <PhoneCall className="text-orange-400" size={24} />,
      badgeColor: "border-orange-500/20 bg-orange-500/10 text-orange-400",
      accentGlow: "from-orange-600/10 via-transparent to-transparent",
      visual: (
        <div className="mt-6 rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-neutral-300 space-y-3">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              <span className="text-white font-semibold">Active Call in Progress</span>
            </div>
            <span className="text-orange-400 font-mono">00:42</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="p-2 rounded bg-orange-500/10 border border-orange-500/20 text-orange-200">
              <strong className="text-orange-400">AI Voice Agent:</strong> "Hi Aarav! I saw you just checked our villa project on Instagram. Are you looking for personal living or investment?"
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-neutral-300">
              <strong className="text-neutral-400">Lead:</strong> "Personal living, looking for possession within 6 months. What is the starting price?"
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
            <span>Latency: <strong className="text-green-400">~240ms</strong></span>
            <span>Interruption Handling: <strong className="text-white">Active</strong></span>
          </div>
        </div>
      ),
      bulletPoints: [
        "Ultra-low ~200-300ms natural conversational latency with dynamic turn-taking",
        "Adaptive multilingual models in English, Hindi, and regional accents",
        "Empathetic tone matching client sentiment in real time"
      ]
    },
    {
      step: "03",
      tag: "DATA EXTRACTION",
      title: "Zero-Noise Filtered Data",
      description:
        "Strips away unverified responses. Delivers clean metrics—intent status, budget confirmation, call transcripts, and AI summaries straight to your CRM so sales reps only speak with buyers.",
      icon: <Filter className="text-emerald-400" size={24} />,
      badgeColor: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      accentGlow: "from-emerald-600/10 via-transparent to-transparent",
      visual: (
        <div className="mt-6 rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-neutral-300 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 size={13} /> High-Intent Qualified
            </span>
            <span className="text-neutral-400 bg-white/5 px-2 py-0.5 rounded text-[10px]">Score: 96/100</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 rounded bg-white/[0.02] border border-white/5">
              <span className="text-neutral-500 block">Budget:</span>
              <span className="text-white font-bold">₹1.8 Cr - ₹2.2 Cr</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/5">
              <span className="text-neutral-500 block">Site Visit:</span>
              <span className="text-amber-400 font-bold">Confirmed Sun 11AM</span>
            </div>
          </div>

          <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/30 text-[10px] text-emerald-300 flex items-center justify-between">
            <span>CRM & WhatsApp Sync</span>
            <span className="font-bold">Automated ✓</span>
          </div>
        </div>
      ),
      bulletPoints: [
        "Eliminates 75%+ fake/curious ad inquiries before reaching sales",
        "Actionable call notes, key objection summaries, and recording links",
        "Direct bidirectional sync to HubSpot, Salesforce, Zoho, or Custom CRM"
      ]
    }
  ];

  return (
    <section id="workflow" className="relative py-28 bg-[#050505] text-white overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.04] text-neutral-300 border border-white/10 mb-4"
          >
            <Layers size={13} className="text-orange-400" />
            <span>Core Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5"
          >
            The Meta to Voice Pipeline
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            Every millisecond matters in paid advertising. Our sovereign pipeline captures intent at the exact second a lead clicks, qualifies them on phone call, and outputs structured intelligence.
          </motion.p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-[#09090e] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Subtle top corner gradient */}
              <div
                className={`absolute top-0 right-0 left-0 h-32 bg-gradient-to-b ${step.accentGlow} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative z-10">
                {/* Header row inside card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${step.badgeColor}`}
                  >
                    {step.tag}
                  </span>
                </div>

                <div className="text-xs font-mono text-neutral-500 mb-1">
                  STAGE {step.step}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Interactive Simulated UI */}
                {step.visual}
              </div>

              {/* Bullet Features at bottom */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-2.5 relative z-10">
                {step.bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-400">
                    <CheckCircle2 size={13} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

