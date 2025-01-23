import React,{useEffect} from "react";
import Layout from "../../../components/Layout";
import NavTwo from "../../../components/header/NavIn";
import WhitePaper from "../../../components/WhitePaperStages";
import Footer from "../../../components/footer/InFooter";
import WhitepaperScaling from "../../../components/ScrumMastery";
const WhitepaperScalingScrum = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/resources/whitepaper-stages-of-scrum-mastery/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/resources/whitepaper-stages-of-scrum-mastery/";

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
    <Layout pageTitle="tryScrum | Whitepaper" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="whitepapers" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <WhitePaper title="WhitePaper" />
      <WhitepaperScaling />
      <Footer />
    </Layout>
  );
};

export default WhitepaperScalingScrum;