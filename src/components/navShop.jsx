import React from "react";

const NavShop = () => {
  const onChangeCategory = (e) => {
    // removeAllActive
    const lis = document.querySelectorAll("li");
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
    }
    console.log("click");
    // add active
    e.target.classList.add("active");
  };
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
            <li onClick={onChangeCategory}>T-Shirt</li>
            <li onClick={onChangeCategory}>Cups</li>
          </ul>
        </div>
        <div className="partner">
          <h3>Partner</h3>
          <select>
            <option>All</option>
            <option>Printub (VN)</option>
            <option>Printify (US)</option>
          </select>
        </div>
        <div className="filter">
          <h3>Prices</h3>
          <select>
            <option>All</option>
            <option>High - Low</option>
            <option>Low - High</option>
          </select>
        </div>
        <div className="season">
          <h3>Season</h3>
          <select>
            <option>All</option>
            <option>Spring</option>
            <option>Summer</option>
            <option>Fall</option>
            <option>Winter</option>
          </select>
        </div>
        <div className="colors">
          <h3>Colors</h3>
          <select>
            <option>All</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default NavShop;
