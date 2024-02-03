"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getOnePostAsync } from "@/redux/slices/postSlice";
import Loading from "@/app/loading";

const DetailPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { viewPost, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getOnePostAsync(id));
  }, []);
  return (
    <div className="post_detail_layout post_detail">
      <Link href="/profile" className="post_detail_back">
        Back
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <div className="content">
          <div className="head">
            <div className="avata">
              <img src="/avata.jpg" />
            </div>
            <p>June.Cloudy</p>
          </div>
          <h1 className="title">{viewPost.title}</h1>
          <p>
            {new Date(viewPost.createdAt).getDay() +
              "/" +
              new Date(viewPost.createdAt).getMonth() +
              1 +
              "/" +
              new Date(viewPost.createdAt).getFullYear()}
          </p>
          <span className="space"></span>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: viewPost?.body }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default DetailPost;
