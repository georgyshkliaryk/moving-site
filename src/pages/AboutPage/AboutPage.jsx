import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import About from '../../components/About/About';
import WhyUs from '../../components/WhyUs/WhyUs';
import Quote from '../../components/Quote/Quote';
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Yelp from '../../components/Yelp/Yelp';

const AboutPage = () => {
    return (
        <div>
           <Header />
           <About />
           <Yelp />
           <WhyUs />
           <CarouselComponent />
           <Quote />
           <Footer />
        </div>
    );
};

export default AboutPage;