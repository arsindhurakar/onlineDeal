import React from "react";
import { useDispatch } from "react-redux";
import "./ProductCart.scss";

import { removeProduct } from "../../features/cartSlice";

function ProductCart({ noRemove, id, image, title, price, alt }) {
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className="productCart">
      <div className="productCart__image">
        <img src={image} alt={alt} />
      </div>
      <div className="productCart__details">
        <div className="productCart__head">
          <h3>{title}</h3>
          <p>Brand: Not Available</p>
        </div>
        <p>$ {price}</p>
      </div>
      <div className="productCart__btnRemove">
        {!noRemove && (
          <span onClick={handleRemoveProduct}>
            <i className="fas fa-times"></i>
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductCart;
