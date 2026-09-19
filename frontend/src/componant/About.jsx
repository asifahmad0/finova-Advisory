import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BriefcaseBusiness,
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

const fadeDown = {
  hidden: { opacity: 0, y: -70 },
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


/* -----------------------------
   About
------------------------------ */

function About() {
  return (
    <section id="about" className="overflow-hidden bg-slate-900 px-4 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal variant={fadeLeft}>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="rounded-3xl bg-slate-950 p-7">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
                    <BriefcaseBusiness size={28} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Your Finance Partner
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      Built around your business
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {[
                    "Accurate financial reporting",
                    "Timely statutory compliance",
                    "Transparent advisory",
                    "Business-focused strategies",
                  ].map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.12 }}
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-cyan-400"
                      />
                      <span className="text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant={fadeRight}>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            We turn financial complexity into
            <span className="text-cyan-400"> clarity.</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Your business deserves more than just bookkeeping. We combine
            accounting expertise, tax knowledge and business insight to give
            you a complete view of your financial position.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            Whether you're starting a business, scaling operations or planning
            for the future, our team helps you navigate financial decisions
            with confidence.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Talk to an Expert
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default About