import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./SidebarItem.scss";
import { toggleMenu } from "../../features/toggleSlice";

function SidebarItem({ id, icon, title, products, isSidebarNav }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname === "/products") {
      location.state[0].categoryId === id.toString()
        ? setIsActive(true)
        : setIsActive(false);
    }
  }, [location.state, location.pathname, id]);

  const handleSelectCat = (id) => {
    const prods = products.filter(
      (product) => parseInt(product.categoryId) === id
    );
    history.push({
      pathname: "/products",
      state: prods,
    });
    isSidebarNav && dispatch(toggleMenu());
  };

  return (
    <li
      className={isActive ? "sidebarItem sidebarItem__active" : "sidebarItem"}
      onClick={() => handleSelectCat(id)}
    >
      <span>{icon && icon}</span>
      <span>
        {icon && <span>&nbsp;&nbsp;</span>} {title}
      </span>
    </li>
  );
}

export default SidebarItem;
