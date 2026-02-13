import React, { useState } from 'react';
import products from '../../../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedProducts() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const maxIndex = products.length - itemsPerPage;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center gap-10 mt-10 mb-10'>
            <h1 className='font-bold text-3xl'>FEATURED PRODUCTS</h1>

            <div className='relative w-[70vw] group'>

                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-opacity ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className='overflow-hidden w-full'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                    >
                        {products.map((product) => (
                            <div key={product.id} className='min-w-[25%] px-2 flex flex-col gap-2'>
                                <div className='w-full h-full overflow-hidden'>
                                    <img
                                        src={product.mainImage}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className='text-[#555555] font-semibold mt-2'>{product.name}</h3>
                                <p className='text-[#555555]'>$ {product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className={`absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-opacity ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}