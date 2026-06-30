"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BLUE = "#005EFD";

const imageMap: Record<string, string> = {
  "forex-broker-infrastructure": "/solutions/forex.jpg",
  "prop-firm-technology": "/solutions/prop-firm.jpg",
  "ai-trading-robot": "/solutions/ai-robot.jpg",
  "trading-crm-systems": "/solutions/crm.jpg",
  "trader-ib-portals": "/solutions/ib-portals.jpg",
  "payment-gateway-integration": "/solutions/payment.jpg",
  "vps-cloud-infrastructure": "/solutions/vps.jpg",
  "ai-automation-systems": "/solutions/ai.jpg",
  "white-label-trading": "/solutions/white-label.jpg",
  "risk-management-systems": "/solutions/risk.jpg",
  "trading-platform-integration": "/solutions/platform.jpg",
  "affiliate-referral-systems": "/solutions/affiliate.jpg",
};

const DEFAULT_IMAGE = "/solutions/default.jpg";

export default function SolutionsPage() {
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

        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .sol-card {
          position: relative;
          background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(0, 94, 253, 0.04) 50%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: none !important;
          overflow: hidden;
          border-radius: 1.5rem;
          box-shadow:
            0 4px 30px rgba(0, 0, 0, 0.2),
            0 0 40px rgba(0, 94, 253, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transition: all 0.4s ease;
          height: 100%;
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
          z-index: 1;
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
            rgba(0, 94, 253, 0.07) 0%,
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
          transform: translateY(-8px) scale(1.01);
          box-shadow:
            0 16px 50px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(0, 94, 253, 0.1),
            0 0 100px rgba(0, 94, 253, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(0, 94, 253, 0.07) 50%,
            rgba(255, 255, 255, 0.03) 100%
          );
        }

        .sol-card .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
          );
          transition: left 0.8s ease;
          pointer-events: none;
          z-index: 2;
        }

        .sol-card:hover .shine {
          left: 150%;
        }

        .sol-card .glow-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(0, 94, 253, 0.8);
          box-shadow: 0 0 10px rgba(0, 94, 253, 0.6);
          animation: glow-pulse 3s ease-in-out infinite;
          pointer-events: none;
          z-index: 3;
        }

        .sol-card .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(0, 94, 253, 0.5);
          pointer-events: none;
          opacity: 0;
          z-index: 3;
        }

        .sol-card:hover .particle {
          animation: particle-float 2s ease-out infinite;
        }

        .sol-card .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0, 94, 253, 0.08) 100%
          );
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .sol-card:hover .img-overlay {
          opacity: 1;
        }

        .img-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.06),
            transparent
          );
          transform: translateX(-100%);
          pointer-events: none;
        }

        .sol-card:hover .img-shimmer {
          animation: shimmer-move 0.8s ease forwards;
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

        {/* Background blobs */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-[500px] h-[500px] blur-[120px] rounded-full"
            style={{ background: "rgba(0, 94, 253, 0.1)" }}
            animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full"
            style={{ background: "rgba(0, 94, 253, 0.07)" }}
            animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <div
            className="absolute w-[300px] h-[300px] blur-[80px] rounded-full top-[40%] left-[50%] -translate-x-1/2"
            style={{ background: "rgba(0, 94, 253, 0.04)" }}
          />
          {/* Animated grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Traveling dots */}
        {[
          { top: "20%", delay: 0, duration: 16 },
          { top: "55%", delay: 6, duration: 20 },
          { top: "80%", delay: 11, duration: 18 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="fixed w-2 h-2 rounded-full pointer-events-none z-0"
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

        <div className="relative z-10 pt-32 pb-24">
          {/* Hero */}
          <section className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0,94,253,0.1)",
                    "0 0 40px rgba(0,94,253,0.2)",
                    "0 0 20px rgba(0,94,253,0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: "rgba(0,94,253,0.1)",
                  color: BLUE,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: BLUE }}
                />
                Enterprise Solutions
              </motion.span>

              <h1 className="text-5xl md:text-6xl font-black text-[var(--section-text)] mb-6">
                Our{" "}
                <span style={{ color: BLUE }}>Solutions</span>
              </h1>

              <p className="max-w-3xl mx-auto text-[var(--section-text-muted)] text-lg">
                Powerful infrastructure, CRM systems, AI automation, trading
                technology and enterprise-grade solutions built for modern
                financial businesses.
              </p>
            </motion.div>
          </section>

          {/* Solutions Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const imageSrc =
                  (solution as { image?: string }).image ||
                  imageMap[solution.slug] ||
                  DEFAULT_IMAGE;

                return (
                  <motion.div
                    key={solution.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full"
                  >
                    <Link href={`/solutions/${solution.slug}`} className="h-full block">
                      <div className="sol-card group">
                        {/* Effects */}
                        <div className="shine" />
                        <div
                          className="glow-dot"
                          style={{ top: "12px", right: "12px" }}
                        />
                        <div
                          className="particle"
                          style={{
                            bottom: "25%",
                            left: "15%",
                            animationDelay: `${index * 0.2}s`,
                          }}
                        />
                        <div
                          className="particle"
                          style={{
                            bottom: "50%",
                            right: "10%",
                            animationDelay: `${index * 0.2 + 0.4}s`,
                          }}
                        />
                        <div
                          className="particle"
                          style={{
                            bottom: "15%",
                            left: "60%",
                            animationDelay: `${index * 0.2 + 0.8}s`,
                          }}
                        />

                        {/* Image */}
                        <div className="relative h-56 overflow-hidden bg-[#050E1F]">
                          <div className="img-overlay" />
                          <div className="img-shimmer" />
                          <img
                            src={imageSrc}
                            alt={solution.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = DEFAULT_IMAGE;
                            }}
                          />
                          {/* Category badge on image */}
                          <div className="absolute bottom-3 left-3 z-10">
                            <span
                              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm"
                              style={{
                                background: "rgba(0,94,253,0.2)",
                                color: "#fff",
                                border: "1px solid rgba(0,94,253,0.3)",
                              }}
                            >
                              {solution.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-6">
                          <h3 className="text-xl font-bold text-[var(--section-text)] mb-3 group-hover:text-[#005EFD] transition-colors duration-300">
                            {solution.title}
                          </h3>

                          <p className="text-[var(--section-text-muted)] text-sm leading-relaxed mb-6">
                            {solution.shortDesc}
                          </p>

                          {/* Bottom row */}
                          <div className="flex items-center justify-between">
                            <div
                              className="flex items-center gap-2 text-sm font-bold transition-all duration-300"
                              style={{ color: BLUE }}
                            >
                              Learn More
                              <ArrowRight
                                size={15}
                                className="group-hover:translate-x-1.5 transition-transform duration-300"
                              />
                            </div>

                            {/* Glowing indicator */}
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                style={{
                                  background: BLUE,
                                  boxShadow: `0 0 6px ${BLUE}`,
                                }}
                              />
                              <span
                                className="text-[10px] font-semibold"
                                style={{ color: BLUE }}
                              >
                                Active
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom glow line */}
                        <div
                          className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(to right, transparent, ${BLUE}60, transparent)`,
                          }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}