"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Connect Your Channels & Brand Profile",
    description: "Link your social accounts and set your tone, brand guidelines, and visual identity in minutes.",
  },
  {
    number: 2,
    title: "Create & Curate On-Brand Posts",
    description: "Input your topic, campaign idea, or promotion to generate tailored copy, visuals, and hashtags instantly.",
  },
  {
    number: 3,
    title: "Review & Approve with Your Team",
    description: "Preview exact feed mockups across desktop and mobile, refine copy, and approve with team members.",
  },
  {
    number: 4,
    title: "Auto-Publish Across All Networks",
    description: "Schedule content to post automatically at peak audience hours or publish immediately to all connected profiles.",
  },
  {
    number: 5,
    title: "Analyze Performance & Scale",
    description: "Track cross-channel impressions, follower trends, and top-performing posts to continuously optimize your strategy.",
  },
];

export function LandingHowItWorks() {
  const containerRef = useRef(null);
  
  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="how-it-works" className="py-32 px-6 overflow-hidden bg-[#09090B]">
      <div className="max-w-6xl mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            How Binj SMM Works — 5 Simple Steps
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto py-10">
          
          {/* Central Vertical Line (Background) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 md:-translate-x-1/2 rounded-full" />
          
          {/* Central Vertical Line (Progress Fill) */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#F16522] md:-translate-x-1/2 origin-top rounded-full z-10"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="relative z-20 flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0; 
              const alignLeft = !isEven;

              return (
                <div key={step.number} className={`flex items-center w-full ${alignLeft ? 'md:justify-start' : 'md:justify-end'} justify-end relative`}>
                  
                  {/* The Node (Circle) */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <motion.div
                      initial={{ scale: 1, backgroundColor: "#1f2937", color: "#9ca3af" }}
                      whileInView={{ scale: 1.2 }}
                      viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-4 border-[#09090B]"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* The Card */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0`}>
                    <motion.div 
                      initial={{ opacity: 0, x: alignLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                      whileHover={{ 
                        y: -5, 
                        borderColor: "#F16522",
                        transition: { duration: 0.2 }
                      }}
                      className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 transition-colors duration-300 relative z-20"
                    >
                      {/* Orange Popup Callout */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                        className="absolute -top-7 left-8 bg-[#F16522] text-white px-3 py-1.5 rounded-lg shadow-[0_4px_15px_rgba(241,101,34,0.3)] text-xs font-bold uppercase tracking-wider z-30"
                      >
                        {step.title}
                        <div className="absolute -bottom-1 left-4 w-2.5 h-2.5 bg-[#F16522] rotate-45 rounded-sm" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
