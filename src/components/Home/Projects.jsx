import React, { useState, useEffect, useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import civilImage from "../../assets/images/civil.jpg"
import mechanical from "../../assets/images/elect.jpg"
import procurement from "../../assets/images/procurement.jpg"
import infoTech from "../../assets/images/info-tech.jpg"
import oilAndGas from "../../assets/images/oil-and-gas.jpg"
import safety from "../../assets/images/quality.jpg"

const projects = [
  { id: 1, title: 'SPDC Pipeline Integrity Works', image: '/images/hero1.webp' },
  { id: 2, title: 'Offshore Platform Maintenance', image: mechanical },
  { id: 3, title: 'Government Road Rehabilitation', image: '/images/hero3.webp' },
  { id: 4, title: 'Industrial Electrical Upgrade', image: infoTech },
  { id: 5, title: 'Civil Structural Foundation', image: civilImage },
  { id: 6, title: 'Mechanical Plant Installation', image: mechanical },
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const touchStartX = useRef(null);

    const isOpen = activeIndex !== null;

    const closeModal = () => setActiveIndex(null);

    const showPrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const showNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        };
    }, [isOpen]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      showPrev();
    } else if (deltaX < -swipeThreshold) {
      showNext();
    }
    touchStartX.current = null;
  };

    return (
        <section className="bg-[#0B0C0E] py-24 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14 flex flex-col gap-2">
                    <span className="relative text-red-500 text-sm font-semibold tracking-[0.2em] uppercase before:absolute before:w-10 before:bg-red-500 before:-bottom-1 before:h-0.5">
                        Our Work
                    </span>
                    <div className="flex justify-between items-center">
                        <h2 className="text-white text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
                        Projects We're <span className="text-red-500">Proud Of</span>
                        </h2>
                        <a
                            href="/projects"
                            className="inline-flex items-center text-sm text-red-500 gap-1 transition-colors duration-300 w-fit group"
                        >
                            View All Projects
                            <FaChevronRight className='group-hover:pl-1' />
                        </a>
                    </div>
                    <p className='text-white mt-4 text-sm'>
                        From pipeline integrity work for major oil and gas operators to civil and structural builds for government clients, every project on this page reflects the same standard: delivered on time, within budget, and without compromising on safety.
                    </p>
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <button
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className="group relative h-48 md:h-64 overflow-hidden rounded-md text-left"
                    >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                        <span className="absolute bottom-3 left-3 right-3 text-white text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            {project.title}
                        </span>
                    </button>
                ))}
                </div>

                {/* Bottom CTA, centered below the gallery */}
                <div className="flex justify-center mt-12">
                    <a
                        href="/projects"
                        className="group inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-300"
                    >
                        View All Projects
                        <FaChevronRight
                            size={12}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                className="fixed inset-0 z-500 bg-black/95 flex items-center justify-center px-4 pt-20"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                >
                {/* Close button */}
                <button
                    onClick={closeModal}
                    aria-label="Close"
                    className="absolute top-6 right-6 text-white/70 hover:text-red-500 transition-colors duration-200"
                >
                    <FaTimes className="w-7 h-7" />
                </button>

                {/* Prev arrow */}
                <button
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-red-500 transition-colors duration-200"
                >
                    <FaChevronLeft className="w-8 h-8" />
                </button>

                {/* Image + caption */}
                <div className="max-w-4xl w-full flex flex-col items-center">
                    <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="max-h-[75vh] w-auto mx-auto rounded-md object-contain"
                    />
                    <p className="text-white/80 text-sm md:text-base mt-4 text-center">
                    {projects[activeIndex].title}
                    </p>
                    <p className="text-white/40 text-xs mt-1">
                    {activeIndex + 1} / {projects.length}
                    </p>
                </div>

                {/* Next arrow */}
                <button
                    onClick={showNext}
                    aria-label="Next image"
                    className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-red-500 transition-colors duration-200"
                >
                    <FaChevronRight className="w-8 h-8" />
                </button>
                </div>
            )}
        </section>
    )
}

export default Projects