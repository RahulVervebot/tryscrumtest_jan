import React, {useEffect} from 'react'
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import QuizForm from '../../components/CourseQuiz'
import Footer from "../../components/footer/InFooter";

function CourseQuiz() {
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/coursequiz/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/coursequiz/";

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
    <div>
     <Layout pageTitle="tryScrum | Quiz" pageName="coursequiz">
      <NavTwo />
      <QuizForm/>
      <Footer/>
      </Layout>
    </div>
  )
}
export default CourseQuiz