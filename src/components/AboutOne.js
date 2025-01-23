import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ClientStripe from "../assets/images/circle-stripe.png";
import aboutImage1 from "../assets/images/about-2-1.jpg";
import aboutImage2 from "../assets/images/about-2-2.jpg";

import ptn from "../assets/images/ptn.png";
import mo from "../assets/images/mo.png";
import pro from "../assets/images/pro.png";
import sa from "../assets/images/sa.png"


import gallery1 from "../assets/images/1_about.jpg";
import gallery2 from "../assets/images/2_about.jpg";
import gallery3 from "../assets/images/3_about.jpg";
import gallery4 from "../assets/images/4_about.jpg";
import gallery5 from "../assets/images/5_about.jpg";

import awards from "../assets/images/awards.jpg";



class AboutOne extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-one ">
        {/* <img src={ClientStripe} className="about-one__circle" alt="" /> */}
        <div className="container text-center">
          <div className="block-title text-center">
            <h4 className="block-title__title_about">
            Our <span style={{color:"green"}}> mission </span> is to <span style={{color:"blue"}}> humanize </span>  <br />
            Organisations by <br />
            <span style={{color:"orange"}}> helping </span> them become <span style={{color:"red"}}> fully </span> <br />
            <span style={{color:"red"}}> capable </span> and  <span style={{color:"green"}}> resilient </span>.
            </h4>
          </div>
          <div className="about-one__img" style={{marginTop:"100px"}}>

             <div className="row">
        
            </div> 

            <div className="about-one__review">
              <p className="about-one__review-count counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={this.state.startCounter ? 7000 : 0} />
                </VisibilitySensor>
              </p>
              <div className="about-one__review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="about-one__review-text">students loved us</p>
            </div>
          </div>
          <div className="block-title__title">Our Story</div>
          <div>
          <p className="about-one__text" style={{marginTop:"50px"}}>
          What started as an experiential idea is now the leading Management Consulting company.
          </p>
          </div>

          <div className="container offset-md-3">

        </div>  

        <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col-md-6 offset-md-3">
              

                <ul className="timeline">
                  <li>
                    <h3 style={{textAlign:"left", color:"red"}}>2018</h3>
                  
                    <p style={{fontSize:"20px"}}> A heroic idea is born.</p>
                    <p style={{fontSize:"20px"}}>Venkatesh Rajamani founded tryScrum.com </p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"green"}}>2019</h3>
                  
                    <p style={{fontSize:"20px"}}>tryScrum was chosen as a preferred partner by one of the Worl’d most respected non-profit Organisation</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"blue"}}>2019</h3>
                    
                    <p style={{fontSize:"20px"}}>tryScrum went partnership and established its headquarters in Chennai.</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"orange"}}>2020</h3>
                    
                    <p style={{fontSize:"20px"}}>tryScrum listed as one of the top institutes and positioned itself as one of the most trusted Brands.</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"orange"}}>2021</h3>
                    
                    <p style={{fontSize:"20px"}}>tryScrum serves more than 5 of the Fortune 100 companies.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
 
   <div className="row">

   <div className="block-title__title" style={{marginBottom:"100px", marginTop:"20px"}}>Our Accreditation</div> 
          
          <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                   
                    <ul className="list-unstyled team-details__certificate-list" style={{marginLeft:"-180px"}}>
                            <li>
                              <img src={ptn} height="150" width="150" alt="" />
                            </li>
                            <li>
                              <img src={pro} height="100" width="350" alt="" />
                            </li>
                            <li>
                              <img src={mo} height="150" width="150" alt="" />
                            </li>
                            <li>
                              <img src={sa} height="150" width="150" alt="" />
                            </li>
                    </ul> 

                </div>
            </div>
          </div>

  </div>
        
        <div className="container mt-5 mb-5">
            <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="block-title__title" style={{marginBottom:"100px", marginTop:"20px"}}>Our Values</div> 
        </div>
        </div>
        </div>

       
        <div className="container offset-md-1">
        <div className="row">
          <div className="col-lg-2 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery1} alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery2} alt="" />
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery3} alt="" />
             
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery4} alt="" />
              
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery5} alt="" />
             
            </div>
          </div>
          
        </div>
      </div> 

        </div>
    
      </section>
    );
  }
}

export default AboutOne;
