import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import services from '../../data/services';

const ServicesGrid = () => {
    return (
        <section className="bg-[#f1f1f1] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                <a
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group block rounded-md overflow-hidden bg-[#f1f1f1] border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-300 p-3"
                >
                    <div className="relative h-52 overflow-hidden border-b-2 border-red-500 rounded-md">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                    </div>

                    <div className="py-2">
                        <h3 className="text-[#111315] text-lg md:text-xl font-semibold mb-3">
                            {service.title}
                        </h3>
                        <p className="text-[#111315]/60 text-sm leading-relaxed mb-4">
                            {service.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold">
                            Learn More
                            <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </div>
                </a>
                ))}
            </div>
        </section>
    )
}

export default ServicesGrid