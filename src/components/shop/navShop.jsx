"use client";
import {
  handleFilter,
  handleGetCategories,
  handleGetPartner,
  handlerGetLatestProduct,
} from "@/api/products";
import React, { useEffect, useState } from "react";

const NavShop = ({ filterProducts, load, totalProduct }) => {
  const [categories, setCategories] = useState([]);
  const [partners, setPartners] = useState([]);
  const [filter, setFilter] = useState({
    category: "",
    partner: "",
    season: "",
  });

  const dataSeason = ["spring", "winter", "autumn", "summer"];

  // category
  useEffect(() => {
    (async () => {
      (async () => {
        try {
          const res = await handleGetCategories();
          if (res) {
            setCategories(res);
          }
        } catch (error) {
          console.log("err cant fetch");
        }
      })();
    })();
  }, []);

  // partner

  useEffect(() => {
    (async () => {
      try {
        const res = await handleGetPartner();
        if (res) {
          setPartners(res);
        }
      } catch (error) {
        console.log("err cant fetch");
      }
    })();
  }, []);

  // filter

  useEffect(() => {
    (async () => {
      if (
        filter.category === "" &&
        filter.partner === "" &&
        filter.season === ""
      ) {
        const res = await handleFilter();
        filterProducts(res);
      }
      if (filter.category && filter.partner) {
        const res = await handleFilter(
          `search?category=${filter.category}&partner=${filter.partner}`
        );
        filterProducts(res);
      }
      if (filter.category) {
        if (filter.partner) {
          const res = await handleFilter(
            `search?category=${filter.category}&partner=${filter.partner}`
          );
          filterProducts(res);
        } else {
          const res = await handleFilter(`search?category=${filter.category}`);
          filterProducts(res);
        }
      }
      if (filter.partner) {
        if (filter.category) {
          const res = await handleFilter(
            `search?category=${filter.category}&partner=${filter.partner}`
          );
          filterProducts(res);
        } else {
          const res = await handleFilter(`search?partner=${filter.partner}`);
          filterProducts(res);
        }
      }

      if (filter.season) {
        if (filter.category) {
          const res = await handleFilter(
            `search?category=${filter.category}&season=${filter.season}`
          );
          filterProducts(res);
        } else if (filter.partner) {
          const res = await handleFilter(
            `search?partner=${filter.partner}&season=${filter.season}`
          );
          filterProducts(res);
        } else {
          const res = await handleFilter(`search?season=${filter.season}`);
          filterProducts(res);
        }
      }
    })();
  }, [filter]);

  const changeLayoutProduct = (evt, num) => {
    const listProduct = document.querySelector(".shop_list_product");
    const liParents = document.querySelectorAll(".laylout_list_product li");
    const liElement = evt.target;
    if (listProduct.classList.contains("layout_4")) {
      listProduct.classList.remove("layout_4");
    } else if (listProduct.classList.contains("layout_5")) {
      listProduct.classList.remove("layout_5");
    } else {
      listProduct.classList.remove("layout_6");
    }

    liParents.forEach((li) => li.classList.remove("active"));
    listProduct.classList.add(`layout_${num}`);
    liElement.classList.add("active");
  };

  // useEffect(() => {
  //   const filterBox = document.querySelector(".shop_filter");
  //   if (filterBox) {
  //     setTimeout(() => {
  //       filterBox.classList.add("active");
  //     }, 200);
  //   }

  // }, [showFilter]);

  const handleToggleFilter = () => {
    const filterBox = document.querySelector(".shop_filter");
    filterBox.classList.toggle("active");

    // if (filterBox) {
    //   // filterBox.addEventListener("transitionend", () => {
    //   //   setShowFilter((prev) => !prev);
    //   // });
    //   // return;
    // }
    // setShowFilter((prev) => !prev);
  };

  const handleCheckCategory = async (e) => {
    const itemCheckbox = e.target;
    if (itemCheckbox.classList.contains("active")) {
      itemCheckbox.classList.remove("active");
      itemCheckbox.querySelector("input").checked = false;
      // call api
      setFilter((prev) => ({ ...prev, category: "" }));
    } else {
      const parentItemCheckbox = e.target.parentElement;
      const listItemCheckbox =
        parentItemCheckbox.querySelectorAll(".checkbox_item");
      listItemCheckbox.forEach((checkbox) => {
        checkbox.classList.remove("active");
        checkbox.querySelector("input").checked = false;
      });
      itemCheckbox.classList.add("active");
      itemCheckbox.querySelector("input").checked = true;
      // call API
      const input = itemCheckbox.querySelector("input");
      const idCategory = input.dataset.category;
      setFilter((prev) => ({ ...prev, category: idCategory }));
    }
  };

  const handleCheckPartner = async (e) => {
    const itemCheckbox = e.target;
    if (itemCheckbox.classList.contains("active")) {
      itemCheckbox.classList.remove("active");
      itemCheckbox.querySelector("input").checked = false;
      // call api
      setFilter((prev) => ({ ...prev, partner: "" }));
    } else {
      const parentItemCheckbox = e.target.parentElement;
      const listItemCheckbox =
        parentItemCheckbox.querySelectorAll(".checkbox_item");
      listItemCheckbox.forEach((checkbox) => {
        checkbox.classList.remove("active");
        checkbox.querySelector("input").checked = false;
      });
      itemCheckbox.classList.add("active");
      itemCheckbox.querySelector("input").checked = true;
      // call API
      const input = itemCheckbox.querySelector("input");
      const idPartner = input.dataset.partner;
      setFilter((prev) => ({ ...prev, partner: idPartner }));
    }
  };

  const handleCheckSeason = async (e) => {
    const itemCheckbox = e.target;
    if (itemCheckbox.classList.contains("active")) {
      itemCheckbox.classList.remove("active");
      itemCheckbox.querySelector("input").checked = false;
      // call api
      setFilter((prev) => ({ ...prev, season: "" }));
    } else {
      const parentItemCheckbox = e.target.parentElement;
      const listItemCheckbox =
        parentItemCheckbox.querySelectorAll(".checkbox_item");
      listItemCheckbox.forEach((checkbox) => {
        checkbox.classList.remove("active");
        checkbox.querySelector("input").checked = false;
      });
      itemCheckbox.classList.add("active");
      itemCheckbox.querySelector("input").checked = true;
      // call API
      const input = itemCheckbox.querySelector("input");
      const season = input.dataset.season;
      setFilter((prev) => ({ ...prev, season: season }));
    }
  };

  // nav left

  const handleLeftNav = async (e) => {
    const liTarget = e.target;
    const liEls = document.querySelectorAll(".shop_nav .left li");
    liEls.forEach((li) => li.classList.remove("active"));
    liTarget.classList.add("active");
    const type = liTarget.dataset.typeproduct;
    console.log(liTarget);
    console.log(type);
    if (type === "hot") {
      try {
        const res = await handleFilter(`search?hotProduct=true`);
        filterProducts(res);
      } catch (error) {
        console.log("cant res hot");
      }
    }
    if (type === "new") {
      try {
        const res = await handlerGetLatestProduct();
        filterProducts(res);
      } catch (error) {
        console.log("cant res new");
      }
    }

    if (type === "sale") {
      try {
        const res = await handleFilter(`search?saleProduct=true`);
        filterProducts(res);
      } catch (error) {
        console.log("cant res sale");
      }
    }

    if (type === "all") {
      try {
        const res = await handleFilter();
        filterProducts(res);
      } catch (error) {
        console.log("cant res sale");
      }
    }
  };

  return (
    <div className="shop_nav">
      <div className="left">
        <li className="active" onClick={handleLeftNav} data-typeproduct="all">
          All Product
        </li>
        <li onClick={handleLeftNav} data-typeproduct="hot">
          Hot product
        </li>
        <li onClick={handleLeftNav} data-typeproduct="new">
          New Product
        </li>
        <li onClick={handleLeftNav} data-typeproduct="sale">
          Sale Product
        </li>
      </div>
      <div className="right">
        <p className="total_product">{totalProduct} Products</p>
        <ul className="laylout_list_product">
          <li onClick={(e) => changeLayoutProduct(e, 6)}>6</li>
          <li onClick={(e) => changeLayoutProduct(e, 5)}>5</li>
          <li onClick={(e) => changeLayoutProduct(e, 4)}>4</li>
        </ul>
        <img src="/filter.svg" onClick={handleToggleFilter} />
        {/* nav filter */}
        <div className="shop_filter">
          <div className="head">
            <h2>Filter</h2>
            <img src="/icon_close.svg" onClick={handleToggleFilter} />
          </div>
          {/* category */}
          <div className="filter_group category">
            <h3>Category</h3>
            {categories?.data?.map((category) => (
              <div
                className="checkbox_item"
                onClick={handleCheckCategory}
                key={categories._id}
              >
                <input
                  type="checkbox"
                  value={categories._id}
                  id={category._id}
                  data-category={category._id}
                />
                <label htmlFor={category._id}>{category.title}</label>
              </div>
            ))}
          </div>
          {/* partner */}
          <div className="filter_group partner">
            <h3>Partner</h3>
            {partners?.data?.map((partner) => (
              <div
                className="checkbox_item"
                onClick={handleCheckPartner}
                key={partner._id}
              >
                <input
                  type="checkbox"
                  value={partner._id}
                  data-partner={partner._id}
                  id={partner._id}
                />
                <label htmlFor={partner._id}>{partner.title}</label>
              </div>
            ))}
          </div>

          {/* Season */}
          <div className="filter_group season">
            <h3>Season</h3>
            {dataSeason?.map((season, index) => (
              <div
                className="checkbox_item"
                onClick={handleCheckSeason}
                key={index}
              >
                <input
                  type="checkbox"
                  value={season}
                  data-season={season}
                  id={season}
                />
                <label htmlFor={season}>{season}</label>
              </div>
            ))}
          </div>

          {/* price */}
          {/* <div className="filter_group price">
              <h3>Prices</h3>
              <div className="input_price">
                <input
                  type="range"
                  value={filter.price}
                  onChange={handleChangeInputPrice}
                />
                <p>Price: 0 - {filter.price}</p>
              </div>
            </div> */}
        </div>

        {/* {showFilter && (
          
        )} */}
      </div>
    </div>
  );
};

export default NavShop;
