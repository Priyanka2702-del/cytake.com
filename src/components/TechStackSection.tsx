"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, CreditCard, CheckCircle2 } from "lucide-react";
import { techStack } from "@/lib/data";

export default function TechStackSection() {
  // ✅ Safety check
  const doubled = techStack ? [...techStack, ...techStack] : [];

  const columns = [
    {
      title: "Trading Platforms",
      icon: Cpu,
      color: "from-blue-600 to-sky-500",
      glow: "rgba(59,130,246,0.4)",
      glowSoft: "rgba(59,130,246,0.12)",
      items: ["MetaTrader 4 (MT4)", "MetaTrader 5 (MT5)", "cTrader", "Proprietary APIs", "FIX Protocol"],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-indigo-600 to-blue-500",
      glow: "rgba(99,102,241,0.4)",
      glowSoft: "rgba(99,102,241,0.12)",
      items: ["Amazon Web Services", "Google Cloud Platform", "Kubernetes", "Docker", "LD4 / NY4 Colocation"],
    },
    {
      title: "Payments & Liquidity",
      icon: CreditCard,
      color: "from-sky-500 to-cyan-400",
      glow: "rgba(14,165,233,0.4)",
      glowSoft: "rgba(14,165,233,0.12)",
      items: ["50+ PSP Integrations", "Crypto (BTC, ETH, USDT)", "Tier-1 LP Connectivity", "SWIFT / SEPA", "PCI-DSS Compliant"],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--section-bg-1)]">
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }} />

      <motion.div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px] pointer-events-none" animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      <motion.div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

      <motion.div className="absolute inset-0 pointer-events-none opacity-50" animate={{ x: ["-3%", "3%", "-3%"] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}>
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

      <motion.div className="absolute inset-0 pointer-events-none opacity-40" animate={{ x: ["2%", "-2%", "2%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.div>

      {[{ top: "25%", delay: 0, duration: 16 }, { top: "50%", delay: 5, duration: 20 }, { top: "72%", delay: 9, duration: 18 }].map((dot, i) => (
        <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] pointer-events-none" style={{ top: dot.top, left: "-2%" }} animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }} transition={{ duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay, opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity } }} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
            Powered by <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">World-Class Technology</span>
          </h2>
          <p className="text-[var(--section-text-muted)] text-lg max-w-xl mx-auto">Industry-standard platforms and cutting-edge cloud infrastructure.</p>
        </motion.div>

        {/* MARQUEE — uses animate-marquee from tailwind.config */}
        <div className="relative overflow-hidden py-2 mb-14">
          <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, var(--section-fade), transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, var(--section-fade), transparent)` }} />

          <div className="animate-marquee flex gap-4 w-max">
            {doubled.map((tech, i) => (
              <motion.div key={i} whileHover={{ y: -6, scale: 1.05 }} className="group relative rounded-2xl shrink-0 min-w-[140px] cursor-default">
                <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px] pointer-events-none bg-gradient-to-br from-sky-400/30 via-blue-500/15 to-indigo-400/30" />
                <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 shadow-[0_2px_8px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_25px_rgba(56,189,248,0.12)]" />

                <div className="relative rounded-2xl px-6 py-4 flex flex-col items-center gap-1 z-[3] backdrop-blur-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] transition-all duration-500 group-hover:border-sky-400/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-sm font-bold text-[var(--section-text)] whitespace-nowrap group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  <span className="text-[10px] text-sky-500 uppercase tracking-wider font-semibold">{tech.category}</span>
                  <div className="absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DETAIL COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div key={col.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.12 }} whileHover={{ y: -8 }} className="group relative rounded-3xl cursor-default h-full">

                <div className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${col.glow}, transparent 50%, ${col.glow})` }} />

                <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.12),0_12px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.15),0_20px_60px_rgba(0,0,0,0.12)]" />

                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ boxShadow: `0 20px 60px ${col.glow}, 0 8px 25px ${col.glowSoft}` }} />

                {/* ✅ FIX: Spinning border uses Tailwind animate-spin with slow speed */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none z-[1]">
                  <div className="absolute inset-[-100%] animate-spin" style={{ animationDuration: "4s", background: `conic-gradient(from 0deg, transparent, ${col.glow}, transparent 30%)` }} />
                </div>

                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-[2]">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-20deg]" />
                </div>

                <div className="relative rounded-3xl p-7 h-full z-[3] flex flex-col backdrop-blur-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] transition-all duration-500 group-hover:border-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.1)]">
                  <div className="absolute top-0 left-[8%] right-[8%] h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, transparent, ${col.glow}, transparent)` }} />
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${col.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-t-3xl`} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{ background: `radial-gradient(ellipse at 50% 0%, ${col.glowSoft}, transparent 60%)` }} />

                  <div className="relative mb-5">
                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${col.color} flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_6px_25px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-all duration-500`}>
                      <Icon size={22} className="text-white drop-shadow-sm" />
                      <div className="absolute -inset-1.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" style={{ background: col.glow }} />
                    </div>
                  </div>

                  <h4 className="relative z-10 text-sm font-black text-[var(--section-text)] uppercase tracking-widest mb-5 group-hover:text-white transition-colors duration-300">{col.title}</h4>

                  <ul className="space-y-3.5 relative z-10 flex-1">
                    {col.items.map((item, i) => (
                      <motion.li key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.1 + i * 0.05 }} className="flex items-center gap-2.5 text-sm text-[var(--section-text-muted)] group-hover:text-white/80 transition-colors duration-300">
                        <div className="relative shrink-0">
                          <CheckCircle2 size={15} className="text-sky-500 group-hover:text-sky-400 transition-colors duration-300" />
                          <div className="absolute inset-0 bg-sky-400/30 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 relative z-10">
                    <div className="h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(to right, ${col.glow}, transparent)` }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}