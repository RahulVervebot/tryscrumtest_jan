import React, {useState} from 'react'
import axios from 'axios';
import contactimg from '../assets/images/course_logo/contact-us.jpg'
export default function CourseContact() {
    const [state, setState] = useState({ name: "", email: "", message: "", phone:"", course_name:"" });
    const [errors, setErrors] = useState({ name: "", email: "", message: "", phone:"", course_name:""});
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
  
      const url = "https://tryscrumtest.vervebot.io/wp-json/contact-form-7/v1/contact-forms/9705/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);
      formData.append("your-number", state.phone);
      formData.append("course_name", state.course_name);
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
      if (state.course_name === "") {
        // debugger;
        error = {
          ...error,
          course_name: "This is required",
        };
      }
      setErrors(error);
    } 
      //console.log(res.data.message, "res");
    };

    
  return (
    <div>
       <div className="container-fluid background_color_course_contact" id="coures_contact_11">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 thm-base-bg-3 mb-0" style={{background:"#FFDEA8"}}>
              <div className="cta-two__single_home">

                <div className="cta-two__content">
                <h2 className="cta-two__title" style={{color: "#000"}}>Contact Us</h2>
                <p style={{color:"#000"}}> Questions about offerings, or pricing? Our sales experts are ready to help</p>
                <h3 style={{color: "#000", fontSize:"18px", fontWeight:"600"}}>Talk with our team</h3>
                <p style={{color:"#000"}}>+91 9789490848 | help@tryscrum.com</p>
                <img src={contactimg} style={{width:"80%", borderRadius:"20px"}}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 thm-base-bg-4_duplicate mb-0" style={{background:"#FEF2DA"}}>
              <div className="cta-two__single_home">

                <div className="cta-two__content">
                <form
                              action="#"
                              method="POST"
                              className="course_page_form"
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
              <select value={state.course_name} onChange={handleInputChange} name="course_name">
              <option value="Scrum Master">Course Type</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Product Owner">Product Owner</option>
            <option value="Agile Leader">Agile Leader</option>
          </select>
          <small style={{ color: "red" }}>{errors.course_name}</small>
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
                                      
                                      <input type="submit" class="btn btn-success btn-send" value="Submit" onClick={submitHandler}/>
      </div>
                                  <h6 style={{ color: "green" }}>{submissionMessage}</h6>
                              </div>
      
                        </form> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
