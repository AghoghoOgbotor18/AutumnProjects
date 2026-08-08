import React from 'react'
import ServicesHero from '../components/Services/ServicesHero'
import ServicesIntro from '../components/Services/ServicesIntro'
import ServicesGrid from '../components/Services/ServicesGrid'
import OurProcess from '../components/Services/OurProcess'
import ServicesCTA from '../components/Services/ServicesCTA'

const Services = () => {
    return (
        <div>
            <ServicesHero />
            <ServicesIntro />
            <ServicesGrid />
            <OurProcess />
            <ServicesCTA />
        </div>
    )
}

export default Services
