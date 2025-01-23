import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import AboutHeader from "../components/Coming.js";
import Footer from "../components/Footer";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | About Us" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <AboutHeader title="tryScrum Coaching" /> 
        <section className="about-one ">
          <div className="container text-center">
            <div className="block-title text-center">
                  <div className="block-title__title">Coming Soon</div>
            </div>
          </div>
        </section>  
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
