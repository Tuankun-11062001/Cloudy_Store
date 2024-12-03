import { shopApi } from "@/api/shop";
import React, { useEffect, useState } from "react";

export const ShopAllProductnav = ({
  changeProduct,
  stateQuery,
  changeQuery,
  dataQuery,
}) => {
  const [category, setCategory] = useState([]);
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const resCategory = await shopApi.getCategory();
      const resPartner = await shopApi.getPartner();
      setCategory(resCategory.data.data);
      setPartner(resPartner.data.data);
    };

    fetchInfo();
  }, []);

  const handleChangeQuery = (e) => {
    const { name, value } = e.target;
    changeQuery((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleQuery = (key, value) => {
    changeQuery((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  useEffect(() => {
    const queryParams = Object?.entries(stateQuery)
      .filter(
        ([key, value]) => value !== null && value !== "" && value !== false
      ) // Chỉ giữ lại các tham số có giá trị
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`) // Mã hóa giá trị để đảm bảo an toàn
      .join("&"); // Kết hợp các tham số với dấu '&'

    const stringQuery = queryParams ? `?${queryParams}` : ""; // Nếu có tham số thì thêm dấu hỏi

    dataQuery(stringQuery);

    const search = async () => {
      const res = await shopApi.searchProduct(stringQuery);
      changeProduct(res.data.data);
    };
    search();
  }, [stateQuery]);

  return (
    <div className="shop_all_nav">
      <span>100 products</span>
      <select
        name="category"
        onChange={handleChangeQuery}
        value={stateQuery.category}
      >
        <option value="">Choose Category</option>
        {category?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.categoryName}
          </option>
        ))}
      </select>
      <select
        name="partner"
        onChange={handleChangeQuery}
        value={stateQuery.partner}
      >
        <option value="">Choose partner</option>
        {partner?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.partnerName}
          </option>
        ))}
      </select>
      <select
        name="season"
        onChange={handleChangeQuery}
        value={stateQuery.season}
      >
        <option value="">Choose Season</option>
        <option value="winter">Winter</option>
        <option value="autumn">Autumn</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
      </select>
      <p
        onClick={() => handleQuery("myProduct", !stateQuery.myProduct)}
        className={stateQuery.myProduct ? "active" : ""}
      >
        My Product
      </p>
    </div>
  );
};
