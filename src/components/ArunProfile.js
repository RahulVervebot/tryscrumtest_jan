import React from "react"
import certificate1 from "../assets/images/ctc.png"
import certificate2 from "../assets/images/cal.png"
import certificate3 from "../assets/images/instructor.png"
import certificate4 from "../assets/images/scrum_t.png"
import certificate5 from "../assets/images/orsc.jpeg"
import certificate6 from "../assets/images/pst_arun.png"
import arunimg from "../assets/images/arun.png"
import acscf from "../assets/images/acs-e.png"
import linkedin from "../assets/images/favicons/linkedin.png"
import twitter from "../assets/images/favicons/twitter.png"
import csat from "../assets/images/seal-csat.png"
import ictacc from "../assets/images/ICF-ACC.png"

import { Link } from "gatsby"
import ModalArun from "./ModalArun"
import ModalArunDownload from "./ModalArunDownload"
// import Venkatesh from "../svg/venkatesh-rajamani2.svg";

const ArunProfile = () => {
  return (
    <>
      <section className="py-4" style={{ background: "whitesmoke" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span>
                <Link
                  to="/team"
                  style={{ textDecoration: "underline", color: "#73B79E" }}
                >
                  Back To Team
                </Link>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 mx-auto d-block">
              <img src={arunimg} alt="arun" />
            </div>
            <div
              className="col-xl-8 col-lg-6 "
              style={{ flexDirection: "column", justifyContent: "" }}
            >
              <div>
                <h1 style={{ fontWeight: "600", color: "#000" }}>
                  Arunvignesh Ramakrishnan
                </h1>
                <h4 style={{ fontWeight: "500", color: "#73B79E" }}>
                  Agile Trainer, Coach & Consultant
                </h4>
                <br />
                <h4 style={{ fontWeight: "500", color: "#000" }}>
                  tryScrum & tryBusinessAgility
                </h4>
                {/* <h4 style={{ fontWeight: "500", color: "#73B79E" }}>Contact Trainer</h4> */}
                <br />
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-3 px-1">
                      <ModalArun />
                    </div>
                    <div className="col-xl-2 px-1">
                      <ModalArunDownload />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-12">
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
                className="pt-2"
              >
                <div>
                  <Link
                    to="https://twitter.com/arunronline"
                    target="_blank"
                    style={{ color: "grey", padding: "5px" }}
                  >
                    <i>
                      <img style={{ width: "30px" }} src={twitter} />
                    </i>
                  </Link>
                  {/* <Link to="https://tryscrum-community.slack.com/" style={{ color: "grey" }}><i><img style={{ width: "30px", }} src={slack} /></i></Link> */}
                  <Link
                    to="https://www.linkedin.com/in/arunvignesh-ramakrishnan/"
                    target="_blank"
                    style={{ color: "grey", padding: "5px" }}
                  >
                    <i>
                      <img style={{ width: "30px" }} src={linkedin} />
                    </i>
                  </Link>
                  {/* <Link to="https://www.meetup.com/smstudiochn" style={{ color: "grey" }}><i><img style={{ width: "30px", }} src={meetup} /></i></Link> */}
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="team-details">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12">
              <div className="team-details__content">
                <h3
                  className="team-details__title"
                  style={{ color: "#73B79E", fontSize: "35px" }}
                >
                  Biography
                </h3>
                <p className="lead" style={{ textAlign: "justify" }}>
                  Arunvignesh Ramakrishnan is a passionate Trainer and Coach
                  helping teams and organisations become capable and resilient. He
                  is a Professional Scrum Trainer (PST) from Scrum.org, a
                  Certified Scrum Alliance Trainer (CSAT), a Certified Team Coach
                  (CTC), an Agile Coaching Skills - Educator(ACS-E) from Scrum
                  Alliance and an ICAgile authorized Instructor. He is also an
                  ICF-ACC from the International Coaching Federation.
                </p>
                <p className="lead" style={{ textAlign: "justify" }}>
                  Arunvignesh holds 15+ years of experience in software development and
                  delivery as a Business Analyst, Scrum Master and Agile Coach
                  working with various engagements, including a large bank, a fund
                  management Product set-up, and IT Services transformation in one
                  of the big three consulting firms.He is Proficient in Agile
                  Transformation in Distributed teams. With a solid foundation in
                  coaching, mentoring & training helped agile teams elevate their
                  agile maturity and assisted in creating a collaborative
                  environment setting up various forums for the community to share
                  and learn continuously. As an Enterprise Agile Coach and
                  Professional Agile Trainer at tryScrum.com, own Coaching
                  Programs at tryScrum and created a portfolio of learning
                  solutions designed to enable individuals and teams to be
                  successful through Coaching. The programs include
                  ICAgile-accredited Agile Coaching (ICP-ACC) & Enterprise Agile
                  Coaching (ICP-ENT & ICP-CAT) workshops. Arunvignesh is a B.E.,
                  in Electronics & communications Engineering and an MBA, in
                  Finance from Anna University. He lives in Coimbatore, India,
                  where he takes every opportunity to enjoy driving and the great
                  outdoors with his family & friends.
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="team-details__content">
                <h3
                  className="team-details__title"
                  style={{ color: "#73B79E", fontSize: "35px" }}
                >
                 Education
                </h3>
  <p className="lead" style={{ textAlign: "justify" }}>
<ul>
<li>
 Bachelor of Engineering in Electronics and Communication Engineering Science from Anna University
</li>
<li>
Master of Business Administration in Finance from the PSG Institute of Management, Anna University
</li>
<li>
Digital Strategies for Business Transformation from Columbia University
</li>
<li>
CXO Leadership Education from Cornell University
</li>
</ul>
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#73B79E", fontSize: "35px" }}
              >
                Credentials
              </h3>
              <div className="row">
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate6}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "120px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={csat}
                    alt="CSAT"
                    style={{ width: "140px", height: "140px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={ictacc}
                    alt="IFC ACC"
                    style={{ width: "130px", height: "130px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate1}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "130px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate3}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "130px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={acscf}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "125px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate2}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "130px" }}
                  />
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate4}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "130px" }}
                  />
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6 col-12">
                  <img
                    src={certificate5}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "130px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#73B79E", fontSize: "35px" }}
              >
                Research Interests
              </h3>
              <p className="lead">
                He seeks to research team effectiveness and dynamics for
                organisations to stay relevant.
                <ul>
                  <li>Team start-up</li>
                  <li>Scaling Teams</li>
                  <li>Agile Transformation</li>
                </ul>
              </p>
            </div>

            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#73B79E", fontSize: "35px" }}
              >
                Teaching Interests
              </h3>
              <p className="lead">
                Scrum Mastery, Agile Coaching, Product Ownership and Enterprise
                Agile Transformation
              </p>
            </div>

            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#73B79E", fontSize: "35px" }}
              >
                Publications
              </h3>
              <p className="lead">
                <ul>
                  <a
                    href="/team-coaching-canvas/"
                    target="_blank"
                    style={{ color: "#696969", textDecoration: "underline" }}
                  >
                    <li>Team coaching canvas</li>
                  </a>
                </ul>
              </p>
            </div>

            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#73B79E", fontSize: "35px" }}
              >
                Training Approach and Record
              </h3>
              <p className="lead">
                <ol>
                  <li>Training experience in more than 6 countries</li>
                  <li>Trained more than 5000+ learners</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArunProfile
