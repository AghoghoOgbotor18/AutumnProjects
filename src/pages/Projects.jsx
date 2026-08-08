import React, { useState, useMemo } from 'react'
import projects from '../data/projects'
import ProjectsHero from '../components/Projects/ProjectsHero'
import FeaturedProject from '../components/Projects/FeaturedProject'
import ProjectsFilter from '../components/Projects/ProjectsFilter'
import ProjectsGallery from '../components/Projects/ProjectsGallery'
import ProjectsModal from '../components/Projects/ProjectsModal'
import ProjectsCTA from '../components/Projects/ProjectsCTA'

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [galleryIndex, setGalleryIndex] = useState(null);
    const [featuredOpen, setFeaturedOpen] = useState(false);

    const featured = projects[0];
    const remaining = projects.slice(1);

    const categories = useMemo(
        () => ['All', ...new Set(remaining.map((p) => p.category))],
        []
    );

    const filtered = useMemo(() => {
        if (activeCategory === 'All') return remaining;
        return remaining.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    // Gallery modal (swipeable)
    const isGalleryOpen = galleryIndex !== null;
    const closeGallery = () => setGalleryIndex(null);
    const showPrev = () =>
        setGalleryIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    const showNext = () =>
        setGalleryIndex((prev) => (prev + 1) % filtered.length);

    return (
        <div>
        <ProjectsHero />
        <FeaturedProject project={featured} onView={() => setFeaturedOpen(true)} />

        <section className="bg-[#0B0C0E] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
            <ProjectsFilter
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
            />
            <ProjectsGallery projects={filtered} onSelect={setGalleryIndex} />
            </div>
        </section>

        <ProjectsCTA />

        {/* Standalone single-image modal for the featured project */}
        {featuredOpen && (
            <ProjectsModal
            projects={[featured]}
            activeIndex={0}
            onClose={() => setFeaturedOpen(false)}
            onPrev={() => {}}
            onNext={() => {}}
            />
        )}

        {/* Swipeable modal for the filtered grid */}
        {isGalleryOpen && (
            <ProjectsModal
            projects={filtered}
            activeIndex={galleryIndex}
            onClose={closeGallery}
            onPrev={showPrev}
            onNext={showNext}
            />
        )}
        </div>
    )
}

export default Projects