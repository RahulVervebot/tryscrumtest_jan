import React from "react";
import certificate1 from "../assets/images/psm3.png";
import certificate2 from "../assets/images/instructor.png";
// import certificate2 from "../assets/images/icagile.png";

import Farooq2 from "../svg/farooq2.svg";


const TeachersDetails = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text lead">
                Umar is an “empiricist” who empowers people to explore concrete ways to build customer-centric Product(s) and evoke organisations towards “Value-driven” agility. He holds a PSM-III credential and is passionate about partnering with people in conversations about empirical ways of working and data-driven decision-making to deliver a rich customer experience with sustainable value via Product(s).
              </p>
              <h3 className="team-details__subtitle">Credentials</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate2} alt="" />
                </li>
                <li>
                  <img src={certificate1} alt="" style={{ width: "150px", height: "150px" }} />
                </li>
              </ul>




            </div>
          </div>
          <div className="col-lg-6">

            <Farooq2 />

          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersDetails;
