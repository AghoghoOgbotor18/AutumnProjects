import React, { useEffect, useState } from 'react'

const IntroLoader = () => {
    const [stage, setStage] = useState('driving');

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const revealTimer = setTimeout(() => setStage('revealed'), 1600);
        const openTimer = setTimeout(() => setStage('opening'), 3000);
        const doneTimer = setTimeout(() => {
        setStage('done');
        document.body.style.overflow = '';
        }, 3900);

        return () => {
        clearTimeout(revealTimer);
        clearTimeout(openTimer);
        clearTimeout(doneTimer);
        document.body.style.overflow = '';
        };
    }, []);

    if (stage === 'done') return null;

    return (
        <div className="fixed inset-0 z-[999] pointer-events-none">
        <div
            className={`absolute top-0 left-0 w-full h-1/2 bg-[#0B0C0E] flex items-end justify-center overflow-hidden transition-transform duration-[900ms] ease-in-out ${
            stage === 'opening' ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            <span
            className={`text-white text-3xl md:text-6xl font-extrabold tracking-tight pb-2 transition-all duration-700 ease-out ${
                stage === 'revealed' || stage === 'opening'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3'
            }`}
            >
            Autumn
            </span>
        </div>

        <div
            className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#0B0C0E] flex items-start justify-center overflow-hidden transition-transform duration-[900ms] ease-in-out ${
            stage === 'opening' ? 'translate-y-full' : 'translate-y-0'
            }`}
        >
            <span
            className={`text-red-500 text-3xl md:text-6xl font-extrabold tracking-tight pt-2 transition-all duration-700 ease-out delay-100 ${
                stage === 'revealed' || stage === 'opening'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-3'
            }`}
            >
            Projects
            </span>
        </div>

        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500/40 -translate-y-1/2 z-10" />

        {/* Excavator — animation class stays mounted permanently; opacity is the only thing that toggles */}
        <div
            className="absolute top-1/2 left-0 w-20 md:w-28 -translate-y-full z-20 animate-driveAcross"
            style={{
            opacity: stage === 'driving' ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
            }}
        >
            <img
            src="/images/excavator.png"
            alt=""
            className="w-full h-auto object-contain"
            />
        </div>
        </div>
    )
}

export default IntroLoader