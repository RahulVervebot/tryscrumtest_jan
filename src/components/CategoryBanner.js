import React from "react";
import { Link } from "gatsby";

const CategoryBanner = (props) => {

  const { uri, uri_2, title, title_2, title_1, image , padding , active_1, active_2, search, icon } = props

  return (
    <>
      <section className="category_banner position-relative" style={{ backgroundImage: `url(${image})`, backgroundPosition:"center" }}>
        <p className="container inner-banner__title  margin-0 " style={{paddingBottom:`${padding}px`,  width:"60%",textAlign:"center"}}>{title}<button style={{background:"none",border:"none", color:"#fff", fontSize:"40px", padding:"0 0 0 10px",}} onClick={props.search} >{props.icon}</button></p>
      </section>
    </>
  );
};

export default CategoryBanner;