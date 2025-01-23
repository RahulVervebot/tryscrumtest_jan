import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import lp0 from "../assets/images/slider-icon.png";
import lp1 from "../assets/images/1.jpg";
import lp2 from "../assets/images/2.jpg";
import lp3 from "../assets/images/3.jpg";
import lp4 from "../assets/images/4.jpg";

const VartualClass = () => {

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
              {/* <div className="blog-one__image">
                <img src={blogd1} alt="" />
              </div> */}
              
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

                <h2 className="blog-one__title">
                Virtual Courses - Special Instructions
                </h2>

                <p className="blog-one__text">
<h2 style={{color:"red"}}>   
   Logistics Requirements
</h2>
<li>
A laptop with audio & video provision
</li>
<li>
Install Zoom for video conferencing [ For Corporate Employees, if you cannot install Zoom on your laptops, please make sure you can click the invitation URL from us and ensure you can join the class from your browser]
</li>
<li>
Mural (www.mural.co) for online collaboration
</li>
<li>
Headset to avoid background noise
</li>
<h2 style={{color:"red"}}>
Before the Class
</h2> 
<li>
 Install Zoom on your laptops ( You are expected to be on a video throughout the class). ******For Corporate employees – You need not Install Zoom on your laptops. But ensure you click the invitation link and join from the browser.
 </li>
 <li>
Create a Trello Account( If you do not have one)
</li>
<li>
Trainers will share the Mural links on the class.
</li>
<h2 style={{color:"red"}}>
During the Class
</h2>
<li>
Do not close your Mural browser throughout the class
</li>
<li>
Please make sure you take the call from the noise-free background
</li>
<li>
Please join the calls from a laptop
</li>
<li>
Please do not join the class from the two instances ( Mobile & laptop)
</li>
<li>
Please be on the video during the class, not being on the video is disrespectful for the fellow participants.  
</li>
<h2 style={{color:"red"}}>
What if I cannot create Mural Account?
</h2>
<li>
You do not have to create Mural Accounts. You will join as an anonymous member. But, please make sure you watch the below video before the class
</li>


<h2 style={{color:"red"}}>
What if I cannot create a Zoom Account?
</h2>
<li>
Creating an account on Zoom is pretty straight-forward
</li>
<li>
Go to www.zoom.us
</li>
<li>
 Click sign-up and create an account using your email address.[ For Corporate employees this step is not required]
 </li>
 In case you cannot install Zoom on your laptops for security reasons, you may still be able to join from the browser version of Zoom. So, Relax!  Just click the invite link and join the meeting from your browsers.

<h2 style={{color:"red"}}>
How do I join the Audio?
</h2>
<li>
 For people joining from other countries – Dial-in numbers have been attached along with your invitation      
 </li>
 <li>
 India – No Dial-in numbers will be given, you may have to enter the Audio from your computer/laptop.
 </li>
 <li>
we strongly recommend you to join the Audio from your laptop as it creates two instances if you join Audio and video from two separate devices
</li>
<h2 style={{color:"red"}}>
When can I expect communication about Virtual class
</h2>
<li>
 You will get zoom invites four days before the class start date
 </li>
 <li>
 You may follow all the guidelines above to prepare yourself for the class Logistically.
 </li>
 <li>
Please give us 1-3 business days to respond to your queries
</li>
<h2 style={{color:"red"}}> 
Data Privacy
</h2>
<li>
By doing so, you are authorizing tryScrum to access your Name and email ID. tryScrum will purge the slack channels created for the class within 30 days from the date of class completion. No part of the class will be recorded.
</li>
<li>
tryScrum reserves the right to deny your attendance if you do not meet the minimum guidelines to participate in the class. You are responsible for getting familiarized with Logistics before the class. tryScrum trainers are committed to helping in an exceptional situation with respect to Logistics. However, if you do not have sufficient bandwidth or poor Internet connection, tryScrum is not responsible for the missing parts of the class.
</li>
<h2 style={{color:"red"}}>
Online Code of Conduct
</h2>
<li style={{listStyleType:"none"}}>
By signing up to and enrolling on a course, you  agree to:
</li>
<li style={{listStyleType:"none"}}>
1.Help to establish and maintain a positive and supportive online learning environment;
</li>
<li style={{listStyleType:"none"}}>
2.Treat all other candidates and tutors and their opinions with respect, cultural sensitivity and politeness;
</li>
<li style={{listStyleType:"none"}}>
3.Avoid Political/Culture Sensitive Conversations
</li>
<li style={{listStyleType:"none"}}>
4.Be on time for all Virtual Classes and let tryScrum know if you cannot attend a class for any reason by emailing support@tryscrum.com at least 24 hours prior to the class
</li>
<li style={{listStyleType:"none"}}>
5. Communicate only in English at all times;
</li>
<li style={{listStyleType:"none"}}>
6. Be on the video with a Casual/Formal dress code
</li>
<li style={{listStyleType:"none"}}>
7. Turn off or keep their mobile phone on silent during a Virtual Class so as to not distract the rest of the group;
</li>
<li style={{listStyleType:"none"}}>
8. Dress appropriately (Nudity is strictly prohibited);
</li>
<li style={{listStyleType:"none"}}>
9. Attend all Virtual Classes from a suitable and appropriate location, such as a shared family room or classroom (not in a loud public location such as a coffee shop or on a train);
</li>
<li style={{listStyleType:"none"}}>
10. Share any concern that they have about another student with their tutor and let their tutor know immediately if they feel unsafe in a Virtual Class or breakout room;
</li>
<br />
<h6 style={{color:"red"}}>
tryScrum reserves the right to deny your attendance if you breach the Online Code of Conduct.
</h6>
</p>
           
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

            <div> 
            </div>
            
            
            {/* <form action="#" className="reply-form">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="reply-form__field"
                  />
                </div>
                
                <div className="col-lg-12">
                    
                   <textarea
                    placeholder="Write message"
                    className="reply-form__field"
                  ></textarea> 
                  <br/>
                  <button className="reply-form__btn thm-btn" type="submit">
                    Download
                  </button>
                </div>
              </div>
            </form> */}

            

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
                  </div> */}


                  {/* <div className="sidebar__post__single">
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

              {/* <div className="sidebar__single sidebar__tags">
                <h3 className="sidebar__title">Tags</h3>
                <ul className="sidebar__tags-list">
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Scrum,</a>
                  </li>
                   <li className="sidebar__tags-list-item">
                    <a href="#none">Agency,</a>
                  </li> 
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
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VartualClass;
