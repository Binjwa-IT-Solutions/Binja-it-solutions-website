"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, MessageCircle, Settings, Users, Mic, FileText, ThumbsUp, LineChart, Brain, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Chatbots & Virtual Assistants",
    icon: MessageCircle,
    color: "text-orange-500",
    desc: "Customers don't wait for business hours to ask questions. Our AI chatbots and virtual assistants will answer queries, qualify leads, and book appointments, ensuring seamless communication.",
    cta: "Explore AI Chatbots & Virtual Assistants →"
  },
  {
    title: "Custom AI Agents / Task Automation",
    icon: Bot,
    color: "text-orange-500",
    desc: "There's no reason why your business should still do routine tasks manually. With our customized AI agents, we'll automate your routine tasks as well as complex business processes.",
    cta: "Explore Custom AI Agents / Task Automation →"
  },
  {
    title: "Workflow Automation (RPA)",
    icon: Settings,
    color: "text-orange-500",
    desc: "Most companies have processes that can operate independently. Let us automate the routine parts of your business workflow including data entry, approval, reporting, and others.",
    cta: "Explore Workflow Automation (RPA) →"
  },
  {
    title: "AI-Powered CRM Integration",
    icon: Users,
    color: "text-orange-500",
    desc: "A well-working CRM depends on its utilization by your company, and often employees just don't have time for it. Integrating our AI directly into your CRM will take care of lead capturing, scoring, and follow-up automatically.",
    cta: "Explore AI-Powered CRM Integration →"
  },
  {
    title: "Voice AI / Voice Bots",
    icon: Mic,
    color: "text-orange-500",
    desc: "Customers sometimes simply want to have a call rather than an online discussion. Our voice AI bots handle calls, answer questions and book appointments using human-like voice 24/7.",
    cta: "Explore Voice AI / Voice Bots →"
  },
  {
    title: "Document Processing & Data Extraction",
    icon: FileText,
    color: "text-orange-500",
    desc: "Nobody enjoys processing contracts, invoices, or other documents manually. Our AI technology will read and extract needed data from your documents in minutes accurately and with minimum effort.",
    cta: "Explore Document Processing & Data Extraction →"
  },
  {
    title: "AI Recommendation Systems",
    icon: ThumbsUp,
    color: "text-orange-500",
    desc: "Suggesting the right thing at the right moment makes all the difference. Using our AI technology, we create recommendation engines which will guide customers toward the right purchase.",
    cta: "Explore AI Recommendation Systems →"
  },
  {
    title: "Predictive Analytics",
    icon: LineChart,
    color: "text-orange-500",
    desc: "Trying to guess what's going to happen next can cost your business dearly. Our advanced predictive analytics system can help to detect trends and patterns and base your decisions on actual future possibilities.",
    cta: "Explore Predictive Analytics →"
  },
  {
    title: "Custom LLM Integration",
    icon: Brain,
    color: "text-orange-500",
    desc: "AI applications out-of-the-box are not enough. Integrate large language models into your business processes, training them specifically for your company so that the AI understands your business, not just information in general.",
    cta: "Explore Custom LLM Integration →"
  },
  {
    title: "AI Customer Support Automation",
    icon: Headphones,
    color: "text-orange-500",
    desc: "Don’t let support tickets wait in a queue for hours. Your AI system will answer customers’ typical questions right away and pass complicated cases to your team.",
    cta: "Explore AI Customer Support Automation →"
  }
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[460px] md:h-[480px] rounded-[32px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* Outer shadow/hover wrapper. Does not rotate, but translates Y. 
          transformStyle: preserve-3d ensures the perspective applies to the inner rotating card. */}
      <motion.div
        className="w-full h-full rounded-[32px] bg-transparent"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          y: isHovered ? -8 : 0,
          boxShadow: isHovered
            ? [
              "0 10px 20px -5px rgba(0,0,0,0.05)",
              "none",
              "0 25px 40px -10px rgba(249,115,22,0.15)"
            ]
            : [
              "0 25px 40px -10px rgba(249,115,22,0.15)",
              "none",
              "0 10px 20px -5px rgba(0,0,0,0.05)"
            ]
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* 3D Rotating Container */}
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
          animate={{ rotateY: isHovered ? 180 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* ================= FRONT FACE ================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-[32px] border-[1.5px] p-7 sm:p-8 flex flex-col"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--accent)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)"
            }}
          >
            {/* Absolute glow without filter or overflow-hidden */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,rgba(249,115,22,0)_70%)] pointer-events-none rounded-full" />

            <div className="flex items-center gap-5 mb-2 mt-2">
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-[14px] flex items-center justify-center border shadow-sm"
                style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
              >
                <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                {service.title}
              </h3>
            </div>

            <div className="space-y-3.5 mb-5 h-full">
              <p className="font-medium text-[15px] sm:text-[16px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {service.desc}
              </p>
            </div>

            <div className="mt-auto pt-4 border-t flex items-center gap-2" style={{ borderColor: "var(--border)" }}>
              <span className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wide">
                Hover to Explore
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-500" />
            </div>
          </div>

          {/* ================= BACK FACE ================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-[32px] bg-gradient-to-br from-orange-500/10 to-transparent border-[1.5px] p-7 sm:p-8 flex flex-col"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--accent)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="flex items-center gap-5 mb-6">
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-[14px] shadow-sm flex items-center justify-center border"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                {service.title}
              </h3>
            </div>

            <div className="flex-1 flex items-center">
              <p className="text-[15px] sm:text-base leading-relaxed font-medium" style={{ color: "var(--text-primary)" }}>
                {service.desc}
              </p>
            </div>

            <div 
              className="mt-auto w-full py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors shadow-lg active:scale-95 flex items-center justify-center"
              style={{ backgroundColor: "var(--accent)", color: "white" }}
            >
              {service.cta || "Learn More"}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function OurServicesSection() {
  return (
    <section className="py-24 px-8 lg:px-16 relative" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            Our Agentic AI Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Every automation tool your business requires — beautifully designed and engineered under one roof.
          </p>
        </div>

        <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
