"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Briefcase, Smile, Calendar, Star, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const statsData = {
    topBadge: "OUR JOURNEY. OUR IMPACT.",
    headline: "Our Achievements",
    subtitle: "Numbers that reflect our commitment, the trust of our clients, and the journey we continue to build every day.",
    stats: [
        { icon: Briefcase, value: 30, suffix: "+", label: "Projects Delivered", description: "Successfully delivered tailored solutions for various clients." },
        { icon: Smile, value: 50, suffix: "+", label: "Happy Clients", description: "Building strong relationships across industries." },
        { icon: Calendar, value: 2025, prefix: "Since ", label: "In Business", description: "Continuously innovating and growing." },
        { icon: Star, value: 98, suffix: "%", label: "Client Satisfaction", description: "Our commitment to excellence is reflected in our client feedback." },
        { icon: Headphones, value: 24, suffix: "/7", label: "Support Available", description: "We provide round-the-clock support for our partners." },
    ],
};

const AnimatedNumber = ({ value, prefix = "", suffix = "", label }) => {
    const numRef = useRef(null);
    const hasAnimatedRef = useRef(false);
    
    // Do not treat "In Business" or "Support Available" as counters
    const isCounter = label !== "In Business" && label !== "Support Available";

    useEffect(() => {
        if (!isCounter) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: numRef.current,
                start: "top 85%",
                onEnter: () => {
                    if (!hasAnimatedRef.current) {
                        hasAnimatedRef.current = true;
                        
                        const counter = { val: 0 };
                        gsap.to(counter, {
                            val: value,
                            duration: 2,
                            ease: "power2.out",
                            onUpdate: () => {
                                if (numRef.current) {
                                    numRef.current.innerHTML = prefix + Math.floor(counter.val) + suffix;
                                }
                            }
                        });
                    }
                }
            });
        });
        return () => ctx.revert();
    }, [isCounter, value, prefix, suffix]);

    if (!isCounter) {
        return <span className="stat-value inline-block">{prefix}{value}{suffix}</span>;
    }

    return <span ref={numRef} className="stat-value inline-block">{prefix}0{suffix}</span>;
};

const AchievementCard = ({ item, index }) => {
    const reducedMotion = useReducedMotion();
    const cardRef = useRef(null);
    
    // Parallax Hover
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);
    
    const handleMouseMove = (e) => {
        if (reducedMotion || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const xPct = (e.clientX - rect.left) / width - 0.5;
        const yPct = (e.clientY - rect.top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className="perspective-[1500px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
            <motion.div
                className="stat-card w-full h-full bg-white rounded-[2rem] p-8 md:p-10 relative flex flex-col group cursor-default"
                style={reducedMotion ? {
                    boxShadow: "0 10px 40px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(0,0,0,0.05)"
                } : { 
                    rotateX, rotateY, transformStyle: "preserve-3d",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(0,0,0,0.05)"
                }}
                whileHover={reducedMotion ? {} : { 
                    y: -6, 
                    boxShadow: "0 20px 50px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(249,115,22,0.3)" 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Decorative Details from Image */}
                
                {/* Top Right Orange Corner Curve */}
                <svg className="absolute top-0 right-0 w-12 h-12 text-orange-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
                    <path d="M 100,0 C 100,50 50,100 0,100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="80" cy="20" r="4" fill="currentColor" />
                </svg>

                {/* Bottom Center Orange Dot & Line */}
                <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-10" />

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-orange-500/[0.02] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full" style={reducedMotion ? {} : { transform: "translateZ(20px)" }}>
                    
                    {/* Icon Container */}
                    <motion.div 
                        className="stat-icon-wrap w-14 h-14 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-100 group-hover:border-orange-200 transition-colors duration-300"
                        variants={{
                            initial: { scale: 1, rotate: 0 },
                            hover: { scale: 1.1, rotate: -5 }
                        }}
                    >
                        <item.icon className="w-6 h-6 text-orange-500" strokeWidth={2} />
                    </motion.div>

                    {/* Number */}
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-2 tracking-tight group-hover:-translate-y-1 transition-transform duration-300">
                        <AnimatedNumber value={item.value} prefix={item.prefix} suffix={item.suffix} label={item.label} />
                    </h3>

                    {/* Separator Line */}
                    <div className="stat-line w-full h-[1px] bg-orange-200 my-4 origin-left" />

                    {/* Label */}
                    <p className="stat-label text-orange-500 font-bold uppercase tracking-[0.15em] text-[11px] mb-3">
                        {item.label}
                    </p>

                    {/* Description */}
                    <p className="stat-desc text-[#475569] text-[13px] md:text-[14px] leading-relaxed font-medium">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const StatsSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            // Heading & Subtitle
            tl.fromTo(".stats-badge", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
              .fromTo(".stats-heading", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .fromTo(".stats-separator", { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
              .fromTo(".stats-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

            // Cards Reveal
            tl.fromTo(".stat-card",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
                "-=0.4"
            );

            // Card Internals Reveal
            tl.from(".stat-icon-wrap", { scale: 0.5, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.6")
              .from(".stat-value", { opacity: 0, y: 15, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
              .from(".stat-line", { scaleX: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
              .from([".stat-label", ".stat-desc"], { opacity: 0, y: 10, duration: 0.5, stagger: 0.05, ease: "none" }, "-=0.4");
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#fafafa] relative overflow-hidden font-sans">
            
            {/* Tech-Inspired Abstract Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
                
                {/* 1. Stronger radial warm-orange glow near outer edges */}
                <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.15),transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.12),transparent_70%)]" />

                {/* 2. Fine orange technical grid lines (very low opacity) with Parallax */}
                <div 
                    className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: `
                            linear-gradient(rgba(249,115,22,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)
                        `, 
                        backgroundSize: "60px 60px" 
                    }} 
                />

                {/* 3. Subtle dotted patterns fading towards center */}
                <div 
                    className="absolute inset-0 opacity-[0.15]" 
                    style={{ 
                        backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)", 
                        backgroundSize: "20px 20px",
                        maskImage: "radial-gradient(ellipse at center, transparent 20%, black 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 100%)"
                    }} 
                />

                {/* 4. Large, ultra-thin orange circular arcs and concentric circles */}
                {/* Top Right Arcs */}
                <motion.svg className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] opacity-[0.4]" viewBox="0 0 100 100"
                    animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f97316" strokeWidth="0.3" strokeDasharray="10 30" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="0.1" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#f97316" strokeWidth="0.4" strokeDasharray="4 8" />
                </motion.svg>

                {/* Bottom Left Concentric */}
                <motion.svg className="absolute -bottom-[30%] -left-[10%] w-[900px] h-[900px] opacity-[0.3]" viewBox="0 0 100 100"
                    animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#f97316" strokeWidth="0.3" strokeDasharray="20 40" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#f97316" strokeWidth="0.15" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#f97316" strokeWidth="0.3" />
                </motion.svg>

                {/* 5. Large abstract curved lines flowing top-left to bottom-right */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.3]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path 
                        d="M -10,10 C 30,20 60,80 110,90" 
                        fill="none" stroke="#f97316" strokeWidth="0.2" 
                        animate={{ strokeDashoffset: [100, 0] }} strokeDasharray="20 40" transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                        d="M -10,30 C 40,30 50,70 110,70" 
                        fill="none" stroke="#f97316" strokeWidth="0.15" strokeDasharray="10 15"
                        animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                </svg>

                {/* 6. Abstract digital network (Nodes and connecting lines) */}
                <svg className="absolute top-[10%] left-[5%] w-[350px] h-[350px] opacity-[0.4]" viewBox="0 0 100 100">
                    <motion.path d="M 20,20 L 50,40 L 80,30 L 60,70 L 30,60 Z" fill="none" stroke="#f97316" strokeWidth="0.3" animate={{ strokeDashoffset: [100, 0] }} strokeDasharray="5 15" transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="20" cy="20" r="2.5" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.circle cx="50" cy="40" r="3" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
                    <motion.circle cx="80" cy="30" r="2.5" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                    <motion.circle cx="60" cy="70" r="3.5" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 0.2 }} />
                    <motion.circle cx="30" cy="60" r="2.5" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }} />
                </svg>

                <svg className="absolute bottom-[5%] right-[2%] w-[450px] h-[450px] opacity-[0.3]" viewBox="0 0 100 100">
                    <motion.path d="M 10,50 L 40,20 L 70,40 L 90,80 L 40,70 Z" fill="none" stroke="#f97316" strokeWidth="0.3" animate={{ strokeDashoffset: [0, -100] }} strokeDasharray="10 20" transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="10" cy="50" r="2.5" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.circle cx="40" cy="20" r="3" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
                    <motion.circle cx="70" cy="40" r="2.5" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                    <motion.circle cx="90" cy="80" r="3" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.3 }} />
                    <motion.circle cx="40" cy="70" r="2.5" fill="#f97316" animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.7 }} />
                </svg>

                {/* 7. Extremely faint geometric outlines (Rounded Rectangles & Diagonal Lines) */}
                <div className="absolute top-[40%] right-[20%] w-[150px] h-[150px] border border-orange-500/10 rounded-2xl rotate-12" />
                <div className="absolute bottom-[30%] left-[25%] w-[200px] h-[100px] border border-orange-500/10 rounded-3xl -rotate-6" />
                <div className="absolute top-[25%] right-[30%] w-[100px] h-[1px] bg-orange-500/10 rotate-45" />
                <div className="absolute bottom-[40%] left-[40%] w-[150px] h-[1px] bg-orange-500/10 -rotate-45" />

                {/* 8. Noticeable floating orange particles */}
                <motion.div 
                    animate={{ y: [0, -50, 0], x: [0, 40, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }} 
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[30%] w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]" 
                />
                <motion.div 
                    animate={{ y: [0, 60, 0], x: [0, -50, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[60%] right-[35%] w-2.5 h-2.5 bg-orange-400 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.8)]" 
                />
                <motion.div 
                    animate={{ y: [0, -40, 0], x: [0, -30, 0], opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[25%] left-[40%] w-3.5 h-3.5 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]" 
                />
                <motion.div 
                    animate={{ y: [0, 45, 0], x: [0, 40, 0], opacity: [0.4, 0.9, 0.4], scale: [1, 1.3, 1] }} 
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute top-[35%] right-[20%] w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.9)]" 
                />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
                    <span className="stats-badge text-orange-500 font-bold uppercase tracking-[0.15em] text-[11px] mb-4">
                        {statsData.topBadge}
                    </span>
                    
                    <h2 className="stats-heading text-[40px] md:text-5xl lg:text-[56px] font-extrabold leading-tight mb-5 text-[#0f172a] tracking-tight">
                        {statsData.headline}
                    </h2>
                    
                    {/* Decorative Separator */}
                    <div className="stats-separator flex items-center justify-center gap-2 mb-6 opacity-80">
                        <div className="w-12 h-[2px] bg-gradient-to-l from-orange-400 to-transparent" />
                        <div className="w-2 h-2 rotate-45 bg-orange-500" />
                        <div className="w-12 h-[2px] bg-gradient-to-r from-orange-400 to-transparent" />
                    </div>

                    <p className="stats-subtitle text-[15px] md:text-[16px] max-w-2xl mx-auto text-[#475569] font-medium leading-relaxed">
                        {statsData.subtitle}
                    </p>
                </div>

                {/* 3 cards top row, 2 cards centered bottom row */}
                <div className="flex flex-wrap justify-center gap-6">
                    {statsData.stats.map((item, index) => (
                        <AchievementCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
