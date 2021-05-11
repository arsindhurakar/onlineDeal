import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { Footer, Header, SidebarNav } from "../components";
import {
  Home,
  Cart,
  NotFound,
  ProductView,
  Signin,
  Registration,
  Checkout,
  PaymentInfo,
  Orders,
  Products,
} from "../pages";
import { selectToggle } from "../features/toggleSlice";

const stripePromise = loadStripe(
  "pk_test_51Il9QjKLIjGofiNX3DD1pIitE1HS1FyRcNisUJm3vytCnm3ERZc5GX2Kph3qHMSuYdVCvnwjNxEWDT01m4HaG6fY00yflBsPGD"
);

function Router() {
  const isToggle = useSelector(selectToggle);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <Header />
          <SidebarNav isToggle={isToggle} />
          <Cart />
          <Footer />
        </Route>
        <Route path="/product">
          <Header />
          <SidebarNav isToggle={isToggle} />
          <ProductView />
          <Footer />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/payment">
          <Elements stripe={stripePromise}>
            <PaymentInfo />
          </Elements>
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/orders">
          <Header />
          <SidebarNav isToggle={isToggle} />
          <Orders />
          <Footer />
        </Route>
        <Route path="/products">
          <Header />
          <SidebarNav isToggle={isToggle} />
          <Products />
          <Footer />
        </Route>
        <Route exact path="/">
          <Header />
          <SidebarNav isToggle={isToggle} />
          <Home />
          <Footer />
        </Route>
        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
