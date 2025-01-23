import React,{useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
//import PageHeader from "../../components/PageHeader";
import WhitePaper from "../../components/WhitepaperNexus";
import Footer from "../../components/footer/InFooter";
import WhitepaperScaling from "../../components/WhitepaperScaling";

const WhitepaperScalingScrum = () => 
{
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/whitepaper-scaling-scrum/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/whitepaper-scaling-scrum/";

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
      <WhitePaper title="Whitepaper" />
      <WhitepaperScaling />
      <Footer />
    </Layout>
  );
};

export default WhitepaperScalingScrum;
