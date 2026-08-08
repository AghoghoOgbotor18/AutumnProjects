import React from 'react'
import { FaCheck } from 'react-icons/fa'

const ServiceOverview = ({ service }) => {
    return (
        <section className="bg-[#f1f1f1] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                <div className="relative h-[380px] md:h-[460px]">
                <div
                    className="absolute -top-4 -left-4 w-32 h-32 rounded-sm"
                    style={{
                    backgroundImage:
                        'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 10px, #F7F7F5 10px, #F7F7F5 20px)',
                    }}
                />
                <img
                    src={service.image}
                    alt={service.title}
                    className="relative w-full h-full object-cover rounded-md shadow-xl z-10"
                />
                </div>

                <div>
                    <span className="relative text-red-500 text-sm font-semibold tracking-[0.2em] uppercase before:absolute before:w-10 before:bg-red-500 before:-bottom-1 before:h-0.5">
                        Overview
                    </span>
                    <h2 className="text-[#111315] text-2xl md:text-4xl font-extrabold mt-4 mb-6 leading-tight">
                        {service.title}
                    </h2>
                    <p className="text-[#111315]/70 text-base md:text-lg leading-relaxed mb-8">
                        {service.fullDescription}
                    </p>

                    <h3 className="text-[#111315] text-lg font-semibold mb-4">
                        What's Included
                    </h3>
                    <ul className="space-y-3">
                        {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                            <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-red-500/10 shrink-0">
                            <FaCheck className="text-red-500 w-2.5 h-2.5" />
                            </span>
                            <span className="text-[#111315]/70 text-sm md:text-base">{feature}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ServiceOverview