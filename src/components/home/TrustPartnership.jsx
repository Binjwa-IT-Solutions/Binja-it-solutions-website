"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
    Rocket, 
    BrainCircuit, 
    UserCheck, 
    MessageSquareText, 
    TrendingUp, 
    Headset 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const icons = [Rocket, BrainCircuit, UserCheck, MessageSquareText, TrendingUp, Headset];

const trustData = [
  {
    title: "One-Stop Solution for Businesses",
    description: "From technology, AI and marketing services to compliance, we have got everything covered under one roof",
  },
  {
    title: "Automation through AI",
    description: "Utilizing latest AI-driven automation along with best industry practices for your business to keep pace ahead",
  },
  {
    title: "Professional Experts",
    description: "Team having different experiences in technology, taxation, compliance and digital marketing",
  },
  {
    title: "Transparent Communication",
    description: "Project execution with clear timelines, transparent communication and no surprise expenses",
  },
  {
    title: "Economical & Scalable Solutions",
    description: "Services based on your requirements to give your business that extra edge",
  },
  {
    title: "Long Term Support",
    description: "Not just during project completion, but also post-completion support",
  },
];

const TrustPartnership = () => {
    const sectionRef = useRef(null);
    const reducedMotion = useReducedMotion();

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Top Label
            tl.fromTo(".trust-top-label", 
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );

            // Heading entrance
            tl.fromTo(".trust-heading", 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            );

            // Heading underline draw
            tl.fromTo(".trust-heading-line",
                { scaleX: 0 },
                { scaleX: 1, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            );

            // Paragraph entrance
            tl.fromTo(".trust-paragraph", 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                "-=0.4"
            );

            // Cards stagger reveal
            tl.fromTo(".trust-card", 
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
                "-=0.2"
            );

            // Bottom statement text & lines
            tl.fromTo(".trust-statement",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.2"
            );

            // Background decorative floating
            gsap.to(".bg-element-float-1", {
                y: -30, x: 15,
                duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut"
            });
            gsap.to(".bg-element-float-2", {
                y: 40, x: -20,
                duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut"
            });
        });

        // Reduced Motion Fallback
        mm.add("(prefers-reduced-motion: reduce)", () => {
            gsap.fromTo([".trust-top-label", ".trust-heading", ".trust-paragraph", ".trust-card", ".trust-statement"], 
                { opacity: 0 },
                { opacity: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-16 bg-[#fafafa] relative overflow-hidden font-sans">
            
            {/* Subtle Decorative Background Elements exactly like the image */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                
                {/* Left side concentric circles */}
                <div className="bg-element-float-1 absolute top-[10%] -left-[10%] w-[400px] h-[400px] rounded-full border-[1.5px] border-orange-500/10 flex items-center justify-center">
                    <div className="w-[300px] h-[300px] rounded-full border-[1px] border-orange-500/10 flex items-center justify-center">
                         <div className="w-[200px] h-[200px] rounded-full border-[1px] border-orange-500/5 flex items-center justify-center">
                              <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
                         </div>
                    </div>
                </div>

                {/* Right side curve and grid */}
                <div className="absolute top-[0%] right-[-5%] w-[500px] h-[500px]">
                    <svg className="w-full h-full opacity-[0.15]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0,100 C 50,150 150,50 200,100" fill="transparent" stroke="#f97316" strokeWidth="0.5" />
                        <path d="M 0,120 C 50,170 150,70 200,120" fill="transparent" stroke="#f97316" strokeWidth="0.5" />
                    </svg>
                </div>
                
                {/* Dotted Grid Pattern on right middle */}
                <div className="absolute top-[40%] right-[3%] w-24 h-24 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                
                {/* Dotted Grid Pattern on left bottom */}
                <div className="absolute bottom-[20%] left-[3%] w-16 h-32 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />

                {/* Floating Orange Orb right */}
                <div className="bg-element-float-2 absolute top-[25%] right-[15%] w-3 h-3 rounded-full bg-orange-400/40 shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                
                {/* Header Area */}
                <div className="text-center mb-16 md:mb-20">
                    
                    {/* Why Choose Us Pill */}
                    <div className="trust-top-label flex items-center justify-center gap-3 mb-6">
                        <div className="w-10 h-[1px] bg-gradient-to-l from-orange-300 to-transparent relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_6px_rgba(249,115,22,0.8)]" />
                        </div>
                        <span className="text-orange-500 text-[11px] font-bold tracking-[0.15em] uppercase bg-orange-50/80 border border-orange-100 px-4 py-1.5 rounded-full shadow-sm">
                            WHY CHOOSE US
                        </span>
                        <div className="w-10 h-[1px] bg-gradient-to-r from-orange-300 to-transparent relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_6px_rgba(249,115,22,0.8)]" />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="trust-heading inline-block relative">
                        <h2 className="text-3xl md:text-[42px] lg:text-[46px] font-bold leading-[1.15] mb-6 text-neutral-900 tracking-tight">
                            Why Businesses Trust & Partner With <br className="hidden md:block" />
                            <span className="text-orange-500 relative inline-block mt-1">
                                Binjwa IT Solutions
                                <div className="trust-heading-line absolute -bottom-2 left-0 w-full h-[3px] bg-orange-500 origin-left rounded-full" />
                            </span>
                        </h2>
                    </div>
                    
                    {/* Subtitle Paragraph */}
                    <p className="trust-paragraph max-w-3xl mx-auto text-[16px] md:text-[17px] text-neutral-500 leading-relaxed font-light mt-6">
                        In Binjwa IT Solutions, our services are not only technological but we make sure that we work
                        alongside you as your partner in development and growth. We have certain aspects which
                        make us stand out
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 relative mb-24">
                    
                    {/* Horizontal Decorative Divider Lines (from the image) */}
                    <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -translate-y-1/2 pointer-events-none z-0">
                        <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
                        <div className="absolute right-[25%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
                    </div>

                    {trustData.map((item, index) => {
                        const IconComponent = icons[index % icons.length];
                        return (
                            <motion.div 
                                key={index} 
                                className="trust-card group relative bg-white rounded-[1.25rem] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-neutral-100 cursor-pointer overflow-hidden z-10"
                                whileHover={reducedMotion ? {} : "hover"}
                                initial="initial"
                                variants={{
                                    initial: { y: 0, scale: 1, boxShadow: "0 8px 30px rgba(0,0,0,0.03)" },
                                    hover: { y: -4, scale: 1.01, boxShadow: "0 20px 40px rgba(249,115,22,0.08)" }
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {/* Orange Corner Ribbon */}
                                <div className="absolute top-0 right-0 overflow-hidden w-16 h-16 rounded-tr-[1.25rem]">
                                    <div className="absolute top-[-24px] right-[-24px] w-20 h-20 bg-orange-500 rotate-45 flex items-end justify-center pb-1.5 shadow-md">
                                        <span className="text-white font-bold text-[11px] leading-none -rotate-45 block transform -translate-x-[2px] translate-y-[2px]">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Layout */}
                                <div className="flex gap-6 items-start relative z-10">
                                    {/* Circular Icon Container */}
                                    <motion.div 
                                        className="shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center border-[1.5px] border-orange-100 group-hover:border-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.05)] transition-colors duration-300"
                                        variants={{
                                            initial: { rotate: 0, scale: 1 },
                                            hover: { rotate: -5, scale: 1.05 }
                                        }}
                                    >
                                        <IconComponent className="text-orange-500" size={24} strokeWidth={1.5} />
                                    </motion.div>

                                    {/* Text Content */}
                                    <div className="pt-1 pr-6">
                                        <h3 className="text-[17px] font-bold mb-2.5 text-neutral-900 group-hover:text-orange-600 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-[14px] leading-relaxed text-neutral-500 font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Statement Area */}
                <div className="trust-statement flex items-center justify-center gap-4 max-w-4xl mx-auto py-2">
                    <div className="hidden md:block w-20 lg:w-32 h-[1px] bg-gradient-to-l from-orange-400 to-transparent relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_6px_rgba(249,115,22,0.8)]" />
                    </div>
                    
                    <p className="text-center text-[15px] italic font-medium text-neutral-700 leading-relaxed px-4">
                        Partner with Binjwa IT Solutions and transform challenges into opportunities — with solutions designed to accelerate growth, enhance efficiency, and create lasting business value.
                    </p>
                    
                    <div className="hidden md:block w-20 lg:w-32 h-[1px] bg-gradient-to-r from-orange-400 to-transparent relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_6px_rgba(249,115,22,0.8)]" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrustPartnership;
