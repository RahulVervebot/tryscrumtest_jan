import React, { useState } from "react"
import axios from "axios";
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import NavTwo from "../../components/header/NavIn";
import Footer from "../../components/footer/InFooter";
import { Link } from "gatsby";
import PageHeaderBlog from "../../components/PageHeaderBlog";
import lp0 from "../../assets/images/slider-icon.png";
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';


export const query = graphql`
  query($id: String!) {

    allWpNews(sort: {date: DESC}, limit: 4) {
      nodes {
        uri
        title
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }

    wpNews(id: { eq: $id }) {
        title
        content
        uri
        id
        guid
        featuredImage {
         node {
            mediaItemUrl
          }
        }
        seo {
          title
          metaDesc
        }
        author_name {
          author
          tagName
        }
      }
  }
`

const PostTemplate = ({ data }) => {



  const recentblogtitle = data.allWpNews.nodes;

  console.log("recent", recentblogtitle)

  const title = data.wpNews.seo.title;
  const metadesc = data.wpNews.seo.metaDesc;

  const myuri = data.wpNews.uri;
  console.log("blog uri is", myuri);

  const myid = data.wpNews.id;
  // console.log("blog id is", myid);

  let disqusConfig = {
    url: `https://www.tryscrum.com${myuri}`,
    identifier: data.wpNews.id,
    title: data.wpNews.title,
  }

  const post = data.wpNews;
  const posttitle = data.wpNews.title;
  const media = post.featuredImage.node.mediaItemUrl;
  const postid = post.guid.slice(-4);

  //For NewsLetter
  const [stateSubscribeemail, setStateSubscribeEmail] = useState({ subscribeemail: "" });


  //For NewsLetter
  const handleInputChangeSubscribe = (event) => {
    const target = event.target;
    const value = target.value;

    setStateSubscribeEmail({
      subscribeemail: value
    });

  };

  //For NewsLetter
  const submitHandlerSubscribe = async (e) => {
    e.preventDefault();
    const url =
      "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3209/feedback";
    const formData = new FormData();
    formData.append("your-email", stateSubscribeemail.subscribeemail);

    debugger
    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };
    const res = await axios.post(url, formData, config);


    if (typeof res.data.message !== undefined) {
      alert(res.data.message);
      setStateSubscribeEmail({ subscribeemail: "" });
    } else {
      alert("please try again");
    }
    // console.log(res.data, "res");
  };


  // For Form Submit
  const [state, setState] = useState({ name: "", email: "", phone: "", message: "" });
  const [loader, setloader] = useState('');
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");

  // For Form Submit
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

  // For Form Submit
  const submitHandler = async (e) => {

    e.preventDefault();
    if (state.email && state.name && state.phone && state.message) {
      debugger;
      setloader('loading');
      const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3477/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name + " Blog " + posttitle);
      formData.append("your-phone", state.phone);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(url, formData, config);
      if (typeof res.data.message !== undefined) {
        //alert(res.data.message);
        setloader(res.data.message)
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", phone: "", message: "" });
      }
      else {
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
        // debugger;
        error = {
          ...error,
          email: "This is required",
        };
      }
      if (state.phone === "") {
        // debugger;
        error = {
          ...error,
          phone: "This is required",
        };
      }
      if (state.message === "") {
        // debugger;
        error = {
          ...error,
          message: "This is required",
        };
      }
      setErrors(error);
    }
    // console.log(res.data.message, "res");
  };





  // console.log("guid is", postid)

  const ACTION_URL = `https://tryscrumlive.vervebot.io/wp-json/wp/v2/comments`;

  const [textAreaValue, settextAreaValue] = useState('')
  const [formErrorMessage, setformErrorMessage] = useState(null)
  const [formIsSubmitting, setformIsSubmitting] = useState(false)
  const [formSubmittedSuccessfully, setformSubmittedSuccessfully] = useState(false)
  const [formSubmittedFailed, setformSubmittedFailed] = useState(false)


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')


  const handleSubmit = (evt) => {
    evt.preventDefault();

    // console.log("value in form post");
    // console.log(name);
    // console.log(email);
    // console.log(comment);

    // const {slug} = this.props;

    // navigate(`/${slug}#CommentsHeading`);

    // const [postId, name, email, website, comment] = evt.target.elements;

    const sendData = JSON.stringify({
      author_name: name,
      author_email: email,
      content: comment,
      post: postid.value,
      // author_url: website.value,
    });

    fetch(`https://tryscrumlive.vervebot.io/wp-json/wp/v2/comments?author_name=${name}&author_email=${email}&content=${comment}&post=${postid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
      //,
      // body: sendData,
    })
      .then(response => {
        if (response.ok === true) {
          setformIsSubmitting(false)
          setformSubmittedSuccessfully(true)
          settextAreaValue('')
          // this.setState({
          //   formIsSubmitting: false,
          //   formSubmittedSuccessfully: true,
          //   textAreaValue: '',
          // });
        }

        return response.json();
      })
      .then(object => {
        setformIsSubmitting(false)
        setformSubmittedFailed(true)
        setformErrorMessage(object.message)
        // this.setState({
        //   formIsSubmitting: false,
        //   formSubmittedFailed: true,
        //   formErrorMessage: object.message,
        // });
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error('Error:', error);
      });
  }




  const getUrl = `https://tryscrum.com/${myuri}`
  console.log(getUrl, "geturl")


  return (
    <div>
      <Layout pageTitle={title} metaDesc={metadesc} pageName={media} pageloc="individual">
        {/* <Helmet>
          <meta property='og:image' content={media} />
          <meta property="og:description" content={posttitle} />
          <meta property="og:description" content={posttitle} />
          <meta name="twitter:image" content={media} />
        </Helmet> */}

        {/* <Helmet>

        <html lang="en" />
    
        <meta name="google-site-verification" content="ylDTqVy_N1ll6kX2-LK_dN3K0WgfyVPfMFYCWCFoMkQ" />

        <title>The tryScrum Blogs</title>

        <meta charSet="UTF-8" />
        <meta name="description" content='Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility.' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16} />

        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Practical and actionable writings to help you succeed with Agile' />
        <meta property='og:description' content='Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility.' /> 
        <meta property='og:url' content='https://tryscrum.com' />
        <meta property='og:image' content={ blogsBanner } />

        <meta name="twitter:card" content="Professional Scrum Certification" />
        <meta property="twitter:domain" content="https://tryscrum.com" />
        <meta property="twitter:url" content="https://tryscrum.com" />
        <meta name="twitter:title" content='Practical and actionable writings to help you succeed with Agile' />
        <meta name="twitter:description" content='Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility.' />
        <meta name="twitter:image" content={ blogsBanner } /> 
        
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}

        <NavTwo />
        <PageHeaderBlog title="Blog" />

        <section className="blog-details">


          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src={media} alt="" />
                  </div>

                  <div className="blog-one__content text-center">


                    <div className="blog-one__meta">

                      {/* <a
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
                  </a> */}
                      {/* <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted By Admin"
                  > 
                  </a> */}


                      <div style={{ marginLeft: "5px", color: "black", fontFamily: "Roboto", fontWeight: 350 }} dangerouslySetInnerHTML={{ __html: post.author_name.author }} />

                    </div>

                    <h1 className="blog-one__title">
                      {post.title}
                    </h1>
                    <p className="blog-one__text makingblack">
                      <div className="dynamic-content-div lead" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </p>

                    {/* <TalkyardCommentsIframe discussionId={myuri} /> */}

                    {/* Old Comments System */}
                    {/* <CommentCount config={disqusConfig} placeholder={'...'} />
                <Disqus config={disqusConfig} /> */}



                    {/* <div>
                  <h2 id="CommentsHeading">Post a comment</h2>
                 
                  <form onSubmit={handleSubmit.bind(this)}>
                      <input type="name" id="postid" value={postid} />
                      <div>
                        <label htmlFor="name">Name*</label>
                        <input id="name" type="text" required disabled={formIsSubmitting} onChange={evt => setName(evt.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="email">Email*</label>
                        <input
                          id="email"
                          type="email"
                          required
                          disabled={formIsSubmitting}
                          onChange={evt => setEmail(evt.target.value)}
                        />
                      </div>
                   
                      <div>
                        <label htmlFor="comment">Comment*</label>
                        <textarea
                          id="comment"
                          rows="10"
                          required
                          disabled={formIsSubmitting}
                          onChange={evt => setComment(evt.target.value)}
                          value={comment}
                        />
                      </div>
                      <input type="submit" value="Submit" />
                    
                  </form>
              </div> */}



                  </div>
                </div>


                <div className="share-block">

                  <div className="left-block">

                    <p dangerouslySetInnerHTML={{ __html: post.author_name.tagName }} />

                  </div>

                  <div className="social-block">

                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${getUrl}#`} title="share to facebook" target="__blank">
                      <i className="fab fa-facebook-square"></i>
                    </a>

                    <a href={`https://twitter.com/intent/tweet?text=${getUrl}/#`} title="share to twitter" target="__blank">
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a href={`https://www.linkedin.com/cws/share?url=${getUrl}/#`} title="share to linkedin" target="__blank">
                      <i className="fab fa-linkedin"></i>
                    </a>

                    {/* <a href="https://tryscrumstudio.slack.com/" target="__blank">
                      <i className="fab fa-slack"></i>
                    </a>

                    <a href="https://www.meetup.com/Scrum-Master-Studio/" target="__blank">
                      <i className="fab fa-meetup"></i>
                    </a>

                    <a href="https://www.instagram.com/try_Scrum/" target="__blank">
                      <i className="fab fa-instagram"></i>
                    </a> */}

                  </div>
                </div>

                <br />



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

                {/* <h2 className="blog-details__content-title">Leave a Comment</h2>
            <form action="#" className="reply-form">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="reply-form__field"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="reply-form__field"
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write message"
                    className="reply-form__field"
                  ></textarea>
                  <button className="reply-form__btn thm-btn" type="submit">
                    Submit Comment
                  </button>
                </div>
              </div>
            </form> */}

              </div>
              <div className="col-lg-4">
                <div className="sidebar">

                  <div className="sidebar__single sidebar__post">

                    <div style={{ display: 'inline-block' }}>
                      <img src={lp0} alt="img" />
                    </div>

                    <div style={{ display: 'inline-block', margin: '0 10px' }} >
                      <h4> Recent Posts</h4>
                    </div>


                    <br />
                    <br />



                    <div className="sidebar__post-wrap">

                      {recentblogtitle.map(value => {
                        return (
                          <div className="sidebar__post__single">
                            <div className="sidebar__post-image">


                              <div className="inner-block">

                                <img src={value.featuredImage.node.mediaItemUrl} alt="Awesome alter text" />
                                {/* <img src={lp1} alt="Awesome alter text" /> */}

                              </div>
                            </div>
                            <div className="sidebar__post-content">
                              <h4 className="sidebar__post-title">

                                <Link to={value.uri} >
                                  {value.title}
                                </Link>

                                {/* <Link to="/blogs/challenges-for-shared-accountability/" >
                          Challenges for Shared Accountability    
                      </Link>   */}

                              </h4>
                            </div>
                          </div>

                        )
                      })}
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


                  <div className="course-details__price">
                    <p className="course-details__price-text">Subscribe To Our NewsLetter</p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >
                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Enter your email" name="email" value={stateSubscribeemail.subscribeemail} onChange={handleInputChangeSubscribe} />


                      </div>

                      <button type="submit" className="btn btn-danger" onClick={submitHandlerSubscribe}>Subscribe</button>

                    </form>

                  </div>


                  <div className="course-details__price">
                    <p className="course-details__price-text">Request More Info </p>
                    <br />

                    <form
                      action="#"
                      method="POST"
                    >

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Your Name" name="name" value={state.name} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.name}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email Address" name="email" value={state.email} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>

                      <div className="form-group">

                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={state.phone} onChange={handleInputChange} />
                        <small style={{ color: "red" }}>{errors.phone}</small>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Message"
                          name="message"
                          value={state.message}
                          onChange={handleInputChange}
                        />
                        <small style={{ color: "red" }}>{errors.message}</small>

                      </div>

                      {/* <button type="submit" className="btn btn-primary" onClick={submitHandler} >Submit</button> */}
                      {loader == 'loading' ? <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                        disabled
                      >Submit<div class="loader"></div></button> : <button
                        type="submit"
                        onClick={submitHandler}
                        className="btn btn-primary ml-0"
                      >Submit</button>}
                      <small style={{ color: "green" }}>{submissionMessage}</small>

                    </form>

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
                    <a href="#none">Business,</a>
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
        <Footer />

      </Layout>

    </div>

  )

}

export default PostTemplate
