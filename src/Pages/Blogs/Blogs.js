import React from 'react';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';

const Blogs = () => {
    return (
        <div className='container mx-auto py-12'>
            <h1 className='text-5xl font-bold text-secondary pb-6'>Blogs</h1>
            <Q1></Q1>
            <Q2></Q2>
            <Q3></Q3>
            <Q4></Q4>
            <Q5></Q5>
            <Q6></Q6>
        </div>
    );
};

export default Blogs;