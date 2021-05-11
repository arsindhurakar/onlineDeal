import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Header.scss";

import { Logo } from "../logo";
import { selectCart } from "../../features/cartSlice";
import { toggleMenu } from "../../features/toggleSlice";
import { HeaderNav } from "../headerNav";
import { SearchBar } from "../searchBar";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);

  return (
    <div className="header">
      <div className="header__containerHidden">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__cart" onClick={() => history.push("/cart")}>
          <span>
            <i className="fas fa-shopping-basket fa-3x"></i>{" "}
            <p>{cart.length}</p>
          </span>
        </div>
      </div>

      <div className="header__container">
        <div
          className="header__burgerMenu"
          onClick={() => dispatch(toggleMenu())}
        >
          <i className="fas fa-bars fa-3x"></i>
        </div>

        <div className="header__logo">
          <Logo />
        </div>

        <div className="header__search">
          <SearchBar />
        </div>

        <div className="header__nav">
          <HeaderNav />
        </div>

        <div className="header__cart" onClick={() => history.push("/cart")}>
          <span>
            <i className="fas fa-shopping-basket fa-3x"></i>{" "}
            <p>{cart.length}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
