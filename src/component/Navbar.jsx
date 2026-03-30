import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar w-11/12  mx-auto bg-base-100 border-b border-base-200 px-4 md:px-1">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-2xl p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        DigiTools
                    </div>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium gap-2">
                        <li><a className="hover:text-primary transition-colors">Products</a></li>
                        <li><a className="hover:text-primary transition-colors">Features</a></li>
                        <li><a className="hover:text-primary transition-colors">Pricing</a></li>
                        <li><a className="hover:text-primary transition-colors">Testimonials</a></li>
                        <li><a className="hover:text-primary transition-colors">FAQ</a></li>
                    </ul>
                </div>


                <div className="navbar-end gap-3">


                    <button className="btn btn-ghost btn-circle ">
                        <p className='flex gap-4 items-center'> <LuShoppingCart /></p>
                    </button>

                    <button className="btn btn-ghost btn-sm font-semibold hidden sm:inline-flex">
                        Login
                    </button>

                    <button className="btn btn-primary btn-sm md:btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full px-6 text-white shadow-md">
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;