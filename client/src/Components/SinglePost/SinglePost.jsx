import React from "react";
import "./singlePost.css";
import { Link } from "react-router-dom";
export default function SinglePost({ post }) {
  return (
    <>
      <div className="singlePost" key={post._id}>
        <img
          className="postImg"
          src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="postCategory">
          <div className="postInfo">
            <span className="postData">Music</span>
            <span className="postData">Life</span>
          </div>
          <Link to={`/single/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>

          <span className="datePicker">
            {new Date(post.updatedAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.description}</p>
      </div>
    </>
  );
}
