import React, { useState } from 'react'
import images from '../../../assets'
import products from '../../../data/products'

export default function RandomProduct() {
    const [randomProduct] = useState(() => {
        const randomIndex = Math.floor(Math.random() * products.length)
        return products[randomIndex]
    })
    return (
        <>
            <div className=''>
                <div>
                    <div>
                        <img src={images.random} alt="" />
                        <div>
                            <h3>The Beauty</h3>
                            <h1>Lookbook</h1>
                        </div>
                        <a href="">View Collection</a>
                    </div>
                    <div>
                            <div>
                                <div>
                                    <img src={randomProduct.mainImage} alt="" />
                                    <h3>{randomProduct.name}</h3>
                                    <p>{randomProduct.price}</p>
                                </div>
                                <div>
                                    <div>
                                        <h4>-2600</h4>
                                        <p>days</p>
                                    </div>
                                    <div>
                                        <h4>-14</h4>
                                        <p>hrs</p>
                                    </div>
                                    <div>
                                        <h4>-58</h4>
                                        <p>mins</p>
                                    </div>
                                    <div>
                                        <h4>-25</h4>
                                        <p>secs</p>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
