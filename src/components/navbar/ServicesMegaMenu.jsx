"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight, Bot, Cpu, Code2, Globe, Sparkles } from "lucide-react";

export const coreServices = [
  {
    title: "Agentic AI",
    desc: "Autonomous AI agents engineered to automate workflows, optimize operations, and perform complex multi-step reasoning.",
    path: "/ai-automation",
    icon: Bot,
    badge: "Autonomous AI",
    accent: "text-orange-400",
    bgAccent: "bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "AI-Based Solutions",
    desc: "Intelligent machine learning algorithms, smart predictive systems, and automated data processing tailored for business growth.",
    path: "/ai-solutions",
    icon: Cpu,
    badge: "Machine Learning",
    accent: "text-blue-400",
    bgAccent: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Custom Software Development",
    desc: "Robust, secure, and scalable enterprise software systems tailored to your unique workflows and operational challenges.",
    path: "/custom-software-development",
    icon: Code2,
    badge: "MERN & Cloud",
    accent: "text-emerald-400",
    bgAccent: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Mobile & Web Development",
    desc: "High-performance responsive websites, progressive web apps, and native mobile apps built for seamless user engagement.",
    path: "/web-app-development",
    icon: Globe,
    badge: "Web & Mobile",
    accent: "text-purple-400",
    bgAccent: "bg-purple-500/10 border-purple-500/20",
  },
];

export default function ServicesMegaMenu({ onClose }) {
  const menuRef = useRef(null);

  // Close on Outside Click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        const isServicesLink = event.target.closest("#nav-services-link");
        if (!isServicesLink) {
          onClose();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Close on ESC Key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 top-[80px] z-40 bg-black/50"
      />

      {/* Mega Menu Panel */}
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: -12 }}
        animate={{ 
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        exit={{ 
          opacity: 0,
          y: -12,
          transition: { duration: 0.25, ease: "easeInOut" }
        }}
        className="fixed top-[80px] left-0 w-full z-50 bg-[#0c101d] border-b border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-7 pb-9 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors text-neutral-400 hover:text-white cursor-pointer"
          >
            <X size={22} />
          </button>

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-7 pr-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-2">
                <Sparkles size={11} />
                <span>Core Engineering Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Our Services
              </h2>
            </div>

            <Link
              href="/#services"
              onClick={onClose}
              className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1.5 group self-start sm:self-auto"
            >
              <span>View All Solutions Overview</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Cards Grid (Directly matching the 4 Home Page service cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={service.path}
                    onClick={onClose}
                    className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between h-full shadow-md hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:-translate-y-1"
                  >
                    <div>
                      {/* Top icon and badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${service.bgAccent} border flex items-center justify-center ${service.accent} group-hover:scale-105 transition-transform`}>
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-neutral-300 border border-white/5">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-4">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                      <span>Explore Service</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
