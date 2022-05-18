import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;