import React from "react";
import { Link } from "gatsby";
import banner from "../assets/images/webcast.jpg"

const WebcastHeader = (props) => {
  return (
    <section className="inner-banner-scaling" style={{backgroundImage:`url(${banner})`,backgroundSize:"100% 100%"}}>
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="#none">Webcast</a>
          </li>
        </ul>
        {/* <h2 className="inner-banner__title">Webcast</h2> */}
        <h2 className="container inner-banner__title m-0 m-auto pb-5 text-center">Webcast</h2>
      </div>
      
    </section>
  );
};

export default WebcastHeader;
