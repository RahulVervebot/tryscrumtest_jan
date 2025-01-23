import React, { useState } from "react";
import axios from "axios";


const Contact = () => {

  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [loader, setloader] = useState('');
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (state.email && state.name && state.message) {
   //   debugger;
      setloader('loading');
      const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/94/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);

      const config = {
        headers: {
         "content-type": "application/x-www-form-urlencoded",
       // "content-type": "application/json",
        },
      };

      const res = await axios.post(url, formData, config);
      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        //alert(res.data.message);
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", message: "" });
      } else {
        alert("please try again");
      }
    } else {
      let error = errors;
      if (state.name === "") {
        // debugger;
        error = {
          ...error,
          name: "This is required",
        };
      }
      if (state.email === "") {
        // debugger;
        error = {
          ...error,
          email: "This is required",
        };
      }
      if (state.message === "") {
        // debugger;
        error = {
          ...error,
          message: "This is required",
        };
      }
      setErrors('check error',error);
    }
    //console.log(res.data.message, "res");
  };

  return (
    <div>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-manager"></i>
                </div>
                <h2 className="contact-info-one__title">About Us </h2>
                <p className="contact-info-one__text">
                  Our vision is clear. We humanize Organizations by going deeper to unlock prescience to challenge traditional thinking and drive transformation.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder"></i>
                </div>
                <h2 className="contact-info-one__title">Our Address</h2>
                <p className="contact-info-one__text">
                  Plot No 244, Fortune Residency, Tambaram,
                  <br />Chennai–600048
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h2 className="contact-info-one__title">Contact Info</h2>
                <p className="contact-info-one__text">
                  +91 9789490848
                </p>
                <br />
                <p className="contact-info-one__text">
                  help@tryscrum.com <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Get in touch <br />
            with us
          </h2>

          <form
            action="#"
            method="post"
            className="contact-one__form contact-form-validated"
            noValidate="novalidate"
          >
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={state.name}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.email}</small>
              </div>
              <div className="col-lg-12">
                <textarea
                  placeholder="Write Message"
                  name="message"
                  value={state.message}
                  onChange={handleInputChange}
                ></textarea>
                <small style={{ color: "red" }}>{errors.message}</small>
                <div className="text-center">
                  {/* <button
                    type="submit"
                    className="contact-one__btn thm-btn"
                    onClick={submitHandler}
                  >
                    Submit Comment<div class="loader" style={{ bottom: "30px", height: "20px", width: "20px" }}></div>
                  </button> */}

                  {loader == 'loading' ? <button
                    type="submit"
                    onClick={submitHandler}
                    className="contact-one__btn thm-btn"
                    disabled
                    style={{position:"relative",background:"#012237"}}
                  >Submit Comment<div class="loader" style={{ bottom: "30px", height: "20px", width: "20px" }}></div></button> : <button
                    type="submit"
                    onClick={submitHandler}
                    className="contact-one__btn thm-btn"
                  >Submit Comment</button>}
                  <small style={{ color: "green" }}>{submissionMessage}</small>
                </div>
              </div>
            </div>
          </form>

          <div className="result text-center"></div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.099441036793!2d80.05469011484908!3d12.901326919906971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5d2768e67cd%3A0xacb987b53ca2cc99!2sFortune%20Residency!5e0!3m2!1sen!2sin!4v1624279273635!5m2!1sen!2sin"
        className="google-map__contact"
        title="template google map"
        allowFullScreen=""
      ></iframe>

    </div>
  );
};

export default Contact;



