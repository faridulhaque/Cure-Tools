import React from "react";
import "./summary.css";
import banner from "./summary.jpg";

const Summary = () => {
  return (
    <div className="summary" style={{ position: "relative" }}>
      <h2 className="text-center my-5">Business Summary</h2>
      <img className="summary-img" src={banner} alt="banner" />
      <div className="summary-info-container">
        <div className="summary-info">
          <div className="client-summary">
          <i className="fa-solid fa-people-group"></i>
            <h2 className="text-center text-orange">Clients</h2>
            <h3 className="text-center text-orange">10K+</h3>
          </div>
          <div className="review-summary">
          <i class="fa-solid fa-heart-circle-plus"></i>
            <h2 className="text-center text-orange">Reviews</h2>
            <h3 className="text-center text-orange">8K+</h3>
          </div>
          <div className="worker-summary">
          <i className="fa-solid fa-people-carry-box"></i>
            <h2 className="text-center text-orange">Workers</h2>
            <h3 className="text-center text-orange">200+</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Summary;
