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
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0A1628] to-[#020617]">

      {/* ============ SAME BACKGROUND AS STATSSECTION ============ */}

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
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]"
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
          <p className="text-xs font-bold text-sky-400 uppercase tracking-[0.3em] mb-3">
            ✦ As Featured In ✦
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              industry leaders
            </span>
          </h2>
        </div>

        {/* Infinite Scroll */}
        <div className="relative flex overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-[#020617] to-transparent" />

          <motion.div
            className="flex gap-6 whitespace-nowrap py-2"
            animate={{ x: [0, -1800] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-white/[0.04] border border-white/10 rounded-full backdrop-blur-md min-w-fit hover:bg-white/10 hover:border-sky-400/30 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] transition-all duration-300 cursor-default group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`}
                  alt={company.name}
                  className="h-6 w-6 object-contain rounded bg-white/10 p-0.5"
                />
                <span className="text-sm font-black text-slate-300 tracking-wider uppercase group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-[#020617] to-transparent" />

        </div>
      </div>
    </section>
  );
}