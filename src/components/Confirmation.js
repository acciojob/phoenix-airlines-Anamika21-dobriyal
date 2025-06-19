import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your ticket has been successfully booked.</p>
      <button onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
};

export default Confirmation;
