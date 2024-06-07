"use client";
import ListProduct from "@/components/shop/listProduct";
import NavShop from "@/components/shop/navShop";
import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "../loading";
import handlerGetProduct from "@/api/products";
import Empty from "@/components/empty";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilter] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isFetching = useRef(false);

  const fetchItems = useCallback(async () => {
    if (loading || isFetching.current) return;
    setLoading(true);
    try {
      const response = await handlerGetProduct(page);
      if (typeof response === "string" || response instanceof String) {
        return setHasMore(false);
      }

      setProducts((prevItems) => [...prevItems, ...response]);
      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        hasMore &&
        !loading
      ) {
        console.log(page - 1);
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <>
      <div className="shop">
        <div className="banner">
          <div className="content">
            <h1 data-text="Welcome🌴to⛱️summer">Welcome🌴to⛱️summer</h1>
            <p>Wishing you a happy summer!</p>
          </div>
          <img src="/summer_beach.jpg" />
        </div>
        <div className="shop_content shop_layout">
          <NavShop
            filterProducts={setFilter}
            totalProduct={products?.length}
            filterActive={{ state: filterActive, action: setFilterActive }}
            setInitHasMore={setHasMore}
          />
          {filterActive ? (
            <ListProduct data={filters} />
          ) : (
            <>
              <ListProduct data={products} />
              {loading && (
                <div className="shop_load_infinite">
                  <img src="/loadInfinite.svg" />
                </div>
              )}
              {!hasMore && <Empty />}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
