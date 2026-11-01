"use client";

import React from "react";

export default function BinjAiTrustTicker() {
  const partners = [
    { name: "Meta Lead Ads", badge: "Direct Webhook" },
    { name: "WhatsApp Cloud API", badge: "Omnichannel Sync" },
    { name: "Salesforce CRM", badge: "Native Integration" },
    { name: "HubSpot", badge: "Bi-directional" },
    { name: "Zoho CRM", badge: "Auto-Sync" },
    { name: "Google Cloud Vertex", badge: "Low Latency" },
    { name: "AWS Cloud", badge: "Enterprise Infra" },
    { name: "Zapier", badge: "Webhook Triggers" },
  ];

  // Render a repeatable, uniformly-spaced track block
  const renderTrackBlock = (blockKey) => (
    <div key={blockKey} className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
      {partners.map((partner, index) => (
        <div
          key={`${blockKey}-${index}`}
          className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all text-neutral-300 hover:text-white group shrink-0 shadow-sm hover:bg-white/[0.06] select-none"
        >
          <div className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-orange-500 transition-colors" />
          <span className="font-semibold text-sm tracking-tight text-neutral-200 group-hover:text-white transition-colors whitespace-nowrap">
            {partner.name}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors whitespace-nowrap">
            {partner.badge}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-14 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-7">
        <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-neutral-400">
          Powering high-growth sales, real estate, and enterprise conversion workflows.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Fade Gradients for visual elegance */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* 
          Continuous Scrolling Track (Left to Right):
          Translates smoothly from -50% to 0% with identical halves.
          Both halves have identical widths and padding, ensuring ZERO broken trail or stutter.
        */}
        <div className="animate-ticker-ltr py-2 flex shrink-0">
          {/* Half 1 */}
          <div className="flex shrink-0">
            {renderTrackBlock("h1-b1")}
            {renderTrackBlock("h1-b2")}
          </div>

          {/* Half 2 (Exact duplicate for seamless mathematical wrap) */}
          <div className="flex shrink-0">
            {renderTrackBlock("h2-b1")}
            {renderTrackBlock("h2-b2")}
          </div>
        </div>
      </div>
    </section>
  );
}
