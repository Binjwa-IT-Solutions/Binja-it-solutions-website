"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
    {
        clientName: "TechNova Solutions",
        problem: "Outdated CRM resulting in slow lead tracking and high drop-off rates.",
        solution: "Developed a custom Agentic AI CRM system with automated workflows.",
        results: "35% increase in lead conversion and 50% reduction in manual tracking.",
    },
    {
        clientName: "GreenLeaf E-commerce",
        problem: "Poor mobile performance and complicated checkout process.",
        solution: "Redesigned the frontend using modern web technologies and optimized the payment gateway.",
        results: "200% increase in mobile sales within the first two months.",
    },
    {
        clientName: "Apex Healthcare",
        problem: "Manual patient scheduling leading to operational bottlenecks.",
        solution: "Implemented an AI-driven smart scheduling application with WhatsApp integration.",
        results: "Saved 20 hours a week in administrative tasks and improved patient satisfaction.",
    },
];

// Premium Interactive Card Component
const PortfolioCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Mouse tracking for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            ref={cardRef}
            className="portfolio-card opacity-0 relative h-full w-full rounded-3xl bg-white border border-neutral-100 transition-all duration-500 ease-out p-8 flex flex-col group overflow-hidden shadow-[0_5px_15px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.15)] hover:-translate-y-2"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Dynamic Hover Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(249,115,22,0.08),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Top orange accent line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-neutral-100 z-10">
                <motion.div 
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-500" 
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "20%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>

            <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50/80 border border-orange-100/80 text-orange-600 text-[10px] font-bold tracking-widest uppercase">
                    Case Study
                </div>
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-orange-50 text-orange-500 transition-all duration-300 transform ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
            </div>

            <div className="relative z-10 flex flex-col flex-grow transition-transform duration-300">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    {item.clientName}
                </h3>

                <div className="flex-grow space-y-6">
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Problem</p>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.problem}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Solution</p>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.solution}</p>
                    </div>
                </div>

                <div 
                    className={`mt-8 p-5 rounded-2xl border transition-colors duration-500 ${isHovered ? 'bg-orange-50/50 border-orange-200/60' : 'bg-slate-50/80 border-slate-100'}`}
                >
                    <p className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">Results</p>
                    <p className="text-sm font-bold text-slate-800 leading-relaxed">{item.results}</p>
                </div>
            </div>
        </motion.div>
    );
};

// Dynamic & Visible Background Graphics Component
const PortfolioBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA]">
        {/* Large Visible Glowing Auras */}
        <motion.div 
            animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" 
        />
        
        <motion.div 
            animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/25 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" 
        />
        
        {/* Visible Moving Grid Pattern */}
        <motion.div 
            animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.3]" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(249, 115, 22, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 1) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)'
            }} 
        />

        {/* Dynamic Floating Rings */}
        <svg className="absolute w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
            <motion.circle 
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                cx="85%" cy="20%" r="250" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="2" strokeDasharray="10 20" style={{ transformOrigin: '85% 20%' }}
            />
            <motion.circle 
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
                cx="15%" cy="80%" r="300" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="1.5" strokeDasharray="5 15" style={{ transformOrigin: '15% 80%' }}
            />
        </svg>

        {/* Fluid Moving SVG Waves */}
        <svg className="absolute w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
                d="M 0,50 C 30,60 70,40 100,50 L 100,100 L 0,100 Z" 
                fill="url(#grad1)"
                animate={{ d: ["M 0,50 C 30,70 70,30 100,50 L 100,100 L 0,100 Z", "M 0,50 C 40,20 60,80 100,50 L 100,100 L 0,100 Z", "M 0,50 C 30,70 70,30 100,50 L 100,100 L 0,100 Z"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
                d="M 0,60 C 40,70 60,30 100,60 L 100,100 L 0,100 Z" 
                fill="url(#grad2)"
                animate={{ d: ["M 0,60 C 40,80 60,20 100,60 L 100,100 L 0,100 Z", "M 0,60 C 20,40 80,90 100,60 L 100,100 L 0,100 Z", "M 0,60 C 40,80 60,20 100,60 L 100,100 L 0,100 Z"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(249,115,22,0.03)" />
                    <stop offset="100%" stopColor="rgba(249,115,22,0.08)" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(249,115,22,0.06)" />
                    <stop offset="100%" stopColor="rgba(249,115,22,0.02)" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

const Portfolio = () => {
    const sectionRef = useRef(null);
    const prefersReducedMotion = useRef(false);

    useEffect(() => {
        prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        let ctx = gsap.context(() => {
            // Parallax Background
            if (!prefersReducedMotion.current) {
                gsap.utils.toArray('.parallax-layer').forEach(layer => {
                    const speed = parseFloat(layer.getAttribute('data-speed'));
                    gsap.to(layer, {
                        y: () => (ScrollTrigger.maxScroll(window) * speed),
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        }
                    });
                });
            }

            // Entrance Animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

            tl.to('.portfolio-eyebrow', { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
              .to('.portfolio-heading', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .to('.portfolio-underline', { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.6")
              .to('.portfolio-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
              .to('.portfolio-card', { 
                  opacity: 1, 
                  y: 0, 
                  duration: 0.8, 
                  stagger: 0.15, 
                  ease: "back.out(1.2)" 
              }, "-=0.5");
              
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-32 bg-[#FAFAFA] overflow-hidden">
            <PortfolioBackground />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
                    <div className="portfolio-eyebrow opacity-0 translate-y-4 mb-5">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold tracking-widest uppercase shadow-sm">
                            Portfolio
                        </span>
                    </div>
                    
                    <h2 className="portfolio-heading opacity-0 translate-y-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight relative inline-block">
                        <span className="relative inline-block text-slate-900">
                            Portfolio
                            {/* SVG Underline */}
                            <svg className="portfolio-underline absolute -bottom-2 left-0 w-full h-3 origin-left scale-x-0" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10C50 4 150 2 198 8" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    
                    <p className="portfolio-subtitle opacity-0 translate-y-4 text-lg md:text-xl text-slate-600 max-w-2xl mt-2 leading-relaxed">
                        Discover how we have helped businesses overcome their digital challenges with tailored solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 perspective-1000">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="h-full transform-gpu" style={{ perspective: "1000px" }}>
                            <PortfolioCard item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;


