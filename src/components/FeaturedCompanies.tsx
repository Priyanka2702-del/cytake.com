"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Business Insider", domain: "businessinsider.com" },
  { name: "FX Empire", domain: "fxempire.com" },
  { name: "FX Street", domain: "fxstreet.com" },
  { name: "Yahoo Finance", domain: "finance.yahoo.com" },
  { name: "Business Wire", domain: "businesswire.com" },
  { name: "Reuters", domain: "reuters.com" },
  { name: "Bloomberg", domain: "bloomberg.com" },
  { name: "Forbes", domain: "forbes.com" },
];

export default function FeaturedCompanies() {
  return (
    <section className="relative py-16 overflow-hidden bg-[var(--section-bg-1)]">
      {/* gradient overlay via tokens */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)`,
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-[-50%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"
        animate={{ x: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-50%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none"
        animate={{ x: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Glowing Traveling Dots */}
      {[
        { top: "30%", delay: 0, duration: 16 },
        { top: "65%", delay: 6, duration: 20 },
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
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.3em] mb-3">
            ✦ As Featured In ✦
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--section-text)] tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              industry leaders
            </span>
          </h2>
        </div>

        {/* Infinite Scroll */}
        <div className="relative flex overflow-hidden">

          {/* Left Fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, var(--section-fade), transparent)` }}
          />

          <motion.div
            className="flex gap-6 whitespace-nowrap py-2"
            animate={{ x: [0, -1800] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="group relative flex items-center gap-3 px-6 py-3 rounded-full min-w-fit cursor-default"
              >
                {/* ── Layer 1: Outer Glow (hover) ── */}
                <div className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px] pointer-events-none bg-gradient-to-r from-sky-400/30 via-blue-500/20 to-indigo-400/30" />

                {/* ── Layer 2: Deep Shadow ── */}
                <div className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500
                  shadow-[0_2px_8px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.04)]
                  group-hover:shadow-[0_8px_25px_rgba(56,189,248,0.12),0_15px_40px_rgba(56,189,248,0.08)]"
                />

                {/* ── Layer 3: Shine Sweep ── */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-[-20deg]" />
                </div>

                {/* ── Card Body ── */}
                <div className="relative flex items-center gap-3 z-[2]
                  rounded-full px-6 py-3
                  backdrop-blur-xl
                  border border-white/[0.08]
                  bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01]
                  transition-all duration-500
                  group-hover:border-sky-400/30
                  group-hover:from-white/[0.1] group-hover:via-sky-500/[0.03] group-hover:to-indigo-500/[0.02]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.08)]
                  group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)]"
                >
                  {/* Top highlight line */}
                  <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`}
                    alt={company.name}
                    className="relative z-10 h-6 w-6 object-contain rounded bg-white/10 p-0.5 group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <span className="relative z-10 text-sm font-black tracking-wider uppercase transition-colors duration-300 text-[var(--section-text-muted)] group-hover:text-[var(--section-text)]">
                    {company.name}
                  </span>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-[25%] right-[25%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, var(--section-fade), transparent)` }}
          />

        </div>
      </div>
    </section>
  );
}