import React from "react";

const Forms = () => {
  return (
    <div className="form">
      <h1>
        let's <span className="colour">talks</span>
      </h1>
      <div className="form1">
        <div className="main-1">
          <h2>Let’s work together</h2>
          <p>We are available 24 hours</p>
          <h4>Phone</h4>
          <p>+105 773 321 7891</p>
          <h4>Address</h4>
          <p>Somewhere on Earth.</p>
          <h4>Email</h4>
          <p>photographydemo10@gmail.com</p>
        </div>
        <div className="main-2">
          <form>
            <label>
              <input
                type="text"
                placeholder="Types your name"
                className="input-main"
              ></input>
            </label>

            <label>
              <input
                type="text"
                placeholder="Types your gmail"
                className="input-main"
              ></input>
            </label>

            <label>
              <input
                type="text"
                placeholder="Types your Subject"
                className="input-main"
              ></input>
            </label>

            <label>
              <input
                type="text"
                placeholder="Types your Message"
                className="input-main"
              ></input>
            </label>

            <div className="button"><button className="btn">Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
