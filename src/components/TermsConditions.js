import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import lp0 from "../assets/images/slider-icon.png";
import lp1 from "../assets/images/1.jpg";
import lp2 from "../assets/images/2.jpg";
import lp3 from "../assets/images/3.jpg";
import lp4 from "../assets/images/4.jpg";

const TermCondition = () => {

  const data = useStaticQuery ( graphql`
    query RecentPostBlogsVirtual {
      allWpNews(filter: {}, limit: 4) {
        nodes {
          uri
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    } 
  `)


  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-one__single">
              
              <div className="blog-one__content text-center">
       
 <h2 className="blog-one__title">
       Terms and Conditions
      </h2>
 <p className="blog-one__text">
  <p>
  Welcome to tryScrum! These terms and conditions outline the rules and regulations for the use of our website www.tryscrum.com and our services.
  </p>
<h3 style={{color:"red"}}>   
 Introduction
</h3>
<p>
By accessing this website and using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you may not access our services.
</p>
<h3 style={{color:"red"}}>
Services
</h3> 
<p>
tryScrum provides training, coaching, and certification programs in Agile, Scrum, and related areas.
</p>
<h3 style={{color:"red"}}>
 Payments & Refunds
</h3>
<li>
All course purchases are final unless otherwise stated.
</li>
<li>
If a participant is unable to attend a course, a reschedule option is available based on availability.
</li>
<li>
Refunds will be provided only as per our <a href="/refund-policies/">refund policy.</a>
</li>

<h3 style={{color:"red"}}>
Intellectual Property
</h3>
<li>
All course materials, content, and resources provided are the intellectual property of tryScrum and cannot be copied, shared, or reproduced without permission.</li>
<h3 style={{color:"red"}}>
 Limitation of Liability
</h3>
<li>
We strive to provide high-quality training, but we do not guarantee specific results.
</li>
<li>
tryScrum is not responsible for any indirect losses due to service unavailability or disruptions.
</li>
<h3 style={{color:"red"}}>
 Modifications to Terms
</h3>
<p>
We reserve the right to modify these terms at any time. The updated terms will be effective upon posting on our website.    
 </p>

 <p>For any questions, contact us at support@tryscrum.com</p>

</p>
           
              </div>

              
            </div>

            <div> 
            </div>
            


            

          </div>

          <div className="col-lg-4">
            <div className="sidebar">

              <div className="sidebar__single sidebar__post">

                    <div style={{display : 'inline-block'}}>
                        <img src={lp0} alt="img"/>
                    </div>
                    
                    <div style={{display : 'inline-block', margin: '0 10px'}} >
                        <h4> Recent Posts</h4>
                    </div>


                <br/>
                <br/>          
                
                <div className="sidebar__post-wrap">
                {data.allWpNews.nodes.map(value => {
        return(
                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={value.featuredImage.node.mediaItemUrl} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                      
                        <Link to={value.uri} >
                            {value.title}   
                        </Link>  
              
                      </h4>
                    </div>
                  </div>
        )})}


                </div>
              </div>


          

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermCondition;
