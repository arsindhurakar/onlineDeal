import React from "react";
import "./ProductDescription.scss";

function ProductDescription() {
  return (
    <div className="productDescription">
      <div className="productDescription__section">
        <p>Delivery Options</p>
        <ul>
          <li>
            <i className="far fa-clock"></i>&nbsp;&nbsp;&nbsp;
            <div className="productDescription__info">
              <p>Estimated Delivery Time</p>
              <p>2 days</p>
            </div>
          </li>
          <li>
            <i className="fas fa-truck"></i>&nbsp;&nbsp;&nbsp;
            <div className="productDescription__info">
              <p>OnlineDeal Normal Delivery</p>
              <p>2-3 working days delivery</p>
            </div>
          </li>
          <li>
            <i className="fas fa-credit-card"></i>&nbsp;&nbsp;&nbsp;
            <div className="productDescription__info">
              <p>Cash on Delivery Available</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="productDescription__section">
        <p>Returns & Warranty</p>
        <ul>
          <li>
            <i className="fas fa-undo-alt"></i>&nbsp;&nbsp;&nbsp;
            <div className="productDescription__info">
              <p>7 Days Return</p>
              <p>Change of mind is not applicable</p>
            </div>
          </li>
          <li>
            <i className="far fa-times-circle"></i>&nbsp;&nbsp;&nbsp;
            <div className="productDescription__info">
              <p>Warranty not Available</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDescription;
