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

export default function WhatIsAgenticAISection() {
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
              What is{" "}
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-[var(--text-primary)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Agentic AI
              </span>{" "}
              & Why Does Your Business Need It?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg leading-relaxed max-w-2xl mx-auto mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Just imagine having a team member who never calls in sick, never forgets a follow-up, and never gets tired of doing the same task a hundred times a day. That's essentially what Agentic AI brings to your business.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              Most companies — whether they're just starting out or already running at scale — lose hundreds of hours every month on things like chasing leads, replying to the same customer questions, updating spreadsheets, and manually processing data. None of it requires a human brain, yet it eats up your team's entire day.
            </motion.p>

            {/* signature: task pipeline flowing into an AI orb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center gap-3 md:gap-4 flex-wrap mb-10"
            >
              {tasks.map((task, i) => (
                <React.Fragment key={task.label}>
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
                    style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.06, borderColor: "#fb923c" }}
                  >
                    <task.icon size={16} className="text-orange-500" />
                    {task.label}
                  </motion.div>

                  {i < tasks.length - 1 && (
                    <span className="hidden md:block w-6 h-px bg-gradient-to-r from-orange-200 to-orange-300" />
                  )}
                </React.Fragment>
              ))}

              <span className="hidden md:block w-8 h-px bg-orange-300" />

              {/* the AI orb receiving all tasks */}
              <motion.div
                className="relative w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--text-primary)" }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(249,115,22,0.4)",
                    "0 0 0 12px rgba(249,115,22,0)",
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              >
                <Bot size={22} className="text-orange-400" />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative inline-block font-semibold text-orange-600 text-xl"
            >
              Agentic AI takes all of that off your plate. It works quietly in the background, gets things done accurately, and doesn't need you to babysit it.
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-orange-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />
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