import React from 'react';

const Banner = () => {
    return (
        <div className="hero container mx-auto py-12">
            <div className="w-full hero-content flex-col lg:flex-row-reverse p-0">
                <div className='w-full lg:w-1/2'>
                    <img src="https://raw.githubusercontent.com/TanveerShahriar/images/main/a12images/banner.jpg" className="rounded-lg shadow-2xl w-full" alt='banner' />
                </div>
                <div className='lg:w-1/2 text-left'>
                    <h1 className="text-5xl font-bold">Get All Your Stuffs</h1>
                    <h1 className="text-4xl font-bold">In One Place</h1>
                    <p className="text-xl py-6">We manufacture each and every part and tool of a keyboard. Grab what you need at a reasonable price.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;