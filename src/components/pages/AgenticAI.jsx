import React from "react";

import HeroSection from "../AgenticAI/HeroSection";
import WhatIsAgenticAISection from "../AgenticAI/WhatIsAgenticAISection";
import OurServicesSection from "../AgenticAI/OurServicesSection";
import HowWeBuildSection from "../AgenticAI/HowWeBuildSection";
import IntegrationsSection from "../AgenticAI/IntegrationsSection";
import IndustriesWeServeSection from "../AgenticAI/IndustriesWeServeSection";
import FAQSection from "../AgenticAI/FAQSection";
import FinalCTASection from "../AgenticAI/FinalCTASection";

export default function AgenticAI() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction: What is Agentic AI & Why Does Your Business Need It? */}
      <WhatIsAgenticAISection />

      {/* 3. Core Agentic Services */}
      <OurServicesSection />

      {/* 4. Industries We Serve */}
      <IndustriesWeServeSection />

      {/* 5. Tool Integrations */}
      <IntegrationsSection />

      {/* 6. How We Build Your Solutions */}
      <HowWeBuildSection />

      {/* 7. Final CTA: Are You Ready to Automate? */}
      <FinalCTASection />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />
    </>
  );
}
