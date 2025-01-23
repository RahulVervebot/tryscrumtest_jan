import React from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import LeadershipHeaders from "../../components/LeadershipHeaders";
import Footer from "../../components/footer/InFooter";
import MaheshDescription from "../../components/MaheshDescription";

const Robert = () => {
  return (
    <Layout pageTitle="tryScrum | Team" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <LeadershipHeaders title="Team" />
     <MaheshDescription />
      <Footer />
    </Layout>

  );
};

export default Robert;