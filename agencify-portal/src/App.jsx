import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import VehicleInfo from "./components/VehicleInfoForm/VehicleInfoForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
      
    </div>
  );
}

export default App;
