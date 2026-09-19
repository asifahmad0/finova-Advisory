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


/* -----------------------------
   Testimonials
------------------------------ */

function Testimonials() {
  return (
    <section className="bg-slate-900 px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Client Stories
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Trusted by growing businesses.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            [
              "“They completely simplified our GST and accounting process. We finally have clear visibility into our numbers.”",
              "Rahul Sharma",
              "Founder, GrowthCo",
            ],
            [
              "“The team is responsive, professional and understands business beyond just accounting.”",
              "Priya Mehta",
              "Director, Nova Retail",
            ],
            [
              "“Their financial planning helped us understand where our business was actually making money.”",
              "Arjun Kapoor",
              "Founder, BuildTech",
            ],
          ].map(([quote, name, role], index) => (
            <Reveal
              key={name}
              variant={index === 1 ? fadeDown : fadeUp}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7"
              >
                <div className="text-4xl text-cyan-400">“</div>

                <p className="mt-2 leading-8 text-slate-300">{quote}</p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="mt-1 text-sm text-slate-500">{role}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



export default Testimonials