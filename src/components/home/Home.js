import React from 'react';
import Banner from '../banner/Banner';
import Choose from '../choose/Choose';
import Contact from '../contact/Contact';
import Domain from '../domain/Domain';
import Footer from '../footer/Footer';
import Happy from '../happy/Happy';
import Navigation from '../navigation/Navigation';
import Offer from '../offer/Offer';
import Pricing from '../pricing/Pricing';
import Review from '../review/Review';
import Search from '../search/Search';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Search></Search>
            <br></br>
            <br></br>
            <br></br>
            <Domain></Domain>
            <br></br>
            <br></br>
            <br></br>
            <Pricing></Pricing>
            <br></br>
            <br></br>
            <br></br>
            <Happy></Happy>
            <br></br>
            <br></br>
            <br></br>
            <Offer></Offer>
            <br></br>
            <br></br>
            <br></br>
            <Choose></Choose>
            <br></br>
            <br></br>
            <br></br>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;