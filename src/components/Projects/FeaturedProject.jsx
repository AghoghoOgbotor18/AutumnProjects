import React from 'react'

const FeaturedProject = ({ project, onView }) => {
    if (!project) return null;

    return (
        <section className="bg-[#0B0C0E] pt-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
            <button
            onClick={onView}
            className="group relative w-full h-[380px] md:h-[520px] rounded-lg overflow-hidden block text-left"
            >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Featured Project
                </span>
                <h2 className="text-white text-2xl md:text-4xl font-extrabold mb-2 max-w-2xl">
                {project.title}
                </h2>
                <p className="text-white/60 text-sm md:text-base">{project.location}</p>
            </div>
            </button>
        </div>
        </section>
    )
}

export default FeaturedProject