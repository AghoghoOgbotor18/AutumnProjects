import React from 'react'
import { FaBullseye, FaAward } from 'react-icons/fa'
import Mission from "../../assets/images/mission.jpg"

const MissionVision = () => {
    return (
        <section className="bg-[#0B0C0E] py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="relative h-[420px] md:h-[500px]">
                    <div
                        className="absolute -bottom-4 -right-4 w-40 h-40 rounded-sm"
                        style={{
                        backgroundImage:
                            'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 10px, #0B0C0E 10px, #0B0C0E 20px)',
                        }}
                    />
                    <img
                        src={Mission}
                        alt="Adland Projects engineering team at work"
                        className="relative w-full h-full object-cover rounded-md shadow-2xl z-10"
                    />
                    </div>

                    {/* Mission + Vision stacked */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                            <FaBullseye className="text-red-500 w-5 h-5" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">Our Mission</h3>
                            <p className="text-white/60 leading-relaxed">
                            To deliver dependable, high-quality Engineering, Procurement and IT
                            solutions that keep Nigeria's infrastructure and energy sector
                            moving forward — on time, on budget, every time.
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-10">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                            <FaAward className="text-red-500 w-5 h-5" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-3">Our Vision</h3>
                            <p className="text-white/60 leading-relaxed">
                            To be Port Harcourt's most trusted name in civil and infrastructure
                            works — known not just for what we build, but for how safely and
                            reliably we build it.
                            </p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default MissionVision