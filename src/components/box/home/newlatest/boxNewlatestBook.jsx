import { appSvg } from "@/data/svg";
import React, { Suspense } from "react";
import BoxHeadNewlatest from "./boxHeadNewlatest";

const BoxNewlatestBook = () => {
  return (
    <div className="newlatest_books">
      <Suspense fallback={<p>Loading...</p>}>
        <BoxHeadNewlatest title="Books" />
      </Suspense>
      <div className="newlatest_books_list">
        <div className="item">
          <img src="https://www.khaitam.com/Data/Sites/1/Product/10115/hoang-tu-be-bia-cung.png" />
          <div className="item_content">
            <h4>Hoàng Tử Bé</h4>
            <p>Tác giả: Antoine de Saint-Exupéry</p>
            <p>Date: 11/06/2024</p>
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

export default BoxNewlatestBook;
