import React, { useState, useEffect } from "react";
import { crsl1, crsl2, crsl3 } from "../../../assets";

const slides = [
    {
        image: crsl1,
        title: "New Collection 2026",
        subtitle: "Discover the latest trends in fashion",
    },
    {
        image: crsl2,
        title: "Summer Sale",
        subtitle: "Up to 50% off on selected items",
    },
    {
        image: crsl3,
        title: "Premium Quality",
        subtitle: "Designed for comfort and style",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            {/* Background Image */}
            <img
                src={slides[current].image}
                alt="hero"
                className="absolute w-full h-full object-cover transition-all duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h4
                    key={`subtitle-${current}`}
                    className="text-lg md:text-2xl mb-4 uppercase tracking-widest
                     opacity-0 animate-fadeUp"
                >
                    {slides[current].subtitle}
                </h4>

                <h1
                    key={`title-${current}`}
                    className="text-4xl md:text-6xl font-bold mb-6
                     opacity-0 animate-fadeUp delay-200"
                >
                    {slides[current].title}
                </h1>

                <button
                    key={`btn-${current}`}
                    className="bg-white text-black px-6 py-3 rounded-md font-semibold
                     hover:bg-gray-200 transition duration-300
                     opacity-0 animate-fadeScale delay-500"
                >
                    Shop Now
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute top-0 left-0 h-full px-4 flex items-center z-20"
            >
                <span className="bg-white/30 hover:bg-white/50 p-3 rounded-full text-white text-xl">
                    ❮
                </span>
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-0 right-0 h-full px-4 flex items-center z-20"
            >
                <span className="bg-white/30 hover:bg-white/50 p-3 rounded-full text-white text-xl">
                    ❯
                </span>
            </button>
        </div>
    );
}
