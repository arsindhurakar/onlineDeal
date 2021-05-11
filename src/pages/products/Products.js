import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Products.scss";

import { Article, Sidebar } from "../../components";

function Products() {
  const location = useLocation();

  const products = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

  return (
    <div className="products">
      <Sidebar isRow />

      <div className="products__container">
        {products.map((product) => (
          <div className="products__article" key={product.id}>
            <Article
              image={product.image}
              alt={product.alt}
              price={product.price}
              title={product.title}
              about={product.about}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
