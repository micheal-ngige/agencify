import React from "react";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <div className="payment-method-section">
      <h3>5. Payment method</h3>
      <div className="payment-method-options">
        <label>
          <input
            type="radio"
            name="payment-method"
            value="mpesa"
            defaultChecked
          />
          <span>
            Mpesa <br /> One click Mpesa payment
          </span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
