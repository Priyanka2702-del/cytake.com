"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Cpu, Users, Rocket, Briefcase, MapPin } from "lucide-react";

const milestones = [
  { year: "2023", title: "Founded with a Vision", desc: "Cytake Global was founded with a vision to revolutionize the Forex and FinTech industry through innovative technology solutions" },
  { year: "2024", title: "Forex Ecosystem Development", desc: "Built a strong ecosystem of Forex CRM, Broker Management Systems, Trading Infrastructure, and Automation Solutions." },
  { year: "2025", title: "Global Broker Expansion", desc: "Expanded globally, supporting 50+ brokers and financial businesses with White Label Solutions, MT4/MT5 Integration, Copy Trading, AI Tools, and Brokerage Technology." },
  { year: "2026", title: "Worldwide Forex Solutions", desc: "Serving clients worldwide with trusted, scalable, and high-performance Forex solutions, helping brokers launch, grow, and succeed in competitive markets." },
];

const values = [
  { icon: Shield, title: "Security First", desc: "We build with security at the foundation — not as an afterthought. Every system is hardened to enterprise standards." },
  { icon: Globe, title: "Global Mindset", desc: "Our team and clients span 6 continents. We think and build for the global market from day one." },
  { icon: Rocket, title: "Relentless Innovation", desc: "The forex and fintech industry evolves fast. We stay ahead so our clients don't have to." },
  { icon: Users, title: "Client Partnership", desc: "We treat every client as a long-term partner, not a transaction. Your success is our success." },
  { icon: Cpu, title: "Technical Excellence", desc: "Engineering rigor and attention to detail in every line of code and every system we deploy." },
  { icon: Briefcase, title: "Industry Expertise", desc: "Deep, genuine domain knowledge in forex and fintech — not generalists pretending to specialize." },
];

const team = [
  { name: "Chandrakaant Singh", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/chandrakantr62?utm_source=share_via&utm_content=profile&utm_medium=member_ios", desc: "Chandrakant Singh is a technology entrepreneur and business leader with over 12 years of experience in Blockchain, FinTech, AI, Cybersecurity, and Digital Transformation. As the CEO of CyTake and Shivacha Technologies, he has led the development and deployment of innovative solutions across cryptocurrency exchanges, brokerage infrastructure, payment systems, tokenization platforms, and enterprise blockchain applications.", image: "/chadrakantsir.jpeg" },
  { name: "Aayush Verma", role: "Co-Founder & Chief Growth Officer (CGO)", linkedin: "https://www.linkedin.com/in/aayush-verma84?utm_source=share_via&utm_content=profile&utm_medium=member_ios", desc: "Aayush Verma is the Co-Founder and Chief Growth Officer of CYTAKE Global, where he leads business growth, strategic partnerships, and global expansion initiatives. With a strong focus on forex and fintech technology, he works closely with brokers, prop firms, and financial institutions to deliver innovative solutions that drive efficiency and growth. His expertise spans Forex CRM systems, White Label Brokerage Solutions, Trading Platform Integrations, AI-powered automation, and business development. Passionate about innovation and customer success, Aayush is committed to building CYTAKE Global into a trusted global technology partner for the forex and fintech industry.", image: "/ayushsir.jpeg" },
];

const bdTeam = [
  { name: "Sarah Johnson", role: "Business Development Executive", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Emily Davis", role: "Client Relations Manager", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { name: "Jessica Williams", role: "Partnership Lead", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80" },
  { name: "Michael Brown", role: "Sales Development Executive", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "David Wilson", role: "Market Expansion Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" },
];

function TeamCard({ member }: { member: any }) {
  const [expanded, setExpanded] = useState(false);
  const MAX = 120;
  const isLong = member.desc.length > MAX;

  return (
    <div className="group flex flex-col rounded-3xl overflow-hidden transition-all duration-500 h-full border border-[var(--section-card-border)] hover:border-sky-400/30 hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)]">
      <div className="relative h-[360px] sm:h-[460px] md:h-[520px] lg:h-[580px] overflow-hidden">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      <div className="p-7 sm:p-8 flex flex-col flex-1 bg-[var(--card-content-bg)]">
        <h3 className="text-xl font-black mb-1 transition-colors text-[var(--card-content-text)] group-hover:text-sky-500">{member.name}</h3>
        <p className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4">{member.role}</p>
        <div className="w-10 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 mb-4 group-hover:w-20 transition-all duration-500" />
        <p className="text-[var(--card-content-muted)] text-sm leading-relaxed mb-4 flex-1">
          {isLong && !expanded ? `${member.desc.slice(0, MAX)}...` : member.desc}
          {isLong && (
            <button onClick={() => setExpanded(!expanded)} className="text-sky-500 font-bold ml-1 hover:text-sky-400 transition-colors focus:outline-none">
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
        <div className="flex gap-2 pt-4 border-t border-[var(--section-card-border)]">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-[var(--section-card-bg)] border border-[var(--section-card-border)] text-[var(--card-content-muted)] hover:bg-blue-600 hover:text-white hover:border-blue-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--section-bg-1)]">
        {/* gradient base */}
        <div className="fixed inset-0 z-0" style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }} />

        {/* ============ GLOBAL BACKGROUND ============ */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px]" animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px]" animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

          <motion.div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

          <motion.div className="absolute inset-0 opacity-30" animate={{ x: ["-3%", "3%", "-3%"] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
              <motion.path d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} />
              {[70, 210, 350, 490, 630, 770, 910, 1050, 1190, 1330].map((cx, i) => (
                <g key={i}>
                  <line x1={cx} y1={[455, 425, 385, 355, 325, 295, 275, 255, 235, 205][i]} x2={cx} y2={[525, 495, 495, 465, 435, 405, 375, 355, 335, 305][i]} stroke="#22C55E" strokeWidth="1.5" opacity="0.5" />
                  <rect x={cx - 6} y={[470, 440, 400, 370, 340, 310, 290, 270, 250, 220][i]} width="12" height="30" fill="#22C55E" opacity="0.4" rx="1.5" />
                </g>
              ))}
            </svg>
          </motion.div>

          <motion.div className="absolute inset-0 opacity-30" animate={{ x: ["2%", "-2%", "2%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
              <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
            </svg>
          </motion.div>

          {[{ top: "25%", delay: 0, duration: 16 }, { top: "50%", delay: 5, duration: 20 }, { top: "72%", delay: 9, duration: 18 }].map((dot, i) => (
            <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]" style={{ top: dot.top, left: "-2%" }} animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }} transition={{ duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay, opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity } }} />
          ))}
        </div>

        {/* ============ CONTENT ============ */}
        <div className="relative z-10 pt-20">
          {/* ===== HERO ===== */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                  <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">About CYTAKE Global</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--section-text)] mb-6 leading-tight">
                    Building the Technology{" "}
                    <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">That Powers Forex</span>
                  </h1>
                  <p className="text-[var(--section-text-muted)] text-lg leading-relaxed mb-6">
                    CYTAKE Global is a forex and fintech infrastructure company founded to give brokers and trading businesses access to the same enterprise-grade technology used by the world&apos;s largest financial institutions.
                  </p>
                  <p className="text-[var(--section-text-muted)] text-base leading-relaxed mb-10">
                    We believe that every serious forex and fintech business deserves access to world-class infrastructure — not just the ones with massive budgets.
                  </p>
                  <div className="flex gap-6 flex-wrap">
                    {[{ val: "200+", label: "Clients Served" }, { val: "50+", label: "Countries" }, { val: "7+", label: "Years" }].map((s, i) => (
                      <div key={i} className="bg-[var(--section-card-bg)] border border-[var(--section-card-border)] rounded-2xl px-5 py-3">
                        <div className="text-3xl font-black bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">{s.val}</div>
                        <div className="text-xs text-[var(--section-text-muted)] font-medium uppercase tracking-widest mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                  <div className="relative backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] bg-[var(--section-card-bg)] border border-[var(--section-card-border)]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 rounded-t-3xl" />
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg mb-8">
                      <Rocket size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-[var(--section-text)] mb-6">Our Mission</h3>
                    <blockquote className="text-lg font-medium text-[var(--section-text-muted)] leading-relaxed mb-8 border-l-2 border-sky-400 pl-6">
                      &ldquo;To provide every forex and fintech business with the enterprise technology they need to compete globally — delivered faster, better, and more reliably than anyone else.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 border-t border-[var(--section-card-border)] pt-6">
                      <div className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-500 font-black text-xs">CG</div>
                      <div>
                        <p className="text-sm font-bold text-[var(--section-text)]">CYTAKE Leadership</p>
                        <p className="text-xs text-[var(--section-text-muted)]">Global Operations Team</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ===== VALUES ===== */}
          <section id="why" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--section-card-border)] to-transparent" />
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Our Values</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                  What We{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Stand For</span>
                </h2>
                <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">The principles that guide how we build, deliver, and support our clients.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {values.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl p-7 hover:-translate-y-1 transition-all bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-sky-400/30">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all">
                      <Icon size={20} className="text-sky-500" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--section-text)] mb-2 group-hover:text-sky-500 transition-colors">{title}</h3>
                    <p className="text-[var(--section-text-muted)] text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== OUR TEAM ===== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Leadership</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                  Meet the{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">People Behind CYTAKE</span>
                </h2>
                <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">A global team of forex technology experts dedicated to your success.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {team.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </section>

          {/* ===== BD TEAM ===== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Business Development</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                  Our{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Growth Team</span>
                </h2>
                <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">Dedicated professionals driving partnerships, client success, and global expansion.</p>
              </motion.div>

              {/* Top Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 max-w-5xl mx-auto">
                {bdTeam.slice(0, 3).map((member, i) => (
                  <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="group relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-sky-400/30 hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                    <div className="relative h-80 overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-5 text-center bg-[var(--card-content-bg)]">
                      <h3 className="font-black text-base mb-1 transition-colors text-[var(--card-content-text)] group-hover:text-sky-500">{member.name}</h3>
                      <p className="text-sky-500 text-xs font-semibold">{member.role}</p>
                      <div className="w-10 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-3 scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {bdTeam.slice(3, 5).map((member, i) => (
                  <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="group relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-sky-400/30 hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                    <div className="relative h-80 overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-5 text-center bg-[var(--card-content-bg)]">
                      <h3 className="font-black text-base mb-1 transition-colors text-[var(--card-content-text)] group-hover:text-sky-500">{member.name}</h3>
                      <p className="text-sky-500 text-xs font-semibold">{member.role}</p>
                      <div className="w-10 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-3 scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== TIMELINE ===== */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Our Story</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                  7+ Years of{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Building Excellence</span>
                </h2>
              </motion.div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400 via-blue-600 to-transparent" />
                <div className="space-y-8">
                  {milestones.map(({ year, title, desc }, i) => (
                    <motion.div key={year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative flex items-start gap-8 pl-20 group">
                      <div className="absolute left-4 -translate-x-1/2 w-9 h-9 rounded-full bg-sky-500/20 border-2 border-sky-400 flex items-center justify-center text-xs font-black text-sky-500 shrink-0 mt-1 group-hover:bg-sky-500 group-hover:text-white transition-all">{year.slice(2)}</div>
                      <div className="rounded-2xl p-6 flex-1 transition-colors bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-sky-400/20">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-black text-sky-500 uppercase tracking-widest bg-sky-500/10 px-2 py-1 rounded-md">{year}</span>
                          <h3 className="text-base font-bold text-[var(--section-text)]">{title}</h3>
                        </div>
                        <p className="text-[var(--section-text-muted)] text-sm leading-relaxed">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===== GLOBAL PRESENCE ===== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Global Presence</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                  A Truly{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Global Operation</span>
                </h2>
                <p className="text-[var(--section-text-muted)] text-lg mb-12 max-w-2xl mx-auto">Our technology delivery team operates across multiple time zones, ensuring round-the-clock coverage for clients in every region.</p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { region: "Europe", hubs: "London, Cyprus, Malta" },
                  { region: "Middle East", hubs: "Dubai, Bahrain" },
                  { region: "Asia Pacific", hubs: "Singapore, Hong Kong" },
                  { region: "South Asia", hubs: "India Operations" },
                  { region: "Africa", hubs: "South Africa, Mauritius" },
                  { region: "Americas", hubs: "Cayman Islands, BVI" },
                ].map(({ region, hubs }, i) => (
                  <motion.div key={region} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group rounded-2xl p-5 hover:-translate-y-1 transition-all bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-sky-400/30">
                    <div className="w-9 h-9 rounded-full bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-500/20 transition-colors">
                      <MapPin size={16} className="text-sky-500" />
                    </div>
                    <div className="text-sm font-bold text-[var(--section-text)] mb-1">{region}</div>
                    <div className="text-[10px] text-[var(--section-text-muted)] font-medium">{hubs}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== CTA — dark navy banner both modes ===== */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B1B3F] via-[#0d2456] to-[#0B1B3F] p-10 sm:p-16 text-center border border-white/5 shadow-[0_30px_80px_rgba(11,27,63,0.6)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-blue-500/25 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-sky-500/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                    Ready to Partner with{" "}
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">CYTAKE?</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Join 200+ brokers and prop firms powered by our enterprise infrastructure.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 justify-center rounded-xl px-8 py-4 text-base font-bold text-black bg-white hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:-translate-y-0.5">
                      Get a Free Consultation <ArrowRight size={16} />
                    </Link>
                    <Link href="/solutions" className="inline-flex items-center gap-2 justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-all hover:-translate-y-0.5">
                      Explore Solutions
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}