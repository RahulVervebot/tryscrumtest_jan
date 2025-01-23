import React from "react";
import { Link } from "gatsby";

const RoleHeader = (props) => {
  return (
    <section className="inner-banner-scaling">
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb-scaling">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="#none">{props.title}</a> 
          </li>
        </ul>
        <h2 className="inner-banner__title-scaling">Which Role is right for me?</h2>
      </div>
    </section>
  );
};

export default RoleHeader;
