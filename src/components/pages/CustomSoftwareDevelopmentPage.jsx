"use client";

import React, { useState } from "react";
import CustomSoftwareHero from "../custom-software/CustomSoftwareHero";
import CustomSoftwarePillars from "../custom-software/CustomSoftwarePillars";
import CustomSoftwareLifecycle from "../custom-software/CustomSoftwareLifecycle";
import CustomSoftwareTechStack from "../custom-software/CustomSoftwareTechStack";
import CustomSoftwareCTA from "../custom-software/CustomSoftwareCTA";
import CustomSoftwareModal from "../custom-software/CustomSoftwareModal";

export default function CustomSoftwareDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen text-neutral-900 selection:bg-orange-500/20 selection:text-orange-900">
      {/* 1. Hero Section: Sovereign Hook, Eyebrow & Interactive Code Blueprint */}
      <CustomSoftwareHero onOpenConsultation={handleOpenConsultation} />

      {/* 2. Core Development Pillars (3-Column Bento Grid) */}
      <CustomSoftwarePillars onOpenConsultation={handleOpenConsultation} />

      {/* 3. Our Development Lifecycle (How We Build - 4-Step Methodology) */}
      <CustomSoftwareLifecycle />

      {/* 4. Technology Stack & Engineering Edge */}
      <CustomSoftwareTechStack />

      {/* 5. Section CTA (Gradient Wash Card & Live CRM Connected Consultation Form) */}
      <CustomSoftwareCTA onOpenConsultation={handleOpenConsultation} />

      {/* Tech Consultation Modal Popup */}
      <CustomSoftwareModal isOpen={isModalOpen} onClose={handleCloseConsultation} />
    </div>
  );
}

