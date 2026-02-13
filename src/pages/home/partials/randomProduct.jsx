import React, { useState } from 'react'
import images from '../../../assets'
import products from '../../../data/products'

export default function RandomProduct() {

    const [randomProduct] = useState(() => {
        const randomIndex = Math.floor(Math.random() * products.length)
        return products[randomIndex]
    })

    return (
        <section className="w-full bg-[#f8f8f8] py-20 flex justify-center items-center">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex flex-col md:flex-row w-full shadow-sm h-auto md:h-[600px]">
                    
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-full group overflow-hidden">
                        <img
                            src={images.random}
                            alt="Lookbook"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white text-center">
                            <h3 className="text-xl font-medium tracking-wide">
                                The Beauty
                            </h3>
                            <h1 className="text-5xl md:text-6xl font-bold mt-2 tracking-wider uppercase">
                                LOOKBOOK
                            </h1>
                            <a
                                href="#"
                                className="mt-8 text-xs font-bold tracking-[3px] uppercase border-b-2 border-transparent hover:border-white transition-all pb-1"
                            >
                                View Collection
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-white h-[500px] md:h-full flex flex-col justify-center items-center p-8 relative">
                        
                        <div className="w-64 h-64 mb-6 flex items-center justify-center">
                            <img
                                src={randomProduct.mainImage}
                                alt={randomProduct.name}
                                className="h-[30vh] object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <h3 className="text-gray-500 text-lg font-light text-center px-4">
                            {randomProduct.name}
                        </h3>

                        <p className="mt-2 text-gray-800 text-xl font-medium mb-8">
                            ${randomProduct.price}
                        </p>

                        <div className="flex gap-4">
                            {[
                                { value: "-2601", label: "days" },
                                { value: "-11", label: "hrs" },
                                { value: "-26", label: "mins" },
                                { value: "-26", label: "secs" },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center border border-gray-200 w-16 h-16 md:w-20 md:h-20">
                                    <span className="text-gray-500 text-lg md:text-xl font-light leading-none">
                                        {item.value}
                                    </span>
                                    <span className="text-gray-400 text-[10px] md:text-xs font-light lowercase mt-1">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}