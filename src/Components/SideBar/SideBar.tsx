import React from "react";
import "./SideBar.css";

const SideBar = () => {

    return (
      <div className="sidebar-container">
        <div className="logo">S<span>f</span>UIT</div>
        <ul className="nav-list">
          <li className="nav-items"><i className="fas fa-home"></i>Home</li>
          <li className="nav-items"><i className="fas fa-bell"></i>Notifications</li>
          <li className="nav-items"><i className="fas fa-chart-line"></i>Analysis</li>
        </ul>
        <div className="line-divide"></div>
        <div className="profile-container">
          <div className="profile-picture">A</div>
          <ul className="profile-details">
            <li className="profile-name">John Doe <i className="fas fa-caret-down"></i></li>
            <li className="profile-age">35 Years</li>
          </ul>
        </div>
      </div>
    );
  }

export default SideBar;