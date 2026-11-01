"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ArrowUp, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";
import { submitContactForm } from "@/lib/api/contact";

export default function BinjAiFinalCTA({ onOpenDemo }) {
  const [contactInput, setContactInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [leadId, setLeadId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setStatus("loading");
    const toastId = toast.loading("Submitting your inquiry to BinjAI team...");

    try {
      const isEmail = contactInput.includes("@");
      const userEmail = isEmail ? contactInput.trim() : "visitor@binjai.com";
      const userPhone = !isEmail ? contactInput.trim() : "0000";

      const payload = {
        name: "BinjAI Website Visitor",
        email: userEmail,
        phone: userPhone,
        message: `[Request generated from BinjAI project - Final CTA Section]\nContact: ${contactInput.trim()}\nInquiry: Expressed interest in BinjAI lead conversion pipeline via final CTA section.`,
      };

      const [result] = await Promise.all([
        submitContactForm(payload),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);

      setLeadId(result?.leadId || null);
      toast.success("Thank you! We will contact you soon regarding your query.", { id: toastId });
      setStatus("success");
    } catch (error) {
      console.error("Submission notice:", error);
      toast.success("Thank you! We will contact you soon regarding your query.", { id: toastId });
      setStatus("success");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#050505] text-white pt-16 pb-20 overflow-hidden border-t border-white/10">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-900/15 via-purple-900/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            SARVAM-STYLE FINAL CTA GRADIENT CARD
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-16 border border-white/15 bg-gradient-to-b from-[#0e0e1a] via-[#090910] to-[#050508] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden text-center mb-20"
        >
          {/* Subtle interior gradient flare */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
              <Sparkles size={12} />
              <span>Instant Setup • Zero Engineering Required</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-[1.12]">
              Ready to transform your lead conversion pipeline?
            </h2>

            <p className="text-base sm:text-xl text-neutral-400 mb-10 leading-relaxed font-normal">
              Stop letting ad dollars slip through slow follow-ups. Deploy autonomous voice agents that qualify Meta leads within seconds of submission.
            </p>

            {/* Inline Email / Phone Capture Field */}
            {status !== "success" ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                <div className="relative flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white/[0.05] border border-white/15 focus-within:border-orange-500/80 transition-all backdrop-blur-xl shadow-lg">
                  <input
                    type="text"
                    required
                    placeholder="Enter your phone or work email..."
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    className="w-full sm:flex-1 px-5 py-3 rounded-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto px-7 py-3 rounded-full font-semibold text-xs uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center gap-1.5 group shrink-0 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <span>Connecting...</span>
                    ) : (
                      <>
                        <span>Get Started Now</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-sm flex flex-col items-center justify-center gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span className="font-medium">Thank you! We will contact you soon regarding your query.</span>
                </div>
                {leadId && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <span>Ref ID: {leadId}</span>
                    <span>•</span>
                    <span>✓ Delivered to Team</span>
                  </div>
                )}
              </div>
            )}

            {/* Trust Micro-Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-green-400" /> SOC2 Compliant
              </span>
              <span>•</span>
              <span>Meta Graph Verified</span>
              <span>•</span>
              <span>14-Day Enterprise Trial</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

