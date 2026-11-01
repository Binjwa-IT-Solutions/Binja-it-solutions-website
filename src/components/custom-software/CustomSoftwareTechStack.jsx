"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Cloud,
  Shield
} from "lucide-react";

export default function CustomSoftwareTechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "frontend",
      name: "Frontend & UI",
      icon: Layers,
      color: "text-orange-600",
      accentBg: "bg-orange-50",
      accentBorder: "border-orange-200",
      description: "Fast, accessible, and reactive user interfaces built on modern component architecture.",
      technologies: [
        { name: "React", role: "Component Architecture", badge: "v19" },
        { name: "Next.js", role: "SSR & Static Hybrid", badge: "App Router" },
        { name: "Tailwind CSS", role: "Design Token Systems", badge: "v3.4" },
        { name: "TypeScript", role: "Type Safety & Contracts", badge: "Strict Mode" },
        { name: "Framer Motion", role: "Fluid Physics & Gestures", badge: "Animation" },
        { name: "Zustand / Redux", role: "Predictable State", badge: "Client State" }
      ]
    },
    {
      id: "backend",
      name: "Backend & APIs",
      icon: Server,
      color: "text-blue-600",
      accentBg: "bg-blue-50",
      accentBorder: "border-blue-200",
      description: "Low-latency API gateways, microservices, and asynchronous event loops.",
      technologies: [
        { name: "Node.js", role: "Event-Driven Engine", badge: "LTS" },
        { name: "Express.js", role: "High-Throughput Routing", badge: "REST" },
        { name: "RESTful APIs", role: "Standardized Contracts", badge: "OpenAPI 3.0" },
        { name: "GraphQL", role: "Precise Query Orchestration", badge: "Apollo" },
        { name: "Microservices", role: "Decoupled Scaling", badge: "Independent" },
        { name: "Webhooks Engine", role: "Real-Time Event Dispatch", badge: "<100ms" }
      ]
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "text-purple-600",
      accentBg: "bg-purple-50",
      accentBorder: "border-purple-200",
      description: "Elastic, containerized infrastructure with automated continuous delivery.",
      technologies: [
        { name: "AWS Elastic Beanstalk", role: "Automated Orchestration", badge: "AWS" },
        { name: "AWS S3 & CloudFront", role: "Global CDN & Storage", badge: "Edge CDN" },
        { name: "Docker", role: "Container Standardization", badge: "Containers" },
        { name: "Nginx", role: "Reverse Proxy & Load Balancer", badge: "SSL / HTTP/2" },
        { name: "GitHub Actions", role: "Automated CI/CD Pipelines", badge: "Automation" },
        { name: "Ubuntu Linux VPS", role: "Hardened OS Environment", badge: "Enterprise" }
      ]
    },
    {
      id: "database",
      name: "Database & Security",
      icon: Shield,
      color: "text-emerald-600",
      accentBg: "bg-emerald-50",
      accentBorder: "border-emerald-200",
      description: "ACID-compliant storage, sub-millisecond caching, and bank-grade auth.",
      technologies: [
        { name: "MongoDB", role: "Document Data Store", badge: "Atlas / Cluster" },
        { name: "PostgreSQL", role: "Relational ACID Store", badge: "SQL" },
        { name: "Redis", role: "In-Memory Cache & Queues", badge: "<2ms" },
        { name: "JWT & TOTP Auth", role: "Two-Factor Security", badge: "Stateless" },
        { name: "RBAC Controls", role: "Role-Based Access Guard", badge: "Enterprise" },
        { name: "Data Encryption", role: "TLS 1.3 & AES-256", badge: "At-Rest / In-Transit" }
      ]
    }
  ];

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section className="relative bg-[#fafbfc] text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[350px] bg-orange-400/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>Engineering Edge</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5 text-neutral-900">
            Technology Stack & Architecture
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Proven modern frameworks, containerized environments, and cloud infrastructure engineered for zero friction.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/25"
                  : "bg-white text-neutral-700 hover:text-orange-600 border border-neutral-200 hover:border-orange-300"
              }`}
            >
              All Stacks ({categories.reduce((acc, c) => acc + c.technologies.length, 0)})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? "bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/25"
                    : "bg-white text-neutral-700 hover:text-orange-600 border border-neutral-200 hover:border-orange-300"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-7 bg-white border border-neutral-200/90 hover:border-orange-300 hover:shadow-[0_20px_45px_rgba(249,115,22,0.08)] transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cat.accentBg} border ${cat.accentBorder} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${cat.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">{cat.name}</h3>
                      <p className="text-xs text-neutral-500">{cat.description}</p>
                    </div>
                  </div>

                  {/* Tech Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {cat.technologies.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3 rounded-xl bg-neutral-50/80 border border-neutral-200/70 hover:border-orange-400 hover:bg-orange-50/30 transition-colors flex items-center justify-between group"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="text-sm font-semibold text-neutral-900 group-hover:text-orange-600 transition-colors truncate">
                            {tech.name}
                          </div>
                          <div className="text-[11px] text-neutral-500 truncate">
                            {tech.role}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-neutral-700 border border-neutral-200 shrink-0 font-medium">
                          {tech.badge}
                        </span>
                      </div>
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
