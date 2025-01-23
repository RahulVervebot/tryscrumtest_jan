import React, {useState, useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import {Link} from "gatsby";
import corporate from "../../assets/images/corporate-table2-01.png";
import axios from "axios";
import Footer from "../../components/footer/InFooter";
import BrandsTwo from "../../components/BrandsTwo";


const CorporateCoaching = () => {

  const [state, setState] = useState({ name: "", email: "", city: "" , state: "" , company: "" , jobtitle: "" , option: "ScrumMaster Certification", contact: "" ,  message: "" });
  const [errors, setErrors] = useState({  name: "", email: "", city: "" , state: "" , company: "" , jobtitle: "" , option: "ScrumMaster Certification", contact: "" ,  message: "" });
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

   
    if (state.email && state.name && state.city && state.state && state.company && state.jobtitle &&  state.contact && state.message) {
      debugger;

    const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/5715/feedback";
    const formData = new FormData();
    formData.append("your-name", state.name);
    formData.append("email", state.email);
    formData.append("city", state.city);
    formData.append("state", state.state);
    formData.append("company", state.company);
    formData.append("jobtitle", state.jobtitle);
    formData.append("contact-number", state.contact);
    formData.append("option-selected", state.option);
    formData.append("message", state.message);
    formData.append("your-subject", "This is a corporate enquiry form");

  const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
    };

  const res = await axios.post(url, formData, config);
    if (typeof res.data.message !== undefined) {
      setSubmissionMessage(res.data.message);
      setState({ name: "", email: "", city: "" , state: "" , company: "" , jobtitle: "" , contact: "" ,  message: "" });
    } else {
      alert("Please Try Again");
    }
  }else {
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
    if (state.city === "") {
      // debugger;
      error = {
        ...error,
        city: "This is required",
      };
    }
    if (state.state === "") {
      // debugger;
      error = {
        ...error,
        state: "This is required",
      };
    }
    if (state.company === "") {
      // debugger;
      error = {
        ...error,
        company: "This is required",
      };
    }
    if (state.jobtitle === "") {
      // debugger;
      error = {
        ...error,
        jobtitle: "This is required",
      };
    }
    if (state.contact === "") {
      // debugger;
      error = {
        ...error,
        contact: "This is required",
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
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/corporate-training/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/corporate-training/";

  //   // Append to head
  //   document.head.appendChild(linkUS);
  //   document.head.appendChild(linkIN);

  //   // Cleanup function to remove the elements when the component unmounts
  //   return () => {
  //     document.head.removeChild(linkUS);
  //     document.head.removeChild(linkIN);
  //   };
  // }, []);
  

  return (
    <Layout pageTitle="Agile Scrum Master – Professional Coaching Consulting" metaDesc="Find professional scrum master coaching and consulting service at tryScrum. Take the challenge to build an agile organisation." pageName="home" >
      
      <NavTwo />

      <section className="inner-banner__corporate">
          <div className="container">
              <ul className="list-unstyled thm-breadcrumb">

                  <li>
                    <Link to="/">Home</Link>
                  </li>

              </ul>
              <h2 className="inner-banner__title_corporate">Corporate Training</h2>
          </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{paddingTop: "50px"}}>
            <img src={corporate} alt="" className="w-100" />
          </div>
         
          <div className="col-md-6">

          <>
            <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
              <div className="card-header bg-transparent border-0 text-center text-uppercase">
                
                <h3>Corporate Enquiry</h3>
                <div className="ost-multi-header"></div>

              </div>
              <div className="card-body">

                <form action="#" method="POST">

                  <div className="form-group">
                    <input type="text" name="name"  placeholder="Your Name" className="form-control" value={state.name} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.name}</small>
                  </div>
                 
                  <div className="form-group">
                    <input type="text" name="email"  placeholder="Your Email" className="form-control" value={state.email} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.email}</small>
                  </div>

                  <div className="form-group">
                    <input type="text" name="city"  placeholder="City" className="form-control" value={state.city} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.city}</small>
                  </div>

                  <div className="form-group">
                    <input type="text" name="state"  placeholder="State" className="form-control" value={state.state} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.state}</small>
                  </div>

                  <div className="form-group">
                    <input type="text" name="company"  placeholder="Company" className="form-control" value={state.company} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.company}</small>
                  </div>

                  <div className="form-group">
                    <input type="text" name="jobtitle"  placeholder="Job Title" className="form-control" value={state.jobtitle} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.jobtitle}</small>
                  </div>

                  <div className="form-group">
                    <input type="text" name="contact"  placeholder="Contact Number" className="form-control" value={state.contact} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.contact}</small>
                  </div>

                  {/* Dropdown */}
                  <div className="form-floating">

                  {/* <select value={state.value} onChange={handleInputChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select> */}

                    <select className="form-select" name="option" value={state.option} onChange={handleInputChange} id="floatingSelect" aria-label="Select Value">

                      <option value="ScrumMaster Certification">ScrumMaster Certification</option> 
                      <option value="Scrum Product Owner Certification">Scrum Product Owner Certification</option>
                      <option value="Private Team Training">Private Team Training</option>
                      <option value="Executive Training">Executive Training</option>
                      <option value="Leadership Training">Leadership Training</option>
                      <option value="Training From The Back Of The Room">Training From The Back Of The Room</option>
                      <option value="Coaching For Teams And Leaders">Coaching For Teams And Leaders</option>
                      <option value="Other">Other</option>

                    </select>
                  </div>
                  
                  <div className="form-group" style={{ paddingTop:"10px" }}>
                    <textarea type="text" name="message"  placeholder="How Can We Help ?" className="form-control" value={state.message} onChange={handleInputChange} />
                    <small style={{ color: "red" }}>{errors.message}</small>
                    
                  </div>
                    <p className="text-center mb-0">
                      <input type="submit" className="btn btn-danger btn-lg w-100 text-uppercase" onClick={submitHandler} value="Submit" />
                      <small style={{ color: "green" }}>{submissionMessage}</small>
                    </p>
                </form>
                
              </div>
            </div>
          </>

            {/* <div className="row align-items-center h-100">
              <div className="col">
                <h1 className="display-4" style={{color:"#012237", fontWeight:"bold"}}>Enterprise Coaching & Consulting</h1>
                <p className="lead">Spinning up a single Scrum team is a challenge. Building
                                    an agile organization is a journey. We work with you to
                                    create a plan and execute it to build and sustain an agile
                                    organization. Talk to us today to know more about our
                                    offerings. 
                </p>
              </div>
            </div> */}
          </div>
        </div>

      </div> 

      <div className="block-title__title" style={{ marginTop:"70px", marginBottom:"100px", textAlign:"center"}}>Trusted By 50+ Big And Small Brands</div> 

      <BrandsTwo />

      <Footer />
    </Layout>
  );
};

export default CorporateCoaching;