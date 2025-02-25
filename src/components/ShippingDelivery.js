import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import lp0 from "../assets/images/slider-icon.png";
import lp1 from "../assets/images/1.jpg";
import lp2 from "../assets/images/2.jpg";
import lp3 from "../assets/images/3.jpg";
import lp4 from "../assets/images/4.jpg";

const ShippingDelivery = () => {

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
 Shipping and Delivery Policy
      </h2>
 <p className="blog-one__text">
  <p>
  At tryScrum, we primarily offer digital training, coaching, and certification services. As such, our services are delivered electronically, in live-virtual, or in person.  </p>
<h3 style={{color:"red"}}>   
Digital Course Delivery
</h3>

<li>
Upon successful registration and payment, confirmation for the course will be sent to the registered email.
</li>
<li>
Details for in-person training or access details for live-online training will be sent to the registered email address a week before the training.
</li>
<li>
Access to the course materials will be sent to the registered email address after completing the training.
</li>
<li>
Users should ensure that the email provided is accurate to avoid delivery issues.
</li>

<h3 style={{color:"red"}}>
Physical Shipment 
</h3> 
<li>
We do not make any physical shipments.
</li>
<h3 style={{color:"red"}}>
Issues with Delivery
</h3>
<li>
If you do not receive course access details within 24 hours of course completion, please contact us at support@tryscrum.com.
</li>

 <p>For any queries, please contact our support team at support@tryscrum.com. </p>

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

export default ShippingDelivery;
