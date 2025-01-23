import React from "react";
import { Link } from "gatsby";

const AgileChoachHeader = () => {
  return (
    <section className="inner-banner-agile-coaching-competencies">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="/agile-coach-competencies">Agile Coach Compenticies</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">Agile Coach Compenticies</h2>
      </div>
      
    </section>
  );
};

export default AgileChoachHeader;
