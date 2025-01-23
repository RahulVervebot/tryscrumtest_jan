import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import about1 from "../assets/images/group-people.jpg";
import about1 from "../../assets/images/group-people.jpg";

import {Link} from "gatsby";

export default class AboutTwo extends Component {
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

    console.log(this.state.startCounter);
    return (
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h4 className="block-title__title">
                    Our Mission
                  </h4>
                </div>
                
                {/* <p className="about-two__text">
                tryScrum’s mission is to humanize organizations by going deeper to unlock prescience to challenge traditional thinking and drive transformation. We want to help Organizations become fully human and fully capable. We bring great value to clients by building capabilities through our training, coaching, and consulting services.
                </p> */}

                <div className="about-two__text">
                  <span style={{fontSize:"28px",color:"#000000"}}>Our</span> <span style={{fontSize:"28px",color:"green"}}>mission</span>
                  <span style={{fontSize:"28px",color:"#000000"}}> is to </span>
                  <span style={{fontSize:"28px",color:"blue"}}>humanize</span> 
                  <p>
                    <span style={{fontSize:"28px",color:"#000000", marginLeft:"10%"}}> Organisations by </span>
                    <p> 
                      <span style={{fontSize:"28px",color:"#F5A431"}}> helping </span> <span style={{fontSize:"28px",color:"#000000"}}> them become </span> <span style={{fontSize:"28px",color:"red"}}> fully </span>
                      <p style={{marginLeft:"5%"}}>
                        <span style={{fontSize:"28px",color:"red"}}>capable </span> <span style={{fontSize:"28px",color:"#000000"}}> and </span> <span style={{fontSize:"28px",color:"green"}}> resilient.</span>
                      </p>
                    </p>
                  </p>
                </div>

                <div className="about-two__single-wrap">

                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-professor"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Start learning from our experts
                      </p>
                    </div>
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Enhance your skills with us now
                      </p>
                    </div>
                  </div> 
                </div>
                <Link to="/in/about/" className="thm-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                {/* <span className="about-two__image-dots"></span> */}
                <img src={about1} alt="" />
                <div className="about-two__count">
                  <div className="about-two__count-text">
                    Trusted by
                    <span className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <p style={{display:"flex",flexDirection:"row"}}><CountUp end={this.state.startCounter ? 10000 : 0} />+</p>
                      </VisibilitySensor>
                    </span>
                    Students
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
