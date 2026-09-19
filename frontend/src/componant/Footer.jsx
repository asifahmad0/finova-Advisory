import React from 'react'
import {
  Calculator,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";








function Footer() {
  return (


        <footer className="border-t border-white/10 bg-slate-950 px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
              <Calculator size={20} />
            </div>

            <div>
              <div className="font-bold text-white">Finova Advisory</div>
              <div className="text-xs text-slate-500">
                Accounting • Tax • Consulting
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-md leading-7 text-slate-500">
            Helping businesses make smarter financial decisions through
            accounting expertise, tax advisory and strategic consulting.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Services</h4>

          <div className="mt-4 space-y-3 text-sm text-slate-500">
            <p>Accounting</p>
            <p>Taxation</p>
            <p>GST Compliance</p>
            <p>Business Consulting</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>

          <div className="mt-4 space-y-4 text-sm text-slate-500">
            <div className="flex gap-3">
              <Mail size={17} />
              hello@finova.com
            </div>

            <div className="flex gap-3">
              <Phone size={17} />
              +91 99999 99999
            </div>

            <div className="flex gap-3">
              <MapPin size={17} />
              New Delhi, India
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-7 text-sm text-slate-600">
        © 2026 Finova Advisory. All rights reserved.
      </div>
    </footer>
      
  )
}

export default Footer


