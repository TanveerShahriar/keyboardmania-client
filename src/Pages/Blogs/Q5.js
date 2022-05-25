import React from 'react';

const Q5 = () => {
    return (
        <div className='bg-primary rounded-lg my-4 px-10'>
            <h3 className='text-xl text-yellow-100 font-bold py-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
            <div className='text-lg'>
                <p className='text-left text-white px-4 pb-4'>To do that we have to use filter and check if the product name equal to the searching name. The code is given below</p>
                <p className='text-left text-base text-white px-4 pb-4'>const search_products = products.filter(product =&gt; product.name === search_name);</p>
            </div>
        </div>
    );
};

export default Q5;