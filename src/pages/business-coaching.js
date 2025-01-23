import React, {useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import BusinessHeader from "../components/BusinessHeader";
import BusinessCoaching from "../components/BusinessCoaching"
import Footer from "../components/Footer";

const Coach = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/business-coaching/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/business-coaching/";

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
    <Layout pageTitle="tryScrum | Coaching | Offerings" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <BusinessHeader title="Business Coaching" /> 
      <BusinessCoaching />     
      <Footer />
    </Layout>
  );
};

export default Coach;