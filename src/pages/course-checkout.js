import React, { useState } from "react";
import axios from "axios";
import "../CheckoutPage.css"; // your updated CSS file
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import { useLocation, navigate } from "@reach/router";
import imgsecurepayment from "../assets/images/razorpay-payment.jpeg";

const CheckoutPage = () => {
  // Repeated fields: Only fullName, email, mobile
  const blankParticipant = {
    fullName: "",
    email: "",
    mobile: "",
  };

  // Single object: company, gst, address, state, zip
  const [otherDetails, setOtherDetails] = useState({
    company: "",
    gst: "",
    address: "",
    state: "",
    zip: "",
  });

  // Participants array
  const [participants, setParticipants] = useState([blankParticipant]);

  const [responseId, setResponseId] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [loader, setLoader] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Validation errors
  // We'll store errors for participants in an array, and for otherDetails in an object
  const [participantErrors, setParticipantErrors] = useState([]);
  const [otherDetailsErrors, setOtherDetailsErrors] = useState({});

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
  const subTotal = priceNum * participants.length;
  const gstAmount = subTotal * gstRate;

  // If 'useTotal' is true, we add GST. Otherwise just show subTotal
  const total = useTotal ? subTotal + gstAmount : subTotal;

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

  // --- TICKET HANDLERS ---

  // Increase participants (repeated fields)
  const handleTicketIncrement = () => {
    setParticipants((prev) => [...prev, { ...blankParticipant }]);
    // If you want to jump back to edit mode
    setIsProceedClicked(false);
  };

  // Decrease participants (repeated fields)
  const handleTicketDecrement = () => {
    setParticipants((prev) =>
      prev.length > 1 ? prev.slice(0, prev.length - 1) : prev
    );
    setIsProceedClicked(false);
  };

  // Handle repeated field changes
  const handleParticipantChange = (e, index) => {
    const { name, value } = e.target;
    setParticipants((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [name]: value };
      return updated;
    });
    // Clear the error for that particular participant & field
    setParticipantErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      if (!newErrors[index]) {
        newErrors[index] = {};
      }
      newErrors[index][name] = "";
      return newErrors;
    });
  };

  // --- SINGLE FIELDS HANDLER ---
  const handleOtherDetailsChange = (e) => {
    const { name, value } = e.target;
    setOtherDetails((prev) => ({ ...prev, [name]: value }));
    setOtherDetailsErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // --- VALIDATION ---
  const validateFields = () => {
    let allValid = true;

    // 1) Participants array
    const newParticipantErrors = [];
    participants.forEach((p, index) => {
      const partErr = {};
      if (!p.fullName.trim()) {
        partErr.fullName = "Full Name is required";
        allValid = false;
      }
      if (!p.email.trim()) {
        partErr.email = "Email is required";
        allValid = false;
      }
      if (!p.mobile.trim()) {
        partErr.mobile = "Mobile is required";
        allValid = false;
      }
      newParticipantErrors[index] = partErr;
    });
    setParticipantErrors(newParticipantErrors);

    // 2) Other details
    const newOtherErrors = {};
    if (!otherDetails.address.trim()) {
      newOtherErrors.address = "Address is required";
      allValid = false;
    }
    if (!otherDetails.state.trim()) {
      newOtherErrors.state = "State is required";
      allValid = false;
    }
    if (!otherDetails.zip.trim()) {
      newOtherErrors.zip = "Zip code is required";
      allValid = false;
    }
    setOtherDetailsErrors(newOtherErrors);

    return allValid;
  };

  // Step 1 -> Step 2
  const proceedHandler = (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    setIsProceedClicked(true);
  };

  // Edit details (go back)
  const editDetails = () => {
    setIsProceedClicked(false);
  };

  // Final Submit
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    try {
      setLoader("loading");

      // CF7 endpoint
      const url =
        "https://tryscrumlive.vervebot.io/wp-json/contact-form-7/v1/contact-forms/12456/feedback?_wpcf7_unit_tag=wpcf7-8d74a4f";

      // Build the formData
      const formData = new FormData();

      // Flatten repeated fields
      const allFullNames = participants
        .map((p, i) => `Ticket ${i + 1}: ${p.fullName}`)
        .join(", ");
      const allEmails = participants
        .map((p, i) => `Ticket ${i + 1}: ${p.email}`)
        .join(", ");
      const allMobiles = participants
        .map((p, i) => `Ticket ${i + 1}: ${p.mobile}`)
        .join(", ");

      // Append participant data to formData
      formData.append("your-fullName", allFullNames);
      formData.append("your-email", allEmails);
      formData.append("your-mobile", allMobiles);

      // Append single fields
      formData.append("your-company", otherDetails.company || "");
      formData.append("your-gst", otherDetails.gst || "");
      formData.append("your-address", otherDetails.address);
      formData.append("your-state", otherDetails.state);
      formData.append("your-zip", otherDetails.zip);

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
      console.log("form res", res);
      console.log("total", total);

      // Next, create the Razorpay order
      createRazorpayOrder(total);

      // If successful, show message & reset
      setSubmissionMessage(res?.data?.message || "Form submitted successfully!");
      setParticipants([blankParticipant]); // reset to 1 participant
      setOtherDetails({
        company: "",
        gst: "",
        address: "",
        state: "",
        zip: "",
      });
      setIsProceedClicked(false);
      setLoader("");

      // Optionally navigate
      // navigate(-1);
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
                  &nbsp;Billing Details
                </h4>
                {isProceedClicked && (
                  <div className="billing-edit" onClick={editDetails}>
                    Edit Details
                  </div>
                )}

                {/* Show form only if not proceeded */}
                {!isProceedClicked && (
                  <div className="proceed-form">
                    {/* Participants (repeating fields) */}
                    {participants.map((participant, index) => (
                      <div key={index} style={{ marginBottom: "20px" }}>
                        <h5>Ticket {index + 1}</h5>

                        <div className="two-column-row">
                          <div className="form-group">
                            <input
                              type="text"
                              name="fullName"
                              value={participant.fullName}
                              onChange={(e) => handleParticipantChange(e, index)}
                              placeholder="Full Name*"
                            />
                            {participantErrors[index]?.fullName && (
                              <span className="error">
                                {participantErrors[index].fullName}
                              </span>
                            )}
                          </div>

                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              value={participant.email}
                              onChange={(e) => handleParticipantChange(e, index)}
                              placeholder="Email*"
                            />
                            {participantErrors[index]?.email && (
                              <span className="error">
                                {participantErrors[index].email}
                              </span>
                            )}
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              name="mobile"
                              value={participant.mobile}
                              onChange={(e) => handleParticipantChange(e, index)}
                              placeholder="Mobile Number*"
                            />
                            {participantErrors[index]?.mobile && (
                              <span className="error">
                                {participantErrors[index].mobile}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Single (non-repeating) details */}
                    <div style={{ marginTop: "2rem" }}>
                      <h5>Billing Info</h5>
                      <div className="form-group">
                        <input
                          type="text"
                          name="company"
                          value={otherDetails.company}
                          onChange={handleOtherDetailsChange}
                          placeholder="Company Name (optional)"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="gst"
                          value={otherDetails.gst}
                          onChange={handleOtherDetailsChange}
                          placeholder="GST Number (optional)"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="address"
                          value={otherDetails.address}
                          onChange={handleOtherDetailsChange}
                          placeholder="Address*"
                        />
                        {otherDetailsErrors.address && (
                          <span className="error">{otherDetailsErrors.address}</span>
                        )}
                      </div>

                      <div className="two-column-row">
                        <div className="form-group">
                          <input
                            type="text"
                            name="state"
                            value={otherDetails.state}
                            onChange={handleOtherDetailsChange}
                            placeholder="State*"
                          />
                          {otherDetailsErrors.state && (
                            <span className="error">{otherDetailsErrors.state}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="zip"
                            value={otherDetails.zip}
                            onChange={handleOtherDetailsChange}
                            placeholder="Zip Code*"
                          />
                          {otherDetailsErrors.zip && (
                            <span className="error">{otherDetailsErrors.zip}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Proceed button */}
                    <button
                      className="pay-button"
                      style={{ background: "#ff0000", marginTop: "20px" }}
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
                <button
                  type="button"
                  onClick={handleTicketDecrement}
                >
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{participants.length}</span>
                <button
                  type="button"
                  onClick={handleTicketIncrement}
                >
                  +
                </button>
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
