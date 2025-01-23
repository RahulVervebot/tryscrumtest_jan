import React,{useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import ToolsHeaders from "../../components/ToolsHeader";
import Footer from "../../components/footer/InFooter";
import ToolsContent from "../../components/country/ToolsContent";
import CourseTools from "../../components/country/CourseTools";

const Tools = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/tools/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/tools/";

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
    <Layout pageTitle="tryScrum | tools" pageName="tools">
      <NavTwo />
      <ToolsHeaders title="tryScrum Toolkit" />
      <ToolsContent /> 
      <CourseTools />
      <Footer />
    </Layout>
  );
};

export default Tools;