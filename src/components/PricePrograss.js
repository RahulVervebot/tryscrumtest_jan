import React, { useState } from 'react';
import axios from 'axios';

function PricePrograss() {
  const [responseId, setResponseId] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [price, setPrice] = useState(14000);

  // Backend URL
  const backendURL = "https://tryscrumtest.vervebot.io/create-order.php";

  // Check server status
  const checkServer = () => {
    axios
      .get(backendURL)
      .then((response) => {
        setServerMessage(response.data.message);
      })
      .catch((error) => {
        setServerMessage("Error connecting to server");
        console.error(error);
      });
  };

  // Create Razorpay order
  const createRazorpayOrder = (price) => {
    const data = {
      amount: price * 100, // Convert to paise
      currency: "INR",
    };

    axios
      .post(backendURL, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log("Order created:", response.data);
        handleRazorpayScreen(response.data.amount, response.data.id);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };

  // Open Razorpay payment screen
  const handleRazorpayScreen = async (amount, orderId) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Failed to load Razorpay SDK.");
      return;
    }

    const options = {
      key: "rzp_test_eCBnZYOjhB6B6V", // Replace with your Razorpay key
      amount: price*100,
      currency: "INR",
      order_id: orderId,
      name: "TryScrum",
      description: "Payment to TryScrum",
      image: "https://yourdomain.com/logo.png",
      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
      },
      theme: {
        color: "#F4C430",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Load Razorpay script
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle slider value change
  const handleSliderChange = (event) => {
    setPrice(Number(event.target.value));
  };

  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Payment Amount Slider */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="range"
          min="14500"
          max="90000"
          step="500"
          value={price}
          onChange={handleSliderChange}
          style={{
            width: "100%",
            height: "8px",
            appearance: "none",
            backgroundColor: "#ddd",
            outline: "none",
            borderRadius: "4px",
            cursor: "pointer",
            margin: "10px 0",
          }}
        />
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              width: 20px;
              height: 20px;
              background: #F4C430;
              border: 2px solid #333;
              border-radius: 50%;
              cursor: pointer;
              transition: background 0.3s;
            }
            input[type="range"]::-webkit-slider-thumb:hover {
              background: #e3b320;
            }
          `}
        </style>
        <p style={{ fontSize: "18px", textAlign: "center", color: "#fff" }}>
          Selected Amount: <span style={{ fontWeight: "bold" }}>₹{price}</span>
        </p>
      </div>

      {/* Payment Button */}
      <button
        onClick={() => createRazorpayOrder(price)}
        style={{
          backgroundColor: "#F4C430",
          color: "#333",
          border: "none",
          borderRadius: "5px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Pay ₹{price}
      </button>

      {responseId && <p>Payment ID: {responseId}</p>}
    </div>
  );
}

export default PricePrograss;
