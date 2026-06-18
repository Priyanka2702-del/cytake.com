import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Server, TrendingUp, Users, BarChart3, CreditCard, Cloud, Bot, Layers, Shield, Cpu, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "11 enterprise solutions for forex brokers, prop firms, and fintech businesses. From broker infrastructure to AI automation, payment gateways, and trading CRMs.",
};

const iconMap: Record<string, React.ElementType> = {
  "forex-broker-infrastructure": Server, "prop-firm-technology": TrendingUp,
  "trading-crm-systems": Users, "trader-ib-portals": BarChart3,
  "payment-gateway-integration": CreditCard, "vps-cloud-infrastructure": Cloud,
  "ai-automation-systems": Bot, "white-label-trading": Layers,
  "risk-management-systems": Shield, "trading-platform-integration": Cpu,
  "affiliate-referral-systems": Share2,
};

const categories = [
  { label: "Core Infrastructure", slugs: ["forex-broker-infrastructure", "prop-firm-technology", "white-label-trading"] },
  { label: "Client Management", slugs: ["trading-crm-systems", "trader-ib-portals", "affiliate-referral-systems"] },
  { label: "Payments & Risk", slugs: ["payment-gateway-integration", "risk-management-systems"] },
  { label: "Technology & AI", slugs: ["vps-cloud-infrastructure", "ai-automation-systems", "trading-platform-integration"] },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="inline-flex items-center gap-2 badge-glow px-4 py-1.5 rounded-full mb-5">
              <span className="text-xs font-medium text-blue-600 tracking-wide">Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Complete Forex & Fintech <br />
              <span className="gradient-text">Infrastructure Stack</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-3xl mx-auto mb-10">
              11 purpose-built enterprise solutions for brokers, prop firms, and fintech businesses. From infrastructure to AI automation — everything under one roof.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary flex items-center gap-2 text-white rounded-xl px-8 py-4">
                Get a Free Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/contact#demo" className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-slate-700 hover:text-gray-900">
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions by category */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((cat) => {
              const catSolutions = solutions.filter(s => cat.slugs.includes(s.slug));
              return (
                <div key={cat.label} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xl font-bold text-gray-900">{cat.label}</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {catSolutions.map((sol) => {
                      const Icon = iconMap[sol.slug] || Server;
                      return (
                        <Link key={sol.slug} href={`/solutions/${sol.slug}`}
                          className="card-glow rounded-2xl p-7 flex flex-col group"
                        >
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                            <Icon size={20} className="text-gray-900" />
                          </div>
                          <div className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest mb-1">{sol.category}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-200 transition-colors">{sol.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed flex-1">{sol.shortDesc}</p>
                          <ul className="mt-5 space-y-1.5">
                            {sol.features.slice(0, 3).map((f) => (
                              <li key={f} className="flex items-start gap-2 text-xs text-slate-500">
                                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />{f}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-1 mt-6 text-blue-500 group-hover:text-blue-600 transition-colors text-sm font-medium">
                            View full details <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-slate-50 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Not Sure Which Solution You Need?</h2>
            <p className="text-slate-500 text-lg mb-8">Our team will analyse your requirements and recommend the right stack for your business. Free, no obligation.</p>
            <Link href="/contact" className="btn-primary flex items-center gap-2 text-white">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
