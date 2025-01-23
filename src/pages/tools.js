import React,{useEffect} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import ToolsHeaders from "../components/ToolsHeader";
import Footer from "../components/Footer";
import ToolsContent from "../components/ToolsContent";
import CourseTools from "../components/CourseTools";

const Tools = () => {
  return (
    <Layout pageTitle="tryScrum | tools" pageName="tools">
      <NavTwo />
      <ToolsHeaders title="tryScrum Toolkit" />
      <ToolsContent /> 
      <CourseTools />
      <Footer />
    </Layout>
  );
};
export default Tools;