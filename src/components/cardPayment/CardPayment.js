import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CardPayment.scss";

import { Button, PaymentAmount } from "..";
import axiosInstance from "../../utils/axios";

function CardPayment({ orderTotal, setErrorMessage }) {
  const [clientSecret, setClientSecret] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    //generates a special stripe secret that allows us to charge the customer
    const getClientSecret = async () => {
      const response = await axiosInstance({
        method: "post",
        //stripe expects the total in currencies subunits
        url: `/payment/create?total=${orderTotal * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [orderTotal]);

  console.log("the secret is ", clientSecret);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setErrorMessage("");
        setLoading(false);
        history.replace({
          pathname: "/checkout",
          state: paymentIntent,
        });
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setErrorMessage(e.error ? e.error.message : "");
  };

  return (
    <form onSubmit={handleSubmit} className="cardPayment">
      <CardElement
        onChange={handleChange}
        options={{
          style: {
            base: {
              fontSize: "12px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <PaymentAmount orderTotal={orderTotal} />
      <Button disabledDefault={disabled || loading}>Continue</Button>
    </form>
  );
}

export default CardPayment;
