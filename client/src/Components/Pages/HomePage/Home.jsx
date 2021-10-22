import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Post from "../../Post/Post";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [post, setPost] = useState([]);

  const location = useLocation();
  let paramas = location.search;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:3001/api/posts/${paramas}`);

      setPost(res.data);

      //   console.log(res);
    };
    getPost();
  }, [paramas]);
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Post data={post} />
        <Sidebar />
      </div>
    </div>
  );
}
