import React from "react";
import Slider from "react-slick";

import "./Row.scss";

import { Article } from "../article";

function Row({ title, product, slides }) {
  const stylesArrow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    opacity: "0.9",
    height: "50px",
    width: "50px",
    zIndex: "99",
    borderRadius: "50px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px 2px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          ...stylesArrow,
          right: "0",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          ...stylesArrow,
          left: "0",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: parseInt(slides),
    slidesToScroll: 1,
    // centerPadding: 1,
    centerMode: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      // {
      //   breakpoint: 650,
      //   settings: "unslick",
      // },
    ],
  };

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__container">
        <Slider {...settings}>
          {product.map((data) => (
            <div className="row__article" key={data.id}>
              <Article
                image={data.image}
                title={data.title}
                alt={data.title}
                price={data.price}
                about={data.about}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Row;
