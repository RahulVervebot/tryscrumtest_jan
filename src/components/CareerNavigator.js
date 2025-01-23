import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import csm from '../assets/images/new-logos/csm.png'
import acsm from '../assets/images/new-logos/acsm.png'
import icp from '../assets/images/course_logo/ICP-ACC2.png'
import asf from '../assets/images/new-logos/caf.png'
import cspo from '../assets/images/new-logos/cspo.png'
import pspo from '../assets/images/course_logo/PSPOLogo.png'
import acspo from '../assets/images/new-logos/acspo.png'
import cal2 from '../assets/images/new-logos/cal2.png'
import cal1 from '../assets/images/new-logos/cal1.png'
import cas from '../assets/images/new-logos/casp1.png'
import cdtf from '../assets/images/course_logo/cdtf.png'
import cdthf from '../assets/images/course_logo/cdthf.png'
import Popup from 'reactjs-popup';
import benefits from '../assets/images/benefits-sign-vector.jpg';

import axios from "axios";
export default function CareerNavigator() {
    const [state, setState] = useState({ name: "", email: "", message: "", phone:"" });
    const [errors, setErrors] = useState({ name: "", email: "", message: "", phone:""});
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
  

    // for scrum navigator
    const submitHandler = async (e) => {
      e.preventDefault();
      if (state.email && state.name && state.message) {
        debugger;
  
      const url = "https://tryscrumlive.vervebot.io/wp-json/contact-form-7/v1/contact-forms/9509/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);
      formData.append("your-number", state.phone);
      formData.append("your-subject", "Scrum Mastery Career Navigator");
    const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
  
    const res = await axios.post(url, formData, config);
      if (typeof res.data.message !== undefined) {
        //alert(res.data.message);
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", message: ""});
      } else {
        alert("please try again");
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

    // for product owner navigator
    const productsubmitHandler = async (e) => {
      e.preventDefault();
      if (state.email && state.name && state.message) {
        debugger;
  
      const url = "https://tryscrumlive.vervebot.io/wp-json/contact-form-7/v1/contact-forms/9509/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);
      formData.append("your-number", state.phone);
      formData.append("your-subject", "Product Owner Career Navigator");
    const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
  
    const res = await axios.post(url, formData, config);
      if (typeof res.data.message !== undefined) {
        //alert(res.data.message);
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", message: ""});
      } else {
        alert("please try again");
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
//agile career navigator
    const agilesubmitHandler = async (e) => {
      e.preventDefault();
      if (state.email && state.name && state.message) {
        debugger;
  
      const url = "https://tryscrumlive.vervebot.io/wp-json/contact-form-7/v1/contact-forms/9509/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);
      formData.append("your-number", state.phone);
      
      formData.append("your-subject", "Agile Leader Career Navigator");
    const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
  
    const res = await axios.post(url, formData, config);
      if (typeof res.data.message !== undefined) {
        //alert(res.data.message);
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", message: ""});
      } else {
        alert("please try again");
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
    <section class="about-two bg-light course_page_main">
<div class="container">
<div className="block-title text-left">
                  <h4 className="block-title__title" style={{textAlign: "center"}}>
                   Career Navigator
                  </h4>
                </div>
<div class="row">
    <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_1_career">
            <div class="text-center p-4">
                <span class="price"  style={{background: "#1d66b5"}}><span class="number" style={{color: "#fff"}}>Scrum Mastery Career Navigator</span></span>
                <ul class="pricing-text mb-5">
                    <li style={{textAlign:"center"}}><span style={{textDecoration: 'line-through'}}>₹1,16000</span><span style={{fontSize: "26px", fontWeight:"700"}}>₹95000</span></li>
                    <li><img src={csm} style={{width: "50px"}}/><span>Certified Scrum Master</span></li>
                    <li><img src={acsm} style={{width: "50px"}}/>Advanced Certified ScrumMaster<sup>	&#174;</sup></li>
                    <li><img src={icp} style={{width: "50px"}}/>Certified Professional Agile Coaching</li>
                    <li><img src={asf} style={{width: "50px"}}/>Certified Agile Facilitator</li>
                </ul>
                <Popup
                  trigger={
                <a href="#/" class="btn btn-primary d-block px-2 py-3" >Enquire Now</a>}
                modal
                  nested
                >
                 {close => (
                    <div className="modal-popup">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header" style={{fontSize: "33px"}}>Scrum Master Career Navigator</div>

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
                                      
                                      <input type="submit" class="btn btn-success btn-send" value="Submit Interest!" onClick={submitHandler} />
   

                                  </div>
                                  <h6 style={{ color: "green" }}>{submissionMessage}</h6>
                              </div>
      
                        </form>  
                      </div>

                  )}
                </Popup>
            </div>
            <div style={{textAlign:"center"}}>
                <img src={benefits} style={{width: "50%", textAlign:"center", margin:"10% 0"}}/>
                </div>
               <ul class="pricing-text">
                <li><i class="fa fa-check"></i> Golden Alumni Benefits</li>
                    <li><i class="fa fa-check"></i> Free CV Review</li>
                    <li><i class="fa fa-check"></i> Two- 1:1 Mentoring calls </li>
                    <li> <i class="fa fa-check"></i> tryScrum endorsed Scrum Master Badge</li>
                    <li> <i class="fa fa-check"></i> 30% discounts on tryScrum events </li>
                    <li> <i class="fa fa-check"></i> Access to tryScrum Community</li>
                </ul>
        </div>
    </div>
    <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_2_career">
             <div class="text-center p-4">
               
                <span class="price"  style={{background: "#00750a"}}> <span class="number" style={{color: "#fff"}}>Product Owner Career Navigator</span></span>
                <ul class="pricing-text mb-5">
                <li style={{textAlign:"center"}}><span style={{textDecoration: 'line-through'}}>₹1,51,000</span><span style={{fontSize: "26px", fontWeight:"700"}}>₹95,500</span></li>
                    <li><img src={cspo} style={{width: "50px"}}/>Certified Scrum Product Owner</li>
                    <li><img src={pspo} style={{width: "50px"}}/>Professional Scrum Product Owner</li>
                    <li><img src={acspo} style={{width: "50px"}}/>Advanced Certified Scrum Product Owner</li>
                    <li><img src={cdthf} style={{width: "50px"}}/>Certified- Design Thinking Foundation</li>
                </ul>
                <Popup
                  trigger={
                <a href="#/" class="btn btn-primary d-block px-2 py-3" >Enquire Now</a>}
                modal
                  nested
                >
                 {close => (
                    <div className="modal-popup">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header" style={{fontSize: "33px"}}>Product Owner Career Navigator</div>

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
                                      
                                      <input type="submit" class="btn btn-success btn-send" value="Submit Interest!" onClick={productsubmitHandler} />
                                

                                     

                                  </div>
                                  <h6 style={{ color: "green" }}>{submissionMessage}</h6>
                              </div>
      
                        </form>  
                      </div>

                  )}
                </Popup>  
         
                </div>
                <div style={{textAlign:"center"}}>
                <img src={benefits} style={{width: "50%", textAlign:"center", margin:"10% 0"}}/>
                </div>
               <ul class="pricing-text">
                <li><i class="fa fa-check"></i> Golden Alumni Benefits</li>
                    <li><i class="fa fa-check"></i> Free CV Review</li>
                    <li><i class="fa fa-check"></i> Two- 1:1 Mentoring calls </li>
                    <li> <i class="fa fa-check"></i> tryScrum endorsed Product Owner Badge</li>
                    <li> <i class="fa fa-check"></i> 30% discounts on tryScrum events </li>
                    <li> <i class="fa fa-check"></i> Access to tryScrum Community</li>
                </ul>


        </div>
        
    </div>
    <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_3_career">
             <div class="text-center p-4">
        
                <span class="price"  style={{background: "#e8343d"}}><span class="number" style={{color: "#fff"}}>Agile Leader Career Navigator</span></span>
                <ul class="pricing-text mb-5">
                <li style={{textAlign:"center"}}><span style={{textDecoration: 'line-through'}}>₹2,20,000</span><span style={{fontSize: "26px", fontWeight:"700"}}>₹1,74,000</span></li>
                <li><img src={cal1} style={{width: "50px"}}/>Certified Agile Leadership-I</li>
                    <li><img src={cas} style={{width: "50px"}}/>Certified Agile Skills - Scaling Level 1</li>
                    <li><img src={cdtf} style={{width: "50px"}}/>Certified Digital Transformation Foundation</li>
                    <li><img src={cal2} style={{width: "50px"}}/>Certified Agile Leadership-II</li>
                </ul>
                <Popup
                  trigger={
                <a href="#/" class="btn btn-primary d-block px-2 py-3" >Enquire Now</a>}
                modal
                  nested
                >
                 {close => (
                    <div className="modal-popup">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header" style={{fontSize: "33px"}}>Agile Leader Career Navigator</div>

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
                                      
                                      <input type="submit" class="btn btn-success btn-send" value="Submit Interest!" onClick={agilesubmitHandler} />
                   

                                  </div>
                                  <h6 style={{ color: "green" }}>{submissionMessage}</h6>
                              </div>
      
                        </form>  
                      </div>

                  )}
                </Popup> </div> 
                <div style={{textAlign:"center"}}>
                <img src={benefits} style={{width: "50%", textAlign:"center", margin:"10% 0"}}/>
                </div>
               <ul class="pricing-text">
                <li><i class="fa fa-check"></i> Golden Alumni Benefits</li>
                    <li><i class="fa fa-check"></i> Access to Executive Education</li>
                    <li><i class="fa fa-check"></i> Two- 1:1 calls with an Instructor</li>
                    <li> <i class="fa fa-check"></i> tryScrum endorsed Agile Leader Badge</li>
                    <li> <i class="fa fa-check"></i> 30% discounts on tryScrum events </li>
                    <li> <i class="fa fa-check"></i> Access to tryScrum Community</li>
                </ul>
        </div>
        
    </div>
</div>
</div>
</section>

</div>
  )

}
