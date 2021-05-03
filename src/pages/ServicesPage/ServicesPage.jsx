import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import MovingOptions from '../../components/MovingOptions/MovingOptions';
import Quote from '../../components/Quote/Quote';
import ServicesImage from '../../components/ServicesImage/ServicesImage';
import WhyUs from '../../components/WhyUs/WhyUs';

const ServicesPage = () => {
    return (
        <div>
            <Header />
            <ServicesImage />
            <MovingOptions />
            <WhyUs />
            <Quote />
            <Footer />
        </div>
    );
};

export default ServicesPage;