import React, { use } from 'react';

const ProductList = ({ productListPromise }) => {
    const productlist = use(productListPromise);

    return (
        <div className='bg-gray-50 py-20 px-6 md:px-12'>
            <div className='text-center mb-16 space-y-3'>
                <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-slate-900'>
                    Premium Digital Tools
                </h2>
                <p className='text-slate-500 max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10 mt-5 leading-relaxed'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                <div className='inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1 shadow-sm'>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-6 py-2.5 text-sm font-semibold'>
                        Products
                    </button>
                    <button className='text-gray-600 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-gray-50'>
                        Cart (2)
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
                {productlist.map((product) => (
                    <div className='bg-white border border-gray-100 rounded-2xl p-10 shadow-sm relative flex flex-col justify-between transition-all hover:shadow-md'>
                        
                        <div>
                            <div className='w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner'>
                                {product.icon}
                            </div>
                            
                            <h2 className='text-2xl font-bold mb-3 tracking-tight text-slate-800'>{product.name}</h2>
                            <p className='text-gray-500 text-sm leading-relaxed mb-8'>
                                {product.description}
                            </p>

                            <div className='mb-8'>
                                <span className='text-4xl font-extrabold text-slate-900'>
                                    ${product.price}</span>
                                <span className='text-gray-400 text-sm lowercase'>
                                     /{product.period}</span>
                            </div>

                            
                        </div>

                        <button className='w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 border-none rounded-xl text-white py-4 font-bold shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]'>
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;