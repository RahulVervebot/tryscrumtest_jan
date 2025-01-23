import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useStaticQuery, graphql } from "gatsby";
import React   from 'react';
import { useLocation } from '@reach/router';

export default function CareerNavigator(props) {
  const ddata = useStaticQuery(graphql`
    query {
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
  console.log(ddata.allWpPost.nodes[0].uri, "mycourse")

  return (
    <>
        <div className='header_title' style={{padding: "3%", background:"#f7f7f7", borderRadius:"30px 30px 0 0"}}>
        <h1 style={{textAlign:"center", fontWeight:700, color:"#000"}}>Scrum Mastery Career Navigator</h1> 
        <p style={{textAlign:"center"}}>Explore the core principles of scrum through our CSM courses, designed to enhance collaboration within and across teams and establish you as a catalyst for positive organizational change regardless of your current role.
</p>
        </div>
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab"
      className="mb-3"
    >
          {ddata.allWpPost.nodes.map((tl) => (
           
            tl.uri == "/certified-agile-skills-scaling-level-1/" ?
            <Tab eventKey="tab1" title={  <div
                          className="tab-courses-font"
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.heading,
                          }}
                      />}>
      <div
                          className="tab-courses-font"
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab1.content,
                          }}
                        />
                        </Tab>
      
       : <p></p>
            
      ))}
      {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-agile-skills-scaling-level-1/" ?
          
           <Tab eventKey="tab2" title={  <div
                          className="tab-courses-font"
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab2.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font"
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab2.content,
                         }}
                       />
                       </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-agile-skills-scaling-level-1/" ?
          
           <Tab eventKey="tab3" title={  <div
                          className="tab-courses-font"
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab3.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font"
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab3.content,
                         }}
                       />
                       </Tab>
     
      : <p></p>
           
     ))}
     {ddata.allWpPost.nodes.map((tl) => (
           
           tl.uri == "/certified-agile-skills-scaling-level-1/" ?
          
           <Tab eventKey="tab4" title={  <div
                          className="tab-courses-font"
                          dangerouslySetInnerHTML={{
                            __html: tl.acfcoursePage.choachingtab4.heading,
                          }}
                        />}>
     <div
                         className="tab-courses-font"
                         dangerouslySetInnerHTML={{
                           __html: tl.acfcoursePage.choachingtab4.content,
                         }}
                       />
                       </Tab>
     
      : <p></p>
           
     ))}
    </Tabs>
    </>
  );
}