import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Checkout.scss";

import { Input, Button, Logo } from "../../components";
import { db } from "../../utils/firebase";
import { selectUser } from "../../features/userSlice";
import { selectCart } from "../../features/cartSlice";
import { SuccessCheckout } from "../../components/";

function Checkout() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [streetAddressPrimary, setStreetAddressPrimary] = useState("");
  const [streetAddressSecondary, setStreetAddressSecondary] = useState("");
  const [townCity, setTownCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  const location = useLocation();

  const paymentIntent = location.state;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          fname,
          lname,
          streetAddressPrimary,
          streetAddressSecondary,
          townCity,
          state,
          zipCode,
          phone,
          email,
          notes,
        });
      setIsModalOpen(true);
    }, 2000);
  };

  return (
    <div className="checkout">
      <div className="checkout__logo">
        <Logo disabled />
      </div>
      <div className="checkout__wrapper">
        <div className="checkout__container">
          <h2>Checkout</h2>
          <form onSubmit={handleCheckout} className="checkout__form">
            <div className="checkout__name">
              <div className="checkout__inputField">
                <Input
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  label="First Name"
                  type="text"
                  autoFocus
                  required
                  secondary
                />
              </div>
              <div className="checkout__inputField">
                <Input
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  label="Last Name"
                  type="text"
                  required
                  secondary
                />
              </div>
            </div>

            <div className="checkout__inputField">
              <Input
                value={streetAddressPrimary}
                onChange={(e) => setStreetAddressPrimary(e.target.value)}
                label="Street Address"
                type="text"
                placeholder="Street Address or P.O Box"
                required
                secondary
              />
              <Input
                value={streetAddressSecondary}
                onChange={(e) => setStreetAddressSecondary(e.target.value)}
                type="text"
                placeholder="Apt, Suite, Unit, Building, Floor, etc"
                required
                secondary
              />
            </div>
            <div className="checkout__location">
              <div className="checkout__inputField">
                <Input
                  value={townCity}
                  onChange={(e) => setTownCity(e.target.value)}
                  label="Town / City"
                  type="text"
                  required
                  secondary
                />
              </div>
              <div className="checkout__inputField">
                <Input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  label="State"
                  type="text"
                  required
                  secondary
                />
              </div>
              <div className="checkout__inputField">
                <Input
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  label="Zip Code"
                  type="text"
                  required
                  secondary
                />
              </div>
            </div>

            <div className="checkout__contact">
              <div className="checkout__inputField">
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  label="Phone"
                  type="number"
                  required
                  secondary
                />
              </div>
              <div className="checkout__inputField">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  type="text"
                  required
                  secondary
                />
              </div>
            </div>
            <div className="checkout__inputField">
              <Input
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                label="Order Notes"
                type="text"
                placeholder="Notes for your order."
                secondary
                isMessage
              />
            </div>
            <Button disabled={isLoading}>Place Order</Button>
          </form>
        </div>
      </div>
      {isModalOpen && <SuccessCheckout />}
    </div>
  );
}

export default Checkout;
