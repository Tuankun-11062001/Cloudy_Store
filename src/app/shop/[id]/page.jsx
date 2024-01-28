import Tabs from "@/components/tabs";
import React from "react";
import { SwiperSlideImageProduct } from "@/components/swiper";
import Link from "next/link";
const DetailProduct = () => {
  return (
    <div className="product_detail">
      <Link href="/shop" className="product_detail_back">
        Tro ve
      </Link>
      <div className="product_detail_layout">
        <div className="product_detail_image">
          <SwiperSlideImageProduct />
        </div>
        <div className="product_detail_content">
          <span>T-shirt</span>
          <h1>T-shirt Text Shy Box</h1>
          <h3>120.000</h3>
          <p className="des">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus aperiam eos consequuntur molestias, nulla tenetur vitae
            earum deserunt harum labore soluta adipisci beatae distinctio
            impedit, laborum voluptatem quae quod corrupti.
          </p>
          <div className="color">
            <span>Color:</span>
            <span style={{ background: "#000" }}></span>
            <span style={{ background: "#fff" }}></span>
          </div>
          <button className="btn_navigate">Go to Partner</button>

          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
