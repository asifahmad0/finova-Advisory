import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  FileText,
  ReceiptIndianRupee,
  ShieldCheck,
  TrendingUp,

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
   Data
------------------------------ */

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    text: "Reliable bookkeeping, financial reporting and accounting support to keep your business financially organized.",
  },
  {
    icon: ReceiptIndianRupee,
    title: "Taxation Services",
    text: "Professional tax planning, GST compliance, income tax filing and advisory for individuals and businesses.",
  },
  {
    icon: BarChart3,
    title: "Business Consulting",
    text: "Data-driven financial insights and strategic consulting to help your business grow with confidence.",
  },
  {
    icon: FileText,
    title: "GST Compliance",
    text: "End-to-end GST registration, return filing, reconciliation and compliance management.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    text: "Structured audit and assurance services designed to improve transparency and financial control.",
  },
  {
    icon: TrendingUp,
    title: "Financial Planning",
    text: "Practical financial planning and analysis to help you make smarter business decisions.",
  },
];



/* -----------------------------
   Services
------------------------------ */

function Services() {
  return (
    <section id="services" className="bg-slate-950 px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Expertise
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Financial clarity for every stage of business.
            </h2>

            <p className="mt-5 text-slate-400">
              From day-to-day accounting to strategic financial consulting,
              we've got your numbers covered.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                variant={index % 2 === 0 ? fadeUp : fadeDown}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default Services