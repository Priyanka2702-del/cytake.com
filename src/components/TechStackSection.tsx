"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, CreditCard, CheckCircle2 } from "lucide-react";
import { techStack } from "@/lib/data";

export default function TechStackSection() {
  const doubled = [...techStack, ...techStack];

  const columns = [
    {
      title: "Trading Platforms",
      icon: Cpu,
      color: "from-blue-600 to-sky-500",
      items: ["MetaTrader 4 (MT4)", "MetaTrader 5 (MT5)", "cTrader", "Proprietary APIs", "FIX Protocol"],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-indigo-600 to-blue-500",
      items: ["Amazon Web Services", "Google Cloud Platform", "Kubernetes", "Docker", "LD4 / NY4 Colocation"],
    },
    {
      title: "Payments & Liquidity",
      icon: CreditCard,
      color: "from-sky-500 to-cyan-400",
      items: ["50+ PSP Integrations", "Crypto (BTC, ETH, USDT)", "Tier-1 LP Connectivity", "SWIFT / SEPA", "PCI-DSS Compliant"],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0A1628] to-[#020617]">

      {/* ============ SAME BACKGROUND AS STATSSECTION ============ */}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px] pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Trading Chart */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-50"
        animate={{ x: ["-3%", "3%", "-3%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <motion.path
            d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          {[70,210,350,490,630,770,910,1050,1190,1330].map((cx, i) => (
            <g key={i}>
              <line
                x1={cx} y1={[455,425,385,355,325,295,275,255,235,205][i]}
                x2={cx} y2={[525,495,495,465,435,405,375,355,335,305][i]}
                stroke="#22C55E" strokeWidth="1.5" opacity="0.5"
              />
              <rect
                x={cx - 6} y={[470,440,400,370,340,310,290,270,250,220][i]}
                width="12" height="30"
                fill="#22C55E" opacity="0.4" rx="1.5"
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Lower Dashed Chart Line */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        animate={{ x: ["2%", "-2%", "2%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path
            d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455"
            fill="none"
            stroke="#6366F1"
            strokeWidth="1.5"
            strokeDasharray="6 10"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Glowing Traveling Dots */}
      {[
        { top: "25%", delay: 0, duration: 16 },
        { top: "50%", delay: 5, duration: 20 },
        { top: "72%", delay: 9, duration: 18 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] pointer-events-none"
          style={{ top: dot.top, left: "-2%" }}
          animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "linear",
            delay: dot.delay,
            opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity },
          }}
        />
      ))}

      {/* ============ CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-bold text-sky-400 tracking-wide uppercase">Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Powered by{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              World-Class Technology
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Industry-standard platforms and cutting-edge cloud infrastructure.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-2 mb-14">
          {/* Fade edges matching dark bg */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-4 w-max">
            {doubled.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group relative rounded-2xl px-6 py-4 flex flex-col items-center gap-1 shrink-0 min-w-[140px] bg-white/[0.04] backdrop-blur-sm border border-white/10 shadow-md hover:shadow-[0_15px_35px_rgba(56,189,248,0.2)] hover:border-sky-400/30 transition-all duration-300"
              >
                {/* Top gradient bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="text-sm font-bold text-white whitespace-nowrap">{tech.name}</span>
                <span className="text-[10px] text-sky-400 uppercase tracking-wider font-semibold">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detail Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl p-[1.5px] overflow-hidden hover:shadow-[0_25px_60px_rgba(56,189,248,0.2)] transition-shadow duration-500"
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,#0ea5e9,transparent_30%)] animate-spin-slow`} />
                </div>

                {/* Card Inner - Dark Glass */}
                <div className="relative rounded-3xl bg-white/[0.04] backdrop-blur-sm border border-white/10 group-hover:border-sky-400/20 p-7 h-full transition-colors duration-300">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${col.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>

                  <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">
                    {col.title}
                  </h4>

                  <ul className="space-y-3">
                    {col.items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 + i * 0.05 }}
                        className="flex items-center gap-2.5 text-sm text-slate-400 group-hover:text-slate-200 transition-colors"
                      >
                        <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Custom animation for border spin */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}