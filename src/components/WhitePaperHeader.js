import React from "react";
import { Link } from "gatsby";

const PageProductHeader = (props) => {
  return (
    <section className="inner-banner-scaling">
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a >WhitePaper</a>
          </li>
        </ul>
        <h2 className="container inner-banner__title m-0 m-auto pb-5 text-center">WhitePaper</h2>
      </div>
      
    </section>
  );
};

export default PageProductHeader;
