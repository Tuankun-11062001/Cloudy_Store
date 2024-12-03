"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ShopAllProductnav } from "./shopAllProductnav";
import { ShopProductCard } from "../card/shopCard";
import { shopApi } from "@/api/shop";

export const ShopAllProduct = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [stringQuery, setStringQuery] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState({
    category: "",
    season: "",
    partner: "",
    title: "",
    myProduct: false,
  });

  // Hàm để tải sản phẩm từ API
  const loadProducts = async (pageNumber) => {
    setLoading(true);
    const res = await shopApi.searchProduct(
      `${stringQuery ? stringQuery + "&" : "?"}page=${pageNumber}`
    );
    const newProducts = res.data.data;

    // Lọc các sản phẩm mới để loại bỏ các sản phẩm đã có trong danh sách
    const uniqueProducts = newProducts.filter(
      (newProduct) =>
        !products.some((product) => product._id === newProduct._id)
    );

    // Kết hợp các sản phẩm cũ và mới, loại bỏ các sản phẩm trùng lặp
    const combinedProducts = [...products, ...uniqueProducts];

    // Dùng Set để đảm bảo chỉ có những sản phẩm duy nhất
    const uniqueProductsSet = Array.from(
      new Map(
        combinedProducts.map((product) => [product._id, product])
      ).values()
    );

    setProducts(uniqueProductsSet);
    setTotalPages(res.data.pagination.totalPages);
    setLoading(false);
  };

  // Lần đầu tiên load dữ liệu khi trang load
  useEffect(() => {
    loadProducts(page);
  }, [page]);

  // Reset lại danh sách sản phẩm và page khi query thay đổi
  useEffect(() => {
    setProducts([]); // Xóa tất cả sản phẩm cũ
    setPage(1); // Đặt lại trang về 1
  }, [query, stringQuery]);

  // Intersection Observer để phát hiện khi người dùng cuộn đến cuối trang
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1.0,
  });

  // Khi người dùng cuộn đến cuối, tải thêm dữ liệu
  useEffect(() => {
    if (inView && !loading && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, loading, page, totalPages]);

  return (
    <div className="shop_all">
      <ShopAllProductnav
        changeProduct={setProducts}
        stateQuery={query}
        changeQuery={setQuery}
        dataQuery={setStringQuery}
      />
      <div className="shop_all_list">
        {products.map((product) => (
          <ShopProductCard data={product} key={product._id} />
        ))}
        {/* Thêm một loader khi đang tải */}
        {loading && <div>Loading...</div>}

        {/* Sử dụng IntersectionObserver */}
        <div ref={ref} />
      </div>
    </div>
  );
};
