import React from 'react';

const NotFound = () => {
    return (
        <div className='container mx-auto m-12'>
            <div className='lg:w-1/2 mx-auto'>
                <img className='w-full' src="https://raw.githubusercontent.com/TanveerShahriar/images/main/a12images/page404.png" alt="Page Not Found" />
            </div>
            <h1 className='text-4xl'>The page you are looking does not exist. Please check your URL.</h1>
        </div>
    );
};

export default NotFound;