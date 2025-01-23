import React from "react";
import { Link } from "gatsby";
import footer1 from "../assets/images/footer-1-1.png";
import footer2 from "../assets/images/footer-1-2.png";
import footer3 from "../assets/images/footer-1-3.png";
import footer4 from "../assets/images/footer-1-4.png";
import footer5 from "../assets/images/footer-1-5.png";
import footer6 from "../assets/images/footer-1-6.png";

const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">About</h2>
                  <ul className="list-unstyled footer-widget__course-list">
                    <li>
                        <p className="footer-widget__text">
                        tryScrum is a global consulting company with a strong mission to humanize Organisations.
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
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Company</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">

                      <li>
                        <a href="/about"><i className="fas fa-info" style={{marginRight: "15px"}}></i>About Us</a>
                      </li>
                      <li>
                        <a href="/contact"><i class="fas fa-address-book" style={{marginRight: "15px"}}></i>Contact Us</a>
                      </li>
                      <li>
                      <a href = "tel:+919789490848"><i class="fas fa-phone" style={{marginRight: "7px"}}></i> +91 9789490848 </a> 
                      </li>
                      <li>
                       <a href = "mailto: help@tryscrum.com" target="__blank"><i class="fas fa-envelope" style={{marginRight: "7px"}}></i> help@tryscrum.com</a>
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
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Featured</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="/courses">In-Demand Courses</a>
                      </li>
                      <li>
                        <a href="/leadership">Our Team</a>
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
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Policies</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      {/* <li>
                        <a href="#">Terms and Conditions</a>
                      </li> */}
                      <li>
                        <a href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819" target="__blank">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/refund-policies" target="__blank">Refund Policies</a>
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
              {/*
              <div className="col-xl-3 col-lg-6 col-sm-12">
                 <div className="footer-widget footer-widget__gallery">
                  <h2 className="footer-widget__title">Gallery</h2>
                  <ul className="list-unstyled footer-widget__gallery-list">
                    <li>
                      <a href="#none">
                        <img src={footer1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer2} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer3} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer4} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer5} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer6} alt="" />
                      </a>
                    </li>
                  </ul>
                </div> 
              </div>
                    */}
              {/* <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    We bring the right people together to build capabilities
                    that enable organizations to become learning Organizations.
                  </p>
                  <div className="footer-widget__btn-block">
                    <Link to="/contact" className="thm-btn">
                      Contact Us
                    </Link>
                    <a href="#none" className="thm-btn">
                      Purchase
                    </a> 
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">
              © Copyright 2022 tryScrum.com. All Rights Reserved.
               {/* <a href="https://www.vervebot.io" target="__blank">Powered By Vervebot</a> */}
            </p>
            <div className="site-footer__social">
              <div
                onClick={scrollTop}
                onKeyDown={scrollTop}
                role="button"
                tabIndex={0}
                className="scroll-to-target site-footer__scroll-top"
              >
                <i className="kipso-icon-top-arrow"></i>
              </div>

              <a href="https://www.facebook.com/tryScrum.org" target="__blank">
                <i className="fab fa-facebook-square"></i>
              </a>

              <a href="https://twitter.com/try_Scrum" target="__blank">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="https://www.linkedin.com/company/tryscrum/" target="__blank">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="https://tryscrumstudio.slack.com/" target="__blank">
                <i className="fab fa-slack"></i>
              </a>
              
              <a href="https://www.meetup.com/Scrum-Master-Studio/" target="__blank">
                <i className="fab fa-meetup"></i>
              </a>

              <a href="https://www.instagram.com/try_Scrum/" target="__blank">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="search-popup">
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
  );
};
export default Footer;
