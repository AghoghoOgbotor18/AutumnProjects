import React from 'react'
import seplat from "../../assets/images/seplat.png"
import total from "../../assets/images/total.png"
import shell from "../../assets/images/shell.png"
import nnpc from "../../assets/images/nnpc.png"
import heirs from "../../assets/images/heirs.png"

const logos = [
  { name: 'Client One', image: seplat },
  { name: 'Client Two', image: total },
  { name: 'Client Three', image: shell },
  { name: 'Client Four', image: nnpc },
  { name: 'Client Five', image: heirs },
];

const LogoScroll = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <p className="text-center text-[#111315]/50 text-sm font-semibold tracking-[0.2em] uppercase mb-10">
            Trusted By
            </p>

            <div className="relative w-full overflow-hidden">
                {/* fade edges so logos don't hard-cut at the container bounds */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-linear-to-r from-[#f1f1f1] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-linear-to-l from-[#f1f1f1] to-transparent z-10" />

                <div className="group flex w-max">
                    <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 animate-marquee group-hover:[animation-play-state:paused]">
                        {logos.map((logo, index) => (
                            <img
                            key={`a-${index}`}
                            src={logo.image}
                            alt={logo.name}
                            className="h-10 md:h-14 w-auto object-contain transition-all duration-300"
                            />
                        ))}
                    </div>
                    {/* duplicate set, so the loop is seamless */}
                    <div
                    aria-hidden="true"
                    className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 animate-marquee group-hover:[animation-play-state:paused]"
                    >
                        {logos.map((logo, index) => (
                            <img
                            key={`b-${index}`}
                            src={logo.image}
                            alt=""
                            className="h-10 md:h-14 w-auto object-contain transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default LogoScroll