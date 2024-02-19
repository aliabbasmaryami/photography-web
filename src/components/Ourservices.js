import React from "react";
import img10 from "./project/img10.jpg.png";
import img11 from "./project/img11.jpg.png";
import img12 from "./project/img12.jpg.png";
import img13 from "./project/img13.jpg.png";
import img14 from "./project/img14.jpg.png";
import img15 from "./project/img15.jpg.png";

const Ourservices = () => {
  return (
    <div className="our_services">
    <h1>our <span className="services">Services</span></h1>
      <div className="first3">
        <div className="wedding">
          <div className="wedding_text">
            <h2>wedding shoot</h2>
          </div>
        </div>
        <div className="potrait_photography">
          <div className="wedding_text">
            <h2>porait photogrphy</h2>
          </div>
        </div>
        <div className="travel_photography">
          <div className="wedding_text">
            <h2>travel photogrphy</h2>
          </div>
        </div>
      </div>
      <div className="second3">
        <div className="product_photography">
          <div className="wedding_text">
            <h2>product_photography</h2>
          </div>
        </div>
        <div  className="fashion_photography">
          <div className="wedding_text">
            <h2>fashion_photography</h2>
          </div>
        </div>
        <div  className="sports_photography">
          <div className="wedding_text">
            <h2>sports_photography</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
