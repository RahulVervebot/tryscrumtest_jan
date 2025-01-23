import React from "react";
import aboutcontent from "../assets/images/about-content.png";

const PageProductHeader = (props) => {

  return (
 
    <div className="banner-wrapper">
        <section className="banner-one-about banner-carousel__one no-dots">
            
            <div className="banner-one__slide-about">
                <div className="container">
                    
                    <div className="row no-gutters">

                        <div className="col-xl">

                            <h3 className="banner-one__title-about banner-one__light-color-about">                   
                                About US                     
                            </h3>

                        </div>

                        <div className="col-xl">    

                            <a href="https://www.tryscrum.com/leadership" target="_blank">
                                <img src={aboutcontent} className="img-fluid banner-one__title-about-svg" alt="About Content" />  
                            </a>
                         
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  
  );

};

export default PageProductHeader;
