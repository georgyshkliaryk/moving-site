import React from "react";
import Header from "../../components/Layout/Header/Header";
import HomeImage from "../../components/HomeImage/HomeImage";
import Welcome from "../../components/Welcome/Welcome";
import Offers from "../../components/Offers/Offers";
import Rates from "../../components/Rates/Rates";
import Quote from "../../components/Quote/Quote";
import Footer from "../../components/Layout/Footer/Footer";
import WhyUs from "../../components/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeImage />
      <Welcome />
      <Offers />
      <Rates />
      <WhyUs />
      <Quote />
      <Footer />
      
    </div>
  );
};

export default HomePage;
