import React from 'react';
import './HomePage.scss'
import Header from '../../components/Layout/Header/Header';
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import HomeImage from '../../components/HomeImage/HomeImage';

const HomePage = () => {
    return (
        <div>
            <Header />
            <ContactHeader />
            <HomeImage />
        </div>
    );
};

export default HomePage;