import React from "react";
import "./Valuer.css";

const Valuer = () => {
  return (
    <div className="valuer-section">
      <h3>3. Valuer</h3>
      <label htmlFor="valuer-select">Select valuer</label>
      <select id="valuer-select" className="valuer-dropdown">
        <option>Regent </option>
        <option>Regent2</option>
      </select>
      <div className="divider"></div>
    </div>
  );
};

export default Valuer;
