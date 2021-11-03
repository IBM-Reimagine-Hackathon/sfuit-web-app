import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {

  const [active, setActive] = useState(false);

  function changeIcon(){
    setActive(!active);
  }

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
          <li className="profile-name">John Doe <i  onClick={changeIcon} className={active ? "fas fa-caret-down active" : "fas fa-caret-down"}></i></li>
          <li className="profile-age">35 Years</li>
        </ul>
        <div className={active ? "logout show" : "logout"}>
          <ul>
            <li><i className="fas fa-sign-out-alt"></i> Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;