import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (from && to && date) {
      navigate("/flight-booking");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <h2>Search Flights</h2>
      <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="book-flight" type="submit">Search Flights</button>
    </form>
  );
};

export default FlightSearch;
