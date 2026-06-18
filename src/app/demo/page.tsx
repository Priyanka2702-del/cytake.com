"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Building2, Phone, Mail, Globe } from "lucide-react";

const demoFeatures = [
  "Live MT4/MT5 infrastructure walkthrough",
  "CRM & client portal demonstration",
  "Payment gateway integration overview",
  "Risk management system demo",
  "Prop firm challenge engine preview",
  "Custom deployment timeline discussion",
];

const teamSizes = ["1-5", "6-20", "21-50", "51-200", "200+"];
const platforms = ["MT4", "MT5", "cTrader", "Proprietary", "Not Sure Yet", "Currently Building"];
const demoTimes = ["Morning (9AM - 12PM)", "Afternoon (12PM - 4PM)", "Evening (4PM - 7PM)", "Flexible / Any Time"];

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
      <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0A1628] to-[#020617] relative overflow-hidden">

        {/* ============ SAME BACKGROUND AS STATSSECTION ============ */}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[130px] pointer-events-none"
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]"
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
              stroke="#38BDF8"
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
            className="absolute w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] pointer-events-none"
            style={{ top: dot.top, left: "-2%" }}
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
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 tracking-wide uppercase">Free · No Commitment · 30 Minutes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Book Your <br />
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Live Demo
              </span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
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
              <div className="rounded-2xl p-6 bg-white/[0.04] backdrop-blur-sm border border-white/10">
                <h3 className="text-white font-black text-lg mb-5">What You&apos;ll See in the Demo</h3>
                <ul className="space-y-3">
                  {demoFeatures.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle size={16} className="text-sky-400 shrink-0 mt-0.5" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Clock, label: "Duration", value: "30-45 mins" },
                  { icon: Globe, label: "Format", value: "Video Call" },
                  { icon: Users, label: "Team", value: "Expert Guided" },
                  { icon: Calendar, label: "Response", value: "Within 2 hrs" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="rounded-xl p-4 bg-white/[0.04] border border-white/10 text-center">
                    <Icon size={18} className="text-sky-400 mx-auto mb-2" />
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</div>
                    <div className="text-sm font-bold text-white mt-0.5">{value}</div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl p-5 bg-white/[0.04] border border-white/10 space-y-3">
                <h4 className="text-white font-bold text-sm mb-3">Prefer to reach out directly?</h4>
                <a href="mailto:info@cytake.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                  <Mail size={14} className="text-sky-400 shrink-0" />
                  info@cytake.com
                </a>
                <a href="https://wa.me/1234567890" className="flex items-center gap-3 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                  <Phone size={14} className="text-sky-400 shrink-0" />
                  WhatsApp — Available 24/7
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl p-8 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
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
                    <h3 className="text-2xl font-black text-white mb-3">Demo Request Submitted!</h3>
                    <p className="text-slate-400 mb-2">Our team will contact you within <span className="text-sky-400 font-bold">2 hours</span> to confirm your demo slot.</p>
                    <p className="text-slate-500 text-sm">Check your email for a confirmation.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-white font-black text-xl mb-1">Schedule Your Demo</h3>
                      <p className="text-slate-500 text-sm">Fill in the details and we&apos;ll set up a personalized session for you.</p>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Name *</label>
                        <input
                          name="name" value={form.name} onChange={handleChange} required
                          placeholder="John Mitchell"
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Work Email *</label>
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange} required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Company Name *</label>
                        <input
                          name="company" value={form.company} onChange={handleChange} required
                          placeholder="Acme Brokers Ltd"
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Phone / WhatsApp</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+1 234 567 890"
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Team Size & Platform */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Team Size</label>
                        <select
                          name="teamSize" value={form.teamSize} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/10 text-white focus:border-sky-400/50 outline-none transition-all"
                        >
                          <option value="" className="bg-[#0A1628]">Select team size…</option>
                          {teamSizes.map(s => <option key={s} value={s} className="bg-[#0A1628]">{s} people</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1.5">Current / Target Platform</label>
                        <select
                          name="platform" value={form.platform} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white/5 border border-white/10 text-white focus:border-sky-400/50 outline-none transition-all"
                        >
                          <option value="" className="bg-[#0A1628]">Select platform…</option>
                          {platforms.map(p => <option key={p} value={p} className="bg-[#0A1628]">{p}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Demo Time */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Preferred Demo Time</label>
                      <div className="grid grid-cols-2 gap-2">
                        {demoTimes.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, preferredTime: time }))}
                            className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                              form.preferredTime === time
                                ? "bg-sky-500/20 border-sky-400/50 text-sky-400"
                                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">Anything specific to cover? (Optional)</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} rows={3}
                        placeholder="Tell us about your brokerage goals, current setup, or what you want to see in the demo…"
                        className="w-full px-4 py-3 rounded-xl text-sm resize-none bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/10 outline-none transition-all"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 text-black font-black text-base rounded-xl px-6 py-4 bg-white hover:bg-gray-100 disabled:opacity-60 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Booking your demo…
                        </>
                      ) : (
                        <>
                          <Calendar size={18} />
                          Book My Free Demo <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      🔒 Your information is secure. No spam, ever. We respond within 2 hours.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}