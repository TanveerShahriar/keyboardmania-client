import React from 'react';

const Review = ({ review }) => {
    const { picture, name, description } = review;
    return (
        <div className="card shadow-xl bg-primary">
            <div className='flex mt-4'>
                <figure><img className='w-16 h-16 rounded-full mx-8' src={picture} alt="Shoes" /></figure>
                <h2 className="card-title text-secondary text-4xl">{name}</h2>
            </div>
            <div className="card-body text-left text-white">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;