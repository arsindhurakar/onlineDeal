import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./BankPayment.scss";

import { Input, Button, PaymentAmount } from "../../components";

function BankPayment({ orderTotal, setErrorMessage }) {
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    setTimeout(() => {
      if (accountNumber !== confirmAccountNumber) {
        setErrorMessage("Account Numbers does not match.");
        setLoading(false);
        return;
      }
      history.replace("/checkout");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="bankPayment__form">
      <div className="bankPayment__inputField">
        <Input
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          label="Account Number"
          type="text"
          autoFocus
          required
        />
      </div>
      <div className="bankPayment__inputField">
        <Input
          value={confirmAccountNumber}
          onChange={(e) => setConfirmAccountNumber(e.target.value)}
          label="Confirm Account Number"
          type="text"
          required
        />
      </div>
      <div className="bankPayment__inputField">
        <Input
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          label="Account Name"
          type="text"
          required
        />
      </div>
      <div className="bankPayment__inputField">
        <Input
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          label="Mobile phone number to recieve a confirmation text"
          type="text"
          required
        />
      </div>
      <PaymentAmount orderTotal={orderTotal} />
      <Button disabled={loading}>Continue</Button>
    </form>
  );
}

export default BankPayment;
