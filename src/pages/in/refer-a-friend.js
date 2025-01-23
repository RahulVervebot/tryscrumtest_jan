import React from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import Footer from "../../components/footer/InFooter";
import ReferContent from "../../components/ReferContent";
import Background from "../../components/ReferBackground";
import banner from "../../assets/images/trainer.png"

const Refer = () => {
  return (
    <Layout pageTitle="tryScrum | tryScrum Trainer" metaDesc="tryScrum | tryScrum Trainer" pageName="tryscrum-trainer" image={banner}>
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <Background img={banner}/>
      <ReferContent />
      <Footer />
    </Layout>
  );
};

export default Refer;