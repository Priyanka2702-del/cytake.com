"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Rocket, Building2, Network } from "lucide-react";
import { industries } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "forex-brokers": Globe,
  "prop-firms": TrendingUp,
  "fintech-startups": Rocket,
  "trading-businesses": Building2,
  "saas-platforms": Network,
};

const cardGradients = [
  "from-blue-600 to-sky-500",
  "from-indigo-600 to-blue-500",
  "from-sky-500 to-cyan-400",
  "from-blue-700 to-indigo-500",
  "from-cyan-600 to-blue-500",
];

const imageMap: Record<string, string> = {
  "forex-brokers": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80",
  "prop-firms": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  "fintech-startups": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  "trading-businesses": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80",
  "saas-platforms": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
};

function IndustryCard({ industry, index }: { industry: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-40, 40], [10, -10]), { stiffness: 280, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-40, 40], [-10, 10]), { stiffness: 280, damping: 25 });
  const glowX = useTransform(x, [-40, 40], [0, 100]);
  const glowY = useTransform(y, [-40, 40], [0, 100]);

  const Icon = iconMap[industry.slug] || Globe;
  const gradient = cardGradients[index % cardGradients.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {/* TOP: Real Image */}
      <div className="relative h-44 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageMap[industry.slug] || imageMap["forex-brokers"]}
          alt={industry.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full bg-white/20 blur-2xl" animate={{ x: [0, 15, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-[-20px] left-[-20px] w-28 h-28 rounded-full bg-white/15 blur-2xl" animate={{ x: [0, -15, 0], y: [0, -15, 0], scale: [1, 1.3, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <svg className="absolute bottom-0 left-0 w-full h-20 opacity-40" viewBox="0 0 400 80" preserveAspectRatio="none">
          <motion.polyline points="0,60 50,45 100,55 150,30 200,40 250,20 300,35 350,15 400,25" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }} />
        </svg>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)] -translate-x-full group-hover:translate-x-full" style={{ transition: "transform 0.8s, opacity 0.3s" }} />
      </div>

      {/* BOTTOM: Content — token-driven */}
      <div className="relative px-6 pt-6 pb-7 bg-[var(--card-content-bg)]">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: useTransform([glowX, glowY], ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(56,189,248,0.1), transparent 60%)`) }}
        />

        <h3 className="relative z-10 font-bold text-base leading-tight mb-2 transition-colors text-[var(--card-content-text)] group-hover:text-sky-500">
          {industry.title}
        </h3>
        <p className="relative z-10 text-xs leading-relaxed line-clamp-2 mb-4 text-[var(--card-content-muted)]">
          {industry.shortDesc}
        </p>

        <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
          {industry.solutions.slice(0, 3).map((s: string) => (
            <span key={s} className="text-[9px] px-2 py-1 rounded-md bg-sky-400/10 border border-sky-400/20 text-sky-500 font-medium">
              {s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex items-center text-sky-500 text-xs font-semibold group-hover:gap-2 transition-all">
          Explore solutions
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--section-bg-1)]">
      {/* gradient overlay via tokens */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }}
      />

      {/* Glowing Orbs */}
      <motion.div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px] pointer-events-none" animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Trading Charts */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-50" animate={{ x: ["-3%", "3%", "-3%"] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <motion.path d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 3, ease: "easeInOut" }} />
          {[
            { x: 70, o: 510, c: 470, h: 455, l: 525 }, { x: 210, o: 480, c: 440, h: 425, l: 495 }, { x: 350, o: 480, c: 400, h: 385, l: 495 }, { x: 490, o: 450, c: 370, h: 355, l: 465 }, { x: 630, o: 420, c: 340, h: 325, l: 435 }, { x: 770, o: 390, c: 310, h: 295, l: 405 }, { x: 910, o: 360, c: 290, h: 275, l: 375 }, { x: 1050, o: 340, c: 270, h: 255, l: 355 }, { x: 1190, o: 320, c: 250, h: 235, l: 335 }, { x: 1330, o: 290, c: 220, h: 205, l: 305 },
          ].map((c, i) => (
            <g key={i}>
              <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke="#22C55E" strokeWidth="1.5" opacity="0.5" />
              <rect x={c.x - 6} y={Math.min(c.o, c.c)} width="12" height={Math.max(4, Math.abs(c.o - c.c))} fill="#22C55E" opacity="0.4" rx="1.5" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Lower chart line */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-40" animate={{ x: ["2%", "-2%", "2%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Glowing dots traveling */}
      {[{ top: "30%", delay: 0, duration: 16 }, { top: "55%", delay: 5, duration: 20 }, { top: "70%", delay: 9, duration: 18 }].map((dot, i) => (
        <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] pointer-events-none" style={{ top: dot.top, left: "-2%" }} animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }} transition={{ duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay, opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity } }} />
      ))}

      {/* ============ CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Industries We Serve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Every Forex & Fintech</span>{" "}
            Business
          </h2>

          <p className="text-[var(--section-text-muted)] text-lg max-w-2xl mx-auto">
            Specialized infrastructure tailored to the unique needs of each industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.slug} industry={industry} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-14">
          <Link href="/industries" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:shadow-[0_8px_25px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 transition-all">
            Explore all industries <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}