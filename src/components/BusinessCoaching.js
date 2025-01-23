import React, { useState } from "react";
import Popup from 'reactjs-popup';
import axios from "axios";

import BusinessCoachingSvg from "../svg/business-coaching.svg";

import Factsvg from "../svg/business_coaching_fact.svg";

import trustback from "../assets/images/grey-background.png";
import trustbacktwo from "../assets/images/review-bg-03-03.png";

import beginner from "../assets/tryScrum-course-logos/beginner.png"
import craftsman from "../assets/tryScrum-course-logos/craftsman.png"
import journeyman from "../assets/tryScrum-course-logos/journeyman.png"
import practitioner from "../assets/tryScrum-course-logos/practitioner.png"


const TeamCoaching = () => {

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
  
      if (state.email && state.name && state.phone && state.message && !(state.phone.length <= 9) && !(state.phone.length >= 12) ) {
        const url =
          "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3474/feedback";
        const formData = new FormData();
        formData.append("your-name", state.name);
        formData.append("your-phone", state.phone);
        formData.append("your-email", state.email);
        formData.append("your-message", state.message + " - Business Coaching Page Contact Inquiry");
  
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
      <section className="pricing-one pricing-page ">
        <div className="container">
  
        {/* <div className="row mbr-justify-content-center">
  
              <div className="col-lg-6 mbr-col-md-10">
                  <div className="wrap">
  
                      <div className="text-wrap vcenter">
                          <p className="mbr-fonts-style text1 mbr-text display-6">93% of corporate leaders and managers agree that a sense of belonging drives organizational performance - <br/> Deloitte Global Human Capital Trends survey, 2020</p>
                      </div>
                  </div>
              </div>
  
              <div className="col-lg-6 mbr-col-md-10">
                  <div className="wrap">
                      <div className="text-wrap vcenter">
                          <p className="mbr-fonts-style text1 mbr-text display-6">Disengaged employees cost their organizations 34 percent of their salary every year - <br/> Gallup, State of the American/Global Workplace <br/> <br/> </p>
                      </div>
                  </div>
              </div>
  
        </div>     */}
  
        <br/>

        <div className="row mbr-justify-content-center" style={{marginTop:"-150px"}}>

         <div className="col-lg-6 mbr-col-md-10">
            <div className="wrap">

                <div className="text-wrap vcenter">

                   <Factsvg /> 

                </div>
            </div>
        </div>       

        {/* On Bigger Screen Text carousel */}
        <div className="col-lg-6 mbr-col-md-10 desktopdisplay" style={{marginTop:"50px"}}>
            <div className="wrap">
                <div className="text-wrap vcenter">

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                  <div className="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                 
                  </div>

                  <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="2000">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                       
                        <p className="text-start">
                          Thank you Venkatesh for the wonderful training experience. It was such an informative and creative session. Apart from the usual training sessions, you made us learn and get in to the Product Owner's shoes without we even realizing it. You helped us put on our thinking hats and come up with a lot of ideas. Roleplay and Situational exercises assisted in understanding concepts in real world ...
                        </p>
                        <p className="text-start">Ayush Srivastava [PSPO]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                       
                        <p className="text-start">
                         Venkatesh is a very qualified trainer with in-depth understanding of Product ownership. The class was very interactive and the activities ensured our participation throughout. Would be excited to take advanced PSPO courses in future. Even though I was from an embedded services background, trainer was able to bridge the gap between software delivery very quickly.
                        </p>
                        <p className="text-start">Naveen Balaji [PSPO]</p>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                        
                        <p className="text-start">
                          The PSPO Advanced training was very insightful and it had a good blend of different tools and thoughtful insights. He deep dived into some very fundamental concepts such as Impact Mapping , Business Model Canvas which is critical for a PO to scale his role . I would highly recommend this course to anyone who is looking to step up.
                        </p>
                        <p className="text-start">Akshata [PSPO-A]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                       
                        <p className="text-start">
                          It was an unexpectedly amazing session with Venkatesh. We covered so many aspects that are essential for a product owner, and not covered by the scrum guide. A perspective broadening experience. Will definitely recommend to my colleagues and onboard for more courses myself.
                        </p>
                        <p className="text-start">Nirjahar Bala [PSPO]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                       
                        <p className="text-start">
                          Venkatesh was very supportive and knowledgeable and had answer all the participants' questions. The course was very organized, interactive and helpful for understanding the advanced concepts in Scrum Product Ownership, and I highly recommend it to anyone interested.
                        </p>
                        <p className="text-start">Hosny Ashry [PSPO-A]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                       
                        <p className="text-start">
                          PSPO - Advanced training. The training was very good. Shared all of the topics and knowledge regarding the role of the product owner.
                        </p>
                        <p className="text-start">Fabio Martins de Franca [PSPO-A]</p>
                      </div>
                    </div>

                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                </div>
            </div>
        </div> 

        {/* On Small Screen Text carousel */}
        <div className="col-lg-6 mbr-col-md-10 mobiledisplay" style={{marginTop:"50px"}}>
            <div className="wrap">
                <div className="text-wrap vcenter">

                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                  <div className="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  
                  </div>

                  <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="2000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                         Thank you Venkatesh for the wonderful training experience. It was such an informative and creative session. Apart from the usual training sessions, you made us learn and get in to the Product Owner's shoes without we even realizing it ...
                        </p>
                        <p className="text-start-mobile">Ayush Srivastava [PSPO]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                          Venkatesh is a very qualified trainer with in-depth understanding of Product ownership. The class was very interactive and the activities ensured our participation throughout ...
                        </p>
                        <p className="text-start-mobile">Naveen Balaji [PSPO]</p>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                          The PSPO Advanced training was very insightful and it had a good blend of different tools and thoughtful insights. He deep dived into some very fundamental concepts such as Impact Mapping ...
                        </p>
                        <p className="text-start-mobile">Akshata [PSPO-A]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                         It was an unexpectedly amazing session with Venkatesh. We covered so many aspects that are essential for a product owner, and not covered by the scrum guide. A perspective broadening experience ...
                        </p>
                        <p className="text-start-mobile">Nirjahar Bala [PSPO]</p> 
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                       
                        <p className="text-start-mobile">
                          Venkatesh was very supportive and knowledgeable and had answer all the participants' questions. The course was very organized, interactive and helpful for understanding the advanced concepts in Scrum Product Ownership ...
                        </p>
                        <p className="text-start-mobile">Hosny Ashry [PSPO-A]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustback} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                       
                        <p className="text-start-mobile">
                          PSPO - Advanced training. The training was very good. Shared all of the topics and knowledge regarding the role of the product owner.
                        </p>
                        <p className="text-start-mobile">Fabio Martins de Franca [PSPO-A]</p>
                      </div>
                    </div>

                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                </div>
            </div> 
        </div> 




      </div>  
  
        <div className="block-title">
          <h2 className="block-title__title">
               Competency Levels
          </h2>
        </div>
        
        <br/>
  
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
                <img alt="Beginner" src={beginner} className="img-fluid" />
            </div>
  
            <div className="col-md-3 col-sm-6 col-xs-12">
                <img  alt="Craftman" src={practitioner}  className="img-fluid" />
            </div>
  
            <div className="col-md-3 col-sm-6 col-xs-12">
                <img src={journeyman} alt="Journeyman" className="img-fluid" />
            </div>
  
            <div className="col-md-3 col-sm-6 col-xs-12">
                <img src={craftsman} alt="Practitioner" className="img-fluid" />
            </div>
          </div>
        
  
          <BusinessCoachingSvg />
  
  
          {/* Quadrant Timeline Text & Images */}
          
          <br />
  
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6" style={{borderBottom: "solid 1px white", borderRight: "solid 1px white", marginBottom: "0"}}>
                          <div className="row">
                              {/* <div className="col-md-6" >
                                  <h3 style={{color: "red"}}><strong>Beginner</strong></h3>
                              </div>
                              <div className="col-md-6">
                                  <img src={beginner}/>
                              </div> */}
                              <div className="text-center" >
                                  <img src={beginner}/>
                              </div>
                          </div>
              <p>The individual doesn't understand or know how to do something. However, the individual is at the starting stage to learn informational knowledge. The length of time an individual spends in this stage depends on the strength of stimulus to learn</p>
              </div>
              <div className="col-md-6"  style={{borderBottom: "solid 1px white", borderLeft: "solid 1px white", marginBottom: "0"}}>
                  <div className="row">
                      {/* <div className="col-md-6">
                          <h3 style={{color: "orange"}}><strong>Practitioner</strong></h3>
                      </div>
                      <div className="col-md-6">
                          <img src={practitioner}/>
                      </div> */}
                      <div className="text-center">
                          <img src={practitioner}/>
                      </div>
                  </div>
                  <p>The individual is practising the skills they gained for some time and still looking to improve their work.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6" style={{borderTop: "solid 1px white", borderRight: "solid 1px white"}}> 
              <div className="row">
                  {/* <div className="col-md-6" >
                      <h3 style={{color: "#FCD12A"}}><strong>Journeyman</strong></h3>
                  </div>
                  <div className="col-md-6">
                      <img src={journeyman}/>
                  </div> */}
                  <div className="text-center">
                      <img src={journeyman}/>
                  </div>
              </div>
              <p>The individual using the competencies daily and is eager to assist others while recognizing their own existing limitations. At this stage, the indvidual is conscious competent.</p>
              </div>
              <div className="col-md-6"  style={{borderTop: "solid 1px white", borderLeft: "solid 1px white"}}>
                  <div className="row">
                      {/* <div className="col-md-6">
                          <h3 style={{color: "green"}}><strong>Craftsman</strong></h3>
                      </div>
                      <div className="col-md-6">  
                          <img src={craftsman}/>
                      </div> */}
                      <div className="text-center">  
                          <img src={craftsman}/>
                      </div>
                  </div>
                  <p>The individual is highly skilled, and their competencies are validated by other experts in similar field and share expertise as an instructor. At this stage, the individual is unconscioulsy competent enough to guide others</p>
              </div>
            </div>
          </div>
        </div>

        <section className="coachingcontact">
        <div className="container">
          
          <div className="row">
            <div className="col-lg-7">
              <div className="video-two__content">
                <h2 className="coachingcontact__title">
                  Looking to becoming a Business Coach?  
                </h2>
                
                <h5 className="video-two__secondary">  </h5>

                <Popup
                  trigger={<button type="button" className="btn btn-danger btn-lg">Get in touch</button>}
                  modal
                  nested
                >
                  {close => (
                    <div className="modal-popup">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header"> Business Coaching </div>

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
               
              </div>
            </div>
           
          </div>
        </div>
      </section>  
  
  
      {/* <div className="containertimeline">
  
          <img src={timelinecontact} className="imageattributes" alt="Timeline Contact" style={{width: "100%"}} />
  
          <div className="centeredcontact">
  
            <h2 className="cta-two__title centeredcontactheading" > Looking to becoming a Business Coach? </h2>
  
                  <Popup
                    trigger={<h5 className="cta-two__title pointer centeredcontactcontent">Get in touch</h5>}
                    modal
                    nested
                  >
                    {close => (
                      <div className="modal-popup">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> Business Coaching </div>
  
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
  
          </div>
  
      </div>     */}
  
      </section>
    );
  };
  
  export default TeamCoaching;
  