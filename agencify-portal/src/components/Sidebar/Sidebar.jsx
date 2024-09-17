import React from "react";
import "./Sidebar.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="https://agencify.insure/wp-content/themes/agencify-2022/assets/images/logo.png"
          alt="Agencify Logo"
        />
      </div>
      <div className="user-info">
        <i className="fas fa-user user-icon"></i>
        <span>Hi, John Doe</span>
      </div>
      <nav>
        <ul>
          <li>
            <i className="fas fa-home"></i> My Dashboard
          </li>
          <li>
            <i className="fas fa-users"></i> Clients
          </li>
          <li>
            <i className="fas fa-file-invoice-dollar"></i> My Transactions
          </li>
        </ul>
      </nav>
      <button className="logout-btn">
        <i className="fas fa-sign-out-alt logout-icon"></i>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
