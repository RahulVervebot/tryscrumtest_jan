import React,{useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
//import PageHeader from "../../components/PageHeader";
import ScrumPlusHeader from "../../components/ScrumPlusHeader";
import Footer from "../../components/footer/InFooter";
import ScrumPlusContent from "../../components/ScrumPlus";

const ScrumPlus = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/scrumplus/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/scrumplus/";

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
    <Layout pageTitle="tryScrum | Scrum +" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <ScrumPlusHeader title="Scrum +" />
      <ScrumPlusContent />
      <Footer />
    </Layout>
  );
};

export default ScrumPlus;
