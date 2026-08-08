import React from 'react'

const ServiceDetailHero = ({ service }) => {
    return (
        <section
        className="relative h-[340px] md:h-[420px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
        >
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 text-center px-6">
                <p className="text-white/60 text-sm mb-3">
                <a href="/" className="hover:text-red-500 transition-colors duration-300">Home</a>
                <span className="mx-2">/</span>
                <a href="/services" className="hover:text-red-500 transition-colors duration-300">Services</a>
                <span className="mx-2">/</span>
                <span className="text-red-500">{service.title}</span>
                </p>
                <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
                {service.title}
                </h1>
            </div>
        </section>
    )
}

export default ServiceDetailHero