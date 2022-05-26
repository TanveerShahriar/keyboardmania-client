import React from 'react';

const Deliver = () => {
    return (
        <div className="hero container mx-auto py-12">
            <div className="w-full hero-content flex-col-reverse lg:flex-row-reverse p-0">
                <div className='lg:w-1/2 text-left'>
                    <h1 className="text-5xl font-bold">Our Own</h1>
                    <h1 className="text-secondary text-4xl font-bold">Delivery Service</h1>
                    <p className="text-xl py-6">Buy what you want and get them at door easily by our delivery service.</p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img src="https://raw.githubusercontent.com/TanveerShahriar/images/main/a11images/truck.gif" className="rounded-lg shadow-2xl w-full" alt='truck' />
                </div>
            </div>
        </div>
    );
};

export default Deliver;