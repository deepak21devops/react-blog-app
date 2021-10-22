import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function NavBar() {
  const user = false;
  return (
    <div className="navbar">
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <Link to="/" className="link">
            <li className="navListItems">HOME</li>
          </Link>

          <Link to="/" className="link">
            <li className="navListItems">ABOUT</li>
          </Link>

          <Link to="/" className="link">
            <li className="navListItems">CONTACT</li>
          </Link>

          <Link to="/write" className="link">
            <li className="navListItems">WRITE</li>
          </Link>

          <Link to="/" className="link">
            <li className="navListItems">LOGOUT</li>
          </Link>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <>
            <img
              src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="navImg"
            />
            <i className="navSearch fas fa-search"></i>{" "}
          </>
        ) : (
          <ul className="navList">
            <Link to="/login" className="link">
              <li className="navListItems">LOGIN</li>
            </Link>

            <Link to="/register" className="link">
              <li className="navListItems">REGISTER</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
