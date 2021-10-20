import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Post from "../../Post/Post";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3001/api/posts");
      console.log(res.data);

      //   console.log(res);
    };
    getPost();
  }, []);
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Post />
        <Sidebar />
      </div>
    </div>
  );
}
