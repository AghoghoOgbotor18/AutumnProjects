import React from 'react'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const ContactInfoPanel = () => {
    return (
        <div className="bg-[#0B0C0E] rounded-2xl p-8 md:p-10 relative overflow-hidden">
        {/* Hazard-stripe accent, same brand signature used elsewhere */}
        <div
            className="absolute -top-10 -right-10 w-40 h-40 opacity-[0.08] pointer-events-none"
            style={{
            backgroundImage:
                'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 10px, transparent 10px, transparent 20px)',
            }}
        />

        <h3 className="text-white text-xl font-bold mb-8 relative">Contact Information</h3>

        <ul className="space-y-6 relative">
            <li className="flex items-start gap-4">
            <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
                <FaMapMarkerAlt className="text-red-500 w-4 h-4" />
            </span>
            <div>
                <p className="text-white text-sm font-semibold mb-0.5">Office</p>
                <p className="text-white/50 text-sm leading-relaxed">
                Port Harcourt, Rivers State, Nigeria
                </p>
            </div>
            </li>

            <li className="flex items-start gap-4">
            <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
                <FaPhoneAlt className="text-red-500 w-4 h-4" />
            </span>
            <div>
                <p className="text-white text-sm font-semibold mb-0.5">Phone</p>
                <a href="tel:+2340000000000" className="text-white/50 text-sm hover:text-red-500 transition-colors duration-300">
                +234 805 086 9190
                </a>
            </div>
            </li>

            <li className="flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
                    <FaEnvelope className="text-red-500 w-4 h-4" />
                </span>
                <div>
                    <p className="text-white text-sm font-semibold mb-0.5">Email</p>
                    <a href="mailto:info@adlandprojects.com" className="text-white/50 text-sm hover:text-red-500 transition-colors duration-300">
                    info@autumnprojects.com
                    </a>
                </div>
            </li>

            <li className="flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
                    <FaClock className="text-red-500 w-4 h-4" />
                </span>
                <div>
                    <p className="text-white text-sm font-semibold mb-0.5">Working Hours</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                    Mon - Fri: 8:00am - 5:00pm
                    </p>
                </div>
            </li>
        </ul>

        <div className="border-t border-white/10 mt-8 pt-6 relative flex items-center gap-3">
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
    )
}

export default ContactInfoPanel