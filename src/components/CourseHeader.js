import React from "react";
import { Link } from "gatsby";
import headerimg from "../assets/images/course_logo/try-scrum-web-banner.jpg"
const PageHeader = (props) => {
  return (
    <section className="inner-banner-scaling-course-page" style={{fontFamily:"verdana", backgroundImage:`URL(${headerimg})`}}>
      <div className="container-scaling" style={{padding:"5%"}}>
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
        <h1 className="course_page_header text-center" style={{color:"#fff", fontWeight:700, marginTop:"2%"}}>Transform your Career with expert Agile Training and Mentoring
</h1>
<div className="course-btn-new" style={{textAlign:"center", marginTop:"2%"}}>
<a href="/contact/" class="course-header-btn1">
Contact us</a>
<a href="https://wa.me/919789490848" class="course-header-btn" target="_blank">
Speak to us</a>
</div>
</div>
    </section>
  );
};

export default PageHeader;
