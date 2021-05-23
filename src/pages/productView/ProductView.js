import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ProductView.scss";

import {
  ProductDescription,
  ProductDetail,
  ProductReviews,
  Sidebar,
} from "../../components";

function ProductView() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productView">
      <Sidebar isRow />
      <div className="productView__container">
        <div className="productView__productDetail">
          <ProductDetail details={location.state} />
        </div>
        <div className="productView__productDescription">
          <ProductDescription />
        </div>
        <div className="productView__productReviews">
          <ProductReviews />
        </div>
      </div>
    </div>
  );
}

export default ProductView;
