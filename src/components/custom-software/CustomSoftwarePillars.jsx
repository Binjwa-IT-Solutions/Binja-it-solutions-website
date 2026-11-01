"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Cpu,
  Cloud,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function CustomSoftwarePillars({ onOpenConsultation }) {
  const pillars = [
    {
      id: "pillar-1",
      number: "01",
      icon: Code,
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-200",
      iconColor: "text-orange-600",
      hoverBorder: "hover:border-orange-400",
      badge: "Full-Stack & SaaS",
      title: "Full-Stack Web & Platform Engineering",
      description:
        "Building lightning-fast, responsive web applications and SaaS platforms utilizing modern architectures like the MERN stack, robust APIs, and clean modular codebases.",
      points: [
        "Modern MERN & Next.js full-stack development",
        "High-throughput RESTful & GraphQL API design",
        "Clean, decoupled modular architecture for rapid feature iterations",
        "Strict TypeScript typing & end-to-end unit and integration test suites"
      ],
      techChips: ["React", "Next.js", "Node.js", "Express", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "pillar-2",
      number: "02",
      icon: Cloud,
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-200",
      iconColor: "text-blue-600",
      hoverBorder: "hover:border-blue-400",
      badge: "DevOps & Cloud",
      title: "Cloud Infrastructure & Microservices",
      description:
        "Deploying resilient, containerized applications on AWS and custom Linux VPS environments with automated CI/CD pipelines, Nginx, and Docker.",
      points: [
        "AWS deployments: Elastic Beanstalk, S3, CloudFront & VPC isolation",
        "Docker containerization & lightweight microservice orchestration",
        "Automated CI/CD workflows via GitHub Actions for continuous zero-downtime shipping",
        "Hardened Nginx reverse proxies, SSL/TLS, and load balancing configurations"
      ],
      techChips: ["AWS Cloud", "Docker", "Nginx", "GitHub Actions", "Ubuntu Linux", "CloudFront"]
    },
    {
      id: "pillar-3",
      number: "03",
      icon: Cpu,
      accentBg: "bg-purple-50",
      accentBorder: "border-purple-200",
      iconColor: "text-purple-600",
      hoverBorder: "hover:border-purple-400",
      badge: "AI & Automation",
      title: "AI & Next-Gen Integrations",
      description:
        "Seamlessly integrating intelligent automation layers, real-time voice agents, and custom workflow automations directly into your core business software.",
      points: [
        "Sub-second latency AI Voice calling agents & webhook bridges",
        "Autonomous multi-step agentic workflows & custom CRM integrations",
        "Enterprise RAG knowledge search & automated document processing",
        "WhatsApp Cloud API, Meta Leads & cross-platform automation pipelines"
      ],
      techChips: ["Voice Agents", "RAG / LLMs", "Webhooks", "WhatsApp Cloud API", "Agentic Pipelines"]
    }
  ];

  return (
    <section className="relative bg-[#fafbfc] text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-orange-400/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>Architectural Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5 text-neutral-900">
            Core Development Pillars
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Every software system we engineer is anchored in modern architecture, bulletproof security, and seamless scalability from day one.
          </p>
        </div>

        {/* 3-Column Bento Grid (White & Orange Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-8 bg-white border border-neutral-200/90 ${pillar.hoverBorder} hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-sm`}
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.accentBg} border ${pillar.accentBorder} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <span className="text-2xl font-mono tracking-widest text-neutral-300 font-bold">
                      {pillar.number}
                    </span>
                  </div>

                  <div className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-orange-600 bg-orange-50/80 px-2.5 py-0.5 rounded-md mb-3">
                    {pillar.badge}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 text-neutral-900 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-8 border-t border-neutral-100 pt-5">
                    {pillar.points.map((pt, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips Footer */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techChips.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-100 text-neutral-800 border border-neutral-200/80 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
