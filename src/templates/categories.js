
import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import inNavTwo from "../components/header/NavIn";
import inFooter from "../components/footer/InFooter";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import blogImg from "../assets/images/socialbanners/blogs.png";
import "../assets/css/searchbox.css"
import NewCategoryBanner from "../components/NewCategoryBanner";
import banner from "../assets/images/blog-banner.jpg";
import { useLocation } from '@reach/router';
import placeholderImage from "../assets/images/placeholder-image.jpg";
export default function CatgoriesIndex(props) {
  const data = useStaticQuery(graphql`
    query {
      allWpCourseCategory {
        nodes {
          seo {
            metaDesc
            title
          }
          course_categories {
            coursesIncludes {
              customMetaUrl
              courseDetails {
                semiTitle
                subTitle
                url
                h2Title
                buttonLink
                buttonTag
                title
                logo {
                  mediaItemUrl
                }
                courseOrder
                courseDescription
              }
              courseHeader {
                banner {
                  mediaItemUrl
                }
                breadcrumb
                description
                heading
                mainPageUrl
              }
              courseBottom {
                qa
                summary
              }
            }
          }
        }
      }
    }
  `);

  const returned = data;
  const location = useLocation();

  // const myTitle = "Practical and actionable writings to help you succeed with Agile";
  // const myDesc = "Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility.";
  
  const bannerData = returned.allWpCourseCategory.nodes.filter((item) => {
    const courseHeader = item.course_categories.coursesIncludes.courseHeader;
    return  location.pathname === "/" + item.course_categories.coursesIncludes.courseDetails.url + "/" &&
    courseHeader &&
    courseHeader.mainPageUrl;
  }
  );



console.log('bannerData', bannerData);
const matchedSEO = bannerData[0]?.seo || {};
  const bannerheading = bannerData[0]?.course_categories.coursesIncludes.courseHeader.heading || "";
  const bannerBreadcrumb = bannerData[0]?.course_categories.coursesIncludes.courseHeader.breadcrumb || "";
  const bannerDescription = bannerData[0]?.course_categories.coursesIncludes.courseHeader.description || "";
  const bannerImage = bannerData[0]?.course_categories.coursesIncludes.courseHeader.banner.mediaItemUrl || "";
  const courseqa = bannerData[0]?.course_categories.coursesIncludes.courseBottom.qa || "";
  const courseSummary = bannerData[0]?.course_categories.coursesIncludes.courseBottom.summary || "";
  const coursecustommeta = bannerData[0]?.course_categories.coursesIncludes.customMetaUrl || "";
  console.log('coursecustommeta', coursecustommeta);


     // Default SEO values
 const defaultTitle = "Practical and actionable writings to help you succeed with Agiles";
 const defaultDesc = "Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility.";

 // Set dynamic SEO values based on the matched SEO data
 const myTitle = matchedSEO.title || defaultTitle;
 const myDesc = matchedSEO.metaDesc || defaultDesc;
 console.log('matchedSEO', matchedSEO);

  // Group nodes by URL
  const groupedNodes = returned.allWpCourseCategory.nodes.reduce((acc, node) => {
const url = node.course_categories.coursesIncludes.courseDetails.url;
console.log('course_categories',node.course_categories);

    if (!acc[url]) {
      acc[url] = [];
    }
    acc[url].push(node);
    return acc;
  }, {});
  // console.log("location-->", groupedNodes, Object.keys(groupedNodes))
  const SelectedNavTwo = location.pathname.startsWith('/in/') ? inNavTwo : NavTwo;
  const SelectedFooter = location.pathname.startsWith('/in/') ? inFooter : Footer;
  // useEffect(() => {
  //   const head = document.head;
  //   const customMetaUrl = coursecustommeta;
  //   console.log('customMetaUrl', customMetaUrl);
  //   if (customMetaUrl) {
  //     // Split the metaURL string into individual tags by using a regular expression
  //     const linkTags = customMetaUrl.match(/<link[^>]*>/g);
  //     if (linkTags) {
  //       linkTags.forEach((tag) => {
  //         const parser = new DOMParser();
  //         const parsedTag = parser.parseFromString(tag, 'text/html').head.firstChild;
  
  //         if (parsedTag) {
  //           //parsedTag.setAttribute('data-custom-meta', 'true'); // Mark for cleanup
  //           head.appendChild(parsedTag);
  //         }
  //       });
  //     }
  //   }
  
  //   return () => {
  //     // Cleanup by removing elements marked for deletion
  //     document.querySelectorAll('[data-custom-meta="true"]').forEach((el) => el.remove());
  //   };
  // }, [coursecustommeta]);
  
  return (
    <>
      {/* <Layout pageTitle="Practical and actionable writings to help you succeed with Agile"  metaDesc="Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility." pageName="blogs">  */}
      <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={bannerImage} pageloc="individual">
        <SelectedNavTwo />
        <div className="cate-scroll">
          <NewCategoryBanner
            heading={bannerheading}
            breadcrumb={bannerBreadcrumb}
            description={bannerDescription}
            image={bannerImage}
          />
          <br />
          <ol style={{ listStyle: `none` }} className="">
            <section className="category_section">
              <div className="wrapper_div">
                {/* <div className="row"> */}
                {Object.keys(groupedNodes).map((url, index) => {
                  const posts = groupedNodes[url];
                  const filteredPosts = posts.filter((item) => {
    const courseHeader = item.course_categories.coursesIncludes.courseHeader;
    return courseHeader && courseHeader.mainPageUrl; // Check if mainPageUrl exists and is truthy
  });
    // Sort posts by courseOrder
    const sortedPosts = posts
                    .sort((a, b) => {
                      const orderA = a.course_categories.coursesIncludes.courseDetails.courseOrder || 0;
                      const orderB = b.course_categories.coursesIncludes.courseDetails.courseOrder || 0;
                      return orderA - orderB;
                    });
  const headings = filteredPosts.map((item) => {
    const courseDetails = item.course_categories.coursesIncludes.courseDetails;
    return {
      firstHeading: courseDetails.h2Title || "",
      secondHeading: courseDetails.subTitle || "",
      thirdHeading: courseDetails.semiTitle || ""
    };
  });
                  const urlString = url.split("/");
                  {/* const headings = posts.map((item) => {          
                    const firstHeading = item?.course_categories?.coursesIncludes?.courseDetails?.h2Title || "";
                    const secondHeading = item?.course_categories?.coursesIncludes?.courseDetails?.subTitle || "";
                    const thirdHeading = item?.course_categories?.coursesIncludes?.courseDetails?.semiTitle || "";
                    return {firstHeading, secondHeading, thirdHeading}
                  }); */}

                  const firstHeading = headings[0]?.firstHeading;
                  const secondHeading = headings[0]?.secondHeading;
                  const thirdHeading = headings[0]?.thirdHeading;

                  let condition = "/" + url + "/";

                  return (
                             
               ((location.pathname === "/" + url + "/") ) && (
                      
                    <div key={index}>

                      <div style={{color: "#000",fontFamily:"verdana"}} dangerouslySetInnerHTML={{ __html: firstHeading }} />
                      <div style={{color: "#000",fontFamily:"verdana"}} dangerouslySetInnerHTML={{ __html: secondHeading }} />
                      <div style={{color: "#000",fontFamily:"verdana"}} dangerouslySetInnerHTML={{ __html: thirdHeading }} />
                      {sortedPosts.map((post, postIndex) => {


                        const media = post.course_categories.coursesIncludes.courseDetails.logo !== null
                          ? post.course_categories.coursesIncludes.courseDetails.logo.mediaItemUrl
                          : placeholderImage;
                        const title = post.course_categories.coursesIncludes.courseDetails.title;
                        {/* const content = post.course_categories.coursesIncludes.courseDetails.singlecourse.content; */}
                        const courseDescription = post.course_categories.coursesIncludes.courseDetails.courseDescription;
                        const subTitle = post.course_categories.coursesIncludes.courseDetails.subTitle;
                        const buttonTag = post.course_categories.coursesIncludes.courseDetails.buttonTag;
                        const buttonLink = post.course_categories.coursesIncludes.courseDetails.buttonLink;

                        return (
                          <div key={postIndex} className="row cardHover" style={{ marginBottom: "30px" }}>
                            <div className="col-lg-2" style={{ marginTop: "5px" }}>
                              <div style={{ width: "200px" }}>
                                <Link to={(location.origin + "/" + url)}>
                                  <img src={media} alt="Blogs Images" className="img-fluid" />
                                </Link>
                              </div>
                            </div>
                            <div className="col-lg-9 contentDiv">
                              <div>
                                <Link to={(location.origin + "/" + url)}>
                                  <p className="blog-one__title contentHeading" style={{fontFamily:"verdana"}}>
                                    <div dangerouslySetInnerHTML={{ __html: title }} />
                                  </p>
                                </Link>
                                <div>
                                  <p style={{ fontSize: "16px", marginBottom: "40px", textAlign: "left", color:"#000", fontFamily:"verdana" }}>
                                    <div dangerouslySetInnerHTML={{ __html: courseDescription }} />
                                  </p>
                                </div>
                                <div className="new_readmore">
                                  {/* <p className="blog-one__link content_Scrum" dangerouslySetInnerHTML={{ __html: subTitle }}> */}
                                  <p className="blog-one__link content_Scrum" dangerouslySetInnerHTML={{ __html: buttonTag }}>
                                    {/* 16-07-2021 */}
                                  </p>
                                  <div style={{ marginLeft: "40px" }}>
                                    {/* <Link to={url} itemProp="url"> */}
                                    <Link to={(location.origin + "/" + buttonLink)} itemProp="url">
                                      <button className="blog-one__link readbutton">
                                        Read
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                             
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                    </div>)
                  
                    
            
                  );
                  
                })}
              </div>
            </section>
          </ol>
        </div>
     
     
 
<div className="wrapper_div">
  <div dangerouslySetInnerHTML={{ __html: courseSummary }} style={{color:"#000"}} className="banner_description" />
  {location.pathname.startsWith('/in/') ? (
    <>
      <div 
        style={{ color: "#000", fontWeight: "700", fontSize: "30px", margin: "10px 0" }}
      >
        Frequently Asked Questions
      </div>
      <div 
        dangerouslySetInnerHTML={{ __html: courseqa }} 
        style={{ color: "#000" }} 
        className="banner_description" 
      />
    </>
  ) : null}
</div>
        <SelectedFooter />
      </Layout>
    </>
  );
}