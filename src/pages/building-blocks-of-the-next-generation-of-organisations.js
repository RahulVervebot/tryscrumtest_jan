import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import blogd1 from "../assets/images/whitepaper-bulidingblock-content.jpg"
//import PageHeader from "../components/PageHeader";
import WhitePaper from "../components/WhitepaperBuilding";
import Footer from "../components/Footer";
import WhitepaperScaling from "../components/WhitepaperScaling";
import WhitepaperBuildingBlocks from "../components/WhitepaperBuildingBlocks";

const Buildingblocks = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/building-blocks-of-the-next-generation-of-organisations/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/building-blocks-of-the-next-generation-of-organisations/";

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
    <Layout pageTitle="tryScrum | Whitepaper | Building Blocks of the next generation of Organisations" metaDesc="Whitepaper- Building Blocks of the next generation of Organisations | tryScrum" pageName="whitepapers-building-blocks" image={blogd1}>
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <WhitePaper title="Building blocks of the next generation of Organisations" />
      <WhitepaperBuildingBlocks />
      <Footer />
    </Layout>
  );
};

export default Buildingblocks;