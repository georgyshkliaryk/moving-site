import React from "react";
import Header from "../../components/Layout/Header/Header";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import HomeImage from "../../components/HomeImage/HomeImage";
import Welcome from "../../components/Welcome/Welcome";
import Offers from "../../components/Offers/Offers";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeImage />
      <Welcome />
      <Offers />
    </div>
  );
};

export default HomePage;
