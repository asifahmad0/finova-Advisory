import React from "react";
import { motion } from "framer-motion";


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

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We understand your business, financial requirements and long-term objectives.",
  },
  {
    number: "02",
    title: "Analyze",
    text: "Our experts analyze your financial data, compliance needs and business challenges.",
  },
  {
    number: "03",
    title: "Strategize",
    text: "We create a practical strategy focused on compliance, efficiency and sustainable growth.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "We execute the plan and continuously support your financial and compliance requirements.",
  },
];

/* -----------------------------
   Process
------------------------------ */

function Process() {
  return (
    <section id="process" className="bg-slate-950 px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Process
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Simple process. Serious results.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent md:block" />

          {process.map((item, index) => (
            <Reveal
              key={item.number}
              variant={index % 2 === 0 ? fadeUp : fadeDown}
            >
              <div className="relative text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-lg font-bold text-cyan-300"
                >
                  {item.number}
                </motion.div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process