import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We start by understanding your project scope, timeline and budget.',
  },
  {
    number: '02',
    title: 'Planning & Procurement',
    text: 'Detailed engineering plans and material sourcing, locked in before ground breaks.',
  },
  {
    number: '03',
    title: 'Execution',
    text: 'Certified teams and equipment deliver the work to spec, on schedule.',
  },
  {
    number: '04',
    title: 'Quality & Handover',
    text: 'Safety and quality checks at every stage, then a clean handover to you.',
  },
];

const OurProcess = () => {
    return (
        <section className="bg-[#0B0C0E] py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mb-16">
                    <span className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase">
                        How We Work
                    </span>
                    <h2 className="text-white text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
                        A Process Built for <span className="text-red-500">Reliability</span>
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            <p className="text-red-500/30 text-5xl font-extrabold mb-4">
                                {step.number}
                            </p>
                            <h4 className="text-white text-lg font-semibold mb-3">{step.title}</h4>
                            <p className="text-white/50 text-sm leading-relaxed">{step.text}</p>

                            {index < steps.length - 1 && (
                                <span className="hidden lg:block absolute top-6 -right-5 w-10 h-px bg-white/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurProcess