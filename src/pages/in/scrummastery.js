import React from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
//import PageHeader from "../../components/PageHeader";
import WhitePaper from "../../components/WhitepaperScaling";
import Footer from "../../components/footer/InFooter";
import WhitepaperScaling from "../../components/ScrumMastery";

const WhitepaperScalingScrum = () => {
  return (
    <Layout pageTitle="tryScrum | News Details" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <WhitePaper title="News Details" />
      <WhitepaperScaling />
      <Footer />
    </Layout>
  );
};

export default WhitepaperScalingScrum;