import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductDetail.scss";

import { Button } from "..";
import { addProduct } from "../../features/cartSlice";
import { selectUser } from "../../features/userSlice";

function ProductDetail({ details }) {
  const { image, title, price, alt, about } = details;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const oldPrice = 1.5 * price;

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: uuid(),
        image,
        title,
        price,
        alt,
      })
    );
    toast("Added successfully");
  };

  return (
    <div className="productDetail">
      <div className="productDetail__topContainer">
        <div className="productDetail__image">
          <img src={image} alt={alt} />
        </div>
        <div className="productDetail__description">
          <div className="productDetail__head">
            <h1>{title}</h1>
            <p>Brand: Not Available</p>
          </div>
          <p>In Stock</p>
          <div className="productDetail__prices">
            <h3>$ {price}</h3>
            <p>$ {oldPrice.toFixed(2)}</p>
          </div>
          {user && (
            <div className="productDetail__buttons">
              {/* <div className="productDetail__buttonBuy">
                <Button>Buy Now</Button>
              </div> */}
              <div className="productDetail__buttonAdd">
                <Button onClick={handleAddProduct} secondary>
                  Add to Cart
                </Button>
                <ToastContainer
                  className="productDetail__toast"
                  autoClose={2000}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="productDetail__bottomContainer">
        <h3>About Product</h3>
        <ul>
          {about.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;
