import workOne from "../assets/work1.jpg"
import workTwo from "../assets/work2.jpg"
import civilImage from "../assets/images/civil.jpg"
import mechanical from "../assets/images/elect.jpg"
import procurement from "../assets/images/procurement.jpg"
import infoTech from "../assets/images/info-tech.jpg"
import oilAndGas from "../assets/images/oil-and-gas.jpg"
import safety from "../assets/images/quality.jpg"

const projects = [
    {
        id: 1,
        title: 'SPDC Pipeline Integrity Works',
        category: 'Oil & Gas',
        location: 'Port Harcourt, Rivers State',
        image: oilAndGas,
        size: 'large',
    },
    {
        id: 2,
        title: 'Offshore Platform Maintenance',
        category: 'Mechanical & Electrical',
        location: 'Bonny Terminal',
        image: mechanical,
        size: 'normal',
    },
    {
        id: 3,
        title: 'Government Road Rehabilitation',
        category: 'Civil Works',
        location: 'Port Harcourt, Rivers State',
        image: workTwo,
        size: 'normal',
    },
    {
        id: 4,
        title: 'Industrial Electrical Upgrade',
        category: 'Mechanical & Electrical',
        location: 'Eleme, Rivers State',
        image: '/images/hero3.webp',
        size: 'large',
    },
    {
        id: 5,
        title: 'Civil Structural Foundation',
        category: 'Civil Works',
        location: 'Port Harcourt, Rivers State',
        image: '/images/hero1.webp',
        size: 'normal',
    },
    {
        id: 6,
        title: 'Mechanical Plant Installation',
        category: 'Mechanical & Electrical',
        location: 'Onne, Rivers State',
        image: safety,
        size: 'normal',
    },
    {
        id: 7,
        title: 'Production Facility Support',
        category: 'Oil & Gas',
        location: 'Bonny Island',
        image: '/images/hero4.webp',
        size: 'normal',
    },
    {
        id: 8,
        title: 'ICT &Networking',
        category: 'IT Services',
        location: 'Port Harcourt, Rivers State',
        image: infoTech,
        size: 'normal',
    },
    {
        id: 9,
        title: 'Site Drainage & Earthworks',
        category: 'Civil Works',
        location: 'Port Harcourt, Rivers State',
        image: procurement,
        size: 'large',
    },
];

export default projects;