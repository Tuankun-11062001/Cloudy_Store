import { plusOneView } from "@/redux/slices/postSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Posts = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Link
      href={`/profile/${data._id}`}
      onClick={() =>
        dispatch(plusOneView({ ...data, views: parseInt(data.views) + 1 }))
      }
    >
      <div className="post">
        <img src={data.thumbnail} alt="image_post" />
        <div className="content">
          <h3>{data.title}</h3>
          <p className="description">{data.description}</p>
          <div className="bottom">
            <p>
              {new Date(data.createdAt).getDay() +
                "/" +
                new Date(data.createdAt).getMonth() +
                1}
            </p>
            <p>{data.views}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
