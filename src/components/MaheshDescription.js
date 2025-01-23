import React from "react";
import Maheshlarge from "../svg/mahesh-large.svg";

const MaheshDescription = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text lead">
                Mahesh Varadharajan is an Agile Transformation Leader, an
                Enterprise coach, and a SAFe. Practice Consultant Trainer
                (SPCT). Mahesh is committed to relentless human development to
                enable a better world, building a continuous learning culture
                where individuals and organizations discover their best
                potential and channel it toward personal and enterprise growth.
                He has 16 years of experience helping organizations achieve
                Business Agility, improve Product development capability, and
                enable continuous delivery of the highest value. He is One of
                India's six and Global 130 SPCTs.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <Maheshlarge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaheshDescription;
