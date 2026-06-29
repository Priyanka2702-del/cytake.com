"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { solutions } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", solution: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const fieldClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all bg-[var(--field-bg)] border border-[var(--field-border)] text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10";

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--section-bg-1)]">
      {/* gradient overlay via tokens */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }} />

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

      {/* Floating Trading Chart */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-50" animate={{ x: ["-3%", "3%", "-3%"] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <motion.path d="M0,500 L70,470 L140,510 L210,440 L280,480 L350,400 L420,450 L490,370 L560,420 L630,340 L700,390 L770,310 L840,360 L910,290 L980,340 L1050,270 L1120,320 L1190,250 L1260,300 L1330,240 L1400,290" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} />
          {[70,210,350,490,630,770,910,1050,1190,1330].map((cx, i) => (
            <g key={i}>
              <line x1={cx} y1={[455,425,385,355,325,295,275,255,235,205][i]} x2={cx} y2={[525,495,495,465,435,405,375,355,335,305][i]} stroke="#22C55E" strokeWidth="1.5" opacity="0.5" />
              <rect x={cx - 6} y={[470,440,400,370,340,310,290,270,250,220][i]} width="12" height="30" fill="#22C55E" opacity="0.4" rx="1.5" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Lower Dashed Chart Line */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-40" animate={{ x: ["2%", "-2%", "2%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
          <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Glowing Traveling Dots */}
      {[{ top: "25%", delay: 0, duration: 16 }, { top: "50%", delay: 5, duration: 20 }, { top: "72%", delay: 9, duration: 18 }].map((dot, i) => (
        <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] pointer-events-none" style={{ top: dot.top, left: "-2%" }} animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }} transition={{ duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay, opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity } }} />
      ))}

      {/* ============ CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
            Talk to Our{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-[var(--section-text-muted)] text-lg max-w-xl mx-auto">
            Tell us about your project and we&apos;ll respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: "Email Us", value: "info@cytake.com", href: "mailto:info@cytake.com" },
              { icon: Phone, label: "WhatsApp Support", value: "Available 24/7", href: "https://wa.me/1234567890" },
              { icon: Globe, label: "Global Operations", value: "50+ Countries Served", href: "/about" },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.a key={label} href={href} whileHover={{ y: -4 }}
                className="rounded-2xl p-5 flex items-center gap-4 group block backdrop-blur-sm shadow-md transition-all bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:shadow-xl hover:border-sky-400/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-[var(--section-text-muted)] mb-0.5">{label}</div>
                  <div className="text-sm font-bold text-[var(--section-text)]">{value}</div>
                </div>
              </motion.a>
            ))}

            <div className="rounded-2xl p-6 backdrop-blur-sm bg-[var(--section-card-bg)] border border-[var(--section-card-border)]">
              <h4 className="text-sm font-black text-[var(--section-text)] mb-3">What to Expect</h4>
              <ul className="space-y-2.5">
                {["Response within 2 business hours", "Free technical consultation", "No obligation — just a conversation", "Custom proposal within 24 hours"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--section-text-muted)]">
                    <CheckCircle size={14} className="text-sky-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <div className="rounded-3xl p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] bg-[var(--section-card-bg)] border border-[var(--section-card-border)]">
              {sent ? (
                <div className="text-center py-12">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle size={28} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-black text-[var(--section-text)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--section-text-muted)]">Our team will get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="John Mitchell" className={fieldClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-1.5">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className={fieldClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-1.5">Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd" className={fieldClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-1.5">Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 890" className={fieldClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-1.5">Solution of Interest</label>
                    <select name="solution" value={form.solution} onChange={handleChange} className={fieldClass}>
                      <option value="" className="bg-[var(--field-option-bg)]">Select a solution…</option>
                      {solutions.map((s) => <option key={s.slug} value={s.slug} className="bg-[var(--field-option-bg)]">{s.title}</option>)}
                      <option value="general" className="bg-[var(--field-option-bg)]">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--section-text-muted)] mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us about your project, requirements, or questions…" className={`${fieldClass} resize-none`} />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 font-bold rounded-xl px-6 py-3.5 disabled:opacity-60 transition-all shadow-[0_0_20px_rgba(37,99,235,0.15)] bg-[var(--cta-white-bg)] text-[var(--cta-white-text)] hover:bg-[var(--cta-white-hover)]">
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>Send Message <ArrowRight size={14} /></>
                    )}
                  </button>

                  <p className="text-xs text-[var(--section-text-muted)] text-center">
                    We respond within 2 hours. 24/7 emergency support available.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}