import React from "react";
import gallery1 from "../assets/images/gallery-scrum-1.jpg";
import gallery2 from "../assets/images/gallery-scrum-2.jpg";
import gallery3 from "../assets/images/gallery-scrum-3.jpg";
import gallery4 from "../assets/images/gallery-scrum-4.jpg";
import gallery5 from "../assets/images/gallery-1-5.jpg";
import gallery6 from "../assets/images/gallery-1-6.jpg";
import gallery7 from "../assets/images/gallery-1-7.jpg";
import gallery8 from "../assets/images/gallery-1-8.jpg";
import gallery9 from "../assets/images/gallery-1-9.jpg";

const GalleryScrum = () => {
  return (
    <section className="gallery-one">
      <div className="container">
        <div className="row">

                <h2 className="blog-one__title">
                    What we're about
                </h2>
                <br/>
                
                <p className="blog-one__text makingblack">
                    The “Scrum Master Studio” is intended to instill skills within Scrum Masters, Product Owners and Managers to create them as future leaders. Leadership require learning, convincing, nurturing and bringing in Change. That doesn’t happen overnight, but it is a journey. Come Role Play!
                <br/>
                <br/>
                <h2 className="blog-one__title">
                    Scrum Master Studio Chapters
                </h2>
                </p>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery1} alt="" />
              {/* <a href={gallery1} className="gallery-one__popup img-popup">
                 <i className="kipso-icon-plus-symbol"></i> 
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery2} alt="" />
              {/* <a href={gallery2} className="gallery-one__popup img-popup">
                 <i className="kipso-icon-plus-symbol"></i> 
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery3} alt="" />
              {/* <a href={gallery3} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i> 
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery4} alt="" />
              {/* <a href={gallery4} className="gallery-one__popup img-popup">
                 <i className="kipso-icon-plus-symbol"></i> 
              </a> */}
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery5} alt="" />
              <a href={gallery5} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery6} alt="" />
              <a href={gallery6} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery7} alt="" />
              <a href={gallery7} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery8} alt="" />
              <a href={gallery8} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery9} alt="" />
              <a href={gallery9} className="gallery-one__popup img-popup">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
          </div> */}

        </div>
      </div>

      <section className="pricing-one pricing-page ">
      <div className="container">
        {/* <div className="block-title text-center">
          <h2 className="block-title__title">
            Choose the right <br />
            plan for you
          </h2>
        </div> */}
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Meet Us!</h2>
                {/* <p className="pricing-one__name">basic pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <ul className="pricing-one__list list-unstyled"></ul>
                  <a href="https://www.meetup.com/smstudiochn/" target="__blank" className="thm-btn pricing-one__btn">
                  Click Here
                </a>
                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Slack Us </h2>
                {/* <p className="pricing-one__name">medium pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <ul className="pricing-one__list list-unstyled"></ul>
                <a href="https://scrummasters-studio.slack.com/" target="__blank" className="thm-btn pricing-one__btn">
                    Click Here
                </a>
                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Have A Question? </h2>
                {/* <p className="pricing-one__name">premium pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <ul className="pricing-one__list list-unstyled"></ul>
                <a href="mailto:support@tryscrum.com" target="__blank" className="thm-btn pricing-one__btn">
                    Mail Us at support@tryscrum.com
                </a>
                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Meet Us! - Bangalore </h2>
                {/* <p className="pricing-one__name">basic pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <ul className="pricing-one__list list-unstyled"></ul>
                  <a href="https://www.meetup.com/SMStudio_blr/" target="__blank" className="thm-btn pricing-one__btn">
                  Click Here
                </a>
                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-one__single">
              <div className="pricing-one__inner">
                <h2 className="pricing-one__price">Meet Us! - Singapore</h2>
              
                {/* <p className="pricing-one__name">basic pack</p>
                <ul className="pricing-one__list list-unstyled">
                  <li>3 Full Courses</li>
                  <li>Lifetime free support</li>
                  <li>Upgrate options</li>
                  <li>9 Days Time</li>
                </ul> */}
                <ul className="pricing-one__list list-unstyled"></ul>
                  <a href="https://www.meetup.com/tryScrum-Studio-Singapore/" target="__blank" className="thm-btn pricing-one__btn">
                  Click Here
                </a>
                {/* <p className="pricing-one__tag-line">No hidden charges!</p> */}
              </div>
            </div>
          </div>

         </div> 

      </div>
    </section>

    </section>
  );
};

export default GalleryScrum;
