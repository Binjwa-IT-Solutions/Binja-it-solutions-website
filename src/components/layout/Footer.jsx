"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Mail, MapPin, Phone, ChevronRight, 
    Code, Smartphone, BrainCircuit, Users, 
    Database, Megaphone, Search, Cloud, PenTool
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube
} from "react-icons/fa6";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Custom Service Icon Map
const serviceIcons = {
    "Web Development": Code,
    "Mobile App Development": Smartphone,
    "AI Automation": BrainCircuit,
    "CRM Development": Users,
    "ERP Solutions": Database,
    "Digital Marketing": Megaphone,
    "SEO Services": Search,
    "Cloud Solutions": Cloud,
    "UI/UX Design": PenTool,
};

// --- Left Column Globe Background ---
const GlobeBackground = () => {
    return (
        <div className="absolute top-10 left-10 w-[300px] h-[300px] pointer-events-none opacity-20 -z-10">
            {/* Glowing orb */}
            <motion.div 
                className="absolute inset-0 bg-orange-500/10 rounded-full blur-[60px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Abstract wireframe globe using SVG */}
            <svg className="w-full h-full globe-parallax" data-speed="0.05" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx="100" cy="100" r="80" stroke="#F97316" strokeWidth="0.5" strokeDasharray="2 4" animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
                <motion.ellipse cx="100" cy="100" rx="80" ry="30" stroke="#F97316" strokeWidth="0.5" animate={{ rotate: -10 }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }} style={{ transformOrigin: "center" }} />
                <motion.ellipse cx="100" cy="100" rx="30" ry="80" stroke="#F97316" strokeWidth="0.5" animate={{ rotate: 10 }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }} style={{ transformOrigin: "center" }} />
                
                {/* Connecting nodes */}
                <circle cx="100" cy="20" r="2" fill="#F97316" className="animate-pulse" />
                <circle cx="100" cy="180" r="2" fill="#F97316" className="animate-pulse" />
                <circle cx="20" cy="100" r="2" fill="#F97316" className="animate-pulse" />
                <circle cx="180" cy="100" r="2" fill="#F97316" className="animate-pulse" />
            </svg>
        </div>
    );
};

// Header Component for columns
const ColumnHeader = ({ title }) => (
    <div className="flex items-center justify-between mb-8 border-b border-orange-500/30 pb-2 relative">
        <h4 className="text-white font-semibold text-lg tracking-wide">{title}</h4>

        {/* Orange underline specifically under the text */}
        <div className="absolute -bottom-[1px] left-0 h-[2px] bg-orange-500 w-12" />
    </div>
);

// Tech Background for Footer Container
const TechBackground = ({ isMobile }) => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
            {/* Subtle Dotted Grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            {/* Mouse following glow (CSS handled via style var) */}
            <div className="hidden lg:block absolute inset-0 opacity-40 transition-opacity duration-300" style={{
                background: `radial-gradient(600px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(249,115,22,0.06), transparent 40%)`
            }} />

            {/* Circuit Lines */}
            {!isMobile && (
                <svg className="absolute top-0 left-0 w-full h-full opacity-10 footer-parallax" data-speed="0.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M -100 200 L 150 200 L 200 250 L 500 250" stroke="#F97316" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <circle cx="150" cy="200" r="3" fill="#F97316" className="animate-pulse" />
                    <circle cx="200" cy="250" r="3" fill="#F97316" className="animate-pulse" />
                    
                    <path d="M 800 600 L 700 600 L 650 550 L 400 550" stroke="#F97316" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <circle cx="700" cy="600" r="3" fill="#F97316" className="animate-pulse" />
                    <circle cx="650" cy="550" r="3" fill="#F97316" className="animate-pulse" />
                </svg>
            )}

            {/* Rotating Arcs */}
            <svg className="absolute -right-[20%] -bottom-[40%] w-[800px] h-[800px] opacity-[0.04] footer-parallax" data-speed="-0.05" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx="500" cy="500" r="450" stroke="#F97316" strokeWidth="2" strokeDasharray="10 30" animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
                <motion.circle cx="500" cy="500" r="380" stroke="#F97316" strokeWidth="1" strokeDasharray="4 40" animate={{ rotate: -360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
            </svg>

            {/* Floating Particles */}
            {[...Array(isMobile ? 5 : 12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-orange-500 footer-parallax"
                    data-speed={((i % 5) - 2) * 0.05}
                    style={{
                        width: ((i * 2) % 4) + 2 + "px",
                        height: ((i * 2) % 4) + 2 + "px",
                        left: ((i * 17) % 100) + "%",
                        top: ((i * 23) % 100) + "%",
                        opacity: (((i * 11) % 30) / 100) + 0.1,
                        boxShadow: '0 0 6px 1px rgba(249,115,22,0.5)'
                    }}
                    animate={{
                        y: [0, (i % 2 === 0 ? -40 : 40), 0],
                        x: [0, (i % 3 === 0 ? -20 : 20), 0]
                    }}
                    transition={{
                        duration: (i % 10) + 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i % 5)
                    }}
                />
            ))}
        </div>
    );
};

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const integrations = [
        { name: "Web Development", path: "/web-app-development" },
        { name: "Mobile App Development", path: "/web-app-development" },
        { name: "AI Automation", path: "/ai-automation" },
        { name: "CRM Development", path: "/web-app-development" },
        { name: "ERP Solutions", path: "/web-app-development" },
        { name: "Digital Marketing", path: "/digital-marketing" },
        { name: "SEO Services", path: "/digital-marketing" },
        { name: "Cloud Solutions", path: "/web-app-development" },
        { name: "UI/UX Design", path: "/web-app-development" },
    ];

    const companyLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "Contact Us", path: "/contact" },
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/binjwa-it-solutions-pvt-ltd/posts/?feedView=all" },
        { icon: FaInstagram, href: "https://www.instagram.com/binjwaitsolutions/" },
        { icon: FaXTwitter, href: "https://x.com/BinjwaITSolutio?t=RiZkuNAkfF1y2zY6hdegtQ&s=08" },
        { icon: FaFacebookF, href: "https://www.facebook.com/people/Binjwaitsolutions/61577198437265/" },
        { icon: FaYoutube, href: "https://www.youtube.com/@BinjwaITCompleteSolutions" },
    ];

    const footerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!isMobile && footerRef.current) {
            const rect = footerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            footerRef.current.style.setProperty('--mouse-x', `${x}px`);
            footerRef.current.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    // Main GSAP Animations
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            // Main Stagger Reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                    once: true
                }
            });

            // Logo and desc
            tl.fromTo('.footer-logo', 
                { opacity: 0, y: 40 }, 
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            )
            .fromTo('.footer-desc', 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
                "-=0.4"
            )
            // Columns
            .fromTo('.footer-col-animate', 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" },
                "-=0.4"
            )
            // Social Icons
            .fromTo('.social-icon-animate',
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
                "-=0.3"
            )
            // Bottom Bar Divider
            .fromTo('.bottom-divider',
                { scaleX: 0 },
                { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
                "-=0.5"
            )
            // Copyright Text
            .fromTo('.copyright-text',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.2"
            )
            .fromTo('.tagline-text',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.3"
            );

            // Parallax Elements
            gsap.utils.toArray('.footer-parallax').forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed')) || 0.1;
                gsap.fromTo(layer, 
                    { y: -50 * speed },
                    {
                        y: 50 * speed,
                        ease: "none",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        }
                    }
                );
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer 
            ref={footerRef} 
            onMouseMove={handleMouseMove}
            className="relative bg-[#0B0D11] pt-20 overflow-hidden" 
            style={{ isolation: 'isolate' }}
        >
            <TechBackground isMobile={isMobile} />

            {/* Main Content Area */}
            <div className="max-w-[95rem] mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:divide-x divide-slate-800/60 mb-20">
                    
                    {/* Zone 1: Logo & Company Description (Wider) */}
                    <div className="lg:w-[28%] flex flex-col items-start pr-0 lg:pr-10 relative pb-10 lg:pb-0">
                        <GlobeBackground />
                        
                        <div className="relative group footer-logo">
                            <div className="absolute inset-0 bg-orange-500/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Link href="/" className="mb-6 block relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                                <Image 
                                    src="/logo2.png" 
                                    alt="Binjwa IT Solutions" 
                                    width={200} 
                                    height={80} 
                                    unoptimized={true}
                                    className="h-16 w-auto object-contain" 
                                />
                            </Link>
                        </div>
                        
                        <p className="footer-desc text-slate-300 text-[13px] leading-loose relative z-10 font-light pr-4">
                            Transforming businesses through AI-powered automation, custom software development, web solutions, and digital innovation. We help startups, SMEs, and enterprises streamline operations, improve customer experiences, and accelerate growth.
                        </p>
                        
                        <div className="footer-desc w-12 h-[2px] bg-orange-500 mt-8 relative z-10" />
                    </div>

                    {/* Zone 2: Services */}
                    <div className="footer-col-animate lg:w-[18%] lg:px-8 py-8 lg:py-0 border-t lg:border-t-0 border-slate-800/60">
                        <ColumnHeader title="Services" />
                        <ul className="space-y-4">
                            {integrations.map((link) => {
                                const Icon = serviceIcons[link.name] || ChevronRight;
                                return (
                                    <li key={link.name}>
                                        <Link href={link.path} className="group flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1.5 text-[13px] relative">
                                            <Icon size={14} className="text-orange-500 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                                            <span className="relative z-10">{link.name}</span>
                                            {/* Underline expand */}
                                            <div className="absolute bottom-[-4px] left-0 h-[1px] bg-orange-500/50 w-0 group-hover:w-full transition-all duration-300" />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Zone 3: Quick Links */}
                    <div className="footer-col-animate lg:w-[18%] lg:px-8 py-8 lg:py-0 border-t lg:border-t-0 border-slate-800/60">
                        <ColumnHeader title="Quick Links" />
                        <ul className="space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.path} className="group flex items-center text-slate-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1.5 text-[14px] relative">
                                        <ChevronRight size={14} className="mr-2 text-orange-500 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={3} />
                                        <span className="relative z-10">{link.name}</span>
                                        {/* Underline expand */}
                                        <div className="absolute bottom-[-4px] left-0 h-[1px] bg-orange-500/50 w-0 group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Zone 4: Contact Us */}
                    <div className="footer-col-animate lg:w-[22%] lg:px-8 py-8 lg:py-0 border-t lg:border-t-0 border-slate-800/60">
                        <ColumnHeader title="Contact Us" />
                        <div className="flex flex-col space-y-6">
                            
                            {/* Head Office */}
                            <div className="group flex items-start gap-4 transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-orange-500/50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                    <MapPin size={14} className="text-orange-500 group-hover:text-[#0B0D11] transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span className="text-white font-semibold text-[13px] mb-1">Head Office</span>
                                    <span className="text-slate-400 text-[12px] leading-relaxed">301, Atulya IT Park,<br />Indore, Madhya Pradesh, India</span>
                                </div>
                            </div>

                            {/* Branch Office */}
                            <div className="group flex items-start gap-4 transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-orange-500/50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                    <MapPin size={14} className="text-orange-500 group-hover:text-[#0B0D11] transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span className="text-white font-semibold text-[13px] mb-1">Branch Office</span>
                                    <span className="text-slate-400 text-[12px] leading-relaxed">Block B, TF-14, Signet Plaza,<br />Gotri, Vadodara, Gujarat, India</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group flex items-start gap-4 transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-orange-500/50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                    <Mail size={14} className="text-orange-500 group-hover:text-[#0B0D11] transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span className="text-white font-semibold text-[13px] mb-1">Email</span>
                                    <a href="mailto:binjwaitsolutions@gmail.com" className="text-slate-400 text-[12px] hover:text-orange-400 transition-colors">binjwaitsolutions@gmail.com</a>
                                    <a href="mailto:info@binjwaitsolutions.com" className="text-slate-400 text-[12px] hover:text-orange-400 transition-colors">info@binjwaitsolutions.com</a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group flex items-start gap-4 transition-all duration-300">
                                <div className="w-8 h-8 rounded-full border border-orange-500/50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                                    <Phone size={14} className="text-orange-500 group-hover:text-[#0B0D11] transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span className="text-white font-semibold text-[13px] mb-1">Phone</span>
                                    <a href="tel:+919826656189" className="text-slate-400 text-[12px] hover:text-orange-400 transition-colors">+91 98266 56189</a>
                                    <a href="tel:+918103174722" className="text-slate-400 text-[12px] hover:text-orange-400 transition-colors">+91 81031 74722</a>
                                    <a href="tel:+917974147736" className="text-slate-400 text-[12px] hover:text-orange-400 transition-colors">+91 79741 47736</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zone 5: Find Us (Map & Socials) */}
                    <div className="footer-col-animate lg:w-[22%] lg:pl-8 py-8 lg:py-0 border-t lg:border-t-0 border-slate-800/60">
                        <ColumnHeader title="Find Us" />
                        
                        {/* Google Map */}
                        <div className="w-full h-[180px] rounded-xl overflow-hidden border border-slate-700 shadow-lg relative bg-slate-900 mb-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:border-orange-500/40">
                            <iframe
                                src="https://maps.google.com/maps?q=Binjwa+IT+Solutions,+301,+Atulya+IT+Park,+Indore,+Madhya+Pradesh,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Binjwa IT Solutions Location"
                                className="absolute inset-0 w-full h-full pointer-events-auto"
                            ></iframe>
                        </div>

                        {/* Social Media Row */}
                        <div className="flex flex-wrap gap-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon-animate w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-white bg-[#1A1D24]"
                                    whileHover={{ 
                                        scale: 1.08, 
                                        y: -3,
                                        borderColor: "#F97316",
                                        color: "#F97316",
                                        boxShadow: "0px 5px 15px rgba(249,115,22,0.3)",
                                        backgroundColor: "#0B0D11"
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Specialized Bottom Bar */}
            <div className="relative pt-6 pb-6 mt-16 z-20">
                {/* Divider Line with scaleX animation */}
                <div className="bottom-divider absolute top-0 left-0 w-full h-[1px] bg-slate-800/80" style={{ transformOrigin: 'left' }} />

                {/* Center overlapping logo badge */}
                <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#1A1D24] border border-orange-500/50 flex items-center justify-center z-30 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 cursor-pointer overflow-hidden p-1.5">
                    <Image 
                        src="/logo1.png" 
                        alt="Logo" 
                        width={30} 
                        height={30} 
                        className="w-full h-full object-contain" 
                    />
                </div>

                {/* Circuit lines connecting to center (Decorative) */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                        <path d="M 0,0 L 400,0 L 450,24 L 550,24 L 600,0 L 1000,0" fill="none" stroke="#F97316" strokeWidth="1" strokeDasharray="4 4"/>
                    </svg>
                </div>

                <div className="max-w-[95rem] mx-auto px-6 lg:px-8 relative z-20 flex flex-col items-center justify-center">
                    
                    {/* Copyright Text */}
                    <div className="text-center flex flex-col items-center">
                        <p className="copyright-text text-slate-400 text-sm mb-1">
                            &copy; 2026 Binjwa IT Solutions. All Rights Reserved.
                        </p>
                        <p className="tagline-text text-slate-500 text-[13px]">
                            Empowering Businesses with AI, Automation & Digital Innovation.
                        </p>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;
