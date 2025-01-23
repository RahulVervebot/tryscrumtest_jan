import React, {useState, useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import {Link} from "gatsby";

import CoachingHeader from "../../components/CoachingHeader";
import CoachingContent from "../../components/CoachingContent"

import Agilebanner from "../../svg/agile-banner.svg";
import Agilecontent from "../../svg/agile-content.svg";

import Vision from "../../svg/vision-mission.svg";
import Coachingprogram from "../../svg/coaching-program.svg";

import CoachingHeader2Svg from "../../svg/CoachingHeader2Svg.svg";
import CoachingContentSvg from "../../svg/CoachingContentSvg.svg";

import teamagile from "../../assets/images/team-agile.png";
import leadershipagile from "../../assets/images/leadership-agile.png";
import businessgile from "../../assets/images/business-agile.png";


import Footer from "../../components/footer/InFooter";
import axios from "axios";
import Popup from 'reactjs-popup';

const Coaching = () => {

  const [state, setState] = useState({ name: "", email: "", message: "" });
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
      debugger;

    const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/94/feedback";
    const formData = new FormData();
    formData.append("your-name", state.name);
    formData.append("your-email", state.email);
    formData.append("your-message", state.message + " - Main Coaching Page Popup Contact Inquiry");

  const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };

  const res = await axios.post(url, formData, config);
    if (typeof res.data.message !== undefined) {
      //alert(res.data.message);
      setSubmissionMessage(res.data.message);
      setState({ name: "", email: "", message: "" });
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
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/agile-coaching/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/agile-coaching/";

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
    <Layout pageTitle="tryScrum | Coaching | Offerings" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="agile-coaching" >
  
      
      <NavTwo />

      {/* <CoachingHeader title="Offerings" />  */}

      <Agilebanner />

      <Vision />

      {/* <Coachingprogram /> */}

      <div className="container">
        {/* <h1 className="text-center">Apple Like Content Section</h1> */}
        <div className="row">
          <div className="col-md-6">
            <img src={teamagile} alt="" className="w-100" />
          </div>
         
          <div className="col-md-6">
            <div className="row align-items-center h-100">
              <div className="col">
                <h1 className="display-4" style={{color:"#2da296"}}>Team Coaching</h1>
                <p className="lead">The team coaching process helps connect the overall efforts and intellect to reach a mutual target or goal. Under VUCA circumstances, the management processes are adapting to the coaching methods to strengthen the team members. We have assisted 100s of teams through our productive journey to design career courses for the team coaches. We help the team and the leaders through consulting, coaching, and training of skills. The foundation of these methods develops from years of experience with executive leaders, organisational transformation, and teams in concern. 
                  <br /><br />  
                    <Link to="/in/team-coaching/" >
                      <button type="button" className="btn" style={{color:"white", backgroundColor:"#2da296"}}>Explore</button>
                    </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      

        <div className="row">
          <div className="col-md-6 order-md-6">
            <img src={businessgile} alt="" className="w-100"/>
          </div>
        
          <div className="col-md-6 order-md-1">
            <div className="row align-items-center h-100">
              <div className="col">
                <h1 className="display-4" style={{color:"#f05457"}}>Business Coaching</h1>
                <p className="lead">Business coaching primarily focuses on helping the business or product owners construct better plans, vision, approaches, resourcing, launching, etc. It helps them to upscale the business from the ground level. As a business coach, you will get familiar with successful business models, strategies, and activities essential to overcome a complex situation. We assist the business coaches with skill training and consulting, which derives from many years of experience. The efforts are certain to provide a positive outcome. 
                  <br /><br />
                  <Link to="/in/business-coaching/">
                    <button type="button" className="btn" style={{color:"white", backgroundColor:"#f05457"}}>Explore</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-6">
            <img src={leadershipagile} alt="" className="w-100" />
          </div>
         
          <div className="col-md-6">
            <div className="row align-items-center h-100">
              <div className="col">
                <h1 className="display-4" style={{color:"#f89b16"}}>Leadership Coaching</h1>
                <p className="lead">Leadership coaching boosts the leadership skills and behavioural aspects to impact the business positively. It initiates developmental growth, which helps in transitioning into newer roles associated with greater responsibilities. As a leadership coach, you will identify the essential tools to uplift the leadership aspects profoundly sustainably. It implies on both individual-level and organisation. We assist the leadership coaches to grow better perspectives and inspire others to take up challenges by offering steady support.
                  <br /><br />
                  <Link to="/in/leadership-coaching">
                   <button type="button" className="btn" style={{color:"white", backgroundColor:"#f89b16"}}>Explore</button>
                  </Link>
                </p>
              </div>
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
                  Not sure which path to choose?
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
                      <div className="header"> Coaching Track </div>

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



      {/* <div className="container">
            <div className="row">
                  
                  
                  <div className="col-8">

                   <Agilecontent />
                
                  </div>

                  <div className="col-4">

                  <div className="course-details__meta">
                    <div className="course-details__price">
                                  <p className="course-details__price-text">Request More Info </p>
                                  <br/>

                                        <form
                                          action="#"
                                          method="post"
                                          className="contact-one__form contact-form-validated"
                                          noValidate="novalidate"
                                        >
                                          <div className="row low-gutters">
                                          <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={state.name}
                                                onChange={handleInputChange}
                                                className="form-control"
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
                                                className="form-control"
                                              />  
                                              <small style={{ color: "red" }}>{errors.email}</small>
                                            </div>
                                            
                                            <div className="form-group">
                                              <textarea
                                                placeholder="Write Message"
                                                name="message"
                                                value={state.message}
                                                onChange={handleInputChange}
                                                className="form-control"
                                              ></textarea>
                                              <small style={{ color: "red" }}>{errors.message}</small>
                                              
                                              <div className="text-center">
                                                <button
                                                  type="submit"
                                                  className="btn btn-primary"
                                                  onClick={submitHandler}
                                                >
                                                  Submit
                                                </button>
                                                <small style={{ color: "green" }}>{submissionMessage}</small>
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                  </div>
                      </div>


                  </div>

            </div>
      </div> */}

      {/* <CoachingContent />      */}

      {/* <CoachingHeader2Svg /> */}

        {/* <div className="container" style={{marginTop:"20px"}}>
            <div className="row">
              <div className="col-lg-8">
                    <div className="main-timeline">

                        <CoachingContentSvg /> 

                        <div className="timeline">
                            <a href="/leadership-coaching" className="timeline-content">
                                <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                                <h3 className="title">Leadership</h3>
                                <p className="description">
                                Leadership Coaching help strengthen
                                leadership skills, and change behaviors
                                that can directly impact business results.
                                Also, helps support and grow leaders, especially as they transition into new roles or prepare to take on more responsibilities.
                                </p>    
                            </a>
                        </div>
                        <div className="timeline">
                            <a href="business-coaching" className="timeline-content">
                                <div className="timeline-icon"><i class="fas fa-business-time"></i></div>
                                <h3 className="title">Business</h3>
                                <p className="description">
                                  The business coaching services are geared to specifically help the Business/ Product Owners come up in the visioning, planning, resourcing, launching, and scaling a business from scratch.
                                </p>
                            </a>
                        </div>
                        <div className="timeline">
                            <a href="team-coaching" className="timeline-content">
                                <div className="timeline-icon"><i class="fas fa-user-friends"></i></div>
                                <h3 className="title">Team</h3>
                                <p className="description">
                                  Team Coaching helps in harnessing the collective intelligence of a team to align on mutual goals and processes. In a VUCA environment, management styles are evolving to embrace a coaching approach which empowers all members of a team. We have worked with 100s of teams using in our journey and designed a career track for team coaches. We support teams and team leaders with consulting, coaching and skills training based on a decade of experience with executive leaders teams and
                                </p>
                            </a>
                        </div>  

                    </div>
                </div> 


                <div className="col-lg-4">

                  <div className="course-details__meta">
      

                                <div className="course-details__price">
                                <p className="course-details__price-text">Request More Info </p>
                                <br/>

                                      <form
                                        action="#"
                                        method="post"
                                        className="contact-one__form contact-form-validated"
                                        noValidate="novalidate"
                                      >
                                        <div className="row low-gutters">
                                        <div className="form-group">
                                          <input
                                              type="text"
                                              name="name"
                                              placeholder="Your Name"
                                              value={state.name}
                                              onChange={handleInputChange}
                                              className="form-control"
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
                                              className="form-control"
                                            />  
                                            <small style={{ color: "red" }}>{errors.email}</small>
                                          </div>
                                          
                                          <div className="form-group">
                                            <textarea
                                              placeholder="Write Message"
                                              name="message"
                                              value={state.message}
                                              onChange={handleInputChange}
                                              className="form-control"
                                            ></textarea>
                                            <small style={{ color: "red" }}>{errors.message}</small>
                                            
                                            <div className="text-center">
                                              <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={submitHandler}
                                              >
                                                Submit
                                              </button>
                                              <small style={{ color: "green" }}>{submissionMessage}</small>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                </div>
                          </div>
                    </div>
                </div>
              </div>  */}

      <Footer />
    </Layout>
  );
};

export default Coaching;
