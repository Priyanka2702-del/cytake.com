"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, TrendingUp, Users, BarChart3, CreditCard, Cloud, Bot, Layers, Shield, Cpu, Share2 } from "lucide-react";
import { solutions } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "forex-broker-infrastructure": Server, "prop-firm-technology": TrendingUp,
  "trading-crm-systems": Users, "trader-ib-portals": BarChart3,
  "payment-gateway-integration": CreditCard, "vps-cloud-infrastructure": Cloud,
  "ai-automation-systems": Bot, "white-label-trading": Layers,
  "risk-management-systems": Shield, "trading-platform-integration": Cpu,
  "affiliate-referral-systems": Share2,
};

const imageMap: Record<string, string> = {
  "forex-broker-infrastructure": "/stack/forex-broker.jpg",

  "prop-firm-technology": "/stack/prop-firm.jpg",

  "trading-crm-systems": "/stack/trading-crm.jpg",

  "trader-ib-portals": "/stack/trader-portal.jpg",

  "payment-gateway-integration": "/stack/payment-gateway.jpg",

  "vps-cloud-infrastructure": "/stack/cloud-infrastructure.jpg",

  "ai-automation-systems": "/stack/ai-automation.jpg",

  "white-label-trading": "/stack/white-label-trading.jpg",

  "risk-management-systems": "/stack/risk-management.jpg",

  "trading-platform-integration": "/stack/trading-platform.jpg",

  "affiliate-referral-systems": "/stack/affiliate-referral.jpg",

  "ai-trading-robot": "/stack/ai-trading-robot.jpg",
};

export default function SolutionsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0A1628] to-[#020617]">

      {/* ============ EXACT SAME BACKGROUND AS STATSSECTION ============ */}

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

      {/* Floating Trading Chart Line */}
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-bold text-sky-400 tracking-wide uppercase">Complete Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Everything Your Trading Business{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Needs to Succeed
            </span>
          </h2>
          <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
            11 enterprise solutions built specifically for forex brokers, prop firms, and fintech businesses.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {solutions.map((sol, i) => {
            const Icon = iconMap[sol.slug] || Server;
            const image = imageMap[sol.slug] || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80";

            return (
              <motion.div
                key={sol.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="relative group block rounded-2xl overflow-hidden h-64 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                  />

                  {/* Default Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* DEFAULT CONTENT */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-2">
                      {sol.category}
                    </div>
                    <h3 className="font-black text-white text-lg leading-tight">
                      {sol.title}
                    </h3>
                  </div>

                  {/* HOVER CONTENT */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shadow-lg`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-2">
                        {sol.category}
                      </div>
                      <h3 className="font-black text-white text-base leading-tight mb-3">
                        {sol.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed mb-3">
                        {sol.shortDesc}
                      </p>
                      <div className="flex items-center gap-1 text-sky-400 text-xs font-bold">
                        Learn more <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-black bg-white hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Explore all 11 solutions in detail <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}