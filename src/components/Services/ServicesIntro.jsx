import React from 'react'

const ServicesIntro = () => {
    return (
        <section className="bg-[#f1f1f1] py-20 pb-5 px-6 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
                <span className="relative text-red-500 text-sm font-semibold tracking-[0.2em] uppercase before:absolute before:w-10 before:bg-red-500 before:-bottom-1 before:h-0.5">
                Our Services
                </span>
                <h2 className="text-[#111315] text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
                Engineering Solutions for <span className="text-red-500">Every Stage</span>
                </h2>
                <p className="text-[#111315]/60 text-base md:text-lg leading-relaxed">
                From civil groundwork to mechanical and electrical infrastructure, we
                bring the same standard of quality, safety, and reliability to every
                service we offer — for clients in oil and gas and government alike.
                </p>
            </div>
        </section>
    )
}

export default ServicesIntro