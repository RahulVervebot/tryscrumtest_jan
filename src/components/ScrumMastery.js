import React, { useState } from "react";
import blogd1 from "../assets/images/whitepaper-scaling-img.jpg";
import author1 from "../assets/images/author-1-1.jpg";
import comment1 from "../assets/images/comment-1-1.jpg";
import comment2 from "../assets/images/comment-1-2.jpg";
import { Link, useStaticQuery, graphql } from "gatsby";
import axios from "axios";
import downloadFile from "../downloads/The-Stages-of-Scrum-Mastery-by-Venkatesh-Rajamani-1.pdf";

import lp0 from "../assets/images/slider-icon.png";
import lp1 from "../assets/images/1.jpg";
import lp2 from "../assets/images/2.jpg";
import lp3 from "../assets/images/3.jpg";
import lp4 from "../assets/images/4.jpg";

const WhitepaperScalingMaster = () => {

  const data = useStaticQuery(graphql`
    query RecentPostBlogsScrumMastery {
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

  const [state, setState] = useState({ name: "", email: "" });
  const [loader, setloader] = useState('');
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", checkbox: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheck = (event) => {
    setChecked((prevCheck) => !prevCheck);
    setErrors({
      ...errors,
      checkbox: "",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (state.email && state.name && checked) {
      debugger;
      setloader('loading');
      const url =
        "https://tryscrumtest.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3476/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(url, formData, config);
      console.log("response", res);

      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        if (checked) {
          setState({ name: "", email: "" });
          setSubmissionMessage(res.data.message);

          // window.open(
          //   downloadFile,
          //   "_blank" // <- This is what makes it open in a new window.
          // );
          // window.location.href = downloadFile;
        }
      } else {
        alert("please try again");
      }
    } else {
      let error = errors;
      if (state.name === "") {
        // debugger;
        error = {
          ...error,
          name: "This is required",
        };
      }
      if (state.email === "") {
        error = {
          ...error,
          email: "This is required",
        };
      }
      if (checked === false) {
        error = {
          ...error,
          checkbox: "Please check this",
        }
      }
      setErrors(error);
    }
  };

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

                <h2 className="blog-one__title">The Stages of Scrum Mastery</h2>
                <p className="blog-one__text">
                  There are four stages of Scrum Mastery, and where you fall
                  will determine both your effectiveness and efficiency as a
                  Servant-Leader. Each stage may lead to the next, and moving
                  from the stage you’re into the next stage will help you become
                  better at enabling self-organizing and intelligent teams that
                  better thrive in a complex world. When I look back on my early
                  days as a newly minted Scrum Master in 2013, I certainly
                  enjoyed the opportunity, even though there was little
                  information available on how to become an effective Scrum
                  Master. Even though I was calling myself a Scrum Master, there
                  is a clear difference between “calling” and “being”.
                </p>
                <p className="blog-one__text">
                  I am writing this whitepaper from the perspective of Conscious
                  Competence quadrant. It contains my personal experiences as a
                  Scrum Master along with some of my research work. In my view,
                  no one is going to neither stay in one of these quadrants nor
                  move sequentially.
                </p>
                {/*
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

                <p>Follow Us On</p>
              </div>
              <div className="social-block">
                <a href="https://www.facebook.com/tryScrum.org" target="_blank">
                  <i className="fab fa-facebook-square"></i>
                </a>

                <a href="https://twitter.com/try_Scrum" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="https://www.linkedin.com/company/tryscrum/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://tryscrumstudio.slack.com/" target="_blank">
                  <i className="fab fa-slack"></i>
                </a>

                <a href="https://www.meetup.com/Scrum-Master-Studio/" target="_blank">
                  <i className="fab fa-meetup"></i>
                </a>

                <a href="https://www.instagram.com/try_Scrum/" target="_blank">
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

            <div>
              <br />
            </div>
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
                <label for="formGroupExampleInput">Enter Your Name</label>

                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.email}</small>

                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <small style={{ color: "red" }}>{errors.checkbox}</small>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleCheck}
                  value={checked}
                  defaultChecked={checked}
                />

                <label className="form-check-label" for="exampleCheck1" style={{ marginTop: "-20px" }}>
                  I agree to the tryScrum's
                  <a className="btn" href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819" target="__blank" style={{ backgroundColor: "red", color: "white" }}>
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* <button
                type="submit"
                onClick={submitHandler}
                className="btn btn-primary"
              >
                send
              </button> */}
              {loader == 'loading' ? <button
                type="submit"
                onClick={submitHandler}
                className="btn btn-primary ml-0"
                disabled
              >send<div class="loader"></div></button> : <button
                type="submit"
                onClick={submitHandler}
                className="btn btn-primary ml-0"
              >send</button>}
              <small style={{ color: "green" }}>{submissionMessage}</small>
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
                <div style={{ display: "inline-block" }}>
                  <img src={lp0} alt="img" />
                </div>

                <div style={{ display: "inline-block", margin: "0 10px" }}>
                  <h4> Recent Posts</h4>
                </div>

                <br />
                <br />

                <div className="sidebar__post-wrap">

                  {data.allWpNews.nodes.map(value => {
                    return (
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
                    )
                  })}

                  {/* <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp1} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <Link to="/news/challenges-for-shared-accountability/">
                        <h4 className="sidebar__post-title">
                          Challenges for Shared Accountability
                        </h4>
                      </Link>
                     
                    </div>
                  </div>

                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp2} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <Link to="/news/winning-office-politics-3-tips-that-scrum-masters-can-use/">
                        <h4 className="sidebar__post-title">
                          Winning Office Politics – 3 tips that Scrum Masters
                          can use
                        </h4>
                      </Link>
                   
                    </div>
                  </div>

                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp3} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <Link to="/news/who-is-a-product-owner-anyway/">
                        <h4 className="sidebar__post-title">
                          Who is a Product Owner, anyway?
                        </h4>
                      </Link>
                  
                    </div>
                  </div>

                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src={lp4} alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <Link to="/news/guide-to-building-a-career-as-scrum-master/">
                        <h4 className="sidebar__post-title">
                          Guide to Building a Career as Scrum Master
                        </h4>
                      </Link>
                   
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

export default WhitepaperScalingMaster;