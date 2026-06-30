"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Send,
  Globe,
  TrendingUp,
  Laptop,
  Lightbulb,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Link2,
} from "lucide-react";
import { useState, useEffect } from "react";

const BLUE = "#005EFD";

const jobs = [
  { title: "Frontend Developer", location: "On-site", type: "Full Time" },
  { title: "React / Next.js Developer", location: "On-site", type: "Full Time" },
  { title: "Backend Developer", location: "On-site", type: "Full Time" },
  { title: "Full Stack Developer", location: "On-site", type: "Full Time" },
  { title: "UI/UX Designer", location: "On-site", type: "Contract" },
  { title: "DevOps Engineer", location: "On-site", type: "Full Time" },
];

const benefits = [
  { icon: Globe, title: "Global Team", desc: "Work with talented professionals across multiple countries." },
  { icon: TrendingUp, title: "Career Growth", desc: "Learn new technologies and grow rapidly in your career." },
  { icon: Laptop, title: "Remote Culture", desc: "Flexible work environment with remote-first opportunities." },
  { icon: Lightbulb, title: "Innovative Projects", desc: "Build cutting-edge Forex and FinTech solutions." },
];

const formFields = [
  { placeholder: "Full Name", type: "text", icon: User },
  { placeholder: "Email Address", type: "email", icon: Mail },
  { placeholder: "Phone Number", type: "text", icon: Phone },
  { placeholder: "Current Location", type: "text", icon: MapPin },
  { placeholder: "Years of Experience", type: "text", icon: Briefcase },
  { placeholder: "LinkedIn Profile", type: "text", icon: Link2 },
];

export default function CareersPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToForm = () => {
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

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

        .career-file-input::file-selector-button {
          background: rgba(0, 94, 253, 0.1);
          color: #005EFD;
          border: none;
          padding: 8px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          margin-right: 16px;
          transition: all 0.3s;
        }

        .career-file-input::file-selector-button:hover {
          background: rgba(0, 94, 253, 0.2);
          box-shadow: 0 0 15px rgba(0, 94, 253, 0.2);
        }
      `}</style>

      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[var(--section-bg-1)] text-[var(--section-text)]">
        {/* gradient base */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)`,
          }}
        />

        {/* Background blobs */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] blur-[120px] rounded-full"
            style={{ background: "rgba(0, 94, 253, 0.1)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full"
            style={{ background: "rgba(0, 94, 253, 0.08)" }}
          />
          <div
            className="absolute w-[300px] h-[300px] blur-[60px] rounded-full top-[30%] right-[20%]"
            style={{ background: "rgba(0, 94, 253, 0.05)" }}
          />
          <div
            className="absolute w-[200px] h-[200px] blur-[60px] rounded-full bottom-[20%] left-[10%]"
            style={{ background: "rgba(0, 94, 253, 0.04)" }}
          />
        </div>

        {/* Mouse follow glow */}
        <div
          className="fixed pointer-events-none z-20 w-[400px] h-[400px] rounded-full transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            background:
              "radial-gradient(circle, rgba(0,94,253,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 pt-32 pb-24">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6 max-w-4xl mx-auto"
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
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-8"
              style={{ background: "rgba(0,94,253,0.1)", color: BLUE }}
            >
              🚀 We&apos;re Hiring
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-[var(--section-text)]">Join </span>
              <span style={{ color: BLUE }}>CYTAKE</span>
              <span className="text-[var(--section-text)]"> Global</span>
            </h1>

            <p className="max-w-3xl mx-auto text-[var(--section-text-muted)] text-xl leading-relaxed">
              Help us build the future of Forex, FinTech and Trading Technology.
              Work from anywhere, with the best tools and people.
            </p>
          </motion.section>

          {/* Open Positions */}
          <section className="max-w-7xl mx-auto px-6 mt-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-[var(--section-text)]">
                <span style={{ color: BLUE }}>Open</span> Positions
              </h2>
              <p className="text-[var(--section-text-muted)] max-w-xl mx-auto">
                Find your perfect role – click to apply directly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={scrollToForm}
                  className="premium-card group cursor-pointer rounded-3xl backdrop-blur-xl p-6 transition-all duration-500"
                >
                  <div className="shine-effect" />
                  <div className="glow-dot" style={{ top: "12px", right: "12px" }} />
                  <div className="particle" style={{ bottom: "20%", left: "30%", animationDelay: "0.5s" }} />
                  <div className="particle" style={{ bottom: "40%", right: "20%", animationDelay: "1s" }} />
                  <div className="particle" style={{ bottom: "10%", left: "60%", animationDelay: "1.5s" }} />

                  <div className="relative z-10 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[var(--section-text)] transition-colors duration-300">
                      {job.title}
                    </h3>
                    <span
                      className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: BLUE }}
                    >
                      Apply →
                    </span>
                  </div>
                  <div className="relative z-10 flex items-center gap-3 mt-3 text-[var(--section-text-muted)] text-sm">
                    <span className="inline-flex items-center gap-1">
                      <Globe
                        size={14}
                        style={{ color: BLUE, filter: "drop-shadow(0 0 4px rgba(0,94,253,0.4))" }}
                      />{" "}
                      {job.location}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: BLUE, boxShadow: "0 0 6px rgba(0,94,253,0.5)" }}
                    />
                    <span className="font-medium" style={{ color: BLUE }}>
                      {job.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Join Us */}
          <section className="max-w-7xl mx-auto px-6 mt-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-[var(--section-text)]">
                Why Join <span style={{ color: BLUE }}>CYTAKE</span>?
              </h2>
              <p className="text-[var(--section-text-muted)] max-w-2xl mx-auto">
                More than a job. A chance to shape the trading ecosystem with
                smart people, modern tools, and real impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="premium-card rounded-3xl backdrop-blur-xl p-6 transition-all duration-500"
                >
                  <div className="shine-effect" />
                  <div className="glow-dot" style={{ bottom: "12px", right: "12px" }} />
                  <div className="particle" style={{ bottom: "30%", left: "20%", animationDelay: "0.3s" }} />
                  <div className="particle" style={{ bottom: "50%", right: "30%", animationDelay: "0.8s" }} />

                  <div className="relative z-10">
                    <div
                      className="icon-glow w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(0,94,253,0.1)" }}
                    >
                      <benefit.icon
                        className="w-6 h-6"
                        style={{ color: BLUE, filter: "drop-shadow(0 0 8px rgba(0,94,253,0.5))" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--section-text)]">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--section-text-muted)] text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section
            id="apply-form"
            className="max-w-4xl mx-auto px-6 mt-32 mb-16 scroll-mt-28"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-form-card rounded-3xl backdrop-blur-xl p-8 md:p-10"
            >
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-[var(--section-text)]">
                    Apply Now
                  </h2>
                  <p className="text-[var(--section-text-muted)] max-w-xl mx-auto">
                    Send us your details and resume. We&apos;ll get back to you
                    within 48 hours.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {formFields.map((field, i) => (
                    <motion.div
                      key={field.placeholder}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                        {field.placeholder}
                      </label>

                      <div
                        className="relative flex items-center rounded-xl transition-all duration-300"
                        style={{
                          background: focusedField === i ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                          boxShadow: focusedField === i ? "0 0 25px rgba(0,94,253,0.12)" : "none",
                        }}
                        onMouseEnter={(e) => {
                          if (focusedField !== i) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        }}
                        onMouseLeave={(e) => {
                          if (focusedField !== i) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        }}
                      >
                        <div
                          className="flex items-center justify-center w-12 h-full pl-4 transition-colors duration-300"
                          style={{ color: focusedField === i ? BLUE : "var(--section-text-muted)" }}
                        >
                          <field.icon size={18} />
                        </div>

                        <div
                          className="w-px h-6 mx-2 transition-colors duration-300"
                          style={{ background: focusedField === i ? "rgba(0,94,253,0.3)" : "rgba(255,255,255,0.1)" }}
                        />

                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          onFocus={() => setFocusedField(i)}
                          onBlur={() => setFocusedField(null)}
                          className="flex-1 bg-transparent py-4 pr-4 outline-none text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] text-sm"
                        />

                        <div
                          className="absolute bottom-0 left-4 right-4 h-px transition-all duration-500"
                          style={{
                            background: focusedField === i ? `linear-gradient(to right, transparent, ${BLUE}80, transparent)` : "transparent",
                            opacity: focusedField === i ? 1 : 0,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-5"
                >
                  <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                    About You
                  </label>
                  <div
                    className="relative rounded-xl transition-all duration-300"
                    style={{
                      background: focusedField === 99 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
                      boxShadow: focusedField === 99 ? "0 0 25px rgba(0,94,253,0.12)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (focusedField !== 99) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      if (focusedField !== 99) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <textarea
                      placeholder="Tell us about yourself, your superpowers and why you'd love to join CYTAKE..."
                      rows={5}
                      onFocus={() => setFocusedField(99)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent p-4 outline-none resize-none text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] text-sm"
                    />
                    <div
                      className="absolute bottom-0 left-4 right-4 h-px transition-all duration-500"
                      style={{
                        background: focusedField === 99 ? `linear-gradient(to right, transparent, ${BLUE}80, transparent)` : "transparent",
                        opacity: focusedField === 99 ? 1 : 0,
                      }}
                    />
                  </div>
                </motion.div>

                {/* File upload */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                  className="mt-5"
                >
                  <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-2 ml-1 tracking-wide uppercase">
                    Upload Resume
                  </label>
                  <div
                    className="relative rounded-xl transition-all duration-300 p-4 flex items-center gap-4"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg"
                      style={{ background: "rgba(0,94,253,0.1)" }}
                    >
                      <Send size={16} style={{ color: BLUE }} />
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="career-file-input w-full text-[var(--section-text-muted)] text-sm transition-colors"
                      />
                      <p className="text-[var(--section-text-muted)] text-xs mt-1 opacity-50">
                        PDF, DOC, DOCX — Max 10MB
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(0,94,253,0.3), 0 0 80px rgba(0,94,253,0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full rounded-xl py-4 font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE}, #0043b5)`,
                    boxShadow: "0 8px 30px rgba(0,94,253,0.25)",
                  }}
                >
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Send Application
                    <Send size={18} />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </>
  );
}