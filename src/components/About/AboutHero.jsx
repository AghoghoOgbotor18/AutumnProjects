import React from 'react'

const AboutHero = () => {
  return (
    <section
      className="relative h-[340px] md:h-[420px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/images/hero2.webp)` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center px-6">
        <p className="text-white/60 text-sm mb-3">
          <a href="/" className="hover:text-red-500 transition-colors duration-300">Home</a>
          <span className="mx-2">/</span>
          <span className="text-red-500">About Us</span>
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
          Who We <span className="text-red-500">Are</span>
        </h1>
      </div>
    </section>
  )
}

export default AboutHero