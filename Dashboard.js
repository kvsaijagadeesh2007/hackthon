// Import React library to use JSX and components
import React from "react";

// This is a functional component named Dashboard
function Dashboard() {

  // return() is used to display UI (HTML-like code called JSX)
  return (

    // Main container for dashboard (styled using CSS class "dashboard")
    <div className="dashboard">

      {/* ================== CARD 1 ================== */}
      {/* This card shows total number of shipments */}
      <div className="card">

        {/* Heading of the card */}
        <h3>Total Shipments</h3>

        {/* Value displayed (currently hardcoded) */}
        <p>120</p>

      </div>

      {/* ================== CARD 2 ================== */}
      {/* This card shows delayed shipments */}
      <div className="card">

        {/* Heading */}
        <h3>Delayed Shipments</h3>

        {/* Value */}
        <p>24</p>

      </div>

      {/* ================== CARD 3 ================== */}
      {/* This card shows number of suppliers */}
      <div className="card">

        {/* Heading */}
        <h3>Suppliers</h3>

        {/* Value */}
        <p>12</p>

      </div>

    </div> // End of dashboard container
  );
}

// Export this component so it can be used in App.js
export default Dashboard;
