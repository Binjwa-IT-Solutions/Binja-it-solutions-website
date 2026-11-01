"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Briefcase, Zap, FileText, Handshake, Users, PhoneCall, CheckCircle } from "lucide-react";

const NexusSolutions = () => {
  const solutions = [
    {
      id: 1,
      tag: "AI & AUTOMATION",
      title: "AI That Understands, Decides and Takes Action",
      description: "Automate mission-critical business workflows, handle high-volume inquiries, score and qualify leads, and trigger API microservices within seconds accurately.",
      bullets: [
        "Understand customer intent",
        "Take actions & fulfill data",
        "Automate complex workflows",
        "Integrate with existing tools",
      ],
      img: "/gitex/gitex_sol_1_1789041294882.jpg",
      bgClass: "bg-blue-50/50",
    },
    {
      id: 2,
      tag: "VOICE INTELLIGENCE",
      title: "Replace 'Press 1, Press 2' with Real Conversations",
      description: "Smooth your telecom operations with hyper-natural multi-lingual voice AI. Resolve support inquiries, schedule sales calls & appointments, and manage CRM data instantly.",
      bullets: [
        "Natural voice interactions",
        "Handle sales & support",
        "Qualify leads real-time",
        "Book appointments instantly",
        "Integrate with CRM databases",
      ],
      img: "/gitex/gitex_sol_2_1789041317395.jpg",
      bgClass: "bg-purple-50/50",
    },
    {
      id: 3,
      tag: "WHATSAPP & MESSAGING",
      title: "Turn WhatsApp Chats into Loyal Customers",
      description: "Scale your official WhatsApp Business API to automate customer support, reply to DMs, boost sales tracking, and manage payment links and recommendations on the go.",
      bullets: [
        "Automate customer conversations",
        "Qualify leads & inventory",
        "Lead tracking & KPI dashboards",
        "Book appointments instantly",
        "Integrate with CRM databases",
      ],
      img: "/gitex/gitex_sol_3_1789041332718.jpg",
      bgClass: "bg-green-50/50",
    },
    {
      id: 4,
      tag: "SOCIAL & CONTENT AUTOMATION",
      title: "One Platform for All Your Social Media",
      description: "Create, curate, schedule, and automate your social posts across all networks in one place. AI content strategy and engagement analysis helps build strong relationships without the manual overhead.",
      bullets: [
        "Manage all social channels",
        "Auto-schedule content",
        "Unified content calendar",
        "Track performance analytics",
        "Save time, grow faster",
      ],
      img: "/gitex/gitex_sol_4_1789041402588.jpg",
      bgClass: "bg-pink-50/50",
    },
  ];

  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-sm font-bold text-orange-500 tracking-widest uppercase">Business Upgraded</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our AI Solutions at GITEX
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four focused autonomous engines engineered for measurable business ROI and saving critical hours.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-12">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12 rounded-[2rem] border border-gray-100 shadow-sm ${sol.bgClass}`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <span className="inline-block px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-bold text-gray-700 tracking-wider">
                  {sol.tag}
                </span>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {sol.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {sol.description}
                </p>

                <div className="pt-4">
                  <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Key Capabilities</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sol.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                        <span className="text-sm font-medium text-gray-800 leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button className="flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors group">
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-[45%] shrink-0 relative group">
                <div className="absolute inset-0 bg-orange-500/10 rounded-2xl blur-xl group-hover:bg-orange-500/20 transition-all duration-500"></div>
                <img 
                  src={sol.img} 
                  alt={sol.title} 
                  className="relative w-full h-[300px] lg:h-[350px] object-cover rounded-2xl shadow-md border border-white/50"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4 bg-gray-900 rounded-full p-2"
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-orange-500 text-white">
            <Zap className="w-4 h-4" /> AI Solutions
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-orange-500 text-gray-300 hover:text-white">
            <FileText className="w-4 h-4" /> Use Cases
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-orange-500 text-gray-300 hover:text-white">
            <Briefcase className="w-4 h-4" /> Industry Focus
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-orange-500 text-gray-300 hover:text-white">
            <Handshake className="w-4 h-4" /> Global Partnerships
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default NexusSolutions;
