import React from 'react'
import { Link } from 'react-router-dom'

const ServicesDetailsCTA = () => {
    return (
        <section className="bg-[#0B0C0E] py-16 px-6 md:px-16 border-t border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <h3 className="text-white text-2xl md:text-3xl font-bold">
                Not sure which service fits? <span className="text-red-500">Let's talk it through.</span>
                </h3>
                <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-300 shrink-0"
                >
                Contact Us
                </Link>
            </div>
        </section>
    )
}

export default ServicesDetailsCTA