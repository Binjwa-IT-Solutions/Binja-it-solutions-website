"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const NexusFinalCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#111111]">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
        
        {/* Subtle top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Dubai International Convention
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            GITEX <span className="text-orange-500">GLOBAL</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-300 text-lg font-medium">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-400" />
              8 - 11 December 2026
            </span>
            <span className="hidden sm:block text-gray-600">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              Expo City Dubai, UAE
            </span>
          </div>
        </motion.div>

        {/* Supporting Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-semibold text-white/90 max-w-2xl mx-auto"
        >
          "Let's explore how AI can transform your business. See you at GITEX 2026."
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4"
        >
          <button 
            onClick={() => {
              const el = document.getElementById('nexus-inquiry-section') || document.getElementById('gitex-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-[0_8px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)] hover:-translate-y-1 hover:scale-105"
          >
            Book a Meeting <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default NexusFinalCTA;
