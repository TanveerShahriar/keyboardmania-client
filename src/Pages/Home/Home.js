import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Deliver from './Deliver';
import Products from './Products';
import Reviews from './Reviews';
import Words from './Words';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Products />
            <Reviews />
            <Deliver />
            <Words />
        </div>
    );
};

export default Home;