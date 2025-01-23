import React, {useEffect} from "react";
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import WebcastHeader from "../components/WebcastHeader";
// import WebcastContent from "../components/WebcastContent";
import Footer from "../components/Footer";
import media from "../assets/images/webcast.png"
import banner from "../assets/images/webcast.jpg"



const Webcast = ({data}) => {
    
  const webcasttext = data.allWpWebcast.nodes;
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/webcast/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/webcast/";

  //   // Append to head
  //   document.head.appendChild(linkUS);
  //   document.head.appendChild(linkIN);

  //   // Cleanup function to remove the elements when the component unmounts
  //   return () => {
  //     document.head.removeChild(linkUS);
  //     document.head.removeChild(linkIN);
  //   };
  // }, []);
  return (
    <Layout pageTitle="tryScrum | Webcast" metaDesc="tryScrum webcasts - Community Events" pageName="webcast" image={banner}>
  
      <NavTwo />
      <WebcastHeader title="Webcast" />
                 
                <div className="container" style={{marginTop:"20px"}}>
                    <div className="row row-flex">


                {/* <ol style={{ listStyle: `none` }}> */}
                    {webcasttext.map(webcast => {

                    const title = webcast.title;
                    const uri = webcast.uri;
                    const media = webcast.featuredImage.node.mediaItemUrl;
                    // console.log(media);

                    return (
                        // <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="row">
                              <div className="col-md-4 mb-4">
                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                        
                                            <img src={media} alt="Webcast Images" style={{ width: 300, height: 190 , objectFit:"contain"}} /> 
                                         
                                </div>
                            </div>           


                            {/* <div className="content border border-primary"> */}
                            <div className="col-md-8 mb-4">
                                    {/* <Link to={uri}>
                                        <img src={media} alt="Webcast Images" style={{ width: 300, height: 190 }} /> 
                                    </Link>  */}
                                <h3 className="blog-one__title" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="blog-one__text" dangerouslySetInnerHTML={{ __html: webcast.content }} />
                                        <div className="row align-items-end">
                                            
                                            <div className="col-md-6">
                                                <div>
                                                  <i className="fas fa-calendar-alt" ></i> <i style={{marginLeft:"10px"}} class="fas fa-clock"></i>
                                                  <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: webcast.webcast.dateTime.dateTime }} />
                                                </div>                                    
                                                <a href={webcast.webcast.dateTime.registerLink} itemProp="url" target="__blank">
                                                    {/* <p className="webcastbutton" dangerouslySetInnerHTML={{ __html: webcast.webcast.dateTime.buttonName }} /> */}
                                                    <button type="button" className="btn btn-danger" style={{width:"200px", height:"50px"}}><span style={{fontWeight:"800", marginTop:"10px"}} dangerouslySetInnerHTML={{ __html: webcast.webcast.dateTime.buttonName }} /></button>

                                                </a>
                                            </div>
                                            
                                        </div>

                        {/* <div className="blog-one__image">
                            <Link to={uri}>
                                <img src={media} alt="Blogs Images" style={{ width: 370, height: 198 }} /> 
                            </Link> 
                        </div> */}

                        {/* <div className="blog-one__content text-centerhome">

                            
                            <Link to={uri}>
                                <h4 className="blog-one__title heading4">
                              
                                <div dangerouslySetInnerHTML={{ __html: title }} />
                                </h4> 
                            </Link>
                            
                            <p className="blog-one__text newcontent" >
                          
                            <div  dangerouslySetInnerHTML={{ __html: webcast.content }} />
                            </p>
                            <div className="row readmore">
                            <div className="col-lg-4">
                            
                            <p className="blog-one__link" >
                            16-07-2021
                            </p>
                            
                            </div>
                            <div className="col-lg-4">
                            </div>
                            <div className="col-lg-4">
                            <Link to={uri} itemProp="url" >
                            <p className="blog-one__link readbutton" >
                                Register
                            </p>
                            </Link>
                            </div>
                            </div>
                            
                        </div> */}

                        </div>
                    </div>
                    
                    )
                    })}

                        </div>
                    </div>  
               
      <Footer />
    </Layout>
  );
};

export default Webcast;

export const webcast = graphql`
  query webcastcontent {
    allWpWebcast(sort: { date: DESC  }) {
        nodes {
          uri
          title
          excerpt
          content
          webcast {
            dateTime {
              dateTime
              registerLink
              buttonName
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
  }
`