import React, { useState } from "react";
import "./QuoteDetails.css";

function QuoteDetails() {
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles((prevState) => ({
        ...prevState,
        [id]: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="quote-details">
      <div className="documents-section">
        <h2>2. Documents</h2>

        <div className="document-uploads">
          {["logbook", "license", "kra", "id-front", "id-back"].map(
            (doc, index) => (
              <div key={index} className="document-wrapper">
                <p className="document-p">{`Upload ${doc
                  .replace("-", " ")
                  .replace(/^\w/, (c) => c.toUpperCase())}`}</p>
                <div className="document-upload">
                  <label htmlFor={`${doc}-upload`}>
                    {`Upload ${doc
                      .replace("-", " ")
                      .replace(/^\w/, (c) => c.toUpperCase())}`}
                  </label>
                  <input
                    type="file"
                    id={`${doc}-upload`}
                    className="file-input"
                    onChange={(e) => handleFileChange(e, doc)}
                  />
                  {uploadedFiles[doc] && (
                    <img
                      src={uploadedFiles[doc]}
                      alt={`Uploaded ${doc}`}
                      className="uploaded-preview"
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default QuoteDetails;
