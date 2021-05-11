import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import "./OrderSummary.scss";

import { Button } from "../button";
import { selectCart } from "../../features/cartSlice";

function OrderSummary() {
  const history = useHistory();

  const cart = useSelector(selectCart);

  const getCartTotal = (cart) => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const thousandsSseparator = (num) => {
    var numParts = num.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
  };

  const itemsTotal = thousandsSseparator(getCartTotal(cart).toFixed(2));
  const deliveryCharge = 0.8;
  const orderTotal = thousandsSseparator(
    (parseFloat(itemsTotal.replace(/,/, "")) + deliveryCharge).toFixed(2)
  );

  return (
    <div className="orderSummary">
      <h3>Order Summary</h3>
      <ul className="orderSummary__cost">
        <li>
          <p>Items ({cart.length}):</p>
          <p>$ {itemsTotal}</p>
        </li>
        <li>
          <p>Delivery Charge:</p>
          <p>$ {deliveryCharge}</p>
        </li>
        <li style={{ fontSize: "12px" }}>
          (Charges may vary depending on location)
        </li>
      </ul>
      <ul className="orderSummary__total">
        <li>
          <p>Order Total:</p>
          <p>$ {orderTotal}</p>
        </li>
      </ul>
      <Button
        onClick={() =>
          history.push({
            pathname: "/payment",
            state: { orderTotal },
          })
        }
      >
        Proceed
      </Button>
    </div>
  );
}

export default OrderSummary;
