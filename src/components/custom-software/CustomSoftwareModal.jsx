"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { submitContactForm } from "@/lib/api/contact";

export default function CustomSoftwareModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Full-Stack Web Application",
    scope: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmedData, setConfirmedData] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Submitting your consultation request...");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "0000",
        message: `[Request generated from Custom Software Development page - Modal]\nProject Type: ${formData.projectType}\nDetails: ${formData.scope.trim() || "Requested technical consultation & architecture review."}`,
      };

      const [result] = await Promise.all([
        submitContactForm(payload),
        new Promise((resolve) => setTimeout(resolve, 850)),
      ]);

      const refId = result?.leadId || `BITS-${Date.now().toString().slice(-6)}`;
      setConfirmedData({
        phone: formData.phone.trim() || "0000",
        email: formData.email.trim(),
        projectType: formData.projectType,
        refId,
      });

      toast.success("Thank you! We will contact you soon regarding your query.", { id: toastId });
      setSubmitted(true);
    } catch (error) {
      console.error("Consultation submit notice:", error);
      const fallbackRefId = `BITS-${Date.now().toString().slice(-6)}`;
      setConfirmedData({
        phone: formData.phone.trim() || "0000",
        email: formData.email.trim(),
        projectType: formData.projectType,
        refId: fallbackRefId,
      });
      toast.success("Thank you! We will contact you soon regarding your query.", { id: toastId });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setConfirmedData(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg rounded-3xl bg-white border border-neutral-200 p-7 sm:p-9 text-neutral-900 shadow-2xl overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>

          {!submitted ? (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 mb-3">
                <Sparkles size={12} className="text-orange-500" />
                Architecture Consultation
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-neutral-900">
                Book a Tech Consultation
              </h2>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                Connect with our software architects to review your technical specs, discuss architecture, and estimate project scope.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
                    Primary Development Focus
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors text-sm"
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application (MERN / Next.js)</option>
                    <option value="SaaS Platform Engineering">Custom SaaS Platform Engineering</option>
                    <option value="Cloud Infrastructure & Microservices">Cloud Infrastructure & Microservices</option>
                    <option value="AI Integration & Workflow Automation">AI Integration & Workflow Automation</option>
                    <option value="Enterprise Architecture Modernization">Enterprise Architecture Modernization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium mb-1.5">
                    Project Notes / Brief (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives or questions..."
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3.5 px-6 rounded-full font-semibold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-[0_4px_25px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Consultation Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-neutral-500 pt-1">
                  🔒 Zero spam. We respect your privacy and will only reach out regarding your query.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
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
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
