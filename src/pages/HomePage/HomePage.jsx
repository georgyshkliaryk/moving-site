import React from "react";
import Header from "../../components/Layout/Header/Header";
import HomeImage from "../../components/HomeImage/HomeImage";
import Welcome from "../../components/Welcome/Welcome";
import Offers from "../../components/Offers/Offers";
import Rates from "../../components/Rates/Rates";
import Quote from "../../components/Quote/Quote";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeImage />
      <Welcome />
      <Offers />
      <Rates />
      <Quote />
    </div>
  );
};

export default HomePage;
