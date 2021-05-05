import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import About from '../../components/About/About';
import WhyUs from '../../components/WhyUs/WhyUs';
import Quote from '../../components/Quote/Quote';

import Carousel from "../../components/Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutPage = () => {
    return (
        <div>
           <Header />
           <About />
           <WhyUs />
           <Carousel />
           <Quote />
           <Footer />
        </div>
    );
};

export default AboutPage;