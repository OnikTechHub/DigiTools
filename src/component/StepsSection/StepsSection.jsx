import React from 'react';
import user from "../../assets/products/user.png"
import packag from "../../assets/products/package.png"
import rocket from "../../assets/products/rocket.png"

const StepsSection = () => {
    return (
        <div className='bg-gray-100 '>
            <div className='w-10/12 mx-auto text-center py-10'>
                <div className="mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold text-base-content tracking-tight">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-base-content/60 max-w-lg mx-auto">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>
                
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-20'>
                    
                    
                    <div className='bg-white rounded-2xl px-3 py-14 space-y-3 relative'>

                        <span className='text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center absolute top-6 right-6 text-xs font-bold'>
                            01
                        </span>
                        <div className='flex justify-center'> 
                            <img className='bg-gray-200 rounded-full p-4 w-24 h-24 object-contain' src={user} alt="user" />
                        </div>
                        <h2 className='text-2xl font-semibold'>Create Account</h2>
                        <p className='text-gray-400'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>

                    <div className='bg-white rounded-2xl px-3 py-14 space-y-3 relative'>
                        <span className='text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center absolute top-6 right-6 text-xs font-bold'>
                            02
                        </span>
                        <div className='flex justify-center'> 
                            <img className='bg-gray-200 rounded-full p-4 w-24 h-24 object-contain' src={packag} alt="package" />
                        </div>
                        <h2 className='text-2xl font-semibold'>Choose Products</h2>
                        <p className='text-gray-400'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>

                    <div className='bg-white rounded-2xl px-3 py-14 space-y-3 relative'>
                        <span className='text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center absolute top-6 right-6 text-xs font-bold'>
                            03
                        </span>
                        <div className='flex justify-center'> 
                            <img className='bg-gray-200 rounded-full p-4 w-24 h-24 object-contain' src={rocket} alt="rocket" />
                        </div>
                        <h2 className='text-2xl font-semibold'>Start Creating</h2>
                        <p className='text-gray-400'>Download and start using your premium <br /> tools immediately.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StepsSection;