import React, { useEffect, useRef, useState } from 'react'
import aboutOne from "../../assets/work1.jpg";
import aboutTwo from "../../assets/work2.jpg";
import { Link } from 'react-router-dom';

const useInView = () => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(el);
            }
        },
        { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
};

const AboutUs = () => {
  const [imgRef, imgInView] = useInView();
  const [textRef, textInView] = useInView();

  return (
    <section className="relative bg-[#0E1013] py-24 px-6 md:px-16 overflow-hidden">
        {/* Ambient hazard-stripe accent, top-right, kept subtle */}
        <div
            className="absolute -top-20 -right-20 w-72 h-72 opacity-[0.06] pointer-events-none"
            style={{
            backgroundImage:
                'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 14px, transparent 14px, transparent 28px)',
            }}
        />

        <div className="relative grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image collage */}
            <div
            ref={imgRef}
            className={`relative h-[420px] md:h-[520px] transition-all duration-1000 ease-out ${
                imgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            >
            {/* thin hazard stripe strip behind the collage */}
            <div
                className="absolute -top-4 -left-4 w-40 h-40 rounded-sm"
                style={{
                backgroundImage:
                    'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 10px, #111214 10px, #111214 20px)',
                }}
            />

            <img
                src={aboutOne}
                alt="Site engineer overseeing civil works"
                className="absolute top-0 left-0 w-[72%] h-[75%] object-cover rounded-sm shadow-2xl z-10"
            />
            <img
                src={aboutTwo}
                alt="Workers on an Adland Projects site"
                className="absolute bottom-0 right-0 w-[62%] h-[55%] object-cover rounded-sm shadow-2xl border-4 border-[#0E1013] z-20"
            />

            {/* Award badge, overlapping both images */}
            <div className="absolute bottom-6 left-2 z-30 bg-[#151719] border border-white/10 rounded-md px-5 py-4 shadow-xl max-w-[210px]">
                <div className="flex items-baseline gap-1">
                    <span className="text-red-500 text-4xl font-extrabold leading-none">6×</span>
                </div>
                <p className="text-white text-xs mt-2 leading-snug tracking-wide">
                Shell SPDC Safety Award winner
                </p>
            </div>
            </div>

            {/* Text content */}
            <div
            ref={textRef}
            className={`transition-all duration-1000 ease-out delay-150 ${
                textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            >
            <span className="relative text-red-500 text-sm font-semibold tracking-[0.2em] uppercase before:absolute before:w-10 before:bg-red-500 before:-bottom-1 before:h-0.5">
                Who We Are
            </span>

            <h2 className="text-white text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
                No. 1 Civil Works Company in{' '}
                <span className="text-red-500">Port Harcourt</span>
            </h2>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                We're an indigenous engineering firm built to handle projects of any size or
                complexity. Over the years, that's earned us a reputation across Nigeria for
                reliable Engineering, Procurement and Information Technology services — for
                clients in oil and gas and in government alike.
            </p>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                Experience is what keeps us on schedule and on budget without cutting corners
                on quality. It's also what's earned us six Shell Petroleum Development
                Company (SPDC) Safety Awards, and recognition in 2018 as the best Mechanical
                and Electrical Infrastructure firm in oil and gas.
            </p>

            <Link to="/about"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
            >
                Learn More About Us
                <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </Link>
            </div>
        </div>
    </section>
  )
}

export default AboutUs