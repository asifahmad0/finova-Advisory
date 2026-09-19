import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
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
   Counter
------------------------------ */

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}



/* -----------------------------
   Stats
------------------------------ */

function Stats() {
  return (
    <section className="border-y border-white/10 bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 py-12 md:grid-cols-4">
        {[
          ["10", "+", "Years Experience"],
          ["500", "+", "Businesses Served"],
          ["98", "%", "Client Retention"],
          ["24", "/7", "Expert Support"],
        ].map(([value, suffix, label], index) => (
          <Reveal
            key={label}
            variant={index % 2 === 0 ? fadeUp : fadeDown}
            className="px-5 text-center"
          >
            <div className="text-3xl font-bold text-white sm:text-4xl">
              <Counter value={Number(value)} suffix={suffix} />
            </div>
            <p className="mt-2 text-sm text-slate-500">{label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Stats