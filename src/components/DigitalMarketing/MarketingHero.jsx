"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const marketingstrategy = '/assets/marketingstrategy.png';

export default function MarketingHero() {
  return (
    <section className="relative min-h-screen pt-40 lg:pt-32 pb-12 px-8 lg:px-10 overflow-hidden flex justify-center items-center" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
              Data-Driven Growth
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Digital Marketing Company <br />
            <span style={{ color: "var(--text-muted)" }}>That Helps Your Business Grow</span>
          </h1>
          <p className="text-xl leading-relaxed max-w-xl mb-10" style={{ color: "var(--text-muted)" }}>
            We help you find your ideal audience, boost your online visibility, and turn visitors into paying customers — through marketing strategies built on real data.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/contact"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-neutral-900 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-neutral-900 bg-transparent border-2 border-neutral-200 rounded-full hover:border-orange-500 hover:text-orange-600 transition-all"
            >
              Work With Us
            </Link>
          </div>
        </motion.div>

        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0  blur-[120px] rounded-full" />
          {/* Using your existing asset assets/images/chooseimage3.png which represents phone/engagement */}
          <Image
            src={marketingstrategy}
            alt="Marketing Strategy"
            className="relative z-10 w-full pt-10 lg:max-w-none rounded-4xl"
          width={800} height={800} />
        </div>
      </div>
    </section>
  );
}
