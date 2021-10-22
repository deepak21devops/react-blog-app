import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import axios from "axios";
import { context } from "../../../redux/Context";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(isFetching);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>User</label>
        <input
          type="text"
          placeholder="Enter your username.."
          ref={userRef}
        ></input>

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter you Password"
          ref={passwordRef}
        ></input>

        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
      <Link to="/register">
        <button className="registerBtn">Register</button>
      </Link>
    </div>
  );
}
