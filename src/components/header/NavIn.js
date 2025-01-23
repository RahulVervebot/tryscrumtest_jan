import React, { Component } from "react";
import { Link } from "gatsby";
import Feedbackform from "../RequestForm";
import "../../assets/css/bundlecourse.css";
// Original logo
import logo from "../../assets/images/logo-dark.png";
//import logo from "../../assets/images/6-anniversary-logo.png";
//import Anniversary from "../../assets/images/6-anniversary-banner.jpg";
import psm from "../../assets/images/psm.png";
import psm2 from "../../assets/images/psm2.png";
import apk from "../../assets/images/apk.png";
import calo from "../../assets/images/cal-o.png";
import cale from "../../assets/images/cal-e.png";
import csm from "../../assets/images/new-logos/csmsm.png";
import acsm from "../../assets/images/new-logos/acsmsm.png";
import icpacc from "../../assets/images/icp-acc.png";
import icpcat from "../../assets/images/icp-cat.png";
import icpent from "../../assets/images/icp-ent.png";
import pale from "../../assets/images/pal-e.png";
import psk from "../../assets/images/psk.png";
import pspo2 from "../../assets/images/pspo-2.png";
import pspo from "../../assets/images/pspo.png";
import sps from "../../assets/images/sps.png";
import cspo from "../../assets/images/new-logos/csposm.png";
import acspo from "../../assets/images/new-logos/acsposm.png";
import psu from "../../assets/images/psu.png";
import caleot from "../../assets/images/new-logos/cal1sm.png";
import palebm from "../../assets/images/pal-ebm.png";
import amp from "../../assets/images/amp.png";
import calt from "../../assets/images/cal-t.png";
import icppdm from "../../assets/images/icp-pdm.png";
import icpbaf from "../../assets/images/icp-baf.png";
import pmi from "../../assets/images/pmi.png";
import aps from "../../assets/images/aps_icon.png";
import apssd from "../../assets/images/aps-software_icon.png";
import userstory from "../../assets/images/userstory.png";
import psfs from "../../assets/images/psfs.png";
import asccf from "../../assets/images/new-logos/cafsm.png";
import tryscrumlogo from "../../assets/images/tryscrum.png";
import closeButton from "../../assets/images/close-button.png";
import cal2 from "../../assets/images/new-logos/cal2sm.png";
import aspk from "../../assets/images/aspk-mini.png";
import lessp from "../../assets/images/less2-mini.png";
import lessb from "../../assets/images/less1-mini.png";
import acssmall from "../../assets/images/new-logos/casp1sm.png";
import calcombo from "../../assets/images/new-logos/cal.jpg";
import ppdvsm from "../../assets/images/ppdvsm.png";
import pspbm from "../../assets/images/pspbmsm.png";

import { Backdrop, CircularProgress } from "@mui/material";

const handleRedirect = () => {
  // Logic to trigger redirect
  window.location.href = '/courses/';
};
const scrollToBottom = (id) => {
  const element = document.getElementById(id);
  element.scrollTop = element.scrollHeight;
};

const scrollToTop = (id) => {
  const element = document.getElementById(id);
  element.scrollTop = 0;
};



class NavTwo extends Component {

  constructor() {
    super();
    this.state = {
      sticky: false,
      mobileDisplay: false,
      showHide: false,
      loader: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ showHide: false });
    this.setState({ loader: false });
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  showHidetoggleopen = () => {
    this.setState({ showHide: true });
  };

  showHidetoggleclose = () => {
    this.setState({ showHide: false });
  };


  render() {
    const { location } = this.props;
    console.log(this.state.showHide, "showHide");
    return (
      <>
    
        <Backdrop
          open={this.state.loader}
          sx={{ zIndex: "9999999999", height: "100vh" }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        <header
          className="site-header site-header__header-two "
          style={{ background: "#fff" }}
        >
          {/*Desktop Nav start */}
        
          <nav
            className={`ribbon navbar navbar-expand-lg navbar-light header-navigation stricky  ${this.state.sticky ? "stricked-menu stricky-fixed ribbon" : ""
              }`}

          // style={{display:"flex",flexDirection:"column"}}
          >
            <Feedbackform />
            <div className="container" style={{ background: "#fff", zIndex:'9' }}>
              <div
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/in" className="navbar-brand">
                  <img
                    src={logo}
                    className="main-logo"
                    width="200"
                    alt="Awesome alter text"
                  />
                </Link>
                <button
                  onClick={this.showHidetoggleopen}
                  className="menu-toggler"
                  data-target=".main-navigation"
                >
                  <span className="kipso-icon-menu"></span>
                </button>
              </div>

              <div
                className="main-navigation"
                style={{
                  display: `${this.state.showHide ? "flex" : "none"}`,
                }}
              >
                <button
                  onClick={this.showHidetoggleclose}
                  className="menu-toggler my-4 position-fixed"
                  data-target=".main-navigation"
                >
                  <span style={{ filter: "invert(100%)" }}>
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src={closeButton}
                    />
                  </span>
                </button>
                <ul className="navigation-box">
                  {/* <li onClick={this.showHidetoggleclose}  className="current"> */}
                  <li onClick={this.showHidetoggleclose}>
                    <Link className="firstmenu" to="#">
                      Offerings
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/corporate-training">Corporate Training</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/agile-coaching">Coaching</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/enterprise-coaching-consulting">
                          tryBusiness Agility
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* courses link only show on small screen size*/}
                  <li onClick={this.showHidetoggleclose} className="hideonfull">
                    <Link className="secondmenu" to="/in/certifications">
                      Courses
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/scrum-master/certified-scrum-master-csm/">
                          Certified Scrum Master
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/scaling/certified-agile-skills-scaling-level-1/">
                          Certified Agile Skills Scaling Level 1
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/scrum-master/advanced-certified-scrum-master-acsm/">
                          {/* <img src={csm} /> */}
                          Advanced Certified Scrum Master
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/product-owner/certified-scrum-product-owner-cspo/">
                          Certified Scrum Product Owner
                        </Link>
                      </li>
                      <li
                        onClick={this.showHidetoggleclose}
                        style={{ whiteSpace: "none" }}
                      >
                        <Link to="/in/certifications/agile/scrum/product-owner/advanced-certified-scrum-product-owner-acspo/">
                          Advanced Certified Scrum Product Owner
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/product-owner/professional-product-discovery-and-validation/">
                                
                                  Professional Product Discovery & Validation
                                </Link>
                              </li>
                      {/* <li onClick={this.showHidetoggleclose}>
                        <Link to="/certified-agile-leadership-essentials/">
                          Certified Agile Leadership - Essentials (CAL-E)
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/certified-agile-leadership-organizations/">
                          Certified Agile Leadership - Organizations (CAL-O)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/certified-agile-leadership-for-teams-cal-t/">
                          {" "}
                          Certified Agile Leadership for Teams (CAL-T)
                        </Link>
                      </li> */}

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/leadership/certified-agile-leadership-i/">
                          {" "}
                          Certified Agile Leadership - I
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/leadership/certified-agile-leadership-ii/">
                          Certified Agile Leadership - II
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/leadership/certified-agile-leadership-combination/">
                          Certified Agile Leadership (I and II) Combo
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/leadership/professional-agile-leadership-essentials-pal-e/">
                          Professional Agile Leadership - Essentials
                        </Link>
                      </li>



                      
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/scrum-master/professional-scrum-master-i-psm/">
                          Professional Scrum Master I
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/scrum-master/professional-scrum-master-ii/">
                          Professional Scrum Master II
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/product-owner/professional-scrum-product-owner-i-pspo/">
                          Professional Scrum Product Owner I
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/product-owner/professional-scrum-product-owner-ii/">
                          Professional Scrum Product Owner II
                        </Link>
                      </li>
                      {/* <li onClick={this.showHidetoggleclose} >
                        <Link to="/certified-scrum-master/">Certified Scrum Master</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose} >
                        <Link to="/certified-scrum-product-ownercspo/">Certified Scrum Product Owner</Link>
                      </li> */}

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/product-owner/professional-agile-leadership-evidence-based-management/">
                          PAL - Evidence-Based Management
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/product-owner/product-management-certification-icp-pdm/">
                          Product Management – Practitioner(ICP-PDM)
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/product-backlog-management/">
                        Professional Scrum Product  Backlog Management (PSPBM)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/scaling/scaled-professional-scrum-sps-training/">
                          Scaled Professional Scrum
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/facilitation/professional-scrum-facilitation-skills-psfs/">
                          Professional Scrum Facilitation Skills
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/facilitation/agile-coaching-skills-certified-facilitator-acs-cf/">
                        Certified Agile Facilitator
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/agile-coaching-certification-icp-acc-training/">Agile Coaching (ICP-ACC)</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/enterprise-agile-coaching-icp-ent-training/">
                          Agility in the Enterprise (ICP-ENT)
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/coaching-agile-transformation-icp-cat-training/">
                          Coaching Agile Transitions (ICP-CAT)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/kanban/applying-scaled-portfolio-kanban/">
                          Applying Scaled Portfolio Kanban
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/kanban/professional-scrum-with-kanban/">
                          Professional Scrum with KanBan
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/kanban/applying-professional-kanban-apk/">
                          Applying Professional KanBan
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/kanban/applying-metrics-for-predictability-apm/">
                          Applying Metrics for Predictability(APM)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/scrum/professional-scrum-with-user-experience-psu/">
                          Professional Scrum with UX
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/certified-less-basics-icp-clb-training/">
                          Certified LeSS Basics
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/certified-less-practitioner-clp-training/">
                          Certified LeSS Practitioner
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/business-agility-foundations-icp-baf-training/">
                          Business Agility - Essentials (ICP-BAF)
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/certifications/agile/agile-certified-practitioner-pmi-acp-training/">
                          Project Management Institute- Agile Certified
                          Practitioner (PMI-ACP)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link
                          to="https://tryscrum.teachable.com/p/introduction-to-the-scrum-framework"
                          target="__blank"
                        >
                          {" "}
                          Scrum Foundations{" "}
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link
                          to="https://sso.teachable.com/secure/238180/checkout/2933345/agile-metrics-for-predictability?coupon_code=TRYS80"
                          target="__blank"
                        >
                          {" "}
                          Metrics for Predictability
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link
                          to="/in/certifications/agile/scrum/developer/applying-professional-scrum/"
                          target="__blank"
                        >
                          APS
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link
                          to="/in/certifications/agile/scrum/developer/applying-professional-scrum-for-software-development/"
                          target="__blank"
                        >
                          APS - Software Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    onClick={this.showHidetoggleclose}
                    className="mega-drop-down"
                  >
                    <Link className="secondmenu" to="/in/certifications">
                      Courses
                    </Link>

                    <div
                      className="animated fadeIn mega-menu p-0 border border-top-0 mt-0 pt-0"
                      style={{ backgroundColor: "#012237" }}
                    >
                      <a
                        onClick={() => scrollToBottom("div")}
                        title="Show More"
                        style={{
                          position: "absolute",
                          right: "20px",
                          bottom: "20px",
                          zIndex: "20",
                        }}
                      >
                        <i
                          style={{ fontSize: "22px" }}
                          className="fa fa-arrow-circle-down"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        onClick={() => scrollToTop("div")}
                        title="Go Top"
                        style={{
                          position: "absolute",
                          right: "50px",
                          bottom: "20px",
                          zIndex: "20",
                        }}
                      >
                        <i
                          style={{ fontSize: "22px" }}
                          className="fa fa-arrow-circle-up"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <div
                        id="div"
                        className="mega-menu-wrap"
                        style={{
                          width: "100%",
                          height: "80vh",
                          overflow: "scroll",
                          marginTop: "-10px",
                          scrollBehavior: "smooth",
                        }}
                      >
                        <div className="row p-2 pt-0 mt-0 bg-white">
                          <div className="col-md-4 ">
                            <h4 className="row mega-title">
                              Leadership Education
                            </h4>
                            {/* previous comment out <ul className="stander"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              {/* <li onClick={this.showHidetoggleclose}>
                                <Link to="/certified-agile-leadership-organizations/">
                                  <img src={calo} />
                                  Certified Agile Leadership - Organizations
                                  (CAL-O)
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/certified-agile-leadership-essentials/">
                                  <img src={cale} />
                                  Certified Agile Leadership - Essentials
                                  (CAL-E)
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/certified-agile-leadership-for-teams-cal-t/">
                                  <img src={calt} /> Certified Agile Leadership
                                  for Teams (CAL-T)
                                </Link>
                              </li> */}
                               <div style={{ marginBottom: "5px" }}></div>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/leadership/certified-agile-leadership-i/">
                                  <img src={caleot} /> Certified Agile
                                  Leadership - I
                                </Link>
                              </li>

                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/leadership/certified-agile-leadership-ii/">
                                  <img src={cal2} />
                                  Certified Agile Leadership - II
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/leadership/certified-agile-leadership-combination/">
                                  <img src={calcombo} />Certified Agile Leadership (I and II) Combo
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/leadership/professional-agile-leadership-essentials-pal-e/">
                                  <img src={pale} /> Professional Agile
                                  Leadership - Essentials
                                </Link>
                              </li>
                             
                            </ul>
                          </div>

                          {/* previous comment out <div className="col-md-2"> */}
                          <div className="col-md-4">
                            <h4 className="row mega-title">Scrum Master</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/scrum-master/certified-scrum-master-csm/">
                                  <img src={csm}  />
                                  Certified Scrum Master
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/scaling/certified-agile-skills-scaling-level-1/">
                                  <img src={acssmall} />
                                  Certified Agile Skills Scaling Level 1
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/scrum-master/advanced-certified-scrum-master-acsm/">
                                  <img src={acsm} />
                                  Advanced Certified Scrum Master
                                </Link>
                              </li>

                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/scrum-master/professional-scrum-master-i-psm/">
                                  <img src={psm} />
                                  Professional Scrum Master I
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/scrum-master/professional-scrum-master-ii/">
                                  <img src={psm2} />
                                  Professional Scrum Master II
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/scaling/scaled-professional-scrum-sps-training/">
                                  <img src={sps} />
                                  Scaled Professional Scrum
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/facilitation/professional-scrum-facilitation-skills-psfs/">
                                  <img src={psfs} alt="psfs" />
                                  Professional Scrum Facilitation Skills
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/facilitation/agile-coaching-skills-certified-facilitator-acs-cf/">
                                  <img src={asccf} alt="psfs" />
                                  Certified Agile Facilitator
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="row mega-title">Product Owner</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/product-owner/certified-scrum-product-owner-cspo/">
                                  <img src={cspo} />
                                  Certified Scrum Product Owner
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/product-owner/advanced-certified-scrum-product-owner-acspo/">
                                  <img src={acspo} />
                                  Advanced Certified Scrum Product Owner
                                </Link>
                              </li>
                              <li
                        onClick={this.showHidetoggleclose}
                        style={{ whiteSpace: "none" }}
                      >
                        <Link to="/in/certifications/agile/scrum/product-owner/professional-product-discovery-and-validation/">
                        <img src={ppdvsm} />
                        Professional Product Discovery & Validation
                        </Link>
                      </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/product-owner/professional-scrum-product-owner-i-pspo/">
                                  <img src={pspo} />
                                  Professional Scrum Product Owner I
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/product-owner/professional-scrum-product-owner-ii/">
                                  <img src={pspo2} />
                                  Professional Scrum Product Owner II
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/product-owner/professional-agile-leadership-evidence-based-management/">
                                  <img src={palebm} />
                                  PAL - Evidence-Based Management
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/product-owner/product-management-certification-icp-pdm/">
                                  <img src={icppdm} />
                                  Product Management – Practitioner(ICP-PDM)
                                </Link>
                              </li>

                             <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                              <Link to="/in/certifications/agile/scrum/product-backlog-management/">
                                  <img src={pspbm} />
                                  Professional Scrum Product  Backlog Management (PSPBM)
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* previous comment out <div className="col-md-3"> */}
                          <div className="col-md-4">
                            <h4 className="row mega-title">
                              Coaching Workshop
                            </h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/agile-coaching-certification-icp-acc-training/">
                                  <img src={icpacc} />
                                  Agile Coaching (ICP-ACC)
                                </Link>
                                {/* previous comment out <span>Description of Women</span> */}
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/enterprise-agile-coaching-icp-ent-training/">
                                  <img src={icpent} />
                                  Agility in the Enterprise (ICP-ENT)
                                </Link>
                                {/* previous comment out <span>Description of men Cloths</span> */}
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/coaching-agile-transformation-icp-cat-training/">
                                  <img src={icpcat} />
                                  Coaching Agile Transitions (ICP-CAT)
                                </Link>
                                {/* previous comment out <span>Description of Kids Cloths</span> */}
                              </li>
                              {/* previous comment out below also <li onClick={this.showHidetoggleclose} ><Link to="#">Others</Link> */}
                              {/* <span>Description of Others Cloths</span> */}
                              {/* </li> */}
                              {/* <li onClick={this.showHidetoggleclose} > */}
                              {/* <Link className="view-more btn btn-sm " to="#">View more
                                        </Link>          */}
                              {/* previous comment out above also</li> */}
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="row mega-title">Kanban Training</h4>
                            {/*  previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/kanban/applying-scaled-portfolio-kanban/">
                                  <img src={aspk} width="28px" />
                                  Applying Scaled Portfolio Kanban
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/kanban/professional-scrum-with-kanban/">
                                  <img src={psk} />
                                  Professional Scrum with KanBan
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/kanban/applying-professional-kanban-apk/">
                                  <img src={apk} />
                                  Applying Professional KanBan
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/kanban/applying-metrics-for-predictability-apm/">
                                  <img src={amp} />
                                  Applying Metrics for Predictability(APM)
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-4">
                            <h4 className="row mega-title">Design Thinking</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/scrum/professional-scrum-with-user-experience-psu/">
                                  <img src={psu} />
                                  Professional Scrum with UX
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-4">
                            <h4 className="row mega-title">Business Agility</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/in/certifications/agile/certified-less-basics-icp-clb-training/"
                                  target="_blank"
                                >
                                  <img src={lessb} width="28px" />
                                  Certified LeSS Basics
                                </Link>
                              </li>

                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/in/certifications/agile/certified-less-practitioner-clp-training/"
                                  target="_blank"
                                >
                                  <img src={lessp} width="28px" />
                                  Certified LeSS Practitioner
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/in/certifications/agile/business-agility-foundations-icp-baf-training/"
                                  target="__blank"
                                >
                                  <img src={icpbaf} />
                                  Business Agility - Essentials (ICP-BAF)
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/in/certifications/agile/agile-certified-practitioner-pmi-acp-training/" target="__blank">
                                  <img src={pmi} />
                                  Project Management Institute- Agile Certified
                                  Practitioner (PMI-ACP)
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-4">
                            <h4 className="row mega-title">
                              Online Self-learning
                            </h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="https://tryscrum.teachable.com/p/introduction-to-the-scrum-framework"
                                  target="__blank"
                                >
                                  <img src={tryscrumlogo} />
                                  Scrum Foundations
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="https://sso.teachable.com/secure/238180/checkout/2933345/agile-metrics-for-predictability?coupon_code=TRYS80"
                                  target="__blank"
                                >
                                  <img src={tryscrumlogo} />
                                  Metrics for Predictability
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-4">
                            <h4 className="row mega-title">Developer</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/in/certifications/agile/scrum/developer/applying-professional-scrum/"
                                  target="__blank"
                                >
                                  <img src={aps} />
                                  APS
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/in/certifications/agile/scrum/developer/applying-professional-scrum-for-software-development/"
                                  target="__blank"
                                >
                                  <img src={apssd} />
                                  APS - Software Development
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Bundle Courses */}
                  {/* <li onClick={this.showHidetoggleclose}  className="mega-drop-down">
                  <Link className="secondmenu" to="/bundle-courses">Bundle Courses</Link>
                </li> */}

                  <li onClick={this.showHidetoggleclose}>
                    <Link className="thirdmenu" to="#none">
                      Resources
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/agile-coach-competencies">
                          Agile Coach Competencies
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/blogs">Blogs</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/whitepapers">WhitePapers</Link>
                        {/* <ul className="sub-menu">

                        <li onClick={this.showHidetoggleclose} >
                          <Link to="/resources/whitepaper-stages-of-scrum-mastery/">The Stages of Scrum Mastery</Link>
                        </li>

                        <li onClick={this.showHidetoggleclose} >
                          <Link to="/whitepaper-scaling-scrum/">Scaling Scrum with Nexus</Link>
                        </li>
                        
                      </ul> */}
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/tools">Tools</Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/podcasts">Podcasts</Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/scrumplus">tryScrum Plus</Link>
                      </li>
                    </ul>
                  </li>

                  <li onClick={this.showHidetoggleclose}>
                    <Link className="fourthmenu" to="#">
                      Community
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <a href="https://regionalscrumgathering.tryscrum.com" target="_blank">
                          Regional Scrum Gathering - Bengaluru
                        </a>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/studios">Studios</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/podcasts">Podcasts</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/webcast">Webcasts</Link>
                      </li>
                    </ul>
                  </li>
                  <li onClick={this.showHidetoggleclose}>
                    <Link className="fifthmenu" to="/in/about">
                      About
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/about">About Us</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/team">Team</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/join-us">Join Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li onClick={this.showHidetoggleclose}>
                    <Link className="sixthmenu" to="#">
                      Help
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/contact">Contact Us</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/support">Support</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/virtual-class-special-instructions">
                          Virtual Class Instructions
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/which-scrum-role-is-right-for-me">
                          Which Role Is Right For Me
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/in/faq">FAQ's</Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li onClick={this.showHidetoggleclose} >
                    <div><Link className="sixthmenu bundlemenu" to="/bundle-courses"><span style={{ color: "#333" }}>Bundle Courses</span></Link></div>
                  </li> */}
                  <li
                    onClick={this.showHidetoggleclose}
                    className="sixthmenuhover"
                  >
                    <Link className="bundlemenu" to="/in/bundle-courses">
                      <span style={{ color: "#333" }}>Bundle Courses</span>
                    </Link>
                  </li>
                  <div className="mobilepaddingbottom"></div>
                </ul>
              </div>

              <div className="right-side-box">
                {/* <div className="searchBox">
                  <input
                    className="searchInput"
                    type="text"
                    aria-label="Search"
                    placeholder="Type to filter..."
                  />
                </div> */}

                {/* <div className="header__social">
                  
                  <Link to="#none">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#none">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                  <Link to="#none">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                  <Link to="#none">
                    <i className="fab fa-instagram"></i>
                  </Link>

                </div>   */}
              </div>
            </div>
          </nav>

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
        </header>
      </>
    );
  }
}
export default NavTwo;
