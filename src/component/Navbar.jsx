import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar w-11/12  mx-auto bg-base-100 border-b border-base-200 px-4 md:px-1">

                <div className="navbar-start">
                    <div className="dropdown">
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-2xl md:text-4xl p-1 md:p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
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


                    <div className="relative">
                        <div className="text-2xl ">
                            <LuShoppingCart />
                        </div>
                        {/* <p className="font-semibold text-red-500 absolute -top-3 -right-2 ">
                            {cartItem.length}
                        </p> */}
                    </div>

                    <button className="btn rounded-2xl md:text-lg">Login</button>

                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white md:text-lg p-2 md:p-4">
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;