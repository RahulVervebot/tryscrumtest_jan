import React, { useState } from "react";
import "../CheckoutPage.css"; // optional for styling

const CheckoutPage = () => {
  // State for billing details
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // Example items or cart data
  const cartItems = [
    { id: 1, name: "Item A", price: 100 },
    { id: 2, name: "Item B", price: 200 },
  ];

  // Calculate subtotal, GST, and total
  const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const gstRate = 0.18; // 18% GST rate (example)
  const gstAmount = subTotal * gstRate;
  const total = subTotal + gstAmount;

  // Handler for billing details changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  // Handler for form submission (e.g., to proceed with payment)
  const handlePayNow = () => {
    // You can integrate your payment logic here
    console.log("Billing Details: ", billingDetails);
    console.log("SubTotal: ", subTotal);
    console.log("GST: ", gstAmount);
    console.log("Total: ", total);
    alert("Proceeding to Payment Gateway");
  };

  return (
    <div className="checkout-container">
      {/* Left side: Billing Details */}
      <div className="checkout-left">
        <h2>Billing Details</h2>
        <form>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={billingDetails.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={billingDetails.address}
              onChange={handleChange}
              placeholder="123 Main Street"
            />
          </div>

          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleChange}
              placeholder="New York"
            />
          </div>

          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={billingDetails.state}
              onChange={handleChange}
              placeholder="NY"
            />
          </div>

          <div className="form-group">
            <label>Zip:</label>
            <input
              type="text"
              name="zip"
              value={billingDetails.zip}
              onChange={handleChange}
              placeholder="10001"
            />
          </div>
        </form>
      </div>

      {/* Right side: Payment Summary */}
      <div className="checkout-right">
        <h2>Payment Summary</h2>
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>GST (18%):</span>
          <span>${gstAmount.toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="pay-button" onClick={handlePayNow}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
