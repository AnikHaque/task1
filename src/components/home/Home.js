import React from 'react';
import Banner from '../banner/Banner';
import Navigation from '../navigation/Navigation';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;