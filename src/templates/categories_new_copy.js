// // import React from 'react'
// // import { Link, graphql,useStaticQuery } from "gatsby";

// // export default function Categories() {

// //   const data = useStaticQuery(graphql`
// //     query {
// //       allWpCourseCategory {
// //         nodes {
// //           course_categories {
// //             coursesIncludes {
// //               courseDetails {
// //                 subTitle
// //                 url
// //                 singlecourse {
// //                   content
// //                   title
// //                   logo {
// //                     mediaItemUrl
// //                   }
// //                 }
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }

// //   `)

// //   console.log("data-->", data)

// //   return (
// //     <div>
// //       test
// //     </div>
// //   )
// // }



// import React, { useState } from "react";
// import { Link, graphql, useStaticQuery } from "gatsby";
// import Layout from "../components/Layout";
// import NavTwo from "../components/NavTwo";
// import Footer from "../components/Footer";
// // import BlogArchive from "../components/BlogArchiveHeader";
// import blogImg from "../assets/images/socialbanners/blogs.png";
// import "../assets/css/searchbox.css"
// import Tagdata from "../components/Tagdata";
// import CategoryBanner from "../components/CategoryBanner";
// import banner from "../assets/images/blog-banner.jpg";
// import { useLocation } from '@reach/router';
// import placeholderImage from "../assets/images/placeholder-image.jpg";

// export default function CatgoriesIndex(props) {
//   const data = useStaticQuery(graphql`
//     query {
//       allWpCourseCategory {
//         nodes {
//           course_categories {
//             coursesIncludes {
//               courseDetails {
//                 subTitle
//                 semiTitle
//                 url
//                 singlecourse {
//                   content
//                   title
//                   logo {
//                     mediaItemUrl
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//   `)

//   const returned = data
//   const location = useLocation();


//   const myTitle = "Practical and actionable writings to help you succeed with Agile"
//   const myDesc = "Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility."

//   return (
//     <>

//       {/* <Layout pageTitle="Practical and actionable writings to help you succeed with Agile"  metaDesc="Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility." pageName="blogs">  */}

//       <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={blogImg} pageloc="individual">

//         <NavTwo />
//         <div className="blog-scroll">
//           <CategoryBanner title_1="Blogs" title="Agile" image={banner} uri={"blogs"} padding={8} />
//           {/* <BlogArchive title="The tryScrum Blogs" icon={<i class="fa fa-search" aria-hidden="true"></i>} search={() => showhideValue(s => !s)} /> */}

//           {/* <Tagdata /> */}
//           <br />
//           <ol style={{ listStyle: `none` }} className="">
//             <section className="about-prokanban ">
//               <div className="container" >
//                 <div className="row">
//                   {/* <ol style={{ listStyle: `none` }}> */}

//                   {returned.allWpCourseCategory.nodes.map((post, index) => {


//                     const url = post.course_categories.coursesIncludes.courseDetails.url;
//                     const media = post.course_categories.coursesIncludes.courseDetails.singlecourse.logo !== null ? post.course_categories.coursesIncludes.courseDetails.singlecourse.logo.mediaItemUrl : placeholderImage;
//                     const title = post.course_categories.coursesIncludes.courseDetails.singlecourse.title;
//                     const content = post.course_categories.coursesIncludes.courseDetails.singlecourse.content;
//                     const subTitle = post.course_categories.coursesIncludes.courseDetails.subTitle;

//                     let condition = "/" + url + "/";

//                     {/* console.log("location-->", location.pathname, post.course_categories.coursesIncludes.courseDetails.url, index) */}
//                     {/* console.log("location-->", location.pathname, url, index, condition.includes(location.pathname), condition) */}

//                     // console.log("vgccc", .length);

//                     {/* (location.pathname === "/" + url + "/") && ( */}

//                     return (
//                       ((location.pathname === "/" + url + "/") || (condition.includes(location.pathname))) && (

//                         <div className="col-lg-4">
//                           <div className="blog-one__single row-eq-height">
//                             <div className="blog-one__image">
//                               <Link to={url}>
//                                 <img src={media} alt="Blogs Images" className="img-fluid" />
//                               </Link>
//                             </div>
//                             <div className="blog-one__content text-centerhome">

//                               <Link to={url}>
//                                 <h1 className="blog-one__title heading4">
//                                   <div dangerouslySetInnerHTML={{ __html: title }} />
//                                 </h1>
//                               </Link>
//                               <div>
//                                 <p className="blog-one__text newcontent" >
//                                   <div dangerouslySetInnerHTML={{ __html: content }} />
//                                 </p>

//                               </div>

//                               <div className="new_readmore">
//                                   <p className="blog-one__link content_Scrum" dangerouslySetInnerHTML={{ __html: subTitle }}>
//                                     {/* 16-07-2021 */}
//                                   </p>

//                                 <div>
//                                   <Link to={url} itemProp="url" >
//                                     <p className="blog-one__link readbutton" >
//                                       Read
//                                     </p>
//                                   </Link>
//                                 </div>
//                               </div>

//                             </div>
//                           </div>
//                         </div>

//                       )
//                     )
//                   })}


//                 </div>
//               </div>
//             </section>
//           </ol>
//         </div>
//         <Footer />
//       </Layout>
//     </>
//   )

// }
































// import React from 'react'
// import { Link, graphql,useStaticQuery } from "gatsby";

// export default function Categories() {

//   const data = useStaticQuery(graphql`
//     query {
//       allWpCourseCategory {
//         nodes {
//           course_categories {
//             coursesIncludes {
//               courseDetails {
//                 subTitle
//                 url
//                 singlecourse {
//                   content
//                   title
//                   logo {
//                     mediaItemUrl
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//   `)

//   console.log("data-->", data)

//   return (
//     <div>
//       test
//     </div>
//   )
// }























// previous code


// import React, { useState } from "react";
// import { Link, graphql, useStaticQuery } from "gatsby";
// import Layout from "../components/Layout";
// import NavTwo from "../components/NavTwo";
// import Footer from "../components/Footer";
// // import BlogArchive from "../components/BlogArchiveHeader";
// import blogImg from "../assets/images/socialbanners/blogs.png";
// import "../assets/css/searchbox.css"
// import Tagdata from "../components/Tagdata";
// // import CategoryBanner from "../components/CategoryBanner";
// import NewCategoryBanner from "../components/NewCategoryBanner";
// import banner from "../assets/images/blog-banner.jpg";
// import { useLocation } from '@reach/router';
// import placeholderImage from "../assets/images/placeholder-image.jpg";

// export default function CatgoriesIndex(props) {
//   const data = useStaticQuery(graphql`
//     query {
//       allWpCourseCategory {
//         nodes {
//           course_categories {
//             coursesIncludes {
//               courseDetails {
//                 subTitle
//                 semiTitle
//                 url
//                 singlecourse {
//                   content
//                   title
//                   logo {
//                     mediaItemUrl
//                   }
//                 }
//               }
//               courseHeader {
//                 heading
//                 breadcrumb
//                 description
//                 banner {
//                     mediaItemUrl
//                   }
                
//               }

//             }
//           }
//         }
//       }
//     }
  
//   `)

//   const returned = data
//   const location = useLocation();

//   const myTitle = "Practical and actionable writings to help you succeed with Agile"
//   const myDesc = "Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility."

//   const bannerData = returned.allWpCourseCategory.nodes.filter((item) => location.pathname === "/" + item.course_categories.coursesIncludes.courseDetails.url + "/")

//   // const bannerheading = returned.allWpCourseCategory.nodes[0].course_categories.coursesIncludes.courseHeader.heading;
//   const bannerheading = bannerData[0].course_categories.coursesIncludes.courseHeader.heading;
//   const bannerBreadcrumb = bannerData[0].course_categories.coursesIncludes.courseHeader.breadcrumb;
//   const bannerDescription = bannerData[0].course_categories.coursesIncludes.courseHeader.description;
//   const bannerImage = bannerData[0].course_categories.coursesIncludes.courseHeader.banner.mediaItemUrl;

//   return (
//     <>

//       {/* <Layout pageTitle="Practical and actionable writings to help you succeed with Agile"  metaDesc="Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility." pageName="blogs">  */}

//       <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={blogImg} pageloc="individual">/

//         <NavTwo />
//         <div className="blog-scroll">
//           {/* <CategoryBanner title_1="Blogs" title="Agile" image={banner} uri={"blogs"} padding={8} /> */}

//           <NewCategoryBanner heading={bannerheading} breadcrumb={bannerBreadcrumb} description={bannerDescription} image={bannerImage} />

//           {/* <BlogArchive title="The tryScrum Blogs" icon={<i class="fa fa-search" aria-hidden="true"></i>} search={() => showhideValue(s => !s)} /> */}

//           {/* <Tagdata /> */}
//           <br />
//           <ol style={{ listStyle: `none` }} className="">
//             <section className="about-prokanban ">
//               <div className="container" >
//                 {/* <div className="row"> */}

//                   {returned.allWpCourseCategory.nodes.map((post, index) => {


//                     const url = post.course_categories.coursesIncludes.courseDetails.url;
//                     const media = post.course_categories.coursesIncludes.courseDetails.singlecourse.logo !== null ? post.course_categories.coursesIncludes.courseDetails.singlecourse.logo.mediaItemUrl : placeholderImage;
//                     const title = post.course_categories.coursesIncludes.courseDetails.singlecourse.title;
//                     const content = post.course_categories.coursesIncludes.courseDetails.singlecourse.content;
//                     const subTitle = post.course_categories.coursesIncludes.courseDetails.subTitle;

//                     const urlString = url.split("/")

//                     const firstHeading = urlString.length > 1 ? urlString[1] : "";
//                     const secondHeading = urlString.length > 2 ? urlString[2] : "";
//                     const thirdHeading = urlString.length > 3 ? urlString[3] : "";


//                     let condition = "/" + url + "/";

//                     {/* console.log("location-->", location.pathname, post.course_categories.coursesIncludes.courseDetails.url, index) */ }
//                     console.log("location-->", location.pathname, url, urlString, firstHeading, secondHeading, thirdHeading);


//                     {/* (location.pathname === "/" + url + "/") && ( */ }

//                     return (
//                       ((location.pathname === "/" + url + "/") || (condition.includes(location.pathname))) && (

//                         <div className="row" style={{marginBottom: "30px"}}>

//                         { (<div style={{color: "#f05457"}}>
//                           <h2 style={{fontWeight: 600}}>{firstHeading}</h2>
//                           <h3 style={{fontWeight: 600}}>{secondHeading}</h3>
//                           <h4 style={{fontWeight: 600}}>{thirdHeading}</h4>
//                         </div>)}

//                           <div className="col-lg-2">

//                             <div style={{width: "200px"}}>
//                               <Link to={url}>
//                                 <img src={media} alt="Blogs Images" className="img-fluid" />
//                               </Link>
//                             </div>

//                           </div>

//                           <div className="col-lg-9 contentDiv">

//                             <div>

//                               <Link to={url}>
//                                 <h1 className="blog-one__title contentHeading">
//                                   <div dangerouslySetInnerHTML={{ __html: title }} />
//                                 </h1>
//                               </Link>
//                               <div>
//                                 <p className="blog-one__text newcontent" style={{fontSize: "16px", marginBottom: "40px", textAlign: "left"}}>
//                                   <div dangerouslySetInnerHTML={{ __html: content }} />
//                                 </p>

//                               </div>

//                               <div className="new_readmore">
//                                 <p className="blog-one__link content_Scrum" dangerouslySetInnerHTML={{ __html: subTitle }}>
//                                   {/* 16-07-2021 */}
//                                 </p>

//                                 <div style={{marginLeft: "40px"}}>
//                                   <Link to={url} itemProp="url" >
//                                     <button className="blog-one__link readbutton" >
//                                       Read
//                                     </button>
//                                   </Link>
//                                 </div>
//                               </div>

//                             </div>
//                           </div>
//                         </div>

//                       )
//                     )
//                   })}


//                 {/* </div> */}
//               </div>
//             </section>
//           </ol>
//         </div>
//         <Footer />
//       </Layout>
//     </>
//   )

// }









// latest code

import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
// import BlogArchive from "../components/BlogArchiveHeader";
import blogImg from "../assets/images/socialbanners/blogs.png";
import "../assets/css/searchbox.css"
import Tagdata from "../components/Tagdata";
// import CategoryBanner from "../components/CategoryBanner";
import NewCategoryBanner from "../components/NewCategoryBanner";
import banner from "../assets/images/blog-banner.jpg";
import { useLocation } from '@reach/router';
import placeholderImage from "../assets/images/placeholder-image.jpg";

export default function CatgoriesIndex(props) {
  const data = useStaticQuery(graphql`
    query {
      allWpCourseCategory {
        nodes {
          course_categories {
            coursesIncludes {
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
                courseDescription
              }
              courseHeader {
                banner {
                  mediaItemUrl
                }
                breadcrumb
                description
                heading
              }
            }
          }
        }
      }
    }
  `);

  const returned = data;
  const location = useLocation();

  const myTitle = "Practical and actionable writings to help you succeed with Agile";
  const myDesc = "Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility.";

  const bannerData = returned.allWpCourseCategory.nodes.filter((item) =>
    location.pathname === "/" + item.course_categories.coursesIncludes.courseDetails.url + "/"
  );

  const bannerheading = bannerData[0]?.course_categories.coursesIncludes.courseHeader.heading || "";
  const bannerBreadcrumb = bannerData[0]?.course_categories.coursesIncludes.courseHeader.breadcrumb || "";
  const bannerDescription = bannerData[0]?.course_categories.coursesIncludes.courseHeader.description || "";
  const bannerImage = bannerData[0]?.course_categories.coursesIncludes.courseHeader.banner.mediaItemUrl || "";

  // Group nodes by URL
  const groupedNodes = returned.allWpCourseCategory.nodes.reduce((acc, node) => {
    const url = node.course_categories.coursesIncludes.courseDetails.url;
    if (!acc[url]) {
      acc[url] = [];
    }
    acc[url].push(node);
    return acc;
  }, {});

  // console.log("location-->", groupedNodes, Object.keys(groupedNodes))

  return (
    <>
      {/* <Layout pageTitle="Practical and actionable writings to help you succeed with Agile"  metaDesc="Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility." pageName="blogs">  */}
      <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={blogImg} pageloc="individual">
        <NavTwo />
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

                  const urlString = url.split("/");
                  {/* console.log("location-->1", posts, url, urlString, index); */}

                  {/* const firstHeading = urlString.length > 1 ? urlString[1] : "";
                  const secondHeading = urlString.length > 2 ? urlString[2] : "";
                  const thirdHeading = urlString.length > 3 ? urlString[3] : ""; */}

                  const headings = posts.map((item) => {
                    const firstHeading = item?.course_categories?.coursesIncludes?.courseDetails?.h2Title || "";
                    const secondHeading = item?.course_categories?.coursesIncludes?.courseDetails?.subTitle || "";
                    const thirdHeading = item?.course_categories?.coursesIncludes?.courseDetails?.semiTitle || "";
                    return {firstHeading, secondHeading, thirdHeading}
                  });

                  const firstHeading = headings[0]?.firstHeading;
                  const secondHeading = headings[0]?.secondHeading;
                  const thirdHeading = headings[0]?.thirdHeading;

                  let condition = "/" + url + "/";

                  {/* (location.pathname === "/" + url + "/") && ( */ }
                  {/* || (condition.includes(location.pathname)) */}
                  return (
                    ((location.pathname === "/" + url + "/") ) && (
                    <div key={index}>
                      {/* <div style={{ color: "#f05457", marginBottom: "20px", display: "flex", padding: "17px", backgroundColor: "#dddd", borderRadius: "5px", width: "fit-content"}}> */}
                      {/* <div style={{ color: "white", marginBottom: "20px", display: "flex", padding: "0px 10px", backgroundColor: "#f05457", borderRadius: "5px", width: "fit-content", marginLeft: "-15px"}}> // commented */}
                      {/* {firstHeading === "" ? "" : secondHeading === "" ? <h2 style={{ fontWeight: "normal" }}>{firstHeading[0].toUpperCase() + firstHeading.slice(1)}</h2> : thirdHeading === "" ? <h2 style={{ fontWeight: "normal" }}>{firstHeading[0].toUpperCase() + firstHeading.slice(1)} → {secondHeading[0].toUpperCase() + secondHeading.slice(1)}</h2> : <h2 style={{ fontWeight: "normal" }}>{firstHeading[0].toUpperCase() + firstHeading.slice(1)} → {secondHeading[0].toUpperCase() + secondHeading.slice(1)} → {thirdHeading[0].toUpperCase() + thirdHeading.slice(1)}</h2>} */}

                      {/* <div style={{marginTop: "5px"}} dangerouslySetInnerHTML={{ __html: firstHeading }} /> // commented
                      {firstHeading !== "" && <p style={{fontSize: "30px", marginTop: "8px", marginLeft: "5px"}}> → </p>} // commented
                      <div style={{marginTop: "8px", marginLeft: "5px"}} dangerouslySetInnerHTML={{ __html: secondHeading }} /> // commented
                      {secondHeading !== "" && <p style={{fontSize: "30px", marginTop: "8px", marginLeft: "5px"}}> → </p>} // commented
                      <div style={{marginTop: "11px", marginLeft: "5px"}} dangerouslySetInnerHTML={{ __html: thirdHeading }} /> // commented */}

                        {/* <h2 style={{ fontWeight: "normal" }}>{firstHeading} → {secondHeading} → {thirdHeading}</h2> */}
                        {/* <h3 style={{ fontWeight: 600 }}>{secondHeading}</h3>
                        <h4 style={{ fontWeight: 600 }}>{thirdHeading}</h4> */}
                      {/* </div> // commented */}

                      <div style={{color: "#000", fontWeight:"700"}} dangerouslySetInnerHTML={{ __html: firstHeading }} />
                      <div style={{color: "#000", fontWeight:"700"}} dangerouslySetInnerHTML={{ __html: secondHeading }} />
                      <div style={{color: "#000", fontWeight:"700"}} dangerouslySetInnerHTML={{ __html: thirdHeading }} />

                      {posts.map((post, postIndex) => {
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
                                  <h1 className="blog-one__title contentHeading">
                                    <div dangerouslySetInnerHTML={{ __html: title }} />
                                  </h1>
                                </Link>
                                <div>
                                  <p className="blog-one__text newcontent" style={{ fontSize: "16px", marginBottom: "40px", textAlign: "left", color:"#000" }}>
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
                                    <Link to={(location.origin + "/" + url)} itemProp="url">
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
        <Footer />
      </Layout>
    </>
  );
}