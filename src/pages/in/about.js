import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import AboutHeader from "../../components/AboutHeader";
import Footer from "../../components/footer/InFooter";
import About from "../../components/AboutOne";
import CountdownKipsoAbout from "../../components/CountdownKipsoAbout";
import AboutNew from "../../components/AboutNew";
import AboutHeaderNew from "../../components/AboutHeaderNew";

const GalleryPage = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/about/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/about/";

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
    <Layout pageTitle="tryScrum | About Us" pageName="aboutus">
      <NavTwo />

      {/* <AboutHeader title="about" /> */}
      {/* <About /> */}

      <AboutHeaderNew title="about" />
      <AboutNew /> 

      <div style={{marginTop: "150px"}} />

      <CountdownKipsoAbout /> 

      <Footer />
    </Layout>
  );
};

export default GalleryPage;
