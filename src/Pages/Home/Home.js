import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Products />
        </div>
    );
};

export default Home;