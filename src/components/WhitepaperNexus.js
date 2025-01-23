import React from "react";
import { Link } from "gatsby";

const WhitePaper = (props) => {
  return (
    <section className="inner-banner-scaling">
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb-scaling">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="../whitepapers">WhitePaper</a> 
            
          </li>
        </ul>
        <h2 className="container inner-banner__title m-0 m-auto pb-5 text-center">Scaling Scrum with Nexus</h2>
      </div>
    </section>
  );
};

export default WhitePaper;
