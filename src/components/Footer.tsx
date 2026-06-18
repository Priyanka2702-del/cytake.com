"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, BriefcaseBusiness, Users,TrendingUp, Rocket} from "lucide-react";
import { solutions, industries } from "@/lib/data";



const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why CYTAKE", href: "/about#why" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "All Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Schedule Demo", href: "/contact#demo" },
  { label: "Get Started", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    label: "TradingView",
    href: "https://www.tradingview.com/u/cytakeglobal",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4 4h4v4H4V4zm0 6h4v10H4V10zm6-6h4v16h-4V4zm6 6h4v10h-4V10z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#050E1F] to-[#020617] overflow-hidden border-t border-white/5">

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-sky-500/8 blur-[120px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* Hiring Banner */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
  <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-r from-[#071633] to-[#0A1F4D] p-8 lg:p-10 mb-12">

    <div className="grid lg:grid-cols-4 gap-8 items-center">

      <div className="lg:col-span-2 flex gap-6 items-start">

  <div className="w-16 h-16 rounded-2xl border border-sky-400/20 bg-sky-500/5 flex items-center justify-center shrink-0">
    <BriefcaseBusiness className="w-8 h-8 text-sky-400" />
  </div>

  <div>
    <h2 className="text-4xl font-black text-white mb-3">
      We're <span className="text-sky-400">Hiring!</span>
    </h2>

    <p className="text-slate-300">
      Join CYTAKE Global and help build the future of Forex &
      FinTech technology.
    </p>
  </div>

</div>

<div className="grid grid-cols-3 gap-6">

  <div>
    <Users className="w-6 h-6 text-sky-400 mb-2" />
    <h4 className="text-white font-bold">Global Team</h4>
    <p className="text-slate-400 text-sm">
      Work with talent across the world
    </p>
  </div>

  <div>
    <TrendingUp className="w-6 h-6 text-sky-400 mb-2" />
    <h4 className="text-white font-bold">Grow Together</h4>
    <p className="text-slate-400 text-sm">
      Learn, innovate & grow with us
    </p>
  </div>

  <div>
    <Rocket className="w-6 h-6 text-sky-400 mb-2" />
    <h4 className="text-white font-bold">Impact Millions</h4>
    <p className="text-slate-400 text-sm">
      Build solutions used by brokers worldwide
    </p>
  </div>

</div>

<div className="text-right">
  <Link
    href="/careers"
    className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold"
  >
    View Open Positions →
  </Link>
</div>
</div>
</div>
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ✅ Brand column — PNG Logo (same as Navbar) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center shrink-0 group mb-6">
  <div className="bg-white rounded-xl px-4 py-2 inline-flex items-center shadow-lg transition-transform duration-300 group-hover:scale-105">
    <Image
      src="/logo-removebg-preview.png"
      alt="Cytake Logo"
      width={160}
      height={48}
      priority
      style={{ objectFit: "contain" }}
    />
  </div>
</Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Enterprise forex &amp; fintech infrastructure for brokers, prop firms, and trading businesses worldwide. Technology | Trading | Trust.
            </p>

            <div className="space-y-2.5">
              <a href="mailto:info@cytake.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                <Mail size={14} className="text-sky-400 shrink-0" />
                info@cytake.com
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                <Phone size={14} className="text-sky-400 shrink-0" />
                WhatsApp Support
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin size={14} className="text-sky-400 shrink-0" />
                Global — 50+ Countries Served
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400/50 hover:bg-sky-500/20 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            </div>
          

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.slice(0, 6).map((sol) => (
                <li key={sol.slug}>
                  <Link href={`/solutions/${sol.slug}`} className="text-sm text-slate-400 hover:text-sky-400 transition-colors leading-tight">
                    {sol.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/solutions" className="text-sm text-sky-400 hover:text-sky-300 transition-colors font-semibold">
                  View all 11 solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mt-6 mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries#${ind.slug}`} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">{ind.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & CTA */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 mb-6">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <div className="rounded-2xl p-5 bg-gradient-to-br from-sky-500/15 to-blue-600/10 border border-sky-400/20 backdrop-blur-sm">
              <p className="text-xs text-white font-bold mb-1">Ready to launch?</p>
              <p className="text-xs text-slate-400 mb-3">Talk to our team today.</p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 text-[#020617] font-bold text-sm rounded-xl px-4 py-2.5 bg-gradient-to-r from-white to-sky-100 hover:shadow-[0_6px_20px_rgba(56,189,248,0.4)] transition-shadow"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-white/5" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} CYTAKE Global Technologies. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-xs text-slate-500 hover:text-sky-400 transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-500/20 hover:border-sky-400/50 transition-all shrink-0"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}