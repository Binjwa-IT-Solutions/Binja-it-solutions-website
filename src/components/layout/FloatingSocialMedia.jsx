"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa6";

const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/company/binjwa-it-solutions-pvt-ltd/posts/?feedView=all" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/binjwaitsolutions/" },
  { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/BinjwaITSolutio?t=RiZkuNAkfF1y2zY6hdegtQ&s=08" },
  { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/people/Binjwaitsolutions/61577198437265/" },
  { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/@BinjwaITCompleteSolutions" },
];

export default function FloatingSocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      className="fixed right-1.5 sm:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-1.5 sm:gap-2.5 bg-[#0B0D11]/85 backdrop-blur-xl border border-white/10 hover:border-orange-500/40 rounded-2xl p-1.5 sm:p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse my-0.5" />
      <div className="w-3 sm:w-4 h-[1px] bg-white/10 mb-0.5" />
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-slate-300 hover:text-orange-500 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-300 group"
          >
            <Icon className="text-[13px] sm:text-[15px] transition-transform duration-300 group-hover:scale-110" />
          </a>
        );
      })}
    </motion.div>
  );
}
