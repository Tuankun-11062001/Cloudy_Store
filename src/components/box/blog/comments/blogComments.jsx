"use client";
import React, { useEffect, useState } from "react";
import { BlogCommentCard } from "../card/blogCard";
import { blogsApi } from "@/api/blogs";
import { getCookie } from "@/components/cookies/getCookie";

const BlogComments = ({ data }) => {
  const [dataLocal, setDataLocal] = useState(data);
  const [idUser, setIdUser] = useState("");
  const [userinfo, setUserInfo] = useState();
  const [message, setMessage] = useState("");
  const [dataComment, setDataComment] = useState({
    content: "",
    userId: "",
    id: data._id,
  });

  useEffect(() => {
    const localId = getCookie("_CM_id");
    const localInfo = getCookie("_CM_info");

    if (!localId || !localInfo) {
      return;
    }
    const user = JSON.parse(localInfo);
    setIdUser(localId);
    setUserInfo(user);
    setDataComment((prev) => {
      return {
        ...prev,
        userId: localId,
      };
    });
  }, []);

  const handleChange = (e) => {
    setDataComment((prev) => {
      return {
        ...prev,
        content: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    const res = await blogsApi.addComment(dataComment);
    if (res.status !== 201) {
      return;
    }

    const customComment = {
      user: {
        avatar: userinfo.avatar,
        userName: userinfo.userName,
      },
      content: dataComment.content,
    };

    setDataLocal((prev) => {
      return {
        ...prev,
        comments: [customComment, ...prev.comments],
      };
    });
  };

  return (
    <div className="blog_comments">
      {idUser ? (
        <div className="blog_comments_editor">
          <h4>Share your feeling</h4>
          <textarea
            placeholder="What do you think about this blog. Share your feeling"
            onChange={handleChange}
            value={dataComment.content}
          />
          <p onClick={handleSubmit}>Share</p>
        </div>
      ) : (
        <p className="blog_comments_login">Please Login To Comment</p>
      )}

      <h3 className="blog_comments_title">Comments</h3>
      <div className="blog_comments_list">
        {dataLocal.comments.map((comment, indx) => (
          <BlogCommentCard
            data={comment}
            key={comment._id || indx}
            idUser={idUser}
            idBlog={data._id}
            setComments={setDataLocal}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogComments;
