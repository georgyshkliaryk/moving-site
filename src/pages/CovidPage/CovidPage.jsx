import React from 'react';
import Covid from '../../components/Covid/Covid';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';

const CovidPage = () => {
    return (
        <div>
            <Header />
            <Covid />
            <Footer />
        </div>
    );
};

export default CovidPage;