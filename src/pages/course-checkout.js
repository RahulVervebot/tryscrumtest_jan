import React, { useState, useRef } from "react";
import axios from "axios";
import "../CheckoutPage.css"; // your updated CSS file
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import logo from "../assets/images/logo-dark.png";
import Footer from "../components/Footer";
import { useLocation, navigate } from "@reach/router";
import imgsecurepayment from "../assets/images/razorpay-payment.jpeg";
import editprofile from "../assets/images/edit-profile.png";

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
  const inputRef = useRef(null);

  // Validation errors
  const [participantErrors, setParticipantErrors] = useState([]);
  const [otherDetailsErrors, setOtherDetailsErrors] = useState({});

  // Coupon
  const [couponValue, setCouponValue] = useState(0);
  const [couponerror, setCouponError] = useState('');
  const [coupon, setCoupon] = useState(''); 

  // For toggling step screens
  const [isProceedClicked, setIsProceedClicked] = useState(false);

  // Extract query params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseNametitle = searchParams.get("courseName") || "empty";
  const courseDate = searchParams.get("courseDate") || "";
  const CourseTime = searchParams.get("time") || "";
  const CourseLocation = searchParams.get("location") || "";
  const priceString = searchParams.get("price"); // e.g. "14500"
  const priceNum = parseFloat(priceString) || 0;
  const curencyString = searchParams.get("mycurrency");
  // Subtotal, total
  const withcouponsubTotal = priceNum * participants.length
  const subTotal = priceNum * participants.length - couponValue;
  // For illustration, we do subTotal minus coupon. (Adjust logic as needed.)
  const totalgst = 0.18;
  const gstAmount = subTotal * totalgst;
  const tempcoupon = subTotal + gstAmount - 2;
  const total = subTotal + gstAmount;
  const formatIndianNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
};
  // We'll always use the same backend URL:
  const backendURL = "https://tryscrumlive.vervebot.io/create-order.php";

  // --- TICKET HANDLERS ---
  const handleTicketIncrement = () => {
    setParticipants((prev) => [...prev, { ...blankParticipant }]);
    setIsProceedClicked(false);
  };

  const handleTicketDecrement = () => {
    setParticipants((prev) =>
      prev.length > 1 ? prev.slice(0, prev.length - 1) : prev
    );
    setIsProceedClicked(false);
  };

  // --- FIELD HANDLERS ---
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
    if (!otherDetails.company.trim()) {
      newOtherErrors.company = "Billing Name is required";
      allValid = false;
    }
    if (!otherDetails.gst.trim()) {
      newOtherErrors.gst = "Billing Email is required";
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

  const editDetails = () => {
    setIsProceedClicked(false);
  };

  // --- COUPON SUBMIT ---
  const submitPromo = () => {
    const trimmedCoupon = coupon.trim();
    if (trimmedCoupon === 'TRY-CSPO-SPL') {
      setCouponValue(tempcoupon);
      setCouponError("");
      setCoupon("");
      // Show success message for 5 seconds
      setSubmissionMessage("Discount successfully applied!");
      setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);
    } else if(trimmedCoupon === 'TRYSCRUM-7' && courseDate === 'Apr 19-20, 2025') {
      setCouponValue(500);
      setCouponError("");
      setCoupon("");
      // Show success message for 5 seconds
      setSubmissionMessage("Discount successfully applied!");
      setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);
    }
    else if(trimmedCoupon === 'CSPO-SPL' && courseDate === 'Apr 19-20, 2025') {
      setCouponValue(1000);
      setCouponError("");
      setCoupon("");
      // Show success message for 5 seconds
      setSubmissionMessage("Discount successfully applied!");
      setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);
    }
    else if(trimmedCoupon === 'TRYSCRUM-7' && courseDate === 'May 03-04, 2025') {
      setCouponValue(500);
      setCouponError("");
      setCoupon("");
      // Show success message for 5 seconds
      setSubmissionMessage("Discount successfully applied!");
      setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);
    }
    else if(trimmedCoupon === 'CSPO-SPL' && courseDate === 'May 03-04, 2025') {
      setCouponValue(1000);
      setCouponError("");
      setCoupon("");
      // Show success message for 5 seconds
      setSubmissionMessage("Discount successfully applied!");
      setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);
    }
    else {
      setCouponValue(0);
      setCouponError("Invalid code");
      setSubmissionMessage("");
    }
  };

  // --- RAZORPAY LOGIC ---

  // 1) Called by "Pay Now" button
  const payNowHandler = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setLoader("loading");
    try {
      // First create the RZP order with your backend
      createRazorpayOrder(total);
    } catch (error) {
      console.error(error);
      setSubmissionMessage("An error occurred. Please try again.");
      setLoader("");
    }
  };

  // 2) Create order in the backend
  const createRazorpayOrder = (price) => {
    setLoader("");
    const data = {
      amount: price * 100, // Convert to paise
      currency: curencyString || "INR",
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
        setLoader("");
      });
  };

  // 3) Load the RZP script & open the RZP modal
  const handleRazorpayScreen = async (amount, orderId) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Failed to load Razorpay SDK.");
      setLoader("");
      return;
    }

    const options = {
      key: "rzp_live_HhNW5remR47yrV", // or your test key
      amount: total * 100,
      currency: "INR",
      order_id: orderId,
      name: "tryScrum",
      description: "Payment to TryScrum",
      image: logo,
      // On successful payment:
      handler: async (response) => {
        // 1) Grab the transaction id
        const paymentId = response.razorpay_payment_id;
        await submitToCF7(paymentId);
        setResponseId(paymentId);
        navigate(`/thankyou?razorpay_payment_id=${paymentId}`);
        setTimeout(() => {
          window.location.reload();
        }, 100);
        // 2) Now submit CF7 (including transaction id)
        // 3) Navigate to thank you
      },
      prefill: {
        name: "",
        email: "",
      },
      theme: {
        color: "#F4C430",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // 4) The actual form submission to CF7, now that we have a transaction ID
  const submitToCF7 = async (transactionId) => {
    try {
      const url =
        "https://tryscrumlive.vervebot.io/wp-json/contact-form-7/v1/contact-forms/12456/feedback?_wpcf7_unit_tag=wpcf7-8d74a4f";
      // Build the FormData
      const formData = new FormData();

      // Flatten repeated fields
      const allFullNames = participants
        .map((p, i) => `${p.fullName}`)
        .join(", ");
      const allEmails = participants
        .map((p, i) => `${p.email}`)
        .join(", ");
      const allMobiles = participants
        .map((p, i) => `Ticket ${i + 1}: ${p.mobile}`)
        .join(", ");

      formData.append("your-fullName", allFullNames);
      formData.append("your-email", allEmails);
      formData.append("your-mobile", allMobiles);

      // Single fields

      formData.append("your-billing-name", otherDetails.company || "");
      formData.append("billing-email", otherDetails.gst || "");
      formData.append("your-address", otherDetails.address);
      formData.append("your-state", otherDetails.state);
      formData.append("your-zip", otherDetails.zip);
      
      // Course info

      formData.append("your-coursename", courseNametitle);
      formData.append("your-coursedate", courseDate);
      formData.append("your-subtotal", formatIndianNumber(subTotal));
      formData.append("your-gst", formatIndianNumber(gstAmount));
      formData.append("your-totalprice", formatIndianNumber(total));
      formData.append("ticket-qty", participants.length);
      const dateObj = new Date();
      const minutes = dateObj.getMinutes().toString().padStart(2, '0'); // Ensure 2-digit format
    const seconds = dateObj.getSeconds().toString().padStart(2, '0'); // Ensure 2-digit format
      const day = String(dateObj.getDate()).padStart(2, "0");
      const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
      ];
      const monthName = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      const todayDate = `${day}-${monthName}-${year}`;
      // Append the date to formData
      formData.append("today-date", todayDate);
      // --------------- ADD TRANSACTION ID HERE ---------------
      formData.append("transaction-id", transactionId);
      const invid = transactionId.slice(-4);
      formData.append("uacf7_submission_id-2025", `002025${day}${minutes}${seconds}`);
      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };

      // Post to CF7
      const res = await axios.post(url, formData, config);
      console.log("CF7 submission response:", res);

      setSubmissionMessage(res?.data?.message || "Form submitted successfully!");
      setLoader("");
    } catch (error) {
      console.error(error);
      setSubmissionMessage("An error occurred while submitting form data.");
      setLoader("");
    }
  };

  // Utility to load the external script
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  return (
    <Layout pageTitle="tryScrum | Checkout" pageName="checkout">
      <NavTwo />
      {/* We can keep or remove form 'onSubmit'—just ensure it doesn't cause default submit */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="checkout-main-container">
          <div className="checkout-container">
            {/* LEFT Column (70%) */}
            <div className="checkout-left-col">
              {/* Row 1: Billing Details */}
              <div className="checkout-left-row1">
                <div className="checkout-billing-head">
                  <h4 style={{ fontWeight: "700", marginBottom: "5%", width:"100%"}}>
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
                      <img
                        src={editprofile}
                        style={{ width: "20px" }}
                        alt="edit-profle"
                      />
                    </div>
                  )}
                </div>
                {/* If we haven't proceeded, show the form */}
                {!isProceedClicked && (
                  <div className="proceed-form">
                    {/* Participants */}
                    {participants.map((participant, index) => (
                      <div key={index} style={{ marginBottom: "20px" }}>
                        <h5>Attendee {index + 1}</h5>
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
                          placeholder="Enter Billing Name*"
                        />
                             {otherDetailsErrors.company && (
                          <span className="error">
                            {otherDetailsErrors.company}
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="gst"
                          value={otherDetails.gst}
                          onChange={handleOtherDetailsChange}
                          placeholder="Billing Email*"
                        />
                             {otherDetailsErrors.gst && (
                          <span className="error">
                            {otherDetailsErrors.gst}
                          </span>
                        )}
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
                          <span className="error">
                            {otherDetailsErrors.address}
                          </span>
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
                            <span className="error">
                              {otherDetailsErrors.state}
                            </span>
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
                            <span className="error">
                              {otherDetailsErrors.zip}
                            </span>
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

              {/* Row 2: Secure Payment */}
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

                    {/* Pay Now button triggers payNowHandler */}
                    <button
                      className="pay-button"
                      onClick={payNowHandler}
                      style={{ background: "#ff0000" }}
                    >
                      {loader === "loading" ? "Processing..." : "Pay Now"}
                    </button>
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
              <div className="checkout-right-row1">
                <h4 style={{ fontWeight: "700", marginBottom: "5%" }}>
                  Payment Summary
                </h4>
                <h5 style={{ fontWeight: "600", marginBottom: "5%" }}>
                  {courseNametitle}
                </h5>

                {courseDate && (
                  <>
                    <div className="summary-item">
                      <span>{courseDate}</span><br/>
                    </div>
                    <div className="summary-item">
                      <span>{CourseTime}</span><br/>
                    </div>
                    <div className="summary-item">
                      <span>{CourseLocation}</span>
                    </div>
                  </>
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
                  <span>₹{curencyString}{withcouponsubTotal.toFixed(2)}</span>
                </div> 
                {/* If the coupon is applied, show discount */}
                {couponValue > 0 && (
                  <>
                  <div className="summary-item discount">
                    <span>Discount:</span>
                    <span style={{ color: "green" }}>- ₹{couponValue}</span>
                  </div>    
                  <div className="summary-item">
                <span>Subtotal after discount:</span>
                <span>₹{curencyString}{subTotal.toFixed(2)}</span>
                </div>  
                </>
                )}
                  <div className="summary-item">
                  <span>GST:</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="summary-item total">
                  <span>Total:</span>
                  <span>₹{curencyString}{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="checkout-right-row2">
                <h4 style={{ fontWeight: "700", marginBottom: "5%" }}>
                  Promo Code
                </h4>
                <div style={{ display: 'flex' }}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="Enter Coupon Code"
                      placeholder="Enter Coupon"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      style={{borderRadius:"10px"}}
                    />
                  </div>
                  <button
                    type="button"
                    className="promo-button"
                    onClick={submitPromo}
                    style={{
                      background: "#ff0000",
                      color:"#fff",
                      borderRadius:"10px",
                      border:"none",
                      width:"40%",
                      height:"50px",
                      marginLeft: "5px"
                    }}
                  >
                    Submit
                  </button>
                </div>

                {couponerror && (
                  <p style={{ color: "red", marginTop: "5px" }}>{couponerror}</p>
                )}
                {submissionMessage && (
                  <p style={{ color: "green", marginTop: "5px" }}>
                    {submissionMessage}
                  </p>
                )}
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
