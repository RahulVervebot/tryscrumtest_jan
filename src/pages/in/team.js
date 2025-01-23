import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import AboutHeader from "../../components/LeadershipTrue";
import Footer from "../../components/footer/InFooter";
import About from "../../components/country/Leadership";
import PageBanner from "../../components/PageBanner";
import TeamBanner from "../../assets/images/try-Scrum-imgaes/banner-imgs/team-banner.jpg"

const GalleryPage = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/team/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/team/";

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
      <PageBanner
      title="Team" 
      image={TeamBanner} 
      padding={40} 
      /> 
      <About />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
