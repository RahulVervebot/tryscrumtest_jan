import React from "react";
import mandc from "../assets/images/MicKinsey.jpg";
import hid from "../assets/images/HID.jpg";
import who from "../assets/images/WHO.jpg";
import stradegi from "../assets/images/Stradegi.jpg";
import aurbus from "../assets/images/AIRBUS.png";
import catalystone from "../assets/images/CATALYSTONE.jpg";
import trelleborg from "../assets/images/TRELLEBORG.jpg";
import brand11 from "../assets/images/DAIMLER.jpg";
import brand12 from "../assets/images/HALOOR-TOPSDE.jpg";
// import danskebank from "../assets/images/Danske-Bank.png";
import geekyants from "../assets/images/Geekyants.jpg";
import brand15 from "../assets/images/SLK.jpg";
import brand16 from "../assets/images/Olam.jpg";
// import delhivery from "../assets/images/DELHIVERY.jpg";
import sutherland from "../assets/images/SUTHERLAND.jpg";
import amicus from "../assets/images/amicus.jpg";
import cloudcover from "../assets/images/CloudCover.jpg";
import solverminds from "../assets/images/SOLVERMINDS.jpg";
import evolenthealth from "../assets/images/evolent.jpg";
import TechnoTree from "../assets/images/Tecnotree.jpg";
import AECS from "../assets/images/AECS.png"
import archetype from "../assets/images/archetype.jpg"
import BB from "../assets/images/EB01.png"
import Telekom from "../assets/images/TELEKOM.jpg"
import Vertiv from "../assets/images/VERTIV.jpg"
import TSI from "../assets/images/TSI.jpg"
import splitChennai from "../assets/images/SPLIT.jpg"
import IDP from "../assets/images/idp.jpg"
import sdworx from "../assets/images/sdworx.jpg"
import abinbev from "../assets/images/abinbev.jpg"
import maersk from "../assets/images/MAERSK.jpg"
import Ideagen from "../assets/images/Ideagen.png"
import lulugroup from "../assets/images/LuLu.jpg"
import freespace from "../assets/images/F.jpg"
import drreddy from "../assets/images/DrReddys.jpg"
import Eaton from "../assets/images/EATON.jpg"
import dhiraagu from "../assets/images/dhiraagu.jpeg"
import eagle from "../assets/images/EagleBurgmann.jpg"
import tiger from "../assets/images/tiger.png"
import cedar from "../assets/images/cedar.png"
import zeomega from "../assets/images/zeomega.png"
import moneyForward from "../assets/images/moneyForward.png";

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



  const Brands =[
    {
     image : mandc,
    //  height:"80px",
    },
    {
      image : hid,
      // padding:"30px",
      // width:"180px",
      // height:"130px"
     },
     {
      image : who,
      // width:"200px",
      // height:"130px"
     },
     {
      image : stradegi,
      // padding:"20px 0 0 0",
      // height:"100px",
      // width:"170px"
     },
     {
      image : aurbus,
      // height:"100px",
      // width:"170px"
     },
     {
      image : catalystone,
      // height:"100px",
      // width:"170px"
     },
     {
      image : trelleborg,
      // height:"100px",
      // width:"170px"
     },
     {
      image : brand11,
      // height:"100px",
      // width:"170px"
     },
     {
      image : brand12,
      // height:"120px",
      // width:"170px"
     },
    //  {
      // image : danskebank,
      // height:"50px",
      // width:"150px"
    //  },
     {
      image : geekyants,
      // height:"50px",
      // width:"160px"
     },
     {
      image : brand15,
      // height:"90px",
      // width:"140px"
     },
     {
      image : brand16,
      // height:"70px",
      // width:"190px"
     },
    //  {
      // image : delhivery,
      // height:"100px",
      // width:"170px"
    //  },
     {
      image : sutherland,
      // height:"60px",
      // width:"220px"
     },
     {
      image : amicus,
      // height:"140px",
      // width:"150px"
     },
     {
      image : cloudcover,
      // height:"100px",
      // width:"170px"
     },
     {
      image : solverminds,
      // height:"55px",
      // width:"170px"
     },
     {
      image : evolenthealth,
      // height:"100px",
      // width:"170px"
     },
     {
      image : TechnoTree,
      // height:"100px",
      // width:"100px"
     },
     {
      image : AECS,
      // height:"100px",
      // width:"150px"
     },
     {
      image : archetype,
      // height:"100px",
      // width:"100px"
     },
     {
      image : BB,
      // height:"100px",
      // width:"100px"
     },
     {
      image : Telekom,
      // height:"100px",
      // width:"170px"
     },
     {
      image : Vertiv,
      // height:"100px",
      // width:"170px"
     },
     {
      image : TSI,
      // height:"100px",
      // width:"130px"
     },
     {
      image : splitChennai,
      // padding:"10px",
      // height:"100px",
      // width:"100px"
     },
     {
      image : IDP,
      // height:"90px",
      // width:"170px"
     },
     {
      image : sdworx,
      // height:"60px",
      // width:"140px"
     },
     {
      image : abinbev,
      // height:"",
      // width:""
     },
     {
      image : maersk,
      // height:"130px",
      // width:"200px"
     },
     {
      image : Ideagen,
      // height:"85px",
      // width:"170px"
     },

     {
      image : lulugroup,
      // height:"60px",
      // width:"140px"
     },
     {
      image : freespace,
      // height:"85px",
      // width:"90px"
     },
     {
      image : drreddy,
      // height:"85px",
      // width:"140px"
     },
     {
      image : Eaton,
      // height:"85px",
      // width:"150px"
     },

     {
      image : dhiraagu,
      // height:"120px",
      // width:"140px"
     },
     {
      image : eagle,
      // height:"140px",
      // width:"140px"
     },
     {
      image : tiger,
      // height:"140px",
      // width:"140px"
     },
     {
      image : cedar,
      // height:"140px",
      // width:"140px"
     },

    {
   image: zeomega,
    },
    {
      image: moneyForward
    }

  ]





  return (

     <div className="container">
      <div className="row mx-0">
        {Brands.map((items)=>(<div className="col-6 col-xl-3 col-md-4 aboutcontain p-2" style={{display:"flex:",flexDirection:"column", justifyContent:"space-evenly"}}>
          <div className="aboutcontain-img" style={{}}>
          <img src={items.image} alt="" key={items}  style= {{padding:`${items.padding}`, objectFit:"contain"}} className="aboutcontain_image mx-auto d-block" />
          </div>
        </div>))}
      </div>
     </div>
  );
};

export default BrandsTwo;