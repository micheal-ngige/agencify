import React from "react";
import "./VehicleInfoForm.css";

const VehicleInfo = () => {
  const handleUploadClick = () => {
    document.getElementById("logbookUpload").click();
  };

  return (
    <div className="insurance-form">
      <div className="form-title">
        <span className="title-left">
          1. Sum insured: 1,000,000 premium: 47,500
        </span>
        <span className="title-right" onClick={handleUploadClick}>
          Upload log book &gt;
        </span>
        <input
          type="file"
          id="logbookUpload"
          style={{ display: "none" }}
          accept=".pdf,.jpg,.jpeg,.png"
        />
      </div>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="regNo">Reg No.</label>
            <input type="text" id="regNo" />
          </div>
          <div className="form-group">
            <label htmlFor="logbookNo">Logbook No</label>
            <input type="text" id="logbookNo" />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <select id="model">
              <option>Saloon</option>
              <option>Saloon2</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="bodyType">Body type</label>
            <select id="bodyType">
              <option>Sedan</option>
              <option>Sedan2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="make">Make</label>
            <select id="make">
              <option>Toyota</option>
              <option>Toyota2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="colour">Colour</label>
            <input type="text" id="colour" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sittingCapacity">Sitting capacity</label>
            <input type="text" id="sittingCapacity" />
          </div>
          <div className="form-group">
            <label htmlFor="chassisNo">Chassis no.</label>
            <input type="text" id="chassisNo" />
          </div>
          <div className="form-group">
            <label htmlFor="engineNo">Engine no.</label>
            <input type="text" id="engineNo" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tonnage">Tonnage</label>
            <input type="text" id="tonnage" />
          </div>
          <div className="form-group">
            <label htmlFor="coverStartDate">Cover start date</label>
            <input type="date" id="coverStartDate" />
          </div>
          <div className="field-beside-cover">
            <div className="top-info">
              <span className="greater-than-sign">&gt;</span>
              <span>
                KBH 109K, Toyota <span className="ksh">KES 47,500</span>
              </span>
            </div>
            <span className="cover">Comprehensive cover</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VehicleInfo;
