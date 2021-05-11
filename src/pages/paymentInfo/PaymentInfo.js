import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./PaymentInfo.scss";

import { Logo, RadioInput, BankPayment, CardPayment } from "../../components";

function PaymentInfo() {
  const [paymentMethod, setPaymentMethod] = useState("bankAccount");
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  const history = useHistory();

  return (
    <div className="paymentInfo">
      <div className="paymentInfo__logo">
        <Logo disabled />
      </div>
      <div className="paymentInfo__wrapper">
        {errorMessage && (
          <p>
            <span className="paymentInfo__failed">{errorMessage}</span>
          </p>
        )}
        <div className="paymentInfo__container">
          <h2>Payment Information</h2>
          <div className="paymentInfo__method">
            <label>Payment Method</label>
            <RadioInput
              label="Bank Account"
              value="bankAccount"
              checked={paymentMethod}
              setter={setPaymentMethod}
            />
            <RadioInput
              label="Credit Card"
              value="creditCard"
              checked={paymentMethod}
              setter={setPaymentMethod}
            />
          </div>

          {paymentMethod === "bankAccount" ? (
            <BankPayment
              orderTotal={location.state.orderTotal}
              setErrorMessage={setErrorMessage}
            />
          ) : (
            <CardPayment
              orderTotal={location.state.orderTotal}
              setErrorMessage={setErrorMessage}
            />
          )}
        </div>
        <p
          className="paymentInfo__goBack"
          onClick={() => history.replace("/cart")}
        >
          <i className="fas fa-chevron-left"></i>
          <span>Back to Cart</span>
        </p>
      </div>
    </div>
  );
}

export default PaymentInfo;
