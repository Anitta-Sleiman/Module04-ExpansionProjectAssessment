import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import Logo from "../../Photos/mouse2.jpg";
import { AuthContext } from "../../Context/AuthContext.js";
import "./Navbar.css";
import ProfileImage from "../../Photos/profileiamge.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, token, setUser } = useContext(AuthContext);
  const [collapse, setCollapsed] = useState(true);
  const executeScroll = () => {
    const element = document.getElementById("User");
    element.scrollIntoView({ behavior: "smooth" });
  };
  // console.log(user);

  //logout
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.clear();
    setUser(null);
    toast.success("Logged out successfully !");
    navigate("/home");
  };

  return (
    <header className="header-anavbar" style={{backgroundColor: "lightblue", width:"100%"}}>
      <div className="Navbar">
        <img
          src={Logo}
          alt=""
          className="anavbarLogo"
          style={{ width: "100px", height: "100px" , margin: "10px"}}
        />

        <div className="header_Links_anavbar">
          <Link to="/home" className="N-home">
            Home
          </Link>

          {user ? (
            <div className="profile-container-nav">
              <div className="profile-circle-nav">
                <img
                  src={user.image || ProfileImage}
                  alt="profile-nav"
                  className="profile-image-nav"
                />
              </div>
              <div className="dropdow-nav">
                <ul>
                  <li>
                    <a href="/user-profile">Edit Profile</a>
                  </li>
                  <li>
                    <a href="/home" onClick={handleLogout}>
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/signin" className="N-Login">
              <span className="N-Login-text">Login</span>
            </Link>
          )}
        </div>
        <FontAwesomeIcon
          icon={collapse ? faBars : faXmark}
          className="header_icon"
          onClick={() => setCollapsed(!collapse)}
        />
      </div>
    </header>
  );
};

export default Navbar;
