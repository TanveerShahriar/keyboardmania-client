import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading } = useQuery('products', () =>
        fetch(`${process.env.REACT_APP_SERVER_LINK}/products`)
            .then(res => res.json()))

    if (isLoading) {
        return <span>loading...</span>
    }

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-secondary text-6xl font-bold my-8'>Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;