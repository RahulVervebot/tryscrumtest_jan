import React from "react";
import { Link } from "gatsby";
import blog1 from "../assets/images/try-Scrum-imgaes/imgs/team-coaching-canvas2.png";
// import blog1 from "../assets/images/try-Scrum-imgaes/imgs/tools-team-coaching-canvas.png";
import blog2 from "../assets/images/try-Scrum-imgaes/imgs/leadership-coaching-canvas.png";


const ToolsContent = () => {

  return (

    <section className="blog-one blog-page">
          <div className="container">
            <div className="row">

              <div className="col-lg-6">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src={blog1} alt="" />
                    {/* <Link to="/news-details" className="blog-one__plus">
                      <i className="kipso-icon-plus-symbol"></i>
                    </Link> */}
                  </div>
                  <div className="blog-one__content text-center">
                    
                    
                      <Link to="/team-coaching-canvas">
                        <h2 className="blog-one__title">
                            Team Coaching Canvas
                        </h2>
                      </Link>
                    
                    <p className="blog-one__text">
                        The coaches can follow the guidelines of the Canvas and partner with their teams and their stakeholders to maximise the required abilities to move forward successfully, achieving the shared goals.                    
                    </p>
                    <Link to="/team-coaching-canvas" >
                      <p className="blog-one__link">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>


              <div className="col-lg-6">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src={blog2} alt="" />
                  
                  </div>
                  <div className="blog-one__content text-center">
                    
                    
                      {/* <Link to="/whitepaper-scaling-scrum"> */}
                        <h2 className="blog-one__title">
                        Leadership Coaching Canvas
                        </h2>
                      {/* </Link> */}
                    
                    {/* <p className="blog-one__text">
                    In 2016, a leading security products company adopted Scrum to support teams working in complex product development, in order to make the organization more adaptive and able to react faster to change.                </p> */}
                    {/* <Link to="/whitepaper-scaling-scrum" > */}
                      <p className="blog-one__link">
                        Stay Tuned.
                      </p>
                    {/* </Link> */}
                  </div>
                </div>
              </div>     
            </div>
          </div>
        </section>
  );
};


export default ToolsContent;

