import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" placeholder="Enter your Email.."></input>

                <label>Password</label>
                <input type="password" placeholder="Enter you Password"></input>

                <button className="loginBtn">Login</button>
            </form>
            <Link to="/register">
                <button className="registerBtn">Register</button>
            </Link>
        </div>
    )
}
