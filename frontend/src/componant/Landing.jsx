import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Menu,
  TrendingUp,
  X,
} from "lucide-react";

/* -----------------------------
   Animation Variants
------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Reveal({ children, variant = fadeUp, className = "" }) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}




function Landing() {

    


  return (
    <>

    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] top-[35%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal variant={fadeLeft}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Trusted Financial Advisory
              </div>
            </Reveal>

            <Reveal variant={fadeUp}>
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Numbers that make
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  business smarter.
                </span>
              </h1>
            </Reveal>

            <Reveal variant={fadeUp}>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Accounting, taxation and business consulting services designed
                to simplify your finances and help you make confident
                decisions.
              </p>
            </Reveal>

            <Reveal variant={fadeUp}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Book a Consultation
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </Reveal>

            <Reveal variant={fadeUp}>
              <div className="mt-12 flex flex-wrap gap-7 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-cyan-400" />
                  GST Compliance
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-cyan-400" />
                  Tax Advisory
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-cyan-400" />
                  Financial Planning
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero card */}
          <Reveal variant={fadeRight}>
            <div className="relative mx-auto w-full max-w-lg">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl"
              >
                <div className="rounded-[1.5rem] bg-slate-900/80 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Financial Overview
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-white">
                        FY 2026–27
                      </h3>
                    </div>

                    <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                      <BarChart3 />
                    </div>
                  </div>

                  <div className="mt-8 flex items-end gap-2">
                    {[35, 50, 42, 68, 55, 76, 90, 72, 96].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.07,
                          }}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-300"
                        />
                      )
                    )}
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-slate-500">
                        Revenue Growth
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">+28%</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-slate-500">Tax Efficiency</p>
                      <p className="mt-2 text-2xl font-bold text-cyan-300">
                        +19%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -right-5 top-20 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-400/10 p-2 text-emerald-400">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Business Growth</p>
                      <p className="font-semibold text-white">+32.8%</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>

    </>
  )
}

export default Landing



