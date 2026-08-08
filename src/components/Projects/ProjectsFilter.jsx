import React from 'react'

const ProjectsFilter = ({ categories, activeCategory, onChange }) => {
    return (
        <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => onChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
                    activeCategory === category
                    ? 'bg-red-500 border-red-500 text-white'
                    : 'bg-transparent border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                }`}
                >
                {category}
                </button>
            ))}
        </div>
    )
}

export default ProjectsFilter