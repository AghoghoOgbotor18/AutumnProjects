import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
        image: "/images/hero1.webp",
        title: "Superior Handling",
        highlight: "Guaranteed",
        text: "We combine quality workmanship, superior knowledge and affordable prices. This makes us your number one choice.",
        primaryBtn: { label: "Contact Us", href: "/contact" },
        secondaryBtn: { label: "View Projects", href: "/projects" }
        },
        {
        image: "/images/hero2.webp",
        title: "Your Number One",
        highlight: "Choice",
        text: "We have the necessary experience, personnel and equipment to deliver quality services for all your needs.",
        primaryBtn: { label: "Contact Us", href: "/contact" },
        secondaryBtn: { label: "View Projects", href: "/projects" }
        },
        {
        image: "/images/hero3.webp",
        title: "Excellence in Service",
        highlight: "Delivery",
        text: "We pride ourselves in diversified solutions and services in civil works and the oil and gas industry.",
        primaryBtn: { label: "Our Services", href: "/services" },
        secondaryBtn: { label: "Contact Us", href: "/contact" }
        },
        {
        image: "/images/hero4.webp",
        title: "Building Trust, Delivering",
        highlight: "Results",
        text: "From concept to completion, we bring precision and reliability to every project we undertake, on time and on budget.",
        primaryBtn: { label: "Our Services", href: "/services" },
        secondaryBtn: { label: "Contact Us", href: "/contact" }
        }
    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen min-h-screen overflow-x-hidden flex items-center">
        {/* Background slideshow */}
        {slides.map((slide, index) => (
            <div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
                backgroundImage: `url(${slide.image})`,
                opacity: current === index ? 1 : 0,
            }}
            />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/70" />

        {/* Text content */}
        <div className="relative z-10 flex flex-col gap-3 items-start justify-center h-full px-6 md:px-16 max-w-3xl">
            <h1
            key={`title-${current}`}
            className="text-white text-4xl md:text-6xl font-bold mb-4 animate-slideDown"
            >
            {slides[current].title}{" "}
            <span className="text-red-600">{slides[current].highlight}</span>
            </h1>

            <p
            key={`text-${current}`}
            className="text-white text-base md:text-lg animate-slideUp"
            >
            {slides[current].text}
            </p>

            <div
            key={`buttons-${current}`}
            className="flex flex-wrap gap-4 mt-4 animate-slideUpDelayed"
            >
                <Link
                    to={slides[current].primaryBtn.href}
                    className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                >
                    {slides[current].primaryBtn.label}
                </Link>
                <Link 
                    to={slides[current].secondaryBtn.href}
                    className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                >
                    {slides[current].secondaryBtn.label}
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero