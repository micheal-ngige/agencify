import React from "react";
import ClientInformation from "../ClientInformation/ClientInformation";
import "./QuoteDetails.css";

function QuoteDetails() {
  return (
    <div className="quote-details">
      <ClientInformation />
      <div className="documents-section">
        <h2>2. Documents</h2>
        <div className="document-uploads">
          <div className="document-upload">
            <label>Upload Log Book:</label>
            <input type="file" />
          </div>
          <div className="document-upload">
            <label>Upload Driver's License:</label>
            <input type="file" />
          </div>
          <div className="document-upload">
            <label>Upload KRA pin:</label>
            <input type="file" />
          </div>
          <div className="document-upload">
            <label>Upload National ID (Front):</label>
            <input type="file" />
          </div>
          <div className="document-upload">
            <label>Upload National ID (Back):</label>
            <input type="file" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteDetails;
