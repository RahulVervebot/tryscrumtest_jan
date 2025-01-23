import React from "react";
import { Link } from "gatsby";

const PageProductHeader = (props) => {
  return (
    <section className="inner-banner-about">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <h2 className="inner-banner__title">About Us</h2>
      </div>
    </section>
  );
};

export default PageProductHeader;
