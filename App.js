// Import React and useState (to store result)
import React, { useState } from "react";

// Import all components
import Dashboard from "./components/Dashboard";
import OrderForm from "./components/OrderForm";
import ResultCard from "./components/ResultCard";

// Import CSS for styling
import "./App.css";

// Main App Component (ROOT of your application)
function App() {

  // ================= STATE =================
  // This will store the prediction result
  const [result, setResult] = useState("");

  // ================= MAIN LOGIC (FAKE AI) =================
  // This function receives data from OrderForm
  const predictDelay = (data) => {

    // Condition 1: Bad weather + high traffic → High delay
    if (
      (data.weather === "Rain" || data.weather === "Storm") &&
      data.traffic === "High"
    ) {
      setResult("⚠️ High Delay Risk");
    }

    // Condition 2: Medium traffic → Medium delay
    else if (data.traffic === "Medium") {
      setResult("⏳ Medium Delay Risk");
    }

    // Condition 3: Otherwise → Low delay
    else {
      setResult("✅ Low Delay Risk");
    }
  };

  // ================= UI =================
  return (

    // Main container
    <div className="container">

      {/* Title */}
      <h1 className="title">
        AI Supply Chain Disruption Predictor
      </h1>

      {/* Dashboard Section (Top cards) */}
      <Dashboard />

      {/* Form Section (User input) */}
      {/* Passing function as prop */}
      <OrderForm predictDelay={predictDelay} />

      {/* Result Section (Output) */}
      {/* Passing result as prop */}
      <ResultCard result={result} />

    </div>
  );
}

// Export App
export default App;
