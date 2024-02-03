"use client";
import Tabs from "@/components/tabs";
import React, { useEffect } from "react";
import { SwiperSlideImageProduct } from "@/components/swiper";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductAPI from "@/restAPI/product";
import Loading from "@/app/loading";
import { useSelector, useDispatch } from "react-redux";
import { getOneProductAsync } from "@/redux/slices/productSlice";

const DetailProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { ViewProduct, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getOneProductAsync(params.id));
  }, []);

  return (
    <div className="product_detail">
      <Link href="/shop" className="product_detail_back">
        Back
      </Link>

      {loading ? (
        <Loading />
      ) : (
        <div className="product_detail_layout">
          <div className="product_detail_image">
            <SwiperSlideImageProduct data={ViewProduct.image} />
          </div>
          <div className="product_detail_content">
            <span>{ViewProduct?.category?.title}</span>
            <h1>{ViewProduct?.title}</h1>
            <h3>{ViewProduct?.price}</h3>
            <p className="des">{ViewProduct?.description}</p>
            <div className="color">
              <span>Color:</span>
              {ViewProduct?.image?.map((colors) => (
                <span
                  key={colors._id}
                  style={{ background: colors.color }}
                ></span>
              ))}
            </div>
            <a
              href={ViewProduct.linkProduct}
              target="_blank"
              className="btn_navigate"
            >
              Go to partner
            </a>

            <Tabs />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
