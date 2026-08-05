import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {

    const links = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
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
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) =>
                                     `text-gray-200 font-medium transition ${isActive ? "text-red-500 scale-110" : "hover:text-red-500 hover:duration-200"}`
                                }
                            >
                                {link.name}
                            </NavLink>
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
                    <div className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%] bg-black/90 backdrop-blur-md border border-white/10 text-white rounded-3xl py-8 flex flex-col gap-6 justify-center items-center z-[60] md:hidden">

                        {
                            links.map((link, index) => (
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
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Header