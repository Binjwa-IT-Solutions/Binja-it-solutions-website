"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Layout,
  Code2,
  Rocket,
  CheckCircle2
} from "lucide-react";

export default function CustomSoftwareLifecycle() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Discovery & Architecture",
      subtitle: "System Modeling & Specs",
      icon: Compass,
      color: "text-orange-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-200",
      description:
        "Understanding your business logic, defining technical specifications, and mapping out scalable system architecture.",
      deliverables: [
        "Business requirements & user personas",
        "Microservices & database schema design",
        "API specification & contracts (OpenAPI)",
        "Security, auth & cloud infrastructure roadmap"
      ],
      timeframe: "Week 1 - 2"
    },
    {
      step: "02",
      title: "UI/UX & Prototyping",
      subtitle: "Flat UI & User Journeys",
      icon: Layout,
      color: "text-amber-600",
      accentBg: "bg-amber-50",
      accentBorder: "border-amber-200",
      description:
        "Designing clean, user-centric interfaces rooted in Flat UI principles, structured whitespace, and intuitive navigation.",
      deliverables: [
        "Interactive high-fidelity Figma prototypes",
        "Custom design system & reusable tokens",
        "Responsive desktop, tablet & mobile layouts",
        "Usability validation & stakeholder sign-off"
      ],
      timeframe: "Week 2 - 3"
    },
    {
      step: "03",
      title: "Agile Development & Testing",
      subtitle: "Rapid Sprints & Strict QA",
      icon: Code2,
      color: "text-orange-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-200",
      description:
        "Rapid sprint-based coding coupled with rigorous quality checks, performance optimizations, and secure code reviews.",
      deliverables: [
        "2-week agile sprints with working demos",
        "MERN / Next.js clean modular codebases",
        "Unit, integration, and load testing coverage",
        "Static code analysis & security audits (OWASP)"
      ],
      timeframe: "Week 3 - 8"
    },
    {
      step: "04",
      title: "Deployment & Scaling",
      subtitle: "Cloud Rollout & 24/7 Monitoring",
      icon: Rocket,
      color: "text-blue-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-200",
      description:
        "Seamless production rollout on cloud infrastructure with ongoing maintenance, monitoring, and uptime support.",
      deliverables: [
        "Automated CI/CD via GitHub Actions & Docker",
        "AWS production cluster with SSL & CloudFront CDN",
        "Real-time monitoring, error alerting & log aggregators",
        "Post-launch SLA support, maintenance & scaling"
      ],
      timeframe: "Launch & Beyond"
    }
  ];

  return (
    <section id="lifecycle" className="relative bg-white text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-orange-400/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>How We Build</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5 text-neutral-900">
            Our Development Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            A battle-tested engineering methodology designed to minimize turnaround risk and deliver production-grade software on schedule.
          </p>
        </div>

        {/* 4-Step Connected Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeStep === idx;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-7 bg-white border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                  isHovered
                    ? "border-orange-500 shadow-[0_20px_45px_rgba(249,115,22,0.12)] -translate-y-1"
                    : "border-neutral-200 hover:border-orange-300 shadow-sm"
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl ${item.accentBg} border ${item.accentBorder} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200 text-orange-700">
                        {item.timeframe}
                      </span>
                      <span className="text-2xl font-mono font-bold text-orange-500">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-orange-600 mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-neutral-100 space-y-2">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Key Deliverables
                  </div>
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-neutral-700">
                      <CheckCircle2 size={14} className="text-orange-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
