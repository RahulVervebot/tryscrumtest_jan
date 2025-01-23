import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import BuscoachingContent from "../components/BuscoachingContent";
import PageBanner from "../components/PageBanner";
import Businesscoching from "../assets/images/business-coach.jpg"
import bannerimage from '../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'


const Coach = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/business-coaching-capabilities/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/business-coaching-capabilities/";

  //   // Append to head
  //   document.head.appendChild(linkUS);
  //   document.head.appendChild(linkIN);

  //   // Cleanup function to remove the elements when the component unmounts
  //   return () => {
  //     document.head.removeChild(linkUS);
  //     document.head.removeChild(linkIN);
  //   };
  // }, []);
  return (
    <Layout metaDesc="Agile Coaching Competencies - Business Coaching Capabilities | tryScrum" pageName="business-coaching-capabilities" pageTitle="Agile Coaching Competencies - Business Coaching Capabilities | tryScrum" image={Businesscoching}>

    
      <NavTwo />
      <PageBanner
      title="Business Coaching Capabilities" 
      image={Businesscoching} uri={"business-coaching-capabilities"} 
      padding={18} uri_2={"agile-coach-competencies"}  
      title_2={"Agile Coach Competencies"}
      active_2={""}
      active_1={"active"}
      /> 
      
      <BuscoachingContent />     
      <Footer />
    </Layout>
  );
};

export default Coach;