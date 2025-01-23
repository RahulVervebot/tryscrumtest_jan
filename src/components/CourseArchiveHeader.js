import React from "react";
import { Link } from "gatsby";
import banner from "../assets/images/course-archive.jpg"

const PageHeader = (props) => {
  return (
    <section className="inner-banner-scaling" style={{backgroundImage:`URL(${banner})`}}>
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li className="active">
            <Link to="/blogs">Blogs</Link> 
          </li>  */}
          <li className="active">
            <a href="" style={{textTransform:"none"}}>tryScrum Courses</a> 
            
          </li>
        </ul>
        <h2 className="container inner-banner__title m-0 m-auto pb-5 text-center">{props.title}</h2>
      </div>
    </section>
  );
};

export default PageHeader;
