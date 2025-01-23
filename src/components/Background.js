import React from "react";
import { Link } from "gatsby";

// console.log(window.innerWidth, "wwww") 


const Background = (props) => {
  return (
    <section style={{backgroundColor:"#41a5ff"}} className="trainer-bg-box">
      <div className="container-scaling" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        <ul className="mb-0 p-4" style={{"listStyle":"none","display":"flex","justifyContent":"center"}}>
          <li>
            <a href="/" style={{textTransform:"none",color:"black"}}>Home </a> 
          </li>
          <li>
            <a className="active px-2" style={{textTransform:"none",color:"black"}}>.</a> 
          </li>
          <li className="active px-2">
            <a href={props.uri} style={{textTransform:"none",color:"#fff"}}>tryScrum Trainer Application</a> 
          </li>
        </ul>
        {/* <h1 className="container inner-banner__title m-0 m-auto pb-5 text-center">There Are Opportunities Here For you!</h1> */}
        
        {<h1 className="container text-center p-0 text-dark text-end" style={{fontSize:"8vmin",fontWeight:"600"}}>tryScrum Trainer Application</h1>}
        <img src={props.img} className="trainer-image-bg" width={"25%"} height={"25%"} />
        <h5 className="container text-center p-0 py-3" style={{fontSize:"5vmin",fontWeight:"600", color:"#fff"}}>Join the community to Humanise Organisations</h5>
      </div>
    </section>
  );
};

export default Background;
