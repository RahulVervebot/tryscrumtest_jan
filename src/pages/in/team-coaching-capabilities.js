import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import Footer from "../../components/footer/InFooter";
import PageBanner from "../../components/PageBanner";
import Businesscoching from "../../assets/images/team-coaching-banner.jpg"
import TeamcoachingContent from "../../components/TeamcoachingContent";
import bannerimage from '../../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'


const Teamcoach = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/team-coaching-capabilities/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/team-coaching-capabilities/";

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
    <Layout metaDesc="Agile Coaching Competencies - Team Coaching Capabilities | tryScrum" pageName="team-coaching-capabilities" pageTitle="Agile Coaching Competencies - Team-coaching-capabilities | tryScrum" image={Businesscoching}>
      <NavTwo />
      <PageBanner 
      title="Team Coaching Capabilities" 
      image={Businesscoching} 
      uri={"team-coaching-capabilities"} 
      uri_2={"agile-coach-competencies"}  
      title_2={"Agile Coach Competencies"} 
      active_2={""}
      active_1={"active"}
      padding={18}/> 
      <TeamcoachingContent />     
      <Footer />
    </Layout>
  );
};

export default Teamcoach;