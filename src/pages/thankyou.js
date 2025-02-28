import React, { useEffect, useState } from "react";
import { useLocation, navigate } from "@reach/router";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";

const ThankYouPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [paymentId, setPaymentId] = useState(null);

  useEffect(() => {
    const id = searchParams.get("razorpay_payment_id");

    if (id) {
      setPaymentId(id);
    } else {
      navigate("/"); // Redirect to home if no payment ID is found
    }
  }, [location.search]); // Re-run when URL changes

  return (
    <Layout pageTitle="Payment Successful">
      <NavTwo />
      <div style={{ textAlign: "center", padding: "50px 20px" }}>
        {paymentId ? (
          <>
            <h1 style={{ color: "green" }}>🎉 Payment Successful! 🎉</h1>
            <p>Thank you for your payment. Your transaction was successful.</p>
            <p>
              <strong>Payment ID:</strong> {paymentId}
            </p>
            <p>You will receive an email confirmation shortly.</p>
            <a href="/" style={{ textDecoration: "none", color: "#fff" }}>
              <button
                style={{
                  background: "#ff0000",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                Back to Home
              </button>
            </a>
          </>
        ) : (
          <p>Redirecting...</p>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default ThankYouPage;
