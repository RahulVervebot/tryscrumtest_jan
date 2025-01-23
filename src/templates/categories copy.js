// import React, { useState } from "react";
// import { Link, graphql,useStaticQuery } from "gatsby";
// import Layout from "../components/Layout";
// import NavTwo from "../components/NavTwo";
// import Footer from "../components/Footer";
// // import BlogArchive from "../components/BlogArchiveHeader";
// import blogImg from "../assets/images/socialbanners/blogs.png";
// import "../assets/css/searchbox.css"
// import Tagdata from "../components/Tagdata";
// import PageBanner from "../components/PageBanner";
// import banner from "../assets/images/blog-banner.jpg";
// import { useLocation } from '@reach/router';

// export default function CatgoriesIndex(props) {
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
//           <PageBanner title_1="Blogs" title="The tryScrum blogs" image={banner} uri={"blogs"} padding={8} icon={<i class="fa fa-search" aria-hidden="true"></i>} search={() => showhideValue(s => !s)}/>
//           {/* <BlogArchive title="The tryScrum Blogs" icon={<i class="fa fa-search" aria-hidden="true"></i>} search={() => showhideValue(s => !s)} /> */}
//           <div className={showhide ? "drawer2" : "drawer"} >
//             <div id="search" class="searchbox">
//               <div class="containers text-center">

//                 <h3>Search the Blog</h3>

//                 <div class="content-narrow">
//                   <div className='input-box'>
//                     <input
//                       value={name}
//                       onChange={filtered}
//                       placeholder="e.g. scrum"
//                       title="Search"
//                       type="search"
//                     />
//                     <div className='searchbutton'>
//                       <i class="fa fa-search" aria-hidden="true"></i>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//           {/* <Tagdata /> */}
//           <br />
//           <ol style={{ listStyle: `none` }} className="">
//             <section className="about-prokanban ">
//               <div className="container" >
//                 <div className="row">
//                   {/* <ol style={{ listStyle: `none` }}> */}
//                   {foundUsers && foundUsers.length > 0 ? (
//                     <>
//                       {foundUsers.map((post) => {

//                         const title = post.title;
//                         const uri = post.uri;
//                         const media = post.featuredImage.node.mediaItemUrl;

//                         // console.log("vgccc", .length);

//                         return (
//                           <div className="col-lg-4 ">
//                             <div className="blog-one__single row-eq-height">

//                               <div className="blog-one__image">
//                                 <Link to={uri}>
//                                   <img src={media} alt="Blogs Images" className="img-fluid" />
//                                 </Link>
//                               </div>

//                               <div className="blog-one__content text-centerhome">


//                                 <Link to={uri}>
//                                   <h1 className="blog-one__title heading4">
//                                     <div dangerouslySetInnerHTML={{ __html: title }} />
//                                   </h1>
//                                 </Link>
//                                 <div style={{padding:"5px"}}></div>

//                                 <p className="blog-one__text newcontent" >
//                                   <div dangerouslySetInnerHTML={{ __html: post.excerpt }} style={{fontWeight:"500"}} />
//                                 </p>

//                                 <div style={{padding:"10px"}}></div>
//                                 <div className="row readmore">

//                                   <div className="col-lg-4">

//                                     <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: post.date }} >
//                                       {/* 16-07-2021 */}
//                                     </p>

//                                   </div>

//                                   <div className="col-lg-4">
//                                   </div>

//                                   <div className="col-lg-4">
//                                     <Link to={uri} itemProp="url" >
//                                       <p className="blog-one__link readbutton" >
//                                         Read
//                                       </p>
//                                     </Link>
//                                   </div>
//                                 </div>

//                               </div>
//                             </div>
//                           </div>

//                         )
//                       })}
//                     </>

//                   ) : (
//                     <>
//                       {returned.map((post) => {

//                         const title = post.title;
//                         const uri = post.uri;
//                         const media = post.featuredImage.node.mediaItemUrl;

//                         // console.log("vgccc", .length);

//                         return (
//                           <div className="col-lg-4">
//                             <div className="blog-one__single row-eq-height">
//                               <div className="blog-one__image">
//                                 <Link to={uri}>
//                                   <img src={media} alt="Blogs Images" className="img-fluid" />
//                                 </Link>
//                               </div>
//                               <div className="blog-one__content text-centerhome">

//                                 <Link to={uri}>
//                                   <h1 className="blog-one__title heading4">
//                                     <div dangerouslySetInnerHTML={{ __html: title }} />
//                                   </h1>
//                                 </Link>

//                                 <p className="blog-one__text newcontent" >
//                                   <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
//                                 </p>
//                                 <div className="row readmore">

//                                   <div className="col-lg-4">

//                                     <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: post.date }}>
//                                       {/* 16-07-2021 */}
//                                     </p>

//                                   </div>

//                                   <div className="col-lg-4">
//                                   </div>

//                                   <div className="col-lg-4">
//                                     <Link to={uri} itemProp="url" >
//                                       <p className="blog-one__link readbutton" >
//                                         Read
//                                       </p>
//                                     </Link>
//                                   </div>
//                                 </div>

//                               </div>
//                             </div>
//                           </div>

//                         )
//                       })}
//                     </>
//                   )}

//                 </div>
//               </div>
//             </section>
//           </ol>
// </div>
//           <Footer />
//       </Layout>
//     </>
//   )

// }