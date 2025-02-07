import React from "react"
import certificate1 from "../assets/images/ctc.png"
import certificate2 from "../assets/images/cec.png"
import certificate3 from "../assets/images/pst_arun.png"
import certificate4 from "../assets/images/scrum_t.png"
import certificate5 from "../assets/images/brain_t.png"
import certificate6 from "../assets/images/leadership_t.png"
import certificate7 from "../assets/images/acc_t.png"
import certificate8 from "../assets/images/scrum_a_t.png"
import certificate9 from "../assets/images/PK-PKT@2x.png"
import certificate10 from "../assets/images/IC-Agile-Authorized-Instructor.png"
import certificate11 from "../assets/images/pmiacp.png"
import certificate12 from "../assets/images/PCC.png"
import certificate13 from "../assets/images/ase-e.jpg"
import careerBadges from "../assets/images/career-badges.jpeg"
import agileBadges from "../assets/images/agile-badges.jpeg"
import apacBadges from "../assets/images/apac-badges.jpeg"
import cst from "../assets/images/CST.png"
import CSP from "../assets/images/csp.png"
//import venkasteshimg from "../assets/images/venkat_tryscrum.jpg"
import venkasteshimg from "../assets/images/Profile-Venkatesh-Rajamani.jpg"
import linkedin from "../assets/images/favicons/linkedin.png"
import slack from "../assets/images/favicons/slack.png"
import meetup from "../assets/images/favicons/meetup.png"
import twitter from "../assets/images/favicons/twitter.png"

import { Link } from "gatsby"
import ModalVenkat from "./ModalVenkat"
import ModalArunDownload from "./ModalArunDownload"
import ModalVenkatDownload from "./ModalVenkatDownload"
// import Venkatesh from "../svg/venkatesh-rajamani2.svg";

const VenkateshProfile = () => {
  return (
    <>
      <section className="py-4" style={{ background: "whitesmoke" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span>
                <Link
                  className="text-danger"
                  to="/team"
                  style={{ textDecoration: "underline" }}
                >
                  Back To Team
                </Link>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 mx-auto d-block">
              <img src={venkasteshimg} alt="venkastesh" width={"100%"} />
            </div>
            <div
              className="col-xl-8 col-lg-6 "
              style={{ flexDirection: "column", justifyContent: "" }}
            >
              <div>
                <h1 style={{ fontWeight: "600", color: "#000" }}>
                  Venkatesh Rajamani
                </h1>
                <h4 style={{ fontWeight: "500", color: "#f05457" }}>
                  Founder & Executive Officer
                </h4>
                <br />
                <h4 style={{ fontWeight: "500", color: "#000" }}>
                  tryScrum & tryBusinessAgility
                </h4>
                {/* <h4 style={{ fontWeight: "500", color: "#73B79E" }}>Contact Trainer</h4> */}
                <br />
                <br />
                <div className="container">
                  <div className="row ">
                    <div className="col-xl-3 px-1">
                      {/* <ModalArun /> */}
                      <ModalVenkat />
                    </div>
                    <div className="col-xl-2 px-1">
                      <ModalVenkatDownload />
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
                    to="https://twitter.com/AtVenk"
                    target="_blank"
                    style={{ color: "grey", padding: "5px" }}
                  >
                    <i>
                      <img style={{ width: "30px" }} src={twitter} />
                    </i>
                  </Link>
                  {/* <Link to="https://tryscrum-community.slack.com/" style={{ color: "grey" }}><i><img style={{ width: "30px", }} src={slack} /></i></Link> */}
                  <Link
                    to="https://www.linkedin.com/in/venkatesh-rajamani-b071b15"
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
                  style={{ color: "#f05457", fontSize: "35px" }}
                >
                  Biography
                </h3>
                <p className="lead" style={{ textAlign: "justify" }}>
                  Venkatesh Rajamani has several years of experience delivering
                  working software in short, feedback-driven cycles. He has
                  helped organizations adopt agile software delivery practices,
                  including large banking, payments, telecom, and product
                  organisations. He started his career as a Software Engineer
                  and spent several years as a hard-core Programmer. He has
                  worked with large software delivery organisations like HP,
                  IBM, Logica, Paypal, Ericsson, and RBS. He founded
                  tryScrum.com in 2018 to execute his mission of Humanizing
                  Organizations. Venkatesh is fluent in 4 languages. He is based
                  in Chennai, India and sets the overall direction for tryScrum.
                  He is the world's first to hold together CST, CEC, CTC, PST,
                  PKT, Path to CSP Educator,CAL-Educator and ACS-Educator. He
                  loves reading books, travelling and public speaking. Venkatesh
                  received his B.E. from Anna University in Chennai and his MBA
                  from the University of Madras. He is a PhD scholar at the
                  Girne American University
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="team-details__content">
                <h3
                  className="team-details__title"
                  style={{ color: "#f05457", fontSize: "35px" }}
                >
                Education
                </h3>
                <p className="lead" style={{ textAlign: "justify" }}>
   <ul>
   <li>
   Bachelor of Engineering in Computer Science from Anna University
</li>
<li>
Master of Business Administration from the University of Madras
</li>
<li>
Master of Science in Digital Transformation from Nexford University
</li>
<li>
Executive MBA from Quantic School of Business and Technology
</li>
<li>
Post Graduate Diploma in Strategic Management from Metropolitan Business School
</li>
<li>CXO Leadership Education from Cornell University
</li>
<li>Doctor of Philosophy in Business and Management from Girne American University</li>
</ul>
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#f05457", fontSize: "35px" }}
              >
                Credentials
              </h3>
              <div className="row">
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={cst}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "130px", height: "115px" }}
                  />
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate3}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate2}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate1}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>

                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={CSP}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>

                {/* <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img src={certificate3} alt="tryScrum Trainer Credentials" style={{ width: "120px", height: "120px" }} />
                </div> */}

                {/* <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate4}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div> */}
                {/* <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img src={certificate7} alt="tryScrum Trainer Credentials" style={{ width: "120px", height: "120px" }} />
                </div> */}

                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate8}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate13}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate9}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate10}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate11}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img
                    src={certificate12}
                    alt="tryScrum Trainer Credentials"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>

                <div className="col-xl-4 col-lg-6 col-md-12 col-12">
                  <img src={certificate6} alt="tryScrum Trainer Credentials" />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-12 col-12">
                  <img src={certificate5} alt="tryScrum Trainer Credentials" />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img src={careerBadges} alt="tryScrum Trainer Credentials"
                  style={{ width: "120px", height: "120px" }}
                   />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img src={agileBadges} alt="tryScrum Trainer Credentials" 
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-6">
                  <img src={apacBadges} alt="tryScrum Trainer Credentials"
                  style={{ width: "120px", height: "120px" }}
                   />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#f05457", fontSize: "35px" }}
              >
                Research Interests
              </h3>
              <p className="lead">
                He seeks to co-design Organisational design and Transformation
                roadmap for the next generation of Organisations to stay capable
                and relevant.
                <ul>
                  <li>Leadership</li>
                  <li>Digital Transformation</li>
                  <li>Business Innovation</li>
                  <li>Agile Transformation</li>
                </ul>
              </p>
            </div>

            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#f05457", fontSize: "35px" }}
              >
                Teaching Interests
              </h3>
              <p className="lead">
                Scrum, Agile Leadership, Design Thinking, Product Ownership and
                Digital Transformation
              </p>
            </div>

            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#f05457", fontSize: "35px" }}
              >
                Publications
              </h3>
              <p className="lead">
                <ul>
                  <a
                    href="/resources/whitepaper-stages-of-scrum-mastery/"
                    target="_blank"
                    style={{ color: "#696969", textDecoration: "underline" }}
                  >
                    <li>The Stages of Scrum Mastery</li>
                  </a>
                  <a
                    href="/whitepaper-scaling-scrum/"
                    target="_blank"
                    style={{ color: "#696969", textDecoration: "underline" }}
                  >
                    <li>Scaling Scrum using the Nexus Framework</li>
                  </a>
                  <a
                    href="/enterprise-coaching-consulting/"
                    target="_blank"
                    style={{ color: "#696969", textDecoration: "underline" }}
                  >
                    <li>
                      Building Blocks of the next generation of Organizations
                    </li>
                  </a>
                  <a
                    href="/the-stages-of-agile-transformation/"
                    target="_blank"
                    style={{ color: "#696969", textDecoration: "underline" }}
                  >
                    <li>
                      The Stages of Agile Transformation: Moving from Theory to
                      Practice
                    </li>
                  </a>
                </ul>
              </p>
            </div>

            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#f05457", fontSize: "35px" }}
              >
                Awards
              </h3>
              <p className="lead">
                <ol>
                  <li>
                    Top 100 Most Influential Coaching Leaders in India- Times
                    Ascent (2023)
                  </li>
                  <li>
                    Top 100 Institutes for Leadership Studies- CEO Insights
                    (2020)
                  </li>
                  <li>
                    <a
                      href="https://beststartup.in/chennais-consulting-crusaders-innovating-business-and-technology/"
                      target="_blank"
                      style={{ color: "#696969", textDecoration: "underline" }}
                    >
                      tryScrum featured as one of the Top 15 Consulting Companies Revolutionizing Industries in Chennai by Fupping Media
                    </a>
                  </li>
                  <li>   Top 100 Thought Leader APAC- 2024 by Thinkers 360 </li>
                  <li>
                    Top 50 Thought Leader- Agile  </li>
                  <li>
                    Top 100 Thought Leader- Careers</li>
                </ol>
              </p>
            </div>

            <div className="col-lg-12">
              <h3
                className="team-details__title"
                style={{ color: "#f05457", fontSize: "35px" }}
              >
                Training Approach and Record
              </h3>
              <p className="lead">
                <ul>
                  <li>Training experience in more than 12 countries</li>
                  <li>Trained more than 8000+ learners</li>
                  <li>
                    Training from the Back of the Room approach with Gagne’s
                    Condition of Learning Approach
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default VenkateshProfile
