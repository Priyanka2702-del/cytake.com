"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Server,
  TrendingUp,
  Users,
  BarChart3,
  CreditCard,
  Cloud,
  Bot,
  Layers,
  Shield,
  Cpu,
  Share2,
  Globe,
  Rocket,
  Building2,
  Network,
  ArrowRight,
} from "lucide-react";
import { solutions, industries } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "forex-broker-infrastructure": Server,
  "prop-firm-technology": TrendingUp,
  "trading-crm-systems": Users,
  "trader-ib-portals": BarChart3,
  "payment-gateway-integration": CreditCard,
  "vps-cloud-infrastructure": Cloud,
  "ai-automation-systems": Bot,
  "ai-trading-robot": Bot,
  "white-label-trading": Layers,
  "risk-management-systems": Shield,
  "trading-platform-integration": Cpu,
  "affiliate-referral-systems": Share2,
  "forex-brokers": Globe,
  "prop-firms": TrendingUp,
  "fintech-startups": Rocket,
  "trading-businesses": Building2,
  "saas-platforms": Network,
};

const solutionCategories = [
  {
    label: "Core Infrastructure",
    slugs: [
      "forex-broker-infrastructure",
      "prop-firm-technology",
      "white-label-trading",
      "ai-trading-robot",
    ],
  },
  {
    label: "Client & Operations",
    slugs: [
      "trading-crm-systems",
      "trader-ib-portals",
      "affiliate-referral-systems",
    ],
  },
  {
    label: "Payments & Risk",
    slugs: ["payment-gateway-integration", "risk-management-systems"],
  },
  {
    label: "Technology",
    slugs: [
      "vps-cloud-infrastructure",
      "ai-automation-systems",
      "trading-platform-integration",
    ],
  },
];

const companyLinks = [
  {
    label: "About CYTAKE",
    href: "/about",
    desc: "Our story, mission, and global team",
  },
  {
    label: "Why Choose Us",
    href: "/about#why",
    desc: "What sets us apart worldwide",
  },
  { label: "Contact", href: "/contact", desc: "Connect with our team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const open = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const close = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const navBtnClass = (active: boolean) =>
    `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      active
        ? "text-blue-600 bg-blue-50"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
    }`;

  const navLinkClass = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      active
        ? "text-blue-600 bg-blue-50"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[100] w-[94%] sm:w-[96%] max-w-7xl"
      >
        <div
          className={`relative rounded-2xl transition-all duration-300 bg-gradient-to-r from-white via-sky-50 to-blue-50 backdrop-blur-xl border ${
            scrolled
              ? "shadow-[0_8px_40px_rgba(56,189,248,0.18)] border-sky-200"
              : "shadow-[0_4px_25px_rgba(0,0,0,0.08)] border-white/80"
          }`}
        >
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent rounded-full" />

          <div className="px-3 sm:px-4 lg:px-8">
            <div className="flex items-center justify-between h-14 lg:h-16">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center shrink-0 group -ml-2 sm:-ml-4 lg:-ml-5"
              >
                <div className="relative transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo-removebg-preview.png"
                    alt="Cytake Logo"
                    width={160}
                    height={48}
                    priority
                    className="h-auto w-[128px] sm:w-[145px] lg:w-[160px] object-contain"
                  />
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-1">
                {/* Solutions */}
                <div
                  className="relative"
                  onMouseEnter={() => open("solutions")}
                  onMouseLeave={close}
                >
                  <button
                    className={navBtnClass(
                      activeDropdown === "solutions" ||
                        pathname.startsWith("/solutions")
                    )}
                  >
                    Solutions{" "}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "solutions"
                          ? "rotate-180 text-blue-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "solutions" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] rounded-2xl shadow-[0_8px_50px_rgba(56,189,248,0.16)] border border-sky-200 p-6 bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200"
                        onMouseEnter={() => open("solutions")}
                        onMouseLeave={close}
                      >
                        <div className="grid grid-cols-4 gap-5">
                          {solutionCategories.map((cat) => (
                            <div key={cat.label}>
                              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3 px-2">
                                {cat.label}
                              </div>

                              <div className="space-y-0.5">
                                {solutions
                                  .filter((s) => cat.slugs.includes(s.slug))
                                  .map((sol) => {
                                    const Icon = iconMap[sol.slug] || Server;
                                    return (
                                      <Link
                                        key={sol.slug}
                                        href={`/solutions/${sol.slug}`}
                                        className="flex items-start gap-2.5 px-2 py-2 rounded-xl hover:bg-sky-100/80 group/i transition-all"
                                      >
                                        <div className="mt-0.5 w-7 h-7 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center shrink-0 group-hover/i:bg-sky-200 transition-colors">
                                          <Icon size={12} className="text-blue-600" />
                                        </div>

                                        <span className="text-[12px] font-medium text-gray-600 group-hover/i:text-blue-700 leading-tight transition-colors">
                                          {sol.title}
                                        </span>
                                      </Link>
                                    );
                                  })}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-sky-200 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            11 enterprise solutions for forex &amp; fintech
                            businesses worldwide
                          </span>

                          <Link
                            href="/solutions"
                            className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                          >
                            View all solutions <ArrowRight size={12} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries */}
                <div
                  className="relative"
                  onMouseEnter={() => open("industries")}
                  onMouseLeave={close}
                >
                  <button
                    className={navBtnClass(
                      activeDropdown === "industries" ||
                        pathname.startsWith("/industries")
                    )}
                  >
                    Industries{" "}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "industries"
                          ? "rotate-180 text-blue-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "industries" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl shadow-[0_8px_50px_rgba(56,189,248,0.16)] border border-sky-200 p-3 bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200"
                        onMouseEnter={() => open("industries")}
                        onMouseLeave={close}
                      >
                        {industries.map((ind) => {
                          const Icon = iconMap[ind.slug] || Globe;
                          return (
                            <Link
                              key={ind.slug}
                              href={`/industries#${ind.slug}`}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-100/80 group/i transition-all"
                            >
                              <div className="mt-0.5 w-8 h-8 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center shrink-0 group-hover/i:bg-sky-200 transition-colors">
                                <Icon size={14} className="text-blue-600" />
                              </div>

                              <div>
                                <div className="text-sm font-medium text-gray-700 group-hover/i:text-blue-700 transition-colors">
                                  {ind.title}
                                </div>
                                <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                                  {ind.shortDesc.slice(0, 50)}…
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Company */}
                <div
                  className="relative"
                  onMouseEnter={() => open("company")}
                  onMouseLeave={close}
                >
                  <button
                    className={navBtnClass(
                      activeDropdown === "company" ||
                        pathname.startsWith("/about")
                    )}
                  >
                    Company{" "}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "company"
                          ? "rotate-180 text-blue-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "company" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-3 w-56 rounded-2xl shadow-[0_8px_50px_rgba(56,189,248,0.16)] border border-sky-200 p-2 bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200"
                        onMouseEnter={() => open("company")}
                        onMouseLeave={close}
                      >
                        {companyLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-sky-100/80 transition-all group/c"
                          >
                            <span className="text-sm font-medium text-gray-700 group-hover/c:text-blue-700 transition-colors">
                              {link.label}
                            </span>

                            <span className="text-[11px] text-gray-500 mt-0.5">
                              {link.desc}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className={navLinkClass(pathname === "/contact")}
                >
                  Contact
                </Link>
              </div>

              {/* CTA Button */}
              <div className="hidden lg:flex items-center">
                <Link
                  href="/demo"
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 hover:shadow-[0_6px_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all border border-sky-100 bg-white/70"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={21} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="m"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={21} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay + Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute right-3 top-20 bottom-4 w-[calc(100vw-24px)] max-w-[390px] overflow-hidden rounded-3xl border border-sky-100 shadow-2xl bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200"
            >
              <div className="h-full overflow-y-auto px-4 pt-5 pb-28">
                <div className="space-y-1">
                  {/* Mobile Solutions */}
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === "solutions" ? null : "solutions"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-gray-800 hover:text-blue-700 hover:bg-blue-50 text-sm font-bold transition-all"
                  >
                    Solutions{" "}
                    <ChevronDown
                      size={14}
                      className={`transition-transform text-gray-400 ${
                        mobileExpanded === "solutions" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === "solutions" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-2"
                      >
                        {solutions.map((sol) => {
                          const Icon = iconMap[sol.slug] || Server;
                          return (
                            <Link
                              key={sol.slug}
                              href={`/solutions/${sol.slug}`}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-600 hover:text-blue-700 hover:bg-sky-100/70 text-sm transition-all"
                            >
                              <Icon size={14} className="text-blue-500 shrink-0" />
                              <span className="leading-tight">{sol.title}</span>
                            </Link>
                          );
                        })}

                        <Link
                          href="/solutions"
                          className="flex items-center gap-2 px-4 py-2.5 text-blue-600 text-sm font-bold"
                        >
                          View all <ArrowRight size={12} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mobile Industries */}
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === "industries" ? null : "industries"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-gray-800 hover:text-blue-700 hover:bg-blue-50 text-sm font-bold transition-all"
                  >
                    Industries{" "}
                    <ChevronDown
                      size={14}
                      className={`transition-transform text-gray-400 ${
                        mobileExpanded === "industries" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === "industries" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-2"
                      >
                        {industries.map((ind) => {
                          const Icon = iconMap[ind.slug] || Globe;
                          return (
                            <Link
                              key={ind.slug}
                              href={`/industries#${ind.slug}`}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-600 hover:text-blue-700 hover:bg-sky-100/70 text-sm transition-all"
                            >
                              <Icon size={14} className="text-blue-500 shrink-0" />
                              {ind.title}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link
                    href="/about"
                    className="flex px-4 py-3 rounded-2xl text-gray-800 hover:text-blue-700 hover:bg-blue-50 text-sm font-bold transition-all"
                  >
                    About
                  </Link>

                  <Link
                    href="/contact"
                    className="flex px-4 py-3 rounded-2xl text-gray-800 hover:text-blue-700 hover:bg-blue-50 text-sm font-bold transition-all"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Fixed Mobile CTA */}
              <div className="absolute left-0 right-0 bottom-0 p-4 border-t border-sky-100 bg-white/85 backdrop-blur-md">
                <Link
                  href="/demo"
                  className="w-full flex justify-center px-4 py-3 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 shadow-[0_8px_24px_rgba(56,189,248,0.35)]"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}