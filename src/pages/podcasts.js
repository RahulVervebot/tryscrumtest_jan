import React, {useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PodcastHeader from "../components/PodcastHeader";
import Footer from "../components/Footer";
import PodcastContent from "../components/PodcastContent";

const Podcasts = () => {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/podcasts/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/podcasts/";

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
    <Layout pageTitle="tryScrum | Podcast" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <PodcastHeader title="Podcast" />
      <PodcastContent />
      <Footer />
    </Layout>
  );
};

export default Podcasts;
