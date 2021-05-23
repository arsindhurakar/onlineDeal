import React, { useState, useEffect } from "react";
import "./Home.scss";

import { apiData } from "../../services";
import { Banner, Row, Sidebar } from "../../components";

function Home() {
  const [flowers, setFlowers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    apiData().then((res) => {
      setProducts(res.data.products);
      setFlowers(res.data.flowers);
    });
  }, []);

  const newArrivals = products.filter((product) => product.forId === "0");
  const productsMen = products.filter((product) => product.forId === "1");
  const productsWomen = products.filter((product) => product.forId === "2");

  return (
    <div className="home">
      <div className="home__topContainer">
        <div className="home__sidebar">
          <Sidebar />
        </div>
        <div className="home__banner">
          <Banner />
        </div>
      </div>
      <div className="home__rows">
        <Row title="New Arrivals" product={newArrivals} slides="4" />
        <Row title="Womens" product={productsWomen} slides="5" />
        <Row title="Mens" product={productsMen} slides="5" />
        <Row title="Flowers" product={flowers} slides="5" />
      </div>
    </div>
  );
}

export default Home;
