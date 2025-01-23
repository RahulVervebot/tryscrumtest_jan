import React from "react";
import { Link } from "gatsby";

const AgileLeadershipHeader = (props) => {
  return (
    <section className="inner-banner">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to ="/studios">Studio </Link>
          </li>
        </ul>
        <h2 className="inner-banner__title">Agile Leadership Studio</h2>
      </div>
      
    </section>
  );
};

export default AgileLeadershipHeader;
