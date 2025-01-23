import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useStaticQuery, graphql } from "gatsby";
import React   from 'react';
import { useLocation } from '@reach/router';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import CourseContact from './CourseContact';
import AdvancedEducation from '../assets/images/course_logo/Advanced_Education-01.png'
import FounddationImf from '../assets/images/course_logo/Foundations-01.png'
export default function CoursePage(props) {
  const params = {
    slidesPerView: 4,
    loop: true,
    speed: 3000,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        1024: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
};
  const ddata = useStaticQuery(graphql`

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

      allWpPost {
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
            choachingtitle {
              content
              heading
            }
            choachingtab1 {
              content
              heading
            }
            choachingtab2 {
              content
              heading
            }
            choachingtab3 {
              content
              heading
            }
            choachingtab4 {
              content
              heading
            }
          }
        }
      }
    }
  
  `)

  const returned = ddata
  const location = useLocation();
  console.log("Mypath", location.pathname);
  console.log(ddata.allWpCourseCategory, "course_Categories")

  return (
    <>
    <div className='deskopt_course'>
    <div className='course_page_main' style={{fontFamily:"verdana !important", border:"solid 1px #f3f3f3"}}>
    <h4 style={{fontFamily:"verdana !important", fontWeight:600, textAlign:"center", color:"#182340", marginTop:"2%", fontFamily:"verdana"}} className='block-title__title'>Agile Careers Pathway</h4>
    <div className="course-btn-new" style={{textAlign:"center", marginTop:"2%"}}>
<a href="/coursequiz/" class="course-header-btn" target="_blank">Take Quiz</a>
</div>
   <p style={{fontFamily:"verdana !important", fontWeight:600, textAlign:"center", color:"#182340", marginTop:"2%", fontFamily:"verdana"}}><b>FOUNDATIONS</b><img src={AdvancedEducation} style={{width:"30px"}}/>:  <a href='#scrum-master-tab'  className='pathway_course'>Scrum Master</a> | <a href='#product-owner-tab' className='pathway_course'> Product Owner</a> | <a href='#agile-leadership-tab' className='pathway_course'>Agile Leader</a> | <b>ADVANCED EDUCATION</b><img src={FounddationImf} style={{width:"30px"}}/>: <a href='#ad_scrum-master-tab'  className='pathway_course'>Scrum Master</a> | <a href='#ad_product-owner-tab' className='pathway_course'> Product Owner</a> | <a href='#ad_agile-leadership-tab' className='pathway_course'>Agile Leader</a></p>
 
      <div className='scrum-master-tab course_page_main' id="scrum-master-tab" style={{margin:"2%"}}>
      {ddata.allWpPost.nodes.map((tit) => (
           
        tit.uri == "/certified-scrum-master-csm/" && tit.acfcoursePage.choachingtitle.heading != "" ?
        <div className='header_title' style={{padding: "3%", background:"#F05457", borderRadius:"30px 30px 0 0"}}>
        <h1 style={{textAlign:"center", fontWeight:700, color:"#fff", fontFamily:"verdana"}}>{tit.acfcoursePage.choachingtitle.heading}</h1> 
        <p style={{textAlign:"center",  color:"#fff", fontFamily:"verdana"}}>{tit.acfcoursePage.choachingtitle.content}</p>
        <div className="course-btn-new" style={{textAlign:"center", marginTop:"2%", }}>
<a href="https://enterprise.tryscrum.com/scrum-master-career-navigator/" class="course-header-btn1" target='_blank'>Explore Scurm Master Career Navigator Program</a>
</div>
 </div>
        : <></>
        ))}
        <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3 foundation_section" style={{width:"100%"}}
    >


    {/* scrum master tab start */}

    <Tab eventKey="tab1" style={{width:"100%"}} title={<h2 class="foundation_head" style={{fontWeight:"800", fontSize:"30px", fontFamily:"verdana"}}>FOUNDATIONS</h2>} >
 <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3"
    >
          {ddata.allWpPost.nodes.map((tl) => (

            tl.uri == "/certified-scrum-master-csm/" && tl.acfcoursePage.choachingtab1.heading != "" ?
            <Tab eventKey="tab1" title={  <div
                          className="tab-courses-font" style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.heading,
                          }}
                      />}>
      <div
                          className="tab-courses-font" style={{fontFamily:"verdana"}}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.content,
                          }}
                        />
      <div style={{ padding: 30, display: 'block' }} id="ad_scrum-master-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have attended  PSM 1 Classroom training. It was well organized and training was very informative and was able gain good knowledge in scrum. I have cleared my PSM 1 exam in my 1st attempt. Thank you so much."</p>
<div class="wCard-quote__heading mb-3">❝Saravanan Ravi, TCS❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"   style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Fantastic training given by tryScrum...very insightful and thought provoking 2 days workshop...the trainer was able to suggest on what suits best for me if am planning to switch career as a scrum master...lot of take aways from the training...Thank you try scrum for facilitating"</p>
<div class="wCard-quote__heading mb-3">❝Vignesh, HCL❞</div></div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"It was a great class for a newcomer to Scrum. We had many opportunities to interact with others by doing various activities.A big thanks to our trainer. The examples that he put in front helped us understand the concepts more easily."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Arun Singh, PSM Candidate❞</div>
</div>
</div>
</div>   
 </Carousel.Item>
      </Carousel> 
    </div> 
                        </Tab>
      
       : <p></p>
            
      ))}
      {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-scrum-master-csm/" && tl.acfcoursePage.choachingtab2.heading != "" ?
          
           <Tab eventKey="tab2" title={  <div
                          className="tab-courses-font"  style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab2.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab2.content,
                         }}
                       />
   <div style={{ padding: 30, display: 'block' }} id="ad_scrum-master-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have attended  PSM 1 Classroom training. It was well organized and training was very informative and was able gain good knowledge in scrum. I have cleared my PSM 1 exam in my 1st attempt. Thank you so much."</p>
<div class="wCard-quote__heading mb-3">❝Saravanan Ravi, TCS❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Fantastic training given by tryScrum...very insightful and thought provoking 2 days workshop...the trainer was able to suggest on what suits best for me if am planning to switch career as a scrum master...lot of take aways from the training...Thank you try scrum for facilitating"</p>
<div class="wCard-quote__heading mb-3">❝Vignesh, HCL❞</div></div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"It was a great class for a newcomer to Scrum. We had many opportunities to interact with others by doing various activities.A big thanks to our trainer. The examples that he put in front helped us understand the concepts more easily."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Arun Singh, PSM Candidate❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div> 
                       </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-scrum-master-csm/" && tl.acfcoursePage.choachingtab3.heading != "" ?
          
           <Tab eventKey="tab3" title={  <div
                          className="tab-courses-font"  style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab3.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab3.content,
                         }}
                       />
                             <div style={{ padding: 30, display: 'block' }} id="ad_scrum-master-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have attended  PSM 1 Classroom training. It was well organized and training was very informative and was able gain good knowledge in scrum. I have cleared my PSM 1 exam in my 1st attempt. Thank you so much."</p>
<div class="wCard-quote__heading mb-3">❝Saravanan Ravi, TCS❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"   style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Fantastic training given by tryScrum...very insightful and thought provoking 2 days workshop...the trainer was able to suggest on what suits best for me if am planning to switch career as a scrum master...lot of take aways from the training...Thank you try scrum for facilitating"</p>
<div class="wCard-quote__heading mb-3">❝Vignesh, HCL❞</div></div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"It was a great class for a newcomer to Scrum. We had many opportunities to interact with others by doing various activities.A big thanks to our trainer. The examples that he put in front helped us understand the concepts more easily."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Arun Singh, PSM Candidate❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div> 
                       </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-scrum-master-csm/" && tl.acfcoursePage.choachingtab4.heading != "" ?
          
           <Tab eventKey="tab4" title={  <div
                          className="tab-courses-font"  style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab4.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab4.content,
                         }}
                       />
                     <div style={{ padding: 30, display: 'block' }} id="ad_scrum-master-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have attended  PSM 1 Classroom training. It was well organized and training was very informative and was able gain good knowledge in scrum. I have cleared my PSM 1 exam in my 1st attempt. Thank you so much."</p>
<div class="wCard-quote__heading mb-3">❝Saravanan Ravi, TCS❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"   style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Fantastic training given by tryScrum...very insightful and thought provoking 2 days workshop...the trainer was able to suggest on what suits best for me if am planning to switch career as a scrum master...lot of take aways from the training...Thank you try scrum for facilitating"</p>
<div class="wCard-quote__heading mb-3">❝Vignesh, HCL❞</div></div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"It was a great class for a newcomer to Scrum. We had many opportunities to interact with others by doing various activities.A big thanks to our trainer. The examples that he put in front helped us understand the concepts more easily."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Arun Singh, PSM Candidate❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div> 
                       </Tab>
     
      : <p></p>
           
     ))}
    </Tabs>

    </Tab>
    <Tab eventKey="tab2" style={{width:"100%"}}  title={<h2 class="foundation_head" style={{fontWeight:"800", fontSize:"30px", fontFamily:"verdana"}}>ADVANCED</h2>} >
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3"
    >
          {ddata.allWpPost.nodes.map((tl) => (

            tl.uri == "/professional-scrum-master-ii/" && tl.acfcoursePage.choachingtab1.heading != "" ?
            <Tab eventKey="tab1" title={  <div
                          className="tab-courses-font" style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.heading,
                          }}
                      />}>
      <div
                          className="tab-courses-font" style={{fontFamily:"verdana"}}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.content,
                          }}
                        />
        <div style={{ padding: 30, display: 'block' }}> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have attended  PSM 1 Classroom training. It was well organized and training was very informative and was able gain good knowledge in scrum. I have cleared my PSM 1 exam in my 1st attempt. Thank you so much."</p>
<div class="wCard-quote__heading mb-3">❝Saravanan Ravi, TCS❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Fantastic training given by tryScrum...very insightful and thought provoking 2 days workshop...the trainer was able to suggest on what suits best for me if am planning to switch career as a scrum master...lot of take aways from the training...Thank you try scrum for facilitating"</p>
<div class="wCard-quote__heading mb-3">❝Vignesh, HCL❞</div></div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"It was a great class for a newcomer to Scrum. We had many opportunities to interact with others by doing various activities.A big thanks to our trainer. The examples that he put in front helped us understand the concepts more easily."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Arun Singh, PSM Candidate❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div> 
                        </Tab>
      
       : <p></p>
            
      ))}
      {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/professional-scrum-master-ii/" && tl.acfcoursePage.choachingtab2.heading != "" ?
          
           <Tab eventKey="tab2" title={  <div
                          className="tab-courses-font"  style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab2.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab2.content,
                         }}
                       />
        <div style={{ padding: 30, display: 'block' }}> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have attended  PSM 1 Classroom training. It was well organized and training was very informative and was able gain good knowledge in scrum. I have cleared my PSM 1 exam in my 1st attempt. Thank you so much."</p>
<div class="wCard-quote__heading mb-3">❝Saravanan Ravi, TCS❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start" style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Fantastic training given by tryScrum...very insightful and thought provoking 2 days workshop...the trainer was able to suggest on what suits best for me if am planning to switch career as a scrum master...lot of take aways from the training...Thank you try scrum for facilitating"</p>
<div class="wCard-quote__heading mb-3">❝Vignesh, HCL❞</div></div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"It was a great class for a newcomer to Scrum. We had many opportunities to interact with others by doing various activities.A big thanks to our trainer. The examples that he put in front helped us understand the concepts more easily."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Arun Singh, PSM Candidate❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div> 

                 </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/professional-scrum-master-ii/" && tl.acfcoursePage.choachingtab3.heading != "" ?
          
           <Tab eventKey="tab3" title={  <div
                          className="tab-courses-font"  style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab3.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab3.content,
                         }}
                       />
                             <div style={{ padding: 30, display: 'block' }}> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have attended  PSM 1 Classroom training. It was well organized and training was very informative and was able gain good knowledge in scrum. I have cleared my PSM 1 exam in my 1st attempt. Thank you so much."</p>
<div class="wCard-quote__heading mb-3">❝Saravanan Ravi, TCS❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Fantastic training given by tryScrum...very insightful and thought provoking 2 days workshop...the trainer was able to suggest on what suits best for me if am planning to switch career as a scrum master...lot of take aways from the training...Thank you try scrum for facilitating"</p>
<div class="wCard-quote__heading mb-3">❝Vignesh, HCL❞</div></div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"It was a great class for a newcomer to Scrum. We had many opportunities to interact with others by doing various activities.A big thanks to our trainer. The examples that he put in front helped us understand the concepts more easily."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Arun Singh, PSM Candidate❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div> 
                       </Tab>
     
      : <p></p>
           
     ))}

    </Tabs>
    </Tab>
   
    </Tabs>
 

    </div>
    <div className='product-owner-tab course_page_main' id="product-owner-tab" style={{margin:"2%"}}>
      {ddata.allWpPost.nodes.map((tit) => (
           
        tit.uri == "/certified-scrum-product-owner-cspo/" && tit.acfcoursePage.choachingtitle.heading != "" ?
        <div className='header_title' style={{padding: "3%", background:"#73B89E", borderRadius:"30px 30px 0 0"}}>
        <h1 style={{textAlign:"center", fontWeight:700, color:"#fff"}}>{tit.acfcoursePage.choachingtitle.heading}</h1> 
        <p style={{textAlign:"center",  color:"#fff"}}>{tit.acfcoursePage.choachingtitle.content}</p>
        <div className="course-btn-new" style={{textAlign:"center", marginTop:"2%"}}>
<a href="https://enterprise.tryscrum.com/product-manager-career-navigator/" class="course-header-btn4" target='_blank' >Explore Product Manager Career Navigator Program</a>
</div>
        </div>
        : <></>
        ))}
        <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3 ownercspo_foundation_section" style={{width:"100%"}}
    >
    <Tab eventKey="tab1" style={{width:"100%"}} title={<h2 class="foundation_head" style={{fontWeight:"800", fontSize:"30px", fontFamily:"verdana"}}>FOUNDATIONS</h2>} >
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3"
    >
          {ddata.allWpPost.nodes.map((tl) => (
           
            tl.uri == "/certified-scrum-product-owner-cspo/" && tl.acfcoursePage.choachingtab1.heading != "" ?
            <Tab eventKey="tab1" title={  <div
                          className="tab-courses-font"  style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.heading,
 }}
                      />}>
      <div
                          className="tab-courses-font" style={{fontFamily:"verdana"}}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.content,
                          }}
                        />
         <div style={{ padding: 30, display: 'block' }} id="ad_product-owner-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"The training content is great and instance quoted are very close to real time practices. This program can be taken by current PO’s and also blooming and potential PO's. This training set the context of the Big Picture and enlightened how a PO can align himself/herself to add value to a product. Great job Tryscrum"</p>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Trainer is super knowledgeable about Scrum and the Product Owner role. Clear explanations, he presented the material in a clear and engaging manner, making it easy for participants to grasp intricate concepts. Balanced and engaging mix of theory, examples, and hands-on exercises. He encouraged discussions and creating a positive learning vibe. The training materials were comprehensive and well-organized. Practical examples made the content easy to apply. While they provided a solid foundation about the course."</p>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"As a newcomer to the Product Owner role, I really found this workshop useful.Detailed topics, real time examples, interactive breakout sections."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Prashoba, Danfoss ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
   </Tab>
      
       : <p></p>
            
      ))}
      {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-scrum-product-owner-cspo/" && tl.acfcoursePage.choachingtab2.heading != "" ?
          
           <Tab eventKey="tab2" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab2.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab2.content,
                         }}
                       />
       <div style={{ padding: 30, display: 'block' }} id="ad_product-owner-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"The training content is great and instance quoted are very close to real time practices. This program can be taken by current PO’s and also blooming and potential PO's. This training set the context of the Big Picture and enlightened how a PO can align himself/herself to add value to a product. Great job Tryscrum"</p>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Trainer is super knowledgeable about Scrum and the Product Owner role. Clear explanations, he presented the material in a clear and engaging manner, making it easy for participants to grasp intricate concepts. Balanced and engaging mix of theory, examples, and hands-on exercises. He encouraged discussions and creating a positive learning vibe. The training materials were comprehensive and well-organized. Practical examples made the content easy to apply. While they provided a solid foundation about the course."</p>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"As a newcomer to the Product Owner role, I really found this workshop useful.Detailed topics, real time examples, interactive breakout sections."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Prashoba, Danfoss ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                       </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-scrum-product-owner-cspo/" && tl.acfcoursePage.choachingtab3.heading != "" ?
          
           <Tab eventKey="tab3" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab3.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab3.content,
                         }}
                       />
             <div style={{ padding: 30, display: 'block' }} id="ad_product-owner-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"The training content is great and instance quoted are very close to real time practices. This program can be taken by current PO’s and also blooming and potential PO's. This training set the context of the Big Picture and enlightened how a PO can align himself/herself to add value to a product. Great job Tryscrum"</p>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Trainer is super knowledgeable about Scrum and the Product Owner role. Clear explanations, he presented the material in a clear and engaging manner, making it easy for participants to grasp intricate concepts. Balanced and engaging mix of theory, examples, and hands-on exercises. He encouraged discussions and creating a positive learning vibe. The training materials were comprehensive and well-organized. Practical examples made the content easy to apply. While they provided a solid foundation about the course."</p>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"As a newcomer to the Product Owner role, I really found this workshop useful.Detailed topics, real time examples, interactive breakout sections."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Prashoba, Danfoss ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                       </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-scrum-product-owner-cspo/" && tl.acfcoursePage.choachingtab4.heading != "" ?
          
           <Tab eventKey="tab4" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab4.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab4.content,
                         }}
                       />
              <div style={{ padding: 30, display: 'block' }} id="ad_product-owner-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"The training content is great and instance quoted are very close to real time practices. This program can be taken by current PO’s and also blooming and potential PO's. This training set the context of the Big Picture and enlightened how a PO can align himself/herself to add value to a product. Great job Tryscrum"</p>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Trainer is super knowledgeable about Scrum and the Product Owner role. Clear explanations, he presented the material in a clear and engaging manner, making it easy for participants to grasp intricate concepts. Balanced and engaging mix of theory, examples, and hands-on exercises. He encouraged discussions and creating a positive learning vibe. The training materials were comprehensive and well-organized. Practical examples made the content easy to apply. While they provided a solid foundation about the course."</p>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"As a newcomer to the Product Owner role, I really found this workshop useful.Detailed topics, real time examples, interactive breakout sections."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Prashoba, Danfoss ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                       </Tab>
     
      : <p></p>
           
     ))}
    </Tabs>
    </Tab>
    <Tab eventKey="tab2" style={{width:"100%"}}  title={<h2 class="foundation_head" style={{fontWeight:"800", fontSize:"30px", fontFamily:"verdana"}}>ADVANCED</h2>} >
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3"
    >
          {ddata.allWpPost.nodes.map((pl) => (
           
            pl.uri == "/professional-scrum-product-owner-ii/" && pl.acfcoursePage.choachingtab1.heading != "" ?
            <Tab eventKey="tab1" title={  <div
                          className="tab-courses-font"  style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: pl.acfcoursePage.choachingtab1.heading,
                          }}
                      />}>
      <div
                          className="tab-courses-font" style={{fontFamily:"verdana"}}
                          dangerouslySetInnerHTML={{
                            __html: pl.acfcoursePage.choachingtab1.content,
                          }}
                        />
                   <div style={{ padding: 30, display: 'block' }} > 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"The training content is great and instance quoted are very close to real time practices. This program can be taken by current PO’s and also blooming and potential PO's. This training set the context of the Big Picture and enlightened how a PO can align himself/herself to add value to a product. Great job Tryscrum"</p>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Trainer is super knowledgeable about Scrum and the Product Owner role. Clear explanations, he presented the material in a clear and engaging manner, making it easy for participants to grasp intricate concepts. Balanced and engaging mix of theory, examples, and hands-on exercises. He encouraged discussions and creating a positive learning vibe. The training materials were comprehensive and well-organized. Practical examples made the content easy to apply. While they provided a solid foundation about the course."</p>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"As a newcomer to the Product Owner role, I really found this workshop useful.Detailed topics, real time examples, interactive breakout sections."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Prashoba, Danfoss ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                        </Tab>
      
       : <p></p>
            
      ))}
      {ddata.allWpPost.nodes.map((pl) => (
           
        pl.uri == "/professional-scrum-product-owner-ii/" && pl.acfcoursePage.choachingtab2.heading != "" ?
          
           <Tab eventKey="tab2" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: pl.acfcoursePage.choachingtab2.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: pl.acfcoursePage.choachingtab2.content,
                         }}
                       />
                 <div style={{ padding: 30, display: 'block' }}> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"The training content is great and instance quoted are very close to real time practices. This program can be taken by current PO’s and also blooming and potential PO's. This training set the context of the Big Picture and enlightened how a PO can align himself/herself to add value to a product. Great job Tryscrum"</p>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Trainer is super knowledgeable about Scrum and the Product Owner role. Clear explanations, he presented the material in a clear and engaging manner, making it easy for participants to grasp intricate concepts. Balanced and engaging mix of theory, examples, and hands-on exercises. He encouraged discussions and creating a positive learning vibe. The training materials were comprehensive and well-organized. Practical examples made the content easy to apply. While they provided a solid foundation about the course."</p>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"As a newcomer to the Product Owner role, I really found this workshop useful.Detailed topics, real time examples, interactive breakout sections."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Prashoba, Danfoss ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                       </Tab>
     
      : <p></p>
           
     ))}
      {ddata.allWpPost.nodes.map((pl) => (
           
           pl.uri == "/professional-scrum-product-owner-ii/" && pl.acfcoursePage.choachingtab3.heading != "" ?
             
              <Tab eventKey="tab3" title={  <div
                             className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                             dangerouslySetInnerHTML={{
                               __html: pl.acfcoursePage.choachingtab3.heading,
                             }}
                           />}>
        <div
                            className="tab-courses-font" style={{fontFamily:"verdana"}}
                            dangerouslySetInnerHTML={{
                              __html: pl.acfcoursePage.choachingtab3.content,
                            }}
                          />
                    <div style={{ padding: 30, display: 'block' }}> 
         <Carousel> 
           <Carousel.Item interval={4000}> 
           <div className="item">
    <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
   <div class="py-0 flex-grow-1">
   <p class="wCard-quote__text">"The training content is great and instance quoted are very close to real time practices. This program can be taken by current PO’s and also blooming and potential PO's. This training set the context of the Big Picture and enlightened how a PO can align himself/herself to add value to a product. Great job Tryscrum"</p>
   </div>
   </div>
      </div>
           </Carousel.Item> 
           <Carousel.Item interval={4000}> 
           <div className="item">
    <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
   <div class="py-0 flex-grow-1">
   <p class="wCard-quote__text">"Trainer is super knowledgeable about Scrum and the Product Owner role. Clear explanations, he presented the material in a clear and engaging manner, making it easy for participants to grasp intricate concepts. Balanced and engaging mix of theory, examples, and hands-on exercises. He encouraged discussions and creating a positive learning vibe. The training materials were comprehensive and well-organized. Practical examples made the content easy to apply. While they provided a solid foundation about the course."</p>
   </div>
   </div>
   </div>
   
           </Carousel.Item> 
           <Carousel.Item interval={4000}> 
           <div className="item">
    <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
   <div class="py-0 flex-grow-1">
   <p class="wCard-quote__text" style={{fontFamily:"verdana"}}>"As a newcomer to the Product Owner role, I really found this workshop useful.Detailed topics, real time examples, interactive breakout sections."</p>
   <div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Prashoba, Danfoss ❞</div>
   </div>
   </div>
   </div>   
    </Carousel.Item>   
         </Carousel> 
       </div>
                          </Tab>
        
         : <p></p>
              
        ))}
    </Tabs>
    </Tab>
    </Tabs>
      
    </div>
    <div className='agile-leadership-tab course_page_main' id="agile-leadership-tab" style={{margin:"2%"}}>
      {ddata.allWpPost.nodes.map((tit) => (
           
        tit.uri == "/certified-agile-leadership-i/" && tit.acfcoursePage.choachingtitle.heading != "" ?
        <div className='header_title' style={{padding: "3%", background:"#8C91AE", borderRadius:"30px 30px 0 0"}}>
        <h1 style={{textAlign:"center", fontWeight:700, color:"#fff"}}>{tit.acfcoursePage.choachingtitle.heading}</h1> 
        <p style={{textAlign:"center",  color:"#fff"}}>{tit.acfcoursePage.choachingtitle.content}</p>
        <div className="course-btn-new" style={{textAlign:"center", marginTop:"2%"}}>
<a href="https://enterprise.tryscrum.com/agile-leader-career-navigator/" class="course-header-btn3" target='_blank'>Explore Agile Leader Career Navigator Program</a>
</div>
        </div>
        : <></>
        ))}
        <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3 agile_foundation_section" style={{width:"100%"}}
    >
    <Tab eventKey="tab1" style={{width:"100%"}} title={<h2 class="foundation_head" style={{fontWeight:"800", fontSize:"30px", fontFamily:"verdana"}}>FOUNDATIONS</h2>} >
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3"
    >
          {ddata.allWpPost.nodes.map((tl) => (
           
            tl.uri == "/certified-agile-leadership-i/" && tl.acfcoursePage.choachingtab1.heading != "" ?
            <Tab eventKey="tab1" title={  <div
                          className="tab-courses-font" style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.heading,
                          }}
                      />}>
      <div
                          className="tab-courses-font" style={{fontFamily:"verdana"}}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.content,
                          }}
                        />
   <div style={{ padding: 30, display: 'block' }} id="ad_agile-leadership-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have repeatedly attended various courses conducted by tryScrum.com, and I am glad to say that I have been very satisfied with their services!<br/>I like how they run their courses, they focus on coaching and fully engaging the participants, inspect and adapt feedback from participants within the course itself - not after, which would be too late by then!"</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Fadly, Agile Coach ❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Wonderful experience since talking to the customer service until the end of the course. Great instructor, super prepared for our questions with great different examples to make sure we all get the point."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Beatriz, CAL Participant ❞</div>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>I recently completed the Certified Agile Leadership ( CAL ) Combo training program, and I must say it was an exceptional experience. From start to finish, the program exceeded my expectations and provided me with valuable insights and skills.<br/>The content of the training was well-structured and up-to-date, covering all the relevant topics in great detail. The trainers were not only knowledgeable but also highly engaging, making the learning process enjoyable. The use of practical examples and real-world scenarios really helped me grasp the concepts effectively."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Alaa Basir, CAL Participant ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                        </Tab>
      
       : <p></p>
            
      ))}
      {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-agile-leadership-i/" && tl.acfcoursePage.choachingtab2.heading != "" ?
          
           <Tab eventKey="tab2" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab2.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab2.content,
                         }}
                       />
            <div style={{ padding: 30, display: 'block' }} id="ad_agile-leadership-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have repeatedly attended various courses conducted by tryScrum.com, and I am glad to say that I have been very satisfied with their services!<br/>I like how they run their courses, they focus on coaching and fully engaging the participants, inspect and adapt feedback from participants within the course itself - not after, which would be too late by then!"</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Fadly, Agile Coach ❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Wonderful experience since talking to the customer service until the end of the course. Great instructor, super prepared for our questions with great different examples to make sure we all get the point."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Beatriz, CAL Participant ❞</div>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>I recently completed the Certified Agile Leadership ( CAL ) Combo training program, and I must say it was an exceptional experience. From start to finish, the program exceeded my expectations and provided me with valuable insights and skills.<br/>The content of the training was well-structured and up-to-date, covering all the relevant topics in great detail. The trainers were not only knowledgeable but also highly engaging, making the learning process enjoyable. The use of practical examples and real-world scenarios really helped me grasp the concepts effectively."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Alaa Basir, CAL Participant ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                       </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-agile-leadership-i/" && tl.acfcoursePage.choachingtab3.heading != "" ?
          
           <Tab eventKey="tab3" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab3.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab3.content,
                         }}
                       />
            <div style={{ padding: 30, display: 'block' }} id="ad_agile-leadership-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have repeatedly attended various courses conducted by tryScrum.com, and I am glad to say that I have been very satisfied with their services!<br/>I like how they run their courses, they focus on coaching and fully engaging the participants, inspect and adapt feedback from participants within the course itself - not after, which would be too late by then!"</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Fadly, Agile Coach ❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Wonderful experience since talking to the customer service until the end of the course. Great instructor, super prepared for our questions with great different examples to make sure we all get the point."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Beatriz, CAL Participant ❞</div>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>I recently completed the Certified Agile Leadership ( CAL ) Combo training program, and I must say it was an exceptional experience. From start to finish, the program exceeded my expectations and provided me with valuable insights and skills.<br/>The content of the training was well-structured and up-to-date, covering all the relevant topics in great detail. The trainers were not only knowledgeable but also highly engaging, making the learning process enjoyable. The use of practical examples and real-world scenarios really helped me grasp the concepts effectively."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Alaa Basir, CAL Participant ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>         </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-agile-leadership-i/" && tl.acfcoursePage.choachingtab4.heading != "" ?
          
           <Tab eventKey="tab4" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab4.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab4.content,
                         }}
                       />
    <div style={{ padding: 30, display: 'block' }} id="ad_agile-leadership-tab"> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have repeatedly attended various courses conducted by tryScrum.com, and I am glad to say that I have been very satisfied with their services!<br/>I like how they run their courses, they focus on coaching and fully engaging the participants, inspect and adapt feedback from participants within the course itself - not after, which would be too late by then!"</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Fadly, Agile Coach ❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Wonderful experience since talking to the customer service until the end of the course. Great instructor, super prepared for our questions with great different examples to make sure we all get the point."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Beatriz, CAL Participant ❞</div>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>I recently completed the Certified Agile Leadership ( CAL ) Combo training program, and I must say it was an exceptional experience. From start to finish, the program exceeded my expectations and provided me with valuable insights and skills.<br/>The content of the training was well-structured and up-to-date, covering all the relevant topics in great detail. The trainers were not only knowledgeable but also highly engaging, making the learning process enjoyable. The use of practical examples and real-world scenarios really helped me grasp the concepts effectively."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Alaa Basir, CAL Participant ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                       </Tab>
     
      : <p></p>
           
     ))}
    </Tabs>
    </Tab>
    <Tab eventKey="tab2" style={{width:"100%"}}  title={<h2 class="foundation_head" style={{fontWeight:"800", fontSize:"30px", fontFamily:"verdana"}}>ADVANCED</h2>} >
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3"
    >
          {ddata.allWpPost.nodes.map((tl) => (
           
            tl.uri == "/certified-agile-leadership-ii/" && tl.acfcoursePage.choachingtab1.heading != "" ?
            <Tab eventKey="tab1" title={  <div
                          className="tab-courses-font" style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.heading,
                          }}
                      />}>
      <div
                          className="tab-courses-font" style={{fontFamily:"verdana"}}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.content,
                          }}
                        />
             
    <div style={{ padding: 30, display: 'block' }}> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have repeatedly attended various courses conducted by tryScrum.com, and I am glad to say that I have been very satisfied with their services!<br/>I like how they run their courses, they focus on coaching and fully engaging the participants, inspect and adapt feedback from participants within the course itself - not after, which would be too late by then!"</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Fadly, Agile Coach ❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Wonderful experience since talking to the customer service until the end of the course. Great instructor, super prepared for our questions with great different examples to make sure we all get the point."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Beatriz, CAL Participant ❞</div>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>I recently completed the Certified Agile Leadership ( CAL ) Combo training program, and I must say it was an exceptional experience. From start to finish, the program exceeded my expectations and provided me with valuable insights and skills.<br/>The content of the training was well-structured and up-to-date, covering all the relevant topics in great detail. The trainers were not only knowledgeable but also highly engaging, making the learning process enjoyable. The use of practical examples and real-world scenarios really helped me grasp the concepts effectively."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Alaa Basir, CAL Participant ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                        </Tab>
      
       : <p></p>
            
      ))}
      {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-agile-leadership-ii/" && tl.acfcoursePage.choachingtab2.heading != "" ?
          
           <Tab eventKey="tab2" title={  <div
                          className="tab-courses-font"   style={{fontSize:"14px",fontWeight:"800", color: "#000" }}
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab2.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font" style={{fontFamily:"verdana"}}
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab2.content,
                         }}
                       />
      <div style={{ padding: 30, display: 'block' }}> 
      <Carousel> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#A7DFF2", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"I have repeatedly attended various courses conducted by tryScrum.com, and I am glad to say that I have been very satisfied with their services!<br/>I like how they run their courses, they focus on coaching and fully engaging the participants, inspect and adapt feedback from participants within the course itself - not after, which would be too late by then!"</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Fadly, Agile Coach ❞</div>
</div>
</div>
   </div>
        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#CBE7A3", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text">"Wonderful experience since talking to the customer service until the end of the course. Great instructor, super prepared for our questions with great different examples to make sure we all get the point."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Beatriz, CAL Participant ❞</div>
</div>
</div>
</div>

        </Carousel.Item> 
        <Carousel.Item interval={4000}> 
        <div className="item">
 <div class="wQuote__Marker card wCard-quote text-center text-lg-start"  style={{background: "#FFE0AE", fontFamily:"verdana"}}>
<div class="py-0 flex-grow-1">
<p class="wCard-quote__text" style={{fontFamily:"verdana"}}>I recently completed the Certified Agile Leadership ( CAL ) Combo training program, and I must say it was an exceptional experience. From start to finish, the program exceeded my expectations and provided me with valuable insights and skills.<br/>The content of the training was well-structured and up-to-date, covering all the relevant topics in great detail. The trainers were not only knowledgeable but also highly engaging, making the learning process enjoyable. The use of practical examples and real-world scenarios really helped me grasp the concepts effectively."</p>
<div class="wCard-quote__heading mb-3" style={{fontFamily:"verdana"}}>❝ Alaa Basir, CAL Participant ❞</div>
</div>
</div>
</div>   
 </Carousel.Item>   
      </Carousel> 
    </div>
                       </Tab>
     
      : <p></p>
           
     ))}
  
    </Tabs>
    </Tab>
    </Tabs>
    </div>
    </div>
   
    </div>
   
    </>
  );
}