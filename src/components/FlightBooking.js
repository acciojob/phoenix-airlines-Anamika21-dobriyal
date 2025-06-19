import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FlightBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("All fields are required.");
      return;
    }
    navigate("/confirmation");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Details</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default FlightBooking;
