"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Globe, CheckCircle, ArrowRight, MessageSquare, Plus, Minus, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { solutions } from "@/lib/data";

const faqs = [
  { q: "How quickly can you deploy a complete broker infrastructure?", a: "Our pre-configured broker packages can be deployed in as little as 7-14 business days, depending on customization requirements." },
  { q: "Do you offer white-label solutions?", a: "Yes — we offer fully branded white-label solutions including trading platforms, CRM, client portals, and back-office systems under your brand." },
  { q: "What trading platforms do you support?", a: "We support MetaTrader 4 (MT4), MetaTrader 5 (MT5), cTrader, and can build custom API bridges for proprietary platforms." },
  { q: "What is your pricing model?", a: "We offer flexible pricing based on your requirements — setup fees, monthly licensing, or revenue share models. Contact us for a custom quote." },
  { q: "Do you provide ongoing support after launch?", a: "Yes — all clients receive dedicated account management, 24/7 technical monitoring, and direct access to our engineering team." },
];

const inputClass = "w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all bg-[var(--field-bg)] border border-[var(--field-border)] text-[var(--field-text)] placeholder:text-[var(--field-placeholder)] focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", solution: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--section-bg-1)]">
        {/* gradient base */}
        <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: `linear-gradient(135deg, var(--section-bg-1) 0%, var(--section-bg-2) 50%, var(--section-bg-1) 100%)` }} />

        {/* ============ GLOBAL BACKGROUND ============ */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px]" animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px]" animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          <motion.div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, var(--section-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--section-grid) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute inset-0 opacity-30" animate={{ x: ["-3%", "3%", "-3%"] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}>
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
          <motion.div className="absolute inset-0 opacity-30" animate={{ x: ["2%", "-2%", "2%"] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none">
              <path d="M0,640 L80,615 L160,655 L240,595 L320,635 L400,565 L480,610 L560,540 L640,585 L720,515 L800,560 L880,490 L960,535 L1040,465 L1120,510 L1200,440 L1280,485 L1360,415 L1400,455" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round" opacity="0.5" />
            </svg>
          </motion.div>
          {[{ top: "25%", delay: 0, duration: 16 }, { top: "50%", delay: 5, duration: 20 }, { top: "72%", delay: 9, duration: 18 }].map((dot, i) => (
            <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]" style={{ top: dot.top, left: "-2%" }} animate={{ x: ["0vw", "104vw"], opacity: [0, 1, 1, 0] }} transition={{ duration: dot.duration, repeat: Infinity, ease: "linear", delay: dot.delay, opacity: { duration: dot.duration, times: [0, 0.1, 0.9, 1], repeat: Infinity } }} />
          ))}
        </div>

        {/* ============ CONTENT ============ */}
        <div className="relative z-10 pt-20">

          {/* ===== HERO ===== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-500 tracking-wide uppercase">We respond within 2 hours</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--section-text)] mb-4 leading-tight">
                  Let&apos;s Build Something{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Exceptional Together</span>
                </h1>
                <p className="text-[var(--section-text-muted)] text-xl max-w-2xl mx-auto">
                  Tell us about your project. Our experts will design a custom solution and come back with a proposal within 24 hours.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ===== CONTACT SECTION ===== */}
          <section id="demo" className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-10">

                {/* Sidebar */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
                  <div className="rounded-2xl p-6 backdrop-blur-sm bg-[var(--section-card-bg)] border border-[var(--section-card-border)]">
                    <h3 className="text-base font-black text-[var(--section-text)] mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      {[
                        { icon: Mail, label: "Email Us", value: "info@cytake.com", href: "mailto:info@cytake.com" },
                        { icon: Phone, label: "WhatsApp Support", value: "Available 24/7", href: "https://wa.me/1234567890" },
                        { icon: Globe, label: "Global Operations", value: "50+ Countries Served", href: "#" },
                        { icon: MessageSquare, label: "Response Time", value: "Within 2 Hours", href: "#" },
                      ].map((item, i) => (
                        <a key={i} href={item.href} className="flex items-center gap-3 group">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                            <item.icon size={16} className="text-white" />
                          </div>
                          <div>
                            <div className="text-[10px] text-[var(--section-text-muted)] uppercase tracking-wide font-semibold">{item.label}</div>
                            <div className="text-sm font-bold text-[var(--section-text)] group-hover:text-sky-500 transition-colors">{item.value}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* What Happens Next — navy card both modes */}
                  <div className="rounded-2xl p-6 bg-gradient-to-br from-[#0B1B3F] to-[#0d2456] border border-white/5">
                    <h3 className="text-base font-black text-white mb-4">What Happens Next</h3>
                    <div className="space-y-4">
                      {["We receive your inquiry and assign a specialist", "You receive a response within 2 hours", "We schedule a discovery call", "We deliver a custom proposal within 24 hours"].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-xs font-black text-sky-400 shrink-0 mt-0.5">{i + 1}</div>
                          <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
                  <div className="rounded-3xl p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] bg-[var(--section-card-bg)] border border-[var(--section-card-border)]">
                    {sent ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                          <CheckCircle size={36} className="text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-black text-[var(--section-text)] mb-3">Your Message is on Its Way!</h3>
                        <p className="text-[var(--section-text-muted)] text-lg mb-8">Our team will review your requirements and reach out within 2 hours.</p>
                        <button onClick={() => setSent(false)} className="px-6 py-3 rounded-xl text-sm font-bold text-sky-500 border border-sky-400/30 hover:bg-sky-500/10 transition-all">Send Another Message</button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <h2 className="text-xl font-black text-[var(--section-text)] mb-1">Tell Us About Your Project</h2>
                        <p className="text-[var(--section-text-muted)] text-sm mb-6">Fill in the details and we&apos;ll get back to you within 2 hours.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-bold text-[var(--section-text-muted)] mb-1.5 uppercase tracking-wide">Full Name *</label>
                            <input name="name" value={form.name} onChange={handleChange} required placeholder="John Mitchell" className={inputClass} />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[var(--section-text-muted)] mb-1.5 uppercase tracking-wide">Work Email *</label>
                            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className={inputClass} />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[var(--section-text-muted)] mb-1.5 uppercase tracking-wide">Company / Firm</label>
                            <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Brokers Ltd" className={inputClass} />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[var(--section-text-muted)] mb-1.5 uppercase tracking-wide">Phone / WhatsApp</label>
                            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+44 7700 900000" className={inputClass} />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[var(--section-text-muted)] mb-1.5 uppercase tracking-wide">Solution Needed</label>
                            <select name="solution" value={form.solution} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                              <option value="" className="bg-[var(--field-option-bg)]">Select a solution…</option>
                              {solutions.map((s) => <option key={s.slug} value={s.slug} className="bg-[var(--field-option-bg)]">{s.title}</option>)}
                              <option value="general" className="bg-[var(--field-option-bg)]">General Inquiry</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[var(--section-text-muted)] mb-1.5 uppercase tracking-wide">Approx. Budget</label>
                            <select name="budget" value={form.budget} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                              <option value="" className="bg-[var(--field-option-bg)]">Select budget…</option>
                              <option value="<10k" className="bg-[var(--field-option-bg)]">Under $10,000</option>
                              <option value="10-50k" className="bg-[var(--field-option-bg)]">$10,000 – $50,000</option>
                              <option value="50-100k" className="bg-[var(--field-option-bg)]">$50,000 – $100,000</option>
                              <option value="100k+" className="bg-[var(--field-option-bg)]">$100,000+</option>
                              <option value="discuss" className="bg-[var(--field-option-bg)]">Prefer to discuss</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="block text-xs font-bold text-[var(--section-text-muted)] mb-1.5 uppercase tracking-wide">Project Details *</label>
                          <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Describe your project, current situation, timeline, and any specific requirements…" className={`${inputClass} resize-none`} />
                        </div>

                        <motion.button type="submit" disabled={loading} whileTap={{ scale: 0.99 }}
                          className="w-full flex items-center justify-center gap-2 font-black text-base rounded-xl px-6 py-4 disabled:opacity-60 transition-all shadow-[0_0_20px_rgba(37,99,235,0.15)] bg-[var(--cta-white-bg)] text-[var(--cta-white-text)] hover:bg-[var(--cta-white-hover)]">
                          {loading
                            ? <><div className="w-5 h-5 border-2 border-current/30 border-t-current rounded-full animate-spin" /> Submitting…</>
                            : <>Submit Inquiry <ArrowRight size={16} /></>
                          }
                        </motion.button>

                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[var(--section-text-muted)]">
                          <Shield size={12} className="text-emerald-500" />
                          Your information is secure. We respond within 2 hours.
                        </div>
                      </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ===== FAQ ===== */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-[var(--section-card-bg)] border border-[var(--section-card-border)] backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-bold text-sky-500 tracking-wide uppercase">FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[var(--section-text)] mb-4">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Questions</span>
                </h2>
                <p className="text-[var(--section-text-muted)] text-lg">Everything you need to know before getting started.</p>
              </motion.div>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className={`rounded-2xl overflow-hidden border transition-all duration-300 ${openFaq === i ? "border-sky-400/30 shadow-[0_10px_30px_rgba(56,189,248,0.1)]" : "border-[var(--section-card-border)]"} bg-[var(--section-card-bg)]`}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none">
                      <span className={`text-sm font-bold pr-4 transition-colors ${openFaq === i ? "text-sky-500" : "text-[var(--section-text)]"}`}>{faq.q}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? "bg-sky-500/20 text-sky-500" : "bg-[var(--section-card-bg)] text-[var(--section-text-muted)] border border-[var(--section-card-border)]"}`}>
                        {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="px-6 pb-5">
                          <p className="text-[var(--section-text-muted)] text-sm leading-relaxed border-t border-[var(--section-card-border)] pt-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}