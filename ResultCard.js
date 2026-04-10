// Import React to use JSX
import React from "react";

// This component receives 'result' from App.js as a prop
function ResultCard({ result }) {

  // ================= CONDITIONAL RENDERING =================
  // If result is empty or not available, show nothing
  if (!result) return null;

  // ================= UI DISPLAY =================
  return (

    // Main container for result (styled using CSS class "result")
    <div className="result">

      {/* Title */}
      <h2>Prediction Result</h2>

      {/* Display the result text dynamically */}
      <p>{result}</p>

    </div>
  );
}

// Export component so App.js can use it
export default ResultCard;
