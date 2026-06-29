"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Globe, Shield, Zap, Award, Clock } from "lucide-react";

const statsData = [
  { value: 200, suffix: "+", label: "Brokers Powered", desc: "Active forex and prop firm clients", icon: TrendingUp, color: "from-blue-500 to-sky-400", glow: "rgba(56,189,248,0.4)" },
  { value: 50, suffix: "+", label: "Countries Served", desc: "Global reach across all continents", icon: Globe, color: "from-indigo-500 to-blue-400", glow: "rgba(99,102,241,0.4)" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", desc: "Enterprise reliability guarantee", icon: Shield, color: "from-emerald-500 to-teal-400", glow: "rgba(16,185,129,0.4)" },
  { value: 5, suffix: "B+", label: "Volume Processed", desc: "USD in trading volume supported", icon: Zap, color: "from-amber-500 to-yellow-400", glow: "rgba(245,158,11,0.4)" },
  { value: 7, suffix: "+", label: "Years of Excellence", desc: "Proven forex technology expertise", icon: Award, color: "from-purple-500 to-indigo-400", glow: "rgba(168,85,247,0.4)" },
  { value: 24, suffix: "/7", label: "Support Coverage", desc: "Round-the-clock technical support", icon: Clock, color: "from-sky-500 to-cyan-400", glow: "rgba(14,165,233,0.4)" },
];

function Counter({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepMs = 16;
    const increment = (target / duration) * stepMs;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(start); }
    }, stepMs);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--section-bg-1)]">
      {/* gradient overlay via tokens */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)`,
        }}
      />

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
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Trading Charts */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-50"
        animate={{ x: ["-3%", "3%", "-3%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <motion.path
            d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290"
            fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 3, ease: "easeInOut" }}
          />
          {[
            { x: 70, o: 510, c: 470, h: 455, l: 525, up: true },
            { x: 210, o: 480, c: 440, h: 425, l: 495, up: true },
            { x: 350, o: 480, c: 400, h: 385, l: 495, up: true },
            { x: 490, o: 450, c: 370, h: 355, l: 465, up: true },
            { x: 630, o: 420, c: 340, h: 325, l: 435, up: true },
            { x: 770, o: 390, c: 310, h: 295, l: 405, up: true },
            { x: 910, o: 360, c: 290, h: 275, l: 375, up: true },
            { x: 1050, o: 340, c: 270, h: 255, l: 355, up: true },
            { x: 1190, o: 320, c: 250, h: 235, l: 335, up: true },
            { x: 1330, o: 290, c: 220, h: 205, l: 305, up: true },
          ].map((c, i) => (
            <g key={i}>
              <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke="#22C55E" strokeWidth="1.5" opacity="0.5" />
              <rect x={c.x - 6} y={Math.min(c.o, c.c)} width="12" height={Math.max(4, Math.abs(c.o - c.c))} fill="#22C55E" opacity="0.4" rx="1.5" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Lower chart line */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        animate={{ x: ["2%", "-2%", "2%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Glowing dots traveling */}
      {[
        { top: "30%", delay: 0, duration: 16 },
        { top: "55%", delay: 5, duration: 20 },
        { top: "70%", delay: 9, duration: 18 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] pointer-events-none"
          style={{ top: dot.top, left: "-2%" }}
          animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay,
            opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity },
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Our Numbers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
            Powering{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Global Trading</span>{" "}
            at Scale
          </h2>
          <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">
            The numbers behind our global infrastructure footprint.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.04, boxShadow: `0 30px 60px ${stat.glow}` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group rounded-2xl p-5 text-center overflow-hidden cursor-default shadow-lg transition-colors bg-[var(--section-card-bg)] backdrop-blur-sm border border-[var(--section-card-border)] hover:border-sky-400/30"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Glow bg on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(circle at 50% 0%, ${stat.glow}, transparent 70%)` }} />

                {/* Icon */}
                <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}
                  className={`relative z-10 w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon size={18} className="text-white" />
                </motion.div>

                {/* Counter */}
                <div className="relative z-10 text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                </div>

                {/* Label */}
                <div className="relative z-10 text-xs font-black text-[var(--section-text)] mt-1 tracking-wide">{stat.label}</div>

                {/* Desc */}
                <div className="relative z-10 text-[10px] text-[var(--section-text-muted)] mt-1 leading-tight">{stat.desc}</div>

                {/* Bottom animated border */}
                <motion.div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${stat.color}`} initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 + 0.5, ease: "easeOut" }} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner — stays colored both modes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 p-8 text-center shadow-[0_20px_60px_rgba(56,189,248,0.3)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute left-[-5%] top-[-50%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[60px]" />
          <div className="absolute right-[-5%] bottom-[-50%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[60px]" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Join 200+ Brokers Worldwide</h3>
            <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">Start building your forex or prop firm infrastructure today with CYTAKE.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.a href="/contact#demo" whileHover={{ scale: 1.05, y: -2 }} className="px-7 py-3 rounded-xl bg-white text-blue-600 font-black text-sm shadow-lg hover:shadow-xl transition-all">Request Demo</motion.a>
              <motion.a href="/solutions" whileHover={{ scale: 1.05, y: -2 }} className="px-7 py-3 rounded-xl bg-white/15 border border-white/30 text-white font-black text-sm hover:bg-white/25 transition-all">View Solutions →</motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}