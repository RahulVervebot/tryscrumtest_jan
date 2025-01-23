import React from "react";
import certificate1 from "../assets/images/ctc.png";
import certificate2 from "../assets/images/cec.png";
import certificate3 from "../assets/images/pst_arun.png";
import certificate4 from "../assets/images/scrum_t.png";
import certificate5 from "../assets/images/brain_t.png";
import certificate6 from "../assets/images/leadership_t.png";
import certificate7 from "../assets/images/acc_t.png";
import certificate8 from "../assets/images/scrum_a_t.png";
import certificate9 from "../assets/images/PK-PKT@2x.png";
import certificate10 from "../assets/images/IC-Agile-Authorized-Instructor.png";
import certificate11 from "../assets/images/pmiacp.png";
import certificate12 from "../assets/images/PCC.png";
import certificate13 from "../assets/images/ase-e.jpg";
// import Venkatesh from "../svg/venkatesh-rajamani2.svg";

const VenkateshProfile = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story (Founder & Trainer)</h2>
              <p className="team-details__text lead lead">
                Venkatesh Rajamani has several years of experience delivering working software in short, feedback-driven cycles. He has helped many organizations adopt agile software delivery practices, including large banking, payments, telecom, and product organizations. He started his career as a Software Engineer and spent several years as a hard-core Programmer. He has worked for or with large software delivery organizations, including HP, IBM, Logica, Paypal, Ericsson, RBS and HID. 
                <br />
                He founded tryScrum.com in 2018 to execute his mission of Humanizing Organizations. Venkatesh is fluent in 4 languages. He is based in Chennai, India and sets the overall direction for tryScrum. He is the world’s first person to hold PKT, CAL-Educator, PST, CEC & CTC together. He loves reading books, travelling and public speaking.              
              </p>
              <h3 className="team-details__subtitle">Credentials</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate1} alt="tryScrum Trainer Credentials" />
                </li>
                <li>
                  <img src={certificate2} alt="tryScrum Trainer Credentials" />
                </li>
                <li>
                  <img src={certificate3} alt="tryScrum Trainer Credentials"  style={{width:"150px", height:"150px"}} />
                </li>
              </ul>

              <ul className="list-unstyled team-details__certificate-list">
              {/* <li>
                  <img src={certificate7} alt="tryScrum Trainer Credentials" />
                </li> */}
                <li>
                  <img src={certificate8} alt="tryScrum Trainer Credentials" />
                </li>

                <li>
                  <img src={certificate12} alt="tryScrum Trainer Credentials" style={{width:"150px", height:"150px"}} />
                </li>
                <li>
                  <img src={certificate13} alt="tryScrum Trainer Credentials"  style={{width:"150px", height:"150px"}} />
                </li>
                {/* <li>

                  <img src={certificate4} alt="tryScrum Trainer Credentials" />
                </li> */}
                
              </ul>

              <ul className="list-unstyled team-details__certificate-list">
               
              <li>
                  <img src={certificate5} alt="tryScrum Trainer Credentials" />
                </li>
                <li>
                  <img src={certificate6} alt="tryScrum Trainer Credentials" />
                </li>
              

              </ul>

              <ul className="list-unstyled team-details__certificate-list">
               
                <li>
                  <img src={certificate9} alt="tryScrum Trainer Credentials" />
                </li>

                <li>
                  <img src={certificate10} alt="tryScrum Trainer Credentials" />
                </li>
                <li>
                  <img src={certificate11} alt="tryScrum Trainer Credentials" style={{width:"140px", height:"140px"}} />
                </li>

              </ul>

              {/* <ul className="list-unstyled team-details__certificate-list">
               
                

              </ul> */}

            </div>
          </div>
          <div className="col-lg-6">

            {/* <Venkatesh /> */}

            {/* <div className="team-one__single">
              <div className="team-one__image">
                <img src={teamd1} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="#">Venkatesh Rajamani</a>
                </h2>
                <p className="team-one__designation">Founder & Trainer </p>
              </div>
              <div className="team-one__social">
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
            </div> */}


          </div>
        </div>
      </div>
    </section>
  );
};

export default VenkateshProfile;
