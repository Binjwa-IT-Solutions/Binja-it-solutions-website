"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, ShieldCheck, Activity } from "lucide-react";

export default function BinjAiMetrics() {
  const metrics = [
    {
      value: "~200-300ms",
      title: "Median Voice Response Latency",
      subtitle:
        "Ultra-low latency conversational turnaround (~200-300ms). Matches the rhythm of natural human thought, catching prospects while intent is at its absolute peak.",
      highlight: "Real-time edge neural inference",
      icon: <Zap className="text-orange-400" size={20} />,
    },
    {
      value: "100%",
      title: "Automated Meta Lead Capture Rate",
      subtitle:
        "Every single lead form submitted on Facebook & Instagram is instantly consumed and dialed. Zero polling timeouts or lost prospects.",
      highlight: "Direct Meta Webhook sync",
      icon: <Target className="text-blue-400" size={20} />,
    },
    {
      value: "Zero",
      title: "Wasted Time on Cold/Fake Leads",
      subtitle:
        "Our autonomous engine verifies identity, confirms budget, and filters out curious clicks so your executive sales reps only close winners.",
      highlight: "Automated junk lead rejection",
      icon: <ShieldCheck className="text-emerald-400" size={20} />,
    },
  ];

  return (
    <section id="platform" className="relative py-24 bg-[#050505] text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sarvam-Style Stats Bar: Clean 3-column row separated by thin vertical borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-3xl bg-[#08080d]/80 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 sm:p-12 flex flex-col justify-between hover:bg-white/[0.015] transition-colors group relative"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/[0.03] rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5">
                    {item.highlight}
                  </span>
                </div>

                {/* Big Metric Value */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {item.value}
                </div>

                {/* Metric Title */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-200 mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Metric Subtitle */}
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>Production Benchmark Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

