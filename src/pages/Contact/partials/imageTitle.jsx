import React from 'react'
import images from '../../../assets'

export default function ImageTitle() {
    return (
        <div className="relative w-full h-[30vh]">

            <img
                src={images.banner}
                alt="Contact Banner"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <h1 className="absolute inset-0 flex items-center justify-center 
                           text-white text-4xl font-bold tracking-widest">
                CONTACT
            </h1>

        </div>
    )
}
