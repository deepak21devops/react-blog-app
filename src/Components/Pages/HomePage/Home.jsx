import React from 'react'
import Header from '../../Header/Header'
import Post from '../../Post/Post'
import Sidebar from '../../Sidebar/Sidebar'
import './home.css'

export default function Home() {
    return (
        <div>
            <Header/>
            <div className="homeContainer">
                <Post/>
                <Sidebar/>
            </div>
        </div>
    )
}
