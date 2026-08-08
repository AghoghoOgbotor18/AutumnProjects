import React from 'react'
import civilImage from "../../assets/images/civil.jpg"
import mechanical from "../../assets/images/elect.jpg"
import procurement from "../../assets/images/procurement.jpg"
import infoTech from "../../assets/images/info-tech.jpg"
import oilAndGas from "../../assets/images/oil-and-gas.jpg"
import safety from "../../assets/images/quality.jpg"
import { Link } from 'react-router-dom'

const services = [
  {
    slug: 'civil-structural-works',
    title: 'Civil & Structural Works',
    image: civilImage,
  },
  {
    slug: 'mechanical-electrical-infrastructure',
    title: 'Mechanical & Electrical Infrastructure',
    image: mechanical,
  },
  {
    slug: 'procurement-logistics',
    title: 'Procurement & Logistics',
    image: procurement,
  },
  {
    slug: 'information-technology',
    title: 'Information Technology Services',
    image: infoTech,
  },
  {
    slug: 'oil-gas-engineering',
    title: 'Oil & Gas Engineering Support',
    image: oilAndGas,
  },
  {
    slug: 'safety-quality-assurance',
    title: 'Safety & Quality Assurance',
    image: safety
  },
];

const Services = () => {
  return (
    <section className="bg-[#e6e6e6] py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
            <div className="mb-14 flex flex-col gap-4 md:gap-6">
                <span className="relative text-red-500 text-sm font-semibold tracking-[0.2em] uppercase before:absolute before:w-10 before:bg-red-500 before:-bottom-1 before:h-0.5">
                    What We Do
                </span>
                <h2 className="text-[#111315] text-3xl md:text-5xl font-extrabold max-w-xl">
                    Services Built for <span className="text-red-500">Every Project Stage</span>
                </h2>
                <p className='w-full text-sm'>
                    With over 20 years experience, being committed to quality and excellence and real focus on customer satisfaction, we boast of great services to all our clients and potential clients alike.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group block overflow-hidden "
                >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden border-b-2 border-b-red-500 rounded-sm">
                        <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-active:scale-110"
                        />
                    </div>

                    {/* Title + underline */}
                    <div className="py-3">
                        <h3 className="text-[#111315] text-lg md:text-xl font-semibold mb-3">
                            {service.title}
                        </h3>
                        <span className="block h-[2px] w-10 bg-black/15 group-active:w-30 group-active:bg-red-500 group-hover:w-30 group-hover:bg-red-500 transition-all duration-300 ease-out" />
                    </div>
                </Link>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Services