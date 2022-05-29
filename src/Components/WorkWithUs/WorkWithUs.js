import React from "react";
import worker from "../assets/images/worker.png";
import "./WorkWithUs.css";

const WorkWithUs = () => {
  return (
    <div>
      <h2 className="text-center my-5">Work With Us</h2>
      <p className="mt-3 text-center" style={{color: 'rgb(235, 87, 87)'}}>
        More than 200 people are working with us right now. If you want to join
        us, fill up the form below
      </p>
      <div className="wwu-parent container">
        <div className="wwu-left">
          <img className="wwu-img" src={worker} alt="" />
        </div>
        <div className="wwu-right">
          <form>
            <div className="input-wrapper-parent-wwu">
              <div className="wwu-input-wrapper">
                <label className="wwu-label">Your Name</label>
                <br />
                <input required className="wwu-input" type="text" />
              </div>
              <div className="wwu-input-wrapper">
                <label className="wwu-label">Your Email</label>
                <br />
                <input required className="wwu-input" type="text" />
              </div>
              <div className="wwu-input-wrapper">
                <label className="wwu-label">Your Phone No.</label>
                <br />
                <input required className="wwu-input" type="text" />
              </div>
              <div className="wwu-input-wrapper">
                <input className="wwu-button" type="button" value="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
