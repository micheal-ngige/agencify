import React from "react";
import QuoteDetails from "../QuoteDetails/QuoteDetails";
import ClientInformation from "../ClientInformation/ClientInformation";
import VehicleInfo from "../VehicleInfoForm/VehicleInfoForm";
import Valuer from "../Valuer/Valuer";
import PaymentPlans from "../PaymentPlans/PaymentPlans";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import "./Dashboard.css";




function Dashboard() {
  return (
    <div className="dashboard">
      <div className="quote details">
        <h2>Quote Details</h2>
        <button className="add-v">Add vehicle</button>
        <p>Awesome! Provide your vehicle schedules to checkout now!</p>

        <div className="divider"></div>
      </div>

      <div className="dashboard-sections">
        <ClientInformation />
        <VehicleInfo />
        <QuoteDetails />
        <Valuer />
        <PaymentPlans />
        <PaymentMethod />
      </div>
    </div>
  );
}

export default Dashboard;
