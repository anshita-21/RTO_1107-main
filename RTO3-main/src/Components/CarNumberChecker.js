// CarNumberChecker.js
import React, { useState } from "react";

const CarNumberChecker = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [result, setResult] = useState("");

  const checkScheme = () => {
    const lastTwoDigits = parseInt(plateNumber.slice(-2));
    const isEven = lastTwoDigits % 2 === 0;
    setResult(isEven ? "Even Scheme" : "Odd Scheme");
  };

  return (
    <div>
      <h2>Car Number Checker</h2>
      <label>
        Enter your car plate number:
        <input
          type="text"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
        />
      </label>
      <button onClick={checkScheme}>Check Scheme</button>
      {result && <p>{`Your car follows: ${result}`}</p>}
    </div>
  );
};

export default CarNumberChecker;
