import React from "react";
// import { Fayoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import img1 from "./project/Vector.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="head">
          <h2>Photography</h2>
          <p>Designed by Ali Shan.</p>
          <p>Copyright © 2020</p>
        </div>
        <div>
          <h2>Get in touch</h2>
          <p>info@example.com</p>
          <p>+105 773 321 7891</p>
        </div>
        <div>
          <h2>LOCATION</h2>
          <p>Somewhere on Earth.</p>
        </div>
        <div>
          <h2>SECURITY AND PRIVACY</h2>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
        </div>
        <div>
          <div className="footer-second">
            <h2>FOLLOW US</h2>
            <div className="social-icons">
              <FacebookIcon  className="icons-fb"/>
              <InstagramIcon className="icons-in"/>
              <TwitterIcon className="icons-tw"/>
              <YouTubeIcon className="icons-yo"/>
              </div>
            <p>Get the best photography services</p>
            <div className="btnn">
              <button className="button">you email here</button>
              <button className="button2">send</button>
            </div>

            <input className="checkbox" type="checkbox" id="age" name="name" />
            <label for="age">
              <p>
                By checking the box, you agree that <br /> you’re atleast 16
                years of age
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
