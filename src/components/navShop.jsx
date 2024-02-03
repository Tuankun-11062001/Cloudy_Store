// "use client";
import { getCategoriesAsync } from "@/redux/slices/categorySlice";
import { getPartnerAsync } from "@/redux/slices/partnerSlice";
import { setFilterKey } from "@/redux/slices/productSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const NavShop = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.category);
  const { partners, loading: loadingPartner } = useSelector(
    (state) => state.partner
  );

  useEffect(() => {
    if (categories.length < 1) {
      dispatch(getCategoriesAsync());
    }
    if (partners.length < 1) {
      dispatch(getPartnerAsync());
    }
  }, []);

  const onChangeCategory = (e) => {
    // removeAllActive
    const lis = document.querySelectorAll("li");
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
    }
    // add active
    e.target.classList.add("active");

    dispatch(setFilterKey(e.target.textContent));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   changeDataFilter((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  return (
    <>
      <div className="nav_shop_overlay"></div>
      <div className="nav_shop">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li className="active" onClick={onChangeCategory}>
              All
            </li>
            {loading ? (
              <p>loading...</p>
            ) : (
              categories.map((category) => (
                <li key={category._id} onClick={onChangeCategory}>
                  {category.title}
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="partner">
          <h3>Partner</h3>
          {/* <select
            onChange={handleChange}
            name="partner"
            value={dataFilter.partner}
          >
            <option>All</option>
            <option>Printub</option>
            <option>Printify</option>
            <option>Redbubble</option>
          </select> */}
          <ul>
            {loadingPartner ? (
              <p>loading...</p>
            ) : (
              partners.map((partner) => (
                <li key={partner._id} onClick={onChangeCategory}>
                  {partner.title}
                </li>
              ))
            )}
            {/* <li onClick={onChangeCategory}>Printify</li>
            <li onClick={onChangeCategory}>Redbubble</li> */}
          </ul>
        </div>
        <div className="filter">
          <h3>Prices</h3>
          {/* <select onChange={handleChange} name="price" value={dataFilter.price}>
            <option>All</option>
            <option>High - Low</option>
            <option>Low - High</option>
          </select> */}
          <ul>
            <li onClick={onChangeCategory}>High - Low</li>
            <li onClick={onChangeCategory}>Low - High</li>
          </ul>
        </div>
        <div className="season">
          <h3>Season</h3>
          {/* <select
            onChange={handleChange}
            name="season"
            value={dataFilter.season}
          >
            <option>All</option>
            <option>Spring</option>
            <option>Summer</option>
            <option>Fall</option>
            <option>Winter</option>
          </select> */}

          <ul>
            <li onClick={onChangeCategory}>Spring</li>
            <li onClick={onChangeCategory}>Summer</li>
          </ul>
        </div>
        <div className="colors">
          <h3>Colors</h3>
          {/* <select onChange={handleChange} name="color" value={dataFilter.color}>
            <option>All</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
          </select> */}
          <ul>
            <li onClick={onChangeCategory}>Red</li>
            <li onClick={onChangeCategory}>Green</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavShop;
