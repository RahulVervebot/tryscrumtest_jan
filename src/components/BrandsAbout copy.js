import React from "react";
import brand1 from "../assets/images/1-5.jpeg";
import brand2 from "../assets/images/client-logo1.jpeg";
import brand3 from "../assets/images/client-new.jpeg";
import brand5 from "../assets/images/client-logo4.jpeg";
import brand8 from "../assets/images/client-new2-1.jpeg";
import brand9 from "../assets/images/client-new4.jpeg";
import brand10 from "../assets/images/client-new5.jpeg";
import brand11 from "../assets/images/client-new6.jpeg";
import brand12 from "../assets/images/client-new7.jpeg";
import danskebank from "../assets/images/danske-bank.png";
import brand14 from "../assets/images/logo-geeky-ants.png";
import brand15 from "../assets/images/logo-slk.jpeg";
import brand16 from "../assets/images/olam_logo.png";
import delhivery from "../assets/images/delhivery.jpg";
import sutherland from "../assets/images/sutherland.png";
import amicus from "../assets/images/amicus-technology-removebg.png";
import cloudcover from "../assets/images/cloudcover.png";
import solverminds from "../assets/images/solverminds.png";
import evolenthealth from "../assets/images/Evolent_Health_Logo.jpeg";
import TechnoTree from "../assets/images/TechnoTree.jpeg";
import AECS from "../assets/images/AECS.png"
import archetype from "../assets/images/archetype.jpeg"
import BB from "../assets/images/3bb.png"
import Telekom from "../assets/images/Telekom2.png"
import Vertiv from "../assets/images/vertiv.png"
import TSI from "../assets/images/TSI.jpeg"
import splitChennai from "../assets/images/splitchennai.jpg"
import IDP from "../assets/images/IDP.png"
import sdworx from "../assets/images/sdworx.png"
import abinbev from "../assets/images/abinbev.png"
import maersk from "../assets/images/Maersk.png"
import Ideagen from "../assets/images/Ideagen.png"





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
    <section >

      <section className="brand-two-unlined" >

        <div className="desktopdisplay">
          <div style={{ display: "flex", margin: "0 auto" }} >
            <div className="container" style={{ display: "flex", margin: "0 auto", justifyContent: "center", flexDirection: "column" }}>
              <div className="row">
                <div className="col">
                  <img src={brand1} alt="brand1" />
                </div>
                <div className="col">
                  <img src={brand2} alt="brand2" />
                </div>
                <div className="col">
                  <img src={brand3} alt="rand3" />
                </div>
                <div className="col mt-4">
                  <img src={sutherland} width="190" height="60" alt="sutherland" />
                </div>
              </div>

              <div style={{ marginBottom: "10px" }}></div>

              <div className="row">
                <div className="col">
                  <img src={brand5} alt="" />
                </div>
                <div className="col">
                  <img src={delhivery} alt="delhivery" />
                </div>
                <div className="col mt-3" >
                  <img src={TechnoTree} width="170" height="90" alt="TechnoTree" />
                </div>
                <div className="col">
                  <img src={brand8} alt="" />
                </div>
              </div>

              <div style={{ marginBottom: "10px" }}></div>

              <div className="row">
                <div className="col">
                  <img src={brand9} alt="catalystone" />
                </div>
                <div className="col" style={{ marginTop: "10px" }}>
                  <img src={brand10} width="170" height="90" alt="trelleborg" />
                </div>
                <div className="col">
                  <img src={brand11} alt="daimler" />
                </div>
                <div className="col">
                  <img src={brand12} alt="haldor topsoe" />
                </div>

              </div>

              <div style={{ marginBottom: "10px" }}></div>

              <div className="row">
                <div className="col" style={{ marginTop: "20px" }}>
                  <img src={danskebank} width="190" height="50" alt="danskebank" />
                </div>
                <div className="col mt-4">
                  <img src={brand14} width="190" height="40" alt="geekyants" />
                </div>
                <div className="col">
                  <img src={brand15} width="170" height="90" alt="slk" />
                </div>
                <div className="col" style={{ marginTop: "15px" }}>
                  <img src={brand16} width="187" height="60" alt="olam" />
                </div>
              </div>

              <div className="row">
                <div className="col" style={{ marginTop: "-40px" }} >
                  <img src={amicus} width="200" height="210" alt="amicus" />
                </div>
                <div className="col" style={{ marginTop: "-10px" }}>
                  <img src={cloudcover} width="200" height="150" alt="cloudcover" />
                </div>

                <div className="col mt-5" >
                  <img src={solverminds} width="200" height="60" alt="solverminds" />
                </div>

                <div className="col" style={{ marginTop: "15px" }}>
                  <img src={evolenthealth} width="200" height="100" alt="evolenthealth" />
                </div>

              </div>
              <div className="row">
                <div className="col" >
                  <img src={Vertiv} width="200" height="100" alt="vertiv" />
                </div>
                <div className="col" style={{ marginTop: "-10px", marginLeft: "2rem" }} >
                  <img src={BB} width="100" height="100" alt="amicus" />
                </div>

                <div className="col" style={{ marginTop: "0" }}>
                  <img src={AECS} width="160" height="100" alt="evolenthealth" />
                </div>

                <div className="col" style={{ marginTop: "0" }}>
                  <img src={Telekom} width="180" height="100" alt="amicus" />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col mt-4" style={{ marginTop: "20px", marginLeft: "20px" }}>
                  <img src={archetype} width="150" height="150" alt="archetype" />
                </div>
                <div className="col" style={{ marginTop: "20px", marginLeft: "0px" }}>
                  <img src={TSI} width="150" height="150" alt="TSI" />
                </div>
                <div className="col" style={{ marginTop: "20px", marginLeft: "0px" }}>
                  <img src={splitChennai} width="150" height="150" alt="splitchennai" />
                </div>
                <div className="col" style={{ marginTop: "60px", marginLeft: "0px" }}>
                  <img src={IDP} width="140" height="60" alt="splitchennai" />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col" style={{ marginTop: "40px", marginLeft: "0px" }}>
                  <img src={abinbev} width="150" height="100" alt="abinbev" />
                </div>
                <div className="col" style={{ marginTop: "15px", marginLeft: "0px" }}>
                  <img src={maersk} width="250" height="150" alt="maersk" />
                </div>
                <div className="col" style={{ marginTop: "40px", marginLeft: "0px" }}>
                  <img src={Ideagen} width="200" height="80" alt="ideagen" />
                </div>
                <div className="col mt-5" style={{marginLeft: "25px" }}>
                  <img src={sdworx} width="150" height="50" alt="sdworx" />
                </div>
              </div>

             




            </div>
          </div>
        </div>

        <div className="tabletdisplay">
          <div style={{ display: "flex", margin: "0 auto" }} >
            <div className="container-fluid" style={{ display: "flex", marginLeft: "10px", justifyContent: "center", flexDirection: "column" }}>
              <div className="row">
                <div className="col">
                  <img src={brand1} alt="" />
                </div>
                <div className="col">
                  <img src={brand2} alt="" />
                </div>
                <div className="col">
                  <img src={brand3} alt="" />
                </div>

              </div>

              <div style={{ marginBottom: "10px" }}></div>

              <div className="row">
                <div className="col mt-4">
                  <img src={sutherland} height="60" width="190" alt="" />
                </div>
                <div className="col">
                  <img src={brand5} alt="" />
                </div>
                <div className="col">

                  <img src={delhivery} alt="delhivery" />
                </div>

              </div>

              <div style={{ marginBottom: "10px" }}></div>

              <div className="row">
                <div className="col mt-3" >
                  <img src={TechnoTree} width="170" height="90" alt="TechnoTree" />
                </div>
                <div className="col">
                  <img src={brand8} alt="" />
                </div>
                <div className="col">
                  <img src={brand9} alt="catalystone" />
                </div>
              </div>

              <div style={{ marginBottom: "10px" }}></div>

              <div className="row">
                <div className="col" style={{ marginTop: "10px" }}>
                  <img src={brand10} width="170" height="90" alt="trelleborg" />
                </div>
                <div className="col">
                  <img src={brand11} alt="daimler" />
                </div>
                <div className="col">
                  <img src={brand12} alt="haldor topsoe" />
                </div>


              </div>

              <div className="row">
                <div className="col" style={{ marginTop: "20px" }}>
                  <img src={danskebank} width="187" height="50" alt="danskebank" />
                </div>
                <div className="col mt-4">
                  <img src={brand14} width="190" height="40" alt="geekyants" />
                </div>
                <div className="col">
                  <img src={brand15} width="170" height="90" alt="slk" />
                </div>
              </div>

              <div className="row">
                <div className="col" style={{ marginTop: "35px" }}>
                  <img src={brand16} width="185" height="60" alt="olam" />
                </div>
                <div className="col" style={{ marginTop: "-40px" }} >
                  <img src={amicus} width="180" height="210" alt="amicus" />
                </div>
                <div className="col" style={{ marginTop: "-10px" }}>
                  <img src={cloudcover} width="198" height="150" alt="cloudcover" />
                </div>
              </div>


              <div className="row">
                <div className="col">
                  <img src={solverminds} width="200" height="60" alt="solverminds" />
                </div>
                <div className="col">
                  <img src={evolenthealth} width="200" height="100" alt="evolenthealth" />
                </div>
                <div className="col">
                  <img src={Vertiv} width="200" height="100" alt="vertiv" />
                </div>
              </div>

              <div className="row">
                <div className="col d-flex" style={{ marginTop: "20px", marginLeft: "20px" }}>
                  <img src={archetype} width="120" height="120" alt="archetype" />
                </div>
                <div className="col mt-4" style={{ marginTop: "0px", marginLeft: "20px" }}>
                  <img src={TSI} width="150" height="150" alt="TSI" />
                </div>
                <div className="col mt-4" style={{ marginTop: "0px", marginLeft: "20px" }}>
                  <img src={splitChennai} width="150" height="150" alt="splitchennai" />
                </div>
              </div>

              <div className="row">
                <div className="col" style={{ marginTop: "60px", marginLeft: "0px" }}>
                  <img src={IDP} width="140" height="60" alt="splitchennai" />
                </div>
                <div className="col" style={{ marginTop: "40px", marginLeft: "0px" }}>
                  <img src={abinbev} width="150" height="100" alt="TSI" />
                </div>
                <div className="col" style={{ marginTop: "20px", marginLeft: "0px" }}>
                  <img src={maersk} width="240" height="150" alt="splitchennai" />
                </div>
              </div>

              <div className="row">
                
                <div className="col" style={{ paddingTop: "20px", marginLeft: "20px" }}>
                  <img src={Ideagen} width="200" height="80" alt="Ideagen" />
                </div>
                <div className="col" style={{ marginTop: "30px", marginLeft: "0px" }}>
                <img src={sdworx} width="150" height="50" alt="sdworx" />
                  
                </div>
                <div className="col mt-4" style={{ marginTop: "20px", marginLeft: "20px" }}>
                  {/* <img src={zucisystems} width="150" height="150" alt="archetype" /> */}
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="mobiledisplay" >
          <div style={{ display: "flex", margin: "0 auto" }} >
            <div className="container" style={{ display: "flex", margin: "0 auto", flexDirection: "column" }}>
              <div className="row ">
                <div className="col mt-4 pl-5">
                  <img src={brand1} alt="brand1" height="40" width="120" />
                </div>
                <div className="col pl-5">
                  <img src={brand2} alt="brand2" height="70" width="110" />
                </div>
              </div>



              <div className="row mt-4">
                <div className="col">
                  <img src={brand3} alt="rand3" height="80" width="140" />
                </div>
                <div className="col mt-4">
                  <img src={sutherland} height="30" width="140" alt="utherland" />
                </div>
              </div>



              <div className="row mt-4">
                <div className="col">
                  <img src={brand5} alt="brand5" height="70" width="140" />
                </div>
                <div className="col">
                  <img src={delhivery} alt="delhivery" height="70" width="140" />
                </div>
              </div>



              <div className="row mt-4">
                <div className="col mt-3 pl-5" >
                  <img src={TechnoTree} height="80" width="100" alt="TechnoTree" />
                </div>
                <div className="col pt-4">
                  <img src={brand8} alt="" height="70" width="140" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <img src={brand9} alt="catalystone" height="80" width="140" />
                </div>
                <div className="col" style={{ marginTop: "10px" }}>
                  <img src={brand10} height="70" width="140" alt="trelleborg" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <img src={brand11} alt="daimler" height="80" width="140" />
                </div>
                <div className="col">
                  <img src={brand12} alt="haldor topsoe" height="80" width="140" />
                </div>
              </div>


              <div className="row mt-4">
                <div className="col" style={{ marginTop: "20px" }}>
                  <img src={danskebank} height="35" width="140" alt="danskebank" />
                </div>
                <div className="col mt-4">
                  <img src={brand14} width="190" height="40" alt="geekyants" />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col mt-3">
                  <img src={brand15} height="70" width="140" alt="slk" />
                </div>
                <div className="col mt-4">
                  <img src={brand16} height="40" width="140" alt="olam" />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <img src={amicus} height="140" width="140" alt="amicus" />
                </div>
                <div className="col mt-4">
                  <img src={cloudcover} height="80" width="140" alt="cloudcover" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col" >
                  <img src={solverminds} height="45" width="190" alt="solverminds" />
                </div>
                <div className="col" >
                  <img src={evolenthealth} height="60" width="120" alt="evolenthealth" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col mt-3" >
                  <img src={Vertiv} height="85" width="140" alt="vertiv" />
                </div>

                <div className="col d-flex" style={{ marginTop: "20px", marginLeft: "80px" }}>
                  <img src={archetype} height="80" width="80" alt="archetype" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col mt-2" style={{ marginTop: "10px", marginLeft: "20px" }}>
                  <img src={TSI} height="80" width="120" alt="TSI" />
                </div>

                <div className="col mt-2" style={{ marginTop: "10px", marginLeft: "20px" }}>
                  <img src={splitChennai} height="90" width="110" alt="splitchennai" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col" style={{ marginTop: "40px", marginLeft: "10px" }}>
                  <img src={IDP} width="120" height="50" alt="IDP" />
                </div>
                <div className="col" style={{ marginTop: "10px", marginLeft: "20px" }}>
                  <img src={abinbev} width="100" height="80" alt="abinbev" />
                </div>  
              </div>

              <div className="row mt-3"> 
                <div className="col" style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <img src={maersk} width="160" height="90" alt="maersk" />
                </div>
                <div className="col" style={{ marginTop: "30px", marginLeft: "20px" }}>
                  <img src={Ideagen} width="100" height="40" alt="ideagen" />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col" style={{ marginTop: "10px", marginLeft: "27px" }}>
                <img src={sdworx} width="110" height="35" alt="sdworx" />
                  
                </div>
                <div className="col mt-4 ml-2" style={{ marginTop: "0", marginLeft: "40px" }}>
                  {/* <img src={zucisystems} width="100" height="80" alt="zucisystems" /> */}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </section >
  );
};

export default BrandsTwo;
