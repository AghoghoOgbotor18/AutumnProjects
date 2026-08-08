import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import services from '../data/services'

const Header = () => {

    const links = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
        setMobileServicesOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed left-1/2 -translate-x-1/2 w-screen bg-black/90 backdrop-blur-md border border-white/10 text-white py-4 px-6 flex justify-between items-center z-[70] shadow-lg">

                {/* Logo */}
                <Link to="/" className='text-3xl brand-name'>
                    Autumn{''}<span className='text-red-500'>Projects</span> Ltd
                </Link>

                {/* Desktop Links */}
                <ul className='hidden md:flex gap-10 justify-center items-center'>
                    {
                        links.map((link, index) => (
                            link.name === "Services" ? (
                                <li key={index} className="relative group list-none">
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `flex items-center gap-1.5 text-gray-200 font-medium transition ${isActive ? "text-red-500 scale-110" : "hover:text-red-500 hover:duration-200"}`
                                        }
                                    >
                                        {link.name}
                                        <FaChevronDown className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180" />
                                    </NavLink>

                                    {/* Invisible bridge so hover doesn't drop between link and panel */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full h-3 w-full" />

                                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                                        <div className="w-72 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-3">
                                            {services.map((service) => (
                                                <NavLink
                                                    key={service.slug}
                                                    to={`/services/${service.slug}`}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-3 rounded-xl text-sm font-medium transition ${isActive ? "text-red-500 bg-white/5" : "text-gray-200 hover:text-red-500 hover:bg-white/5"}`
                                                    }
                                                >
                                                    {service.title}
                                                </NavLink>
                                            ))}
                                            <div className="border-t border-white/10 mt-2 pt-2">
                                                <NavLink
                                                    to="/services"
                                                    className="block px-4 py-3 rounded-xl text-red-500 hover:bg-white/5 text-sm font-semibold transition"
                                                >
                                                    View All Services
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ) : (
                                <NavLink
                                    key={index}
                                    to={link.path}
                                    className={({ isActive }) =>
                                         `text-gray-200 font-medium transition ${isActive ? "text-red-500 scale-110" : "hover:text-red-500 hover:duration-200"}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            )
                        ))
                    }
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleOpen}
                    className='md:hidden text-white z-[80]'
                >
                    {
                        isOpen
                            ? <FaTimes size={22} />
                            : <FaBars size={22} />
                    }
                </button>

            </nav>

            {/* Backdrop */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[20] md:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )
            }

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%] bg-black/90 backdrop-blur-md border border-white/10 text-white rounded-3xl py-8 flex flex-col gap-6 justify-center items-center z-[60] md:hidden max-h-[70vh] overflow-y-auto">

                        {
                            links.map((link, index) => (
                                link.name === "Services" ? (
                                    <div key={index} className="w-full flex flex-col items-center">
                                        <button
                                            onClick={() => setMobileServicesOpen((prev) => !prev)}
                                            className="flex items-center gap-1.5 text-gray-200 font-medium hover:text-red-500 transition"
                                        >
                                            {link.name}
                                            <FaChevronDown
                                                className={`w-3 h-3 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-red-500" : ""}`}
                                            />
                                        </button>

                                        {mobileServicesOpen && (
                                            <div className="flex flex-col items-center gap-4 mt-5 w-full px-6">
                                                {services.map((service) => (
                                                    <NavLink
                                                        key={service.slug}
                                                        to={`/services/${service.slug}`}
                                                        onClick={() => setIsOpen(false)}
                                                        className={({ isActive }) =>
                                                            `text-sm text-center transition ${isActive ? "text-red-500" : "text-gray-400 hover:text-red-500"}`
                                                        }
                                                    >
                                                        {service.title}
                                                    </NavLink>
                                                ))}
                                                <NavLink
                                                    to="/services"
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-sm text-red-500 font-semibold mt-1"
                                                >
                                                    View All Services
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        key={index}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-gray-200 font-medium transition ${isActive ? "text-red-500" : "hover:text-red-500 hover:duration-100"}`
                                        }
                                    >

                                        {link.name}

                                    </NavLink>
                                )
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Header