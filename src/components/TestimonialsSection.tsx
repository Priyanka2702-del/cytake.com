"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number, d: number) => { setDir(d); setCurrent(next); }, []);
  const prev = () => go((current - 1 + testimonials.length) % testimonials.length, -1);
  const next = useCallback(() => go((current + 1) % testimonials.length, 1), [current, go]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d * -40, scale: 0.95 }),
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--section-bg-1)]">
      {/* gradient overlay via tokens */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }} />

      {/* Glowing Orbs */}
      <motion.div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px] pointer-events-none" animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Trading Chart */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-50" animate={{ x: ["-3%", "3%", "-3%"] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <motion.path d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} />
          {[70,210,350,490,630,770,910,1050,1190,1330].map((cx, i) => (
            <g key={i}>
              <line x1={cx} y1={[455,425,385,355,325,295,275,255,235,205][i]} x2={cx} y2={[525,495,495,465,435,405,375,355,335,305][i]} stroke="#22C55E" strokeWidth="1.5" opacity="0.5" />
              <rect x={cx - 6} y={[470,440,400,370,340,310,290,270,250,220][i]} width="12" height="30" fill="#22C55E" opacity="0.4" rx="1.5" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Lower Dashed Chart Line */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-40" animate={{ x: ["2%", "-2%", "2%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Glowing Traveling Dots */}
      {[{ top: "25%", delay: 0, duration: 16 }, { top: "50%", delay: 5, duration: 20 }, { top: "72%", delay: 9, duration: 18 }].map((dot, i) => (
        <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] pointer-events-none" style={{ top: dot.top, left: "-2%" }} animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }} transition={{ duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay, opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity } }} />
      ))}

      {/* ============ CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
            Trusted by Industry{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Leaders Worldwide</span>
          </h2>
          <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">
            Brokers, prop firms, and fintech companies powering their businesses with CYTAKE.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={current} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden bg-[var(--section-card-bg)] border border-[var(--section-card-border)]"
              >
                {/* Big Quote Background */}
                <Quote size={120} className="absolute -top-4 -right-4 text-[var(--section-text)] opacity-[0.05]" />

                {/* Top Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500" />

                <div className="relative z-10">
                  <Quote size={36} className="text-sky-500 mb-6" />

                  <p className="text-lg sm:text-xl text-[var(--section-text)] leading-relaxed mb-8 font-medium">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[var(--section-card-border)]">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-black text-base shrink-0 shadow-lg">
                        {testimonials[current].avatar}
                      </div>
                      <div>
                        <div className="font-black text-[var(--section-text)]">{testimonials[current].name}</div>
                        <div className="text-sm text-[var(--section-text-muted)]">{testimonials[current].role}</div>
                        <div className="text-xs text-sky-500 font-semibold">{testimonials[current].country}</div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-[var(--section-card-bg)] border border-[var(--section-card-border)] text-[var(--section-text-muted)] hover:text-sky-500 hover:border-sky-400/50">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => go(i, i > current ? 1 : -1)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-sky-500" : "w-2.5 h-2.5 bg-[var(--section-card-border)] hover:opacity-70"}`} />
              ))}
            </div>

            <button onClick={next} className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-[var(--section-card-bg)] border border-[var(--section-card-border)] text-[var(--section-text-muted)] hover:text-sky-500 hover:border-sky-400/50">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Countries */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-20 text-center">
          <p className="text-xs text-[var(--section-text-muted)] uppercase tracking-widest mb-6 font-bold">
            Active clients across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["United Kingdom", "UAE", "India", "Australia", "Singapore", "Cyprus", "Mauritius", "South Africa", "Hong Kong", "Cayman Islands"].map((c, i) => (
              <motion.span key={c} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -3, scale: 1.05 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
                className="text-xs font-semibold px-4 py-2 rounded-xl backdrop-blur-sm transition-all cursor-default bg-[var(--section-card-bg)] border border-[var(--section-card-border)] text-[var(--section-text-muted)] hover:border-sky-400/30 hover:text-[var(--section-text)]">
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}