import React from 'react'
import images from '../../../assets'

export default function Categories() {
    return (
        <>
            <div className='flex justify-center pt-10 pb-10'>
                <div className='grid grid-cols-3 pr-100 pl-100 gap-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-fit hover:scale-100 transition'>
                            <img className='h-full w-auto' src={images.card1} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>DRESSES</button>
                        </div>
                        <div className='relative w-fit'>
                            <img src={images.card4} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>SUNGLESSES</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-fit'>
                            <img src={images.card2} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>WATCHES</button>
                        </div>
                        <div className='relative w-fit'>
                            <img src={images.card5} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>FOOTWEAR</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='relative w-fit'>
                            <img src={images.card3} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>BAGS</button>
                        </div>
                        <div className='relative w-fit'>
                            <img src={images.card6} alt="" />
                            <button className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition duration-300'>ACCESSORIES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}