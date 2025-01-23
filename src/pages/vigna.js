import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import LeadershipHeaders from "../components/LeadershipHeaders";
import Footer from "../components/Footer";
import VignaDescription from "../components/VignaDescription";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | Team" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <LeadershipHeaders title="Team" />
      <VignaDescription />
      <Footer />
    </Layout>

  );
};

export default GalleryPage;