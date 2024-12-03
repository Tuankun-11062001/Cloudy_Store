import { appSvg } from "@/data/svg";
import React, { Suspense } from "react";
import BoxHeadNewlatest from "./boxHeadNewlatest";

const BoxNewlatestBlog = () => {
  return (
    <div className="newlatest_blog">
      <Suspense fallback={<p>Loading...</p>}>
        <BoxHeadNewlatest title="blog" />
      </Suspense>
      <div className="newlatest_blog_list">
        <div className="item">
          <img src="https://pantravel.vn/wp-content/uploads/2023/11/ruong-bac-thang-kiet-tac-thien-nhien-vi-dai-tu-ban-tay-con-nguoi.jpg" />
          <div className="item_content">
            <h4>
              Name blog Name blog Name blog Name blog Name blog Name blog Name
              blog
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eveniet sit laudantium ea nostrum! Ut, ex tempore? Cumque commodi
              minima quibusdam aspernatur saepe fugit nemo id consectetur
              deleniti! Ad, illo?
            </p>
            <div className="view">
              <p>10 {appSvg.cloud}</p>
              <p>30 {appSvg.view}</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://pantravel.vn/wp-content/uploads/2023/11/ruong-bac-thang-kiet-tac-thien-nhien-vi-dai-tu-ban-tay-con-nguoi.jpg" />
          <div className="item_content">
            <h4>
              Name blog Name blog Name blog Name blog Name blog Name blog Name
              blog
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eveniet sit laudantium ea nostrum! Ut, ex tempore? Cumque commodi
              minima quibusdam aspernatur saepe fugit nemo id consectetur
              deleniti! Ad, illo?
            </p>
            <div className="view">
              <p>10 {appSvg.cloud}</p>
              <p>30 {appSvg.view}</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://pantravel.vn/wp-content/uploads/2023/11/ruong-bac-thang-kiet-tac-thien-nhien-vi-dai-tu-ban-tay-con-nguoi.jpg" />
          <div className="item_content">
            <h4>
              Name blog Name blog Name blog Name blog Name blog Name blog Name
              blog
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eveniet sit laudantium ea nostrum! Ut, ex tempore? Cumque commodi
              minima quibusdam aspernatur saepe fugit nemo id consectetur
              deleniti! Ad, illo?
            </p>
            <div className="view">
              <p>10 {appSvg.cloud}</p>
              <p>30 {appSvg.view}</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://pantravel.vn/wp-content/uploads/2023/11/ruong-bac-thang-kiet-tac-thien-nhien-vi-dai-tu-ban-tay-con-nguoi.jpg" />
          <div className="item_content">
            <h4>
              Name blog Name blog Name blog Name blog Name blog Name blog Name
              blog
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              eveniet sit laudantium ea nostrum! Ut, ex tempore? Cumque commodi
              minima quibusdam aspernatur saepe fugit nemo id consectetur
              deleniti! Ad, illo?
            </p>
            <div className="view">
              <p>10 {appSvg.cloud}</p>
              <p>30 {appSvg.view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxNewlatestBlog;
