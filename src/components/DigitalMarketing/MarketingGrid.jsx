"use client";

import React from "react";
import { Search, Share2, Palette, Users, Mail, Video, ShieldCheck, BarChart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

const marketingCategories = [
  {
    id: "seo-domain",
    title: "Search Engine Optimization (SEO)",
    icon: <Search className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "Ranking is no longer just about keywords.",
      "It's about the value of what's behind it.",
      "We take care of technical optimization, content, and local SEO so Google finds you and keeps you ranking, without constant chasing."
    ],
    cta: "Explore SEO Services →"
  },
  {
    id: "social-domain",
    title: "Social Media Marketing (SMM)",
    icon: <Share2 className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "While everyone is scrolling, we're helping brands stand out so that they stop, engage, and convert."
    ],
    cta: "Explore Social Media Marketing →"
  },
  {
    id: "google-ads-domain",
    title: "Google Ads / PPC (Pay Per Click)",
    icon: <Search className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "It's easy to run ads. However, it's challenging to get value for your hard-earned money when you have little control over who sees them.",
      "We focus on finding your target audience and getting them to engage with your ad so that they come to you."
    ],
    cta: "Explore Google Ads / PPC →"
  },
  {
    id: "content-domain",
    title: "Content Marketing",
    icon: <Palette className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "Customers are made, not born.",
      "Most are already engaged with your competitors at the moment of sale.",
      "Our content marketing experts provide valuable information to build that engagement before you speak to them."
    ],
    cta: "Explore Content Marketing →"
  },
  {
    id: "email-domain",
    title: "Email Marketing",
    icon: <Mail className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "It's still one of the best channels for customer acquisition, provided it's done right.",
      "We do it right.",
      "We craft email copy that not only engages the customer but nurtures them through your sales funnel without being annoying."
    ],
    cta: "Explore Email Marketing →"
  },
  {
    id: "influencer-domain",
    title: "Influencer Marketing",
    icon: <Users className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "Your potential customers are influenced by people they admire.",
      "We can help you identify these people and work with them to persuade your target market to choose you."
    ],
    cta: "Explore Influencer Marketing →"
  },
  {
    id: "branding-domain",
    title: "Branding & Graphic Design",
    icon: <Palette className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "You have seconds to make a great first impression online.",
      "We create a brand that instills trust at first sight."
    ],
    cta: "Explore Branding & Graphic Design →"
  },
  {
    id: "video-domain",
    title: "Video Marketing / Editing",
    icon: <Video className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "Consumers will watch a video before they read your description.",
      "We can help you create videos that capture and maintain interest."
    ],
    cta: "Explore Video Marketing / Editing →"
  },
  {
    id: "reputation-domain",
    title: "Online Reputation Management",
    icon: <ShieldCheck className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "A single negative comment can completely overshadow all the hard work that went into building your brand.",
      "We will manage your online reputation so that what people say about you online reflects the excellent product/service you offer."
    ],
    cta: "Explore Online Reputation Management →"
  },
  {
    id: "analytics-domain",
    title: "Analytics & Reporting",
    icon: <BarChart className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "\"Something seems to be working\" is not a reason to celebrate.",
      "We provide you with relevant analytics and insights so that you know what works and, more importantly, what doesn't."
    ],
    cta: "Explore Analytics & Reporting →"
  }
];

export function MarketingGrid() {
  const lenis = useSmoothScroll();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -100 });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="py-12 px-8 lg:px-16" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          Our Digital Marketing Services
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
          Digital marketing is effective if the separate parts of the process work to complement each other instead of independently. As a complete service marketing agency, here is how we connect everything.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {marketingCategories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            onClick={() => scrollToSection(cat.id)}
            className="p-10 rounded-[2.5rem] hover:shadow-xl border flex flex-col h-full cursor-pointer group"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <div className="mb-6 p-4 rounded-2xl w-fit shadow-sm" style={{ backgroundColor: "var(--bg-primary)" }}>
              {React.cloneElement(cat.icon, { size: 32 })}
            </div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{cat.title}</h3>
              <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <ul className="space-y-3 mt-auto">
              {cat.topics.map((topic, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 font-medium text-sm" style={{ color: "var(--text-muted)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20 mt-1.5 shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold tracking-widest uppercase" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
              {cat.cta}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
