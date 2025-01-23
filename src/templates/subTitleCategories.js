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

//                     {/* console.log("location-->", location.pathname, post.course_categories.coursesIncludes.courseDetails.url, post.course_categories.coursesIncludes.courseDetails.subTitle, index, subTitle);
//                     console.log("newLoc-->". subTitle); */}

//                     // console.log("vgccc", .length);

//                     return (

//                       (location.pathname === "/" + url + "/" + subTitle + "/") && (
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