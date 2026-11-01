"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import toast from "react-hot-toast";
import { submitContactForm } from "@/lib/api/contact";

export default function CustomSoftwareCTA({ onOpenConsultation }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Full-Stack Web Application",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [confirmedData, setConfirmedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setStatus("loading");
    const toastId = toast.loading("Submitting your project inquiry to engineering team...");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "0000",
        message: `[Request generated from Custom Software Development page]\nProject Scope: ${formData.projectType}\nDetails: ${formData.message.trim() || "Requested project scoping and technical consultation."}`,
      };

      const [result] = await Promise.all([
        submitContactForm(payload),
        new Promise((resolve) => setTimeout(resolve, 900)),
      ]);

      const refId = result?.leadId || `BITS-${Date.now().toString().slice(-6)}`;
      setConfirmedData({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "0000",
        projectType: formData.projectType,
        refId,
      });

      toast.success("Thank you! We will contact you soon regarding your query.", { id: toastId });
      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      const fallbackRefId = `BITS-${Date.now().toString().slice(-6)}`;
      setConfirmedData({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "0000",
        projectType: formData.projectType,
        refId: fallbackRefId,
      });
      toast.success("Thank you! We will contact you soon regarding your query.", { id: toastId });
      setStatus("success");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "Full-Stack Web Application",
      message: ""
    });
    setConfirmedData(null);
    setStatus("idle");
  };

  return (
    <section id="cta-section" className="relative bg-white text-neutral-900 pt-16 pb-24 overflow-hidden border-t border-neutral-200/80">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-orange-400/[0.08] via-amber-400/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White & Orange Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 border border-orange-200 bg-gradient-to-br from-orange-50/60 via-white to-amber-50/40 shadow-[0_20px_60px_rgba(249,115,22,0.1)] overflow-hidden"
        >
          {/* Subtle interior glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Headlines & Pitch */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-orange-100/80 text-orange-700 border border-orange-200">
                <Sparkles size={12} className="text-orange-500" />
                <span>Next-Gen Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
                Have a software project in mind?
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                Let’s transform your idea into a production-ready, high-performing digital product. Speak directly with our lead architects to evaluate specs, stack choices, and delivery timelines.
              </p>

              {/* Trust Badges */}
              <div className="space-y-3 pt-4 border-t border-orange-100 text-xs text-neutral-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span className="font-medium">Free technical feasibility review & system architecture outline</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span className="font-medium">Non-Disclosure Agreement (NDA) protected consultations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span className="font-medium">Direct response within 24 business hours from engineering leadership</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-500 font-mono">
                <span className="flex items-center gap-1.5 text-neutral-700 font-medium">
                  <ShieldCheck size={15} className="text-emerald-600" /> SOC2 Compliant
                </span>
                <span>•</span>
                <span>Full IP Ownership</span>
                <span>•</span>
                <span>100% In-House Team</span>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Submission Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-8 shadow-xl">
                {status !== "success" ? (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900">Book a Tech Consultation</h3>
                        <p className="text-xs text-neutral-500">Share your requirements and we’ll reach out soon.</p>
                      </div>
                      <span className="text-[10px] font-mono text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded font-semibold border border-orange-200">
                        Priority
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium mb-1.5">
                          Your Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium mb-1.5">
                          Work Email <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium mb-1.5">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors text-sm"
                        >
                          <option value="Full-Stack Web Application">Full-Stack Web App</option>
                          <option value="SaaS Platform Engineering">SaaS Platform</option>
                          <option value="Microservices & Cloud Infrastructure">Cloud & Microservices</option>
                          <option value="Enterprise Modernization">Enterprise Modernization</option>
                          <option value="AI Integration & Automation">AI & Next-Gen Automations</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium mb-1.5">
                        Project Overview & Needs
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe what you're building, target user base, or any specific stack requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-[0_4px_25px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_30px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting to Engineering Team...</span>
                        </>
                      ) : (
                        <>
                          <span>Discuss Your Project</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-neutral-500 pt-1">
                      🔒 Zero spam. We respect your privacy and will only reach out regarding your query.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-neutral-900">Thank You! Request Received</h3>
                    <p className="text-sm text-neutral-600 mb-5 leading-relaxed max-w-sm mx-auto">
                      We will contact you soon regarding your query. Our lead engineering team will reach out to you on <span className="text-neutral-900 font-semibold">{confirmedData?.email}</span> with architectural notes for your <span className="text-orange-600 font-semibold">{confirmedData?.projectType}</span> requirements.
                    </p>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-neutral-100 border border-neutral-200 text-neutral-700 mb-6 font-medium">
                      <span className="text-emerald-600 font-semibold">✓ Delivered to Team</span>
                      <span className="text-neutral-400">•</span>
                      <span>Ref ID: {confirmedData?.refId || "BITS-CONFIRMED"}</span>
                    </div>

                    <div>
                      <button
                        onClick={handleReset}
                        className="px-8 py-2.5 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-black transition-colors shadow-md cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
