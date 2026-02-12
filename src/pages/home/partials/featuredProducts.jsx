import React from 'react'
import products from '../../../data/products'

export default function FeaturedProducts() {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-10  mt-10 mb-10'>
                <h1 className='font-bold text-3xl'>FEATURED PRODUCTS</h1>
                <div className='flex flex-wrap justify-center gap-5 w-[70vw]'>
                    {products.map((product) => (
                        <div key={product.id} className='w-[15vw] flex flex-wrap gap-2'>
                            <img src={product.mainImage} alt=""/>
                            <h3 className='text-[#555555]'>{product.name}</h3>
                            <p className='text-[#555555]'>$ {product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
