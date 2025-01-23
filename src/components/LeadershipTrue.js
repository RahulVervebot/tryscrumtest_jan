import React from "react";
import { Link } from "gatsby";

const PageProductHeader = (props) => {
  return (
    <section className="inner-banner-leadership">
      <div className="">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="#">Team</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">Team</h2>
      </div>
      
    </section>
  );
};

export default PageProductHeader;
