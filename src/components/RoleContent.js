import React from "react";
import blogd1 from "../assets/images/whitepaper-scaling-img.jpg";
import author1 from "../assets/images/author-1-1.jpg";
import comment1 from "../assets/images/comment-1-1.jpg";
import comment2 from "../assets/images/comment-1-2.jpg";
import { Link, useStaticQuery, graphql } from "gatsby";

import lp0 from "../assets/images/slider-icon.png";
import lp1 from "../assets/images/1.jpg";
import lp2 from "../assets/images/2.jpg";
import lp3 from "../assets/images/3.jpg";
import lp4 from "../assets/images/4.jpg";

import image1 from "../assets/images/ScrumMaster-infographic.png";
import image2 from "../assets/images/cec-infographic_03.png";
import image3 from "../assets/images/agilecoachinfographic_04.png";

const RoleContent = () => {

  const data = useStaticQuery ( graphql`
    query RecentPostBlogsWhichRole {
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
              <div className="blog-one__image">
                <img src={blogd1} alt="" />
              </div>
              
              <div className="blog-one__content text-center">
                {/* <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted On Jan 19"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="No Comments"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted By Admin"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div> */}
                <a href="/professional-scrum-master/" target="_blank" >
                  <h2 className="blog-one__title">
                      Scrum Master
                  </h2>
                </a>
                <p className="blog-one__text">
                  If you

                  <li>enjoy creating value by helping people develop themselves</li>

                  <li> enjoy protecting the team from distractions </li>

                  <li>enjoy being calm and composed </li>

                  Then, kick start your career as a Scrum Master
                </p>
                <div style={{marginTop:"20px", marginBottom:"20px"}}>
                  <img src={image1} width="700px" height="300px" className="img-fluid"></img>
                </div>

                <hr />

                <a href="/professional-scrum-product-owner/" target="_blank" >
                  <h2 className="blog-one__title">
                  Product Owners – Value Maximizer
                  </h2>
                </a>
                <p className="blog-one__text">
                
                      If you,

                      <li>enjoy focusing on customer</li>

                      <li> enjoy creating great products </li>

                      <li>enjoy being calm and composed </li>

                      Then kick start your career as a Product Owner
                </p>

                <div style={{marginTop:"20px", marginBottom:"20px"}}>
                  <img src={image2} width="700px" height="300px" className="img-fluid"></img>
                </div>

                <hr />

                <a href="/icagile" target="_blank" >
                  <h2 className="blog-one__title">
                    Agile Coaches – Enablers
                  </h2>
                </a>
                
                <p className="blog-one__text">
                  If you

                  <li>enjoy active listening without being judgemental </li>

                  <li> enjoy facilitating positive thinking  </li>

                  <li>enjoy generating insights and a container to expand solution space  </li>

                  Then kick start your career as an Agile Coach
                </p>

                <div style={{marginTop:"20px", marginBottom:"20px"}}>
                  <img src={image3} width="700px" height="300px" className="img-fluid"></img>
                </div>

                {/* <p className="blog-one__text">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of lorem ipsum amet finibus eros. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting.
                </p>
                <p className="blog-one__text">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of lorem ipsum.
                </p> */}
              </div>
            </div>
            <div className="share-block">
              <div className="left-block">
                {/* <p>
                  Tags: <a href="#none">Business,</a>{" "}
                  <a href="#none">Agency,</a> <a href="#none">Technology</a>
                </p> */}

                <p>
                  Follow Us On
                </p>

              </div>
              <div className="social-block">
                  <a href="https://www.facebook.com/tryScrum.org">
                    <i className="fab fa-facebook-square"></i>
                  </a>

                  <a href="https://twitter.com/try_Scrum">
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a href="https://www.linkedin.com/company/tryscrum/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  
                  <a href="https://tryscrumstudio.slack.com/">
                    <i className="fab fa-slack"></i>
                  </a>
                  
                  <a href="https://www.meetup.com/Scrum-Master-Studio/">
                    <i className="fab fa-meetup"></i>
                  </a>

                  <a href="https://www.instagram.com/try_Scrum/">
                    <i className="fab fa-instagram"></i>
                  </a>
              </div>
            </div>

            {/* <div className="blog-details__author">
              <div className="blog-details__author-image">
                <img src={author1} alt="Awesome alter text" />
              </div>
              <div className="blog-details__author-content">
                <h3>Christine Eve</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the rinting and
                  typesetting been the industry standard dummy text ever sincer
                  condimentum purus. In non ex at ligula fringilla lobortis et
                  not the aliquet.
                </p>
              </div>
            </div> */}

            {/* <h2 className="blog-details__content-title">2 Comments</h2>
            <div className="comment-one">
              <div className="comment-one__single">
                <div className="comment-one__image">
                  <div className="inner-block">
                    <img src={comment1} alt="Awesome alter text" />
                  </div>
                </div>
                <div className="comment-one__content">
                  <div className="comment-one__content-top">
                    <div className="comment-one__top-left">
                      <h3 className="comment-one__author">
                        Laquanda Bachmeier
                      </h3>
                      <p className="comment-one__date">
                        20 April, 2019{" "}
                        <span className="comment-one__date-sep">-</span> 4:00 pm
                      </p>
                      <p className="comment-one__text">
                        Lorem Ipsum is simply dummy text of the rinting and
                        typesetting been the industry standard dummy text ever
                        sincer condimentum purus. In non ex at ligula fringilla
                        lobortis et not the aliquet.
                      </p>
                    </div>
                    <div className="comment-one__top-right">
                      <a href="#none" className="thm-btn comment-one__reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-one__single">
                <div className="comment-one__image">
                  <div className="inner-block">
                    <img src={comment2} alt="Awesome alter text" />
                  </div>
                </div>
                <div className="comment-one__content">
                  <div className="comment-one__content-top">
                    <div className="comment-one__top-left">
                      <h3 className="comment-one__author">Vicente Elmore</h3>
                      <p className="comment-one__date">
                        20 April, 2019{" "}
                        <span className="comment-one__date-sep">-</span> 4:00 pm
                      </p>
                      <p className="comment-one__text">
                        Lorem Ipsum is simply dummy text of the rinting and
                        typesetting been the industry standard dummy text ever
                        sincer condimentum purus. In non ex at ligula fringilla
                        lobortis et not the aliquet.
                      </p>
                    </div>
                    <div className="comment-one__top-right">
                      <a href="#none" className="thm-btn comment-one__reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="col-lg-4">
            <div className="sidebar">

              {/* <div className="sidebar__single sidebar__search">
                <form action="#" className="sidebar__search-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here..."
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div> */}

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

                  {/* <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp1} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <Link to="/blogs/challenges-for-shared-accountability/" >
                            Challenges for Shared Accountability    
                        </Link>  
                       
                      </h4>
                    </div>
                  </div>
                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp2} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <Link to="/blogs/winning-office-politics-3-tips-that-scrum-masters-can-use/">
                            Winning Office Politics – 3 tips that Scrum Masters can use
                        </Link>  
                     
                      </h4>
                    </div>
                  </div>
                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp3} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <Link to="/blogs/who-is-a-product-owner-anyway/">
                            Who is a Product Owner, anyway?
                        </Link>  
                      
                      </h4>
                    </div>
                  </div>

                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp4} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <Link to="/blogs/guide-to-building-a-career-as-scrum-master/">
                            Guide to Building a Career as Scrum Master
                        </Link>  
                       
                      </h4>
                    </div>
                  </div> */}

                </div>

                
              </div>

              {/* <div className="sidebar__single sidebar__category">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list">
                  <li className="sidebar__category-list-item">
                    <a href="#none">Business</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">Introductions</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">One Page Template</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">Parallax Effects</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">New Technologies</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">Video Backgrounds</a>
                  </li>
                </ul>
              </div> */}

              <div className="sidebar__single sidebar__tags">
                <h3 className="sidebar__title">Tags</h3>
                <ul className="sidebar__tags-list">
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Scrum,</a>
                  </li>
                  {/* <li className="sidebar__tags-list-item">
                    <a href="#none">Agency,</a>
                  </li> */}
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Technology,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Parallax,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Innovative,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Professional,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Experience,</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleContent;
