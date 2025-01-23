import React, { useState } from "react";
import axios from "axios";
import Popup from 'reactjs-popup';
import  TeamCoachingSvg  from "../svg/course-path_team.svg";
import Factsvg from "../svg/team-coaching_fact.svg";
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
      formData.append("your-message", state.message + " - Team Coaching Page Contact Inquiry");

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
                    
                    {/* <p className="mbr-fonts-style text1 mbr-text display-6">Speed to market is the third-highest organisational benefit arising from the business agility journey. - <br/>  The Business Agility Report, 2020</p>
                  */}
                 <Factsvg />
                </div>
            </div>
        </div> 

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
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                        
                        <p className="text-start" style={{fontWeight:"500"}}>
                          I've become a regular in tryScrum trainings now due to the good content and delivery style. The trainers share their professional experiences over and above the content which helps in relating more to the subject.
                          The latest training I attended was the ICP-ACC training which was presented well by Arun. I recommend tryScrum trainings to anyone who is interested in learning or improving their knowledge of Agile practices.
                        </p>
                        <p className="text-start"> Amith Babu [ICP-ACC] </p> 
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                        <p className="text-start" style={{fontWeight:"500"}}>
                          I attended the ICP-ACC course recently. I was attending from California from PST time and the class was in the Indian IST time and Arunvignesh is an excellent coach and trainer as he kept the entire class engaged during the duration of the class. Arun shared a lot of examples to explain the concepts and cement the concepts in our head. I truly recommend Arun and tryscrum.com . A purely delightful experience.
                        </p>
                        <p className="text-start">Nandu [ICP-ACC]</p>
                      </div>
                    </div>

                    <div className="carousel-item" >
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                        <p className="text-start" style={{fontWeight:"500"}}>
                          Highly recommend tryScrum if you are desiring to upskill your career path in Agile world. Trainers – Venkatesh Rajamani and Arunvignesh are well qualified trainers and they do have real world experience. Their coaching styles and real time examples were outstanding!. I have attended ICP-CAT in September 2020 with tryScrum and I must say 2 full day program schedule was completely engaging! Thank you tryScrum team.
                        </p>
                        <p className="text-start">Arun S [ICP-CAT]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                        <p className="text-start" style={{fontWeight:"500"}}>
                          3 days worth spending learning the program, some are professionally used and some can be used in personal all through your life, Arun has done a great job to take through the sessions, with activities, use cases etc. These are virtual sessions and other than sitting for hours, which one don't realize due to the way the content is designed and interactions happen, the sessions are good learnings.
                        </p>
                        <p className="text-start">Sai [ICP-ACC]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                        <p className="text-start" style={{fontWeight:"500"}}>
                          I attended the ICAgile ICP-ACC course with Arunvignesh as the instructor. Arun's knowledge on the course and how to explain it with relatable examples was very useful and excellent. Furthermore, he took time to address all the questions, he also made me introspect with examples, questions and was open minded to understand the points I had to share ...
                        </p>
                        <p className="text-start">Sathish Manimaran [ICP-ACC]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-none d-md-block">
                        <p className="text-start" style={{fontWeight:"500"}}>
                          Content and structure: The training was created meticulously understanding the needs of the attendees. Loved the structure of the training as it was very much hands on and collaborative. This enabled knowledge sharing between the attendees during the course. 
                          <br/> The Coach: Venkat is highly knowledgeable and a practical scrum coach. He was polite and patiently answered the questions from everyone ...
                        </p>
                        <p className="text-start">Sri [PSM II]</p>
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
                          I've become a regular in tryScrum trainings now due to the good content and delivery style. The trainers share their professional experiences over and above the content which helps in relating more to the subject ...
                        </p>
                        <p className="text-start-mobile">Amith Babu [ICP-ACC]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                          I attended the ICP-ACC course recently. I was attending from California from PST time and the class was in the Indian IST time and Arunvignesh is an excellent coach and trainer as he kept the entire class engaged during the duration of the class ...
                        </p>
                        <p className="text-start-mobile">Nandu [ICP-ACC]</p>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                          Highly recommend tryScrum if you are desiring to upskill your career path in Agile world. Trainers – Venkatesh Rajamani and Arunvignesh are well qualified trainers and they do have real world experience ...
                        </p>
                        <p className="text-start-mobile">Arun S [ICP-CAT]</p>
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                          3 days worth spending learning the program, some are professionally used and some can be used in personal all through your life, Arun has done a great job to take through the sessions, with activities, use cases etc ...
                        </p>
                        <p className="text-start-mobile">Sai [ICP-ACC]</p> 
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                          I attended the ICAgile ICP-ACC course with Arunvignesh as the instructor. Arun's knowledge on the course and how to explain it with relatable examples was very useful and excellent. Furthermore, he took time to address all the questions ...
                        </p>
                        <p className="text-start-mobile">Sathish Manimaran [ICP-ACC]</p> 
                      </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="10000">
                      <img src={trustbacktwo} className="d-block w-100" style={{height:"400px"}} alt="reviews" />
                      <div className="carousel-caption d-md-block">
                        <p className="text-start-mobile">
                          Content and structure: The training was created meticulously understanding the needs of the attendees. Loved the structure of the training as it was very much hands on and collaborative. This enabled knowledge sharing ...
                        </p>
                        <p className="text-start-mobile">Sri [PSM II]</p> 
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
           
            {/* <div className="wrap">
                <div className="text-wrap vcenter">

                  <div className="content-slider">
                      <div className="slider">
                        <div className="mask">
                          <ul>
                            <li className="anim1">
                              <div className="quote">
                                
                                I've become a regular in tryScrum trainings now due to the good content and delivery style. The trainers share their professional experiences over and above the content which helps in relating more to the subject.
                                The latest training I attended was the ICP-ACC training which was presented well by Arun. I recommend tryScrum trainings to anyone who is interested in learning or improving their knowledge of Agile practices.
                              
                              </div>
                              <div className="source">- Amith Babu [ICP-ACC]</div>
                            </li>
                            <li className="anim2">
                              <div className="quote">
                                
                                I attended the ICP-ACC course recently. I was attending from California from PST time and the class was in the Indian IST time and Arunvignesh is an excellent coach and trainer as he kept the entire class engaged during the duration of the class. Arun shared a lot of examples to explain the concepts and cement the concepts in our head. I truly recommend Arun and tryscrum.com . A purely delightful experience.
                              
                              </div>
                              <div className="source">- Nandu [ICP-ACC]</div>
                            </li>
                            <li className="anim3">
                              <div className="quote">
                              
                                Highly recommend tryScrum if you are desiring to upskill your career path in Agile world. Trainers – Venkatesh Rajamani and Arunvignesh are well qualified trainers and they do have real world experience. Their coaching styles and real time examples were outstanding!. I have attended ICP-CAT in September 2020 with tryScrum and I must say 2 full day program schedule was completely engaging! Thank you tryScrum team.
            
                              </div>
                              <div className="source">- Arun S [ICP-CAT]</div>
                            </li>
                            <li className="anim4">
                              <div className="quote">
                                
                                3 days worth spending learning the program, some are professionally used and some can be used in personal all through your life, Arun has done a great job to take through the sessions, with activities, use cases etc. These are virtual sessions and other than sitting for hours, which one don't realize due to the way the content is designed and interactions happen, the sessions are good learnings
                        
                              </div>
                              <div className="source">- Sai [ICP-ACC]</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> 
                </div>
            </div> */}
            
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
      

        <TeamCoachingSvg />


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
                  Looking to becoming a Team Coach?  
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
                      <div className="header"> Team Coaching </div>

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

          <h2 className="cta-two__title centeredcontactheading" > Looking to becoming a Team Coach? </h2>

                <Popup
                  trigger={<button type="button" className="btn btn-danger btn-lg">Large button</button>}
                  modal
                  nested
                >
                  {close => (
                    <div className="modal-popup">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header"> Team Coaching </div>

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
