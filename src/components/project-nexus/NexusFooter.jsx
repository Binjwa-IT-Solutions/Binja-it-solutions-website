"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const NexusFooter = () => {
  return (
    <footer className="w-full bg-white text-[#111827] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* Left Column: Brand & Description */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6 block relative transition-transform duration-300 hover:scale-[1.02]">
              <Image 
                src="/logo1.png" 
                alt="Binjwa IT Solutions" 
                width={160} 
                height={50} 
                unoptimized={true}
                className="h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-orange-500 font-bold text-xs tracking-[0.2em] mb-4 uppercase">
              AI • AUTOMATION • GROWTH
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Transforming businesses through AI, automation and intelligent digital solutions. Meet us at GITEX Global 2026, Dubai.
            </p>
          </div>

          {/* Middle Column: Explore */}
          <div>
            <h4 className="text-[#1e1b4b] font-bold text-sm tracking-wide mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/ai-automation" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                  Why Binjwa
                </Link>
              </li>
              <li>
                <Link href="/project-nexus" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                  GITEX 2026
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Let's stay connected */}
          <div>
            <h4 className="text-[#1e1b4b] font-bold text-sm tracking-wide mb-6">Let's Stay Connected</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Follow us for updates, product launches and behind-the-scenes at GITEX 2026.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/binjwa-it-solutions-pvt-ltd" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm">
                <FaLinkedinIn size={16} />
              </a>
              <a href="https://www.instagram.com/binjwaitsolutions/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.youtube.com/@BinjwaITCompleteSolutions" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm">
                <FaYoutube size={16} />
              </a>
              <a href="https://x.com/BinjwaITSolutio?t=RiZkuNAkfF1y2zY6hdegtQ&s=08" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm">
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Binjwa IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-gray-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-gray-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="/trust-security" className="text-gray-500 text-sm hover:text-gray-800 transition-colors">
              Trust & Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NexusFooter;
