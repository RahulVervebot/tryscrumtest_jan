import React from "react";
import { Link } from "gatsby";

const TeamHeader = (props) => {
  return (
    <section className="inner-banner__coaching">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="active">
            <Link to="/agile-coaching/">Coaching</Link>
          </li>  
          
        </ul>

        <h2 className="inner-banner__title_coaching">{props.title}</h2>
       
      </div>
      
    </section>
  );
};

export default TeamHeader;
