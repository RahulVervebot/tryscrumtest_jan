import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageGalleryHeader from "../components/PageGalleryHeader";
import Footer from "../components/Footer";
import GalleryScrum from "../components/GalleryScrum";
const GalleryPage = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/scrum-master-studio/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/scrum-master-studio/";

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
    <Layout pageTitle="Certified Scrum Training – Scrum Master Studio Chennai" metaDesc="Join the best Scrum Master Studio in Chennai and grow your skills in scrum master, product owner and become a future leader." pageName="home" >
      <NavTwo />
      <PageGalleryHeader title="Studio" />
      <GalleryScrum />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
