import React from "react";

import MarketingHero from "../DigitalMarketing/MarketingHero";
import DigitalMarketingIntro from "../DigitalMarketing/DigitalMarketingIntro";
import { MarketingGrid } from "../DigitalMarketing/MarketingGrid";
import { SocialDetail, SEODetail } from "../DigitalMarketing/SocialDetail";
import BrandingDetail from "../DigitalMarketing/BrandingDetail";
import AnalyticsDetail from "../DigitalMarketing/AnalyticsDetail";
import WhyChooseUsSection from "../DigitalMarketing/DigitalMarketingWhyChooseUs";
import FAQSection from "../DigitalMarketing/DigitalMarketingFAQ";
import FinalCTASection from "../DigitalMarketing/DigitalMarketingCTA";

export default function DigitalMarketing() {
  return (
    <>
      <MarketingHero />
      <DigitalMarketingIntro />
      <MarketingGrid />
      <SEODetail />
      <SocialDetail />
      <BrandingDetail />
      <AnalyticsDetail />
      <WhyChooseUsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
