import React from "react";
import "./PaymentAmount.scss";

function PaymentAmount({ orderTotal }) {
  return (
    <div className="paymentAmount">
      <p>Payment Amount</p>
      <p>$ {orderTotal}</p>
    </div>
  );
}

export default PaymentAmount;
