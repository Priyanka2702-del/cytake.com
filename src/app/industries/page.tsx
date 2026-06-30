"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries, solutions } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Rocket,
  Building2,
  Network,
  CheckCircle,
  Server,
  Users,
  BarChart3,
  CreditCard,
  Cloud,
  Bot,
  Layers,
  Shield,
  Cpu,
  Share2,
} from "lucide-react";

const BLUE = "#005EFD";

const iconMap: Record<string, React.ElementType> = {
  "forex-brokers": Globe,
  "prop-firms": TrendingUp,
  "fintech-startups": Rocket,
  "trading-businesses": Building2,
  "saas-platforms": Network,
};

const solIconMap: Record<string, React.ElementType> = {
  "forex-broker-infrastructure": Server,
  "prop-firm-technology": TrendingUp,
  "trading-crm-systems": Users,
  "trader-ib-portals": BarChart3,
  "payment-gateway-integration": CreditCard,
  "vps-cloud-infrastructure": Cloud,
  "ai-automation-systems": Bot,
  "white-label-trading": Layers,
  "risk-management-systems": Shield,
  "trading-platform-integration": Cpu,
  "affiliate-referral-systems": Share2,
};

const challengesMap: Record<string, string[]> = {
  "forex-brokers": [
    "Setting up MT4/MT5 servers quickly and reliably",
    "Managing risk and A/B book effectively",
    "Onboarding clients with KYC/AML compliance",
    "Integrating multiple payment providers globally",
    "Supporting IBs with transparent commission tracking",
  ],
  "prop-firms": [
    "Building a scalable challenge and evaluation system",
    "Monitoring trader risk in real time across thousands of accounts",
    "Automating funded account provisioning and payout",
    "Managing affiliates and referral programs",
    "Providing traders with professional dashboards",
  ],
  "fintech-startups": [
    "Getting to market faster with pre-built infrastructure",
    "Integrating payment gateways across multiple regions",
    "Building KYC and compliance workflows quickly",
    "Scaling infrastructure as users grow",
    "Connecting to trading platforms and liquidity",
  ],
  "trading-businesses": [
    "Low-latency VPS near liquidity hubs",
    "Reliable cloud infrastructure for trading systems",
    "Risk analytics and position monitoring",
    "AI-powered automation for operational efficiency",
    "Connecting to trading platforms and APIs",
  ],
  "saas-platforms": [
    "Building white-label products on proven infrastructure",
    "Processing payments across multiple jurisdictions",
    "Scaling to thousands of clients rapidly",
    "Compliance-ready KYC and AML pipelines",
    "Referral and affiliate program management",
  ],
};

export default function IndustriesPage() {
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

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Solution card */
        .sol-card {
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
            0 4px 30px rgba(0, 0, 0, 0.2),
            0 0 40px rgba(0, 94, 253, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
        }

        .sol-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            transparent 20%,
            rgba(0, 94, 253, 0.2) 40%,
            rgba(0, 94, 253, 0.1) 60%,
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

        .sol-card::after {
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
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .sol-card:hover::after {
          opacity: 1;
        }

        .sol-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 12px 50px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(0, 94, 253, 0.1),
            0 0 100px rgba(0, 94, 253, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(0, 94, 253, 0.07) 50%,
            rgba(0, 94, 253, 0.02) 100%
          );
        }

        .sol-card .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
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

        .sol-card:hover .shine {
          left: 100%;
        }

        .sol-card .glow-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(0, 94, 253, 0.7);
          box-shadow: 0 0 10px rgba(0, 94, 253, 0.5);
          animation: glow-pulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        .sol-card .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(0, 94, 253, 0.5);
          pointer-events: none;
          opacity: 0;
        }

        .sol-card:hover .particle {
          animation: particle-float 2s ease-out infinite;
        }

        /* Challenge item */
        .challenge-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .challenge-item:hover {
          transform: translateX(4px);
        }

        /* Industry section divider */
        .section-divider {
          background: linear-gradient(
            to right,
            transparent,
            rgba(0, 94, 253, 0.3),
            transparent
          );
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
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ x: ["-3%", "3%", "-3%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1400 800"
              preserveAspectRatio="none"
            >
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
              {[70, 210, 350, 490, 630, 770, 910, 1050, 1190, 1330].map(
                (cx, i) => (
                  <g key={i}>
                    <line
                      x1={cx}
                      y1={
                        [455, 425, 385, 355, 325, 295, 275, 255, 235, 205][i]
                      }
                      x2={cx}
                      y2={
                        [525, 495, 495, 465, 435, 405, 375, 355, 335, 305][i]
                      }
                      stroke="#22C55E"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <rect
                      x={cx - 6}
                      y={[470, 440, 400, 370, 340, 310, 290, 270, 250, 220][i]}
                      width="12"
                      height="30"
                      fill="#22C55E"
                      opacity="0.4"
                      rx="1.5"
                    />
                  </g>
                )
              )}
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
                opacity: {
                  duration: dot.duration,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                },
              }}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 pt-20">
          {/* HERO */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(0,94,253,0.1)`,
                      `0 0 40px rgba(0,94,253,0.2)`,
                      `0 0 20px rgba(0,94,253,0.1)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5"
                  style={{
                    background: "rgba(0,94,253,0.08)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: BLUE }}
                  />
                  <span
                    className="text-xs font-bold tracking-wide uppercase"
                    style={{ color: BLUE }}
                  >
                    Industries
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--section-text)] mb-6">
                  Built for{" "}
                  <span style={{ color: BLUE }}>Every Forex & Fintech</span>{" "}
                  Business
                </h1>
                <p className="text-[var(--section-text-muted)] text-xl max-w-3xl mx-auto">
                  Specialized enterprise infrastructure for brokers, prop firms,
                  fintech startups, and trading businesses. Tailored to the
                  specific challenges of each industry.
                </p>
              </motion.div>
            </div>
          </section>

          {/* INDUSTRY DETAIL SECTIONS */}
          {industries.map((ind, idx) => {
            const Icon = iconMap[ind.slug] || Globe;
            const relatedSols = solutions.filter((s) =>
              ind.solutions.includes(s.slug)
            );
            const isEven = idx % 2 === 0;
            const challenges = challengesMap[ind.slug] || [];

            return (
              <section key={ind.slug} id={ind.slug} className="py-20 relative">
                {/* Section divider */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px section-divider" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Info */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={!isEven ? "lg:order-2" : ""}
                    >
                      {/* Premium Icon */}
                      <div className="relative inline-flex mb-6">
                        <span
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${ind.color} opacity-20 blur-xl animate-pulse`}
                        />
                        <span className="absolute -inset-1 rounded-3xl bg-[conic-gradient(from_0deg,transparent,#005EFD,#0043b5,transparent)] opacity-40 animate-spin-slow" />
                        <div
                          className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${ind.color} flex items-center justify-center shadow-2xl`}
                        >
                          <span className="absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_50%)]" />
                          <Icon
                            size={34}
                            className="relative text-white drop-shadow-lg"
                          />
                        </div>
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[var(--section-bg-1)] animate-pulse" />
                      </div>

                      {/* Label chip */}
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ml-3"
                        style={{
                          background: "rgba(0,94,253,0.08)",
                        }}
                      >
                        <span
                          className="text-[10px] font-black uppercase tracking-widest"
                          style={{ color: BLUE }}
                        >
                          Industry {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                        {ind.title}
                      </h2>
                      <p className="text-[var(--section-text-muted)] text-lg leading-relaxed mb-8">
                        {ind.description}
                      </p>

                      <h3
                        className="text-sm font-bold uppercase tracking-widest mb-4"
                        style={{ color: BLUE }}
                      >
                        Key Challenges We Solve
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {challenges.map((c) => (
                          <li
                            key={c}
                            className="challenge-item flex items-start gap-2.5 text-sm text-[var(--section-text-muted)]"
                          >
                            <span
                              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                              style={{ background: "rgba(0,94,253,0.1)" }}
                            >
                              <CheckCircle
                                size={12}
                                style={{ color: BLUE }}
                              />
                            </span>
                            {c}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 text-white"
                        style={{
                          background: `linear-gradient(135deg, ${BLUE}, #0043b5)`,
                          boxShadow: "0 8px 25px rgba(0,94,253,0.25)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 30px rgba(0,94,253,0.4), 0 8px 25px rgba(0,94,253,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 8px 25px rgba(0,94,253,0.25)";
                        }}
                      >
                        Get a Custom Quote <ArrowRight size={15} />
                      </Link>
                    </motion.div>

                    {/* Recommended Solutions */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={!isEven ? "lg:order-1" : ""}
                    >
                      <h3
                        className="text-sm font-bold uppercase tracking-widest mb-5"
                        style={{ color: BLUE }}
                      >
                        Recommended Solutions
                      </h3>
                      <div className="space-y-3">
                        {relatedSols.map((sol, si) => {
                          const SolIcon = solIconMap[sol.slug] || Server;
                          return (
                            <Link
                              key={sol.slug}
                              href={`/solutions/${sol.slug}`}
                              className="sol-card rounded-2xl p-5 flex items-start gap-4 group block backdrop-blur-sm"
                            >
                              <div className="shine" />
                              <div
                                className="glow-dot"
                                style={{ top: "10px", right: "10px" }}
                              />
                              <div
                                className="particle"
                                style={{
                                  bottom: "20%",
                                  left: "20%",
                                  animationDelay: `${si * 0.3}s`,
                                }}
                              />
                              <div
                                className="particle"
                                style={{
                                  bottom: "50%",
                                  right: "15%",
                                  animationDelay: `${si * 0.3 + 0.5}s`,
                                }}
                              />

                              {/* Icon */}
                              <div className="relative shrink-0 z-10">
                                <span
                                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${sol.color} opacity-30 blur-md group-hover:opacity-60 transition-opacity`}
                                />
                                <div
                                  className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                                >
                                  <SolIcon size={18} className="text-white" />
                                </div>
                              </div>

                              {/* Text */}
                              <div className="flex-1 relative z-10">
                                <div className="flex items-center justify-between">
                                  <h4
                                    className="text-sm font-bold text-[var(--section-text)] transition-colors duration-300"
                                    style={{}}
                                    onMouseEnter={(e) => {
                                      (
                                        e.currentTarget as HTMLElement
                                      ).style.color = BLUE;
                                    }}
                                    onMouseLeave={(e) => {
                                      (
                                        e.currentTarget as HTMLElement
                                      ).style.color = "";
                                    }}
                                  >
                                    {sol.title}
                                  </h4>
                                  <ArrowRight
                                    size={13}
                                    className="group-hover:translate-x-1 transition-transform shrink-0"
                                    style={{ color: BLUE }}
                                  />
                                </div>
                                <p className="text-xs text-[var(--section-text-muted)] mt-1 leading-relaxed">
                                  {sol.shortDesc.slice(0, 80)}…
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* CTA Banner */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0B1B3F 0%, #0d2456 50%, #0B1B3F 100%)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow:
                    "0 30px 80px rgba(11,27,63,0.6), 0 0 60px rgba(0,94,253,0.1)",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div
                  className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none"
                  style={{ background: "rgba(0,94,253,0.25)" }}
                />
                <div
                  className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none"
                  style={{ background: "rgba(0,94,253,0.15)" }}
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
                      Custom Solutions Available
                    </span>
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                    Don&apos;t See Your <br />
                    <span style={{ color: "#38BDF8" }}>Exact Use Case?</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    We work with a wide range of financial businesses. Talk to
                    us and we&apos;ll design a custom solution for your specific
                    needs.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 justify-center rounded-xl px-8 py-4 text-base font-bold text-black bg-white hover:bg-gray-100 transition-all hover:-translate-y-0.5 relative overflow-hidden group"
                      style={{
                        boxShadow: "0 0 20px rgba(255,255,255,0.15)",
                      }}
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