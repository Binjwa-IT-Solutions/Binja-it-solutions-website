"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const GitexForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    countryCode: "+91",
    phone: "",
    country: "",
    interestedIn: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending meeting request...");

    try {
      const { submitContactForm } = await import("@/lib/api/contact");
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        message: `GITEX 2026 Meeting Request\nCompany: ${formData.company}\nJob Title: ${formData.jobTitle}\nCountry: ${formData.country}\nInterested In: ${formData.interestedIn}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}`
      };

      const result = await submitContactForm(payload);
      
      toast.success(result.message || "Meeting request sent successfully!", {
        id: toastId,
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        jobTitle: "",
        countryCode: "+91",
        phone: "",
        country: "",
        interestedIn: "",
        preferredDate: "",
        preferredTime: "",
      });
      
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error(error.message || "An error occurred.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Meeting at <span className="text-orange-500">GITEX 2026</span></h3>
        <p className="text-gray-500 text-sm">Fill in your details and our team will get in touch to confirm your meeting slot.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              Full Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              Work Email <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              Company Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              Job Title / Designation <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="e.g. Founder, Manager, Director"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              WhatsApp / Phone Number <span className="text-orange-500">*</span>
            </label>
            <div className="flex border border-gray-200 rounded-xl focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400 overflow-hidden transition-colors">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="bg-gray-50 px-3 py-3.5 border-r border-gray-200 text-sm text-gray-700 outline-none w-[100px]"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                {/* Add more as needed, but keep it simple for now */}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="81234 56789"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 p-3.5 outline-none text-sm text-gray-900 w-full"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              Country <span className="text-orange-500">*</span>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors bg-white appearance-none"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E\")",
                backgroundPosition: "right 1rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1rem"
              }}
            >
              <option value="" disabled>Select your country</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Qatar">Qatar</option>
              <option value="Oman">Oman</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="font-semibold text-xs text-gray-700">
            What are you interested in? <span className="text-orange-500">*</span>
          </label>
          <select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            required
            className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors bg-white appearance-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E\")",
              backgroundPosition: "right 1rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1rem"
            }}
          >
            <option value="" disabled>Select an option</option>
            <option value="AI Automation">AI Automation</option>
            <option value="Custom Software Development">Custom Software Development</option>
            <option value="Web & Mobile Apps">Web & Mobile Apps</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="Partnership / Reseller">Partnership / Reseller</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              Preferred Meeting Date <span className="text-orange-500">*</span>
            </label>
            <select
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors bg-white appearance-none"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E\")",
                backgroundPosition: "right 1rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1rem"
              }}
            >
              <option value="" disabled>Select date</option>
              <option value="8 Dec 2026">8 Dec 2026</option>
              <option value="9 Dec 2026">9 Dec 2026</option>
              <option value="10 Dec 2026">10 Dec 2026</option>
              <option value="11 Dec 2026">11 Dec 2026</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-xs text-gray-700">
              Preferred Time <span className="text-orange-500">*</span>
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full p-3.5 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none text-sm text-gray-900 transition-colors bg-white appearance-none"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E\")",
                backgroundPosition: "right 1rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1rem"
              }}
            >
              <option value="" disabled>Select time</option>
              <option value="Morning (10 AM - 12 PM)">Morning (10 AM - 12 PM)</option>
              <option value="Afternoon (1 PM - 3 PM)">Afternoon (1 PM - 3 PM)</option>
              <option value="Late Afternoon (3 PM - 5 PM)">Late Afternoon (3 PM - 5 PM)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 disabled:bg-neutral-400 disabled:cursor-not-allowed mt-2 flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Submitting..." : "Request a Meeting"}
          {!isSubmitting && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          )}
        </button>

        <div className="flex items-center justify-center gap-1.5 mt-4 text-gray-400 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
          </svg>
          <p>Your information is safe with us. We respect your privacy.</p>
        </div>
      </form>
    </div>
  );
};

export default GitexForm;
