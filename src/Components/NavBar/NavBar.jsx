import React from 'react'
import './navbar.css'
export default function NavBar() {
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
                        <li className="navListItems">HOME</li>
                        <li className="navListItems">ABOUT</li>
                        <li className="navListItems">CONTACT</li>
                        <li className="navListItems">WRITE</li>
                        <li className="navListItems">LOGOUT</li>
                    </ul>
                </div>
                <div className="navRight">
                    <img src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="navImg" />
                    <i className="navSearch fas fa-search"></i>
                </div>
        </div>
    )
}
