import React from "react";

const VehicleInfo = () => {
  return (
    <div className="insurance-form">
      <h2 className="form-title">1. Sum insured: 1,000,000 premium: 47,500</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="regNo">Reg No.</label>
            <input type="text" id="regNo" defaultValue="KBH 109K" />
          </div>
          <div className="form-group">
            <label htmlFor="logbookNo">Logbook No</label>
            <input type="text" id="logbookNo" defaultValue="3554/y1" />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <select id="model" defaultValue="Saloon">
              <option>Saloon</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="bodyType">Body type</label>
            <select id="bodyType" defaultValue="Sedan">
              <option>Sedan</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="make">Make</label>
            <select id="make" defaultValue="Toyota">
              <option>Toyota</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="colour">Colour</label>
            <input type="text" id="colour" defaultValue="3554/y1" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sittingCapacity">Sitting capacity</label>
            <input type="text" id="sittingCapacity" defaultValue="3554/y1" />
          </div>
          <div className="form-group">
            <label htmlFor="chassisNo">Chassis no.</label>
            <input type="text" id="chassisNo" defaultValue="78yuu" />
          </div>
          <div className="form-group">
            <label htmlFor="engineNo">Engine no.</label>
            <input type="text" id="engineNo" defaultValue="789yuu" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tonnage">Tonnage</label>
            <input type="text" id="tonnage" defaultValue="10tons" />
          </div>
          <div className="form-group">
            <label htmlFor="coverStartDate">Cover start date</label>
            <input type="date" id="coverStartDate" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default VehicleInfo;
