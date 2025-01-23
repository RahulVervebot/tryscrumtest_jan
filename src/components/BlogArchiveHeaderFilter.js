import React from "react";
import { Link } from "gatsby";

const PageHeader = (props) => {
  return (
    <section className="inner-banner_blogarchive">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/blogs">Blogs</Link> 
          </li>  
          <li className="active">
            <Link to="/blogs">Tag: {props.tag}</Link> 
          </li>  
        </ul>
        <h2 className="inner-banner__title_all_blogs">{props.title}</h2>
      </div>
    </section>
  );
};

export default PageHeader;
