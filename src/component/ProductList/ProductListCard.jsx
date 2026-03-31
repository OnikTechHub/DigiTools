import React, { useState } from 'react';

const ProductListCard = ({ product, carts, setCarts }) => {
    const [isAddToCard, setIsAddToCard] = useState(false)
    const heandleAddToCard = () => {
        setIsAddToCard(true)
        setCarts([...carts, product])
    }
    return (
        <div className='bg-white border border-gray-100 rounded-2xl p-10 shadow-sm relative flex flex-col justify-between transition-all hover:shadow-md'>

            <div>
                <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${product.tagType === 'best-seller' ? 'bg-orange-100 text-orange-600' : product.tagType === 'popular' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                    {product.tag}
                </div>
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

            <ul className='space-y-4 mb-10'>
                {product.features.map((feature) => (
                    <li className='flex items-center text-[14px] text-slate-700 gap-3'>
                        <span className='text-[#4F39F6] font-bold'>
                            ✓</span> {feature}
                    </li>
                ))}
            </ul>

            <button onClick={heandleAddToCard} className='w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 border-none rounded-4xl text-white py-4 font-bold shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]'>
                {isAddToCard ? "Add To Card" : "Buy Now"}
            </button>
        </div>
    );
};

export default ProductListCard;