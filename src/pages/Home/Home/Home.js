import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Offer />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;