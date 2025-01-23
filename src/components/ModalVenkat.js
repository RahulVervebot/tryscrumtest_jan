import React, { useState } from 'react'
import "../assets/css/modal.css"
import "../assets/css/style.css";
import axios from "axios";
import { Oval } from 'react-loader-spinner';




const ModalVenkat = () => {

  const btn = {
    width: "150px",
    height: "50px",
    padding: "8px"
  }


  const [modal, modalSet] = useState("");

  const showModal = () => {
    modalSet("flex")
  }

  const hideModal = () => {
    modalSet("none")
  }






  const [state, setState] = useState({ name: "", email: "", phone: "", message: "", country: "" });
  const [loader, setloader] = useState('');
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", checkbox: "", phone: "",  message: "", country: "" });
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

  const handleCheck = (event) => {
    setChecked((prevCheck) => !prevCheck);
    setErrors({
      ...errors,
      checkbox: "",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (state.email && state.name && checked) {
      debugger;
      setloader('loading');
      const url =
        "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/7927/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("phone", state.phone);
      formData.append("country", state.country);
      formData.append("message", state.message);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(url, formData, config);
      console.log("response", res);

      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        if (checked) {
          setState({ name: "", email: "", phone:"", country:"", message:""});
          setSubmissionMessage(res.data.message);
          // window.open("https://tryscrumlive.netlify.app/icp-ent.pdf", "_blank")
          // window.open(
          //   downloadFile,
          //   "_blank" // <- This is what makes it open in a new window.
          // );
          // window.location.href = downloadFile;
        }
      } else {
        alert("please try again");
      }
    } else {
      if (state.name === "") {
        debugger;
        setErrors({
          ...errors,
          name: "This is required",
        });
      }
      if (state.email === "") {
        setErrors({
          ...errors,
          email: "This is required",
        });
      }
      if (state.phone === "") {
        setErrors({
          ...errors,
          email: "This is required",
        });
      }
      if (state.country === "") {
        setErrors({
          ...errors,
          email: "This is required",
        });
      }
      if (state.message === "") {
        setErrors({
          ...errors,
          email: "This is required",
        });
      }
      if (checked === false) {
        setErrors({
          ...errors,
          checkbox: "Please check this",
        });
      }
    }
  };





  return (
    <>
      <button onClick={showModal} className="btn m-0 w-100" style={{ fontWeight: "600", border: "3px solid #f05457", boxShadow: "none", color: "#fff", backgroundColor: "#f05457", padding:"5px 5px", whiteSpace:"nowrap" }}>Contact Trainer</button>
      {modal == "flex" ? <div className="modal_background" onClick={hideModal}></div> : null}
      <div className='modal_container' style={{ display: `${modal}` }}>
        <div className='modal_content modal_content_in_mobile'>
          <i fa className='fa fa-times close_modal' onClick={hideModal} style={{ color: "#f05457" }}></i>
          <div className='modal_box py-1 pt-2'>
            <form className='row'>

              <div className="form-group col-xl-6 col-md-12 col-sm-12 col-lg-6  mb-0">
                <label for="exampleInputEmail1 pb-0">Email address</label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.email}</small>

                {errors.email ? <small style={{ color: "red" }}>{errors.email}<br /></small> : null}
              </div>
              <div className="form-group col-xl-6 col-md-12 col-sm-12 col-lg-6  mb-0">
                <label for="formGroupExampleInput pb-0">Your Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <div className="form-group col-xl-6 col-md-12 col-sm-12 col-lg-6  mb-0">
                <label for="formGroupExampleInput">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={state.phone}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <div className="form-group col-xl-6 col-md-12 col-sm-12 col-lg-6  mb-0">
                <label for="formGroupExampleInput">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="country"
                  value={state.country}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              {/* <div className="form-group col-xl-6 col-md-12 col-sm-12 col-lg-6  mb-0">
                <label for="formGroupExampleInput">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="city"
                  value={state.city}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div> */}
              <div className="form-group col-xl-12 col-md-12 col-sm-12 col-lg-6  mb-0">
                <label for="formGroupExampleInput"></label>
                <label for="formGroupExampleInput">Please let me know the service you are looking for:</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="message"
                  value={state.message}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <small style={{ color: "red" }}>{errors.checkbox}</small>
              <div className="form-check-modal">
                <input
                  type="checkbox"
                  className="form-check-input-modal"
                  id="exampleCheck1"
                  onChange={handleCheck}
                  value={checked}
                  defaultChecked={checked}
                />

                <label for="exampleCheck1">
                  <span className="form-check-label-modal">&nbsp;&nbsp;I agree to the tryScrum's</span>
                  {/* <a className="btn" href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819" target="__blank" style={{ backgroundColor: "red", color: "white" }}>
                    Privacy Policy
                  </a> */}
                </label>

                <a href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819" target="__blank" style={{ backgroundColor: "", color: "blue" }}>
                  &nbsp;&nbsp;Privacy Policy
                </a>
              </div>
              <div className="row">
                <div className="col-12 mb-0">
                  <small id="emailHelp" className="form-text-modal text-muted">We'll never share your email with anyone else.</small>
                </div>
              </div>
              <div className="row" >
                {loader == 'loading' ?
                  <>
                    <div className='col-xl-4 col-11'>
                      <button type="submit"
                        onClick={submitHandler}
                        disabled
                        className="btn m-0 mx-1"
                        style={{
                          fontWeight: "600",
                          border: "3px solid #f05457",
                          boxShadow: "none",
                          color: "#f05457"
                        }}>Send Message
                      </button>
                    </div>
                    <div className='col-xl-1'>
                      <Oval
                        height={40}
                        width={40}
                        color="red"
                        wrapperStyle={{}}
                        wrapperClass="d-flex"
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="pink"
                        strokeWidth={5}
                        strokeWidthSecondary={5}

                      />
                    </div>
                  </>


                  :
                  <>
                    <button type="submit"
                      onClick={submitHandler}
                      className="btn m-0 col-xl-4 col-11 mx-3"
                      style={{
                        fontWeight: "600",
                        border: "3px solid #f05457",
                        boxShadow: "none",
                        color: "#fff",
                        backgroundColor: "#f05457"
                      }}>
                      Send Message
                    </button> 
                    <p style={{ color: "green" }}>{submissionMessage}</p>
                  </>
                }



              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default ModalVenkat
