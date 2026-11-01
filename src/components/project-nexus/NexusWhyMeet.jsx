"use client";
import React from "react";
import { motion } from "framer-motion";
import { Network, LineChart, Cpu, Globe, ArrowRight, Handshake } from "lucide-react";

const NexusWhyMeet = () => {
  const benefits = [
    {
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      title: "AI & Automation Expertise",
      desc: "Deep technical knowledge in LLMs, machine learning, and workflow automation tailored for your unique infrastructure.",
    },
    {
      icon: <LineChart className="w-6 h-6 text-orange-500" />,
      title: "Business-Focused Solutions",
      desc: "We don't just build tech; we engineer measurable business ROI, cost reduction, and process efficiency.",
    },
    {
      icon: <Network className="w-6 h-6 text-orange-500" />,
      title: "Industry-Specific AI",
      desc: "Custom AI models engineered specifically for your domain, whether healthcare, finance, retail, or government.",
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "Scalable & Practical Tech",
      desc: "Solutions designed to scale globally while remaining practical, secure, and easy to integrate with legacy systems.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <p className="text-sm font-bold text-orange-500 tracking-widest uppercase">Experience Innovation</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
            Why Meet Binjwa at GITEX?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Partner with a technology agency that understands how to turn ambitious AI concepts into reliable enterprise software.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4"
              >
                <div className="p-3 bg-orange-50 rounded-xl">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 leading-tight">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Featured CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full flex flex-col justify-between bg-[#1e1b4b] rounded-[2rem] p-8 overflow-hidden relative shadow-xl">
              
              {/* Background gradient effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-bold text-orange-400 uppercase tracking-widest border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                  Exclusive Partnership
                </span>
                
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Bring Your Business Challenge to Us.
                </h3>
                
                <p className="text-indigo-200 text-sm leading-relaxed">
                  Whether it is customer retention, workflow automation, or social media infrastructure—we will build a tailored solution blueprint for you.
                </p>
              </div>

              <div className="relative z-10 mt-8 mb-6">
                <img 
                  src="/gitex/gitex_why_meet_1789041423811.jpg" 
                  alt="Business meeting" 
                  className="w-full h-[200px] object-cover rounded-xl border border-white/10 shadow-inner"
                />
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                    <Handshake className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div className="text-xs text-indigo-200">
                    <p>Meet the Engineering Team</p>
                    <p className="font-semibold text-white">Unlock Strategic value</p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('nexus-inquiry-section') || document.getElementById('gitex-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                >
                  Reserve Slot <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NexusWhyMeet;
