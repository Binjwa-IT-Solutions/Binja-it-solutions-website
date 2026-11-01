import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";;

export function LandingCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#09090B]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F16522]/20 to-orange-400/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[#09090C]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Ready to Transform Your Social Media Presence?
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 text-balance max-w-2xl mx-auto font-light leading-relaxed">
          Connect your accounts today to experience unified scheduling, authentic brand voice consistency, and actionable cross-channel analytics.
        </p>
        <Link href="/contact"
          className="inline-flex items-center justify-center bg-[#F16522] text-white hover:bg-[#E05A1A] h-16 px-12 text-xl rounded-full shadow-2xl transition-all font-bold hover:shadow-[#F16522]/40"
        >
          Get Started with Binj SMM
          <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
