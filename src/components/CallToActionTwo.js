import React, { useState } from "react";
import axios from "axios";
import Popup from 'reactjs-popup';

const CallToActionTwo = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    phonelimit: 10,
  });
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

    setSubmissionMessage("");

    if (state.email && state.name && state.phone && state.message && !(state.phone.length <= 9) && !(state.phone.length >= 12)) {
      const url =
        "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3474/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-phone", state.phone);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message + " - Coaching On Home Popup Contact Inquiry");

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(url, formData, config);
      if (typeof res.data.message !== undefined) {
        // alert(res.data.message);
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", phone: "", message: "" });
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
      if (state.phone.length <= 9) {
        // debugger;
        error = {
          ...error,
          phone: "Enter Correct Number",
        };
      }
      if (state.phone.length >= 12) {
        // debugger;
        error = {
          ...error,
          phone: "Enter Correct Number",
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

  return (
    <div className="cta-two">
      <div className="block-title mb-0">
        <h4 className="block-title__title_what_we_offer py-4">
          What We Offer For Growth
        </h4>
      </div>
      <div className="container-fluid background_color_one  mb-0">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 thm-base-bg mb-0">
              <div className="cta-two__single_home">
                <div className="cta-two__content">
                  <a href="/agile-coaching"> <h2 className="cta-two__title"> Professional Coaching </h2> </a>
                  <p className="cta-two__text">
                    Along with our training courses . We have created individual coaching packs to help you shine. We provide one -on-one online coaching & Mentoring to help you in your journey as a Coach.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 thm-base-bg-2 mb-0">
              <div className="cta-two__single_home">

                <div className="cta-two__content">
                  <a href="https://trybusinessagility.com" target="_blank"> <h2 className="cta-two__title"> Enterprise Agile </h2> </a>
                  <p className="cta-two__text">
                    Spinning up a single Scrum team is a challenge. Building an agile organization is a journey. We work with you to create a plan and execute it to build and sustain an agile organization. Talk to us today to know more about our offerings.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid background_color_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 thm-base-bg-3 mb-0">
              <div className="cta-two__single_home">

                <div className="cta-two__content">

                  <Popup
                    trigger={<h2 className="cta-two__title pointer">Corporate Events</h2>}
                    modal
                    nested
                  >
                    {close => (
                      <div className="modal-popup">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> Contact Us </div>

                        <form
                          action="#"
                          method="POST"
                          className="become-teacher__form-content contact-form-validated"
                        >

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Your Name"
                                  id="form_name"
                                  className="form-control"
                                  name="name"
                                  value={state.name}
                                  onChange={handleInputChange}
                                />
                                <small style={{ color: "red" }}>{errors.name}</small>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Phone Number"
                                  id="form_lastname"
                                  className="form-control"
                                  name="phone"
                                  value={state.phone}
                                  onChange={handleInputChange}
                                  minLength="10"
                                />
                                <small style={{ color: "red" }}>{errors.phone}</small>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">

                              <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={state.email} onChange={handleInputChange} />

                              <small style={{ color: "red" }}>{errors.email}</small>

                            </div>
                          </div>

                          <div className="row">

                            <div className="col-md-12">
                              <div className="form-group">

                                <textarea id="form_message" name="message" className="form-control" placeholder="Your Query" rows="2" value={state.message} onChange={handleInputChange}></textarea>

                                <small style={{ color: "red" }}>{errors.message}</small>

                              </div>
                            </div>

                            <div className="col-md-12 centered-popup-input">

                              <input type="submit" class="btn btn-success btn-send" value="Send message" onClick={submitHandler} />

                              <br />

                              <small style={{ color: "green" }}>{submissionMessage}</small>

                            </div>

                          </div>

                        </form>


                      </div>

                    )}
                  </Popup>

                  <p className="cta-two__text">
                    Looking for some in-house training? We offer a range of Agile Training at your site. Speak to us today to explore more.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-lg-6 thm-base-bg-4_duplicate mb-0">
              <div className="cta-two__single_home">

                <div className="cta-two__content">
                  <a href="/courses"><h2 className="cta-two__title">Public Events</h2></a>
                  <p className="cta-two__text">
                    Find the right courses to Improve your Agile Skills. We offer range of Professional Agile Training to enhance your capabilities.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default CallToActionTwo;
