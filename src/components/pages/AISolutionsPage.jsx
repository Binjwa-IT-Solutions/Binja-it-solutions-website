"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  MessageSquare,
  Workflow,
  Search,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Building2,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  Truck,
  Layers,
  ChevronDown
} from "lucide-react";

const aiDomains = [
  {
    icon: FileText,
    badge: "Document Intelligence",
    title: "Intelligent Document & Data Extraction (IDP)",
    description:
      "Automate manual document reading and entry. Extract structured data from PDF invoices, bills, KYC documents, receipts, and contracts with high precision.",
    benefits: [
      "Zero manual data entry from standard or scanned PDFs",
      "Automatic field validation and database/ERP sync",
      "Reduces document handling turnaround from hours to seconds"
    ],
    tech: "OCR • Layout Analysis • Structured Data Parsing"
  },
  {
    icon: MessageSquare,
    badge: "Conversational AI",
    title: "Smart Customer Support & WhatsApp AI Bots",
    description:
      "Intelligent conversational assistants available 24/7 across your website, WhatsApp, and internal messaging to resolve queries, qualify leads, and book meetings.",
    benefits: [
      "Resolves 70%+ of standard customer inquiries instantly",
      "Trained exclusively on your company FAQs and catalogs",
      "Seamless warm transfer to human agents for complex cases"
    ],
    tech: "NLP • Multilingual Support • CRM Integration"
  },
  {
    icon: Search,
    badge: "Knowledge Retrieval",
    title: "Enterprise Knowledge Base & RAG Search",
    description:
      "Enable your team or customers to ask questions and get instant, cited answers directly from your company manuals, Notion docs, SOPs, and internal policies.",
    benefits: [
      "Retrieval-Augmented Generation (RAG) with verified sources",
      "Role-based access control ensuring confidential data stays safe",
      "Drastically cuts onboarding and internal search time"
    ],
    tech: "Vector Embeddings • Semantic Search • Private Knowledge Stores"
  },
  {
    icon: Workflow,
    badge: "Process Automation",
    title: "Workflow & Business Process AI Automation",
    description:
      "Connect your disparate tools (CRM, Email, Slack, Google Sheets, ERP) into cohesive automated pipelines that trigger actions based on smart business logic.",
    benefits: [
      "Automate repetitive daily workflows without human intervention",
      "Automated lead enrichment and prioritization",
      "Real-time notifications and exception alerts"
    ],
    tech: "API Connectors • Event-Driven Webhooks • Rule Engines"
  },
  {
    icon: TrendingUp,
    badge: "Predictive Analytics",
    title: "Predictive Analytics & Smart Forecasting",
    description:
      "Turn your historical business data into actionable forward-looking insights. Anticipate customer churn, seasonal demand shifts, and revenue trends.",
    benefits: [
      "Identify churn risk before customers leave",
      "Accurate inventory and resource demand forecasting",
      "Visual executive dashboards for data-backed decisions"
    ],
    tech: "Regression Models • Time-Series Forecasting • Analytics Dashboards"
  },
  {
    icon: Sparkles,
    badge: "Personalization",
    title: "AI-Powered Recommendation Engines",
    description:
      "Deliver tailored product, service, or content suggestions for your web apps and e-commerce platforms to boost user engagement and conversions.",
    benefits: [
      "Increase average order value (AOV) with relevant cross-sells",
      "Dynamic behavioral matching for portal users",
      "Lightweight, fast API endpoints ready for modern frontends"
    ],
    tech: "Collaborative Filtering • Behavior Modeling • Real-time Scoring"
  }
];

const industries = [
  {
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    examples: "Automated catalog tagging, dynamic product recommendations, and WhatsApp order tracking."
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Clinics",
    examples: "Automated appointment booking, patient inquiry triage, and digital intake processing."
  },
  {
    icon: Building2,
    name: "Real Estate & Housing",
    examples: "Instant WhatsApp lead qualification, property matching, and inquiry response automation."
  },
  {
    icon: Briefcase,
    name: "Professional & Legal Services",
    examples: "Contract summary extraction, document search, and client intake form automation."
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    examples: "Automated invoice parsing, vendor status updates, and dispatch workflow coordination."
  },
  {
    icon: Layers,
    name: "SaaS & Tech Startups",
    examples: "In-app AI assistants, automated ticketing classification, and smart knowledge base search."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Feasibility & Workflow Audit",
    desc: "We analyze your existing workflows to identify the highest-ROI opportunities where AI saves real hours and costs. No unnecessary complexity."
  },
  {
    step: "02",
    title: "Custom Prototype & Pipeline Design",
    desc: "We build a working prototype connected to your real data and tools (CRM, databases, messaging APIs) to prove accuracy and value early."
  },
  {
    step: "03",
    title: "Safeguards, Verification & Testing",
    desc: "We implement strict validation layers, hallucination safeguards, and human-in-the-loop review mechanisms so you can trust every output."
  },
  {
    step: "04",
    title: "Deployment & Ongoing Support",
    desc: "Smooth launch into your production stack, complete team training, and continuous monitoring to optimize performance as your business grows."
  }
];

const faqs = [
  {
    q: "How are AI-based solutions different from full Agentic AI?",
    a: "AI-based solutions focus on solving targeted, high-impact business problems (such as automated invoice parsing, customer support bots, internal document search, and predictive analytics) using practical machine learning and LLM integrations. Agentic AI involves autonomous software agents that can reason through open-ended multi-step goals across different software environments."
  },
  {
    q: "Do we need huge datasets or expensive infrastructure to get started?",
    a: "Not at all. Most practical business AI solutions leverage pre-trained foundation models, semantic search, and API integrations that work directly on your existing documents, spreadsheets, and CRM data. You do not need massive datasets or costly GPU clusters."
  },
  {
    q: "Will our proprietary business data be kept private and secure?",
    a: "Yes, 100%. We implement zero-data-retention APIs and private vector stores. Your confidential business information, customer conversations, and internal records are never used to train public AI models."
  },
  {
    q: "How long does a typical AI solution implementation take?",
    a: "Because we focus on pragmatic solutions rather than open-ended research, most initial implementations, chatbots, and automation pipelines are delivered and operational within 2 to 4 weeks."
  },
  {
    q: "Can you integrate AI into our existing software and website?",
    a: "Yes. Whether you are using custom web applications, React, Next.js, WordPress, Shopify, HubSpot, Zoho, WhatsApp Business, or PostgreSQL, we build clean API connectors that integrate seamlessly into your current workflow."
  }
];

export default function AISolutionsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative w-full overflow-hidden bg-white text-neutral-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-16 bg-[#0a0f1c] text-white overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle Technical Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-400 uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-orange-400" />
            <span>Practical AI for Growing Businesses</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 max-w-4xl"
          >
            Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">AI-Based Solutions</span> Tailored to Automate & Scale
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-neutral-300 max-w-3xl mb-10 leading-relaxed font-light"
          >
            We help companies leverage artificial intelligence pragmatically. From smart document extraction and 24/7 customer assistants to internal knowledge search and predictive analytics, we deliver tangible business efficiency without unnecessary hype.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                Discuss Your AI Project
                <ArrowRight size={18} />
              </button>
            </Link>
            <a href="#domains">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold backdrop-blur-md transition-all">
                Explore AI Capabilities
              </button>
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-orange-400" />
              <span>100% Data Confidentiality</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-orange-400" />
              <span>2–4 Week Deployments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-400" />
              <span>Built on Your Existing Stack</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE AI SOLUTION DOMAINS */}
      <section id="domains" className="py-24 md:py-32 px-6 lg:px-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-orange-500 text-xs font-bold tracking-[0.15em] uppercase mb-3 inline-block">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Our Core AI-Based Solutions
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              Targeted, functional capabilities designed to eliminate repetitive labor, uncover hidden trends, and supercharge team productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiDomains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(249,115,22,0.12)] hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full">
                        {domain.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-light">
                      {domain.description}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {domain.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                          <CheckCircle2 size={15} className="text-orange-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-wide">
                      {domain.tech}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE */}
      <section className="py-20 md:py-28 px-6 lg:px-16 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-xs font-bold tracking-[0.15em] uppercase mb-3 inline-block">
              WHERE IT APPLIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Real-World Industry Applications
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              How different sectors utilize our tailored AI capabilities to streamline operations and deliver better customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200/70 hover:border-orange-300 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-neutral-900 text-base">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {ind.examples}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR IMPLEMENTATION PROCESS */}
      <section className="py-24 md:py-32 px-6 lg:px-16 bg-[#0a0f1c] text-white relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-orange-400 text-xs font-bold tracking-[0.15em] uppercase mb-3 inline-block">
              HOW WE DELIVER
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Our 4-Step Implementation Process
            </h2>
            <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
              We take projects from initial evaluation to live production through a transparent, disciplined, milestone-driven framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300"
              >
                <div>
                  <span className="text-3xl font-extrabold text-orange-500/40 mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 md:py-32 px-6 lg:px-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-xs font-bold tracking-[0.15em] uppercase mb-3 inline-block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              Clear answers to common questions about adopting AI solutions in your company.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-neutral-200 rounded-2xl bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-base md:text-lg">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-orange-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed font-light border-t border-neutral-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 md:py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
              Let&apos;s Build Together
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Put Practical AI to Work for Your Business?
            </h2>
            <p className="text-base md:text-lg text-neutral-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a free 30-minute discovery call with our solutions team. We&apos;ll evaluate your current workflows and share clear, practical recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2">
                  Schedule Free Discovery Call
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
