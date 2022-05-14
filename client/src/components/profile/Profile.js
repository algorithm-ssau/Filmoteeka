import React from "react";
import "./Profile.css";
import profileImage from "./Profile.png";

export default function Profile() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const stls = {
    img: {
      display: isMenuVisible ? "none" : "block",
    },
    menu: {
      display: isMenuVisible ? "block" : "none",
    },
  };

  return (
    <>
      <div id="box1">
        <div>
          <img
            src={profileImage}
            onClick={() => setIsMenuVisible(true)}
            width="70px"
            height="70px"
            style={stls.img}
          />
        </div>
        <div className="menu-main" style={stls.menu}>
          <ul>
            <li onClick={() => setIsMenuVisible(false)} id="krest">
              ×
            </li>
            <li>Work</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
