import Link from "next/link";
import React from "react";

const DetailPost = () => {
  return (
    <div className="post_detail_layout post_detail">
      <Link href="/profile" className="post_detail_back">
        Tro ve
      </Link>
      <div className="content">
        <div className="head">
          <div className="avata">
            <img src="/avata.jpg" />
          </div>
          <p>June.Cloudy</p>
        </div>
        <h1 className="title">The World of Chales & Ray Eanes</h1>
        <p>27/1/2023</p>
        <span className="space"></span>
        <div className="body"></div>
      </div>
    </div>
  );
};

export default DetailPost;
