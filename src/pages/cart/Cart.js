import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";

import { OrderSummary, ProductCart, Sidebar } from "../../components";
import { selectCart } from "../../features/cartSlice";
import { selectUser } from "../../features/userSlice";

function Cart() {
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <Sidebar isRow />

      {!user || cart.length < 1 ? (
        <div className="cart__noUser">
          <img
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt=""
          />
          <div className="cart__empty">
            <h3>Your OnlineDeal Cart is empty.</h3>
            <p>Shop today's deal</p>
          </div>
        </div>
      ) : (
        <div className="cart__container">
          <div className="cart__productCart">
            {cart.map((item) => (
              <ProductCart
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                alt={item.alt}
              />
            ))}
          </div>
          <div className="cart__orderSummary">
            <OrderSummary />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
