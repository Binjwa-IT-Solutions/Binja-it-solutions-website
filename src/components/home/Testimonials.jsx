"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTestimonials } from "@/lib/utils/getTestimonials";

gsap.registerPlugin(ScrollTrigger);

// Sub-component: Static Elegant Background (Inspired by reference image)
const TestimonialBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
            {/* Corner Gradients (Warm Orange) */}
            <div 
                className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/40 to-orange-400/10 rounded-full blur-[100px] opacity-40"
            />
            <div 
                className="absolute -bottom-60 -left-20 w-[800px] h-[800px] bg-gradient-to-tr from-orange-400/30 to-orange-200/5 rounded-full blur-[120px] opacity-30"
            />
            <div 
                className="absolute -top-20 -right-40 w-[700px] h-[700px] bg-orange-300/20 rounded-full blur-[120px] opacity-30"
            />
            <div 
                className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-orange-400/20 rounded-full blur-[100px] opacity-30"
            />

            {/* Subtle Grid Pattern in corners */}
            <div className="absolute top-20 left-10 w-64 h-64 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(249, 115, 22, 1) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            <div className="absolute bottom-10 left-20 w-64 h-64 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(249, 115, 22, 1) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

            {/* Concentric Rings (Top Left & Bottom Right) */}
            <svg className="absolute w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                {/* Top Left Rings */}
                <g>
                    <circle cx="0" cy="0" r="300" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="1.5" strokeDasharray="4 12" />
                    <circle cx="0" cy="0" r="400" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="1" />
                    <circle cx="0" cy="0" r="500" fill="none" stroke="rgba(249,115,22,0.1)" strokeWidth="0.5" strokeDasharray="10 20" />
                </g>
                
                {/* Bottom Right Rings */}
                <g>
                    <circle cx="100%" cy="100%" r="350" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="1.5" strokeDasharray="4 12" style={{ transformOrigin: '100% 100%' }} />
                    <circle cx="100%" cy="100%" r="450" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="1" style={{ transformOrigin: '100% 100%' }} />
                    <circle cx="100%" cy="100%" r="550" fill="none" stroke="rgba(249,115,22,0.1)" strokeWidth="0.5" strokeDasharray="10 20" style={{ transformOrigin: '100% 100%' }} />
                </g>
            </svg>

            {/* Static Orange Particles (Scattered) */}
            <div className="absolute inset-0 z-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-orange-500"
                        style={{
                            width: ((i * 7) % 5) + 3 + "px",
                            height: ((i * 7) % 5) + 3 + "px",
                            left: ((i * 17) % 100) + "%",
                            top: ((i * 23) % 100) + "%",
                            opacity: (((i * 11) % 40) / 100) + 0.3,
                            boxShadow: '0 0 12px 3px rgba(249,115,22,0.6)'
                        }}
                    />
                ))}
            </div>
            
            {/* Giant Background Quotation Mark (Top Right) */}
            <div className="absolute top-10 right-20 text-[300px] text-orange-500/10 font-serif leading-none select-none">
                “
            </div>
        </div>
    );
};

// Premium Interactive Card Component
const TestimonialCard = ({ item, isActive, isAnyHovered, onHoverStart, onHoverEnd }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // 3D Tilt Effect Values (Desktop only)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const rotateX = useSpring(useMotionValue(0), springConfig);
    const rotateY = useSpring(useMotionValue(0), springConfig);

    const handleMouseMove = (e) => {
        if (!cardRef.current || window.innerWidth < 1024) return;
        const rect = cardRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        rotateX.set(yPct * -10);
        rotateY.set(xPct * 10);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onHoverEnd();
        rotateX.set(0);
        rotateY.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        onHoverStart();
    };

    const isDimmed = isAnyHovered && !isHovered;

    return (
        <motion.div
            ref={cardRef}
            className="w-[85vw] sm:w-[380px] lg:w-[400px] shrink-0 rounded-3xl relative transition-all duration-500 ease-out"
            style={{ 
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
                scale: isActive ? 1.02 : 0.95,
                opacity: isDimmed ? 0.4 : (isActive ? 1 : 0.7),
                zIndex: isHovered ? 20 : 10
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Soft Orange Glow Behind Active/Hovered Card */}
            <div className={`absolute inset-0 bg-orange-500/20 blur-[30px] rounded-3xl transition-opacity duration-700 -z-10 ${isHovered || isActive ? 'opacity-100' : 'opacity-0'}`} />

            <div className={`h-full w-full rounded-3xl bg-white backdrop-blur-xl border p-8 flex flex-col group overflow-hidden transition-all duration-500 ${isHovered ? 'shadow-[0_20px_40px_-10px_rgba(249,115,22,0.2)] border-orange-500/30 -translate-y-2' : 'shadow-[0_5px_20px_-5px_rgba(0,0,0,0.05)] border-neutral-100'}`}>
                
                {/* Top Right Orange Quote Bubble */}
                <div className="absolute top-0 right-0 w-14 h-14 bg-orange-500 rounded-bl-3xl rounded-tr-3xl flex items-center justify-center text-white shadow-md z-20 transition-transform duration-300 group-hover:scale-110">
                    <Quote size={20} fill="currentColor" strokeWidth={0} />
                </div>

                {item.type === "text" ? (
                    <div className="relative z-10 flex flex-col flex-grow h-full pt-4">
                        <div className="flex items-center gap-4 mb-6">
                            {/* Zooming Client Image */}
                            <div className="relative w-16 h-16 shrink-0 transition-transform duration-500 group-hover:scale-110">
                                <Image src={item.avatar} fill sizes="64px" className={`rounded-full object-cover shadow-sm border-2 transition-colors duration-500 ${isHovered ? 'border-orange-500/50 shadow-orange-500/20' : 'border-transparent'}`} alt={item.name} />
                            </div>
                            
                            {/* Animated Star Rating */}
                            <div className={`flex gap-1 text-orange-500 transition-transform duration-500 ${isHovered ? '-translate-y-1' : ''}`}>
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: isActive ? i * 0.1 : 0, duration: 0.3 }}
                                    >
                                        <Star size={16} fill={i < (item.rating || 5) ? "currentColor" : "none"} strokeWidth={i < (item.rating || 5) ? 0 : 2} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <p className="text-base md:text-lg leading-relaxed font-medium italic text-slate-600 mb-8 flex-grow">
                            "{item.text}"
                        </p>

                        {/* Bottom Orange Accent Line */}
                        <div className="w-16 h-[2px] bg-orange-100 mb-6 transition-all duration-500 group-hover:w-full group-hover:bg-orange-400" />

                        <div className="mt-auto">
                            <p className="text-lg font-extrabold text-slate-900 tracking-tight mb-1">{item.name}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-orange-500 transition-colors">{item.role}</p>
                        </div>
                    </div>
                ) : (
                    <div className="relative z-10 flex flex-col h-[350px] justify-between border-transparent group-hover:border-orange-500/30 rounded-2xl overflow-hidden -mx-2 -mt-2">

                        <Image src={item.thumbnail} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover transition-transform duration-700 group-hover:scale-110" alt="Video testimonial" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                        
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                            <div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-110">
                                <Image src={item.avatar} fill sizes="56px" className={`rounded-full object-cover shadow-sm border-2 transition-colors duration-500 ${isHovered ? 'border-orange-500 shadow-orange-500/50' : 'border-white'}`} alt={item.name} />
                            </div>
                            <div className={`flex gap-1 text-orange-400 mt-2 transition-transform duration-500 ${isHovered ? '-translate-y-1' : ''}`}>
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: isActive ? i * 0.1 : 0, duration: 0.3 }}
                                    >
                                        <Star size={14} fill="currentColor" strokeWidth={0} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-16 h-16 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500 bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                <Play fill="white" size={24} className="ml-1" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 text-white transition-transform duration-500 group-hover:translate-x-2 z-20">
                            <p className="text-xl font-extrabold mb-1 tracking-tight">{item.name}</p>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-90 text-orange-300">{item.role}</p>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
    const [isHoveringAnyCard, setIsHoveringAnyCard] = useState(false);
    
    const sectionRef = useRef(null);
    const marqueeRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        getTestimonials().then(data => setTestimonials(data));
    }, []);

    // Entrance Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                }
            });
            tl.to('.ts-eyebrow', { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
              .to('.ts-heading', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .to('.ts-underline', { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.6");
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Infinite Marquee Animation
    useEffect(() => {
        if (testimonials.length === 0 || !marqueeRef.current) return;

        const ctx = gsap.context(() => {
            // Animate exactly 50% of the total width (which is one full duplicated set)
            animationRef.current = gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: testimonials.length * 8, // Adjust speed based on item count
                ease: "none",
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, [testimonials]);

    // Hover Speed Control
    useEffect(() => {
        if (animationRef.current) {
            gsap.to(animationRef.current, {
                timeScale: isHoveringCarousel ? 0.3 : 1, // Slow down to 30% speed on hover
                duration: 0.8,
                ease: "power2.out"
            });
        }
    }, [isHoveringCarousel]);

    // Render sets of testimonials for the infinite loop. 
    // We render 4 sets inside two identical containers to guarantee no blank space and perfect math.
    const renderTestimonialSet = (keySuffix) => (
        <div className="flex gap-8 pr-8" key={keySuffix}>
            {[...testimonials, ...testimonials].map((item, index) => (
                <TestimonialCard 
                    key={`${keySuffix}-${index}`} 
                    item={item} 
                    isActive={true} // In a marquee, all center cards are active
                    isAnyHovered={isHoveringAnyCard}
                    onHoverStart={() => setIsHoveringAnyCard(true)}
                    onHoverEnd={() => setIsHoveringAnyCard(false)}
                />
            ))}
        </div>
    );

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-[#FAFAFA]">
            <TestimonialBackground />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
                <div className="max-w-3xl flex flex-col items-start">
                    {/* Eyebrow */}
                    <div className="ts-eyebrow opacity-0 translate-y-4 mb-5">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold tracking-widest uppercase shadow-sm">
                            Client Stories
                        </span>
                    </div>
                    
                    {/* Heading */}
                    <h2 className="ts-heading opacity-0 translate-y-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight relative inline-block">
                        <span className="relative inline-block text-slate-900">
                            What Our Clients Say About Us
                            {/* SVG Underline */}
                            <svg className="ts-underline absolute -bottom-2 left-0 w-full h-3 origin-left scale-x-0" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10C50 4 150 2 198 8" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                </div>
            </div>

            {/* Infinite Marquee Container */}
            <div 
                className="w-full relative z-10 py-10 overflow-hidden"
                onMouseEnter={() => setIsHoveringCarousel(true)}
                onMouseLeave={() => setIsHoveringCarousel(false)}
                onTouchStart={() => setIsHoveringCarousel(true)}
                onTouchEnd={() => setIsHoveringCarousel(false)}
            >
                {/* Left/Right Fading Edges for premium effect */}
                <div className="absolute top-0 left-0 bottom-0 w-[10vw] md:w-[15vw] bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-[10vw] md:w-[15vw] bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

                <div 
                    ref={marqueeRef}
                    className="flex w-max cursor-grab active:cursor-grabbing hover:will-change-transform"
                >
                    {/* Set 1 (moves 0 to -100%) */}
                    {testimonials.length > 0 && renderTestimonialSet('set-1')}
                    {/* Set 2 (seamlessly follows) */}
                    {testimonials.length > 0 && renderTestimonialSet('set-2')}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
