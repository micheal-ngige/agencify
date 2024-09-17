import React from "react";
import "./ClientInformation.css";

function ClientInformation() {
  return (
    <div className="client-information">
      <h2>Client Information</h2>
      <p>Select a client or create a new one to proceed.</p>
      <div className="client-select">
        <div className="client-header">
          <p className="client-select-text">
            Select Client
            <span className="create-new-client"> | Create new Client</span>
          </p>
          <button className="add-risk-btn">Add Risk</button>
        </div>
        <div className="client-options">
          <div className="custom-select">
            <input
              type="text"
              placeholder="John Doe"
              className="client-input-with-arrow"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* Other content such as vehicle details, etc. */}
    </div>
  );
}

export default ClientInformation;
