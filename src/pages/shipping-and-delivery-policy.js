import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import StudiosHeaders from "../components/VirtualHeader";
import Footer from "../components/Footer";
import Support from "../components/ShippingDelivery";

const VirtualPage = () => {

  return (
    <Layout pageTitle="tryScrum | Shipping and Delivery Policy" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <StudiosHeaders title="Shipping and Delivery Policy" />
      <Support />
      <Footer />
    </Layout>
  );
};

export default VirtualPage;