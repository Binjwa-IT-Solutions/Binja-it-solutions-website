"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Volume2,
  Cpu,
  Share2,
  CheckCircle2,
  Sparkles,
  Play,
  Pause,
  MessageCircle,
  FileText,
  Clock,
  Zap,
  Sliders,
  ShieldAlert
} from "lucide-react";

export default function BinjAiVoiceEngine({ onOpenDemo }) {
  const [activePersona, setActivePersona] = useState("realestate");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [whatsappDispatched, setWhatsappDispatched] = useState(false);

  const personas = {
    realestate: {
      name: "Aarav Sharma",
      role: "Luxury Property Closer",
      voiceStyle: "Authoritative, Warm & Reassuring",
      accent: "Indian Neutral / English & Hindi",
      latency: "230ms",
      dialogues: [
        {
          speaker: "AI Agent",
          text: "Namaste Rohit! I saw you submitted an inquiry for 3 BHK villas in Sarjapur on Instagram. Are you planning for personal living or investment?",
          time: "00:03"
        },
        {
          speaker: "Lead",
          text: "Personal living actually, but I need possession by Diwali. Do you have ready-to-move options?",
          time: "00:09"
        },
        {
          speaker: "AI Agent",
          text: "Yes, Phase 1 has 4 ready villas with OC received. I'm dispatching the brochure and price sheet directly to your WhatsApp right now. Would Saturday 11 AM work for an exclusive site visit?",
          time: "00:16"
        }
      ],
      whatsappDoc: "Villas_Sarjapur_Brochure_Floorplan.pdf",
      intentScore: "98% High Buyer Intent"
    },
    b2b: {
      name: "Priya Nair",
      role: "Enterprise B2B SDR",
      voiceStyle: "Sharp, Professional & Consultative",
      accent: "Global English",
      latency: "270ms",
      dialogues: [
        {
          speaker: "AI Agent",
          text: "Hi Vikram! Priya here from BinjAI. Saw your team clicked our ad on streamlining Meta lead response times. How are you currently routing paid leads?",
          time: "00:02"
        },
        {
          speaker: "Lead",
          text: "Our SDR team calls them manually, but honestly, by the time they call after 4 hours, the lead is completely cold.",
          time: "00:08"
        },
        {
          speaker: "AI Agent",
          text: "That 4-hour delay usually causes an 80% drop in qualification. With BinjAI, your agent calls within 15 seconds. Let me ping you our case study on WhatsApp and book 15 minutes with our VP of Solutions.",
          time: "00:15"
        }
      ],
      whatsappDoc: "Enterprise_SDR_Benchmark_Report.pdf",
      intentScore: "94% Qualified Pipeline"
    },
    fintech: {
      name: "Karan Mehta",
      role: "Commercial Loan Advisor",
      voiceStyle: "Trust-centric, Empathetic & Compliant",
      accent: "English & Hinglish",
      latency: "210ms",
      dialogues: [
        {
          speaker: "AI Agent",
          text: "Hello Sunil ji, this is Karan from BinjAI Capital. You recently inquired about our working capital line of credit. Are you looking to expand inventory this quarter?",
          time: "00:03"
        },
        {
          speaker: "Lead",
          text: "Haanji, we need around 50 lakhs for festive stock orders within two weeks. What are the documents needed?",
          time: "00:11"
        },
        {
          speaker: "AI Agent",
          text: "Just 6 months bank statement and GST returns. I have just triggered a pre-filled secure upload link to your WhatsApp. You can upload in 2 minutes for same-day in-principle sanction.",
          time: "00:18"
        }
      ],
      whatsappDoc: "FastTrack_KYC_Sanction_Checklist.pdf",
      intentScore: "99% High Urgency Borrower"
    }
  };

  const current = personas[activePersona];

  const handleToggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const handleTriggerWhatsApp = () => {
    setWhatsappDispatched(true);
    setTimeout(() => {
      setWhatsappDispatched(false);
    }, 3500);
  };

  return (
    <section id="voice-agents" className="relative py-28 bg-[#07070b] text-white border-t border-white/5 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ========================================================
              LEFT COLUMN: ARCHITECTURE DETAILS & KEY HIGHLIGHTS
             ======================================================== */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
                <Cpu size={13} />
                <span>Deep Dive: The Engine</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5 text-white">
                Human-Like AI Voice Agents Built for High Conversions
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                Most voice bots sound like 2012 IVRs. BinjAI is an autonomous neural voice intelligence system engineered specifically to handle sales hesitation, objections, and spontaneous interruptions in local accents.
              </p>
            </div>

            {/* Feature 1: Human-Like Cadence */}
            <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                  <span>Human-Like Cadence</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    ~200-300ms Latency
                  </span>
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Ultra-low latency (~200-300ms) conversational flow with dynamic turn-taking and smart interruption handling. When the prospect cuts in or speaks mid-sentence, the agent pauses naturally and recalibrates without tripping.
                </p>
              </div>
            </div>

            {/* Feature 2: Custom Persona Studio */}
            <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                <Sliders size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">Custom Persona Studio</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Tailor scripts, objection trees, and voice timbres specifically for high-conversion real estate pitches, high-ticket SaaS qualification, or fintech loan screening across English, Hindi, and regional dialects.
                </p>
              </div>
            </div>

            {/* Feature 3: Omnichannel Sync */}
            <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Share2 size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">Omnichannel Sync</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Instant dispatch of WhatsApp follow-ups, brochures, calendar invites, or payment links mid-call. While the lead is still on the line, documents arrive on their phone for instant verification.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE UI PREVIEW / SIMULATOR
             ======================================================== */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0b0b12] border border-white/10 p-6 sm:p-7 shadow-[0_0_60px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
              {/* Header: Persona Switcher */}
              <div className="flex flex-wrap items-center justify-between pb-5 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-white uppercase">
                    Persona Simulator
                  </span>
                </div>

                {/* Persona Tabs */}
                <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/5">
                  <button
                    onClick={() => setActivePersona("realestate")}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                      activePersona === "realestate"
                        ? "bg-orange-500 text-white shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Real Estate
                  </button>
                  <button
                    onClick={() => setActivePersona("b2b")}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                      activePersona === "b2b"
                        ? "bg-orange-500 text-white shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    B2B SDR
                  </button>
                  <button
                    onClick={() => setActivePersona("fintech")}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                      activePersona === "fintech"
                        ? "bg-orange-500 text-white shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    FinTech
                  </button>
                </div>
              </div>

              {/* Active Persona Profile Card */}
              <div className="mt-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-500 to-indigo-600 p-[1px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-sm text-orange-400">
                      {current.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{current.name}</div>
                    <div className="text-xs text-neutral-400">{current.role}</div>
                  </div>
                </div>

                <div className="text-right text-[11px] font-mono">
                  <div className="text-neutral-400">Measured Latency: <strong className="text-green-400">{current.latency}</strong></div>
                  <div className="text-neutral-400">Voice: <strong className="text-neutral-200">{current.accent}</strong></div>
                </div>
              </div>

              {/* Live Audio Equalizer & Playback Simulation */}
              <div className="mt-4 p-4 rounded-2xl bg-black/60 border border-white/5 flex items-center justify-between gap-4">
                <button
                  onClick={handleToggleAudio}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                >
                  {isPlayingAudio ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>

                {/* Animated Audio Waveform */}
                <div className="flex-1 flex items-center justify-center gap-1.5 h-10 overflow-hidden">
                  {[25, 45, 80, 55, 90, 70, 100, 60, 85, 30, 95, 40, 75, 60, 85, 35, 90, 50].map((h, i) => (
                    <span
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-orange-500 to-amber-300 rounded-full transition-all duration-150"
                      style={{
                        height: isPlayingAudio ? `${h}%` : `${Math.max(15, h * 0.3)}%`,
                        animation: isPlayingAudio ? `pulse 0.8s ease-in-out infinite ${i * 0.05}s` : "none",
                      }}
                    />
                  ))}
                </div>

                <div className="text-right text-[11px] font-mono text-neutral-400 shrink-0">
                  <span className="text-green-400 block font-semibold">Live Synthetic Stream</span>
                  <span className="text-[10px]">Neural 48kHz</span>
                </div>
              </div>

              {/* Transcript Chat Log */}
              <div className="mt-4 space-y-3 p-4 rounded-2xl bg-black/40 border border-white/5 text-xs max-h-56 overflow-y-auto">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest pb-1 border-b border-white/5">
                  Real-time Conversation Transcript
                </div>

                {current.dialogues.map((dialogue, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl ${
                      dialogue.speaker === "AI Agent"
                        ? "bg-orange-500/10 border border-orange-500/20 text-neutral-200"
                        : "bg-white/[0.04] border border-white/5 text-neutral-300"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span
                        className={dialogue.speaker === "AI Agent" ? "text-orange-400 font-bold" : "text-neutral-400"}
                      >
                        {dialogue.speaker}
                      </span>
                      <span className="text-neutral-500">{dialogue.time}</span>
                    </div>
                    <p className="leading-relaxed">{dialogue.text}</p>
                  </div>
                ))}
              </div>

              {/* Mid-Call Omnichannel WhatsApp Trigger Action */}
              <div className="mt-4 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Mid-Call Omnichannel Action</div>
                    <div className="text-[11px] text-neutral-400 flex items-center gap-1">
                      <FileText size={11} className="text-emerald-400" />
                      <span>{current.whatsappDoc}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleTriggerWhatsApp}
                  disabled={whatsappDispatched}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-black transition-all shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)] disabled:opacity-80"
                >
                  {whatsappDispatched ? "Dispatched ✓" : "Trigger WhatsApp"}
                </button>
              </div>

              {whatsappDispatched && (
                <div className="mt-2 text-[11px] font-mono text-emerald-400 text-center animate-pulse">
                  ✓ Document & booking link delivered to lead's WhatsApp in 420ms
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

