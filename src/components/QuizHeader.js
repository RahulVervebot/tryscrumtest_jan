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
            <a href="" style={{textTransform:"none"}}>Take a Quiz</a> 
            
          </li>
        </ul>
        <h1 className="course_page_header text-center" style={{color:"#fff", fontWeight:700, marginTop:"2%"}}>Which career path is right for you?

</h1>
</div>
    </section>
  );
};

export default PageHeader;
