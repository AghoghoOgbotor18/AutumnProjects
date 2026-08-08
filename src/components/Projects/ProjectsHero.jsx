import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsHero = () => {
    return (
        <section
        className="relative h-[340px] md:h-[420px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero4.webp)` }}
        >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6">
            <p className="text-white/60 text-sm mb-3">
            <Link to="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-red-500">Projects</span>
            </p>
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            Projects We've <span className="text-red-500">Delivered</span>
            </h1>
        </div>
        </section>
    )
}

export default ProjectsHero