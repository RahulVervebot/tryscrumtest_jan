import React, { useReact, useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import NavTwo from "../components/NavTwo"
import Footer from "../components/Footer"
import Chat from "../components/Chat/index"
import homebanner from "../assets/images/try-Scrum-imgaes/homebanner.png"
import coursesImg from "../assets/images/course_logo/try-scrum-web-banner.jpg"
import CourseArchive from "../components/CourseHeader"
import CoursePages from "../components/CoursePage"
import CourseMobile from "../components/CoursepageMobile"
const BlogIndex = ({ data }) => {


  console.log("data", data)
  const courses = data.allWpPost.nodes || []

  const allCourses = data.allWpPost.nodes

  const posts = data.allWpPost.nodes || []

  const allPosts = data.allWpPost.nodes


  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })



  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const returned = allPosts



  console.log("filteredData",filteredData);
  console.log("hasSearchResults",hasSearchResults);
  console.log("returned",returned);
  console.log("allPosts",allPosts);

  const myTitle =
    "Explore our online and In-Person training to help you succeed with agile"
  const myDesc =
    "Explore our Agile courses to foster experiential learning through practical and actionable advice, tips andreal-world examples for building a capable and resilient Organisation."

  if (!courses.length) {
    return (
      <Layout
        pageTitle={myTitle}
        metaDesc={myDesc}
        pageName={coursesImg}
        pageloc="individual"
      >
        <CourseArchive title="tryScrum Courses" />
        <p>No Courses found. Add courses to your site and</p>
      </Layout>
    )
  }


  return (
    <>
      <Layout
        pageTitle={myTitle}
        metaDesc={myDesc}
        pageName={coursesImg}
        pageloc="individual"
      >
        <NavTwo />
        <CourseArchive title="tryScrum Courses" />
       <CoursePages/>
       <CourseMobile/>
        <Footer />
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressCourse {
    allWpPost{
      nodes {
        uri
        title
        excerpt
        id
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        acfcoursePage {
          options {
            certificate
            certificationBody
            curriculum
            feeStructure
            fieldGroupName
            guidlineUrl
            included
            instructions
            logisticsAndPrerequisites
            pduScrumAllianceSeus
            prerequisites
            trustPilotRating
            video
            whoCanAttend
            why
            duration
            
            thecourse
          }
          course1 {
            date1
            fieldGroupName
            location
            time1
            trainer
            url
          }
          course2 {
            date1
            fieldGroupName
            location
            time1
            trainer
            url
          }
          course3 {
            date1
            fieldGroupName
            location
            time1
            trainer
            url
          }
          course4 {
            date1
            fieldGroupName
            location
            time1
            trainer
            url
          }
        }
      }
    }
  }
`
