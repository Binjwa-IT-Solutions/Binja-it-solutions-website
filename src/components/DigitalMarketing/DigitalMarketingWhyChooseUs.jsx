"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Eye, ShieldCheck, Handshake, Receipt, Headphones } from "lucide-react";

const reasons = [
  {
    title: "Built around your business, not a template",
    desc: "Every strategy we run is formed around your goals, not a cookie-cutter approach we use for everyone.",
    icon: Target
  },
  {
    title: "Focused on real world results, not vanity metrics",
    desc: "While getting likes and shares is nice, we care more about leads and revenue figures.",
    icon: TrendingUp
  },
  {
    title: "No unpleasant surprises",
    desc: "You'll always know what's working and what's not, and why, even when the news is \"not good\".",
    icon: Eye
  },
  {
    title: "No shady tricks that can get your business banned, or blacklisted, or otherwise ruined",
    desc: "Because we focus on SEO and ad buying that are completely legal and ethical, and therefore sustainable in the long run.",
    icon: ShieldCheck
  },
  {
    title: "We don't vanish the second our campaigns launch",
    desc: "We continue to refine and optimize rather than walking away as soon as it's live.",
    icon: Handshake
  },
  {
    title: "Pricing that doesn't make the average small or medium-sized business owner cringe",
    desc: "You don't need to be a Fortune 500 to afford us.",
    icon: Receipt
  },
  {
    title: "Support that doesn't just last until launch day",
    desc: "We're around to help long after the initial rollout is complete.",
    icon: Headphones
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-8 lg:px-16" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            Why Choose Binjwa IT Solutions
          </h2>
          <p className="text-lg max-w-2xl mx-auto whitespace-pre-line" style={{ color: "var(--text-muted)" }}>
            When looking for a partner in the field of marketing services, it is crucial to take into account not only the list of available services but also the ability of the chosen company to work dynamically.

            Here's what working with us actually looks like:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.1)] hover:-translate-y-1 transition-all duration-300 border hover:border-orange-500/50"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                    {reason.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
