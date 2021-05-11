import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./HeaderNav.scss";

import { selectUser, userSignout } from "../../features/userSlice";
import { emptyCart } from "../../features/cartSlice";
import { toggleMenu } from "../../features/toggleSlice";

function HeaderNav({ sidebarNav }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleSidebarNavReturns = () => {
    if (sidebarNav) {
      history.push("/orders");
      dispatch(toggleMenu());
    }
    history.push("/orders");
  };

  const handleSignout = () => {
    if (!user) {
      history.push("/signin");
    } else {
      history.push("/signin");
      dispatch(userSignout());
      dispatch(emptyCart());
    }
  };

  return (
    <div className="headerNav">
      <div
        className={!sidebarNav ? "headerNav__nav" : "headerNav__sidebarNav"}
        onClick={handleSignout}
      >
        <p>
          Hello{" "}
          {!user
            ? "Guest"
            : user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </p>
        {!user ? <p>Sign In</p> : <p>Sign Out</p>}
      </div>
      <div
        className={!sidebarNav ? "headerNav__nav" : "headerNav__sidebarNav"}
        onClick={handleSidebarNavReturns}
      >
        <p>Returns</p>
        <p>& Orders</p>
      </div>
    </div>
  );
}

export default HeaderNav;
