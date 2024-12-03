import React, { Suspense } from "react";
import BoxHeadNewlatest from "./boxHeadNewlatest";
import { appSvg } from "@/data/svg";

const BoxNewlatestLyrics = () => {
  return (
    <div className="newlatest_lyrics">
      <Suspense fallback={<p>Loading...</p>}>
        <BoxHeadNewlatest title="lyrics" />
      </Suspense>
      <div className="newlatest_lyrics_list">
        <div className="item">
          <img src="https://pantravel.vn/wp-content/uploads/2023/11/ruong-bac-thang-kiet-tac-thien-nhien-vi-dai-tu-ban-tay-con-nguoi.jpg" />
          <div className="item_content">
            <h4>Borrowed Time lyrics</h4>
            <p>Singer: Cueshé</p>
            <p>Feedback: 20</p>
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

export default BoxNewlatestLyrics;
