import React, { useState } from "react";
import axios from 'axios';
import "../CheckoutPage.css"; // optional for styling
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import { useLocation, navigate } from "@reach/router";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const CheckoutPage = () => {
  // State for billing details
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    gst: "",
    coursename: "",
    totalprice: "",
    address: "",
    state: "",
    zip: "",
  });

  const [responseId, setResponseId] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [useTotal, setUseTotal] = useState(false);

  // Extract query parameters
  const courseNametitle = searchParams.get("courseName") || "empty";
  const priceString = searchParams.get("price");  // e.g. "14500"
  const subTotalString = searchParams.get("subTotal"); // e.g. "2500"
  // Convert them to a number
  const priceflot = parseFloat(priceString) || 0;
  const subTotal = parseFloat(subTotalString) || 0;

  // Now .toFixed() works
  const priceDisplay = priceflot;     // "14500.00"
  const subTotalDisplay = subTotal.toFixed(2); // "2500.00"
  const priceNum = parseFloat(priceString) || 0;
  // Calculate subtotal, GST, and total
  const gstRate = 0.18; // 18% GST rate (example)
  const gstAmount = priceNum * gstRate;
  const total = priceNum + gstAmount;
  const [loader, setLoader] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [price, setPrice] = useState(total);
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


  // For handling validation errors
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
    zip: "",
  });

  // Example items or cart data (if you have a cart flow)
  // Convert them to numbers

  // Handler for billing details changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // Clear the error for this field if it exists
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate required fields
  const validateFields = () => {
    const newErrors = {};
    let isValid = true;

    // Required fields: fullName, email, mobile, coursename, totalprice, address, state, zip
    if (!billingDetails.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }
    if (!billingDetails.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!billingDetails.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
      isValid = false;
    }
    if (!billingDetails.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }
    if (!billingDetails.state.trim()) {
      newErrors.state = "State is required";
      isValid = false;
    }
    if (!billingDetails.zip.trim()) {
      newErrors.zip = "Zip is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handler for form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    // 1. Check if required fields are valid
    if (!validateFields()) {
      return; // Stop if validation fails
    }

    try {
      setLoader("loading"); // or setLoader(true);

      // Example: Submitting to a Contact Form 7 endpoint (adjust as needed)
      const url = "https://tryscrumlive.vervebot.io/wp-json/contact-form-7/v1/contact-forms/12456/feedback?_wpcf7_unit_tag=wpcf7-8d74a4f";

      // Prepare form data (field names depend on your backend or CF7 setup)
      const formData = new FormData();
      formData.append("your-fullName", billingDetails.fullName);
      formData.append("your-email", billingDetails.email);
      formData.append("your-mobile", billingDetails.mobile);
      formData.append("your-company", billingDetails.company || "");
      formData.append("your-gst", billingDetails.gst || "");
      formData.append("your-coursename", courseNametitle);
      formData.append("your-totalprice", useTotal ? total : priceDisplay);
      formData.append("your-address", billingDetails.address);
      formData.append("your-state", billingDetails.state);
      formData.append("your-zip", billingDetails.zip);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      

      // Post to CF7 (or your custom endpoint)
      const res = await axios.post(url, formData, config);
      createRazorpayOrder(useTotal ? total : priceDisplay);
      // If successful, show message & reset form
      setSubmissionMessage(res?.data?.message || "Form submitted successfully!");
      setBillingDetails({
        fullName: "",
        email: "",
        mobile: "",
        company: "",
        gst: "",
        address: "",
        state: "",
        zip: "",
      });
     
      setLoader("");
      navigate(-1);
    } catch (error) {
      console.error(error);
      setSubmissionMessage("An error occurred. Please try again.");
      setLoader("");
    }
  };

  return (
    <Layout pageTitle="tryScrum | Checkout" pageName="checkout">
      <NavTwo />
      <div className="checkout-container">
        {/* Left side: Billing Details */}
        <div className="checkout-left">
          <h2>Billing Details</h2>
          <form onSubmit={submitHandler}>
          <div class="two-column-row">

            <div className="form-group">

              <label>Full Name <span style={{ color: "red" }}>*</span>:</label>
              <input
                type="text"
                name="fullName"
                value={billingDetails.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Email <span style={{ color: "red" }}>*</span>:</label>
              <input
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Mobile <span style={{ color: "red" }}>*</span>:</label>
              <input
                type="text"
                name="mobile"
                value={billingDetails.mobile}
                onChange={handleInputChange}
                placeholder="0000000000"
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>

            <div className="form-group">
              <label>Company Name (optional):</label>
              <input
                type="text"
                name="company"
                onChange={handleInputChange}
                placeholder="Example LLC"
              />
            </div>
</div>
<div class="single-column-row">
            <div className="form-group">
              <label>GST Number (optional):</label>
              <input
                type="text"
                name="gst"
                value={billingDetails.gst}
                onChange={handleInputChange}
                placeholder="123ABC4567Z"
              />
            </div>

            <div className="form-group">
              <label>Address <span style={{ color: "red" }}>*</span>:</label>
              <input
                type="text"
                name="address"
                value={billingDetails.address}
                onChange={handleInputChange}
                placeholder="123 Main Street"
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label>State <span style={{ color: "red" }}>*</span>:</label>
              <input
                type="text"
                name="state"
                value={billingDetails.state}
                onChange={handleInputChange}
                placeholder="NY"
              />
              {errors.state && <span className="error">{errors.state}</span>}
            </div>

            <div className="form-group">
              <label>Zip <span style={{ color: "red" }}>*</span>:</label>
              <input
                type="text"
                name="zip"
                value={billingDetails.zip}
                onChange={handleInputChange}
                placeholder="10001"
              />
              {errors.zip && <span className="error">{errors.zip}</span>}
            </div>
            <div className="form-group">
              <label>
              <input
          type="checkbox"
          id="useTotalCheckbox"
          checked={useTotal}
          onChange={(e) => setUseTotal(e.target.checked)}
        /> check if you want GST invoice
        </label>
            </div>
            {/* If you want the user to confirm or proceed from here */}
            <button className="pay-button" type="submit">
              {loader === "loading" ? "Processing..." : "Pay Now"}
            </button>
            </div>
          </form>
          {/* Success / Error message */}
          {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
        </div>

        {/* Right side: Payment Summary */}
        <div className="checkout-right">
        <h3>Course: {courseNametitle}</h3>
          <h2>Payment Summary</h2>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${priceDisplay}</span>
          </div>
          <div className="summary-item">
          {useTotal ?
          <>
            <span>GST (18%):</span>
            <span>${gstAmount.toFixed(2)}</span>
            </>
            :""
          }
          </div>
          <div className="summary-item total">
            <span>Total:</span>
            <span>${useTotal ? total : priceDisplay}</span>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default CheckoutPage;
