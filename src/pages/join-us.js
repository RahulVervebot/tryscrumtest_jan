import React ,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import blogd4 from "../assets/images/1-01.jpg"
//import PageHeader from "../components/PageHeader";
import WhitePaper from "../components/WhitepaperBuilding";
import Footer from "../components/Footer";
import WhitepaperScaling from "../components/WhitepaperScaling";
import WhitepaperBuildingBlocks from "../components/WhitepaperBuildingBlocks";
import StageofAgileTransformation from "../components/StageofAgileTransformation";
import TrainerContent from "../components/TrainerContent";
import Background from "../components/Background";
import banner from "../assets/images/trainer.png"

const JoinUs = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/join-us/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/join-us/";

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
    <Layout pageTitle="tryScrum | tryScrum Trainer" metaDesc="tryScrum | tryScrum Trainer" pageName="tryscrum-trainer" image={banner}>
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <Background img={banner}/>
      <TrainerContent />
      <Footer />
    </Layout>
  );
};

export default JoinUs;