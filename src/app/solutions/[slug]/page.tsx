"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Server, TrendingUp, Users, BarChart3,
  CreditCard, Cloud, Bot, Layers, Shield, Cpu, Share2,
  TrendingDown, Activity, BarChart2, Zap
} from "lucide-react";
import { useParams } from "next/navigation";

const BLUE = "#005EFD";

const iconMap: Record<string, React.ElementType> = {
  "forex-broker-infrastructure": Server,
  "prop-firm-technology": TrendingUp,
  "trading-crm-systems": Users,
  "ai-trading-robot": Bot,
  "trader-ib-portals": BarChart3,
  "payment-gateway-integration": CreditCard,
  "vps-cloud-infrastructure": Cloud,
  "ai-automation-systems": Bot,
  "white-label-trading": Layers,
  "risk-management-systems": Shield,
  "trading-platform-integration": Cpu,
  "affiliate-referral-systems": Share2,
};

const imageMap: Record<string, string> = {
  "forex-broker-infrastructure": "/solutions/forex.jpg",
  "prop-firm-technology": "/solutions/prop-firm.jpg",
  "trading-crm-systems": "/solutions/crm.jpg",
  "trader-ib-portals": "/solutions/ib-portals.jpg",
  "payment-gateway-integration": "/solutions/payment.jpg",
  "vps-cloud-infrastructure": "/solutions/vps.jpg",
  "ai-automation-systems": "/solutions/ai.jpg",
  "white-label-trading": "/solutions/white-label.jpg",
  "risk-management-systems": "/solutions/risk.jpg",
  "trading-platform-integration": "/solutions/platform.jpg",
  "affiliate-referral-systems": "/solutions/affiliate.jpg",
  "ai-trading-robot": "/solutions/ai-robot.jpg",
};

const marketTicker = [
  { pair: "EUR/USD", price: "1.0874", change: "+0.21%", up: true },
  { pair: "XAU/USD", price: "2318.4", change: "+0.82%", up: true },
  { pair: "BTC/USD", price: "68,204", change: "+1.12%", up: true },
  { pair: "USD/JPY", price: "157.32", change: "-0.34%", up: false },
  { pair: "GBP/USD", price: "1.2658", change: "+0.15%", up: true },
  { pair: "US30", price: "38,742", change: "+0.47%", up: true },
];

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const sol = solutions.find((s) => s.slug === slug);

  if (!sol) notFound();

  const Icon = iconMap[sol.slug] || Server;
  const heroImage = imageMap[sol.slug] || imageMap["forex-broker-infrastructure"];

  return (
    <>
      <style jsx global>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes particle-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-80px) translateX(15px); opacity: 0; }
        }

        /* Feature cards */
        .feature-card {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.03) 0%,
            rgba(0, 94, 253, 0.04) 50%,
            rgba(255, 255, 255, 0.01) 100%
          );
          border: none !important;
          overflow: hidden;
          box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(0, 94, 253, 0.02),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            transparent 20%,
            rgba(0, 94, 253, 0.18) 40%,
            rgba(0, 94, 253, 0.08) 60%,
            transparent 80%
          );
          background-size: 300% 300%;
          animation: border-flow 4s ease-in-out infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .feature-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            rgba(0, 94, 253, 0.06) 0%,
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .feature-card:hover::after {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.25),
            0 0 50px rgba(0, 94, 253, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(0, 94, 253, 0.06) 50%,
            rgba(0, 94, 253, 0.02) 100%
          );
        }

        .feature-card .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.04),
            transparent
          );
          transition: left 0.7s ease;
          pointer-events: none;
        }

        .feature-card:hover .shine {
          left: 150%;
        }

        .feature-card .glow-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(0, 94, 253, 0.8);
          box-shadow: 0 0 8px rgba(0, 94, 253, 0.6);
          animation: glow-pulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        /* Stat mini cards */
        .stat-card {
          position: relative;
          background: rgba(0, 94, 253, 0.08);
          border: none !important;
          overflow: hidden;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            transparent,
            rgba(0, 94, 253, 0.25),
            transparent
          );
          background-size: 200% 200%;
          animation: border-flow 3s ease-in-out infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Info badge */
        .info-badge {
          position: relative;
          background: rgba(0, 94, 253, 0.08);
          border: none !important;
          overflow: hidden;
          border-radius: 9999px;
        }

        .info-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 94, 253, 0.3),
            transparent
          );
          background-size: 200% 200%;
          animation: border-flow 3s ease-in-out infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      <Navbar />
      <main className="min-h-screen bg-[var(--section-bg-1)]">
        {/* gradient base */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)`,
          }}
        />

        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "rgba(0, 94, 253, 0.12)" }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[130px]"
            style={{ background: "rgba(0, 94, 253, 0.08)" }}
            animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Trading chart */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ x: ["-3%", "3%", "-3%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
              <motion.path
                d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290"
                fill="none"
                stroke={BLUE}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              {[70, 210, 350, 490, 630, 770, 910, 1050, 1190, 1330].map((cx, i) => (
                <g key={i}>
                  <line
                    x1={cx} y1={[455,425,385,355,325,295,275,255,235,205][i]}
                    x2={cx} y2={[525,495,495,465,435,405,375,355,335,305][i]}
                    stroke="#22C55E" strokeWidth="1.5" opacity="0.5"
                  />
                  <rect
                    x={cx - 6} y={[470,440,400,370,340,310,290,270,250,220][i]}
                    width="12" height="30" fill="#22C55E" opacity="0.4" rx="1.5"
                  />
                </g>
              ))}
            </svg>
          </motion.div>

          {/* Traveling dots */}
          {[
            { top: "25%", delay: 0, duration: 16 },
            { top: "50%", delay: 5, duration: 20 },
            { top: "72%", delay: 9, duration: 18 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: dot.top,
                left: "-2%",
                background: BLUE,
                boxShadow: `0 0 14px ${BLUE}`,
              }}
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
        </div>

        {/* CONTENT */}
        <div className="relative z-10 pt-20">

          {/* HERO SECTION */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Live indicators */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full"
                      style={{ border: "1px solid rgba(16,185,129,0.3)" }}>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                        Live System
                      </span>
                    </div>
                    <div
                      className="info-badge flex items-center gap-2 px-3 py-1.5"
                    >
                      <Activity size={10} style={{ color: BLUE }} />
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: BLUE }}>
                        99.9% Uptime
                      </span>
                    </div>
                  </motion.div>

                  {/* Category + Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 mb-5"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center shrink-0`}
                      style={{ boxShadow: `0 0 40px rgba(0,94,253,0.3)` }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="info-badge flex items-center gap-2 px-4 py-1.5">
                      <span className="text-xs font-bold tracking-wide uppercase" style={{ color: BLUE }}>
                        {sol.category}
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--section-text)] mb-4 leading-[1.05]"
                  >
                    {sol.title}
                  </motion.h1>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="h-1 rounded-full mb-6"
                    style={{ background: `linear-gradient(to right, ${BLUE}, #0043b5)` }}
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[var(--section-text-muted)] text-lg leading-relaxed mb-8"
                  >
                    {sol.shortDesc}
                  </motion.p>

                  {/* Mini stats row */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-5 mb-8"
                  >
                    {[
                      { icon: Zap, label: "Fast Deploy", value: "7-14 Days" },
                      { icon: Shield, label: "Enterprise", value: "Grade SLA" },
                      { icon: BarChart2, label: "Support", value: "24/7" },
                    ].map(({ icon: MIcon, label, value }, i) => (
                      <div key={i} className="stat-card flex items-center gap-2 px-3 py-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "rgba(0,94,253,0.1)" }}
                        >
                          <MIcon size={14} style={{ color: BLUE }} />
                        </div>
                        <div>
                          <div className="text-[9px] text-[var(--section-text-muted)] uppercase tracking-wider">
                            {label}
                          </div>
                          <div className="text-xs font-black text-[var(--section-text)]">{value}</div>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-0.5 text-white relative overflow-hidden group"
                      style={{
                        background: `linear-gradient(135deg, ${BLUE}, #0043b5)`,
                        boxShadow: "0 8px 25px rgba(0,94,253,0.25)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 0 35px rgba(0,94,253,0.4), 0 8px 25px rgba(0,94,253,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 8px 25px rgba(0,94,253,0.25)";
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center gap-2">
                        Get a Free Consultation <ArrowRight size={16} />
                      </span>
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-0.5 text-[var(--section-text)]"
                      style={{
                        background: "rgba(0,94,253,0.06)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                      }}
                    >
                      Request Demo <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div
                    className="absolute -inset-6 blur-3xl rounded-full"
                    style={{ background: "rgba(0,94,253,0.12)" }}
                  />

                  <div
                    className="relative rounded-3xl overflow-hidden w-full"
                    style={{
                      boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Scanning line */}
                    <motion.div
                      className="absolute inset-x-0 h-[2px] z-20 pointer-events-none"
                      style={{
                        background: `linear-gradient(to right, transparent, ${BLUE}CC, transparent)`,
                      }}
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Corner brackets */}
                    {[
                      { top: "12px", left: "12px", borderStyle: "border-l-2 border-t-2 rounded-tl" },
                      { top: "12px", right: "12px", borderStyle: "border-r-2 border-t-2 rounded-tr" },
                      { bottom: "88px", left: "12px", borderStyle: "border-l-2 border-b-2 rounded-bl" },
                      { bottom: "88px", right: "12px", borderStyle: "border-r-2 border-b-2 rounded-br" },
                    ].map((corner, ci) => (
                      <div
                        key={ci}
                        className="absolute z-20 pointer-events-none"
                        style={{ top: corner.top, left: corner.left, right: corner.right, bottom: corner.bottom }}
                      >
                        <motion.div
                          className={`w-6 h-6 ${corner.borderStyle}`}
                          style={{ borderColor: BLUE }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: ci * 0.5 }}
                        />
                      </div>
                    ))}

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={heroImage}
                      alt={sol.title}
                      className="w-full h-[500px] object-contain object-center bg-[#050E1F] transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />

                    {/* Market ticker */}
                    <div className="absolute top-4 left-4 right-4 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-2 overflow-hidden"
                      >
                        {marketTicker.slice(0, 3).map((item, i) => (
                          <motion.div
                            key={item.pair}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                            className="flex items-center gap-1.5 bg-[#020617]/80 backdrop-blur-md rounded-lg px-2.5 py-1.5"
                            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                          >
                            <span className="text-[9px] font-black text-white">{item.pair}</span>
                            <span className="text-[9px] font-bold text-slate-300">{item.price}</span>
                            <span className={`text-[9px] font-black flex items-center gap-0.5 ${item.up ? "text-emerald-400" : "text-red-400"}`}>
                              {item.up ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                              {item.change}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Bottom badge */}
                    <div
                      className="absolute bottom-5 left-5 right-5 bg-[#0A1628]/95 backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center gap-3 z-10"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white">{sol.title}</div>
                        <div className="text-[10px] font-semibold uppercase" style={{ color: BLUE }}>
                          {sol.category}
                        </div>
                      </div>
                      <div className="ml-auto flex items-center gap-1.5">
                        <motion.span
                          className="w-2 h-2 rounded-full bg-emerald-400"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-[10px] text-emerald-400 font-bold">Enterprise Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating stat cards */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                    transition={{
                      opacity: { delay: 1 },
                      x: { delay: 1 },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -left-12 top-1/3 bg-[#0A1628]/90 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl hidden xl:block"
                    style={{ border: "1px solid rgba(0,94,253,0.15)" }}
                  >
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Deployment</div>
                    <div className="text-xl font-black text-white">7 Days</div>
                    <div className="text-[9px] text-emerald-400 font-bold">✓ Guaranteed</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                    transition={{
                      opacity: { delay: 1.2 },
                      x: { delay: 1.2 },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -right-12 top-1/2 bg-[#0A1628]/90 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl hidden xl:block"
                    style={{ border: "1px solid rgba(0,94,253,0.15)" }}
                  >
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Clients</div>
                    <div className="text-xl font-black text-white">200+</div>
                    <div className="text-[9px] font-bold" style={{ color: BLUE }}>Worldwide</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FEATURES SECTION */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0,94,253,0.1)",
                      "0 0 35px rgba(0,94,253,0.18)",
                      "0 0 20px rgba(0,94,253,0.1)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4"
                  style={{ background: "rgba(0,94,253,0.08)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: BLUE }}
                  />
                  <span className="text-xs font-bold tracking-wide uppercase" style={{ color: BLUE }}>
                    Included Features
                  </span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                  Everything in{" "}
                  <span style={{ color: BLUE }}>{sol.title}</span>
                </h2>
                <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">
                  Enterprise-grade features built specifically for your business needs.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {(sol.features || []).map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="feature-card rounded-2xl p-6 flex items-start gap-3 group"
                  >
                    <div className="shine" />
                    <div className="glow-dot" style={{ top: "8px", right: "8px" }} />

                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
                      style={{ background: "rgba(0,94,253,0.1)" }}
                    >
                      <CheckCircle size={14} style={{ color: BLUE }} />
                    </div>
                    <span className="relative z-10 text-sm font-medium text-[var(--section-text-muted)] group-hover:text-[var(--section-text)] transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-center"
                style={{
                  background: "linear-gradient(135deg, #0B1B3F 0%, #0d2456 50%, #0B1B3F 100%)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "0 30px 80px rgba(11,27,63,0.6), 0 0 60px rgba(0,94,253,0.1)",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div
                  className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none"
                  style={{ background: "rgba(0,94,253,0.2)" }}
                />
                <div
                  className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none"
                  style={{ background: "rgba(0,94,253,0.12)" }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(16,185,129,0.1)",
                        "0 0 30px rgba(16,185,129,0.2)",
                        "0 0 20px rgba(16,185,129,0.1)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      Ready to Deploy
                    </span>
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                    Ready to Get Started with <br />
                    <span style={{ color: "#38BDF8" }}>{sol.title}?</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    Let&apos;s discuss how {sol.title} can power your business with
                    enterprise-grade infrastructure.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 justify-center rounded-xl px-8 py-4 text-base font-bold text-black bg-white hover:bg-gray-100 transition-all hover:-translate-y-0.5 relative overflow-hidden group"
                      style={{ boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center gap-2">
                        Talk to Our Team <ArrowRight size={16} />
                      </span>
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-all hover:-translate-y-0.5"
                    >
                      Request Demo <ArrowRight size={16} />
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