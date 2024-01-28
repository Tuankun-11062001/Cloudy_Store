"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const NavCategory = () => {
  // =================================================================
  //  call category
  // =================================================================
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      const categories = await axios.get("http://localhost:3001/category");
      setCategories(categories.data.data);
    })();
  }, []);
  // =================================================================
  //  listen change category
  // =================================================================
  const onChangeCategory = (e) => {
    // removeAllActive
    const spans = document.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.remove("active");
    }
    console.log("click");
    // add active
    e.target.classList.add("active");
  };

  return (
    <div className="nav_category">
      <span className="active" onClick={onChangeCategory}>
        All
      </span>
      {categories?.map((category) => (
        <span key={category._id} onClick={onChangeCategory}>
          {category.title}
        </span>
      ))}
    </div>
  );
};

export default NavCategory;
