import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Button } from "../Button/Button";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};


const Navbar = (props: any) => {
  const [clicked, setClicked] = useState<any>("false");
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState<any>("false");

  useEffect(() => {
    setUser({ user: JSON.parse(localStorage.getItem('sfuit') || '{}')});
  }, [])

  const handleClick = () => {
    setClicked({ clicked: !clicked });
  };

  const onOpenModal = () => {
    setOpen({ open: true });
  };

  const onCloseModal = () => {
    setOpen({ open: false });
  };
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          S<span>f</span>UIT
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a className="nav-links" href="#" onClick={onOpenModal}>
              <i className="fas fa-bell"></i> Notifications
            </a>
          </li>
          <li>
            <a className="nav-links" href="#">
              <i className="fas fa-user"></i>
              &nbsp;
              {user && user.name}
            </a>
          </li>

          <li>
            <a className="nav-links-mobile" href="#">
              Logout <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
        <Button type={undefined} buttonStyle={undefined} buttonSize={undefined}
          onClick={() => {
            localStorage.removeItem("sfuit");
            props.history.push("/login");
          } }         >
          Logout <i className="fas fa-sign-out-alt"></i>
        </Button>

        <Modal open={open} onClose={onCloseModal}>
          <div className="popup">
            <h3 className="mt_30 name">High Teperature</h3>
            <p className="para">
              It feels like you have fever, please check yourselves!!
            </p>
            <div className="line"></div>
          </div>
          <div className="center">
            <a href="#" className="allnotify">
              View all Notifications
            </a>
          </div>
        </Modal>
      </nav>
    );
  }

export default Navbar;