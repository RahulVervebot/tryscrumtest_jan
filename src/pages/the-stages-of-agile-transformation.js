import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import blogd4 from "../assets/images/noname2.png"
//import PageHeader from "../components/PageHeader";
import WhitePaper from "../components/WhitepaperBuilding";
import Footer from "../components/Footer";
import WhitepaperScaling from "../components/WhitepaperScaling";
import WhitepaperBuildingBlocks from "../components/WhitepaperBuildingBlocks";
import StageofAgileTransformation from "../components/StageofAgileTransformation";

const TheStagesOfAgileTransformation = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/the-stages-of-agile-transformation/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/the-stages-of-agile-transformation/";

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
    <Layout pageTitle="tryScrum | Whitepaper | The Stages Of Agile Transformation: Moving from Theory to Practice" metaDesc="Whitepaper- The Stages Of Agile Transformation: Moving from Theory to Practice | tryScrum" pageName="the-stages-of-agile-transformation" image={blogd4}>
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <WhitePaper title="The Stages of Agile Transformation: Moving from Theory to Practice" />
      <StageofAgileTransformation />
      <Footer />
    </Layout>
  );
};

export default TheStagesOfAgileTransformation;