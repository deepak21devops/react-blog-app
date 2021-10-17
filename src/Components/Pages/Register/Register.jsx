import { Link } from 'react-router-dom'
import './register.css'
export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">

                <label>Username</label>
                <input type="text" placeholder="Enter your Username.."></input>


                <label>Email</label>
                <input type="text" placeholder="Enter your Email.."></input>

                <label>Password</label>
                <input type="password" placeholder="Enter you Password"></input>
                <button className="loginBtn">Register</button>
                
            </form>
            <Link to="/login" className="link">
                    <button className="registerBtn">Login</button>
            </Link>
            
        </div>
    )
}
