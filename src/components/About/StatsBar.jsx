import React from 'react'

const stats = [
  { value: '6×', label: 'Shell SPDC Safety Award' },
  { value: '2018', label: 'Best M&E Infrastructure Firm' },
  { value: '20+', label: 'Years of Experience' },
  { value: '100+', label: 'Projects Completed' },
];

const StatsBar = () => {
    return (
        <section className="bg-[#f1f1f1] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
                {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                    <p className="text-red-500 text-4xl md:text-5xl font-extrabold mb-2">
                    {stat.value}
                    </p>
                    <p className="text-[#111315]/60 text-sm">{stat.label}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default StatsBar