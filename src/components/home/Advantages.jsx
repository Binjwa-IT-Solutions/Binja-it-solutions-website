"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const advantageData = {
    title: "We know you have options. Here's why businesses across India keep choosing",
    highlight: "Binjwa IT Solutions—and keep coming back.",
    items: [
        { title: "We Actually Listen to You", description: "Most agencies give you a template to work with and leave it at that. That's not us. Our process begins with an understanding of your company, needs, and challenges before we write a line of code for you." },
        { title: "One Team. Everything You Need.", description: "Forget about hiring a web developer here, a marketing agency there, and another compliance consultancy elsewhere. We'll take care of your website, mobile app development, AI automation, digital marketing, and compliance. Just one call. Just one team." },
        { title: "We Help You Integrate AI into Your Work—Simply", description: "Sure, artificial intelligence may seem complex. However, integrating AI into your processes is anything but difficult for us. We'll automate your customer follow-up, lead management, and other repetitive processes so you can grow your business instead of managing it." },
        { title: "We Care About Your Results, Not Just Delivery", description: "We monitor the performance of your project, make recommendations, and help to improve things. Your successful development is our success. This is not just a slogan but also a way of working." },
        { title: "Your Business Is Safe With Us", description: "Security and reliability are key priorities for us. Starting from reliable code creation and ending at data protection and compliance issues, we provide you with all the needed guarantees." },
        { title: "We Respect Your Time", description: "We understand very well that time is valuable for you. That's why we create clear timelines, give regular feedback, and meet deadlines. You will never face ghosting and postponing on our part." },
        { title: "We Grow When You Grow", description: "It is not only an initial development that we are responsible for. After the payment of the invoice, we won't disappear and leave you without assistance. We will accompany your growing business and its IT infrastructure." },
    ],
};

const Advantages = () => {
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

            // Heading & Subtext reveal
            tl.fromTo(".adv-heading, .adv-subtext", 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
            );

            // Subtle underline draw
            tl.fromTo(".adv-underline", 
                { scaleX: 0 },
                { scaleX: 1, duration: 0.8, ease: "power2.out" },
                "-=0.5"
            );

            // Cards staggered reveal
            tl.fromTo(".adv-card", 
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
                "-=0.4"
            );
            
            // Very subtle background parallax
            gsap.fromTo(".adv-bg-img", 
                { y: "-8%" }, 
                { 
                    y: "8%", 
                    ease: "none", 
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });

        // Reduced Motion Fallback
        mm.add("(prefers-reduced-motion: reduce)", () => {
            gsap.fromTo(".adv-heading, .adv-subtext", 
                { opacity: 0 },
                { opacity: 1, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );
            
            gsap.fromTo(".adv-card", 
                { opacity: 0 },
                { opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 px-6 lg:px-20 overflow-hidden min-h-screen flex flex-col justify-center">
            
            {/* Background Image Parallax Container */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="adv-bg-img absolute inset-[-10%] w-[120%] h-[120%]">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team Collaboration Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Dark Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                
                {/* Premium Heading Area */}
                <div className="mb-16 md:mb-24 max-w-4xl">
                    <h2 className="adv-heading text-[40px] md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight relative inline-block">
                        Advantages
                        <div className="adv-underline absolute -bottom-3 left-0 w-24 h-[3px] bg-orange-500 origin-left" />
                    </h2>
                    
                    <p className="adv-subtext text-xl md:text-[22px] text-neutral-300 font-light leading-relaxed">
                        {advantageData.title}{" "}
                        <span className="text-orange-500 font-medium">
                            {advantageData.highlight}
                        </span>
                    </p>
                </div>

                {/* Dark Glassmorphism Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {advantageData.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="adv-card group relative flex flex-col justify-between p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-xl cursor-pointer"
                            whileHover={reducedMotion ? {} : "hover"}
                            initial="initial"
                            variants={{
                                initial: { y: 0, scale: 1 },
                                hover: { y: -6, scale: 1.02 }
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Base Subtle Border */}
                            <div className="absolute inset-0 rounded-[24px] border border-white/[0.08] pointer-events-none transition-colors duration-500 group-hover:border-orange-500/40" />
                            
                            {/* Animated Hover Glow Layer */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0 },
                                    hover: { opacity: 1 }
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 rounded-[24px] shadow-[0_0_40px_rgba(249,115,22,0.12)] pointer-events-none"
                            />

                            {/* Content Layer */}
                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -4 }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col h-full z-10 relative"
                            >
                                {/* Indicator Number & Title */}
                                <div className="mb-6">
                                    <span className="text-orange-500 font-semibold text-xs tracking-[0.2em] mb-4 block">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-[20px] font-bold text-white leading-[1.3] group-hover:text-orange-50 transition-colors duration-400">
                                        {item.title}
                                    </h3>
                                </div>
                                
                                {/* Description */}
                                <p className="text-[15px] text-neutral-400 font-light leading-relaxed mb-10 flex-grow group-hover:text-neutral-300 transition-colors duration-400">
                                    {item.description}
                                </p>


                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Closing Statement */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 md:mt-24 text-center"
                >
                    <p className="text-2xl md:text-[28px] text-white font-semibold tracking-tight italic">
                        "We don't just build solutions—we build businesses."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Advantages;
