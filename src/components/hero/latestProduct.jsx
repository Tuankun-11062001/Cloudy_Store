"use client";
import handlerGetProduct, { handlerGetLatestProduct } from "@/api/products";
import Product from "../product";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useEffect, useState } from "react";
import LoadingClient from "../LoadingClient";
import { SwiperProduct } from "../swiper";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const LatestProduct = ({ data }) => {
  const [latestProduct, setLatestProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const t = useTranslations("Hero");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await handlerGetLatestProduct();
        if (res) {
          setLatestProduct(res);
          setLoading(false);
        }
      } catch (error) {
        console.log("err cant fetch");
      }
    })();
  }, []);

  return (
    <div className="right">
      <h2 className="title">
        {t("title_1")} <span>{t("title_2")} </span> {t("title_3")}
      </h2>
      <p>{t("detail")}</p>
      {loading ? (
        <LoadingClient />
      ) : (
        <div className="list_product">
          <SwiperProduct data={latestProduct} />
        </div>
      )}
    </div>
  );
};

export default LatestProduct;
