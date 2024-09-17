import React from "react";
import QuoteDetails from "../QuoteDetails/QuoteDetails";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Quote Details</h2>
      <p>Awesome! Provide your vehicle schedules to checkout now!</p>
      <div className="divider"></div> 
      <QuoteDetails />
    </div>
  );
}

export default Dashboard;
