import React from 'react';

const Q4 = () => {
    return (
        <div className='bg-primary rounded-lg my-4'>
            <h3 className='text-xl text-yellow-100 font-bold py-4'>Why you do not set the state directly in React?</h3>
            <p className='text-left text-lg text-white px-10 pb-4'>We don't set the state directly because react uses virtual DOM and diff algorithm to make the React App most efficient. By these React updates and rerender the website so that website is faster. To help React to make the website we don't set the state directly.</p>
        </div>
    );
};

export default Q4;