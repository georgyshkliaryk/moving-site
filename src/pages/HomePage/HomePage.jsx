import React from "react";
import Header from "../../components/Layout/Header/Header";
import HomeImage from "../../components/HomeImage/HomeImage";
import Welcome from "../../components/Welcome/Welcome";
import Offers from "../../components/Offers/Offers";
import Rates from "../../components/Rates/Rates";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeImage />
      <Welcome />
      <Offers />
      <Rates />
    </div>
  );
};

export default HomePage;
