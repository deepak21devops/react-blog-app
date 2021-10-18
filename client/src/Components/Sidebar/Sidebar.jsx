import React from 'react'
import './sidebar.css'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarContainer">
                <div className="sidebarContent">
                    <span className="sidebarTitle">About Me</span>
                    <img className="sidePost" src="https://images.pexels.com/photos/9698186/pexels-photo-9698186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem velit aspernatur similique sint voluptatem maxime itaque? Officiis aliquam repudiandae molestias!</p>
                </div>

                <div className="sidebarContent">
                    <span className="sidebarTitle">Categories</span>
                    <ul className="categoryList">
                        <li className="categoryItems">Life</li>
                        <li className="categoryItems">Music</li>
                        <li className="categoryItems">Sports</li>
                        <li className="categoryItems">Style</li>
                        <li className="categoryItems">Tech</li>
                        <li className="categoryItems">Cinema</li>
                    </ul>
                </div>

                <div className="sidebarContent">
                    <span className="sidebarTitle">Follow Us</span>
                    <div className="sideIconsContainer">
                        <i className="sideIcon fab fa-facebook-square"></i>
                        <i className="sideIcon fab fa-instagram-square"></i>
                        <i className="sideIcon fab fa-twitter-square"></i>
                        <i className="sideIcon fab fa-pinterest-square"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}
