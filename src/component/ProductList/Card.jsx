import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ carts, setCarts }) => {

    const total = carts.reduce((sum, item) => sum + item.price, 0);

    // console.log(carts);

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successfull!")
    }

    const handleDelete = (item) => {
        // console.log(item)
        const filteredArray = carts.filter(c => c.id !== item.id)
        // console.log(filteredArray)
        setCarts(filteredArray)
        toast.success("Item Deleted!")
    }
    return (
        <div className='max-w-5xl mx-auto p-6 md:p-10'>

            <h2 className='text-4xl font-bold text-center text-slate-800 mb-8 px-2'>
                Your Cart
            </h2>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">

                {
                    carts.length === 0 ? <p className='text-center text-2xl font-bold p-5 text-gray-500'>Cart is empty</p> :
                        <>
                            <div className='space-y-4'>
                                {carts.map(item => (

                                    <div key={item.id} className='flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 p-4 md:p-6 rounded-2xl transition-colors border border-transparent hover:border-gray-100'>
                                        <div className='flex items-center gap-4 md:gap-6'>

                                            <div className='w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100'>
                                                {item.icon}
                                            </div>

                                            <div>
                                                <h3 className='text-lg font-bold text-slate-800'>{item.name}</h3>
                                                <p className='text-gray-500 text-sm font-medium'>
                                                    ${item.price} <span className='text-xs opacity-70 lowercase'>/{item.period}</span>
                                                </p>
                                            </div>
                                        </div>

                                        <button onClick={() => handleDelete(item)} className='text-pink-500 hover:text-pink-600 font-semibold text-sm px-4 py-2 transition-opacity'>
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className='mt-10 pt-8 border-t border-gray-100'>
                                <div className='flex justify-between items-center mb-8 px-2'>
                                    <span className='text-gray-500 font-medium'>Total:</span>
                                    <span className='text-3xl font-black text-slate-900'>${total}</span>
                                </div>

                                <button onClick={handlePayment} className='w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all active:scale-[0.98]'>
                                    Proceed To Checkout
                                </button>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default Card;