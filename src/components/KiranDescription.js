import React from "react";
import certificate1 from "../assets/images/kiran.png";
import certificate2 from "../assets/images/pal-ebm-kiran.png";
import certificate3 from "../assets/images/pspoii-kiran.png";

import certificate4 from "../assets/images/psui-kiran.png";

import Kiran from "../svg/kiran.svg";


const TeachersDetails = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text lead">
              Having dabbled in several roles over the past 15 years, I found my calling in Product management. I believe in the power of design thinking, data, collective intelligence and first principles for building delighful products. I’m biased towards the delightful experiences that I intend to provide to all my stakeholders. Who and What are as important to me as Why and When. With an Agile mindset, I like experimentation and creative discussions.
              </p>
              <h3 className="team-details__subtitle">Credentials</h3>
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
                {/* <li>
                  <img src={certificate5} alt="" />
                </li> */}
                
              </ul>


            
            </div>
          </div>
          <div className="col-lg-6">
            <Kiran />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersDetails;
