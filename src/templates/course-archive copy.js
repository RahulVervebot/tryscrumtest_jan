import React, { useReact, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import Footer from "../components/Footer"
import coursesImg from "../assets/images/socialbanners/coaching-banner.jpg"
import CourseArchive from "../components/CourseHeader"
import CoursePage from "../components/CoursePage"
const BlogIndex = ({ data }) => {


  console.log("data", data)
  const courses = data.allWpPost.nodes || []

  const allCourses = data.allWpPost.nodes

  const posts = data.allWpPost.nodes || []

  // const { data } = props
  const allPosts = data.allWpPost.nodes

  // courses.map(value =>{
  //   const arr = value.uri.filter(e => e !== '/courses');
  //   console.log(arr);
  // })

  // const arr = courses.uri.filter(e => e !== '/courses');
  // console.log(arr);

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

  // console.log(returned)
  // add backslash before write uri
  // const indexuri = returned.findIndex(x => x.title ==="Bundle Courses");
  // console.log(indexuri)
  // const removeddata = returned.splice(indexuri,1)
  // console.log(removeddata)

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
        <CoursePage/>
        {/* <section className="course-one course-page">
          <div className="container">
            <div className="row" style={{height:"100%"}}>
              {returned.map(post => {
                const title = post.title
                const uri = post.uri
                const media = post.featuredImage.node.mediaItemUrl
                console.log("post", post)

                return (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-xs-12" >
                    <div className="m-2 border h-100">
                      <div className="course-one__image">
                        <Link to={uri}>
                          <img src={media} alt="Course Image" width="100%"/>
                        </Link>
                        <i className="far fa-heart"></i>
                      </div>

                      <div className="position-relative p-4">
                        <Link to={uri}>
                          <h1 className="course-one__title py-4">{post.title}</h1>
                        </Link>

                        <div className="course-one__stars">
                          <span className="course-one__stars-wrap">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </span>
                          <span className="course-one__count">
                            <a
                              href={post.acfcoursePage.options.trustPilotRating}
                              className="course-one__category"
                              target="__blank"
                            >
                              TrustPilot Rating
                            </a>
                          </span>
                        </div>
                        <a href={uri}>
                          <p className="course-one__link_course">
                            Read About Course
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section> */}

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
