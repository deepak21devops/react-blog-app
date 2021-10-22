import React from "react";
import SinglePost from "../SinglePost/SinglePost";
import "./post.css";
export default function Post({ data }) {
  console.log(data);
  return (
    <div className="post">
      {data.map((pt) => (
        <SinglePost key={pt._id} post={pt} />
      ))}
    </div>
  );
}
