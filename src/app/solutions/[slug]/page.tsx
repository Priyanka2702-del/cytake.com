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

// Live market ticker data
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
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0A1628] to-[#020617]">

        {/* ============ GLOBAL DARK BACKGROUND ============ */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px]"
            animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]"
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ x: ["-3%", "3%", "-3%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
              <motion.path
                d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290"
                fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              {[70,210,350,490,630,770,910,1050,1190,1330].map((cx, i) => (
                <g key={i}>
                  <line x1={cx} y1={[455,425,385,355,325,295,275,255,235,205][i]} x2={cx} y2={[525,495,495,465,435,405,375,355,335,305][i]} stroke="#22C55E" strokeWidth="1.5" opacity="0.5" />
                  <rect x={cx - 6} y={[470,440,400,370,340,310,290,270,250,220][i]} width="12" height="30" fill="#22C55E" opacity="0.4" rx="1.5" />
                </g>
              ))}
            </svg>
          </motion.div>
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ x: ["2%", "-2%", "2%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
              <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455"
                fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
            </svg>
          </motion.div>
          {[
            { top: "25%", delay: 0, duration: 16 },
            { top: "50%", delay: 5, duration: 20 },
            { top: "72%", delay: 9, duration: 18 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]"
              style={{ top: dot.top, left: "-2%" }}
              animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay, opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity } }}
            />
          ))}
        </div>

        {/* ============ CONTENT ============ */}
        <div className="relative z-10 pt-20">

          {/* ===== HERO SECTION ===== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Live indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live System</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <Activity size={10} className="text-sky-400" />
                      <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">99.9% Uptime</span>
                    </div>
                  </motion.div>

                  {/* Category + Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 mb-5"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center shadow-[0_0_40px_rgba(56,189,248,0.3)] shrink-0`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full">
                      <span className="text-xs font-bold text-sky-400 tracking-wide uppercase">{sol.category}</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.05]"
                  >
                    {sol.title}
                  </motion.h1>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mb-6"
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-400 text-lg leading-relaxed mb-8"
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
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                          <MIcon size={14} className="text-sky-400" />
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-500 uppercase tracking-wider">{label}</div>
                          <div className="text-xs font-black text-white">{value}</div>
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
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black bg-white hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5"
                    >
                      Get a Free Consultation <ArrowRight size={16} />
                    </Link>
                    <Link href="/demo"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm hover:-translate-y-0.5"
                    >
                      Request Demo <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Right: Image with animations */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Background glow */}
                  <div className="absolute -inset-6 bg-blue-500/15 blur-3xl rounded-full" />

                  {/* Image container — wider now */}
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 w-full">

                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent z-20 pointer-events-none"
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Pulsing corner frames */}
                    <div className="absolute top-3 left-3 z-20 pointer-events-none">
                      <motion.div
                        className="w-6 h-6 border-l-2 border-t-2 border-sky-400 rounded-tl"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="absolute top-3 right-3 z-20 pointer-events-none">
                      <motion.div
                        className="w-6 h-6 border-r-2 border-t-2 border-sky-400 rounded-tr"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>
                    <div className="absolute bottom-20 left-3 z-20 pointer-events-none">
                      <motion.div
                        className="w-6 h-6 border-l-2 border-b-2 border-sky-400 rounded-bl"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                    <div className="absolute bottom-20 right-3 z-20 pointer-events-none">
                      <motion.div
                        className="w-6 h-6 border-r-2 border-b-2 border-sky-400 rounded-br"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      />
                    </div>

                    {/* Image — wider and taller */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={heroImage}
                      alt={sol.title}
                      className="w-full h-[500px] object-contain object-center bg-[#050E1F] transition-transform duration-700 hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />

                    {/* Live market mini ticker */}
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
                            className="flex items-center gap-1.5 bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5"
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

                    {/* Bottom floating badge */}
                    <div className="absolute bottom-5 left-5 right-5 bg-[#0A1628]/95 backdrop-blur-md rounded-2xl px-5 py-3.5 flex items-center gap-3 border border-white/10 z-10">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-white">{sol.title}</div>
                        <div className="text-[10px] text-sky-400 font-semibold uppercase">{sol.category}</div>
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
                    transition={{ opacity: { delay: 1 }, x: { delay: 1 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute -left-12 top-1/3 bg-[#0A1628]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden xl:block"
                  >
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Deployment</div>
                    <div className="text-xl font-black text-white">7 Days</div>
                    <div className="text-[9px] text-emerald-400 font-bold">✓ Guaranteed</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                    transition={{ opacity: { delay: 1.2 }, x: { delay: 1.2 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute -right-12 top-1/2 bg-[#0A1628]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl hidden xl:block"
                  >
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Clients</div>
                    <div className="text-xl font-black text-white">200+</div>
                    <div className="text-[9px] text-sky-400 font-bold">Worldwide</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ===== FEATURES SECTION ===== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-xs font-bold text-sky-400 tracking-wide uppercase">Included Features</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Everything in{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                    {sol.title}
                  </span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
                    className="rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:border-sky-400/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all flex items-start gap-3 group"
                  >
                    <CheckCircle size={20} className="text-sky-400 shrink-0 mt-0.5 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== CTA SECTION ===== */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B1B3F] via-[#0d2456] to-[#0B1B3F] p-10 sm:p-16 text-center border border-white/5 shadow-[0_30px_80px_rgba(11,27,63,0.6)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-blue-500/25 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-sky-500/20 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide uppercase">Ready to Deploy</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                    Ready to Get Started with <br />
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">{sol.title}?</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    Let&apos;s discuss how {sol.title} can power your business with enterprise-grade infrastructure.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 justify-center rounded-xl px-8 py-4 text-base font-bold text-black bg-white hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:-translate-y-0.5"
                    >
                      Talk to Our Team <ArrowRight size={16} />
                    </Link>
                    <Link href="/demo"
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