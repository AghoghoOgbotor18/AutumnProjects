import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="relative h-[480px] md:h-[560px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover md:bg-center bg-bottom pointer-events-none"
        style={{ backgroundImage: `url(/images/hero2.webp)`, backgroundAttachment: 'fixed' }}
      />
      <div className='absolute inset-0 bg-black/80' />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Ready to Start Your <span className="text-red-500">Next Project?</span>
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8">
          Tell us what you need and our team will get back to you with a plan, a timeline, and a quote — no obligation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-300"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  )
}

export default CTA