import React from "react";
import { Link } from "gatsby";

const PageProductHeader = (props) => {
  return (
    <section className="inner-banner">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="/team">Team</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">Team</h2>
      </div>
      
    </section>
  );
};

export default PageProductHeader;
