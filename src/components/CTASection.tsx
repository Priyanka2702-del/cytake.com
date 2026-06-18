"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B1B3F] via-[#0d2456] to-[#0B1B3F] p-10 sm:p-16 text-center shadow-[0_30px_80px_rgba(11,27,63,0.6)] border border-white/5"
        >
          {/* Inner Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Inner Glowing Orbs */}
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/25 blur-[100px] pointer-events-none"
            animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-sky-500/25 blur-[110px] pointer-events-none"
            animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Animated Chart Line inside banner */}
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none" viewBox="0 0 1000 120" preserveAspectRatio="none">
            <motion.polyline
              points="0,90 100,70 200,80 300,50 400,60 500,35 600,45 700,25 800,40 900,15 1000,25"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Floating mini dots inside banner */}
          {[
            { left: "8%", top: "20%", delay: 0 },
            { left: "85%", top: "15%", delay: 1 },
            { left: "50%", top: "80%", delay: 2 },
            { left: "20%", top: "75%", delay: 0.5 },
            { left: "75%", top: "70%", delay: 1.5 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-sky-400 pointer-events-none"
              style={{ left: pos.left, top: pos.top }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: pos.delay,
              }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                Available Now — Launch in 7-14 Days
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
            >
              Ready to Build Your <br />
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                World-Class Trading Business?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Join 200+ brokers and prop firms that trust CYTAKE to power their operations globally.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-8 mb-10 flex-wrap"
            >
              {[
                { val: "200+", label: "Brokers" },
                { val: "50+", label: "Countries" },
                { val: "7-14", label: "Days Launch" },
                { val: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-white">{stat.val}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 justify-center rounded-xl px-8 py-4 text-base font-bold text-[#0B1B3F] bg-gradient-to-r from-white to-sky-100 shadow-[0_8px_25px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.4)] transition-shadow"
                >
                  Get a Free Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} className="w-full sm:w-auto">
                <Link
                  href="/contact#demo"
                  className="flex items-center gap-2 justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all"
                >
                  <Calendar size={16} className="text-sky-400" /> Schedule a Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Note */}
            <p className="text-slate-500 text-sm mt-6">
              No commitment required. Our team responds within 2 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}