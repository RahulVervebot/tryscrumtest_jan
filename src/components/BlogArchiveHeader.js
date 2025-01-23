import React from "react";
import { Link } from "gatsby";
import { getLowResolutionImageURL } from "gatsby-plugin-image";

const PageHeader = (props) => {
  return (
    <section className="inner-banner_blogarchive">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          {/* <li className="active">
            <Link to="/blogs">Blogs</Link> 
          </li> */}
          {props.blog}
        </ul>
        <h2 className="inner-banner__title_all_blogs">{props.title} <button onClick={props.search} >{props.icon}</button></h2>
      </div>
    </section>
  );
};

export default PageHeader;
