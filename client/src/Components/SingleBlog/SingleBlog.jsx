import "./singleBlog.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
export default function SingleBlog() {
  const [post, setPost] = useState({});
  const location = useLocation().pathname.split("/")[2];
  console.log(`http://localhost:3001/api/posts/${location}`);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/posts/${location}`
      );

      setPost(res.data);
    };
    getPost();
  }, [location]);

  return (
    <div className="singleBlog">
      <div className="BlogWrapper">
        <img
          className="blogImg"
          src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="blogInfo">
          <h1 className="blogTitle">
            {post.title}
            <div className="blogIconContainer">
              <i class="blogIcon fas fa-edit"></i>
              <i class="blogIcon far fa-trash-alt"></i>
            </div>
          </h1>
        </div>
        <div className="blogAuthorInfo">
          <Link
            to={`/?user=${post.username}
          `}
            className="link"
          >
            <span className="author">
              Author: <b>{post.username}</b>
            </span>
          </Link>

          <span className="blogDate">
            {new Date(post.updatedAt).toDateString()}
          </span>
        </div>
        <p className="blogDesc">{post.description}</p>
      </div>
    </div>
  );
}
