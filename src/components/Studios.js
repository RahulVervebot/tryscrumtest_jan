import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import blog1 from "../assets/images/try-Scrum-imgaes/imgs/stages-of-scrum-mastery.jpg";
import blog2 from "../assets/images/try-Scrum-imgaes/imgs/scaling-scrum-with-nexus.jpg";
import blog3 from "../assets/images/try-Scrum-imgaes/imgs/professional-agile-coaching.jpg";
import blog4 from "../assets/images/blog-1-4.jpg";
import blog5 from "../assets/images/blog-1-5.jpg";
import blog6 from "../assets/images/blog-1-6.jpg";


// const News = () => {
//   return (
    
    // <StaticQuery
    //   query={ graphql`
    //   query MyQuery {
    //     allWpPost {
    //       edges {
    //         node {
    //           date
    //           title
    //           uri
    //           featuredImage {
    //             node {
    //               id
    //               fileSize
    //               mediaItemUrl
    //             }
    //           }
    //           excerpt
    //           author {
    //             node {
    //               name
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }`
    // }
      // render={data => (
        
      //   <div>
      //     <ul>
      //     {data.allWpPost.edges.map(({ node }) => (
      //       <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
      //     <Link
      //         to={`/news-details`}
      //         state= {{ choice: "Value" }}
      //         style={{ display: "flex", color: "black", textDecoration: "none" }}
      //     >
      //     <div style={{ width: "75%" }}>
      //         <h3
      //           dangerouslySetInnerHTML={{ __html: node.title }}
      //           style={{ marginBottom: 0 }}
      //         />
      //         <p style={{ margin: 0, color: "grey" }}>
      //           Written by {node.author.name} on {node.date}
      //         </p>
      //         <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      //       </div>
      //     </Link>
      //     </li>
      //     ))}  
      //     </ul>    
      //   </div>
      // )}
    // />      
//   );
// };



const Studios = () => {
  return (
    <section className="blog-one blog-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
               <Link to="/scrum-master-studio" >
                  <img src={blog1} alt="Studio Images" />
                </Link>
              </div>
              <div className="blog-one__content text-center">
               
                  <Link to="/scrum-master-studio">
                  <h2 className="blog-one__title">
                  Scrum Master Studio
                  </h2>
                  </Link>
                
                <p className="blog-one__text">
                The “Scrum Master Studio” is intended to instill skills within Scrum Masters, Product Owners and Managers to create them as future leaders.
                </p>
                <Link to="/scrum-master-studio" >
                <p className="blog-one__link">
                  Read More
                </p>  
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <Link to="/product-owner-studio" >
                
                  <img src={blog2} alt="Studio Image" />
                  
                </Link>
              </div>
              <div className="blog-one__content text-center">
               
                
                  <Link to="/product-owner-studio">
                  <h2 className="blog-one__title">
                  Product Owner Studio
                  </h2>
                  </Link>
                
                <p className="blog-one__text">
                The “Product Owner Studio” is a Community Meetup from “Scrum Master Studio” intended to instill Product Thinking Skills within Product Owners and Leaders.
                </p>
                <Link to="/product-owner-studio">
                <p className="blog-one__link">
                  Read More
                </p>  
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <Link to="/agile-leadership-studio">
                   <img src={blog3} alt="Studio Images" />  
                </Link>
              </div>
              <div className="blog-one__content text-center">
               
               
                  <Link to="/agile-leadership-studio">
                  <h2 className="blog-one__title">
                    Agile Leadership Studio
                   </h2> 
                  </Link>
               
                <p className="blog-one__text">
                tryScrum’s vision is to Humanize Organizations. We believe through leaders we can help people unleash the power of intelligence of oneself.
                </p>
                <Link to="/agile-leadership-studio" >
                  <p className="blog-one__link">
                  Read More
                  </p>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </section>
  );
};


export default Studios;

// export const pageQuery = graphql`
// query MyQuery {
//     allWpPost {
//         edges {
//             node {
//             title
//             }
//         }
//     }
// }`