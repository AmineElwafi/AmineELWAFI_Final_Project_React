import React, { useState } from 'react'
import images from '../../../assets'
import products from '../../../data/products'

export default function RandomProduct() {

    const [randomProduct] = useState(() => {
        const randomIndex = Math.floor(Math.random() * products.length)
        return products[randomIndex]
    })

    return (
        <section className="w-full bg-[#f2f2f2] py-20 flex justify-center mt-10 mb-10">

            <div className="flex gap-1 items-center">

                <div className="relative h-[40vh]">

                    <img
                        src={images.random}
                        alt="Lookbook"
                        className="h-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 text-center">
                        <h3 className="text-sm tracking-[4px] uppercase">
                            The Beauty
                        </h3>
                        <h1 className="text-5xl font-bold mt-2">
                            Lookbook
                        </h1>

                        <a
                            href="#"
                            className="mt-5 border border-transparent hover:border-b-white transition duration-300"
                        >
                            View Collection
                        </a>
                    </div>
                </div>

                <div className="w-1/2 flex flex-col items-center text-center h-[40vh]">

                    <img
                        src={randomProduct.mainImage}
                        alt={randomProduct.name}
                        className="w-75 h-87.5 object-cover"
                    />

                    <h3 className="mt-6 text-lg text-[#555]">
                        {randomProduct.name}
                    </h3>

                    <p className="mt-2 text-xl font-semibold">
                        ${randomProduct.price}
                    </p>

                    <div className="flex gap-10 mt-8">
                        {[
                            { value: "-2600", label: "Days" },
                            { value: "-14", label: "Hrs" },
                            { value: "-58", label: "Mins" },
                            { value: "-25", label: "Secs" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <h4 className="text-2xl font-bold">
                                    {item.value}
                                </h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}
