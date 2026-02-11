import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram} from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <div  className='flex flex-col items-center gap-20 pt-15 pb-15 bg-[#f0f0f0]'>
                <div  className='flex gap-40 justify-evenly'>
                    <div className='w-xl flex flex-col gap-5'>
                        <h3 className='font-bold'>GET IN TOUCH</h3>
                        <p className='text-[#8e8583]'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className='flex items-center gap-5'>
                            <FaFacebookF className='text-xl text-[#8e8583]'/>
                            <FaTwitter className='text-xl text-[#8e8583]'/>
                            <FaPinterestSquare className='text-xl text-[#8e8583]'/>
                            <FaGooglePlusG className='text-xl text-[#8e8583]'/>
                            <FaInstagram className='text-xl text-[#8e8583]'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>CATEGORIES</h3>
                        <div className='flex flex-col'>
                            <a className='text-[#8e8583]' href="">Men</a>
                            <a className='text-[#8e8583]' href="">Women</a>
                            <a className='text-[#8e8583]' href="">Dresses</a>
                            <a className='text-[#8e8583]' href="">Sunglasses</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>LINKS</h3>
                        <div className='flex flex-col'>
                            <a className='text-[#8e8583]' href="">Search</a>
                            <a className='text-[#8e8583]' href="">About Us</a>
                            <a className='text-[#8e8583]' href="">Contact Us</a>
                            <a className='text-[#8e8583]' href="">Returns</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>HELP</h3>
                        <div className='flex flex-col'>
                            <a className='text-[#8e8583]' href="">Track Order</a>
                            <a className='text-[#8e8583]' href="">Returns</a>
                            <a className='text-[#8e8583]' href="">Shipping</a>
                            <a className='text-[#8e8583]' href="">FAQs</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='font-bold'>NEWSLETTER</h3>
                        <input className='border-b outline-none border-[#8e8583]' type="email" placeholder='Email Address'/>
                        <button className='pr-8 pl-8 pt-2 pb-2 rounded-4xl bg-black text-white'>SUBSCRIBE</button>
                    </div>
                </div>
                <p className='text-[#8e8583]'>Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.</p>
            </div>
        </>
    )
}
