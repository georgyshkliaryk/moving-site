import React from 'react';

import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import NotFound from '../../components/NotFound/NotFound';

const NotFoundPage = () => {
    return (
        <div>
            <Header />
            <NotFound />
            <Footer />
        </div>
    );
};

export default NotFoundPage;