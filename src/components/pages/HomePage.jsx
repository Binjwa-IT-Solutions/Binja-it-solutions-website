import React from "react";

import Hero from "../home/Hero";
import GlobalMouseGlow from "../home/GlobalMouseGlow";
import StatsSection from "../home/StatsSection";
import Services from "../home/Services";
import WhyChooseUs from "../home/WhyChooseUs";
import FAQSection from "../home/FAQSection";
import OurProducts from "../home/OurProducts";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <GlobalMouseGlow />
      
      <Hero />
      <Services />
      <WhyChooseUs />
      <OurProducts />
      <StatsSection />
      <FAQSection />

    </div>
  );
}
