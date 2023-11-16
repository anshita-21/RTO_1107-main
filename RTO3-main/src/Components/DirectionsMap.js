// DirectionsMap.js

import React, { useState } from "react";
import { GoogleMap, DirectionsService, DirectionsRenderer, LoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import "./DirectionsMap.css"; // Create a CSS file for styling

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 22.5726, // Set latitude to Kolkata
  lng: 88.3639, // Set longitude to Kolkata
};

const DirectionsMap = () => {
  const [response, setResponse] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [travelMode, setTravelMode] = useState("DRIVING"); // Default travel mode
  const [showTravelMode, setShowTravelMode] = useState(false);

  const directionsCallback = (result, status) => {
    if (status === "OK") {
      setResponse(result);
    } else {
      console.error(`Error fetching directions: ${status}`);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "origin") {
      setOrigin(value);
    } else if (name === "destination") {
      setDestination(value);
    }
  };

  const handleModeChange = (mode) => {
    setTravelMode(mode);
    setShowTravelMode(false); // Close the travel mode options after selection
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (origin && destination) {
      setResponse(null); // Clear previous directions
    }
  };

  const toggleTravelMode = () => {
    setShowTravelMode(!showTravelMode);
  };

  return (
    <div className="directions-map-container">
      <div className="header">
        <h2>DIRECTION SERVICE</h2>
      </div>
      <Link to="/home" className="go-back-link">
        Go Back to Home Page
      </Link>

      <button className="toggle-travel-mode" onClick={toggleTravelMode}>
        ☰ Travel Mode
      </button>

      <div className={`travel-mode ${showTravelMode ? 'show-travel-mode' : ''}`}>
        <p>Select Mode of Travel:</p>
        <button onClick={() => handleModeChange("WALKING")}>Walking</button>
        <button onClick={() => handleModeChange("BICYCLING")}>Bicycling</button>
        <button onClick={() => handleModeChange("DRIVING")}>Driving</button>
      </div>

      <form onSubmit={handleFormSubmit}>
        <label>
          Starting Location:
          <input type="text" name="origin" value={origin} onChange={handleInputChange} placeholder="Enter starting location" />
        </label>
        <label>
          Destination:
          <input type="text" name="destination" value={destination} onChange={handleInputChange} placeholder="Enter destination" />
        </label>

        <button type="submit">Get Directions</button>
      </form>

      <LoadScript googleMapsApiKey="AIzaSyD1hFyxtfEip0QRWpWz4C2CnI-V5A2xBcs">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} clickableIcons={false}>
          {origin && destination && (
            <DirectionsService
              options={{
                destination,
                origin,
                travelMode: travelMode,
              }}
              callback={directionsCallback}
            />
          )}
          {response && <DirectionsRenderer options={{ directions: response }} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DirectionsMap;
