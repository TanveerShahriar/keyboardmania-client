import React from 'react';

const Q1 = () => {
    return (
        <div className='bg-primary rounded-lg my-4'>
            <h3 className='text-xl text-yellow-100 font-bold py-4'>How will you improve the performance of a React Application?</h3>
            <div className='text-white text-left px-10'>
                <p className='text-lg'>Different ways os improving performance of React Application is stated below -</p>
                <ul className='list-disc px-8 pb-4'>
                    <li>Keeping component state local where necessary.</li>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Code-splitting in React using dynamic import().</li>
                    <li>Components receive only necessary props.</li>
                    <li>Using Immutable Data Structures.</li>
                    <li>Dependency optimization.</li>
                    <li>Avoid using Index as Key for map.</li>
                </ul>
            </div>
        </div>
    );
};

export default Q1;