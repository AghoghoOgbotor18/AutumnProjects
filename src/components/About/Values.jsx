import React from 'react'
import { FaShieldAlt, FaHandshake, FaAward } from 'react-icons/fa'

const values = [
  {
    icon: FaShieldAlt,
    title: 'Safety First',
    text: 'Every project runs on the same standard that earned us six Shell SPDC Safety Awards.',
  },
  {
    icon: FaHandshake,
    title: 'Integrity & Reliability',
    text: 'We commit to what we can deliver, and we deliver what we commit to — no shortcuts, no surprises.',
  },
  {
    icon: FaAward,
    title: 'Quality Craftsmanship',
    text: 'Recognized as the best Mechanical and Electrical Infrastructure firm in oil and gas, 2018.',
  },
];

const Values = () => {
    return (
        <section className="bg-[#0B0C0E] pb-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-8">
                {values.map((value) => (
                <div key={value.title} className="text-center px-4">
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
                    <value.icon className="text-red-500 w-5 h-5" />
                    </div>
                    <h4 className="text-white text-lg font-semibold mb-3">{value.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{value.text}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Values