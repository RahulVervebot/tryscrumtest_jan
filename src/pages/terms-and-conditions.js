import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import StudiosHeaders from "../components/VirtualHeader";
import Footer from "../components/Footer";
import Support from "../components/TermsConditions";

const VirtualPage = () => {

  return (
    <Layout pageTitle="tryScrum | Terms and Conditions" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <StudiosHeaders title="Terms and Conditions" />
      <Support />
      <Footer />
    </Layout>
  );
};

export default VirtualPage;