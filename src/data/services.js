import civilImage from "../assets/images/civil.jpg"
import mechanical from "../assets/images/elect.jpg"
import procurement from "../assets/images/procurement.jpg"
import infoTech from "../assets/images/info-tech.jpg"
import oilAndGas from "../assets/images/oil-and-gas.jpg"
import safety from "../assets/images/quality.jpg"

const services = [
    {
        slug: 'civil-structural-works',
        title: 'Civil & Structural Works',
        shortDescription: 'Foundation, structural and site works built to hold up under Nigeria\'s toughest conditions.',
        fullDescription: 'We handle civil and structural works from groundbreaking to completion — site preparation, foundations, structural framing and concrete works — built to withstand the demands of industrial and infrastructure projects. Every phase follows engineering specifications designed for durability first.',
        image: civilImage,
        heroImage: '/images/hero2.webp',
        features: [
        'Site preparation and earthworks',
        'Foundation design and construction',
        'Structural steel and concrete works',
        'Road and drainage construction',
        ],
    },
    {
        slug: 'mechanical-electrical-infrastructure',
        title: 'Mechanical & Electrical Infrastructure',
        shortDescription: 'Installation and maintenance of mechanical and electrical systems for industrial and commercial sites.',
        fullDescription: 'From power distribution to mechanical plant installation, we design, install and maintain the systems that keep industrial and commercial sites running. Our teams are experienced with both new installations and the upgrade or repair of existing infrastructure.',
        image: mechanical,
        heroImage: '/images/hero3.webp',
        features: [
        'Electrical installation and distribution',
        'Mechanical plant and equipment installation',
        'Preventive maintenance programs',
        'System upgrades and retrofits',
        ],
    },
    {
        slug: 'procurement-logistics',
        title: 'Procurement & Logistics',
        shortDescription: 'Sourcing, supply chain and logistics management that keeps your project materials moving.',
        fullDescription: 'We manage sourcing, vendor relationships and logistics so your project never stalls waiting on materials. That means vetted suppliers, competitive pricing and delivery schedules built around your project timeline, not the other way around.',
        image: procurement,
        heroImage: '/images/hero1.webp',
        features: [
        'Vendor sourcing and management',
        'Materials and equipment procurement',
        'Supply chain coordination',
        'Logistics and delivery scheduling',
        ],
    },
    {
        slug: 'information-technology',
        title: 'Information Technology Services',
        shortDescription: 'IT infrastructure and support services tailored to industrial and enterprise environments.',
        fullDescription: 'We provide IT infrastructure and support built for industrial and enterprise environments — from network setup to systems that keep operations connected across sites. Our approach treats IT as part of the project\'s reliability, not an afterthought.',
        image: infoTech,
        heroImage: '/images/hero4.webp',
        features: [
        'Network design and setup',
        'IT infrastructure support',
        'Systems integration',
        'Ongoing technical support',
        ],
    },
    {
        slug: 'oil-gas-engineering',
        title: 'Oil & Gas Engineering Support',
        shortDescription: 'Engineering support across pipeline integrity, offshore platforms and production facilities.',
        fullDescription: 'We provide engineering support across the oil and gas value chain — pipeline integrity work, offshore platform maintenance and production facility support — for operators who need a partner who understands the sector\'s technical and safety demands.',
        image: oilAndGas,
        heroImage: '/images/hero1.webp',
        features: [
        'Pipeline integrity works',
        'Offshore platform maintenance',
        'Production facility support',
        'Technical engineering consultation',
        ],
    },
    {
        slug: 'safety-quality-assurance',
        title: 'Safety & Quality Assurance',
        shortDescription: 'Safety systems and QA processes built on a six-time Shell SPDC award-winning standard.',
        fullDescription: 'Safety isn\'t a checklist for us — it\'s the standard that\'s earned us six Shell SPDC Safety Awards. We build safety and quality assurance into every stage of a project, from risk assessments to on-site protocols to final quality sign-off.',
        image: safety,
        heroImage: '/images/hero2.webp',
        features: [
        'Risk assessment and HSE planning',
        'On-site safety protocols and training',
        'Quality control and inspection',
        'Compliance documentation',
        ],
    },
];

export default services;