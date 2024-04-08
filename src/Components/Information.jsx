import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import CountUp from 'react-countup';

function Information() {
  return (
    <div className="information-container">
      <div className="information">
        <div className="rating">
          <i className="bi-star color-red"></i>
          <span className="main-text">
            <CountUp end={300} duration={3}/>K+</span>
          <br></br>
          <span className="sub-text">4.5 RATINGS</span>
        </div>
        <div className="Category">
          <i className="bi-person color-red"></i>
          <span className="main-text">
            <CountUp end={30} duration={5}/>M+
            </span>
          <br></br>
          <span className="sub-text">Active Users</span>
        </div>
        <div className="Category">
          <i className="bi-download color-red"></i>
          <span className="main-text">
            <CountUp end={50} duration={5}/>M+
            </span>
          <br></br>
          <span className="sub-text">Downloads</span>
        </div>
        <div className="Category">
          <i className="bi-award color-red"></i>
          <span className="main-text">Editors Choice</span>
          <br></br>
          <span className="sub-text">Awards</span>
        </div>
      </div>
    </div>
  );
}

export default Information;
