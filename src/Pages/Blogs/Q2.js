import React from 'react';

const Q2 = () => {
    return (
        <div className='bg-primary rounded-lg my-4'>
            <h3 className='text-xl text-yellow-100 font-bold py-4'>What are the different ways to manage a state in a React application?</h3>
            <div className='text-white text-left px-10'>
                <p className='text-lg'>There are 4 kinds of React State to manage -</p>
                <ul className='list-disc px-8 pb-4'>
                    <li>Local State - Local state is data we manage in one or another component.</li>
                    <li>Global State - Global state is data we manage across multiple components.</li>
                    <li>Server state - Data that comes from an external server that must be integrated with our UI state.</li>
                    <li>URL state - Data that exists on our URLs, including the pathname and query parameters.</li>
                </ul>
            </div>
        </div>
    );
};

export default Q2;