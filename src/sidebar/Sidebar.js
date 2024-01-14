import React from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoFilterCircleOutline } from "react-icons/io5";

// Sidebar
const Sidebar = ({ children }) => {

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHome />
        },
        {
            path: "/filter",
            name: "Filters",
            icon: <IoFilterCircleOutline />
        }
    ]
    
    return (
        <div className="cont">
            <div className="sidebar">
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link1">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
