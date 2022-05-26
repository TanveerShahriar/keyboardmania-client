import React from 'react';

const Words = () => {
    return (
        <div className="hero container mx-auto py-12">
            <div className="w-full hero-content flex-col lg:flex-row-reverse p-0">
                <div className='w-full h-1/2 lg:w-1/2'>
                    <img src="https://raw.githubusercontent.com/TanveerShahriar/images/main/image-4.jpg" className="rounded-lg shadow-2xl w-full h-96" alt='banner' />
                </div>
                <div className='lg:w-1/2 text-left'>
                    <h1 className="text-5xl font-bold">Words of Sarah</h1>
                    <h1 className="text-secondary text-xl font-bold">CEO, KeyBoardMania</h1>
                    <p className="text-xl py-6">We manufacture each and every part and tool of a keyboard with best quality ingredients. We work for our clients satisfaction. </p>
                </div>
            </div>
        </div>
    );
};

export default Words;