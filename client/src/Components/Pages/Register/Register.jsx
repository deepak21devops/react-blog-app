import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./register.css";
import axios from "axios";
export default function Register() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlag(false);
    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/registration",
        { username, email, password }
      );
      console.log(res);
      window.location.replace("/login");
    } catch (err) {
      setFlag(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Username.."
          onChange={(e) => setUser(e.target.value)}
        ></input>

        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your Email.."
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter you Password"
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <button className="loginBtn" type="submit">
          Register
        </button>

        {flag && <span>Invalid Credentials</span>}
      </form>
      <Link to="/login" className="link">
        <button className="registerBtn">Login</button>
      </Link>
    </div>
  );
}
