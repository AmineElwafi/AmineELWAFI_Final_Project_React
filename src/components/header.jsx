import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram, FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hideTopBar, setHideTopBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHideTopBar(true);
            } else {
                setHideTopBar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`flex justify-between items-center pr-10 pl-10 bg-[#f5f5f5] transition-all duration-300 ${hideTopBar ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100 py-2"
                    }`}
            >
                <div className='flex items-center gap-5'>
                    <FaFacebookF className='text-xl text-[#8e8583]' />
                    <FaTwitter className='text-xl text-[#8e8583]' />
                    <FaPinterestSquare className='text-xl text-[#8e8583]' />
                    <FaGooglePlusG className='text-xl text-[#8e8583]' />
                    <FaInstagram className='text-xl text-[#8e8583]' />
                </div>

                <p className='text-[#8e8583]'>
                    Free shipping for standard order over $100
                </p>

                <div className='flex items-center gap-5'>
                    <p className='text-[#8e8583]'>
                        fashe@example.com
                    </p>

                    <div className="relative inline-block text-left">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex justify-between w-20 px-4 py-2 bg-[#f5f5f5] text-sm font-medium focus:outline-none text-[#8e8583]"
                        >
                            USD
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="z-50 absolute mt-2 w-20 shadow-lg bg-white border-none">
                                <div className="py-1">
                                    <button className="block w-full text-left px-4 py-2 text-sm text-[#8e8583] hover:bg-gray-100">
                                        CAD
                                    </button>
                                    <button className="block w-full text-left px-4 py-2 text-sm text-[#8e8583] hover:bg-gray-100">
                                        EUR
                                    </button>
                                    <button className="block w-full text-left px-4 py-2 text-sm text-[#8e8583] hover:bg-gray-100">
                                        GBP
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='sticky top-0 z-40 bg-white flex justify-between items-center pr-10 pl-10 pb-5 pt-5 shadow-md'>
                <h1 className='text-4xl font-extrabold'>
                    Fashe<span className='text-red-500'>.</span>
                </h1>
                <div className='flex gap-10'>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#e65540] font-semibold"
                                : "hover:text-[#e65540]"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#e65540] font-semibold"
                                : "hover:text-[#e65540]"
                        }
                    >
                        Shop
                    </NavLink>

                    <NavLink
                        to="/sale"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#e65540] font-semibold"
                                : "hover:text-[#e65540]"
                        }
                    >
                        Sale
                    </NavLink>

                    <NavLink
                        to="/features"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#e65540] font-semibold"
                                : "hover:text-[#e65540]"
                        }
                    >
                        Features
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#e65540] font-semibold"
                                : "hover:text-[#e65540]"
                        }
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#e65540] font-semibold"
                                : "hover:text-[#e65540]"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#e65540] font-semibold"
                                : "hover:text-[#e65540]"
                        }
                    >
                        Contact
                    </NavLink>

                </div>

                <div className='flex items-center gap-5 text-[#8e8583]'>
                    <LuShoppingCart className='text-2xl' /> |
                    <FaRegUser className='text-2xl' />
                </div>
            </div>
        </>
    );
}
