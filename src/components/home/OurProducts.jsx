"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
    ArrowRight, Bot, MessageSquare, Blocks, Activity, 
    CalendarDays, BarChart3, HeartHandshake, Users,
    Camera, Code, LayoutGrid, CheckSquare, MessageCircle, UserCircle
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ---------------------------------------------
// Interactive Text Component
// ---------------------------------------------

const InteractiveWord = ({ children }) => {
    return (
        <motion.span
            className="relative inline-block cursor-pointer font-medium text-neutral-200"
            whileHover="hover"
            initial="initial"
        >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-orange-400">{children}</span>
            <motion.span
                variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-orange-500 origin-left z-0"
            />
            <motion.span
                variants={{
                    initial: { opacity: 0, y: 5 },
                    hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-orange-500/20 rounded-sm -z-10"
            />
        </motion.span>
    );
};

// ---------------------------------------------
// Animated Mockups matching the screenshot exactly
// ---------------------------------------------

const AgenticAIMockup = () => (
  <div className="w-full h-full min-h-[300px] bg-[#0c0c0e] rounded-xl border border-neutral-800/80 shadow-2xl flex flex-col overflow-hidden relative z-10 group/mockup">
    {/* Window Header */}
    <div className="h-7 bg-[#18181b] flex items-center px-3 gap-2 shrink-0 border-b border-neutral-800">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
      </div>
      <div className="ml-2 text-[10px] text-neutral-400 font-mono tracking-wide">workflow_builder.ai</div>
    </div>
    
    {/* Body */}
    <div className="flex-1 flex overflow-hidden relative">
      {/* Sidebar */}
      <div className="w-12 border-r border-neutral-800/50 bg-[#121214] flex flex-col items-center py-3 gap-3 shrink-0 z-20">
        <div className="w-7 h-7 rounded bg-orange-500/20 text-orange-500 flex items-center justify-center border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]"><Camera size={14} /></div>
        <div className="w-7 h-7 rounded text-neutral-500 flex items-center justify-center"><Code size={14} /></div>
        <div className="w-7 h-7 rounded bg-neutral-800/50 text-neutral-400 flex items-center justify-center"><Code size={14} /></div>
        <div className="w-7 h-7 rounded text-neutral-500 flex items-center justify-center"><Activity size={14} /></div>
      </div>
      
      {/* Canvas */}
      <div className="flex-1 bg-[#09090b] relative overflow-hidden">
        {/* Subtle Dots Background */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#52525b 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

        {/* Animated Curved SVG Lines (Workflow connections) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <motion.path 
            d="M 120 60 C 180 60, 200 120, 260 120 C 320 120, 320 180, 360 180" 
            fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" 
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 260 120 C 300 120, 300 100, 340 100" 
            fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" 
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 260 120 C 220 120, 220 220, 280 220" 
            fill="none" stroke="#52525b" strokeWidth="1.5" strokeDasharray="4 4"
          />
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0 z-10 p-6">
            
            <motion.div 
                animate={{ y: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-8 w-40 bg-[#121214] border border-neutral-700/80 rounded-lg p-3 flex items-center gap-3 shadow-lg cursor-pointer"
            >
                <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0"><LayoutGrid size={12} /></div>
                <div>
                    <div className="text-[10px] font-bold text-neutral-200">Data Trigger</div>
                    <div className="text-[8px] text-neutral-500">New data received</div>
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [-3, 3, -3], boxShadow: ["0 0 10px rgba(249,115,22,0.1)", "0 0 20px rgba(249,115,22,0.3)", "0 0 10px rgba(249,115,22,0.1)"] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[100px] left-44 w-44 bg-orange-500/10 border border-orange-500/40 rounded-lg p-3 flex items-center gap-3 shadow-[0_0_15px_rgba(249,115,22,0.2)] cursor-pointer"
            >
                <div className="w-6 h-6 rounded bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]"><Bot size={12} /></div>
                <div>
                    <div className="text-[10px] font-bold text-white">AI Processing</div>
                    <div className="text-[8px] text-orange-200/60">Analyzing data...</div>
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [-1, 1, -1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[80px] left-[320px] w-36 bg-[#121214] border border-neutral-700/80 rounded-lg p-3 flex items-center gap-3 shadow-lg cursor-pointer opacity-80"
            >
                <div className="w-5 h-5 rounded border border-neutral-600 text-neutral-400 flex items-center justify-center shrink-0"><CheckSquare size={10} /></div>
                <div>
                    <div className="text-[9px] font-bold text-neutral-300">Condition Check</div>
                    <div className="text-[7px] text-neutral-500">Evaluating condition</div>
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-[200px] left-[260px] w-40 bg-[#121214] border border-green-500/30 rounded-lg p-3 flex items-center gap-3 shadow-[0_0_15px_rgba(34,197,94,0.1)] cursor-pointer"
            >
                <div className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center shrink-0"><Activity size={12} /></div>
                <div>
                    <div className="text-[10px] font-bold text-green-50">Action Output</div>
                    <div className="text-[8px] text-green-400/60">Action completed</div>
                </div>
            </motion.div>
        </div>

        {/* Faint Floating Glowing Orbs exactly like image */}
        <div className="absolute top-[180px] left-[150px] w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
        <div className="absolute top-[140px] right-[60px] w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
        <div className="absolute top-[40px] right-[100px] w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.5)]" />
      </div>
    </div>
  </div>
);

const SMMMockup = () => (
  <div className="w-full h-full min-h-[300px] bg-[#0c0c0e] rounded-xl border border-neutral-800/80 shadow-2xl flex relative overflow-hidden z-10 group/mockup">
    {/* Left Sidebar */}
    <div className="w-12 bg-[#121214] border-r border-neutral-800/50 flex flex-col items-center py-4 gap-4 shrink-0 z-20">
      <div className="w-7 h-7 rounded text-neutral-500 flex items-center justify-center border border-neutral-700 border-dashed"><LayoutGrid size={14} /></div>
      <div className="w-7 h-7 rounded text-neutral-500 flex items-center justify-center"><CalendarDays size={14} /></div>
      <div className="w-7 h-7 rounded bg-orange-500/20 text-orange-500 flex items-center justify-center border border-orange-500/30"><BarChart3 size={14} /></div>
      <div className="w-7 h-7 rounded text-neutral-500 flex items-center justify-center"><MessageCircle size={14} /></div>
      <div className="w-7 h-7 rounded text-neutral-500 flex items-center justify-center mt-auto mb-2"><UserCircle size={14} /></div>
    </div>

    {/* Main Content Area */}
    <div className="flex-1 p-4 flex flex-col gap-4">
      {/* Top Stats */}
      <div className="flex gap-3">
        <div className="flex-1 bg-[#151518] border border-neutral-800/80 rounded-xl p-3 shadow-sm flex flex-col gap-1">
          <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Total Reach</div>
          <div className="text-xl font-extrabold text-white">2.4M</div>
          <div className="text-[9px] font-bold text-green-500 flex items-center gap-1">+145.2% &uarr;</div>
        </div>
        <div className="flex-1 bg-[#151518] border border-neutral-800/80 rounded-xl p-3 shadow-sm flex flex-col gap-1">
          <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Engagement</div>
          <div className="text-xl font-extrabold text-white">128K</div>
          <div className="text-[9px] font-bold text-orange-500 flex items-center gap-1">-5.2% &darr;</div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex-1 bg-[#151518] border border-neutral-800/80 rounded-xl p-5 flex flex-col relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 relative z-20">
          <div className="text-[13px] font-bold text-neutral-200">Audience Growth</div>
          <div className="text-[10px] text-neutral-500 bg-[#1a1a1d] border border-neutral-700 px-2.5 py-1 rounded">Last 7 Days &darr;</div>
        </div>
        
        {/* Bars */}
        <div className="flex-1 flex items-end justify-between gap-2 z-10 relative">
          {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
            <motion.div 
                key={i} 
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                className="w-full bg-neutral-800 rounded-t-sm relative flex flex-col justify-end" 
            >
              <div className="w-full bg-orange-500 rounded-t-sm" style={{ height: `${height * 0.7}%` }} />
            </motion.div>
          ))}
        </div>

        {/* Animated Line Graph Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.path 
                d="M 5,80 Q 15,65 20,70 T 35,60 T 50,40 T 65,80 T 80,30 T 95,20" 
                fill="none" stroke="#f97316" strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
        </svg>

        {/* Floating Tooltip matching image */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.5 }}
            className="absolute top-[35%] right-[25%] bg-[#121214] border border-neutral-700 rounded p-1.5 shadow-lg z-30"
        >
            <div className="text-[7px] text-neutral-400">Engagement</div>
            <div className="text-[10px] font-bold text-white flex items-center gap-1">24.5K <span className="text-green-500 text-[6px]">+5.4%</span></div>
        </motion.div>
        
        {/* Glowing Dots on Graph */}
        <div className="absolute bottom-[20%] left-[5%] w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,1)] z-20" />
        <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,1)] z-20" />
        <div className="absolute top-[40%] left-[50%] w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,1)] z-20" />
        <div className="absolute top-[20%] right-[5%] w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,1)] z-20" />
      </div>
    </div>
  </div>
);

// ---------------------------------------------
// Data
// ---------------------------------------------

const productsData = [
  {
    badge: "AI Automation",
    title: "Agentic AI",
    description: "Intelligent AI-powered automation that learns and adapts to your business processes. Automate complex workflows with autonomous agents.",
    features: [
      { icon: Bot, title: "Autonomous Task Execution", desc: "Automate complex workflows with intelligent agents that learn.", active: false },
      { icon: MessageSquare, title: "Natural Language Processing", desc: "Interact with and build workflows using conversational commands.", active: true },
      { icon: Blocks, title: "Seamless Integrations", desc: "Connect effortlessly with your existing business tools.", active: false },
      { icon: Activity, title: "Real-time Adaptation", desc: "AI that continuously learns and optimizes your processes on the fly.", active: false }
    ],
    link: "/ai-solutions",
    visual: <AgenticAIMockup />
  },
  {
    badge: "Digital Growth",
    title: "Social Media Management",
    description: "Complete social media management platform for scheduling, analytics, and engagement. Manage all your social channels from one dashboard.",
    features: [
      { icon: CalendarDays, title: "Multi-Channel Scheduling", desc: "Plan and publish content across all your platforms from one dashboard.", active: false },
      { icon: BarChart3, title: "Advanced Analytics", desc: "Gain deep insights into engagement, reach, and audience growth.", active: false },
      { icon: HeartHandshake, title: "Engagement Automation", desc: "Monitor interactions and automate responses to build your community.", active: false },
      { icon: Users, title: "Team Collaboration", desc: "Streamline approvals and work seamlessly on content planning.", active: false }
    ],
    link: "/products/smm",
    visual: <SMMMockup />
  }
];

// ---------------------------------------------
// Interactive Product Card Component
// ---------------------------------------------

const ProductCard = ({ product }) => {
    const cardRef = useRef(null);
    const reducedMotion = useReducedMotion();
    
    // 3D Magnetic Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
    
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
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="product-card perspective-[1500px] w-full"
        >
            <motion.div
                className="w-full rounded-[1.5rem] overflow-hidden flex flex-col lg:flex-row bg-white relative group"
                style={reducedMotion ? { boxShadow: "0 0 40px rgba(249,115,22,0.05), inset 0 0 0 1px rgba(255,255,255,1)" } : { 
                    rotateX, rotateY, transformStyle: "preserve-3d",
                    boxShadow: "0 0 40px rgba(249,115,22,0.05), inset 0 0 0 1px rgba(255,255,255,1)"
                }}
                whileHover={reducedMotion ? {} : { y: -10, scale: 1.02, boxShadow: "0 25px 60px rgba(249,115,22,0.2), inset 0 0 0 1px rgba(249,115,22,0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Left Column (White bg) */}
                <div className="w-full lg:w-[50%] bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-10">
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="text-orange-500">
                            {product.title === "Agentic AI" ? <Bot size={16} /> : <BarChart3 size={16} />}
                        </div>
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-[10px]">
                            {product.badge}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-neutral-900 tracking-tight">
                        {product.title}
                    </h3>

                    <p className="text-[13px] md:text-[14px] text-neutral-600 leading-relaxed mb-6 max-w-lg">
                        {product.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-8">
                        {product.features.map((feat, i) => (
                            <div key={i} className={`flex flex-col gap-1.5 p-2 -ml-2 rounded-xl transition-colors ${feat.active ? 'bg-orange-50/50' : 'hover:bg-neutral-50'}`}>
                                <div className="flex items-center gap-2 text-neutral-900 font-bold">
                                    <feat.icon size={16} className="text-orange-500 shrink-0" strokeWidth={2} />
                                    <h4 className={`text-[12px] md:text-[13px] ${feat.active ? 'text-orange-600' : ''}`}>{feat.title}</h4>
                                </div>
                                <p className="text-[11px] text-neutral-500 leading-relaxed pl-6">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link href={product.link} className="inline-block mt-auto w-fit">
                        <button className="flex items-center gap-2 font-bold text-[13px] text-white bg-orange-500 px-6 py-2 rounded-full transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-[0_8px_20px_rgba(249,115,22,0.4)] hover:gap-3 group/btn">
                            Explore <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </Link>
                </div>

                {/* Right Column (Dark bg) */}
                <div className="w-full lg:w-[50%] bg-[#0a0a0a] p-6 md:p-8 lg:p-10 flex items-center justify-center relative z-10 border-l border-neutral-900 overflow-hidden">
                    {/* Radial subtle glow behind mockup */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_70%)] pointer-events-none" />
                    
                    {/* Mockup wrapper with parallax */}
                    <motion.div 
                        className="w-full relative z-10"
                        whileHover={reducedMotion ? {} : { scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        style={reducedMotion ? {} : { transform: "translateZ(60px)" }}
                    >
                        {product.visual}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ---------------------------------------------
// Main Section Component
// ---------------------------------------------

const OurProducts = () => {
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

            tl.fromTo(".prod-heading",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );

            tl.fromTo(".prod-underline",
                { scaleX: 0 },
                { scaleX: 1, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            );

            tl.fromTo(".prod-subtitle",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );

            tl.fromTo(".product-card",
                { opacity: 0, y: 100, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: "back.out(1.5)" },
                "-=0.4"
            );
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#050505] relative overflow-hidden font-sans">
            
            {/* Animated Space/Constellation floating OVER the cards */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                {/* Wide Curved SVG sweeping across the top */}
                <svg className="absolute top-0 left-0 w-full h-[500px] opacity-[0.2]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M -10,30 Q 30,10 50,40 T 110,10" fill="none" stroke="#f97316" strokeWidth="0.1" />
                </svg>
                <svg className="absolute bottom-0 left-0 w-full h-[500px] opacity-[0.1]" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M -10,80 Q 50,100 110,70" fill="none" stroke="#f97316" strokeWidth="0.2" />
                </svg>

                {/* Animated Glowing Orbs exactly matching the mockup background */}
                <motion.div 
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[2%] w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]" 
                />
                <motion.div 
                    animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[15%] right-[2%] w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_25px_rgba(249,115,22,1)]" 
                />
                <motion.div 
                    animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[35%] left-[3%] w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" 
                />
                <motion.div 
                    animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[25%] right-[3%] w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]" 
                />

                {/* Tiny Orange Sparks */}
                <motion.div 
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "circInOut", delay: 0.2 }}
                    className="absolute top-[30%] left-[10%] w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]" 
                />
                <motion.div 
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut", delay: 1.1 }}
                    className="absolute top-[50%] right-[12%] w-4 h-4 bg-orange-300 rounded-full shadow-[0_0_25px_rgba(253,186,116,1)]" 
                />
                <motion.div 
                    animate={{ opacity: [0, 0.8, 0], scale: [0, 1.3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "circInOut", delay: 0.7 }}
                    className="absolute bottom-[40%] left-[8%] w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_25px_rgba(249,115,22,1)]" 
                />
                <motion.div 
                    animate={{ opacity: [0, 0.9, 0], scale: [0, 1.1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "circInOut", delay: 1.5 }}
                    className="absolute bottom-[10%] right-[15%] w-3 h-3 bg-orange-400 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)]" 
                />
            </div>

            <div className="max-w-[1300px] mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="prod-heading text-[40px] md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white tracking-tight inline-block relative">
                        Our <span className="text-orange-500 relative inline-block mt-1">
                            Products
                            <div className="prod-underline absolute -bottom-2 left-0 w-full h-[4px] bg-orange-500 origin-left rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                        </span>
                    </h2>
                    
                    <p className="prod-subtitle text-[15px] md:text-[16px] max-w-2xl mx-auto text-neutral-400 font-medium leading-relaxed">
                        Discover our flagship solutions designed to scale your business, <InteractiveWord>automate your workflows</InteractiveWord>, and drive <InteractiveWord>unparalleled growth</InteractiveWord>.
                    </p>
                </div>

                {/* Products Stack */}
                <div className="flex flex-col gap-10 lg:gap-16">
                    {productsData.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProducts;
