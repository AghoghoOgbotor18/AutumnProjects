import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

const ProjectsGallery = ({ projects, onSelect }) => {
    return (
        <div>
            <p className='flex items-center gap-1.5 animate-pulse text-white text-sm pb-2'>click images to get a better wiew<FaArrowDown /></p>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
                
                {projects.map((project, index) => (
                    <button
                    key={project.id}
                    onClick={() => onSelect(index)}
                    className={`group relative overflow-hidden rounded-md text-left ${
                        project.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                    }`}
                    >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-colors duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-red-500 text-[11px] font-semibold tracking-widest uppercase block mb-1">
                        {project.category}
                        </span>
                        <p className="text-white text-sm font-medium leading-snug">{project.title}</p>
                    </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProjectsGallery