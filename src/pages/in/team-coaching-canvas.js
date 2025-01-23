import React,{useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import TeamCoachingCanvasHeader from "../../components/TeamCoachingCanvasHeader";
import TeamCoachingCanvasContent from "../../components/TeamCoachingCanvas";
import Footer from "../../components/footer/InFooter";

const TeamCoachingCanvas = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/team-coaching-canvas/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/team-coaching-canvas/";

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
    <Layout pageTitle="tryScrum | Tools" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="tools" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <TeamCoachingCanvasHeader title="TEAM COACHING CANVAS" />
      <TeamCoachingCanvasContent />
      <Footer />
    </Layout>
  );
};

export default TeamCoachingCanvas;