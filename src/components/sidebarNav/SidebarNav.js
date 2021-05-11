import React, { useState, useEffect } from "react";
import "./SidebarNav.scss";

import { SidebarItem } from "../sidebarItem";
import { categories } from "../../utils/categories";
import { HeaderNav } from "../headerNav";
import { apiData } from "../../services";

function SidebarNav({ isToggle }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiData().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className={!isToggle ? "sidebarNav" : "sidebarNav sidebarNav--active"}>
      <HeaderNav sidebarNav />
      <ul>
        {categories.map((category) => (
          <SidebarItem
            key={category.id}
            id={category.id}
            icon={category.icon}
            title={category.title}
            products={products}
            isSidebarNav
          />
        ))}
      </ul>
    </div>
  );
}

export default SidebarNav;
