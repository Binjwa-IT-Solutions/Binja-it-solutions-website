"use client";

import React, { useState, useEffect } from "react";
import BinjAiHero from "@/components/binjai/BinjAiHero";
import BinjAiTrustTicker from "@/components/binjai/BinjAiTrustTicker";
import BinjAiPipeline from "@/components/binjai/BinjAiPipeline";
import BinjAiVoiceEngine from "@/components/binjai/BinjAiVoiceEngine";
import BinjAiMetrics from "@/components/binjai/BinjAiMetrics";
import BinjAiSecurity from "@/components/binjai/BinjAiSecurity";
import BinjAiFinalCTA from "@/components/binjai/BinjAiFinalCTA";
import BinjAiDemoModal from "@/components/binjai/BinjAiDemoModal";

export default function BinjAiLanding() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-orange-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 2. Hero Section (The Sovereign Hook + Silent Motion Graphic) */}
      <BinjAiHero onOpenDemo={() => setDemoModalOpen(true)} />

      {/* 3. Social Proof / Trust Ticker */}
      <BinjAiTrustTicker />

      {/* 4. Core Architecture Section: "Meta to Voice Pipeline" */}
      <BinjAiPipeline />

      {/* 5. Deep Dive: AI Voice Agents (The Engine) */}
      <BinjAiVoiceEngine onOpenDemo={() => setDemoModalOpen(true)} />

      {/* 6. Infrastructure & Performance Metrics (Sarvam-Style Stats Bar) */}
      <BinjAiMetrics />

      {/* 7. Enterprise-Grade Security & Reliability */}
      <BinjAiSecurity />

      {/* 8. Final Conversion CTA Section & Sarvam-Style Footer */}
      <BinjAiFinalCTA onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Interactive Live Demo Modal */}
      <BinjAiDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}

