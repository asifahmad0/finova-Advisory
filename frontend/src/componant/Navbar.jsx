import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Menu,
  X,
} from "lucide-react";



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

function Navbar(){

     const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];
   
    return(
    <>
    
    <motion.nav
      variants={fadeDown}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
                <Calculator size={21} className="text-white" />
              </div>

              <div>
                <div className="font-bold tracking-tight text-white">
                  Finova
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Advisory
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  {name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:block"
            >
              Get Consultation
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="text-white md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-5 border-t border-white/10 pt-4 md:hidden"
            >
              {links.map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-slate-300"
                >
                  {name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
    
    
    </>
    )
}


export default Navbar