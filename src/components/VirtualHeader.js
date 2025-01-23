import React from "react";
import { Link } from "gatsby";

const VartualHeader = (props) => {
  return (
    <section className="inner-banner__virtual">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li className="active">
            <a href="/vartual-class">Virtual Class</a>
          </li> */}
        </ul>
        <h2 className="inner-banner__title_virtual">{props.title}</h2>
      </div>
      
    </section>
  );
};

export default VartualHeader;
