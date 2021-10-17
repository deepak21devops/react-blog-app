import React from 'react'
import SinglePost from '../SinglePost/SinglePost'
import './post.css'
export default function Post() {
    return (
        <div className="post">
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
        </div>
    )
}
