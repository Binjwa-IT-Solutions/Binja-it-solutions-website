"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, KeyRound, Server, FileCheck, CheckCircle2 } from "lucide-react";

export default function BinjAiSecurity() {
  const securityFeatures = [
    {
      icon: <Server className="text-orange-400" size={24} />,
      title: "Data Sovereignty",
      badge: "Regional Residency",
      description:
        "Compliant localized data storage and inference nodes. Customer conversation logs, recordings, and lead intelligence never leave your designated jurisdiction.",
    },
    {
      icon: <Lock className="text-purple-400" size={24} />,
      title: "Encrypted Cloud Pipelines",
      badge: "AES-256 & TLS 1.3",
      description:
        "Every byte of audio stream and lead data is safeguarded with TLS 1.3 in transit and AES-256 at rest, meeting rigorous enterprise security guidelines.",
    },
    {
      icon: <KeyRound className="text-blue-400" size={24} />,
      title: "Secure Webhook Handling",
      badge: "HMAC SHA-256",
      description:
        "Direct cryptographic payload validation from Meta Graph API. Mitigates replay attacks, unauthorized injection, and fake lead poisoning.",
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      title: "Role-Based Access Control",
      badge: "Granular RBAC & SSO",
      description:
        "Enforce strict organization boundaries, manager-level audit trails, prompt immutability, and single sign-on (SSO) for large distributed sales teams.",
    },
  ];

  return (
    <section id="security" className="relative py-28 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.04] text-neutral-300 border border-white/10 mb-4"
          >
            <ShieldCheck size={14} className="text-orange-400" />
            <span>Enterprise Trust Layer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Enterprise-Grade Security & Reliability
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            Built from day one to adhere to sovereign data mandates, banking-grade encryption, and zero-trust cloud architecture.
          </motion.p>
        </div>

        {/* 4 Security Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-[#08080d] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {sec.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/5">
                    {sec.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-orange-400 transition-colors">
                  {sec.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {sec.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                <CheckCircle2 size={13} className="text-orange-400" />
                <span>Verified Compliance</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

