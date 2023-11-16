// // App.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import CarPlateChecker from "./Components/CarPlateChecker";
import Policies from "./Components/Policies";
import StateSelection from "./Components/StateSelection";
import DirectionsMap from "./Components/DirectionsMap"; // Import the DirectionsMap component

function App() {
  return (
    <Row>
      <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/carPlateChecker" element={<CarPlateChecker />} />
            <Route path="/policies" element={<Policies />} />
            {/* Add the following route for StateSelection */}
            <Route path="/stateSelection" element={<StateSelection />} />
            {/* Add the following route for DirectionsMap */}
            <Route path="/directionsMap" element={<DirectionsMap />} />
          </Routes>
        </UserAuthContextProvider>
      </Col>
    </Row>
  );
}

export default App;
