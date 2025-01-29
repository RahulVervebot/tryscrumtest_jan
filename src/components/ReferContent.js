import React, { useState, useEffect } from "react"
import Modals from "./Modals"
import axios from "axios"
import Select from 'react-select';

const options = [
  { value: 'CSM', label: 'CSM' },
  { value: 'ACSM', label: 'ACSM' },
  { value: 'PSPO', label: 'PSPO' },
  { value: 'APSPO', label: 'APSPO' },
  { value: 'CAL-1', label: 'CAL-1' },
  { value: 'CAL-2', label: 'CAL-2' },
  { value: 'CAL-COMBO', label: 'CAL-COMBO' },
  { value: 'CAS-S1', label: 'CAS-S1' },
  { value: 'ACSPO', label: 'ACSPO' },
  { value: 'PSM-1', label: 'PSM-1' },
  { value: 'PSM-2', label: 'PSM-2' },
  { value: 'APS', label: 'APS' },
  { value: 'Other', label: 'Other' }
]
const CareerContent = () => {
    const [state, setState] = useState({ name: "", email: "", phone: "", refreeEmail:"",refreePhone:"",refreeName:"",refreecourse:[]  });
    const [loader, setloader] = useState('');
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", refreeEmail:"",refreePhone:"",refreeName:"",refreecourse:"" });
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
    const handleSelectChange = (selected) => {
      setState({
        ...state,
        refreecourse: selected,
      });
      setErrors({ ...errors, refreecourse: "" });
    };

    const submitHandler = async (e) => {
      e.preventDefault();
      const selectedValues = state.refreecourse.map(option => option.value);

      if (state.email && state.name && state.phone && state.refreeEmail && state.refreePhone && state.refreeName && state.refreecourse ) {
        debugger;
        setloader('loading');
        const url = "https://tryscrumtest.vervebot.io//wp-json/contact-form-7/v1/contact-forms/10501/feedback";
        const formData = new FormData();
        formData.append("your-name", state.name);
        formData.append("your-email", state.email);
        formData.append("your-phone", state.phone);
        formData.append("refree-email", state.refreeEmail);
        formData.append("refree-phone", state.refreePhone);
        formData.append("refree-name", state.refreeName);
        formData.append("course-name", selectedValues);
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
          setState({ name: "", email: "", phone: "", refreeEmail:"", refreePhone:"", refreeName:"", refreecourse:""  });
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
        if (state.refreeEmail === "") {
          // debugger;
          error = {
            ...error,
            refreeEmail: "This is required",
          };
        }
        if (state.refreePhone === "") {
          // debugger;
          error = {
            ...error,
            refreePhone: "This is required",
          };
        }
        if (state.refreeName === "") {
          // debugger;
          error = {
            ...error,
            refreeName: "This is required",
          };
        }
        if (state.refreecourse === "") {
          // debugger;
          error = {
            ...error,
            refreecourse: "This is required",
          };
        }
        setErrors(error);
      }
      //console.log(res.data.message, "res");
    };

  return (
    <div className="container material-ui-modal">
      <div className="row">
        <div className="col-lg-7">
          <div
            class="card-job hover-up wow animate__ animate__fadeInUp animated border p-3 rounded-3"
            style={{ visibility: "visible", animationName: "fadeInUp" }} >
            <h1
              className="text-center p-4"
              style={{ fontWeight: "600", color: "#f05457" }}
            >
              {/* Join Our Team as a Trainer */}
            </h1>
            <div class="card-job-description mt-3">
              <p className="lead" style={{ lineHeight: "25px" }}>
                Hey there, tryScrum family!<br/>
              </p>
              <p className="lead">
              We’re so grateful to have you with us, and we’re excited to share a special way for you to earn some extra rewards while helping your friends and colleagues improve their skills. Introducing the tryScrum Referral Program!
              </p>

              {/* <p
                className="lead pb-0"
                style={{ color: "#012237", fontWeight: "500",fontSize:"18px", }}
              >
                Responsibilities:
              </p> */}
              <h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>What’s in it for you?</h3>

              <p className="pb-0 lead">
                <ul>
                  <li>
                  <b>Get Rewarded:</b> Earn 1000 INR for every friend or colleague you refer who completes a workshop with us.
                  </li>
                  <li>
                  <b>Simple Process:</b> Just fill out a quick referral form to get started.

                  </li>
                  <li>
                  <b>Earn Bonus:</b> As soon as your friend completes their workshop, you get your reward.
                  </li>
                 
                  {/* <li>
                    Provide feedback to participants and monitor their progress.
                  </li> */}
                </ul>
              </p>
              <br/>
<h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>How Does It Work?</h3>

<p className="pb-0 lead">
  <ul>
    <li>
    <b>Spread the Word:</b> Share your awesome tryScrum experience with friends, family, and coworkers.

    </li>
    <li>
    <b>Fill Out the Form: </b>Submit the quick referral form listed


    </li>
    <li>
    <b>Earn Your Bonus:</b>Once your friend finishes their workshop, we’ll send you 1000 INR directly to your bank accounts through any convenient mode. It’s that easy!
    </li>
   
    {/* <li>
      Provide feedback to participants and monitor their progress.
    </li> */}
  </ul>
</p>
<br/>
<h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>Why Refer tryScrum?</h3>

<p className="pb-0 lead">
At tryScrum, we specialise in Agile role-based and skill-based training. By referring others, you’re helping them join a community that focuses on improving skills and making organisations better places to work.
</p>
<br/>
<h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>Need Help or Have Questions?</h3>

<p className="pb-0 lead">
We’re here for you! If you have any questions about the referral program, just shoot us an email at help@tryscrum.com.<br/>
Thank you for being a valued member of the tryScrum community. Your support helps us grow and make a difference!
</p>
<br/>
<h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>About tryScrum</h3>
<p className="pb-0 lead">
tryScrum offers top-notch Agile training that helps you boost your skills and advance your career. Our trainers are experienced and passionate about sharing practical knowledge that you can apply right away.
</p>
<a href="/certifications">Find Out More About Our Training Programs</a>
            </div>

            {/* <p
              className="lead pb-0"
              style={{ color: "#012237", fontWeight: "500",fontSize:"18px", }}
            >
              Trainer Application Criteria:
            </p> */}

            {/* <Modals buttonName={"Apply Now"} modalContent={content} /> */}
            <div className="col-lg-12 col-sm-8 col-12 mb-0 text-center">
              {/* <button
                data-tf-popup="VCB2bcQ2"
                data-tf-opacity="100"
                data-tf-size="75"
                data-tf-iframe-props="title=Trainer Application"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
                role="button"
                style={{ letterSpacing: "0.5px" }}
                className="border-0 button_slide slide_down btn btn-small btn-pink  rounded-0 color-white px-3 py-2 text-white rounded"
              >
                Apply Now
              </button> */}
            </div>
          </div>
        </div>
        <div className="col-lg-5">
        <div
            class="card-job hover-up wow animate__ animate__fadeInUp animated border p-3 rounded-3"
            style={{ visibility: "visible", animationName: "fadeInUp" }} >
        <section className="contact-one" style={{paddingTop:"0"}}>
        <div className="container">
        <h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>
          Referer
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
                  placeholder="Referrer Name"
                  value={state.name}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <div className="col-lg-6">
                <input
                  type="number"
                  placeholder="Referrer Phone"
                  name="phone"
                  value={state.phone}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.phone}</small>
              </div>
              <div className="col-lg-12">
              <input
                  type="text"
                  placeholder="Referrer email"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.email}</small>
                </div>
                <h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>
          Referee
          </h3>
                <div className="col-lg-6">
                <input
                  type="text"
                  name="refreeName"
                  placeholder="Referee Name"
                  value={state.refreeName}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.refreeName}</small>
              </div>

              <div className="col-lg-6">
                <input
                  type="number"
                  placeholder="Referee Phone"
                  name="refreePhone"
                  value={state.refreePhone}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.refreePhone}</small>
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  name="refreeEmail"
                  placeholder="Referee Email"
                  value={state.refreeEmail}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.refreeEmail}</small>
              </div>
              <div className="col-lg-12">
                {/* <input
                  type="text"
                  placeholder="Course Name"
                  name="refreecourse"
                  value={state.refreecourse}
                  onChange={handleInputChange}
                /> */}
<div className="form-courses">
{/* <select className="form-select"   name="refreecourse" value={state.refreecourse} onChange={handleInputChange} id="floatingSelect" aria-label="Select Value" style={{height:"70px"}}>
<option value="" disabled>Select Courses</option> 
<option value="CSM">CSM</option> 
<option value="ACSM">ACSM</option>
<option value="PSPO">PSPO</option>
<option value="APSPO">APSPO</option>
<option value="CAL-1">CAL-1</option>
<option value="CAL-2">CAL-2</option>
<option value="CAL-COMBO">CAL-COMBO</option>
<option value="CAS-S1">CAS-S1</option>
<option value="CSPO">CSPO</option>
<option value="ACSPO">ACSPO</option>
<option value="PSM-1">PSM-1</option>
<option value="PSM-2">PSM-2</option>
<option value="APS">APS</option>
<option value="Other">Other</option>
</select> */}
  <Select isMulti name="refreecourse" value={state.refreecourse} onChange={handleSelectChange} id="floatingSelect" className="form-select" options={options} placeholder="Select Courses" classNamePrefix="Select Courses"/>
 <small style={{ color: "red" }}>{errors.refreecourse}</small>
  </div>
  </div>
                <div className="col-lg-12">
                <div className="text-left">
  
                  {loader == 'loading' ? <button
                    type="submit"
                    onClick={submitHandler}
                    className="refer-one__btn thm-btn"
                    disabled
                    style={{position:"relative",background:"#012237"}}
                  >Submit<div class="loader" style={{ bottom: "30px", height: "20px", width: "20px" }}></div></button> : <button
                    type="submit"
                    onClick={submitHandler}
                    className="refer-one__btn thm-btn"
                  >Submit</button>}
                  <small style={{ color: "green" }}>{submissionMessage}</small>
                </div>
              </div>
            </div>
          </form>
          <div className="result text-center"></div>
        </div>
      </section>
      </div>
       </div>
      </div>
    </div>
  )
}

export default CareerContent