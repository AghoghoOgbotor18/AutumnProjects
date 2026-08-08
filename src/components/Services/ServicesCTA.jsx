import React from 'react'

const ServicesCTA = () => {
    return (
        <section className="bg-[#f1f1f1] py-16 px-6 md:px-16 border-t border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <h3 className="text-[#111315] text-2xl md:text-3xl font-bold">
                Not sure which service fits? <span className="text-red-500">Let's talk it through.</span>
                </h3>
                <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-300 shrink-0"
                >
                Contact Us
                </a>
            </div>
        </section>
    )
}

export default ServicesCTA