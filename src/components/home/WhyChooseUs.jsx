"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const allInOne = '/assets/All-in-One.jpg';
const solutions = '/assets/chooseimage2.jpg';
const team = '/assets/type-4.jpg';
const finance = '/assets/chooseimage3.jpg';
const values = '/assets/Hire-our-people.png';
const support = '/assets/itservices.png';

const whyChooseData = [
    {
        id: "1/6",
        label: "End-to-end Product Development",
        title: "Innovative Solutions",
        points: [
            "We provide innovative solutions based on the most advanced technologies, intelligent automation, and industry practices that allow organizations to outshine their competitors.",
        ],
        image: allInOne,
    },
    {
        id: "2/6",
        label: "Strategic Collaboration",
        title: "Trusted Partnership",
        points: [
            "We consider it crucial to establish a strong relationship with our customers through our reliable assistance and effective communication.",
        ],
        image: solutions,
    },
    {
        id: "3/6",
        label: "Dedicated Talent",
        title: "Expert Team",
        points: [
            "We have skilled experts who can provide knowledge about technology, compliance, taxation, and digital marketing for you to get customized solutions.",
        ],
        image: team,
    },
    {
        id: "4/6",
        label: "Tailored Strategies",
        title: "Customized Approach",
        points: [
            "Each business has its own distinct requirements. We listen to your aspirations and make strategies accordingly.",
        ],
        image: finance,
    },
    {
        id: "5/6",
        label: "Performance Focus",
        title: "Results-Driven Execution",
        points: [
            "In whatever service you avail yourself of from us, whether it be development and automation or marketing and compliance, we emphasize delivering results.",
        ],
        image: values,
    },
    {
        id: "6/6",
        label: "Ongoing Maintenance",
        title: "Continuous Support",
        points: [
            "We don’t just stop there. Our job is not over when your projects are completed but rather the beginning of ongoing support for your business.",
        ],
        image: support,
    },
];

const FeatureCard = ({ feature, isEven, index }) => {
    const cardRef = useRef(null);
    const reducedMotion = useReducedMotion();

    // 3D Magnetic Tilt for extreme attractiveness
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);
    
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
    
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div 
            ref={cardRef} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`feature-block relative w-full py-12 md:py-16 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 pl-10 sm:pl-16 lg:pl-0 transition-opacity duration-300 perspective-[1000px]`}
        >
            {/* Desktop Center Timeline Node */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center z-20">
                <div className="timeline-dot w-2.5 h-2.5 rounded-full bg-neutral-300 transition-all duration-300 border-2 border-white shadow-sm" />
            </div>

            {/* Mobile/Tablet Timeline Node */}
            <div className="flex lg:hidden absolute left-0 top-1/4 w-8 h-8 items-center justify-center z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="timeline-dot w-2.5 h-2.5 rounded-full bg-neutral-300 transition-all duration-300 border-[1.5px] border-white shadow-sm" />
            </div>

            {/* Image Area */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 feature-img-wrapper">
                <motion.div 
                    whileHover={reducedMotion ? {} : "hover"}
                    initial="initial"
                    style={reducedMotion ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="feature-image-container relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/3] lg:aspect-[5/4] rounded-[1.5rem] bg-neutral-100 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-neutral-200 group cursor-pointer hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-shadow duration-300"
                >
                    <motion.div
                        variants={{
                            initial: { scale: 1 },
                            hover: { scale: 1.05, y: -4, x: -2 }
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="w-full h-full relative overflow-hidden rounded-[1.5rem]"
                        style={reducedMotion ? {} : { transform: "translateZ(30px)" }}
                    >
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="feature-image object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                            sizes="(max-width: 640px) 100vw, 500px"
                            priority={index <= 1}
                        />
                    </motion.div>
                    
                    {/* Hover Border Accent */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-[1.5rem] transition-colors duration-300 pointer-events-none" />
                </motion.div>
            </div>

            {/* Text Content Area */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10 group cursor-default">
                
                {/* Unified Premium Orange Label */}
                <div className="feature-label px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase text-orange-600 bg-orange-50 border border-orange-100 mb-6 shadow-sm">
                    {feature.label}
                </div>

                {/* Heading with Subtle Hover Interaction */}
                <motion.div
                    whileHover="hover"
                    initial="initial"
                    className="relative inline-block mb-6 feature-title-wrapper"
                >
                    <motion.h3 
                        variants={{
                            initial: { x: 0 },
                            hover: { x: 8 }
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="feature-title text-[32px] md:text-4xl lg:text-[42px] font-bold leading-[1.15] text-neutral-900 transition-colors duration-300 group-hover:text-black"
                    >
                        {feature.title}
                    </motion.h3>
                    <motion.div 
                        variants={{
                            initial: { scaleX: 0 },
                            hover: { scaleX: 1 }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute -bottom-2 left-0 h-[3px] bg-orange-500 w-full origin-left"
                    />
                </motion.div>

                {/* Description Paragraph */}
                <p className="feature-desc text-[17px] md:text-[18px] mb-4 leading-[1.8] max-w-lg text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700 font-light">
                    {feature.points[0]}
                </p>
            </div>
        </div>
    );
};

const WhyChooseUsStack = () => {
    const sectionRef = useRef(null);
    const progressLineRef = useRef(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            // Scroll Progress Line tracking the entire section
            gsap.to(progressLineRef.current, {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            });

            // Fast, punchy Reveal Heading
            gsap.fromTo(".section-heading", 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)", scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
            );

            // Setup GSAP for each feature block
            const blocks = gsap.utils.toArray('.feature-block');
            
            blocks.forEach((block) => {
                const imgContainer = block.querySelector('.feature-image-container');
                const image = block.querySelector('.feature-image');
                const label = block.querySelector('.feature-label');
                const titleWrapper = block.querySelector('.feature-title-wrapper');
                const desc = block.querySelector('.feature-desc');
                const dot = block.querySelector('.timeline-dot');
                
                // Fast Storytelling Entrance Timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: block,
                        start: "top 85%", // Starts revealing earlier
                        toggleActions: "play none none reverse"
                    }
                });

                // Punchy masked reveal for image
                tl.fromTo(imgContainer,
                    { clipPath: "inset(20% 20% 20% 20% round 2rem)", opacity: 0 },
                    { clipPath: "inset(0% 0% 0% 0% round 2rem)", opacity: 1, duration: 0.7, ease: "power3.out" }
                );

                // Image scale transition linked to reveal
                tl.fromTo(image,
                    { scale: 1.12 },
                    { scale: 1, duration: 0.7, ease: "power2.out" },
                    "<"
                );

                // Text staggers in incredibly fast
                tl.fromTo([label, titleWrapper, desc],
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.2)" },
                    "-=0.5"
                );

                // Image Parallax Effect on Scroll
                gsap.fromTo(image, 
                    { y: -15 }, 
                    { 
                        y: 15, 
                        ease: "none", 
                        scrollTrigger: {
                            trigger: block,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );

                // Fast Active State Highlighting
                ScrollTrigger.create({
                    trigger: block,
                    start: "top 55%",
                    end: "bottom 45%",
                    onEnter: () => {
                        gsap.to(block, { opacity: 1, duration: 0.3 });
                        gsap.to(dot, { backgroundColor: "#f97316", scale: 1.5, borderColor: "#ffedd5", duration: 0.3 });
                    },
                    onLeave: () => {
                        gsap.to(block, { opacity: 0.3, duration: 0.3 });
                        gsap.to(dot, { backgroundColor: "#d4d4d8", scale: 1, borderColor: "#ffffff", duration: 0.3 });
                    },
                    onEnterBack: () => {
                        gsap.to(block, { opacity: 1, duration: 0.3 });
                        gsap.to(dot, { backgroundColor: "#f97316", scale: 1.5, borderColor: "#ffedd5", duration: 0.3 });
                    },
                    onLeaveBack: () => {
                        gsap.to(block, { opacity: 0.3, duration: 0.3 });
                        gsap.to(dot, { backgroundColor: "#d4d4d8", scale: 1, borderColor: "#ffffff", duration: 0.3 });
                    }
                });
            });
        });

        // Reduced Motion Fallback
        mm.add("(prefers-reduced-motion: reduce)", () => {
            gsap.fromTo(".section-heading", 
                { opacity: 0 },
                { opacity: 1, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
            );

            const blocks = gsap.utils.toArray('.feature-block');
            blocks.forEach((block) => {
                const els = block.querySelectorAll('.feature-image-container, .feature-label, .feature-title-wrapper, .feature-desc');
                gsap.fromTo(els,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: block, start: "top 85%" } }
                );
            });
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 lg:px-20 bg-[#fdfdfd] relative overflow-hidden">
            
            {/* Highly Attractive Animated Abstract Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[5%] left-[-5%] w-[400px] h-[400px] opacity-[0.03] border-[1px] border-black border-dashed rounded-full" 
                />
                <motion.div 
                    animate={{ y: [0, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[2%] w-[100px] h-[100px] opacity-[0.05] border-[1px] border-orange-500 rounded-full" 
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] opacity-[0.02] border-[1px] border-black rounded-full" 
                />
                
                {/* Flowing radial warm-gray gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-100/60 via-transparent to-transparent opacity-80" />
            </div>

            <div className="max-w-[1100px] mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="section-heading text-center mb-16 lg:mb-24 relative flex flex-col items-center">
                    <h2 className="text-[36px] md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-neutral-900 tracking-tight">
                        Why Businesses Choose <br className="hidden sm:block" />
                        <span className="text-orange-500 inline-block mt-3">Binjwa IT Solutions</span>
                    </h2>
                    <div className="h-[2px] w-12 bg-orange-500 rounded-full" />
                </div>

                <div className="relative pl-6 sm:pl-10 lg:pl-0">
                    
                    {/* The Scrolling Connected Path Line */}
                    <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1.5px] bg-neutral-200 lg:-translate-x-1/2 z-0">
                        <div 
                            ref={progressLineRef}
                            className="w-full h-full bg-orange-500 origin-top transform scale-y-0 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                        />
                    </div>

                    {/* Zig-Zag Feature Blocks */}
                    <div className="flex flex-col">
                        {whyChooseData.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} isEven={index % 2 !== 0} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsStack;
