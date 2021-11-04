import React, { useState } from "react";
import Overlay from "../Overlay/Overlay";
import "./SideBar.css";

const SideBar = () => {

  const [active, setActive] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  function changeIcon(){
    setActive(!active);
  }

  function showOverlay(){
    setShow(!show);
  }

  return (
    <div>
      <div className={show ? "show" : "hide"}>
      <Overlay />
      </div>
    <div className="sidebar-container">
      <div className="logo">S<span>f</span>UIT</div>
      <ul className="nav-list">
        <li className="nav-items"><i className="fas fa-home"></i>Home <div className="pointer"></div></li>
        <li className="nav-items" onClick={showOverlay}><i className="fas fa-bell"><i className="fas fa-circle"></i></i>Notifications</li>
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
    </div>
  );
}

export default SideBar;