import React from "react";
import Swiper from "react-id-swiper";
import brand1 from "../assets/images/1-5.jpeg";
import brand2 from "../assets/images/client-logo1.jpeg";
import brand3 from "../assets/images/client-new.jpeg";
import brand4 from "../assets/images/client-logo3.jpeg";
import brand5 from "../assets/images/client-logo4.jpeg";
import brand6 from "../assets/images/client-logo5.jpeg";
import brand7 from "../assets/images/client-new1.jpeg";
import brand8 from "../assets/images/client-new2-1.jpeg";
import brand9 from "../assets/images/client-new4.jpeg";
import brand10 from "../assets/images/client-new5.jpeg";
import brand11 from "../assets/images/client-new6.jpeg";
import brand12 from "../assets/images/client-new7.jpeg";
import brand13 from "../assets/images/logo-unitedlex.png";
import danskebank from "../assets/images/danske-bank.png";
import brand14 from "../assets/images/logo-geeky-ants.png";
import brand15 from "../assets/images/logo-slk.jpeg";
import brand16 from "../assets/images/olam_logo.png";
import delhivery from "../assets/images/delhivery.jpg";
import sutherland from "../assets/images/sutherland.png";
import amicus from "../assets/images/amicus-technology-removebg.png";
import cloudcover from "../assets/images/cloudcover.png";
import solverminds from "../assets/images/solverminds.png";
import TechnoTree from "../assets/images/TechnoTree.jpeg";

import AECS from "../assets/images/AECS.png"
import BB from "../assets/images/3bb.png"

import Telekom from "../assets/images/Telekom2.png"

// import evolenthealth from "../assets/images/Evolent_Health_Logo.png";
import evolenthealth from "../assets/images/Evolent_Health_Logo.jpeg";


import BrandsAbout from "./BrandsAbout"

const BrandsTwo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    // <section className="brand-two">
    <section> 
      
      {/* <div className="container"> */}
        
        {/* <div className="block-title">
          <h1 className="block-title__title" >BRANDS WE SERVED</h1>
        </div> */}
        {/* <div className="brand-one__carousel"> */}
          <div className="container">
            <div className="row">
              <div className="col">
              <img src={brand1} alt="McKinsey&Company" />
              </div>
              <div className="col">
              <img src={brand2} alt="HID" />
              </div>
              <div className="col">
              <img src={brand3} alt="who" />
              </div>
              <div className="col">
              {/* <img src={delhivery} alt="" /> */}
              <img src={sutherland} alt="sutherland" />
              {/* <img src={brand4} alt="" /> */}
              </div>
            </div>

            <div style={{marginBottom:"10px"}}></div>
            
            <div className="row">
              <div className="col">
                <img src={brand5} alt="stradegi" />
              </div>
              <div className="col">
              {/* <img src={sutherland} alt="" /> */}
              {/* <img src={brand6} alt="" /> */}
                <img src={delhivery} alt="delhivery" />
              </div>
              <div className="col" style={{marginTop:"15px", marginLeft:"15px"}}>
                {/* <img src={brand7} alt="who" /> */}
                <img src={TechnoTree} width="170" height="90" alt="TechnoTree" />
              </div>
              <div className="col">
                <img src={brand8} alt="airbus" />
              </div>
            </div>

            <div style={{marginBottom:"10px"}}></div>

            <div className="row">
              <div className="col">
              <img src={brand9} alt="catalystone" />
              </div>
              <div className="col"  style={{marginTop:"10px"}}>
              <img src={brand10} width="170" height="90" alt="trelleborg" />
              </div>
              <div className="col">
              <img src={brand11} alt="daimler" />
              </div>
              <div className="col">
              <img src={brand12} alt="haldor topsoe" />
              </div>
              
            </div>

            <div style={{marginBottom:"10px"}}></div>

            <div className="row">
              <div className="col" style={{marginTop:"20px"}}>
                {/* <img src={brand13} width="187" height="110" alt="" /> */}
                <img src={danskebank} width="187" height="50" alt="danskebank" />
              </div>
              <div className="col">
                <img src={brand14} width="170" height="90" alt="geekyants" />
              </div>
              <div className="col">
                <img src={brand15} width="170" height="90" alt="slk" />
              </div>
              <div className="col"  style={{marginTop:"15px"}}>
                <img src={brand16} width="187" height="60" alt="olam" />
              </div>
            </div>

            <div className="row">
             
              <div className="col" style={{marginTop:"-40px"}} >
                <img src={amicus} width="200" height="210" alt="amicus" />
              </div>
              <div className="col" style={{marginTop:"-10px"}}>
                <img src={cloudcover} width="200" height="150" alt="cloudcover" />
              </div>

              <div className="col" style={{marginTop:"35px"}}>
                <img src={solverminds} width="200" height="60" alt="solverminds" />
              </div>

              <div className="col" style={{marginTop:"15px"}}>
                <img src={evolenthealth} width="200" height="100" alt="evolenthealth" />
              </div>
            
            </div>

{/* for desktop */}
<div className="desktopdisplay">
            <div className="row">
             
             <div className="col" style={{marginTop:"0px"}} >
               <img src={BB} width="120" height="100" alt="amicus" />
             </div>
             <div className="col" style={{marginTop:"10px"}}>
               <img src={AECS} width="150" height="100" alt="cloudcover" />
             </div>

             <div className="col" style={{marginTop:"0px"}}>
               <img src={Telekom} width="200" height="150" alt="solverminds" />
             </div>

             <div className="col" style={{marginTop:"15px"}}>
               {/* <img src={evolenthealth} width="200" height="100" alt="evolenthealth" /> */}
             </div>
           
           </div>
           </div>


{/* for mobile */}
<div className="mobiledisplay">
<div className="row">
             
<div className="col" style={{marginTop:"-18px",marginLeft:"2rem"}} >
                <img src={BB} width="120" height="100" alt="amicus" />
              </div>
              
              <div className="col" style={{marginTop:"15px"}}>
                <img src={AECS} width="200" height="100" alt="evolenthealth" />
              </div>
          
              <div className="col" style={{marginTop:"35px",marginLeft:"2rem"}}>
                <img src={Telekom} width="120" height="100" alt="amicus" />
              </div>

             <div className="col" style={{marginTop:"15px"}}>
               {/* <img src={evolenthealth} width="200" height="100" alt="evolenthealth" /> */}
             </div>
           
           </div>
           </div>



            {/* <div className="row">
             

              <div className="col"  style={{marginTop:"-40px"}}  >
                <img src={BB} width="150" height="100" alt="BB" />
              </div>
  
                <div className="col" style={{marginTop:"-10px"}}>
                  <img src={AECS} width="150" height="100" alt="AECS" />
                </div>
                
                <div className="col" style={{marginBottom:"30px"}}  >
                  <img src={Telekom} width="200" height="120" alt="Telekom" />
                </div>

              <div className="col" />

                   
            </div> */}

          </div>

      {/* To Show On Mobile Screen only uncomment below */}
      {/* <div className="displaypixels" >  
        <div className="container offset-md-1">

              <div className="row">
                
                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={cloudcover} width="200" height="200" alt="" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={amicus} width="200" height="200" alt="" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={solverminds} width="200" height="200" alt="" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={evolenthealth} width="200" height="200" alt="" />
                  </div>
                </div>
        
              </div>
          </div>    
      </div> */}


          
        {/*  
        <div>
           <Swiper {...params}> 
          
            <div className="item">
              <img src={brand1} alt="" />
            </div>
           
            <div className="item">
              <img src={brand2} alt="" />
            </div>
            
            <div className="item">
              <img src={brand3} alt="" />
            </div>
           
            <div className="item">
              <img src={brand4} alt="" />
            </div>
            <div className="item">
              <img src={brand5} alt="" />
            </div>
            <div className="item">
              <img src={brand6} alt="" />
            </div>
            <div className="item">
              <img src={brand7} alt="" />
            </div>
            <div className="item">
              <img src={brand8} alt="" />
            </div>
            <div className="item">
              <img src={brand9} alt="" />
            </div>
            <div className="item">
              <img src={brand10} alt="" />
            </div>
            <div className="item">
              <img src={brand11} alt="" />
            </div>
            <div className="item">
              <img src={brand12} alt="" />
            </div>
            <div className="item">
              <img src={brand13} alt="" />
            </div>
           </Swiper> 
        </div>
        */}
      {/* </div> */}
      <BrandsAbout />
    </section>
  );
};

export default BrandsTwo;
