"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, TrendingUp, Globe, Shield, Zap, CheckCircle } from "lucide-react";

const heroSlides = [
  {
    badge: "Enterprise Forex Infrastructure",
    headline: "Power Your Brokerage with",
    highlight: "World-Class Technology",
    sub: "Complete infrastructure stack for forex brokers — from trading servers and CRM to payment gateways and risk management. Everything you need to launch and scale.",
    cta1: { label: "Explore Solutions", href: "/solutions" },
    cta2: { label: "Schedule a Demo", href: "/contact#demo" },
    tags: ["MT4/MT5 Infrastructure", "Prop Firm Platform", "Trading CRM"],
  },
  {
    badge: "Prop Firm Technology",
    headline: "Launch Your Prop Firm",
    highlight: "In 7 Days",
    sub: "Full-stack prop trading technology with challenge engine, evaluation system, risk monitoring, and automated payout management. Battle-tested and ready to deploy.",
    cta1: { label: "Prop Firm Tech", href: "/solutions/prop-firm-technology" },
    cta2: { label: "Schedule a Demo", href: "/contact#demo" },
    tags: ["Challenge Engine", "Funded Accounts", "Risk Management"],
  },
  {
    badge: "Global Fintech Infrastructure",
    headline: "Scale Globally with",
    highlight: "AI-Powered Systems",
    sub: "AI automation, payment gateway integration, cloud VPS, and white-label solutions — the complete technology foundation for ambitious forex and fintech businesses.",
    cta1: { label: "AI Automation", href: "/solutions/ai-automation-systems" },
    cta2: { label: "Get Started", href: "/contact" },
    tags: ["AI Automation", "Payment Gateways", "Cloud Infrastructure"],
  },
];

const stats = [
  { icon: TrendingUp, value: "200+", label: "Brokers Powered" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Shield, value: "99.9%", label: "Uptime SLA" },
  { icon: Zap, value: "$5B+", label: "Volume Processed" },
];

// ✅ CHANGED: Dark color to match rest of site
const BRIDGE_COLOR = "#020617";

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setSlide((s) => (s + 1) % heroSlides.length); }, 5500);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => { setDir(i > slide ? 1 : -1); setSlide(i); };

  const current = heroSlides[slide];

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d * 30 }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d * -20 }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: BRIDGE_COLOR }}
    >
      {/* ============ BACKGROUND LAYER 1: Dark navy gradient ============ */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg,
            #020617 0%,
            #030B1F 12%,
            #051234 25%,
            #0A1F5C 42%,
            #1340B8 58%,
            #2563EB 72%,
            #60A5FA 85%,
            #93C5FD 93%,
            ${BRIDGE_COLOR} 100%)`,
        }}
      />

      {/* ============ BACKGROUND LAYER 2: Bright center glow ============ */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          bottom: "-30vh",
          width: "150vw",
          height: "100vh",
          background: `radial-gradient(ellipse at center,
            rgba(255,255,255,0.55) 0%,
            rgba(219,234,254,0.45) 18%,
            rgba(147,197,253,0.3) 35%,
            rgba(96,165,250,0.15) 50%,
            transparent 70%)`,
          filter: "blur(70px)",
          borderRadius: "50%",
        }}
      />

      {/* ============ BACKGROUND LAYER 3: Breathing pulse ============ */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          bottom: "-25vh",
          width: "130vw",
          height: "90vh",
          background: `radial-gradient(ellipse at center,
            rgba(219,234,254,0.35) 0%,
            rgba(147,197,253,0.2) 30%,
            transparent 60%)`,
          filter: "blur(90px)",
          borderRadius: "50%",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ============ BACKGROUND LAYER 4: Top vignette ============ */}
      <div
        className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, rgba(2,6,23,0.85) 0%, transparent 100%)",
        }}
      />

      {/* ============ BACKGROUND LAYER 5: Side vignette ============ */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-0"
        style={{
          height: "60%",
          background: `radial-gradient(ellipse at center,
            transparent 40%,
            rgba(2,6,23,0.35) 90%)`,
        }}
      />

      {/* ============ SUBTLE FOREX TRADING BACKGROUND ============ */}

      {/* Layer A — Subtle Grid Pattern */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(191,219,254,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(191,219,254,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
        }}
      />

      {/* Layer B — Candlestick Chart */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          {[
            { x: 100, o: 450, c: 410, h: 395, l: 465, bull: true },
            { x: 180, o: 410, c: 440, h: 398, l: 452, bull: false },
            { x: 260, o: 440, c: 395, h: 380, l: 455, bull: true },
            { x: 340, o: 395, c: 425, h: 383, l: 438, bull: false },
            { x: 420, o: 425, c: 375, h: 360, l: 440, bull: true },
            { x: 500, o: 375, c: 405, h: 363, l: 418, bull: false },
            { x: 580, o: 405, c: 355, h: 340, l: 420, bull: true },
            { x: 660, o: 355, c: 385, h: 343, l: 398, bull: false },
            { x: 740, o: 385, c: 335, h: 320, l: 400, bull: true },
            { x: 820, o: 335, c: 365, h: 323, l: 378, bull: false },
            { x: 900, o: 365, c: 315, h: 300, l: 380, bull: true },
            { x: 980, o: 315, c: 345, h: 303, l: 358, bull: false },
            { x: 1060, o: 345, c: 295, h: 280, l: 360, bull: true },
            { x: 1140, o: 295, c: 325, h: 283, l: 338, bull: false },
            { x: 1220, o: 325, c: 275, h: 260, l: 340, bull: true },
            { x: 1300, o: 275, c: 305, h: 263, l: 318, bull: false },
          ].map((c, i) => (
            <g key={i} opacity="0.65">
              <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.bull ? "#22c55e" : "#ef4444"} strokeWidth="1.8" />
              <rect x={c.x - 5} y={Math.min(c.o, c.c)} width="10" height={Math.max(3, Math.abs(c.o - c.c))} fill={c.bull ? "#22c55e" : "#ef4444"} rx="1" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Layer C — Animated Line Chart */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        animate={{ x: ["-2%", "2%", "-2%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0"/>
              <stop offset="50%" stopColor="#BFDBFE" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path
            d="M0,500 L100,475 L200,510 L300,455 L400,490 L500,430 L600,470 L700,410 L800,450 L900,390 L1000,430 L1100,375 L1200,410 L1300,355 L1400,395"
            fill="none"
            stroke="url(#lineGlow)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Layer D — Floating Glow Dots */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          {[
            { x: 200, y: 200 }, { x: 450, y: 350 }, { x: 700, y: 180 },
            { x: 950, y: 280 }, { x: 1200, y: 220 }, { x: 350, y: 550 },
            { x: 850, y: 600 }, { x: 1100, y: 480 },
          ].map((dot, i) => (
            <g key={i}>
              <circle cx={dot.x} cy={dot.y} r="3" fill="#60A5FA" opacity="0.6"/>
              <circle cx={dot.x} cy={dot.y} r="8" fill="#60A5FA" opacity="0.2"/>
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Layer E — Left Side Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `linear-gradient(90deg,
            rgba(2,6,23,0.7) 0%,
            rgba(2,6,23,0.4) 30%,
            rgba(2,6,23,0.1) 60%,
            transparent 100%)`,
        }}
      />

      {/* ============ BOTTOM BRIDGE — ✅ DARK FADE ============ */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[3]"
        style={{
          height: "220px",
          background: `linear-gradient(to bottom,
            transparent 0%,
            rgba(2,6,23,0.6) 35%,
            rgba(2,6,23,0.95) 70%,
            #020617 100%)`,
        }}
      />

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text slider */}
          <div>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={slide}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-white/15 bg-white/5 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                  <span className="text-xs font-medium text-slate-200 tracking-wide">{current.badge}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6">
                  <span className="text-white">{current.headline}</span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-[#BFDBFE] to-[#60A5FA] bg-clip-text text-transparent">
                    {current.highlight}
                  </span>
                </h1>

                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                  {current.sub}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {current.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-slate-200">
                      <CheckCircle size={10} className="text-[#60A5FA]" /> {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href={current.cta1.href}
                    className="flex items-center gap-2 text-[#051234] bg-white rounded-full px-7 py-3.5 font-bold text-sm hover:bg-[#BFDBFE] transition-colors shadow-[0_0_40px_rgba(191,219,254,0.4)]">
                    {current.cta1.label} <ArrowRight size={15} />
                  </Link>
                  <Link href={current.cta2.href}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white border border-white/25 hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <Play size={14} className="text-[#BFDBFE]" /> {current.cta2.label}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-10">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-300 ${
                  i === slide ? "w-8 h-2 bg-[#60A5FA]" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`} />
              ))}
            </div>
          </div>

          {/* Right: Trading Terminal */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#020617]/70 backdrop-blur-xl shadow-[0_30px_80px_rgba(37,99,235,0.4)]"
            >
              {/* Terminal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wider">CYTAKE TRADING TERMINAL</span>
                </div>
                <span className="text-xs text-slate-300">MT5 · Live</span>
              </div>

              {/* Chart Area */}
              <div className="px-5 pt-4 pb-2">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-white font-black text-lg tracking-wider">EUR/USD</span>
                    <span className="ml-2 text-emerald-400 text-sm font-bold">1.08742</span>
                    <span className="ml-2 text-emerald-400 text-xs">▲ +0.0023 (+0.21%)</span>
                  </div>
                  <div className="flex gap-1.5">
                    {["M1","M5","H1","D1"].map((t, i) => (
                      <span key={t} className={`text-[10px] px-2 py-0.5 rounded font-medium ${i === 2 ? "bg-[#2563EB] text-white" : "text-slate-300"}`}>{t}</span>
                    ))}
                  </div>
                </div>

                <svg viewBox="0 0 380 120" className="w-full h-28" preserveAspectRatio="none">
                  {[0,30,60,90,120].map(y => (
                    <line key={y} x1="0" y1={y} x2="380" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  ))}
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,95 L20,88 L40,82 L60,90 L80,75 L100,70 L120,78 L140,65 L160,58 L180,68 L200,55 L220,48 L240,60 L260,45 L280,38 L300,50 L320,35 L340,28 L360,32 L380,22 L380,120 L0,120 Z" fill="url(#chartFill)" />
                  <polyline points="0,95 20,88 40,82 60,90 80,75 100,70 120,78 140,65 160,58 180,68 200,55 220,48 240,60 260,45 280,38 300,50 320,35 340,28 360,32 380,22" fill="none" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {[{x:40,o:82,c:74,h:70,l:88,bull:true},{x:80,o:75,c:68,h:64,l:80,bull:true},{x:120,o:65,c:72,h:62,l:76,bull:false},{x:160,o:58,c:50,h:46,l:62,bull:true},{x:200,o:55,c:48,h:44,l:58,bull:true},{x:240,o:48,c:55,h:42,l:58,bull:false},{x:280,o:38,c:30,h:26,l:42,bull:true},{x:320,o:35,c:28,h:24,l:38,bull:true},{x:360,o:28,c:20,h:16,l:32,bull:true}].map((c,i)=>(
                    <g key={i}>
                      <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.bull?"#22c55e":"#ef4444"} strokeWidth="1.5"/>
                      <rect x={c.x-5} y={Math.min(c.o,c.c)} width="10" height={Math.max(2,Math.abs(c.o-c.c))} fill={c.bull?"#22c55e":"#ef4444"} rx="1"/>
                    </g>
                  ))}
                  <line x1="0" y1="22" x2="380" y2="22" stroke="#BFDBFE" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.6"/>
                </svg>
              </div>

              {/* Currency Pairs Watchlist */}
              <div className="px-5 pb-4">
                <div className="grid grid-cols-2 gap-2">
                  {[{pair:"GBP/USD",price:"1.26584",chg:"+0.15%",up:true},{pair:"XAU/USD",price:"2,318.40",chg:"+0.82%",up:true},{pair:"USD/JPY",price:"157.320",chg:"-0.34%",up:false},{pair:"US30",price:"38,742",chg:"+0.47%",up:true}].map(({pair,price,chg,up})=>(
                    <div key={pair} className="flex items-center justify-between bg-white/[0.04] rounded-lg px-3 py-2 border border-white/10">
                      <div>
                        <div className="text-xs font-bold text-white">{pair}</div>
                        <div className="text-[10px] text-slate-300">{price}</div>
                      </div>
                      <span className={`text-[10px] font-semibold ${up?"text-emerald-400":"text-red-400"}`}>{chg}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 bg-emerald-500/15 border border-emerald-500/30 rounded-lg px-3 py-2 text-center">
                    <div className="text-[10px] text-slate-300 mb-0.5">BID</div>
                    <div className="text-sm font-black text-emerald-400">1.08738</div>
                  </div>
                  <div className="text-xs text-slate-300 font-bold">0.4p</div>
                  <div className="flex-1 bg-red-500/15 border border-red-500/30 rounded-lg px-3 py-2 text-center">
                    <div className="text-[10px] text-slate-300 mb-0.5">ASK</div>
                    <div className="text-sm font-black text-red-400">1.08742</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.7 },
                x: { duration: 0.6, delay: 0.7 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -left-14 top-8 rounded-xl p-3.5 w-44 border border-white/15 bg-[#020617]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">Trade Executed</span>
              </div>
              <div className="text-white text-xs font-bold">BUY 2.0 EUR/USD</div>
              <div className="text-slate-300 text-[10px] mt-0.5">@ 1.08738 · Profit +$142</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, 12, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.9 },
                x: { duration: 0.6, delay: 0.9 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -right-10 bottom-10 rounded-xl p-3.5 w-44 border border-white/15 bg-[#020617]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
            >
              <div className="text-[10px] text-slate-300 mb-1 uppercase tracking-wide">Risk Monitor</div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-slate-200">Drawdown</span>
                <span className="text-xs font-bold text-emerald-400">2.4%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: "24%" }} />
              </div>
              <div className="text-[10px] text-slate-300 mt-1.5">Max allowed: 10%</div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-xl px-6 py-4 flex items-center gap-4 border border-white/15 bg-white/[0.05] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#60A5FA]/30 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[#BFDBFE]" />
              </div>
              <div>
                <div className="text-xl font-black text-white">{value}</div>
                <div className="text-xs text-slate-300">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}