import React, { useEffect, useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProjectsModal = ({ projects, activeIndex, onClose, onPrev, onNext }) => {
    const touchStartX = useRef(null);
    const project = projects[activeIndex];
    const hasMultiple = projects.length > 1;

    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        if (hasMultiple && e.key === 'ArrowLeft') onPrev();
        if (hasMultiple && e.key === 'ArrowRight') onNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext, hasMultiple]);

    const handleTouchStart = (e) => {
        if (!hasMultiple) return;
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (!hasMultiple || touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        const swipeThreshold = 50;

        if (deltaX > swipeThreshold) onPrev();
        else if (deltaX < -swipeThreshold) onNext();
        touchStartX.current = null;
    };

    if (!project) return null;

    return (
        <div
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center px-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        >
        <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/70 hover:text-red-500 transition-colors duration-200"
        >
            <FaTimes className="w-7 h-7" />
        </button>

        {hasMultiple && (
            <button
            onClick={onPrev}
            aria-label="Previous image"
            className="flex absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-red-500 transition-colors duration-200"
            >
            <FaChevronLeft className="w-8 h-8" />
            </button>
        )}

        <div className="max-w-4xl w-full flex flex-col items-center">
            <img
            src={project.image}
            alt={project.title}
            className="max-h-[70vh] w-auto mx-auto rounded-md object-contain"
            />
            <span className="text-red-500 text-xs font-semibold tracking-widest uppercase mt-4">
            {project.category}
            </span>
            <p className="text-white text-base md:text-lg mt-2 text-center">{project.title}</p>
            <p className="text-white/40 text-sm mt-1">{project.location}</p>
            {hasMultiple && (
            <p className="text-white/30 text-xs mt-3">
                {activeIndex + 1} / {projects.length}
            </p>
            )}
        </div>

        {hasMultiple && (
            <button
            onClick={onNext}
            aria-label="Next image"
            className="flex absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-red-500 transition-colors duration-200"
            >
            <FaChevronRight className="w-8 h-8" />
            </button>
        )}
        </div>
    )
}

export default ProjectsModal