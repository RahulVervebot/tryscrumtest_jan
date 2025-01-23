import React from "react";
import { Link } from "gatsby";

const TeamCoachingCanvasHeader = (props) => {
  return (
    <section className="inner-banner-coaching-canvas inner-banner-scaling">
      <div className="container-tools container-scaling">
        <ul className="list-unstyled inner-banner-coaching-canvas-thm-breadcrumb-tools">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="../tools">Tools</a> 
            
          </li>
        </ul>
        <h2 className="container inner-banner__title m-0 m-auto pb-5 text-center">TEAM COACHING CANVAS</h2>
      </div>
    </section>
  );
};

export default TeamCoachingCanvasHeader;

