import React from "react"
import tryscrumlogo from "../assets/tryscrum_logo.png"
import trybusinessagility from "../assets/images/white-web-logo.png"
import ModalRibbon from "./ModalRibbon"

const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div>
        <footer className="site-footer" style={{ backgroundColor: "#022c46" }}>
          <div className="site-footer__upper" style={{ paddingTop: "0" }}>
            <div className="container-fluid">
              <div className="row" style={{ paddingTop: "0" }}>
                <div className="col-12 container-fluid">
                  <div className="site-header__decor hide_color">
                    <div className="site-header__decor-row">
                      <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-1"></div>
                      </div>
                      <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-2"></div>
                      </div>
                      <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row text-center  border-$gray-500  pb-2"
                style={{ borderBottom: "1px solid #ffffff30" }}
              >
                <div className="col-xl-12 m-0">
                  <a href="/">
                    <img
                      src={tryscrumlogo}
                      width="80px"
                      height="80px"
                      alt="logo"
                    />
                  </a>
                  <span className="text-white fs-5">tryScrum</span>
                </div>
                {/* <div className="col-xl-1 displaymobiledevice m-0" style={{width:"100%"}}><div style={{borderLeft:"1px solid #ffffff30",width:"1px",height:"90px",display:"flex",justifyContent:"center",textAlign:"center"}} ></div></div>
                <div className="col-xl-5  pt-3 m-0 "> <span className=" h3" style={{color:"#73b89e"}}>HUMANIZING</span> <span style={{color:"#f05457"}} className=" h3 pl-2">ORGANIZATION</span> </div> */}
              </div>
            </div>
            <div
              className="container-fluid align-items-center"
              style={{ borderBottom: "1px solid #ffffff30" }}
            >
              <div className="row">
                <div className="col-md-4 text-center mb-0 pt-2">
                  <a href="/contact">
                    <h4 className="contact-color">CONTACT</h4>
                  </a>
                </div>
                <div className="col-md-4 text-center mb-0 pt-2">
                  <a href="/courses">
                    <h4 className="offering-color">OFFERINGS</h4>
                  </a>
                </div>
                <div className="col-md-4 text-center mb-0 pt-2">
                  <a
                    href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819"
                    target="__blank"
                  >
                    <h4 className="privacy-color">PRIVACY POLICY</h4>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="container container-sm-fluid align-items-center"
              style={{ height: "auto" }}
            >
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div
                    className="footer-widget footer-widget__contact"
                    style={{ paddingTop: "40px", paddingBottom: "15px" }}
                  >
                    <h2 className="footer-widget__title  mr-0 ">ABOUT</h2>
                    <ul className="list-unstyled footer-widget__course-list">
                      <li>
                        <p
                          className="footer-widget__text text-align-center"
                          style={{ width: "30Ch" }}
                        >
                          tryScrum is a global consulting company with a strong
                          mission to humanize Organizations.
                        </p>
                      </li>
                      {/* <li>
                      <h2>
                        <Link to="/icagile-enterprise-coaching/">
                          Enterprise Transformation – Practitioner (Accredited by ICAgile)
                        </Link>
                      </h2>
                      <p>Arunvignesh Ramakrishnan</p>
                    </li>
                    <li>
                      <h2>
                        <Link to="/prokanban/">
                            Certified Professional Kanban – PK 1
                        </Link>
                      </h2>
                      <p>Daniel Vacanti </p>
                    </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div
                    className="footer-widget footer-widget__link"
                    style={{ paddingTop: "40px", paddingBottom: "15px" }}
                  >
                    <h2 className="footer-widget__title pr-5 mr-0">COMPANY</h2>
                    <div className="footer-widget__link-wrap">
                      <ul className="list-unstyled footer-widget__link-list ">
                        <li>
                          <a href="/about">
                            <i
                              className="fas fa-info"
                              style={{ marginRight: "15px" }}
                            ></i>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="/contact">
                            <i
                              className="fas fa-address-book"
                              style={{ marginRight: "15px" }}
                            ></i>
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="tel:+919789490848">
                            <i
                              className="fas fa-phone"
                              style={{ marginRight: "7px" }}
                            ></i>{" "}
                            +91 9789490848{" "}
                          </a>
                        </li>
                        <li>
                          <a href="mailto: help@tryscrum.com" target="__blank">
                            <i
                              className="fa fa-envelope"
                              style={{ marginRight: "7px" }}
                            ></i>{" "}
                            help@tryscrum.com
                          </a>
                        </li>

                        <li className="mobiledisplay">
                          <ModalRibbon buttonName="Request a call back" style={{ marginRight: "7px", filter: "invert(69%) sepia(15%) saturate(255%) hue-rotate(159deg) brightness(220%) contrast(93%)"}} styleText={"#94a3ac"} />
                        </li>
                        <li className="tabletdisplay">
                          <ModalRibbon buttonName="Request a call back" style={{ marginRight: "7px", filter: "invert(69%) sepia(15%) saturate(255%) hue-rotate(159deg) brightness(220%) contrast(93%)"}} styleText={"#94a3ac"} />
                        </li>
                      </ul>
                      {/* <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Contact</a>
                      </li> 
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/courses">All Courses</a>
                      </li>
                    </ul> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-6">
                  <div
                    className="footer-widget footer-widget__link"
                    style={{ paddingTop: "40px", paddingBottom: "15px" }}
                  >
                    <h2 className="footer-widget__title pr-5 mr-0">FEATURED</h2>
                    <div className="footer-widget__link-wrap">
                      <ul className="list-unstyled footer-widget__link-list">
                        <li>
                          <a href="/certifications">In-Demand Courses</a>
                        </li>
                        <li>
                          <a href="/team">Our Team</a>
                        </li>
                        <li>
                          <a href="/about">Our Vision</a>
                        </li>
                        <li>
                          <a href="/blogs">Blogs</a>
                        </li>
                      </ul>
                      {/* <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Contact</a>
                      </li> 
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/courses">All Courses</a>
                      </li>
                    </ul> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-6">
                  <div
                    className="footer-widget footer-widget__link"
                    style={{ paddingTop: "40px", paddingBottom: "15px" }}
                  >
                    <h2 className="footer-widget__title pr-5 mr-0">POLICIES</h2>
                    <div className="footer-widget__link-wrap ">
                      <ul className="list-unstyled footer-widget__link-list">
                        {/* <li>
                        <a href="#">Terms and Conditions</a>
                      </li> */}
                        <li>
                          <a
                            href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819"
                            target="__blank"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="/refund-policies" target="__blank">
                            Refund Policies
                          </a>
                        </li>
                        {/* <li>
                        <a href="#">Cookie Policy</a>
                      </li> */}
                      </ul>
                      {/* <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Contact</a>
                      </li> 
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/courses">All Courses</a>
                      </li>
                    </ul> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-6">
                  <div
                    className="footer-widget footer-widget__link"
                    style={{ paddingTop: "40px", paddingBottom: "15px" }}
                  >
                    <h2 className="footer-widget__title pr-5 mr-0">
                      AFFILIATES
                    </h2>
                    <div className="footer-widget__link-wrap ">
                      <ul className="list-unstyled footer-widget__link-list">
                        {/* <li>
                        <a href="#">Terms and Conditions</a>
                      </li> */}
                        <li>
                          <a
                            href="https://trybusinessagility.com"
                            target="__blank"
                          >
                            <img
                              src={trybusinessagility}
                              width={140}
                              alt="trybusinessagility.com"
                            />
                          </a>
                        </li>
                        {/* <li>
                        <a href="#">Cookie Policy</a>
                      </li> */}
                      </ul>
                      {/* <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Contact</a>
                      </li> 
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/courses">All Courses</a>
                      </li>
                    </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__social d-flex container-fluid justify-content-center">
            {/* <div className="site-footer__social"> */}
            <a href="https://www.facebook.com/tryScrum.org" target="__blank">
              <i className="fab fa-facebook-square"></i>
            </a>

            <a href="https://twitter.com/try_Scrum" target="__blank">
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/tryscrum/"
              target="__blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://tryscrum-community.slack.com/" target="__blank">
              <i className="fab fa-slack"></i>
            </a>

            <a href="https://www.meetup.com/smstudiochn/" target="__blank">
              <i className="fab fa-meetup"></i>
            </a>

            <a href="https://www.instagram.com/try_Scrum/" target="__blank">
              <i className="fab fa-instagram"></i>
            </a>
            {/* </div> */}
          </div>

          <div
            className="container-fluid ml-0 mr-0 p-2 site-footer__bottom"
            style={{
              backgroundColor: "#022c46",
              textAlign: "center",
              color: "#ffffff70",
            }}
          >
            © Copyright 2023 tryScrum.com. All Rights Reserved.
          </div>
        </footer>

        <div className="search-popup" style={{ backgroundColor: "#022c46" }}>
          <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
          <div className="search-popup__inner">
            <form action="#" className="search-popup__form">
              <input
                type="text"
                name="search"
                placeholder="Type here to Search...."
              />
              <button type="submit">
                <i className="kipso-icon-magnifying-glass"></i>
              </button>
              <div className="cancel"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
