"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Do you develop the same solution for everybody, or every strategy is unique?",
        a: "Every strategy is developed in accordance with industry, audience, and your goals. We don't run generic campaigns for everyone."
    },
    {
        q: "Can you work with a startup in the early days?",
        a: "Yes, we work with startups and small to established businesses. We customize the approach to your needs and expansion."
    },
    {
        q: "Where is Binjwa IT Solutions based?",
        a: "We are located in Indore, India, although our clients are from different parts of the world. Since most of our work — strategy, campaigns, reporting — happens online, location isn't a barrier to how closely we work together."
    },
    {
        q: "What are the benefits of digital marketing?",
        a: "Digital marketing allows you to connect with your target audience on the internet and convert them into your customers by offering them the right content at the right moment."
    },
    {
        q: "How do I get started with digital marketing?",
        a: "Jump right into it! Start with a digital marketing channel which suits your business category – mostly SEO and social media. We can help you discover which marketing channels your customers prefer."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 px-8 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
                        FAQ
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className="rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.1)] hover:-translate-y-1 transition-all duration-300 border border-neutral-200 overflow-hidden shadow-sm hover:border-orange-200 "
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                >
                                    <span className="font-bold text-neutral-900 pr-8">
                                        {faq.q}
                                    </span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-orange-100 text-orange-600  ' : 'bg-neutral-100 text-neutral-500  '}`}>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4 whitespace-pre-wrap">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

