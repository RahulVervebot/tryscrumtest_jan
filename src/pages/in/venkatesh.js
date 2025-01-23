import React,{useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import LeadershipHeaders from "../../components/LeadershipHeaders";
import Footer from "../../components/footer/InFooter";
// import Studios from "../../components/Leadershipdetails1";
import VenkateshProfile from "../../components/VenkateshProfile";

const GalleryPage = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/venkatesh/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/venkatesh/";

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
    <Layout pageTitle="tryScrum | Team" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <LeadershipHeaders title="Team" />
      <VenkateshProfile />
      <Footer /> 
    </Layout>

  );
};

export default GalleryPage;