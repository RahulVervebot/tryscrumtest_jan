import React from "react";
import { Link } from "gatsby";

const PageProductHeader = (props) => {
  return (
    <section className="inner-banner-leadership">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="whitepapper">Leadership</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">Leadership</h2>
      </div>
      
    </section>
  );
};

export default PageProductHeader;
