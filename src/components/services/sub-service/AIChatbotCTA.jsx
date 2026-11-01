"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import { submitContactForm } from "@/lib/api/contact";
import { MessageSquare, Bot, Sparkles, Send } from "lucide-react";

export default function AIChatbotCTA({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    contactPreference: "Email",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending request...");

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      message: `Help requested: ${formData.message}\n\nCompany: ${formData.companyName || 'N/A'}\nPreferred Contact: ${formData.contactPreference}`,
      companyName: formData.companyName,
      contactPreference: formData.contactPreference,
    };

    try {
      const result = await submitContactForm(payload);
      toast.success(result.message || "Request sent successfully!", {
        id: toastId,
      });
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        contactPreference: "Email",
        message: "",
      });
    } catch (error) {
      toast.error(error.message || "An error occurred.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner transition-all outline-none text-base";
  const labelClass = "block font-bold text-sm theme-text mb-2";

  return (
    <section className="py-24 relative overflow-hidden theme-bg-secondary" ref={ref}>
      {/* Background gradients and AI particles */}
      <div className="absolute inset-0 pointer-events-none theme-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] rounded-full blur-[140px] pointer-events-none" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)' }} />
      
      {/* Subtle AI decorations */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 md:left-32 text-orange-500 pointer-events-none"
      >
        <Bot size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 md:right-32 text-orange-500 pointer-events-none"
      >
        <MessageSquare size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full theme-bg-card border theme-border mb-8 shadow-sm">
              <Sparkles className="w-5 h-5 theme-accent" />
              <span className="text-sm font-bold theme-text uppercase tracking-wider">Start Your AI Journey</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold theme-text mb-6 leading-tight">
              {data.heading}
            </h2>
            <p className="text-xl theme-text-secondary leading-relaxed mb-10">
              {data.subtext}
            </p>

            <div className="hidden lg:grid grid-cols-2 gap-6 mt-12">
               <div className="p-6 theme-bg-card rounded-2xl border theme-border transition-all hover:border-[var(--accent)] hover:shadow-md">
                  <h4 className="text-lg font-bold theme-text mb-2">Fast Deployment</h4>
                  <p className="theme-text-secondary text-sm">Our intelligent chatbots are integrated and ready within weeks, not months.</p>
               </div>
               <div className="p-6 theme-bg-card rounded-2xl border theme-border transition-all hover:border-[var(--accent)] hover:shadow-md">
                  <h4 className="text-lg font-bold theme-text mb-2">Tailored Logic</h4>
                  <p className="theme-text-secondary text-sm">We don't use off-the-shelf wrappers; every conversation flow is mapped to your business.</p>
               </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="theme-bg-card rounded-3xl p-6 md:p-10 border theme-border shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-orange-600" />
             
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className={labelClass}>First Name <span className="text-orange-500">*</span></label>
                   <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className={inputClass} style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }} />
                 </div>
                 <div className="space-y-2">
                   <label className={labelClass}>Last Name <span className="text-orange-500">*</span></label>
                   <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className={inputClass} style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }} />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className={labelClass}>Company Name</label>
                 <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your Business Inc." className={inputClass} style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }} />
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className={labelClass}>Email <span className="text-orange-500">*</span></label>
                   <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }} />
                 </div>
                 <div className="space-y-2">
                   <label className={labelClass}>Phone <span className="text-orange-500">*</span></label>
                   <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" className={inputClass} style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }} />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className={labelClass}>Preferred way to be contacted</label>
                 <div className="relative">
                   <select name="contactPreference" value={formData.contactPreference} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`} style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }}>
                     <option value="Email">Email</option>
                     <option value="Phone">Phone</option>
                     <option value="WhatsApp">WhatsApp</option>
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-orange-500">
                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                   </div>
                 </div>
               </div>

               <div className="space-y-2">
                 <label className={labelClass}>What do you need help with? <span className="text-orange-500">*</span></label>
                 <textarea required name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us how your customers currently reach out to you..." className={`${inputClass} resize-none`} style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }}></textarea>
               </div>

               <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 text-base font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.6)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? "Sending..." : "Book a Free Demo"}
                   {!isSubmitting && <Send size={18} className="ml-2" />}
                 </button>
                 
                 <Link 
                   href="/contact" 
                   className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 text-base font-bold bg-transparent border-2 theme-border hover:theme-bg-alt theme-text rounded-xl transition-all hover:-translate-y-1"
                 >
                   Talk to Our Team
                 </Link>
               </div>
             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
