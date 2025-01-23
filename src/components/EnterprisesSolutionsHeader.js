import React from "react";
import { size } from "lodash";
import headerimg from "../assets/images/bg_main_enterprises.jpeg";
import BrandsEnterprise from "../components/BrandsEnterprise";
const SolutionsHeader = (props) => {

  return (
 
    <div className="banner-wrapper">
        <section className="banner-one-about banner-carousel__one no-dots">
            
            <div className="banner-one enterprise_header">
                <div className="container" style={{maxWidth:"1400px"}}>
                    
                    <div className="row no-gutters">

                        <div className="col-xl-7">

                            <h1 className="main_header_title" style={{color:"#fff", fontWeight:"800", marginTop:"10%"}}>                   
                           <span style={{fontSize:"4rem"}}> Transform your enterprise with expert<br/>Agile consulting & training</span>              
                            </h1>
                            <table>
                                <th> <a class="thm-btn" href="/" style={{padding:"18.50x, 27px"}}>Contact Us</a></th>
                                <th> <a class="thm-btn" href="/" style={{padding:"18.50x, 27px", background:"#CCDE7A", color: "#000"}}>Speak to Our Experts Today</a></th>
                            </table>
                           
                        </div>

                        <div className="col-xl-5">    

                        <img src={headerimg} className="img-fluid" style={{borderRadius:"50px"}} alt="enterprise with expert Agile consulting & training" />  
                         
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <div className="brandTrusted" style={{backgroundColor:"#fff"}}>
        <h4 style={{ marginTop:"30px", marginBottom:"30px", textAlign:"center", color: "#012237", fontWeight: "bold"}}>Trusted by 100+ Organisations around the globe</h4> 
<BrandsEnterprise/>
</div>
    </div>
  
  );

};

export default SolutionsHeader;
