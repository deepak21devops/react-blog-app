import React from "react";
import './singlePost.css'
export default function SinglePost() {
  return (

    <div className="singlePost">
      <img className="postImg" src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <div className="postCategory">
        <div className="postInfo">
          <span className="postData">Music</span>
          <span className="postData">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <span className="datePicker">1 Hour Ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, commodi? Doloremque molestias qui sunt natus rem a dignissimos similique aliquid assumenda alias, ad adipisci dolore ab magni reiciendis iure id voluptates corporis cum perferendis. Ipsa nihil, distinctio maiores labore nobis vitae ad minima, beatae suscipit veniam sunt pariatur, aliquam deleniti..</p>
    </div>


  );
}
