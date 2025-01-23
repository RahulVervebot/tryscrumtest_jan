import React from "react";
import certificate1 from "../assets/images/kiran.png";
import certificate2 from "../assets/images/pal-ebm-kiran.png";
import certificate3 from "../assets/images/pspoii-kiran.png";
import certificate4 from "../assets/images/psui-kiran.png";
import Buvana from "../svg/buvana2.svg";


const TeachersDetails = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
                <p className="team-details__text lead">
                    Buvana is responsible for providing customer service and support to tryScrum customers. She also manages the course schedule and trainer communication at tryScrum. Her passion is to serve customers, cultivate long-term relationships, and help clients achieve their goals.
                    She leverages her background in business development, administration and customer service to better understand customers' needs to deliver high-quality resolution.  
                </p>

              {/* <h3 className="team-details__subtitle">Certificates</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate1} alt="" style={{width:"150px", height:"150px"}}/>
                </li>
                <li>
                  <img src={certificate2} alt="" style={{width:"150px", height:"150px"}}/>
                </li>
              </ul>

              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate3} alt="" style={{width:"150px", height:"150px"}}/>
                </li>
                <li>
                  <img src={certificate4} alt="" style={{width:"150px", height:"150px"}}/>
                </li>    
              </ul> */}


            
            </div>
          </div>
          <div className="col-lg-6">

            <Buvana />


            {/* <div className="team-one__single">
              <div className="team-one__image">
                <img src={teamd1} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/team-details">Arunvignesh Ramakrishnan</a>
                </h2>
                <p className="team-one__designation">AGILE TRAINER & CONSULTANT</p>
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

export default TeachersDetails;
