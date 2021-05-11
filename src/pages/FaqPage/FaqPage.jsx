import React from 'react';
import FAQ from '../../components/FAQ/FAQ';
import FAQImage from '../../components/FAQImage/FAQImage';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import Quote from '../../components/Quote/Quote';
import Yelp from '../../components/Yelp/Yelp';

const FaqPage = () => {
    return (
        <div>
            <Header />
            <FAQImage />
            <FAQ />
            <Yelp />
            <Quote />
            <Footer />
        </div>
    );
};

export default FaqPage;