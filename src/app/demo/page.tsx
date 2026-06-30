"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  Globe,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";

const demoFeatures = [
  "Live MT4/MT5 infrastructure walkthrough",
  "CRM & client portal demonstration",
  "Payment gateway integration overview",
  "Risk management system demo",
  "Prop firm challenge engine preview",
  "Custom deployment timeline discussion",
];

const teamSizes = ["1-5", "6-20", "21-50", "51-200", "200+"];
const platforms = [
  "MT4",
  "MT5",
  "cTrader",
  "Proprietary",
  "Not Sure Yet",
  "Currently Building",
];
const demoTimes = [
  "Morning (9AM - 12PM)",
  "Afternoon (12PM - 4PM)",
  "Evening (4PM - 7PM)",
  "Flexible / Any Time",
];

export default function DemoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    platform: "",
    preferredTime: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const BLUE = "#005EFD";

  return (
    <>
      <style jsx global>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
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
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }

        .premium-card {
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
        }

        .premium-card::before {
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

        .premium-card::after {
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

        .premium-card:hover::after {
          opacity: 1;
        }

        .premium-card:hover {
          box-shadow:
            0 8px 40px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(0, 94, 253, 0.08),
            0 0 100px rgba(0, 94, 253, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(0, 94, 253, 0.06) 50%,
            rgba(0, 94, 253, 0.02) 100%
          );
        }

        .premium-card .shine-effect {
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

        .premium-card:hover .shine-effect {
          left: 100%;
        }

        .premium-card .glow-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(0, 94, 253, 0.7);
          box-shadow: 0 0 10px rgba(0, 94, 253, 0.5);
          animation: glow-pulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        .premium-card .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(0, 94, 253, 0.5);
          pointer-events: none;
          opacity: 0;
        }

        .premium-card:hover .particle {
          animation: particle-float 2s ease-out infinite;
        }

        .premium-form-card {
          position: relative;
          background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(0, 94, 253, 0.04) 30%,
            rgba(0, 94, 253, 0.01) 60%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: none !important;
          overflow: hidden;
          box-shadow:
            0 8px 60px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(0, 94, 253, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .premium-form-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(0, 94, 253, 0.25) 0%,
            transparent 30%,
            rgba(0, 94, 253, 0.1) 60%,
            rgba(0, 94, 253, 0.2) 100%
          );
          background-size: 200% 200%;
          animation: border-flow 6s ease-in-out infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .icon-glow {
          position: relative;
        }

        .icon-glow::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          background: radial-gradient(
            circle,
            rgba(0, 94, 253, 0.2) 0%,
            transparent 70%
          );
          animation: glow-pulse 3s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <Navbar />
      <main className="min-h-screen relative overflow-hidden bg-[var(--section-bg-1)]">
        {/* gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)`,
          }}
        />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(0, 94, 253, 0.12)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "rgba(0, 94, 253, 0.1)" }}
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div
          className="absolute w-[300px] h-[300px] blur-[60px] rounded-full top-[30%] right-[20%] pointer-events-none"
          style={{ background: "rgba(0, 94, 253, 0.05)" }}
        />
        <div
          className="absolute w-[200px] h-[200px] blur-[60px] rounded-full bottom-[20%] left-[10%] pointer-events-none"
          style={{ background: "rgba(0, 94, 253, 0.04)" }}
        />

        {/* Mouse follow glow */}
        <div
          className="fixed pointer-events-none z-20 w-[400px] h-[400px] rounded-full transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            background: "radial-gradient(circle, rgba(0,94,253,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Trading Chart */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-30"
          animate={{ x: ["-3%", "3%", "-3%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
            <motion.path
              d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290"
              fill="none"
              stroke={BLUE}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Glowing Traveling Dots */}
        {[
          { top: "25%", delay: 0, duration: 16 },
          { top: "60%", delay: 5, duration: 20 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
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
              opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity },
            }}
          />
        ))}

        {/* ============ CONTENT ============ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(16,185,129,0.1)",
                  "0 0 40px rgba(16,185,129,0.15)",
                  "0 0 20px rgba(16,185,129,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(16,185,129,0.05))",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-500 tracking-wide uppercase">
                Free · No Commitment · 30 Minutes
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--section-text)] mb-6 leading-tight">
              Book Your <br />
              <span style={{ color: BLUE }}>Live Demo</span>
            </h1>
            <p className="text-[var(--section-text-muted)] text-xl max-w-2xl mx-auto">
              See exactly how CYTAKE powers real brokerages. A personalized walkthrough built around your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: What You'll See */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* What's Included */}
              <div className="premium-card rounded-2xl p-6 backdrop-blur-sm">
                <div className="shine-effect" />
                <div className="glow-dot" style={{ top: "12px", right: "12px" }} />
                <div className="particle" style={{ bottom: "20%", left: "30%", animationDelay: "0.5s" }} />
                <div className="particle" style={{ bottom: "50%", right: "20%", animationDelay: "1s" }} />

                <div className="relative z-10">
                  <h3 className="text-[var(--section-text)] font-black text-lg mb-5">
                    What You&apos;ll See in the Demo
                  </h3>
                  <ul className="space-y-3">
                    {demoFeatures.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-start gap-3 text-sm text-[var(--section-text-muted)]"
                      >
                        <CheckCircle
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color: BLUE, filter: `drop-shadow(0 0 4px rgba(0,94,253,0.4))` }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Clock, label: "Duration", value: "30-45 mins" },
                  { icon: Globe, label: "Format", value: "Video Call" },
                  { icon: Users, label: "Team", value: "Expert Guided" },
                  { icon: Calendar, label: "Response", value: "Within 2 hrs" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="premium-card rounded-xl p-4 text-center transition-all duration-500"
                  >
                    <div className="shine-effect" />
                    <div className="relative z-10">
                      <div
                        className="icon-glow w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2"
                        style={{ background: "rgba(0, 94, 253, 0.1)" }}
                      >
                        <Icon
                          size={16}
                          style={{ color: BLUE, filter: `drop-shadow(0 0 6px rgba(0,94,253,0.5))` }}
                        />
                      </div>
                      <div className="text-[10px] text-[var(--section-text-muted)] uppercase tracking-wider">
                        {label}
                      </div>
                      <div className="text-sm font-bold text-[var(--section-text)] mt-0.5">
                        {value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="premium-card rounded-2xl p-5 backdrop-blur-sm">
                <div className="shine-effect" />
                <div className="glow-dot" style={{ bottom: "12px", right: "12px" }} />

                <div className="relative z-10 space-y-3">
                  <h4 className="text-[var(--section-text)] font-bold text-sm mb-3">
                    Prefer to reach out directly?
                  </h4>
                  <a
                    href="mailto:info@cytake.com"
                    className="flex items-center gap-3 text-sm text-[var(--section-text-muted)] transition-colors"
                    style={{ ["--hover-color" as string]: BLUE }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    <div
                      className="icon-glow w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(0, 94, 253, 0.1)" }}
                    >
                      <Mail size={14} style={{ color: BLUE }} />
                    </div>
                    info@cytake.com
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    className="flex items-center gap-3 text-sm text-[var(--section-text-muted)] transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    <div
                      className="icon-glow w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(0, 94, 253, 0.1)" }}
                    >
                      <Phone size={14} style={{ color: BLUE }} />
                    </div>
                    WhatsApp — Available 24/7
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="premium-form-card rounded-3xl p-8 backdrop-blur-xl">
                <div className="relative z-10">
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                      >
                        <CheckCircle size={36} className="text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-black text-[var(--section-text)] mb-3">
                        Demo Request Submitted!
                      </h3>
                      <p className="text-[var(--section-text-muted)] mb-2">
                        Our team will contact you within{" "}
                        <span style={{ color: BLUE }} className="font-bold">2 hours</span>{" "}
                        to confirm your demo slot.
                      </p>
                      <p className="text-[var(--section-text-muted)] text-sm">
                        Check your email for a confirmation.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-[var(--section-text)] font-black text-xl mb-1">
                          Schedule Your Demo
                        </h3>
                        <p className="text-[var(--section-text-muted)] text-sm">
                          Fill in the details and we&apos;ll set up a personalized session for you.
                        </p>
                      </div>

                      {/* Name & Email */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { name: "name", label: "Full Name *", icon: User, placeholder: "John Mitchell", type: "text", required: true },
                          { name: "email", label: "Work Email *", icon: Mail, placeholder: "john@company.com", type: "email", required: true },
                        ].map((field) => (
                          <div key={field.name}>
                            <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                              {field.label}
                            </label>
                            <div
                              className="relative flex items-center rounded-xl transition-all duration-300"
                              style={{
                                background: focusedField === field.name ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                                boxShadow: focusedField === field.name ? "0 0 25px rgba(0,94,253,0.12)" : "none",
                              }}
                              onMouseEnter={(e) => {
                                if (focusedField !== field.name)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                              }}
                              onMouseLeave={(e) => {
                                if (focusedField !== field.name)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                              }}
                            >
                              <div
                                className="flex items-center justify-center w-10 pl-3 transition-colors duration-300"
                                style={{ color: focusedField === field.name ? BLUE : "var(--section-text-muted)" }}
                              >
                                <field.icon size={16} />
                              </div>
                              <div
                                className="w-px h-5 mx-2 transition-colors duration-300"
                                style={{ background: focusedField === field.name ? "rgba(0,94,253,0.3)" : "rgba(255,255,255,0.1)" }}
                              />
                              <input
                                name={field.name}
                                type={field.type}
                                value={form[field.name as keyof typeof form]}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(field.name)}
                                onBlur={() => setFocusedField(null)}
                                required={field.required}
                                placeholder={field.placeholder}
                                className="flex-1 bg-transparent py-3 pr-3 outline-none text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] text-sm"
                              />
                              <div
                                className="absolute bottom-0 left-3 right-3 h-px transition-all duration-500"
                                style={{
                                  background: focusedField === field.name
                                    ? `linear-gradient(to right, transparent, ${BLUE}80, transparent)`
                                    : "transparent",
                                  opacity: focusedField === field.name ? 1 : 0,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Company & Phone */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { name: "company", label: "Company Name *", icon: Building2, placeholder: "Acme Brokers Ltd", type: "text", required: true },
                          { name: "phone", label: "Phone / WhatsApp", icon: Phone, placeholder: "+1 234 567 890", type: "text", required: false },
                        ].map((field) => (
                          <div key={field.name}>
                            <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                              {field.label}
                            </label>
                            <div
                              className="relative flex items-center rounded-xl transition-all duration-300"
                              style={{
                                background: focusedField === field.name ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                                boxShadow: focusedField === field.name ? "0 0 25px rgba(0,94,253,0.12)" : "none",
                              }}
                              onMouseEnter={(e) => {
                                if (focusedField !== field.name)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                              }}
                              onMouseLeave={(e) => {
                                if (focusedField !== field.name)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                              }}
                            >
                              <div
                                className="flex items-center justify-center w-10 pl-3 transition-colors duration-300"
                                style={{ color: focusedField === field.name ? BLUE : "var(--section-text-muted)" }}
                              >
                                <field.icon size={16} />
                              </div>
                              <div
                                className="w-px h-5 mx-2 transition-colors duration-300"
                                style={{ background: focusedField === field.name ? "rgba(0,94,253,0.3)" : "rgba(255,255,255,0.1)" }}
                              />
                              <input
                                name={field.name}
                                type={field.type}
                                value={form[field.name as keyof typeof form]}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(field.name)}
                                onBlur={() => setFocusedField(null)}
                                required={field.required}
                                placeholder={field.placeholder}
                                className="flex-1 bg-transparent py-3 pr-3 outline-none text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] text-sm"
                              />
                              <div
                                className="absolute bottom-0 left-3 right-3 h-px transition-all duration-500"
                                style={{
                                  background: focusedField === field.name
                                    ? `linear-gradient(to right, transparent, ${BLUE}80, transparent)`
                                    : "transparent",
                                  opacity: focusedField === field.name ? 1 : 0,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Team Size & Platform */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { name: "teamSize", label: "Team Size", icon: Users, options: teamSizes, optionLabel: (s: string) => `${s} people`, defaultLabel: "Select team size…" },
                          { name: "platform", label: "Current / Target Platform", icon: Globe, options: platforms, optionLabel: (s: string) => s, defaultLabel: "Select platform…" },
                        ].map((field) => (
                          <div key={field.name}>
                            <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                              {field.label}
                            </label>
                            <div
                              className="relative flex items-center rounded-xl transition-all duration-300"
                              style={{
                                background: focusedField === field.name ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                                boxShadow: focusedField === field.name ? "0 0 25px rgba(0,94,253,0.12)" : "none",
                              }}
                              onMouseEnter={(e) => {
                                if (focusedField !== field.name)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                              }}
                              onMouseLeave={(e) => {
                                if (focusedField !== field.name)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                              }}
                            >
                              <div
                                className="flex items-center justify-center w-10 pl-3 transition-colors duration-300"
                                style={{ color: focusedField === field.name ? BLUE : "var(--section-text-muted)" }}
                              >
                                <field.icon size={16} />
                              </div>
                              <div
                                className="w-px h-5 mx-2 transition-colors duration-300"
                                style={{ background: focusedField === field.name ? "rgba(0,94,253,0.3)" : "rgba(255,255,255,0.1)" }}
                              />
                              <select
                                name={field.name}
                                value={form[field.name as keyof typeof form]}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(field.name)}
                                onBlur={() => setFocusedField(null)}
                                className="flex-1 bg-transparent py-3 pr-3 outline-none text-[var(--field-text)] text-sm appearance-none cursor-pointer"
                              >
                                <option value="" className="bg-[var(--field-option-bg)]">
                                  {field.defaultLabel}
                                </option>
                                {field.options.map((o) => (
                                  <option key={o} value={o} className="bg-[var(--field-option-bg)]">
                                    {field.optionLabel(o)}
                                  </option>
                                ))}
                              </select>
                              <div
                                className="absolute bottom-0 left-3 right-3 h-px transition-all duration-500"
                                style={{
                                  background: focusedField === field.name
                                    ? `linear-gradient(to right, transparent, ${BLUE}80, transparent)`
                                    : "transparent",
                                  opacity: focusedField === field.name ? 1 : 0,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Preferred Demo Time */}
                      <div>
                        <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                          Preferred Demo Time
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {demoTimes.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, preferredTime: time }))}
                              className="px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300"
                              style={{
                                background: form.preferredTime === time ? "rgba(0,94,253,0.15)" : "rgba(255,255,255,0.03)",
                                color: form.preferredTime === time ? BLUE : "var(--section-text-muted)",
                                boxShadow: form.preferredTime === time
                                  ? "0 0 20px rgba(0,94,253,0.15), inset 0 0 20px rgba(0,94,253,0.05)"
                                  : "none",
                              }}
                              onMouseEnter={(e) => {
                                if (form.preferredTime !== time)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                              }}
                              onMouseLeave={(e) => {
                                if (form.preferredTime !== time)
                                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                              }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                          Anything specific to cover? (Optional)
                        </label>
                        <div
                          className="relative rounded-xl transition-all duration-300"
                          style={{
                            background: focusedField === "message" ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                            boxShadow: focusedField === "message" ? "0 0 25px rgba(0,94,253,0.12)" : "none",
                          }}
                          onMouseEnter={(e) => {
                            if (focusedField !== "message")
                              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                          }}
                          onMouseLeave={(e) => {
                            if (focusedField !== "message")
                              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                          }}
                        >
                          <div className="flex items-start pt-3">
                            <div
                              className="flex items-center justify-center w-10 pl-3 transition-colors duration-300"
                              style={{ color: focusedField === "message" ? BLUE : "var(--section-text-muted)" }}
                            >
                              <MessageSquare size={16} />
                            </div>
                            <div
                              className="w-px h-5 mx-2 mt-0.5 transition-colors duration-300"
                              style={{ background: focusedField === "message" ? "rgba(0,94,253,0.3)" : "rgba(255,255,255,0.1)" }}
                            />
                            <textarea
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              rows={3}
                              placeholder="Tell us about your brokerage goals, current setup, or what you want to see in the demo…"
                              className="flex-1 bg-transparent py-0 pr-3 pb-3 outline-none resize-none text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] text-sm"
                            />
                          </div>
                          <div
                            className="absolute bottom-0 left-3 right-3 h-px transition-all duration-500"
                            style={{
                              background: focusedField === "message"
                                ? `linear-gradient(to right, transparent, ${BLUE}80, transparent)`
                                : "transparent",
                              opacity: focusedField === "message" ? 1 : 0,
                            }}
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: `0 0 40px rgba(0,94,253,0.3), 0 0 80px rgba(0,94,253,0.1)`,
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 font-black text-base rounded-xl px-6 py-4 disabled:opacity-60 transition-all duration-300 text-white relative overflow-hidden group"
                        style={{
                          background: `linear-gradient(135deg, ${BLUE}, #0043b5)`,
                          boxShadow: `0 8px 30px rgba(0,94,253,0.25)`,
                        }}
                      >
                        <span
                          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                          {loading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Booking your demo…
                            </>
                          ) : (
                            <>
                              <Calendar size={18} /> Book My Free Demo <ArrowRight size={16} />
                            </>
                          )}
                        </span>
                      </motion.button>

                      <p className="text-xs text-[var(--section-text-muted)] text-center">
                        🔒 Your information is secure. No spam, ever. We respond within 2 hours.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}