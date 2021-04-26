import React from "react";
import "./HomeImage.scss";
import { Parallax } from "react-parallax";

import logo from "../../assets/images/home-image-blur.jpg";

const HomeImage = () => {
  return (
    <div className="image__container">
      <Parallax blur={0} bgImage={logo} bgImageAlt="the cat" strength={200}>
        <div className="test"></div>
        <div className="image__title">
          Your First Choice for the Best Boston Moving Company!
          <div className="image__description">Clear pricing. Affordable rates.</div>
          
        </div>
        <div className="image__buttons">
            <a href="" className="image__button">More about us &nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
            <a href="" className="image__button">What we offer &nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
            <a href="" className="image__button">Pricing &nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
          </div>
      </Parallax>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, est
      vitae alias non culpa officiis ea assumenda impedit fugiat tenetur
      consequatur velit, nisi similique provident accusantium officia aperiam
      commodi? Repellat. Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Adipisci, est vitae alias non culpa officiis ea assumenda impedit
      fugiat tenetur consequatur velit, nisi similique provident accusantium
      officia aperiam commodi? Repellat. Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Adipisci, est vitae alias non culpa officiis ea
      assumenda impedit fugiat tenetur consequatur velit, nisi similique
      provident accusantium officia aperiam commodi? Repellat. Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. Adipisci, est vitae alias non
      culpa officiis ea assumenda impedit fugiat tenetur consequatur velit, nisi
      similique provident accusantium officia aperiam commodi? Repellat. Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, est vitae
      alias non culpa officiis ea assumenda impedit fugiat tenetur consequatur
      velit, nisi similique provident accusantium officia aperiam commodi?
      Repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Adipisci, est vitae alias non culpa officiis ea assumenda impedit fugiat
      tenetur consequatur velit, nisi similique provident accusantium officia
      aperiam commodi? Repellat. Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Adipisci, est vitae alias non culpa officiis ea
      assumenda impedit fugiat tenetur consequatur velit, nisi similique
      provident accusantium officia aperiam commodi? Repellat. Lorem ipsum,
      dolor sit amet consectetur adipisicing elit. Adipisci, est vitae alias non
      culpa officiis ea assumenda impedit fugiat tenetur consequatur velit, nisi
      similique provident accusantium officia aperiam commodi? Repellat. Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, est vitae
      alias non culpa officiis ea assumenda impedit fugiat tenetur consequatur
      velit, nisi similique provident accusantium officia aperiam commodi?
      Repellat.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum hic iure,
      similique quae, odit ut nam veniam blanditiis minus optio dignissimos
      dicta consequuntur? Nesciunt impedit molestias veniam aspernatur ut
      veritatis.
    </div>
  );
};

export default HomeImage;
