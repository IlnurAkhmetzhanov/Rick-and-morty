import {NavLink} from "react-router-dom";
import React from "react";
import "./Sidebar.scss"

export const Sidebar = () => {
    return (
        <div className={"Sidebar-wrapper"}>
            <div className={"Sidebar-link"}><NavLink to="/main">Главная</NavLink></div>
            <div className={"Sidebar-link"}><NavLink to="/aboutMe">Обо мне</NavLink></div>
        </div>
    )
}