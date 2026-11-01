"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is exactly Agentic AI?",
        a: "Agentic AI is the technology behind AI which can think, make decisions, and perform actions independently without any help from humans. In contrast to the simple automation that uses set rules, AI agents can deal with complicated tasks step by step with intelligent reasoning."
    },
    {
        q: "What makes Agentic AI different from standard automation?",
        a: "Standard automation uses the set of rules — if this, then that. Agentic AI performs much more complicated tasks with intelligent reasoning, pattern recognition and learning and adaptation according to the current context and circumstances. Standard automation is similar to the basic machine while Agentic AI corresponds to the skilled employee."
    },
    {
        q: "Do I need any tech knowledge for using your AI solutions?",
        a: "No, of course not! We do everything ourselves — we develop, implement and teach your team how to work with AI. Our solutions are meant to be user-friendly and require absolutely no technical skills from you at all. All you need is the ability to work with WhatsApp!"
    },
    {
        q: "Will the AI replace my team members?",
        a: "Certainly not! This point is extremely crucial. AI will do all the jobs that take up time and no brainpower, whereas humans would be left to do those tasks that need human intelligence and involve, for instance, strategic decision making, developing relations, and so forth."
    },
    {
        q: "What happens after my AI solution is launched?",
        a: "We don’t just disappear after deployment. Here's what you can expect after the launch:\n\n* Performance monitoring – we identify problems before they impact your business\n* Bug fixes and software updates – quick and effortless process\n* Continuous optimization – we enhance your solution as your business evolves\n* Team support – we are just a phone call or WhatsApp away\n* Feature additions — need something new? We already know your system inside out\n\nWe will be your long-term AI partner and not a vendor that goes away once an invoice is paid."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 px-8 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
                        Frequently Asked Questions
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

