import React from "react";
import "./PaymentsPlans.css";

const PaymentPlans = () => {
  return (
    <div className="payment-plans-section">
      <h3>4. Payment plans</h3>
      <div className="payment-plan-options">
        <label>
          <input type="radio" name="payment" value="annual" />
          <span>Annual- Pay a full premium of KES 100,490.00</span>
        </label>
        <label>
          <input type="radio" name="payment" value="monthly" defaultChecked />
          <span>Monthly- Pay first installment of KES 33,496.70</span>
        </label>
        <label>
          <input type="radio" name="payment" value="40:30:30" />
          <span>40:30:30- Pay first installment of KES 16,000.00</span>
        </label>
        <label>
          <input type="radio" name="payment" value="50:50" />
          <span>50:50- Pay first installment of KES 16,000.00</span>
        </label>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default PaymentPlans;
