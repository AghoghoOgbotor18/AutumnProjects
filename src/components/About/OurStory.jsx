import React from 'react'

const OurStory = () => {
  return (
    <section className="bg-[#f1f1f1] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[420px] md:h-[480px]">
                <div
                    className="absolute -top-4 -left-4 w-40 h-40 rounded-sm"
                    style={{
                    backgroundImage:
                        'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 10px, #F7F7F5 10px, #F7F7F5 20px)',
                    }}
                />
                <img
                    src="/images/hero3.webp"
                    alt="Adland Projects team on site"
                    className="absolute top-0 left-0 w-[72%] h-[75%] object-cover rounded-sm shadow-xl z-10"
                />
                <img
                    src="/images/hero1.webp"
                    alt="Engineer reviewing site plans"
                    className="absolute bottom-0 right-0 w-[62%] h-[55%] object-cover rounded-sm shadow-xl border-4 border-white z-20"
                />
            </div>

            <div>
                <span className="relative text-red-500 text-sm font-semibold tracking-[0.2em] uppercase before:absolute before:w-10 before:bg-red-500 before:-bottom-1 before:h-0.5">
                    Our Story
                </span>
                <h2 className="text-[#111315] text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
                    Built on Experience, <span className="text-red-500">Proven by Delivery</span>
                </h2>
                <p className="text-[#111315]/80 text-base md:text-lg leading-relaxed mb-4">
                    Autumn Projects Limited started as an indigenous engineering
                    outfit with a simple mandate: take on the projects other firms
                    wouldn't, and deliver them properly. That mandate hasn't changed —
                    what's changed is our capacity to act on it.
                </p>
                <p className="text-[#111315]/80 text-base md:text-lg leading-relaxed mb-4">
                    Today we handle Engineering, Procurement and Information Technology
                    services for clients across the oil and gas sector and government,
                    taking on projects of every size and complexity across Port Harcourt
                    and beyond.
                </p>
                <p className="text-[#111315]/80 text-base md:text-lg leading-relaxed">
                    We've built that reputation one project at a time — on schedule, on
                    budget, and without cutting corners on safety, which is precisely
                    why Shell Petroleum Development Company (SPDC) has recognized us
                    six times over.
                </p>
            </div>
        </div>
    </section>
  )
}

export default OurStory