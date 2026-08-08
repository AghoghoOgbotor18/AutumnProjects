import React from 'react'
import { useParams } from 'react-router-dom'
import services from '../data/services';
import ServiceDetailHero from '../components/ServicesDetails/ServicesDetailsHero';
import ServiceOverview from '../components/ServicesDetails/ServicesOverview';
import RelatedServices from '../components/ServicesDetails/RelatedServices';
import ServicesDetailsCTA from '../components/ServicesDetails/ServicesDetailsCTA';

const ServiceDetailPage = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
                <h1 className="text-[#111315] text-2xl font-bold mb-4">Service not found</h1>
                <p className="text-[#111315]/60 mb-6">
                The service you're looking for doesn't exist or may have been moved.
                </p>
                <a
                href="/services"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                >
                Back to Services
                </a>
            </div>
        );
    }

    return (
        <div>
            <ServiceDetailHero service={service} />
            <ServiceOverview service={service} />
            <RelatedServices currentSlug={service.slug} />
            <ServicesDetailsCTA />
        </div>
    )
}

export default ServiceDetailPage