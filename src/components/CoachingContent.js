import { Link } from "gatsby";
import React from "react";

const Pricing = () => {
  return (
    <section className="pricing-one pricing-page ">
      <div className="container">
        {/* <div className="block-title text-center">
          <h2 className="block-title__title">
            Offering 
          </h2>
        </div> */}
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Team Coaching</h2>
                {/* <p className="pricing-one__name">basic pack</p> */}
                {/* <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <div style={{marginBottom: "20px"}}></div>
                
                {/* <Link to="/team-coaching" className="thm-btn pricing-one__btn_first">
                  Explore
                </Link> */}

                <Link to="/team-coaching" className="thm-btn pricing-one__btn_first">
                  Explore
                </Link>

                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Business Coaching</h2>
                {/* <p className="pricing-one__name">medium pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <div style={{marginBottom: "20px"}}></div>
                
                {/* <Link to="/business-coaching" className="thm-btn pricing-one__btn_second">
                  Explore
                </Link> */}

                <Link to="/business-coaching" className="thm-btn pricing-one__btn_second">
                  Explore
                </Link>

                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Leadership Coaching</h2>
                {/* <p className="pricing-one__name">premium pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <div style={{marginBottom: "20px"}}></div>
                
                {/* <Link to="/leadership-coaching" className="thm-btn pricing-one__btn_third">
                  Explore
                </Link> */}

                <Link to="/leadership-coaching" className="thm-btn pricing-one__btn_third">
                  Explore
                </Link>


                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
