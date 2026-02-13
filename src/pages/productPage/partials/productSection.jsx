import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../../data/products';

export default function ProductSection() {

    const  {slug}  = useParams();
    const product = products.find(p => p.slug === slug);

    const [mainImage, setMainImage] = useState(product?.mainImage);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div className="p-20 text-center">Product Not Found</div>;
    }

    return (
        <div className="container mx-auto px-10 py-16 flex gap-16">

            {/* LEFT SIDE - Images */}
            <div className="flex gap-6 w-1/2">

                {/* Thumbnails */}
                <div className="flex flex-col gap-4">
                    {[product.mainImage, ...product.productImages].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt=""
                            onClick={() => setMainImage(img)}
                            className="w-20 h-24 object-cover cursor-pointer border hover:border-black"
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className="flex-1">
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-[600px] object-cover"
                    />
                </div>
            </div>

            {/* RIGHT SIDE - Info */}
            <div className="w-1/2 flex flex-col gap-6">

                <h1 className="text-3xl font-semibold">
                    {product.name}
                </h1>

                {/* Price */}
                <div className="flex items-center gap-4 text-xl">
                    <span className="line-through text-gray-400">
                        ${product.oldPrice}
                    </span>
                    <span className="text-[#e65540] font-semibold">
                        ${product.price}
                    </span>
                </div>

                <p className="text-gray-500">
                    {product.miniDescription}
                </p>

                {/* Sizes */}
                <div className="flex gap-3">
                    {product.variants.map(size => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 border 
                            ${selectedSize === size 
                                ? "bg-[#e65540] text-white border-[#e65540]" 
                                : "hover:border-[#e65540]"}
                            `}
                        >
                            {size.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Quantity + Add to Cart */}
                <div className="flex items-center gap-6">

                    <div className="flex items-center border">
                        <button
                            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                            className="px-4 py-2"
                        >
                            -
                        </button>

                        <span className="px-4">{quantity}</span>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-4 py-2"
                        >
                            +
                        </button>
                    </div>

                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-[#e65540] transition">
                        ADD TO CART
                    </button>

                </div>

                {/* Brand & Categories */}
                <div className="text-gray-500 text-sm">
                    <p>Brand: <span className="text-black">{product.Brand}</span></p>
                    <p>
                        Categories:{" "}
                        <span className="text-black">
                            {product.Categories.join(", ")}
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}
