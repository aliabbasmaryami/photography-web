import React from "react";
import img1 from "./project/Vector.png";
// import Hamburger, {hamburger} from "hamburger-react"

const Header = () => {
  return (
    <div className="main">
    
      <div class="header">
        <div class="logo">
          <img src={img1} />
          <h2>PHOTOGRAPHY</h2>
          
        </div>
        <div class="menu">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li className="key">Join us</li>
          </ul>
          
        </div>

      </div>
    </div>
  );
};

export default Header;
