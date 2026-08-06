import React, { useEffect, useRef } from 'react'

const CTA = () => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        const overlay = overlayRef.current;
        if (!section || !bg || !overlay) return;

        let ticking = false;

        const updateClip = () => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;

        const clip =
            rect.bottom <= 0 || rect.top >= vh
            ? 'inset(100% 0 0 0)'
            : `inset(${Math.max(rect.top, 0)}px 0 ${Math.max(vh - rect.bottom, 0)}px 0)`;

            bg.style.clipPath = clip;
            overlay.style.clipPath = clip;
            ticking = false;
        };

        const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateClip);
            ticking = true;
        }
        };

        updateClip();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        };
    }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[480px] md:h-[560px] flex items-center justify-center"
    >
        <div
            ref={bgRef}
            className="fixed inset-0 bg-cover bg-center pointer-events-none z-0"
            style={{ backgroundImage: `url(/images/hero2.webp)` }}
        />

        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/75 pointer-events-none z-[1]"
        />

        <div className="relative z-10 text-center px-6 max-w-2xl">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Ready to Start Your <span className="text-red-500">Next Project?</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8">
            Tell us what you need and our team will get back to you with a plan, a timeline, and a quote — no obligation.
            </p>
            <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-300"
            >
            Get a Free Quote
            </a>
        </div>
    </section>
  )
}

export default CTA