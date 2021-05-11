import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Orders.scss";

import { selectUser } from "../../features/userSlice";
import { db } from "../../utils/firebase";
import { Order } from "../../components";
import uuid from "react-uuid";

function Orders() {
  const [orders, setOrders] = useState();

  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else setOrders([]);
  }, [user]);

  return (
    <div className="orders">
      {user
        ? orders?.map((order) => {
            return <Order key={uuid()} order={order} />;
          })
        : history.push("/signin")}
    </div>
  );
}

export default Orders;
