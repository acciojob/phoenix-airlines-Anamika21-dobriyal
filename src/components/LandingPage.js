import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Phoenix Airlines</h1>
      <button onClick={() => navigate("/flight-search")}>Search Flights Here</button>
    </div>
  );
};

export default LandingPage;
