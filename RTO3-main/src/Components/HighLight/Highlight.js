// Highlight.js

import React from 'react';
import './Highlight.css';
import { Link } from 'react-router-dom';
import { FaCar } from "react-icons/fa";
import { FcRules } from "react-icons/fc";
import { GiIndiaGate } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";

const Highlight = () => {
  return (
    <>
      <div className="header">
        <h1>RTO Services</h1>
      </div>
      <div className="container">
        <Link to="/carPlateChecker" className="left-container-link">
          <div className="left">
            <div className="left-inner">
              <div className="icon">
                <FaCar />
              </div>
              <div className="headline">Odd-Even Vehicle Compliance Checker</div>
              <div className="desc">Traffic regulation strategy that checks the compliance of a vehicle to odd-even scheme</div>
            </div>
          </div>
        </Link>
        {/* Wrap the center container in a Link */}
        <Link to="/policies" className="center-container-link">
          <div className="center">
            <div className="left-inner">
              <div className="icon">
                <FcRules />
              </div>
              <div className="headline">Acts, Policies & Rules</div>
              <div className="desc">This module provides users with detailed information about common regional transportation options</div>
            </div>
          </div>
        </Link>
        {/* Add a Link to the right container */}
        <Link to="/stateSelection" className="right-container-link">
          <div className="right">
            <div className="left-inner">
              <div className="icon">
                <GiIndiaGate />
              </div>
              <div className="headline">RTO Code</div>
              <div className="desc">Provide users with the specific RTO code corresponding to their selected state or region</div>
            </div>
          </div>
        </Link>
        {/* Add a Link to the extreme right container */}
        <Link to="/directionsMap" className="extreme-right-container-link">
          <div className="extreme-right">
            <div className="left-inner">
              {/* Add icon for the extreme right container */}
              <div className="icon"> <FaMapMarkedAlt /></div>
              <div className="headline">Route Mapper Module</div>
              <div className="desc">Users input their destination and pickup points for a convenient and efficient route representation</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Highlight;
