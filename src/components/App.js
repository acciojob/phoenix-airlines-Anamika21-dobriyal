import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FlightSearch from "./components/FlightSearch";
import FlightBooking from "./components/FlightBooking";
import Confirmation from "./components/Confirmation";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>{/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
