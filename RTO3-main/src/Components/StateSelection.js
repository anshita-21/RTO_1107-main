// StateSelection.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StateSelection.css";

const StateSelection = () => {
  const [selectedState, setSelectedState] = useState("");
  const [rtoCode, setRtoCode] = useState("");

  const rtoLocations = {
   
    "Andhra Pradesh": "AP",
    "Arunachal Pradesh": "AR",
    "Assam":	"AS",	"Bihar":	"BR",
    "Chhattisgarh":	"CG",	"Goa":	"GA",
    "Gujarat":	"GJ",	"Haryana":	"HR",
    "Himachal Pradesh":	"HP",	"Jammu and Kashmir":	"JK",
    "Jharkhand": "JH",	"Karnataka":	"KA",
    "Kerala":	"KL",	"Madhya Pradesh":	"MP",
    "Maharashtra":	"MH",	"Manipur":	"MN",
    "Meghalaya":	"ML",	"Mizoram":	"MZ",
    "Nagaland":	"NL",	"Odisha":	"OD",
    "Punjab":	"PB",	"Rajasthan":	"RJ",
    "Sikkim":	"SK",	"Tamil Nadu":	"TN",
    "Tripura":	"TR",	"Uttar Pradesh":	"UP",
    "Uttarakhand":	"UK",	"West Bengal":	"WB",
    "Telangana":	"TS",
    "Andaman and Nicobar Islands":	"AN",
"Chandigarh":	"CH",
"Dadra and nagar Haveli":	"DN",
"Daman and Diu":	"DD",
"Lakshadweep":	"LD",
"Delhi":	"DL",
"Puducherry"	:"PY"
    // ... (add all other states)
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const code = rtoLocations[selectedState] || "";
    setRtoCode(code);
  };

  return (
    <div className="state-selection-container">
      <div className="header">
        <h2>Explore RTO Codes</h2>
        <p>Find the RTO code for your state</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Select State:
          <input
            type="text"
            list="states"
            value={selectedState}
            onChange={handleStateChange}
            placeholder="Enter state"
          />
        </label>
        <datalist id="states">
          {Object.keys(rtoLocations).map((state) => (
            <option key={state} value={state} />
          ))}
        </datalist>
        <button type="submit">Get RTO Code</button>
      </form>
      {rtoCode && <p className="rto-code">RTO Code: {rtoCode}</p>}
      <div className="go-back-link">
        <Link to="/home">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default StateSelection;
