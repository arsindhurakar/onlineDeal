import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./SuccessCheckout.scss";

import { Button, Logo } from "..";
import { selectUser } from "../../features/userSlice";

function SuccessCheckout() {
  const user = useSelector(selectUser);
  const history = useHistory();

  const text = `Hi ${user.name.toUpperCase()},

  Your order has been placed successfully.

  OnlineDeal should arrive to your delivery address within 3 business days. Please note that orders over $500 require signature on delivery. 
  
  Thanks for shopping on OnlineDeal! You didn't just get a great deal -- you also supported the growth of the OnlineDeal community, which is pretty cool (at least we think so). Have any questions or feedback? You can contact us anytime at support@onlinedeal.com or 9800000000.
  
  Team OnlineDeal

  `;

  return (
    <Modal className="successCheckout" isOpen={true} ariaHideApp={false}>
      {text.split("\n\n").map((paragraph, index) => (
        <p key={index}>
          {paragraph.split("\n").reduce((total, line) => [total, <br />, line])}
        </p>
      ))}
      <Logo disabled />
      <br />
      <Button onClick={() => history.replace("/orders")}>View Order</Button>
    </Modal>
  );
}

export default SuccessCheckout;
