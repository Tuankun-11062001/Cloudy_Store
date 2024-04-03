"use client";
import React, { useEffect, useState } from "react";
import { SwiperSlideImage } from "@/components/swiper";
import { useParams } from "next/navigation";
import Loading from "@/app/[locale]/loading";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { handleFindProduct, handlerGetLatestProduct } from "@/api/products";
import LoadingClient from "@/components/loadingClient";
import Product from "@/components/product";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const DetailProduct = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [relativeData, setRelativeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await handleFindProduct(params.id);
        console.log(res);
        if (res.status === 200) {
          setData(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log("error fetch", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await handlerGetLatestProduct();
        if (res) {
          setRelativeData(res);
          setLoading(false);
        }
      } catch (error) {
        console.log("err fetch");
      }
    })();
  }, []);

  const handleSeeMore = () => {
    const des = document.querySelector(".des");
    if (des) {
      des.classList.toggle("see_more");
      setSeeMore(!seeMore);
    }
  };

  return (
    <div className="shop_detail">
      {loading ? (
        <Loading />
      ) : (
        <div className="shop_detail_layout">
          <div className="shop_detail_image">
            <SwiperSlideImage data={data.image} />
          </div>
          <div className="shop_detail_content">
            {/* title */}

            <h1>{data?.title}</h1>

            {/* description */}

            <p className="des">{data?.description}</p>
            <span onClick={handleSeeMore} className="btn_see_more">
              {seeMore ? "escap" : "See more"}
            </span>

            {/* color */}
            <div className="color">
              <span>Color:</span>
              {data?.image?.map((colors) => (
                <span
                  key={colors._id}
                  style={{ background: colors.color }}
                ></span>
              ))}
            </div>
            <h3>{data?.price}</h3>

            <a href={data.linkProduct} target="_blank" className="btn_navigate">
              Go to partner
            </a>
            <div className="category">
              <div className="category_group">
                <p>Category</p>
                <p>{data?.category?.title}</p>
              </div>
              <div className="category_group">
                <p>Partner</p>
                <p>{data?.partner?.title}</p>
              </div>
            </div>

            {/* list social */}

            <ul>
              <li>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/faceIcon.svg" />
                </a>
              </li>
              <li>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/instagramIcon.svg" />
                </a>
              </li>
              <li>
                <a
                  href="http://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/youtubeIcon.svg" />
                </a>
              </li>
              <li>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/tiktokIcon.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="relative_product">
        <p className="title">Relative Product</p>
        {loading ? (
          <LoadingClient />
        ) : (
          <div className="list_product">
            {relativeData?.data?.map((relative) => (
              <Product key={relative._id} data={relative} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
