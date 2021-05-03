import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import Movers from '../../components/Movers/Movers';
import PricesImage from '../../components/PricesImage/PricesImage';
import PricesTable from '../../components/PricesTable/PricesTable';
import WhyUs from '../../components/WhyUs/WhyUs';

const PricesPage = () => {
    return (
        <div>
           <Header />
           <PricesImage />
           <Movers />
           <PricesTable />
           <WhyUs />
           <Footer />
        </div>
    );
};

export default PricesPage;