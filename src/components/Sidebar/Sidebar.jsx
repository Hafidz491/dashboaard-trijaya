import React from "react";
import { FaTh } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import "./style.css";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/add",
      name: "Tambah Proyek",
      icon: <FaTh />,
    },
    {
      path: "/proyek",
      name: "Proyek Dikerjakan",
      icon: <FaTh />,
    },
    {
      path: "/finished",
      name: "Proyek Selesai",
      icon: <FaTh />,
    },
  ];

  return (
    <div className="container-sidebar">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
        </div>
        <p className="p1">Menu Utama</p>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            {/* <div className="icon">{item.icon}</div> */}
            <div className="item-text">{item.name}</div>
          </NavLink>
        ))}
        <div className="login-logout">
          <div className="text-login-logout">
            <Link to={`/login`}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
