"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Send, Globe, TrendingUp, Laptop, Lightbulb } from "lucide-react";

const jobs = [
  { title: "Frontend Developer", location: "On-site", type: "Full Time" },
  { title: "React / Next.js Developer", location: "On-site", type: "Full Time" },
  { title: "Backend Developer", location: "On-site", type: "Full Time" },
  { title: "Full Stack Developer", location: "On-site", type: "Full Time" },
  { title: "UI/UX Designer", location: "On-site", type: "Contract" },
  { title: "DevOps Engineer", location: "On-site", type: "Full Time" },
];

const benefits = [
  {
    icon: Globe,
    title: "Global Team",
    desc: "Work with talented professionals across multiple countries.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Learn new technologies and grow rapidly in your career.",
  },
  {
    icon: Laptop,
    title: "Remote Culture",
    desc: "Flexible work environment with remote-first opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Projects",
    desc: "Build cutting-edge Forex and FinTech solutions.",
  },
];

export default function CareersPage() {
  // Smooth scroll to apply form
  const scrollToForm = () => {
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0A1628] to-[#020617] text-white overflow-hidden">
        {/* Animated background blobs */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 pt-32 pb-24">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-6 max-w-4xl mx-auto"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-sm font-semibold mb-8">
              🚀 We're Hiring
            </span>

            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Join CYTAKE Global
            </h1>

            <p className="max-w-3xl mx-auto text-slate-400 text-xl leading-relaxed">
              Help us build the future of Forex, FinTech and Trading
              Technology. Work from anywhere, with the best tools and people.
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
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="text-sky-400">Open</span> Positions
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
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
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={scrollToForm} // <-- Kisi bhi job card pe click karo, form pe scroll hoga
                  className="group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-sky-400/40 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-sky-400 transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-sky-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Apply →
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-slate-400 text-sm">
                    <span className="inline-flex items-center gap-1">
                      <Globe size={14} className="text-sky-400" /> {job.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-sky-400/50" />
                    <span className="text-sky-300">{job.type}</span>
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
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Why Join CYTAKE?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                More than a job. A chance to shape the trading ecosystem
                with smart people, modern tools, and real impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-sky-400/40 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Application Form (ID added for scroll) */}
          <section
            id="apply-form"
            className="max-w-4xl mx-auto px-6 mt-32 mb-16 scroll-mt-28"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 shadow-2xl"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Apply Now
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Send us your details and resume. We'll get back to you
                  within 48 hours.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Current Location"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Years of Experience"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="LinkedIn Profile"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors"
                />
              </div>

              <textarea
                placeholder="Tell us about yourself, your superpowers and why you'd love to join CYTAKE..."
                rows={5}
                className="w-full mt-6 bg-white/5 border border-white/10 rounded-xl p-4 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50 transition-colors resize-none"
              />

              <div className="mt-6">
                <label className="block mb-2 text-slate-400 text-sm font-medium">
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full text-slate-400 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:bg-sky-500/10 file:text-sky-300 file:font-semibold file:cursor-pointer hover:file:bg-sky-500/20 transition-colors"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 rounded-xl py-4 font-bold text-white shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition-all"
              >
                Send Application
                <Send size={18} />
              </motion.button>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}