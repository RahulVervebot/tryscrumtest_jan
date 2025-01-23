import React from "react";
import blogd1 from "../assets/images/whitepaper-scaling-img.jpg";
import author1 from "../assets/images/author-1-1.jpg";
import comment1 from "../assets/images/comment-1-1.jpg";
import comment2 from "../assets/images/comment-1-2.jpg";
import { Link } from "gatsby";

import lp0 from "../assets/images/slider-icon.png";
import lp1 from "../assets/images/1.jpg";
import lp2 from "../assets/images/2.jpg";
import lp3 from "../assets/images/3.jpg";
import lp4 from "../assets/images/4.jpg";

const ScrumPlusContent = () => {
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

                <h2 className="blog-one__title">
                    Scaling Scrum - A CASE Study
                </h2>
                <p className="blog-one__text">
                In 2016, a leading security products company adopted Scrum to support teams working in complex product development, in order to make the organization more adaptive and able to react faster to change. It began with one Scrum Team of IT developers focused on mobile applications. Shortly thereafter, more Scrum Teams were formed to revamp its existing platform in a new contemporary stack, composed of new hires focusing on API development, mobile app development and integration services. There was one Product Owner who began struggling with managing multiple priorities across these teams. 
                </p>
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
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-dribbble"></i>
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

            <div><br/></div>
            <h2 className="blog-details__content-title">Download WhitePaper</h2>
            
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

            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Enter You First Name</label>
                    <input type="name" className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                {/* <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div> */}
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">I agree to the tryScrum Privacy Policy</label>
                </div>
                <button type="submit" className="btn btn-primary">Download</button>
            </form>

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
                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp1} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <Link to="blogs/challenges-for-shared-accountability/" >
                            Challenges for Shared Accountability    
                        </Link>  
                        {/* <a href="#none">
                            Challenges for Shared Accountability
                        </a> */}
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
                        {/* <a href="#none">
                            Winning Office Politics – 3 tips that Scrum Masters can use
                        </a> */}
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
                        {/* <a href="#none">
                            Who is a Product Owner, anyway?
                        </a> */}
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
                        {/* <a href="#none">
                            Guide to Building a Career as Scrum Master
                        </a> */}
                      </h4>
                    </div>
                  </div>

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

export default ScrumPlusContent;
