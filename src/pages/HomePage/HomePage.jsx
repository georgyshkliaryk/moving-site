import React from "react";
import Header from "../../components/Layout/Header/Header";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import HomeImage from "../../components/HomeImage/HomeImage";
import Welcome from "../../components/Welcome/Welcome";

const HomePage = () => {
  return (
    <div>
      <Header />
      
      <HomeImage />
      <Welcome />
    </div>
  );
};

export default HomePage;
