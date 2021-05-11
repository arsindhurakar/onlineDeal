import React from "react";
import moment from "moment";
import "./Order.scss";

import { ProductCart } from "../../components";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order__head">
        <p>
          {moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <p>{order.id}</p>
      </div>
      {order.data.cart.map((item) => (
        <ProductCart
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          alt={item.alt}
          noRemove
        />
      ))}
    </div>
  );
}

export default Order;
