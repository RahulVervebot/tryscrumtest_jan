import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo"
import Footer from "../components/Footer"
import coursesImg from "../assets/images/socialbanners/coaching-banner.jpg"
const BlogIndex = ({ data }) => {
  const courses = data.allWpPost.nodes || []
  const allCourses = data.allWpPost.nodes
  const posts = data.allWpPost.nodes || []
  const allPosts = data.allWpPost.nodes

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value

    const filteredData = posts.filter(post => {
      return post.title.toLowerCase().includes(query.toLowerCase())
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const returned = hasSearchResults ? filteredData : allPosts

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
        <Bio />
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

        <section className="course-one course-page">
          <div className="container">
            <div className="row">
              {returned.map(post => {
                const title = post.title
                const uri = post.uri
                const media = post.featuredImage.node.mediaItemUrl
                console.log(media)

                return (
                  <div className="col-lg-4">
                    <div className="course-one__single">
                      <div className="course-one__image">
                        <img
                          src={media}
                          alt=""
                          style={{ width: 350, height: 220 }}
                        />

                        <i className="far fa-heart"></i>
                      </div>
                      <div className="course-one__content">
                        <div className="course-one__admin"></div>

                        <Link to={uri}>
                          <h2 className="course-one__title">{post.title}</h2>
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
                        <div className="course-one__meta"></div>

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
        </section>
        <Footer />
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressCourse3 {
    allWpPost {
      nodes {
        uri
        title
        excerpt
        id
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
