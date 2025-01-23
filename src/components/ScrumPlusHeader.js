import React from "react";
import { Link } from "gatsby";

const ScrumPlusHeader = (props) => {
  return (
    <section className="inner-banner-tryScrum-plus">
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb-scaling">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            {/* <a href="#none">{props.title}</a> */}
           tryScrum+
          </li>
        </ul>
        <h4 className="inner-banner__title-scaling">tryScrum+ - Complementary Practices</h4>
      </div>
    </section>
  );
};

export default ScrumPlusHeader;
