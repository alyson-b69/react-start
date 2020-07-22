import React from "react";
import "./SideBar.css";

function SideBar(){

    return(
        <div className="sidebar">

        <div className="widget">
        <h2>Les wilduckers</h2>
        <img src="https://content.spiceworksstatic.com/service.community/p/post_images/0000161083/56fd7c97/attached_image/GeekDuck.ashx.png" alt="ducky"/>
        <p>A votre service !</p>
        </div>

        <div className="widget">
        <h2>TodoList Lovers</h2>
        <img src="https://image.freepik.com/free-vector/people-making-list-illustration_53876-43029.jpg" alt="todolist"/>
        <p>Anti procrastination</p> 
        </div>
        
        </div>
    )
}

export default SideBar;