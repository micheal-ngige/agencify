import React, { useState } from "react";
import "./ClientInformation.css";

function ClientInformation() {
  const [selectedClient, setSelectedClient] = useState("Select client");
  const [clients, setClients] = useState([
    "John Doe",
    "Houston",
    "Michael ",
    "Sam",
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [newClientName, setNewClientName] = useState("");

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleCreateNewClient = () => {
    setIsEditing(true);
    setNewClientName("");
  };

  const handleSaveNewClient = () => {
    if (newClientName) {
      setClients((prevClients) => [...prevClients, newClientName]);
      setSelectedClient(newClientName);
      setIsEditing(false);
    }
  };

  return (
    <div className="client-information">
      <h2>Client Information</h2>
      <div className="client-select">
        <div className="client-header">
          <p className="client-select-text">
            Select Client
            <span className="create-new-client" onClick={handleCreateNewClient}>
              {" "}
              | Create new Client
            </span>
            <button className="add-r">Add risk</button>
          </p>
        </div>
        <div className="client-options">
          {isEditing ? (
            <div className="custom-select">
              <input
                type="text"
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
                className="client-input-with-arrow"
                placeholder="Select client"
              />

              {newClientName && (
                <button
                  onClick={handleSaveNewClient}
                  className="save-client-btn"
                >
                  Save
                </button>
              )}
            </div>
          ) : (
            <div className="custom-select">
              <select
                value={selectedClient}
                onChange={handleClientChange}
                className="client-input-with-arrow"
              >
                {clients.map((client) => (
                  <option key={client} value={client}>
                    {client}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default ClientInformation;
