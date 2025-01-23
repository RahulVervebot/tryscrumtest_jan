import React from "react"
import Robertlarge from "../svg/robert-large.svg"



const RobertDescription = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
                <p className="team-details__text lead">
                Robert Briese is a Partner Consultant at tryScrum looking after Large Scale Scrum Programs. He is a coach, consultant, and trainer in agile and lean product development and the founder and CEO of Lean Sherpas GmbH. As one of only 25 certified Large-Scale Scrum (LeSS) Trainers in the world, he works with individuals, teams, and organisations on adopting practices for agile and lean development and improving organisational agility through cultural change. He has worked with (real) startups (Penta), Corporate Start-Ups (Ringier, Yello), and large organisations (SAP, BMW, Adidas) to create better organisational design and adopt practices that allow faster customer feedback, learning, and greater adaptability for change. He is a frequent speaker at conferences and regularly gives training in Large-Scale Scrum.
                </p>
            </div>
          </div>
          <div className="col-lg-6">
            <Robertlarge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobertDescription;
