"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, MapPin, ChevronDown } from "lucide-react";
import GitexForm from "./GitexForm";

const GitexSection = () => {
  return (
    <section id="gitex-section" className="relative w-full py-16 lg:py-24 bg-[#0a1024] overflow-hidden" style={{ backgroundImage: "url('/nexus-hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div id="nexus-inquiry-section" className="absolute top-0 -mt-20 pointer-events-none" />
      {/* Overlay gradient to match image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>

      {/* Orange curves overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserveAspectRatio-none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(249, 115, 22, 0.1)" d="M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,266.7C840,277,960,267,1080,234.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <path fill="#f97316" d="M0,288L60,277.3C120,267,240,245,360,250.7C480,256,600,288,720,298.7C840,309,960,299,1080,266.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" style={{ opacity: 0.8 }}></path>
          <path fill="#1e3a8a" d="M0,320L60,314.7C120,309,240,299,360,293.3C480,288,600,288,720,293.3C840,299,960,309,1080,288C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-xs tracking-wider uppercase backdrop-blur-sm">
            <ChevronDown className="w-4 h-4" /> MEET BINJWA AT
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            GITEX<br />
            <span className="text-orange-500">GLOBAL</span> 2026
          </h1>

          <h2 className="text-2xl lg:text-3xl font-bold text-white max-w-lg leading-snug">
            Let's talk about your next automation idea.
          </h2>

          <p className="text-gray-300 text-lg max-w-md leading-relaxed">
            Fill in a few details and request a meeting with our team at GITEX Global 2026. We'll confirm your slot shortly.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                <Calendar className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">8 - 11 December 2026</h4>
                <p className="text-gray-400 text-sm">Expo City Dubai, UAE</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                <Users className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Meet Our Team</h4>
                <p className="text-gray-400 text-sm">Live product demos</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                <MapPin className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Hall & Booth</h4>
                <p className="text-gray-400 text-sm">Details will be shared after confirmation</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GitexForm />
        </motion.div>
      </div>
    </section>
  );
};

export default GitexSection;
