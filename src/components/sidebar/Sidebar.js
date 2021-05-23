import React, { useState, useEffect } from "react";
import "./Sidebar.scss";

import { SidebarItem } from "..";
import { apiData } from "../../services";
import { categories } from "../../utils/categories";

function Sidebar({ isRow }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiData().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className={!isRow ? "sidebar" : "sidebar sidebar--isRow"}>
      <ul>
        {categories.map((category) => (
          <SidebarItem
            key={category.id}
            id={category.id}
            icon={category.icon}
            title={category.title}
            products={products}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
