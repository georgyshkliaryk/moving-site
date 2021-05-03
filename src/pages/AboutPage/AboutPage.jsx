import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import About from '../../components/About/About';
import WhyUs from '../../components/WhyUs/WhyUs';

const AboutPage = () => {
    return (
        <div>
           <Header />
           <About />
           <WhyUs />
           <Footer />
        </div>
    );
};

export default AboutPage;