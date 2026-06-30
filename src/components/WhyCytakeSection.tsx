"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Globe, Cpu, Briefcase, Rocket, Users } from "lucide-react";
import { whyPoints } from "@/lib/data";

const icons = [Shield, Globe, Cpu, Briefcase, Rocket, Users];

function TiltCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 300, damping: 30 });

  // ✅ FIX: Create motion values OUTSIDE of JSX
  const glowX = useTransform(x, [-50, 50], [0, 100]);
  const glowY = useTransform(y, [-50, 50], [0, 100]);
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(56,189,248,0.2), transparent 60%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "800px" }}
      className="relative rounded-2xl cursor-pointer group h-full"
    >
      {/* Outer Glow */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px] pointer-events-none bg-gradient-to-br from-sky-400/40 via-blue-500/20 to-indigo-500/40" />

      {/* Deep Shadow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.15),0_10px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_30px_rgba(56,189,248,0.15),0_20px_60px_rgba(56,189,248,0.1)]" />

      {/* ✅ FIX: Mouse-following glow using pre-computed motion value */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]"
        style={{ background: glowBg }}
      />

      {/* Shine Sweep */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-[2]">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-20deg]" />
      </div>

      {/* Card Content */}
      <div
        className="relative rounded-2xl p-5 z-[3] h-full flex flex-col backdrop-blur-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] transition-all duration-500 group-hover:border-sky-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.1)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.15)]"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {children}
      </div>
    </motion.div>
  );
}

export default function WhyCytakeSection() {
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Why CYTAKE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] leading-tight mb-6">
              The Technology Partner <br />
              <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Built for Your Industry</span>
            </h2>

            <p className="text-[var(--section-text-muted)] text-lg leading-relaxed mb-8">
              We don&apos;t build generic software. Every system we deliver is purpose-built for forex and fintech.
            </p>

            <ul className="space-y-3 mb-8">
              {["Deep forex & fintech domain expertise", "Enterprise-grade security & compliance", "24/7 global support across all time zones", "Rapid deployment with pre-built modules"].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-[var(--section-text-muted)]">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>

            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] bg-[var(--cta-white-bg)] text-[var(--cta-white-text)] hover:bg-[var(--cta-white-hover)]">
              Learn about CYTAKE <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-5 items-stretch" style={{ perspective: "1000px" }}>
            {whyPoints.map((point, i) => {
              const Icon = icons[i] || Shield;
              return (
                <TiltCard key={point.title} delay={i * 0.08}>
                  <div className="relative w-11 h-11 rounded-xl mb-3.5 flex items-center justify-center shrink-0 transition-all duration-500 bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-400/25 group-hover:border-sky-400/50 group-hover:scale-110">
                    <Icon size={18} className="text-sky-400 transition-colors duration-300 group-hover:text-sky-300" />
                    <div className="absolute inset-0 rounded-xl bg-sky-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h4 className="font-bold text-[var(--section-text)] text-sm mb-1.5 group-hover:text-white transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-[var(--section-text-muted)] text-xs leading-relaxed line-clamp-3 group-hover:text-slate-300/80 transition-colors duration-300">
                    {point.desc}
                  </p>

                  <div className="mt-auto pt-3">
                    <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-sky-400/50 to-transparent transition-all duration-700 ease-out" />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}