import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import Footer from "../../components/footer/InFooter";
import LeadcoachingContent from "../../components/LeadcoachingContent";
import PageBanner from "../../components/PageBanner";
import leadcoching from "../../assets/images/acc-leadership-img.jpg"
// import Leader from '../../assets/images/agilecoach/leadership-coaching.png'
import bannerimage from '../../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'


const Lead = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/leadership-coaching-capabilities/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/leadership-coaching-capabilities/";

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
    <Layout metaDesc="At its core, Leadership Coaching is about unlocking a leader's potential and enabling them to be more effective." pageName="leadership-coaching-capabilities" pageTitle="Agile Coaching Competencies - Leadership Coaching Capabilities | tryScrum" image={leadcoching}>

    
      <NavTwo />
      <PageBanner
      title="Leadership Coaching Capabilities" 
      image={leadcoching} uri={"leadership-coaching-capabilities"} 
      padding={18} uri_2={"agile-coach-competencies"}  
      title_2={"Agile Coach Competencies"}
      active_2={""}
      active_1={"active"}
      /> 
      
      <LeadcoachingContent />     
      <Footer />
    </Layout>
  );
};

export default Lead;