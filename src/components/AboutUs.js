import React from "react";
import img5 from "./project/camera5.png";
import img6 from "./project/camera6.png";
import img7 from "./project/camera7.png";
import img8 from "./project/camera8.png";
import img9 from "./project/camera9.png";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="text">
        <div className="line">
          <div className="line1"></div>
          <div className="text">
            <h4>About Us</h4>
          </div>
          <div className="line1"></div>
        </div>
        <h2>We Are Offering <br/> The Best <span className="photography">Photography</span><br/> Services For You</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sed
          nisi elit augue vel venenatis eget purus, libero. Ut facilisi augue
          massa auctor adipiscing a vestibulum at. Interdum tortor lacus metus,
          proin dui. A pellentesque nullam tincidunt ac rutrum nullam auctor.
        </p>
        <button className="btn">join Us</button>
      </div>
      <div className="img">
        <img className="imag" src={img5} />
        <img className="imag" src={img6} />
        <img className="imag" src={img7} />
        <img className="imag" src={img9} />
        <img className="imag" src={img8} />
      </div>
    </div>
  );
};

export default AboutUs;
