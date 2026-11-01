"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const NexusForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your requirement...");

    try {
      const { submitContactForm } = await import("@/lib/api/contact");
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Company: ${formData.company || 'N/A'}\nInterested In: ${formData.interestedIn}\nMessage: ${formData.message}`
      };

      const result = await submitContactForm(payload);
      
      toast.success(result.message || "Your requirement has been sent successfully!", {
        id: toastId,
      });
      
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: "",
        consent: false,
      });
      
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error(error.message || "An error occurred.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner"
            style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }}
          />
        </div>

        <div className="space-y-2">
          <label className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
            Company Name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Enter Your Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner"
            style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
            Work Email <span className="text-orange-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Work Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner resize-none"
            style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }}
          />
        </div>

        <div className="space-y-2">
          <label className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
            Phone / WhatsApp Number <span className="text-orange-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner"
            style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
          Interested In <span className="text-orange-500">*</span>
        </label>
        <select
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner appearance-none bg-no-repeat bg-right"
          style={{ 
            backgroundColor: "var(--form-bg)", 
            color: "var(--text-primary)",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23374151'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9' /%3E%3C/svg%3E\")",
            backgroundSize: "1.5rem",
            backgroundPosition: "calc(100% - 1rem) center"
          }}
        >
          <option value="" disabled>Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="HRM Solution">HRM Solution</option>
          <option value="CRM / ERP">CRM / ERP</option>
          <option value="AI & Automation">AI & Automation</option>
          <option value="IT Staff Augmentation">IT Staff Augmentation</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
          Message / Requirement <span className="text-orange-500">*</span>
        </label>
        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about your requirements"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner resize-none"
          style={{ backgroundColor: "var(--form-bg)", color: "var(--text-primary)" }}
        ></textarea>
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          I consent to having Binjwa IT Solutions collect my details to process my inquiry. 
          <span className="text-orange-500">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1 active:scale-95 disabled:bg-neutral-400 disabled:cursor-not-allowed mt-4"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
};

export default NexusForm;
