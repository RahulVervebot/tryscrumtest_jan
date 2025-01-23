import React from "react";
import { Link } from "gatsby";

const WhitePaperMaster = (props) => {
  return (
    <section className="inner-banner-scaling">
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb-scaling">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            {/* <a href="#none">{props.title}</a> */}
            WhitePaper Master
          </li>
        </ul>
        <h2 className="inner-banner__title-scaling">Scrum Mastery</h2>
      </div>
    </section>
  );
};

export default WhitePaperMaster;
