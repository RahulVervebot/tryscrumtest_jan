import React, { useState } from "react";
import axios from "axios";


const ContactEnterprise = () => {

  const [state, setState] = useState({ name: "", email: "", message: "", cnumber:"", organisation:"" });
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
    if (state.email && state.name && state.message && state.cnumber && state.organisation) {
      debugger;
      setloader('loading');
      const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/9634/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("your-number", state.cnumber);
      formData.append("your-organisation", state.organisation);
      formData.append("your-message", state.message);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
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
      setErrors(error);
    }
    //console.log(res.data.message, "res");
  };

  return (
    <div>

      <section className="contact-one">
        <div className="container">
          <h3 className="contact-one__title text-center">
          Contact us on how to get started
          </h3>

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
              <div className="col-lg-6">
                <input
                  type="text"
                  name="cnumber"
                  placeholder="Contact Number"
                  value={state.cnumber}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.cnumber}</small>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Organisation"
                  name="organisation"
                  value={state.organisation}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.organisation}</small>
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

    </div>
  );
};

export default ContactEnterprise;



