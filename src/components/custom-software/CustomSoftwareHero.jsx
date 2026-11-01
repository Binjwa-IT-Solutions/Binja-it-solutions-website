"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Lock
} from "lucide-react";

export default function CustomSoftwareHero({ onOpenConsultation }) {
  const handleScrollToWorkflow = (e) => {
    e.preventDefault();
    const el = document.getElementById("lifecycle");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-center items-center overflow-hidden bg-white text-neutral-900 transition-colors duration-200">
      {/* Background Soft Ambient Glows & Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 25%, transparent 80%)",
        }}
      />

      {/* Top Ambient Warm Radial Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-orange-500/[0.08] via-amber-500/[0.04] to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-orange-400/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-400/[0.05] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow / Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest text-orange-600 bg-orange-50 border border-orange-200/80 shadow-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="uppercase">[ TAILORED ENGINEERING ]</span>
          <span className="text-orange-300">•</span>
          <span className="text-neutral-700 font-sans text-[11px] font-semibold">MERN & Cloud Architecture</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.12] mb-6 text-neutral-900"
        >
          Scalable, Secure, and Custom Software{" "}
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Built for Your Business DNA.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-neutral-600 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          We architect robust end-to-end software solutions—from high-performance MERN stack web applications and microservices to secure cloud infrastructure—engineered to scale effortlessly as you grow.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_4px_25px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_30px_rgba(249,115,22,0.5)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book a Tech Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#lifecycle"
            onClick={handleScrollToWorkflow}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-neutral-800 hover:text-orange-600 bg-white hover:bg-orange-50/50 border-2 border-neutral-200 hover:border-orange-500 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Engineering Lifecycle</span>
          </a>
        </motion.div>

        {/* Interactive Architecture & Code Engine Visual (White & Orange Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl rounded-3xl border border-neutral-200 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-5 sm:p-8 text-left"
        >
          {/* Window Chrome Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-neutral-100 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
              <span className="text-xs font-mono text-neutral-500 ml-2">
                binjwa-core-engine://architecture.v3.ts
              </span>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                99.99% Uptime Cloud Ready
              </span>
            </div>
          </div>

          {/* Interactive Visual Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
            {/* Left Diagram: 4 Architecture Nodes */}
            <div className="md:col-span-7 space-y-3">
              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-orange-400 hover:bg-orange-50/20 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Globe size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-neutral-900">Full-Stack Client Layer</h4>
                    <span className="text-[10px] font-mono font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Next.js 15 & React</span>
                  </div>
                  <p className="text-xs text-neutral-600 truncate">
                    SSR, Edge caching, responsive Flat UI & instant interaction cadences.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-blue-400 hover:bg-blue-50/20 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Server size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-neutral-900">API Gateway & Microservices</h4>
                    <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Node / Express / REST</span>
                  </div>
                  <p className="text-xs text-neutral-600 truncate">
                    Decoupled services, event-driven message brokers, sub-millisecond dispatch.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-neutral-900">Security & Resilient Persistence</h4>
                    <span className="text-[10px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">MongoDB / PostgreSQL</span>
                  </div>
                  <p className="text-xs text-neutral-600 truncate">
                    Encrypted at rest, JWT + TOTP auth, ACID compliance, Redis cache acceleration.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-purple-400 hover:bg-purple-50/20 transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Cpu size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-neutral-900">Automated Cloud & CI/CD</h4>
                    <span className="text-[10px] font-mono font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">AWS / Docker / Nginx</span>
                  </div>
                  <p className="text-xs text-neutral-600 truncate">
                    Zero-downtime rolling deploys, auto-scaling clusters, proactive health monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Preview: Live Code Terminal & Enterprise Card */}
            <div className="md:col-span-5 flex flex-col justify-between rounded-2xl bg-[#0f1422] p-5 font-mono text-xs text-neutral-300 shadow-inner">
              <div className="space-y-2 mb-4">
                <div className="text-neutral-500">// Production Microservice Spec</div>
                <div><span className="text-purple-400">export interface</span> <span className="text-yellow-300">CustomAppConfig</span> {'{'}</div>
                <div className="pl-4 text-neutral-400">stack: <span className="text-emerald-300">"MERN + Next.js"</span>;</div>
                <div className="pl-4 text-neutral-400">cloud: <span className="text-emerald-300">"AWS Elastic Beanstalk + S3"</span>;</div>
                <div className="pl-4 text-neutral-400">security: <span className="text-orange-400">["TLS 1.3", "JWT/TOTP", "RBAC"]</span>;</div>
                <div className="pl-4 text-neutral-400">ci_cd: <span className="text-emerald-300">"GitHub Actions + Docker"</span>;</div>
                <div className="pl-4 text-neutral-400">targetUptime: <span className="text-blue-400">99.99</span>;</div>
                <div>{'}'}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-neutral-200">
                <div className="flex items-center gap-2 mb-1.5 text-orange-400 font-semibold text-xs">
                  <Sparkles size={14} />
                  <span>Engineered For Your Scale</span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-400 font-sans">
                  From zero-to-one startups to enterprise modernization, every line of code is custom-written, thoroughly tested, and owned 100% by your company.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
