import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { name, description, rating } = review;
    const ratings = Array.from(Array(parseInt(rating)).keys());
    const nonRatings = Array.from(Array(5-parseInt(rating)).keys());
    return (
        <div className="card shadow-xl bg-primary">
            <h2 className="card-title text-secondary text-4xl ml-7 mt-4">{name}</h2>
            <div className="card-body text-left text-white">
                <p>{description}</p>
            </div>
            <div className='text-left ml-7 flex flex-row mb-4'>
                {
                    ratings.map((rate,index) => <p key={index}><FontAwesomeIcon className='text-3xl text-secondary' icon={faStar}/></p>)
                }
                {
                    nonRatings.map((rate,index) => <p key={index}><FontAwesomeIcon className='text-3xl' icon={faStar}/></p>)
                }
            </div>
        </div>
    );
};

export default Review;