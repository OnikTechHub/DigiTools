import { use } from 'react';
import ProductListCard from './ProductListCard';

const ProductList = ({ productListPromise, carts, setCarts }) => {
    const productlist = use(productListPromise);
    console.log(productlist)



    return (
        <div className='bg-gray-50 py-20 px-6 md:px-12'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
                {productlist.map((product) => (
                    <ProductListCard key={product.id} product={product} carts={carts} setCarts={setCarts}></ProductListCard>
                ))}
            </div>
        </div>
    );
};

export default ProductList;