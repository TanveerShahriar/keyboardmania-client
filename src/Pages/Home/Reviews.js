import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch(`${process.env.REACT_APP_SERVER_LINK}/reviews`)
            .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-secondary text-6xl font-bold my-8'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;