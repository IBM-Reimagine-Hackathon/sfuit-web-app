import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import "./SideBar.css";

const SideBar = () => {

  const [active, setActive] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false); 
  const [open, setOpen] = useState<string>("");
  const setName = localStorage.getItem("name");
  const setYear = localStorage.getItem("dob");
  let name = '';
  let initial = '';
  let dob;
  if(setName != null){
    name = setName.substring(1, setName.length-1);
    initial = setName.substring(1,2);
  }

  if(setYear != null){
    var ob = new Date(setYear);
    var month = Date.now() - ob.getTime();
    var age = new Date(month);
    var year = age.getUTCFullYear();
    dob = Math.abs(year - 1970);
  }

  function openNav(){
      setOpen('active');
  }

  function changeIcon(){
    setActive(!active);
  }

  function showOverlay(){
    setShow(!show);
  }

  let history = useHistory();

  function logout(){
    localStorage.removeItem("sfuit");
    localStorage.removeItem("name");
    localStorage.removeItem("dob");
    history.push('/login');
  }
  return (
    <div>
      <div className={show ? "show" : "hide"}>
      <Overlay />
      </div>
      <nav className={open}>
        <div className="menu-icons">
          <i onClick={openNav} className="fas fa-bars"></i>
          <i onClick={() => setOpen("")} className="fas fa-times"></i>
        </div>
      <div className="sidebar-container">
        <div className="logo">S<span>f</span>UIT</div>
        <ul className="nav-list">
          <Link to="/" className="color"><li className="nav-items"><i className="fas fa-home"></i>Home</li></Link>
          <li className="nav-items" onClick={showOverlay}><i className="fas fa-bell"><i className="fas fa-circle"></i></i>Notifications</li>
          <Link to="/analysis" className="color"><li className="nav-items"><i className="fas fa-chart-line"></i>Analysis</li></Link>
        </ul>
        <div className="profile-container">
          <div className="profile-picture">{initial}</div>
          <ul className="profile-details">
            <li className="profile-name">{name}<i  onClick={changeIcon} className={active ? "fas fa-caret-down up" : "fas fa-caret-down"}></i></li>
            <li className="profile-age">{dob} years</li>
          </ul>
          <div className={active ? "logout show" : "logout"}>
            <ul>
              <li onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</li>
            </ul>
          </div>
        </div>
    </div>
    </nav>
    </div>
  );
}

export default SideBar;