import React, { useState } from "react";
import Countdown from "react-countdown";
import axios from "axios";

const CountdownKipso = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loader, setloader] = useState('');
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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
    if (state.email && state.name && state.phone && state.message) {
      setloader('loading');
      const url =
        "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3474/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-phone", state.phone);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(url, formData, config);

      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        // alert(res.data.message);
        setSubmissionMessage(res.data.message);
        // setState({ name: "", email: "", phone: "", message: "" });
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
      if (state.phone === "") {
        // debugger;
        error = {
          ...error,
          phone: "This is required",
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
  };

  console.log("err", errors);
  return (
    <section className="countdown-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="countdown-one__content">
              <h4 className="countdown-one__title">Our Facts </h4>
              {/* <p className="countdown-one__tag-line">
                get premium online courses for free!
              </p> */}
              {/* <p className="countdown-one__text">
              Let’s make something awesome together. Drop us a line, or give us heads-up if you are interested to work with us.
              </p> */}
              <div className="countdown-one__list list-unstyled">
                <div className="about-two__single-wrap">
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-training"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        500+ Trainings Delivered
                      </p>
                    </div>
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-human-resources"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        10,000+ People Trained
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="countdown-one__list list-unstyled">
                <div className="about-two__single-wrap">
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-professor"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        50+ Corporates Engaged
                      </p>
                    </div>
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-strategy"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Trust Score - 4.9*
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">Contact Us</h2>
              </div>
              <form
                // action="#"
                // method="POST"
                className="become-teacher__form-content contact-form-validated"
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={state.name}
                    onChange={handleInputChange}
                  />

                  <small style={{ color: "red" }}>{errors.name}</small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                  <small style={{ color: "red" }}>{errors.email}</small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={state.phone}
                    onChange={handleInputChange}
                  />
                  <small style={{ color: "red" }}>{errors.phone}</small>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Comment"
                    name="message"
                    value={state.message}
                    onChange={handleInputChange}
                  />
                  <small style={{ color: "red" }}>{errors.message}</small>
                </div>
                <div className="form-group">
                  {/* <button
                    type="submit"
                    className="thm-btn become-teacher__form-btn"
                    onClick={submitHandler}
                  >
                    Submit
                  </button> */}
                  {loader == 'loading' ? <button
                    type="submit"
                    onClick={submitHandler}
                    className="thm-btn become-teacher__form-btn"
                    disabled
                    style={{position:"relative",background:"#012237"}}
                  >Submit<div style={{position:"absolute",top:"24px",right:"20px",}}><div className="loader" style={{ height: "20px", width: "20px",}}></div></div></button> : <button
                    type="submit"
                    onClick={submitHandler}
                    className="thm-btn become-teacher__form-btn"
                  >Submit</button>}
                  <br />
                  {submissionMessage.charAt(0) == "T" ?
                  <small style={{ color: "green" }}>{submissionMessage}</small> :
                  <small style={{ color: "red" }}>{submissionMessage}</small>
                   }
                </div>

              </form>
              <div className="result text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountdownKipso;