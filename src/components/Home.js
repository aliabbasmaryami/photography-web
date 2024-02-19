import React from "react";
import img2 from "./project/unsplash.png";
import img3 from './project/Ellipse.jpg'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="images">
          <img src={img2} />
        </div>
        <div className="para">
          <img src={img3} />
          <p>Focus</p>
          <h1>Photography</h1>
          <p>Services</p>
        </div>
      </div>
    </>
  );
};

export default Home;
