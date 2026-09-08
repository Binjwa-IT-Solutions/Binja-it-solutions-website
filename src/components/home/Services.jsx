"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const servicesData = {
  title: "OUR SERVICES",
  description:
    "Binjwa IT Solutions helps organizations optimize their operations, adopt digital transformation, and scale their business with confidence through innovative technology and smart automation. From new platform development and system upgrades to business process automation, we provide end-to-end solutions that are designed to meet your specific needs and contribute to your overall success.\n\nOur solutions are focused on helping you to increase productivity, reduce costs, and stay ahead of the curve in a constantly evolving digital landscape. By leveraging our expertise in developing secure, high-quality, and high-performance solutions, you can be confident that your business is well-positioned for success now and in the future.",
  services: [
    {
      title: "Agentic AI",
      desc: "Innovative AI agents designed to automate workflows and optimize operations.",
      path: "/ai-solutions",
      image: "/images/hero-robot.png"
    },
    {
      title: "Social Media Management",
      desc: "Data-driven strategies to build your brand and engage your target audience.",
      path: "/web-app-development",
      image: "/images/digital_markting.jpeg"
    },
    {
      title: "Software Development",
      desc: "Scalable, high-performance software tailored to your specific business requirements.",
      path: "/compliance",
      image: "/images/Software-Development.jpg"
    },
    {
      title: "Legal & Compliance",
      desc: "Expert guidance to ensure your business meets all regulatory and legal standards.",
      path: "/digital-marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
  ],
};

// Interactive Word Component for the paragraph
const InteractiveWord = ({ children }) => {
  const word = children.replace(/[^a-zA-Z]/g, "").toLowerCase();
  
  // Emphasize specific tech/business related words slightly
  const emphasisWords = ["technology", "ai", "solutions", "productivity", "automation", "digital", "business"];
  const isEmphasis = emphasisWords.includes(word);

  return (
    <motion.span
      className={`animated-word inline-block relative cursor-default ${isEmphasis ? "font-normal text-neutral-700" : ""}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        className="relative z-10 inline-block"
        variants={{
          initial: { y: 0, color: "inherit", fontWeight: "inherit" },
          hover: { y: -2, color: "#000000", fontWeight: 500 }
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.span>
      
      {/* Background Marker Highlight */}
      <motion.span
        className="absolute bottom-[2px] left-[-2px] right-[-2px] h-[40%] bg-orange-100/80 z-0 origin-left"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Underline */}
      <motion.span
        className="absolute bottom-[-1px] left-0 h-[1.5px] bg-orange-500 origin-left z-0"
        variants={{
          initial: { width: "0%" },
          hover: { width: "100%" }
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </motion.span>
  );
};

// Magnetic Button Interaction Component
const MagneticArrow = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (reducedMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // Keep magnetic radius restrained and premium
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className="relative z-10 flex items-center justify-center p-2"
    >
      {children}
    </motion.div>
  );
};

const PremiumCard = ({ service }) => {
  return (
    <Link href={service.path} className="block h-full outline-none service-card">
      <motion.div
        initial="initial"
        whileHover="hover"
        className="group relative rounded-[24px] overflow-hidden h-full bg-white flex flex-col sm:flex-row p-6 sm:p-8 transition-all duration-500 ease-out shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)] border border-orange-200 hover:border-orange-500"
      >

        {/* Left Content Area */}
        <div className="flex flex-col justify-center flex-1 z-10 pr-0 sm:pr-8">
          <div className="flex items-center gap-3 mb-5">
            {/* Small static orange pill indicator */}
            <span className="w-1.5 h-2.5 rounded-sm bg-orange-500 shrink-0" />
            <h3 className="text-2xl sm:text-[26px] font-bold text-neutral-900 tracking-tight leading-[1.2] transition-colors duration-400 group-hover:text-neutral-950">
              {service.title}
            </h3>
          </div>
          
          <p className="text-xs font-semibold text-neutral-500 leading-relaxed mb-8">
            {service.desc}
          </p>

          <div className="mt-auto flex items-center overflow-hidden h-12">
            <motion.div
              variants={{
                initial: { x: -20, opacity: 0 },
                hover: { x: 0, opacity: 1 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-orange-500"
            >
              <MagneticArrow>
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:shadow-md transition-shadow">
                  <ArrowRight size={18} strokeWidth={2} />
                </div>
              </MagneticArrow>
            </motion.div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="mt-8 sm:mt-0 shrink-0 w-full sm:w-[45%] flex items-center justify-end relative">
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-[16px] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100/50 z-10 group-hover:shadow-md transition-shadow duration-500">
            {/* Image Parallax Effect (1.04-1.08x scale) */}
            <motion.div
              variants={{
                initial: { scale: 1, x: 0, y: 0 },
                hover: { scale: 1.06, x: -3, y: 3 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full h-full grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`object-cover ${service.title === 'Agentic AI' ? 'object-[75%_center]' : 'object-center'}`}
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Services = () => {
  const container = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Standard GSAP Timeline for devices with normal motion
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%", 
        }
      });

      tl.fromTo(".reveal-header", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // Staggered word reveal for typography
      tl.fromTo(".animated-word", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.015, ease: "power2.out" },
        "-=0.6"
      );

      // Slide upward with subtle stagger (~0.12s)
      tl.fromTo(".service-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" },
        "-=0.4"
      );
    });

    // Fallback simple opacity fade for reduced motion users
    mm.add("(prefers-reduced-motion: reduce)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", 
        }
      });

      tl.fromTo(".reveal-header", 
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
      
      tl.fromTo(".animated-word", 
        { opacity: 0 },
        { opacity: 1, duration: 0.4, stagger: 0.01, ease: "power2.out" },
        "-=0.6"
      );

      tl.fromTo(".service-card",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 lg:px-16 bg-white relative overflow-hidden">
      
      {/* Subtle warm-gray background accent (strictly avoiding unapproved colors) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-50/80 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-20 md:mb-24">
          <div className="md:w-[35%] shrink-0 reveal-header">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-orange-500" />
              <span className="text-sm font-medium tracking-wide text-orange-500">
                Reliable, professional, and customer-focused solutions.
              </span>
            </div>

            {/* Interactive Heading */}
            <motion.div 
              className="relative inline-block cursor-default group"
              whileHover="hover"
              initial="initial"
            >
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-tight tracking-tight text-neutral-900 relative z-10">
                {servicesData.title}
              </h2>
              {/* Draw Line */}
              <motion.div 
                className="absolute -bottom-1 left-0 h-[3px] bg-orange-500 origin-left"
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 }
                }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
              {/* Moving Dot Accent */}
              <motion.div 
                className="absolute -bottom-2 left-0 w-2 h-2 rounded-full bg-orange-500"
                variants={{
                  initial: { x: -10, opacity: 0 },
                  hover: { x: "100%", opacity: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          <div className="md:w-[65%] mt-2 md:mt-0">
            <div className="text-[16px] md:text-[18px] leading-relaxed text-neutral-500 font-light space-y-6 max-w-2xl">
              {servicesData.description.split('\n\n').map((para, i) => (
                <p key={i}>
                  {para.split(' ').map((word, j) => (
                    <React.Fragment key={`${i}-${j}`}>
                      <InteractiveWord>{word}</InteractiveWord>
                      {" "}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {servicesData.services.map((service, index) => (
            <div key={index} className="h-full">
              <PremiumCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;