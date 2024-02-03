"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterKey } from "@/redux/slices/productSlice";
import { getCategoriesAsync } from "@/redux/slices/categorySlice";

const NavCategory = () => {
  const dispatch = useDispatch();
  // =================================================================
  //  call category
  // =================================================================
  const { categories, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoriesAsync());
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
    dispatch(setFilterKey(e.target.textContent));
  };

  return (
    <div className="nav_category">
      <span className="active" onClick={onChangeCategory}>
        All
      </span>

      {loading ? (
        <p>loading...</p>
      ) : (
        categories?.map((category) => (
          <span key={category._id} onClick={onChangeCategory}>
            {category.title}
          </span>
        ))
      )}
    </div>
  );
};

export default NavCategory;
