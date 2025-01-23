import React from "react";
import { Link } from "gatsby";

const PageProductHeader = (props) => {
  return (
    <section className="inner-banner__studio">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li className="active">
            <a href="#">Arunvignesh</a>
          </li> */}
        </ul>
        <h2 className="inner-banner__title_studio">{props.title}</h2>
      </div>
      
    </section>
  );
};

export default PageProductHeader;
