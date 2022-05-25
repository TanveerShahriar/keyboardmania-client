import React from 'react';

const Q6 = () => {
    return (
        <div className='bg-primary rounded-lg my-4'>
            <h3 className='text-xl text-yellow-100 font-bold py-4'>What is a unit test? Why should write unit tests?</h3>
            <div className='text-lg px-10'>
                <p className='text-left text-white px-4 pb-4'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. This testing methodology is done during the development process by the software developers and sometimes QA staff. The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                <p className='text-left text-white px-4 pb-4'>Unit test is necessary because by doing this we can ensure if our code is working properly or not. We can fix bug if we get any.</p>
            </div>
        </div>
    );
};

export default Q6;