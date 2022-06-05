import React from 'react';
import Banner from '../banner/Banner';
import Domain from '../domain/Domain';
import Navigation from '../navigation/Navigation';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Domain></Domain>
        </div>
    );
};

export default Home;