import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0B0C0E] border-t border-white/5 px-6 md:px-16 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 pb-16">
            {/* Brand column */}
            <div>
                <h3 className="text-white text-2xl font-extrabold mb-4">
                Autumn <span className="text-red-500">Projects</span>
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                An indigenous engineering firm delivering civil, mechanical and
                infrastructure projects across Nigeria's oil and gas and
                government sectors — on time, on budget, without compromising
                on safety.
                </p>
                <div className="flex items-center gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                    <a
                    key={index}
                    href="#"
                    aria-label="Social link"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-red-500 hover:border-red-500 transition-colors duration-300"
                    >
                        <Icon className="w-3.5 h-3.5" />
                    </a>
                ))}
                </div>
            </div>

            {/* Quick links */}
            <div>
                <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-5">
                Quick Links
                </h4>
                <ul className="space-y-3">
                {[
                    { label: 'About Us', href: '/about' },
                    { label: 'Our Services', href: '/services' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                    <li key={link.label}>
                    <a 
                        href={link.href}
                        className="text-white/50 text-sm hover:text-red-500 transition-colors duration-300"
                    >
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Services */}
            <div>
                <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-5">
                Services
                </h4>
                <ul className="space-y-3">
                {[
                    { label: 'Civil & Structural Works', slug: 'civil-structural-works' },
                    { label: 'Mechanical & Electrical', slug: 'mechanical-electrical-infrastructure' },
                    { label: 'Procurement & Logistics', slug: 'procurement-logistics' },
                    { label: 'Oil & Gas Engineering', slug: 'oil-gas-engineering' },
                ].map((service) => (
                    <li key={service.slug}>
                    <a
                        href={`/services/${service.slug}`}
                        className="text-white/50 text-sm hover:text-red-500 transition-colors duration-300"
                    >
                        {service.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-5">
                Get In Touch
                </h4>
                <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-red-500 w-4 h-4 mt-1 shrink-0" />
                    <span className="text-white/50 text-sm leading-relaxed">
                    Port Harcourt, Rivers State, Nigeria
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <FaPhoneAlt className="text-red-500 w-4 h-4 shrink-0" />
                    <a href="tel:+2340000000000" className="text-white/50 text-sm hover:text-red-500 transition-colors duration-300">
                    +234 816 897 3060
                    </a>
                </li>
                <li className="flex items-center gap-3">
                    <FaEnvelope className="text-red-500 w-4 h-4 shrink-0" />
                    <a href="mailto:info@adlandprojects.com" className="text-white/50 text-sm hover:text-red-500 transition-colors duration-300">
                    info@autumnprojects.com
                    </a>
                </li>
                </ul>
            </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white/40 text-xs">
                    &copy; {year} Autumn Projects Nigeria Limited. All rights reserved.
                </p>
                <p className='text-white/40 text-xs'>Developed by <a href="https://wa.me/2348168973060" target="_blank" className='text-red-500'>Aghogho Ogbotor</a></p>
            </div>
        </div>
        </footer>
    )
}

export default Footer