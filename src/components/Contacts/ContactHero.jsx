import React from 'react'
import { Link } from 'react-router-dom'

const ContactHero = () => {
    return (
        <section
        className="relative h-[300px] md:h-[380px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero3.webp)` }}
        >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 text-center px-6">
                <p className="text-white/60 text-sm mb-3">
                <Link to="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-red-500">Contact</span>
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
                Let's Talk <span className="text-red-500">Business</span>
                </h1>
            </div>
        </section>
    )
}

export default ContactHero