import React, { Component } from "react";
import tsf from "../assets/images/tryScrum-foundation.png";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";

class CallToActionNew extends Component {
  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img src={tsf} className="cta-three__image" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                        Self-Paced Course
                  </h2>
                </div>
                <p className="cta-three__text">
                    <a href="https://tryscrum-academy.thinkific.com/courses/scrum-foundations" target="_blank" className="thm-btn">
                        Click Here Only 999INR
                    </a>
                </p>

                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <img src={img1}  width="150" height="150" alt="" />
                 
                  </div>
                  <div className="cta-three__single">
                    <img src={img2}  width="150" height="150" alt="" />
                    
                  </div>

                  <div className="cta-three__single">
                    <img src={img3}  width="150" height="150" alt="" />
                    
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

export default CallToActionNew;
