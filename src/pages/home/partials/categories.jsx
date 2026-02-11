import React from 'react'
import { card1, card2, card3, card4, card5, card6 } from "../../../assets/index"

export default function Categories() {
    return (
        <>
            <div className='flex justify-center pt-10 pb-10'>
                <div className='grid grid-cols-3 pr-60 pl-60 gap-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-fit'>
                            <img className='h-full w-auto' src={card1} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>DRESSES</button>
                        </div>
                        <div className='relative w-fit'>
                            <img src={card4} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>SUNGLESSES</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-fit'>
                            <img src={card2} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>WATCHES</button>
                        </div>
                        <div className='relative w-fit'>
                            <img src={card5} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>FOOTWEAR</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-fit'>
                            <img src={card3} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>BAGS</button>
                        </div>
                        <div className='relative w-fit'>
                            <img src={card6} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>ACCESSORIES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
