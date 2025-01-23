import React from "react";

import SubhashiniLarge from "../svg/subhashiniLarge.svg";


const SubhashiniDescription = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text lead">
                Subhashini started her career in the IT industry as a developer and later she moved into testing as a test lead for a decade.
                She is now passionate about customer service and is responsible for handling customer support in tryScrum.
                She manages end to end support - from customer acquisition includes handling customer calls,course schedule to course completion
                of the trainee. Her passion is to serve customers, cultivate long-term relationships, and help clients achieve their goals.
                She leverages her background in business development, administration and customer service to better understand customers'
                needs to deliver high-quality resolution.
              </p>
            </div>
          </div>
          <div className="col-lg-6">

            <SubhashiniLarge />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SubhashiniDescription;
