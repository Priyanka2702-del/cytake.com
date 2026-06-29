"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      <Navbar />

      <main className="min-h-screen bg-[var(--section-bg-1)]">
        {/* gradient base */}
        <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }} />

        {/* Background blobs */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 pt-32 pb-24">
          {/* Hero */}
          <section className="text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-500 text-sm font-semibold mb-6">
                Enterprise Solutions
              </span>

              <h1 className="text-5xl md:text-6xl font-black text-[var(--section-text)] mb-6">Our Solutions</h1>

              <p className="max-w-3xl mx-auto text-[var(--section-text-muted)] text-lg">
                Powerful infrastructure, CRM systems, AI automation, trading technology and enterprise-grade solutions built for modern financial businesses.
              </p>
            </motion.div>
          </section>

          {/* Solutions Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const imageSrc = (solution as { image?: string }).image || imageMap[solution.slug] || DEFAULT_IMAGE;

                return (
                  <motion.div key={solution.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                    <Link href={`/solutions/${solution.slug}`}>
                      <div className="group h-full rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-sky-400/40">
                        {/* Image (stays dark bg for loading) */}
                        <div className="h-56 overflow-hidden bg-[#050E1F]">
                          <img
                            src={imageSrc}
                            alt={solution.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_IMAGE; }}
                          />
                        </div>

                        {/* Content — token-driven */}
                        <div className="p-6 bg-[var(--card-content-bg)]">
                          <div className="mb-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-sky-500">{solution.category}</span>
                          </div>

                          <h3 className="text-xl font-bold text-[var(--card-content-text)] mb-3">{solution.title}</h3>

                          <p className="text-[var(--card-content-muted)] text-sm leading-relaxed mb-6">{solution.shortDesc}</p>

                          <div className="flex items-center gap-2 text-sky-500 font-semibold">
                            Learn More
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                          </div>
                        </div>
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