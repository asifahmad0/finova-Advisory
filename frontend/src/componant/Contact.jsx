import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
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
   CTA / Contact
------------------------------ */

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 px-4 py-28">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-center backdrop-blur-xl sm:p-14">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Let's Work Together
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Ready to take control of your finances?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Get expert accounting, taxation and consulting support tailored
              to your business.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@finova.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail size={18} />
                Email Us
              </a>

              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                Call an Expert
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


export default Contact