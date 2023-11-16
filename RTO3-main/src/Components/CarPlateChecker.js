// CarPlateChecker.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, CircularProgress } from "@mui/material";
import "./CarPlateChecker.css"; // Import the enhanced CSS file
import Typewriter from "typewriter-effect";
const CarPlateChecker = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const handlePlateNumberChange = (event) => {
    setPlateNumber(event.target.value);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    setCurrentDate(
      `${currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`
    );
  };

  const checkPlateNumber = () => {
    // Simple validation for non-empty input
    if (!plateNumber.trim()) {
      setError("Please enter a car plate number.");
      return;
    }

    setLoading(true);

    getCurrentDate();

    // Simulate an API request or any asynchronous operation
    setTimeout(() => {
      const lastDigit = parseInt(plateNumber.slice(-1), 10);
      const isEvenPlateNumber = lastDigit % 2 === 0;
      const isEvenDate = currentDate && new Date(currentDate).getDate() % 2 === 0;

      const schemeResult =
        isEvenPlateNumber ? "Even Scheme" : "Odd Scheme";

      if ((isEvenPlateNumber && isEvenDate) || (!isEvenPlateNumber && !isEvenDate)) {
        setResult(`Your car follows ${schemeResult} and can be on the road today.`);
      } else {
        setResult(`Your car follows ${schemeResult} and cannot be on the road today.`);
      }

      setLoading(false);
      setError("");
    }, 1000);
  };

  return (
    <div className="car-plate-container">
<Typewriter
      options={{loop : true,}}
           onInit={(typewriter) => {
            typewriter
            .typeString("ODD")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Or")
            .pauseFor(1000)
            .deleteAll()
            .typeString("EVEN")
            .pauseFor(1000)
            .deleteAll()
            .typeString("COMPILANCE CHECKER")
            .pauseFor(1000)
            .deleteAll()
            .start();
           }}
        />  
      <Typography variant="body1" className="date-info">
        {currentDate}
      </Typography>
      <TextField
        type="text"
        value={plateNumber}
        onChange={handlePlateNumberChange}
        label="Enter Car Plate Number"
        variant="outlined"
        className="input"
        placeholder="e.g., ABC123"
        error={!!error}
        helperText={error}
      />
      <Button
        onClick={checkPlateNumber}
        variant="contained"
        className="button"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Check"}
      </Button>
      {result && (
        <Typography variant="body1" className={`result ${result && "show"}`}>
          {result}
        </Typography>
      )}

      {/* Add a Link to navigate to the Highlight component */}
      <Link to="/home" className="link">
        Go to Highlight
      </Link>
    </div>
  );
};

export default CarPlateChecker;
