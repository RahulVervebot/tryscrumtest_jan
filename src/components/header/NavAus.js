import React, { Component } from "react";
import {graphql, Link } from "gatsby";
import Feedbackform from "../../components/RequestForm";
import "../../assets/css/bundlecourse.css";
import logo from "../../assets/images/6-anniversary-logo.png";
import Anniversary from "../../assets/images/6-anniversary-banner.jpg";
import psm from "../../assets/images/psm.png";
import psm2 from "../../assets/images/psm2.png";
import apk from "../../assets/images/apk.png";
import calo from "../../assets/images/cal-o.png";
import cale from "../../assets/images/cal-e.png";
import csm from "../../assets/images/csm.png";
import acsm from "../../assets/images/a-csm-small.png";
import icpacc from "../../assets/images/icp-acc.png";
import icpcat from "../../assets/images/icp-cat.png";
import icpent from "../../assets/images/icp-ent.png";
import pale from "../../assets/images/pal-e.png";
import psk from "../../assets/images/psk.png";
import pspo2 from "../../assets/images/pspo-2.png";
import pspo from "../../assets/images/pspo.png";
import sps from "../../assets/images/sps.png";
import cspo from "../../assets/images/cspo.png";
import acspo from "../../assets/images/a-cspo-small.png";
import psu from "../../assets/images/psu.png";
import caleot from "../../assets/images/cal1.png";
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
import asccf from "../../assets/images/asc-cf.png";
import tryscrumlogo from "../../assets/images/tryscrum.png";
import closeButton from "../../assets/images/close-button.png";
import cal2 from "../../assets/images/call-2-mini.png";
import aspk from "../../assets/images/aspk-mini.png";
import lessp from "../../assets/images/less2-mini.png";
import lessb from "../../assets/images/less1-mini.png";
import acssmall from "../../assets/images/cas_small.png";
import calcombo from "../../assets/images/cal12.jpg";
import { Backdrop, CircularProgress } from "@mui/material";

ReactModal.setAppElement("#___gatsby");
export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      acfcoursePage {
        options { 
          country
        }
      }
    }
  }
`;
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
          <img src={Anniversary} style={{width:"100%"}}/>
            <Feedbackform />
            <div className="container" style={{ background: "#fff", zIndex:'9' }}>
              <div
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/usa/" className="navbar-brand">
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
                        <Link to="/usa/corporate-training">Corporate Training</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/agile-coaching">Coaching</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/enterprise-coaching-consulting">
                          tryBusiness Agility
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* courses link only show on small screen size*/}
                  <li onClick={this.showHidetoggleclose} className="hideonfull">
                    <Link className="secondmenu" to="/courses">
                      Courses
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-scrum-master/">
                          Certified Scrum Master
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-agile-skills-scaling-level-1/">
                          Certified Agile Skills Scaling Level 1
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/advanced-certified-scrummaster/">
                          {/* <img src={csm} /> */}
                          Advanced Certified Scrum Master
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-scrum-product-ownercspo/">
                          Certified Scrum Product Owner
                        </Link>
                      </li>
                      <li
                        onClick={this.showHidetoggleclose}
                        style={{ whiteSpace: "none" }}
                      >
                        <Link to="/usa/advanced-certified-scrum-product-owner/">
                          Advanced Certified Scrum Product Owner
                        </Link>
                      </li>
                      {/* <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-agile-leadership-essentials/">
                          Certified Agile Leadership - Essentials (CAL-E)
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-agile-leadership-organizations/">
                          Certified Agile Leadership - Organizations (CAL-O)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-agile-leadership-for-teams-cal-t/">
                          {" "}
                          Certified Agile Leadership for Teams (CAL-T)
                        </Link>
                      </li> */}

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/courses/certified-agile-leadership-combo/">
                          {" "}
                          Certified Agile Leadership - I
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-agile-leadership-ii/">
                          Certified Agile Leadership - II
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-agile-leadership-essentials/">
                          Professional Agile Leadership - Essentials
                        </Link>
                      </li>



                      
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-scrum-master/">
                          Professional Scrum Master I
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-scrum-master-ii/">
                          Professional Scrum Master II
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-scrum-product-owner/">
                          Professional Scrum Product Owner I
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-scrum-product-owner-advanced/">
                          Professional Scrum Product Owner II
                        </Link>
                      </li>
                      {/* <li onClick={this.showHidetoggleclose} >
                        <Link to="/usa/certified-scrum-master/">Certified Scrum Master</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose} >
                        <Link to="/usa/certified-scrum-product-ownercspo/">Certified Scrum Product Owner</Link>
                      </li> */}

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-agile-leadership-evidence-based-management/">
                          PAL - Evidence-Based Management
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/icagile-product-management/">
                          Product Management – Practitioner(ICP-PDM)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/user-story-essentials/">
                          User Story – Essentials
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/scaled-professional-scrum/">
                          Scaled Professional Scrum
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-scrum-facilitation-skills/">
                          Professional Scrum Facilitation Skills
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-facilitator/">
                          Agile Coaching Skills- Certified Facilitator
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/icagile/">Agile Coaching (ICP-ACC)</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/icagile-enterprise-coaching/">
                          Agility in the Enterprise (ICP-ENT)
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/coaching-agile-transitions/">
                          Coaching Agile Transitions (ICP-CAT)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/applying-scaled-portfolio-kanban/">
                          Applying Scaled Portfolio Kanban
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-scrum-with-kanban/">
                          Professional Scrum with KanBan
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/prokanban/">
                          Applying Professional KanBan
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/applying-metrics-for-predictabilityapm/">
                          Applying Metrics for Predictability(APM)
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/professional-scrum-with-user-experience/">
                          Professional Scrum with UX
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-less-basics/">
                          Certified LeSS Basics
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-less-practitioner/">
                          Certified LeSS Practitioner
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/certified-less-practitioner/">
                          Business Agility - Essentials (ICP-BAF)
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/pmi/">
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
                          to="https://www.tryscrum.com/applying-professional-scrum/"
                          target="__blank"
                        >
                          APS
                        </Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link
                          to="https://www.tryscrum.com/applying-professional-scrum-for-software-development/"
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
                    <Link className="secondmenu" to="/courses">
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
                                <Link to="/usa/certified-agile-leadership-organizations/">
                                  <img src={calo} />
                                  Certified Agile Leadership - Organizations
                                  (CAL-O)
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certified-agile-leadership-essentials/">
                                  <img src={cale} />
                                  Certified Agile Leadership - Essentials
                                  (CAL-E)
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certified-agile-leadership-for-teams-cal-t/">
                                  <img src={calt} /> Certified Agile Leadership
                                  for Teams (CAL-T)
                                </Link>
                              </li> */}
                               <div style={{ marginBottom: "5px" }}></div>
                               <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certifications/certifications-agile-scrum-leadership-certified-agile-leadership-i-leadership-certified-agile-leadership-combination">
                                  <img src={calcombo} />Certified Agile Leadership (I and II) Combo
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certified-agile-leadership-combo/">
                                  <img src={caleot} /> Certified Agile
                                  Leadership - I
                                </Link>
                              </li>

                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certified-agile-leadership-ii/">
                                  <img src={cal2} />
                                  Certified Agile Leadership - II
                                </Link>
                              </li>

                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-agile-leadership-essentials/">
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
                                <Link to="/usa/certified-scrum-master/">
                                  <img src={csm}  />
                                  Certified Scrum Master
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certified-agile-skills-scaling-level-1/">
                                  <img src={acssmall} />
                                  Certified Agile Skills Scaling Level 1
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/advanced-certified-scrummaster/">
                                  <img src={acsm} />
                                  Advanced Certified Scrum Master
                                </Link>
                              </li>

                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-scrum-master/">
                                  <img src={psm} />
                                  Professional Scrum Master I
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-scrum-master-ii/">
                                  <img src={psm2} />
                                  Professional Scrum Master II
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/scaled-professional-scrum/">
                                  <img src={sps} />
                                  Scaled Professional Scrum
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-scrum-facilitation-skills/">
                                  <img src={psfs} alt="psfs" />
                                  Professional Scrum Facilitation Skills
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certified-facilitator/">
                                  <img src={asccf} alt="psfs" />
                                  Agile Coaching Skills- Certified Facilitator
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="row mega-title">Product Owner</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/certified-scrum-product-ownercspo/">
                                  <img src={cspo} />
                                  Certified Scrum Product Owner
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/advanced-certified-scrum-product-owner/">
                                  <img src={acspo} />
                                  Advanced Certified Scrum Product Owner
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-scrum-product-owner/">
                                  <img src={pspo} />
                                  Professional Scrum Product Owner I
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-scrum-product-owner-advanced/">
                                  <img src={pspo2} />
                                  Professional Scrum Product Owner II
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-agile-leadership-evidence-based-management/">
                                  <img src={palebm} />
                                  PAL - Evidence-Based Management
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/icagile-product-management/">
                                  <img src={icppdm} />
                                  Product Management – Practitioner(ICP-PDM)
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/user-story-essentials/">
                                  <img src={userstory} />
                                  User Story – Essentials
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
                                <Link to="/usa/icagile/">
                                  <img src={icpacc} />
                                  Agile Coaching (ICP-ACC)
                                </Link>
                                {/* previous comment out <span>Description of Women</span> */}
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/icagile-enterprise-coaching/">
                                  <img src={icpent} />
                                  Agility in the Enterprise (ICP-ENT)
                                </Link>
                                {/* previous comment out <span>Description of men Cloths</span> */}
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/coaching-agile-transitions/">
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
                                <Link to="/usa/applying-scaled-portfolio-kanban/">
                                  <img src={aspk} width="28px" />
                                  Applying Scaled Portfolio Kanban
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/professional-scrum-with-kanban/">
                                  <img src={psk} />
                                  Professional Scrum with KanBan
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/prokanban/">
                                  <img src={apk} />
                                  Applying Professional KanBan
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/applying-metrics-for-predictabilityapm/">
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
                                <Link to="/usa/professional-scrum-with-user-experience/">
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
                                  to="/certified-less-basics/"
                                  target="_blank"
                                >
                                  <img src={lessb} width="28px" />
                                  Certified LeSS Basics
                                </Link>
                              </li>

                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/certified-less-practitioner/"
                                  target="_blank"
                                >
                                  <img src={lessp} width="28px" />
                                  Certified LeSS Practitioner
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/icagile-business-agility/"
                                  target="__blank"
                                >
                                  <img src={icpbaf} />
                                  Business Agility - Essentials (ICP-BAF)
                                </Link>
                              </li>
                              <li onClick={this.showHidetoggleclose}>
                                <Link to="/usa/pmi/" target="__blank">
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
                                  to="https://www.tryscrum.com/applying-professional-scrum/"
                                  target="__blank"
                                >
                                  <img src={aps} />
                                  APS
                                </Link>
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li onClick={this.showHidetoggleclose}>
                                <Link
                                  to="/applying-professional-scrum-for-software-development/"
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
                        <Link to="/usa/agile-coach-competencies">
                          Agile Coach Competencies
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/blogs">Blogs</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/whitepapers">WhitePapers</Link>
                        {/* <ul className="sub-menu">

                        <li onClick={this.showHidetoggleclose} >
                          <Link to="/usa/resources/whitepaper-stages-of-scrum-mastery/">The Stages of Scrum Mastery</Link>
                        </li>

                        <li onClick={this.showHidetoggleclose} >
                          <Link to="/usa/whitepaper-scaling-scrum/">Scaling Scrum with Nexus</Link>
                        </li>
                        
                      </ul> */}
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/tools">Tools</Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/podcasts">Podcasts</Link>
                      </li>

                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/scrumplus">tryScrum Plus</Link>
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
                          Regional Scrum Gathering - Chennai
                        </a>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/studios">Studios</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/podcasts">Podcasts</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/webcast">Webcasts</Link>
                      </li>
                    </ul>
                  </li>

                  <li onClick={this.showHidetoggleclose}>
                    <Link className="fifthmenu" to="/about">
                      About
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/about">About Us</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/team">Team</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/join-us">Join Us</Link>
                      </li>
                    </ul>
                  </li>

                  <li onClick={this.showHidetoggleclose}>
                    <Link className="sixthmenu" to="#">
                      Help
                    </Link>
                    <ul className="sub-menu">
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/contact">Contact Us</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/support">Support</Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/virtual-class-special-instructions">
                          Virtual Class Instructions
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/which-scrum-role-is-right-for-me">
                          Which Role Is Right For Me
                        </Link>
                      </li>
                      <li onClick={this.showHidetoggleclose}>
                        <Link to="/usa/faq">FAQ's</Link>
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
                    <Link className="bundlemenu" to="/bundle-courses">
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