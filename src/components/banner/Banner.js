import React from "react";
import Slider from "react-slick";

import "./Banner.scss";

import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <img src={Banner1} alt="" />
        <img src={Banner2} alt="" />
        <img src={Banner3} alt="" />
      </Slider>
    </div>
  );
}

export default Banner;
