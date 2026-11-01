"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";
const heroData = {
  videoSrc: "/mainVideo.mp4",
};

// 3D Tilt Card Wrapper Component
const TiltCard = ({ children, className, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <Link href={href} className="w-full block max-w-[300px] md:max-w-none md:w-auto">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.05 }}
        className={className}
      >
        {children}
      </motion.div>
    </Link>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Normalized mouse coordinates (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Absolute mouse coordinates for spotlight (in pixels)
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  
  // Smooth springs for magnetic/parallax effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothSpotlightX = useSpring(spotlightX, { damping: 40, stiffness: 100 });
  const smoothSpotlightY = useSpring(spotlightY, { damping: 40, stiffness: 100 });

  // Depth Layers (Parallax Transforms)
  // Layer 1: Background video (very subtle 2-4px)
  const bgX = useTransform(smoothX, [-1, 1], [-3, 3]);
  const bgY = useTransform(smoothY, [-1, 1], [-3, 3]);
  
  // Layer 3: Main Content (subtle 4px)
  const contentX = useTransform(smoothX, [-1, 1], [-4, 4]);
  const contentY = useTransform(smoothY, [-1, 1], [-4, 4]);
  
  // Layer 4: Floating Cards (stronger 8-10px)
  const cardsX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const cardsY = useTransform(smoothY, [-1, 1], [-10, 10]);

  // Spotlight template
  const spotlightBackground = useMotionTemplate`radial-gradient(900px circle at ${smoothSpotlightX}px ${smoothSpotlightY}px, rgba(249,115,22,0.06), transparent 60%)`;
  
  useEffect(() => {
    // Respect prefers-reduced-motion and touch devices
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      mouseX.set(x);
      mouseY.set(y);
      spotlightX.set(e.clientX - rect.left);
      spotlightY.set(e.clientY - rect.top);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [mouseX, mouseY, spotlightX, spotlightY]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] flex flex-col justify-center text-white overflow-hidden pt-20"
    >
      {/* Layer 1: Background Video with Parallax */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute -inset-4 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroData.videoSrc} type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Subtle dark gradient/overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none bg-gradient-to-r from-[#0a0f1c]/90 via-[#0a0f1c]/60 to-[#0a0f1c]/40 backdrop-blur-[1px]" />

      {/* Layer 2: Atmosphere (Spotlight) */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        style={{
          background: spotlightBackground,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 flex-1">
        
        {/* Left Side — Main Content with Layer 3 Parallax */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ x: contentX, y: contentY }}
          className="w-full lg:w-[55%] flex flex-col items-start mt-10 lg:mt-0"
        >
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-400 backdrop-blur-md uppercase"
          >
            DIGITAL INNOVATION • AI • SOFTWARE
          </motion.div>
          
          {/* Heading */}
          <h1 className="text-[34px] md:text-[44px] lg:text-[58px] font-bold leading-[1.1] mb-6 text-white tracking-tight">
            Build, Automate & Grow Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 relative inline-block">
              Smart IT Solutions
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 bg-orange-500/20 blur-xl rounded-full -z-10"
              />
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
            From AI-powered tools to modern websites and business software, we create solutions that save time, improve efficiency, and help your business scale.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto relative overflow-hidden group bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center"
              >
                Explore Our Solutions
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side — Floating Technology Visuals with Layer 4 Parallax */}
        <motion.div 
          style={{ x: cardsX, y: cardsY }}
          className="w-full lg:w-[45%] relative md:h-[450px] mt-12 md:mt-0 flex flex-col md:block items-center gap-6 pointer-events-none md:pointer-events-auto"
        >
          {/* Card 1: BinjAI */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="group md:absolute md:top-[15%] md:left-[10%] lg:left-[15%] pointer-events-auto"
          >
            <TiltCard href="/ai-automation" className="group w-full md:w-64 bg-[#0f1629]/60 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)] cursor-pointer transition-colors duration-300 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">BinjAI</h3>
                    <p className="text-xs text-gray-400 mt-0.5">AI-Powered Automation</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-end border-t border-white/5 pt-3 mt-2 relative z-10">
                <span className="text-xs font-medium text-orange-400 flex items-center gap-1 group-hover:text-orange-300 transition-colors">
                  Explore
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Binj SMM */}
          <motion.div 
            animate={{ y: [12, -12, 12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="group md:absolute md:bottom-[15%] md:right-[5%] lg:right-[10%] z-10 pointer-events-auto"
          >
            <TiltCard href="/products/smm" className="group w-full md:w-72 bg-[#0f1629]/60 backdrop-blur-xl border border-white/10 hover:border-orange-500/50 rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)] cursor-pointer transition-colors duration-300 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/30 group-hover:bg-orange-500/30 transition-colors">
                  <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">Binj SMM</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Create • Schedule • Grow</p>
                </div>
              </div>
              
              <div className="flex items-center justify-end border-t border-white/5 pt-3 mt-2 relative z-10">
                <span className="text-xs font-medium text-orange-400 flex items-center gap-1 group-hover:text-orange-300 transition-colors">
                  Explore
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </TiltCard>
          </motion.div>

        </motion.div>
      </div>
      
    </div>
  );
};

export default Hero;
