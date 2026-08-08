import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import services from '../../data/services';
import { Link } from 'react-router-dom';

const RelatedServices = ({ currentSlug }) => {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

    return (
        <section className="bg-[#f1f1f1] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[#111315] text-2xl md:text-3xl font-extrabold mb-10">
                Other <span className="text-red-500">Services</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {related.map((service) => (
                    <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="group block rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-2"
                    >
                        <div className="relative h-40 overflow-hidden border-b-2 border-red-500 rounded-md">
                            <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                        <div className='py-4'>
                            <h4 className="text-[#111315] text-base font-semibold">
                            {service.title}
                            </h4>
                            <span className="inline-flex items-center gap-2 text-red-500 text-xs font-semibold">
                            Learn More
                            <FaArrowRight className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </div>
                        <span className="block h-[2px] w-10 bg-black/15 group-active:w-30 group-active:bg-red-500 group-hover:w-30 group-hover:bg-red-500 transition-all duration-300 ease-out" />
                    </Link>
                ))}
                </div>
            </div>
        </section>
    )
}

export default RelatedServices