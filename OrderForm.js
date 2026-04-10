// Import React and useState hook
// useState is used to store and manage user input
import React, { useState } from "react";

// This component receives a function (predictDelay) from App.js
function OrderForm({ predictDelay }) {

  // ================= STATE VARIABLES =================
  // These store user input values

  const [weather, setWeather] = useState("");   // stores weather value
  const [traffic, setTraffic] = useState("");   // stores traffic value
  const [supplier, setSupplier] = useState(""); // stores supplier rating

  // ================= FORM SUBMIT FUNCTION =================
  const handleSubmit = (e) => {

    e.preventDefault(); 
    // Prevents page reload when form is submitted

    // Send all input data to App.js
    predictDelay({
      weather,
      traffic,
      supplier
    });
  };

  // ================= UI (FORM) =================
  return (

    // Form element with submit function
    <form className="form" onSubmit={handleSubmit}>

      {/* Title of form */}
      <h2>Create Shipment Order</h2>

      {/* ================= WEATHER INPUT ================= */}
      <select 
        onChange={(e) => setWeather(e.target.value)} 
        required
      >
        {/* Default option */}
        <option value="">Select Weather</option>

        {/* Options */}
        <option>Clear</option>
        <option>Rain</option>
        <option>Storm</option>
      </select>

      {/* ================= TRAFFIC INPUT ================= */}
      <select 
        onChange={(e) => setTraffic(e.target.value)} 
        required
      >
        <option value="">Select Traffic</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      {/* ================= SUPPLIER INPUT ================= */}
      <input
        type="text"
        placeholder="Supplier Rating"
        onChange={(e) => setSupplier(e.target.value)}
      />

      {/* ================= SUBMIT BUTTON ================= */}
      <button type="submit">
        Predict Delay
      </button>

    </form>
  );
}

// Export component to use in App.js
export default OrderForm;
