import React from "react";
import { Link } from "gatsby";

const SupportHeader = (props) => {
  return (
    // <section className="inner-banner-podcast">
    <section className="inner-banner__support">
      
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li className="active">
            <a href="/support">Support</a>
          </li> */}
        </ul>
        <h2 className="inner-banner__title_support">{props.title}</h2>
      </div>
      
    </section>
  );
};

export default SupportHeader;
