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

// import AECS from "../assets/images/AECS.png"
// import BB from "../assets/images/3bb.png"

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
    <section className="mb-5"> 
      <BrandsAbout />
    </section>
  );
};

export default BrandsTwo;