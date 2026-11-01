"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Zap, FileText, Briefcase, Handshake } from "lucide-react";
import NexusSolutions from "./NexusSolutions";
import NexusWhyMeet from "./NexusWhyMeet";
import NexusFinalCTA from "./NexusFinalCTA";
import GitexSection from "./GitexSection";
import NexusFooter from "./NexusFooter";

const NexusLanding = () => {
  return (
    <>
      {/* NEW HERO SECTION matching reference */}
      <section className="relative w-full flex flex-col lg:block lg:min-h-[100vh] pt-24 pb-0 lg:pb-12 bg-[#ffffff] overflow-hidden">
        
        {/* Desktop Absolute Image / Mobile Bottom Image */}
        <div className="lg:absolute lg:top-0 lg:right-0 w-full lg:w-[65%] h-[400px] sm:h-[500px] lg:h-full z-0 order-2 lg:order-none mt-8 lg:mt-0">
          <div 
            className="hidden lg:block absolute inset-0 z-10 pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0) 100%)' 
            }}
          ></div>
          <div 
            className="block lg:hidden absolute inset-0 z-10 pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 30%)' 
            }}
          ></div>
          <img 
            src="/nexus-hero-bg.jpg" 
            alt="Project Nexus City" 
            className="w-full h-full object-cover object-left-top"
          />
        </div>

        {/* Hero Content container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-28 flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center lg:h-full mt-4 lg:mt-12 order-1 lg:order-none">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-xl"
          >
            {/* Announcement Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-xs tracking-wider"
            >
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              PROJECT NEXUS
            </motion.div>

            {/* H1 & Description */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-[#111827] leading-[1.1] tracking-tight">
                PROJECT <br/>
                NEXUS <span className="text-orange-500">2026</span>
              </h1>
              <h2 className="text-2xl font-bold text-[#111827]">
                Accelerate Your Growth
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Welcome to the future of digital solutions. Project NEXUS is an exclusive initiative designed to accelerate your business growth through cutting-edge technology tailored for regional scale.
              </p>
            </div>

            {/* Info Cards Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 p-2 bg-gray-50/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm max-w-md"
            >
              <div className="flex items-start gap-3 p-3 flex-1">
                <Calendar className="text-orange-500 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Launch 2026</h4>
                  <p className="text-xs text-gray-500">Priority Access</p>
                </div>
              </div>
              <div className="hidden sm:block w-px bg-gray-200 my-2"></div>
              <div className="flex items-start gap-3 p-3 flex-1">
                <MapPin className="text-orange-500 w-5 h-5 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Global Initiative</h4>
                  <p className="text-xs text-gray-500">Remote & On-site</p>
                </div>
              </div>
            </motion.div>

            {/* Sub-links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                <Zap className="w-4 h-4 text-orange-500" /> AI Solutions
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                <FileText className="w-4 h-4 text-orange-500" /> Use Cases
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                <Briefcase className="w-4 h-4 text-orange-500" /> Industry Focus
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                <Handshake className="w-4 h-4 text-orange-500" /> Partnership
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <button 
                onClick={() => {
                  const el = document.getElementById('gitex-section');
                  if(el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
              >
                Join Project NEXUS
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Empty to allow image to show through */}
          <div className="hidden lg:block"></div>
        </div>
      </section>

      {/* SECTION 1 & 2: Solutions and Navigation Strip */}
      <NexusSolutions />

      {/* SECTION 3: Why Meet Binjwa */}
      <NexusWhyMeet />

      {/* SECTION 4: Final Dark CTA */}
      <NexusFinalCTA />


      {/* NEW GITEX SECTION */}
      <GitexSection />

      <NexusFooter />
    </>
  );
};

export default NexusLanding;
