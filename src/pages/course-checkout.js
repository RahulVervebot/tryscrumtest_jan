import React, { useState } from "react";
import axios from "axios";
import "../CheckoutPage.css"; // your updated CSS file
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import { useLocation, navigate } from "@reach/router";
import imgsecurepayment from "../assets/images/razorpay-payment.jpeg";

const CheckoutPage = () => {
  // Single source for blank fields of one ticket
  const blankDetails = {
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    gst: "",
    address: "",
    state: "",
    zip: "",
  };

  // Instead of single object, store an array for multiple tickets
  const [billingDetailsArray, setBillingDetailsArray] = useState([blankDetails]);

  const [responseId, setResponseId] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [loader, setLoader] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  // For handling validation errors per ticket
  const [errors, setErrors] = useState([]);

  // For GST checkbox
  const [useTotal, setUseTotal] = useState(false);

  // For toggling step screens
  const [isProceedClicked, setIsProceedClicked] = useState(false);

  // Extract query params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseNametitle = searchParams.get("courseName") || "empty";
  const courseDate = searchParams.get("courseDate") || "";
  const priceString = searchParams.get("price"); // e.g. "14500"
  const priceNum = parseFloat(priceString) || 0;

  // GST calculation
  const gstRate = 0.18;
  const subTotal = priceNum * billingDetailsArray.length;
  const gstAmount = subTotal * gstRate;

  // If 'useTotal' is true, we add GST. Otherwise just show subTotal
  let total;
  useTotal ? (total = subTotal + gstAmount) : (total = subTotal);

  // Back-end or CF7
  const backendURL = "https://tryscrumtest.vervebot.io/create-order.php";

  // Utility to check server
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

  // Create RZP order
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

  // Open the RZP payment
  const handleRazorpayScreen = async (amount, orderId) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Failed to load Razorpay SDK.");
      return;
    }
    const options = {
      key: "rzp_test_eCBnZYOjhB6B6V", // replace with your Razorpay key
      amount: total * 100,
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

  // Load script for RZP
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle the number of tickets (participants)
  const handleTicketIncrement = () => {
    setBillingDetailsArray((prev) => [...prev, { ...blankDetails }]);
  };

  const handleTicketDecrement = () => {
    setBillingDetailsArray((prev) =>
      prev.length > 1 ? prev.slice(0, prev.length - 1) : prev
    );
  };

  // Generic input handler for multiple tickets
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setBillingDetailsArray((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [name]: value };
      return updated;
    });
    // Clear the error for that particular ticket & field
    setErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      if (!newErrors[index]) {
        newErrors[index] = {};
      }
      newErrors[index][name] = "";
      return newErrors;
    });
  };

  // Validation
  const validateFields = () => {
    let allValid = true;
    const newErrors = [];

    billingDetailsArray.forEach((ticket, index) => {
      const ticketErrors = {};
      // Required fields
      if (!ticket.fullName.trim()) {
        ticketErrors.fullName = "Full Name is required";
        allValid = false;
      }
      if (!ticket.email.trim()) {
        ticketErrors.email = "Email is required";
        allValid = false;
      }
      if (!ticket.mobile.trim()) {
        ticketErrors.mobile = "Mobile is required";
        allValid = false;
      }
      if (!ticket.address.trim()) {
        ticketErrors.address = "Address is required";
        allValid = false;
      }
      if (!ticket.state.trim()) {
        ticketErrors.state = "State is required";
        allValid = false;
      }
      if (!ticket.zip.trim()) {
        ticketErrors.zip = "Zip is required";
        allValid = false;
      }

      newErrors[index] = ticketErrors;
    });

    setErrors(newErrors);
    return allValid;
  };

  // "Proceed" button (Step 1 -> Step 2) toggling
  const proceedHandler = (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    setIsProceedClicked(true); // Hide the form portion and show the payment portion
  };

  // Edit details (go back)
  const editDetails = () => {
    setIsProceedClicked(false);
  };

  // Final Submit
  const submitHandler = async (e) => {
    e.preventDefault();
    // Validate again in case user changed something
    if (!validateFields()) return;

    try {
      setLoader("loading");

      // CF7 endpoint
      const url =
        "https://tryscrumlive.vervebot.io/wp-json/contact-form-7/v1/contact-forms/12456/feedback?_wpcf7_unit_tag=wpcf7-8d74a4f";

      // Build the formData
      const formData = new FormData();

      // Prepare joined strings for each field
      const allFullNames = billingDetailsArray
        .map((bd, i) => `Ticket ${i + 1}: ${bd.fullName}`)
        .join(", ");
      const allEmails = billingDetailsArray
        .map((bd) => bd.email)
        .join(", ");
      const allMobiles = billingDetailsArray
        .map((bd) => bd.mobile)
        .join(", ");
      const allCompanies = billingDetailsArray
        .map((bd) => bd.company)
        .join(", ");
      const allGst = billingDetailsArray
        .map((bd) => bd.gst)
        .join(", ");
      const allAddress = billingDetailsArray
        .map((bd) => bd.address)
        .join(", ");
      const allStates = billingDetailsArray
        .map((bd) => bd.state)
        .join(", ");
      const allZips = billingDetailsArray
        .map((bd) => bd.zip)
        .join(", ");

      // Append them to formData
      formData.append("your-fullName", allFullNames);
      formData.append("your-email", allEmails);
      formData.append("your-mobile", allMobiles);
      formData.append("your-company", allCompanies);
      formData.append("your-gst", allGst);
      formData.append("your-address", allAddress);
      formData.append("your-state", allStates);
      formData.append("your-zip", allZips);

      // Append course info
      formData.append("your-coursename", courseNametitle);
      formData.append("your-coursedate", courseDate);
      formData.append("your-totalprice", total);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };

      // Submit to CF7
      const res = await axios.post(url, formData, config);
      console.log("total", total);

      // Next, create the Razorpay order
      createRazorpayOrder(total);

      // If successful, show message & reset
      setSubmissionMessage(res?.data?.message || "Form submitted successfully!");
      setBillingDetailsArray([blankDetails]); // reset to 1 ticket
      setIsProceedClicked(false);
      setLoader("");

      // Optionally navigate
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
      <form onSubmit={submitHandler}>
        <div className="checkout-main-container">
          {/* Main wrapper with two columns: Left 70%, Right 30% */}
          <div className="checkout-container">
            {/* LEFT Column (70%) */}
            <div className="checkout-left-col">

              {/* Row 1: Basic Details (red-ish background) */}
              <div className="checkout-left-row1">
                <h4 style={{ fontWeight: "700", marginBottom: "5%" }}>
                  <span
                    style={{
                      backgroundColor: "#ff0000",
                      color: "#fff",
                      padding: "1% 2%",
                      borderRadius: "20px",
                      fontSize: "16px",
                    }}
                  >
                    1
                  </span>
                  &nbsp;Basic Details
                </h4>
                {/* Edit button toggles the forms to be visible again */}
                {isProceedClicked && (
                  <div className="billing-edit" onClick={editDetails}>
                    Edit Details
                  </div>
                )}

                {/* The multiple forms for each ticket */}
                {!isProceedClicked && (
                  <div className="proceed-form">
                    {billingDetailsArray.map((ticketData, index) => (
                      <div key={index} style={{ marginBottom: "20px" }}>
                        <h5>Ticket {index + 1}</h5>
                        {/* Two-column row #1 */}
                        <div className="two-column-row">
                          {/* Full Name */}
                          <div className="form-group">
                            <input
                              type="text"
                              name="fullName"
                              value={ticketData.fullName}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="Full Name*"
                            />
                            {errors[index]?.fullName && (
                              <span className="error">{errors[index].fullName}</span>
                            )}
                          </div>

                          {/* Email */}
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              value={ticketData.email}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="Email*"
                            />
                            {errors[index]?.email && (
                              <span className="error">{errors[index].email}</span>
                            )}
                          </div>

                          {/* Mobile */}
                          <div className="form-group">
                            <input
                              type="text"
                              name="mobile"
                              value={ticketData.mobile}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="Mobile Number*"
                            />
                            {errors[index]?.mobile && (
                              <span className="error">{errors[index].mobile}</span>
                            )}
                          </div>

                          {/* Company */}
                          <div className="form-group">
                            <input
                              type="text"
                              name="company"
                              value={ticketData.company}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="Company Name (optional)"
                            />
                          </div>
                        </div>
                        
                        {/* Single-column row */}
                        <div className="single-column-row">
                          {/* GST */}
                          <div className="form-group">
                            <input
                              type="text"
                              name="gst"
                              value={ticketData.gst}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="GST Number (optional)"
                            />
                          </div>

                          {/* Address */}
                          <div className="form-group">
                            <input
                              type="text"
                              name="address"
                              value={ticketData.address}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="Address"
                            />
                            {errors[index]?.address && (
                              <span className="error">{errors[index].address}</span>
                            )}
                          </div>
                        </div>

                        {/* Two-column row #2 */}
                        <div className="two-column-row">
                          {/* State */}
                          <div className="form-group">
                            <input
                              type="text"
                              name="state"
                              value={ticketData.state}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="State"
                            />
                            {errors[index]?.state && (
                              <span className="error">{errors[index].state}</span>
                            )}
                          </div>
                          {/* Zip */}
                          <div className="form-group">
                            <input
                              type="text"
                              name="zip"
                              value={ticketData.zip}
                              onChange={(e) => handleInputChange(e, index)}
                              placeholder="Zip Code"
                            />
                            {errors[index]?.zip && (
                              <span className="error">{errors[index].zip}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* One Proceed button at the end */}
                    <button
                      className="pay-button"
                      style={{ background: "#ff0000" }}
                      onClick={proceedHandler}
                    >
                      Proceed
                    </button>
                  </div>
                )}
              </div>

              {/* Row 2: Secure Payment (yellow-ish background) */}
              <div className="checkout-left-row2">
                <h4 style={{ fontWeight: "700", marginBottom: "5%" }}>
                  <span
                    style={{
                      backgroundColor: "#F4B032",
                      color: "#fff",
                      padding: "1% 2%",
                      borderRadius: "20px",
                      fontSize: "16px",
                    }}
                  >
                    2
                  </span>
                  &nbsp;Secure Payment
                </h4>

                {/* Only visible after 'Proceed' is clicked */}
                {isProceedClicked && (
                  <div className="proceed-button show">
                    <img
                      src={imgsecurepayment}
                      style={{ width: "200px" }}
                      alt="secure-payment"
                    />
                    <h6 style={{ marginTop: "1rem" }}>
                      Your payments ₹{total} are processed securely via Razorpay,
                      ensuring that every transaction is protected by advanced
                      encryption and robust security protocols.
                    </h6>
                    <button
                      className="pay-button"
                      type="submit"
                      style={{ background: "#ff0000" }}
                    >
                      {loader === "loading" ? "Processing..." : "Pay Now"}
                    </button>
                    {submissionMessage && (
                      <p className="submission-message">{submissionMessage}</p>
                    )}
                  </div>
                )}

                {/* If you want an empty placeholder when not proceeded */}
                {!isProceedClicked && (
                  <div style={{ padding: "10px 0", color: "#555" }}>
                    Please fill out basic details & click Proceed.
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT Column (30%) */}
            <div className="checkout-right-col">
              <h4 style={{ fontWeight: "700", marginBottom: "5%" }}>
                Payment Summary
              </h4>
              <h5 style={{ fontWeight: "600", marginBottom: "5%" }}>
                {courseNametitle}
              </h5>

              {/* Show the courseDate if needed */}
              {courseDate && (
                <div className="summary-item">
                  <span>{courseDate}</span>
                </div>
              )}

              {/* Ticket quantity UI */}
              <div className="ticket-quantity">
                <button type="button" onClick={handleTicketDecrement}>-</button>
                <span style={{ margin: "0 10px" }}>
                  {billingDetailsArray.length}
                </span>
                <button type="button" onClick={handleTicketIncrement}>+</button>
              </div>

              <div className="summary-item">
                <span>Subtotal:</span>
                <span>₹{subTotal.toFixed(2)}</span>
              </div>

              {/* Only show GST if user wants it */}
              {useTotal && (
                <div className="summary-item">
                  <span>GST (18%):</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    id="useTotalCheckbox"
                    checked={useTotal}
                    onChange={(e) => setUseTotal(e.target.checked)}
                  />{" "}
                  Check if you want GST invoice
                </label>
              </div>

              <div className="summary-item total">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </Layout>
  );
};

export default CheckoutPage;
