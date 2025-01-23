import React, { Component } from "react";
// import bolwu from "../assets/images/benefits-of-learning.png";
import bolwu from "../assets/images/benefits-of-learning.webp";

class CallToActionThree extends Component {
  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img src={bolwu} className="cta-three__image" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content_home">
                <div className="block-title text-left">
                  <h4 className="block-title__title">
                    Benefits of learning with Us
                  </h4>
                </div>
                <p className="cta-three__text">
                tryScrum believes in impactful education and experienced trainers to teach them.  We support people wherever they are on their learning journey, from beginner to highly experienced practitioners, helping them grow over time with ongoing learning opportunities and resources. Our Community is a platform for aspiring practitioners to learn and grow.
                </p>

                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i className="kipso-icon-strategy"></i>
                    <p className="cta-three__single-text">
                      Professional Courses
                    </p>
                  </div>
                  <div className="cta-three__single">
                    <i className="kipso-icon-training"></i>
                    <p className="cta-three__single-text">Live Learning</p>
                  </div>

                  
                </div> 

                <div className="cta-three__single-wrap">

                  <div className="cta-three__single">
                    <i className="kipso-icon-human-resources"></i>
                    <p className="cta-three__single-text">Expert Trainers</p>
                  </div>

                  <div className="cta-three__single">
                    <i className="kipso-icon-professor"></i>
                    <p className="cta-three__single-text">Trusted Brand</p>
                  </div>
                  
                </div> 

                {/* <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i className="kipso-icon-strategy"></i>
                    <p className="cta-three__single-text">
                      Professional Courses
                    </p>
                  </div>
                  <div className="cta-three__single">
                    <i className="kipso-icon-training"></i>
                    <p className="cta-three__single-text">Live Learning</p>
                  </div>

                  <div className="cta-three__single">
                    <i className="kipso-icon-human-resources"></i>
                    <p className="cta-three__single-text">Expert Trainers</p>
                  </div>

                  <div className="cta-three__single">
                    <i className="kipso-icon-human-resources"></i>
                    <p className="cta-three__single-text">Expert Trainers</p>
                  </div>
                  
                </div> */}

                  {/* <div className="col-xs-12 col-md-8">
                    <div className="row">

                      <div className="col-xs-4 col-md-4">
                        <i className="kipso-icon-strategy"></i>
                        <p className="cta-three__single-text">
                          Professional Courses
                        </p>
                      </div>

                      <div className="col-xs-4 col-md-4">
                        <i className="kipso-icon-training"></i>
                        <p className="cta-three__single-text">Live Learning</p>
                      </div>
                      

                    </div>
                  </div>

                  <div className="col-xs-12 col-md-8">
                    <div className="row">

                  
                      <div className="col-xs-4 col-md-4">
                        <i className="kipso-icon-human-resources"></i>
                        <p className="cta-three__single-text">Expert Trainers</p>
                      </div>

                      <div className="col-xs-4 col-md-4">
                        <i className="kipso-icon-human-resources"></i>
                        <p className="cta-three__single-text">Expert Trainers</p>
                      </div>

                    </div>
                  </div> */}

                {/* <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <img src={img1}  width="150" height="150" alt="" />
                 
                  </div>
                  <div className="cta-three__single">
                    <img src={img2}  width="150" height="150" alt="" />
                    
                  </div>

                  <div className="cta-three__single">
                    <img src={img3}  width="150" height="150" alt="" />
                    
                  </div>
                </div> */}


                {/* <a href="#none" className="thm-btn">
                  Learn More
                </a> */}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToActionThree;
