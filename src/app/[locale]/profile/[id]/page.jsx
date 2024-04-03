"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/app/[locale]/loading";
import { handlerGetPostId } from "@/api/blog";

const DetailPost = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [dataPost, setDataPost] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await handlerGetPostId(id);
        if (res) {
          setLoading(false);
          setDataPost(res.data);
        }
      } catch (error) {
        console.log("errr", error);
      }
    })();
  }, []);

  return (
    <div className="profile_detail_layout profile_detail">
      {loading ? (
        <Loading />
      ) : (
        <div className="content">
          <div className="head">
            <div className="avata">
              <img src="/avarta.png" />
            </div>
            <p>June.Cloudy</p>
          </div>
          <h1 className="title">{dataPost.title}</h1>
          <p>
            {new Date(dataPost.createdAt).getDay() +
              "/" +
              new Date(dataPost.createdAt).getMonth() +
              1 +
              "/" +
              new Date(dataPost.createdAt).getFullYear()}
          </p>
          <span className="space"></span>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: dataPost?.body }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default DetailPost;
