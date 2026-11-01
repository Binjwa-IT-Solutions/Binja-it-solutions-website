"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    { question: "1. How long will the project take?", answer: "Depending on the specifics, an average project can take 4 - 6 weeks for a standard business website and 8 - 12 weeks for applications, CRMs, or AI automation solutions. We always prepare a detailed plan for each project that we implement." },
    { question: "2. What industries do you work with?", answer: "We work in different industries, including retail, health care, education, professional services, manufacturing, real estate, and e-commerce. Our solutions are tailored according to the specific industry needs." },
    { question: "3. Do you offer support after project delivery?", answer: "We offer maintenance, updates, monitoring, technical support, and enhancement services to keep your solution operating at its best for years after implementation." },
    { question: "4. Can you please help me with AI automation?", answer: "Yes, we can implement AI automation solutions such as chatbots, workflow automation, CRM automation, AI agents, lead management systems, and business process automation." },
    { question: "5. What are your pricing options?", answer: "All our pricing options are transparent and depend upon the project’s needs and requirements. The project can have a fixed-price option, a time-milestone payment plan, or a custom-specific plan with no extra charges." },
    { question: "6. What makes you different from the competition?", answer: "From a customer’s perspective, we offer end-to-end technology solutions, including AI, business strategies, and support services. This makes us different from other competitors because we can offer our customers a full-stack approach to their problems with honest and transparent collaboration." },
    { question: "7. Why do I need a website/digital solution?", answer: "A professional website/solution will help you brand your business online, drive and convert traffic, increase efficiency, and, eventually, profit. Moreover, a website is essential for maintaining relevance and competitiveness in today’s digital landscape to stay relevant and competitive in the modern digital world." },
    { question: "8. Is it essential for my growing business?", answer: "As your business grows, so should its digital presence; therefore, we suggest implementing solutions like websites, CRMs, marketing, and AI automation solutions to scale along with you." },
    { question: "9. Can you redesign my website?", answer: "Yes, we can redesign and update your website with your desired changes in terms of performance, design, responsiveness, SEO, and much more." },
    { question: "10. How can we get started?", answer: "To begin the process, please contact us through our website, phone, or email. Afterward, we'll schedule a free discovery call to answer your questions and provide the best solution for you." },
];

// --- Background Component ---
const FAQBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray('.f-parallax').forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed')) || 0.1;
                // Constrain parallax to a max local movement (e.g., +/- 150px) to prevent escaping bounds
                gsap.fromTo(layer, 
                    { y: -150 * speed },
                    {
                        y: 150 * speed,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="faq-background absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Attractive Floating Gradients */}
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/50 to-orange-200/20 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/4" 
            />
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-orange-400/40 to-orange-200/20 rounded-full blur-[120px] transform translate-x-1/4 translate-y-1/4" 
            />

            {/* Dotted Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#F97316 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

            {/* Dynamic Large Arcs & Circuit Lines */}
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] max-w-[2000px] max-h-[2000px] opacity-[0.4]" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx="500" cy="500" r="400" stroke="#F97316" strokeWidth="2.5" strokeDasharray="10 30" animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
                <motion.circle cx="500" cy="500" r="450" stroke="#F97316" strokeWidth="2" strokeDasharray="5 50" animate={{ rotate: -360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
                <motion.circle cx="500" cy="500" r="350" stroke="#F97316" strokeWidth="1" strokeDasharray="20 40" animate={{ rotate: 360 }} transition={{ duration: 180, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
                
                {/* Circuit Board Style Lines */}
                <g className="f-parallax" data-speed="0.5">
                    <path d="M 100 800 L 250 800 L 300 750 L 450 750" stroke="#F97316" strokeWidth="2.5" strokeDasharray="4 4" />
                    <circle cx="100" cy="800" r="5" fill="#F97316" />
                    <circle cx="250" cy="800" r="3.5" fill="#F97316" />
                    <circle cx="300" cy="750" r="3.5" fill="#F97316" />
                    <circle cx="450" cy="750" r="6" fill="none" stroke="#F97316" strokeWidth="3" />
                    <circle cx="450" cy="750" r="3" fill="#F97316" />
                </g>
                <g className="f-parallax" data-speed="-0.3">
                    <path d="M 900 200 L 750 200 L 700 250 L 550 250" stroke="#F97316" strokeWidth="2.5" strokeDasharray="4 4" />
                    <circle cx="900" cy="200" r="5" fill="#F97316" />
                    <circle cx="750" cy="200" r="3.5" fill="#F97316" />
                    <circle cx="700" cy="250" r="3.5" fill="#F97316" />
                    <circle cx="550" cy="250" r="6" fill="none" stroke="#F97316" strokeWidth="3" />
                    <circle cx="550" cy="250" r="3" fill="#F97316" />
                </g>
            </svg>

            {/* Glowing Floating Particles */}
            <div className="absolute inset-0 z-0 opacity-80">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="f-parallax absolute rounded-full bg-orange-500"
                        data-speed={((i % 5) - 2) * 0.08}
                        style={{
                            width: ((i * 3) % 5) + 4 + "px",
                            height: ((i * 3) % 5) + 4 + "px",
                            left: ((i * 17) % 100) + "%",
                            top: ((i * 23) % 100) + "%",
                            opacity: (((i * 11) % 40) / 100) + 0.4,
                            boxShadow: '0 0 12px 3px rgba(249,115,22,0.7)'
                        }}
                        animate={{
                            y: [0, (i % 2 === 0 ? -40 : 40), 0],
                            x: [0, (i % 3 === 0 ? -30 : 30), 0]
                        }}
                        transition={{
                            duration: (i % 10) + 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: (i % 5)
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Left Graphic Component ---
const FAQGraphic = () => {
    return (
        <div className="relative w-full aspect-square max-w-[280px] lg:max-w-[380px] mx-auto lg:mx-0 mt-12 flex items-center justify-center pointer-events-none">
            {/* Concentric Rings */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                <motion.circle cx="100" cy="100" r="50" fill="none" stroke="#F97316" strokeWidth="0.75" strokeDasharray="2 4" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
                <motion.circle cx="100" cy="100" r="70" fill="none" stroke="#F97316" strokeWidth="0.5" animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
                <motion.circle cx="100" cy="100" r="90" fill="none" stroke="#F97316" strokeWidth="0.25" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
            </svg>

            {/* Floating Speech Bubbles / Question Mark */}
            <motion.div 
                className="relative z-10 w-40 h-40 lg:w-48 lg:h-48 bg-white rounded-full shadow-[0_20px_40px_rgba(249,115,22,0.1)] border border-orange-100 flex items-center justify-center"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Main bubble tail */}
                <div className="absolute -bottom-3 -left-1 w-10 h-10 lg:w-12 lg:h-12 bg-white transform rotate-45 border-b border-l border-orange-100 rounded-bl-lg" />
                
                {/* Large Question Mark */}
                <span className="text-7xl lg:text-8xl font-serif font-bold text-orange-400 bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-orange-600">
                    ?
                </span>

                {/* Secondary smaller bubble */}
                <motion.div 
                    className="absolute -right-6 -bottom-6 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center"
                    animate={{ y: [4, -4, 4], x: [0, 4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 transform rotate-45 rounded-sm" />
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                        <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                        <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// --- Timeline FAQ Card Component ---
const FAQCard = ({ questionStr, answer, isOpen, onClick, index }) => {
    // Parse existing data ("1. Question..." -> num: "01", text: "Question...")
    const match = questionStr.match(/^(\d+)\.\s*(.*)/);
    const num = match ? match[1].padStart(2, '0') : String(index + 1).padStart(2, '0');
    const text = match ? match[2] : questionStr;

    return (
        <div className="relative flex w-full group faq-card-wrapper mb-4 lg:mb-5 z-10">
            {/* Timeline Connection (Visible on sm+) */}
            <div className="absolute left-[-2rem] md:left-[-3rem] top-7 hidden sm:flex items-center z-10">
                {/* Node */}
                <div className={`relative w-3.5 h-3.5 rounded-full border-[2.5px] transition-all duration-300 z-10 ${isOpen ? 'bg-white border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] scale-110' : 'bg-white border-orange-200 group-hover:border-orange-400 group-hover:shadow-[0_0_8px_rgba(249,115,22,0.3)]'}`} />
                {/* Connecting Line */}
                <div className={`h-[1px] transition-all duration-300 ${isOpen ? 'bg-orange-500 w-[1.5rem] md:w-[2.5rem]' : 'bg-orange-200 group-hover:bg-orange-300 w-[1.5rem] md:w-[2.5rem]'}`} />
            </div>

            {/* Mobile Node (Stacked) */}
            <div className="absolute -left-[1.05rem] top-7 flex sm:hidden items-center z-10">
                <div className={`relative w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 z-10 ${isOpen ? 'bg-white border-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-white border-orange-200'}`} />
            </div>

            <motion.div
                whileHover={{ x: typeof window !== 'undefined' && window.innerWidth > 768 ? 4 : 0 }}
                className={`w-full overflow-hidden rounded-[14px] border transition-all duration-300 bg-white shadow-sm relative z-20 ${isOpen ? 'border-orange-400 shadow-md ring-1 ring-orange-500/10' : 'border-gray-200 hover:border-orange-300 hover:shadow-md'}`}
            >
                <button
                    className="flex w-full items-center justify-between p-4 md:p-5 lg:p-6 text-left focus:outline-none"
                    onClick={onClick}
                    aria-expanded={isOpen}
                >
                    <div className="flex items-center gap-3 md:gap-5">
                        {/* Subtle Number */}
                        <span className={`text-xl md:text-2xl font-black transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-slate-200 group-hover:text-orange-400'}`}>
                            {num}
                        </span>
                        <h3 className={`text-[15px] md:text-base lg:text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                            {text}
                        </h3>
                    </div>

                    {/* Circular Arrow Button */}
                    <div className={`shrink-0 ml-3 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-orange-50 border-orange-200 text-orange-500 rotate-180" : "bg-white border-gray-200 text-gray-400 group-hover:border-orange-200 group-hover:text-orange-500 rotate-0"}`}>
                        <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div className="px-4 md:px-5 lg:px-6 pb-5 md:pb-6 pt-1 text-sm md:text-[15px] leading-relaxed text-slate-500 border-t border-gray-100 ml-[2.5rem] md:ml-[3.5rem]">
                                {answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

// --- Main FAQ Section ---
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);

    // Scroll Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                }
            });

            // Left side entrance
            tl.fromTo('.fq-eyebrow', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
                .fromTo('.fq-heading', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
                .fromTo('.fq-underline', { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power3.inOut" }, "-=0.4")
                .fromTo('.fq-graphic', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

            // Timeline line draw
            tl.fromTo('.fq-timeline-line', { scaleY: 0 }, { scaleY: 1, duration: 1, ease: "power3.inOut" }, "-=0.6");

            // Cards stagger
            tl.fromTo('.faq-card-wrapper',
                { opacity: 0, x: 15 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
                "-=0.5"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="faq-section py-16 lg:py-24 relative overflow-hidden bg-[#FCFCFD]" style={{ isolation: 'isolate' }}>
            {/* BACKGROUND LAYER (Strictly clipped) */}
            <FAQBackground />

            {/* CONTENT LAYER */}
            <div className="faq-content max-w-[85rem] mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                {/* LEFT COLUMN: Visual Intro */}
                <div className="lg:col-span-5 relative z-20">
                    <div className="lg:sticky lg:top-28 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Eyebrow */}
                        <div className="fq-eyebrow mb-6 inline-block py-1.5 px-4 rounded-full bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase shadow-sm border border-orange-200/50">
                            Questions & Answers
                        </div>

                        {/* Heading */}
                        <h2 className="fq-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight relative inline-block mb-4">
                            <span className="relative inline-block z-10">
                                FAQ
                                {/* SVG Underline */}
                                <svg className="fq-underline absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-4 origin-left" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                                    <path d="M2 10C50 4 150 2 198 8" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h2>

                        <p className="fq-heading text-slate-500 mt-6 max-w-md text-base lg:text-lg relative z-20">
                            Find answers to common questions about our services, process, and how we can help your business grow.
                        </p>

                        {/* Abstract Graphic */}
                        <div className="fq-graphic w-full relative z-20">
                            <FAQGraphic />
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Timeline & Accordions */}
                <div className="lg:col-span-7 relative z-20 pt-10 lg:pt-0">

                    {/* The Vertical Timeline Track */}
                    <div className="fq-timeline-line absolute left-0 sm:left-4 lg:left-0 top-7 bottom-7 w-[1px] bg-gradient-to-b from-orange-300 via-orange-200 to-transparent origin-top hidden sm:block z-0" />

                    {/* Mobile Timeline Track */}
                    <div className="fq-timeline-line absolute left-[0.25rem] top-7 bottom-7 w-[1px] bg-gradient-to-b from-orange-300 via-orange-200 to-transparent origin-top sm:hidden z-0" />

                    {/* FAQ Items */}
                    <div className="pl-5 sm:pl-12 lg:pl-10 relative z-20">
                        {faqData.map((faq, index) => (
                            <FAQCard
                                key={index}
                                index={index}
                                questionStr={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
