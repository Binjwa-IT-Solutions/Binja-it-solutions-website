"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Table2, MessageCircle, Database, UserPlus, Bot } from "lucide-react";

const tasks = [
  { icon: UserPlus, label: "Lead Follow-up" },
  { icon: Mail, label: "Email Sending" },
  { icon: Table2, label: "Spreadsheet Filling" },
  { icon: MessageCircle, label: "Customer Queries" },
  { icon: Database, label: "Data Processing" },
];

export default function DigitalMarketingIntro() {
  return (
    <section className="relative py-24 px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* ambient background glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange-100 blur-3xl opacity-40 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Snake Border Wrapper */}
      <div className="max-w-5xl mx-auto relative p-[2px] rounded-2xl overflow-hidden glowing-border-wrapper shadow-[0_0_30px_rgba(249,115,22,0.05)]">

        {/* Inner Content Container */}
        <div className="relative z-10 rounded-2xl px-6 py-12 md:px-12 md:py-16 h-full" style={{ backgroundColor: "var(--bg-primary)" }}>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              We're a digital marketing company that builds{" "}
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-[var(--text-primary)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                long-term partnerships
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              Welcome to Binjwa IT Solutions, where we help businesses create an impactful online identity through effective online marketing. As a digital marketing company, we conceptualize practical, data-driven strategies as opposed to offering online marketing packages to several clients. Whether it is your first step into the field of online marketing or you've already taken your successful strides, our team will help you attract qualified traffic and turn visitors into actual customers.
            </motion.p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 4s linear infinite alternate;
        }

        /* Snake Border Animation */
        @keyframes rotate-border {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .glowing-border-wrapper::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
          background: conic-gradient(from 0deg, transparent 70%, rgba(249,115,22,0.2) 85%, #F97316 100%);
          animation: rotate-border 4s linear infinite;
          z-index: 0;
        }
      `}</style>
    </section>
  );
}