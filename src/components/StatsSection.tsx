"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Globe, Shield, Zap, Award, Clock } from "lucide-react";

const statsData = [
  { value: 200, suffix: "+", label: "Brokers Powered", desc: "Active forex and prop firm clients", icon: TrendingUp, color: "from-blue-500 to-sky-400", glow: "rgba(56,189,248,0.4)" },
  { value: 50, suffix: "+", label: "Countries Served", desc: "Global reach across all continents", icon: Globe, color: "from-indigo-500 to-blue-400", glow: "rgba(99,102,241,0.4)" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", desc: "Enterprise reliability guarantee", icon: Shield, color: "from-emerald-500 to-teal-400", glow: "rgba(16,185,129,0.4)" },
  { value: 5, suffix: "B+", label: "Volume Processed", desc: "USD in trading volume supported", icon: Zap, color: "from-amber-500 to-yellow-400", glow: "rgba(245,158,11,0.4)" },
  { value: 7, suffix: "+", label: "Years of Excellence", desc: "Proven forex technology expertise", icon: Award, color: "from-purple-500 to-indigo-400", glow: "rgba(168,85,247,0.4)" },
  { value: 24, suffix: "/7", label: "Support Coverage", desc: "Round-the-clock technical support", icon: Clock, color: "from-sky-500 to-cyan-400", glow: "rgba(14,165,233,0.4)" },
];

function Counter({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepMs = 16;
    const increment = (target / duration) * stepMs;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(start); }
    }, stepMs);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--section-bg-1)]">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }}
      />

      <motion.div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px] pointer-events-none" animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Our Numbers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
            Powering <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Global Trading</span> at Scale
          </h2>
          <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">The numbers behind our global infrastructure footprint.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ y: -8 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative group rounded-2xl text-center cursor-default h-full">
                <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px] pointer-events-none" style={{ background: `linear-gradient(135deg, ${stat.glow}, transparent 60%, ${stat.glow})` }} />
                <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.12)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]" />

                <div className="relative rounded-2xl p-5 z-[3] h-full flex flex-col items-center backdrop-blur-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] transition-all duration-500 group-hover:border-white/[0.18]">
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-t-2xl`} />

                  <motion.div whileHover={{ rotate: 12, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }} className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 mt-1 shadow-[0_4px_15px_rgba(0,0,0,0.2)]`}>
                    <Icon size={18} className="text-white drop-shadow-sm" />
                  </motion.div>

                  <div className="relative z-10 text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-1 group-hover:text-white transition-colors duration-300">
                    <Counter target={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                  </div>

                  <div className="relative z-10 text-xs font-black text-[var(--section-text)] mt-1 tracking-wide group-hover:text-white/90 transition-colors duration-300">{stat.label}</div>
                  <div className="relative z-10 text-[10px] text-[var(--section-text-muted)] mt-1.5 leading-tight group-hover:text-white/50 transition-colors duration-300">{stat.desc}</div>

                  <div className="mt-auto pt-3 w-full">
                    <div className="h-[1px] w-0 group-hover:w-full mx-auto transition-all duration-700 ease-out" style={{ background: `linear-gradient(to right, transparent, ${stat.glow}, transparent)` }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 p-8 text-center shadow-[0_20px_60px_rgba(56,189,248,0.3)]">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Join 200+ Brokers Worldwide</h3>
            <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">Start building your forex or prop firm infrastructure today with CYTAKE.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.a href="/contact#demo" whileHover={{ scale: 1.05, y: -2 }} className="px-7 py-3 rounded-xl bg-white text-blue-600 font-black text-sm shadow-lg hover:shadow-xl transition-all">Request Demo</motion.a>
              <motion.a href="/solutions" whileHover={{ scale: 1.05, y: -2 }} className="px-7 py-3 rounded-xl bg-white/15 border border-white/30 text-white font-black text-sm hover:bg-white/25 transition-all">View Solutions →</motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}