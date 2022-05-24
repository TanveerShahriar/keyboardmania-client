import React from 'react';

const Product = ({ product }) => {
    const { _id, image, name, description, min, quantity, price } = product;
    return (
        <div className="card shadow-xl">
            <figure><img className='h-60' src={image} alt="Shoes" /></figure>
            <div className="card-body bg-primary text-left text-white">
                <h2 className="card-title text-secondary text-4xl">{name}</h2>
                <p className='text-xl my-2'>{description}</p>
                <div className='text-lg'>
                    <p>Minimum Order Quantity : {min}</p>
                    <p>Available Quantity : {quantity}</p>
                    <p>Price : ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-secondary font-bold text-xl">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;