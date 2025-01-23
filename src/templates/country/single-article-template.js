import React, { useState } from "react"
import axios from "axios";
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import NavTwo from "../../components/header/NavIn";
import Footer from "../../components/footer/InFooter";
import { Link } from "gatsby";
import PageHeaderBlog from "../../components/PageHeaderArticles";
import lp0 from "../../assets/images/slider-icon.png";
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

export const query = graphql`
  query($id: String!) {

    allWpArticles(sort: {date: DESC}, limit: 4) {
      nodes {
        uri
   date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }

    wpArticles(id: { eq: $id }) {
        title
        content
      date(formatString: "MMMM DD, YYYY")
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



  const recentblogtitle = data.allWpArticles.nodes;

  console.log("recent", recentblogtitle)

  const title = data.wpArticles.seo.title;
  const metadesc = data.wpArticles.seo.metaDesc;

  const myuri = data.wpArticles.uri;
  console.log("blog uri is", myuri);

  const myid = data.wpArticles.id;
  // console.log("blog id is", myid);

  let disqusConfig = {
    url: `https://www.tryscrum.com${myuri}`,
    identifier: data.wpArticles.id,
    title: data.wpArticles.title,
  }

  const post = data.wpArticles;
  const posttitle = data.wpArticles.title;
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

        <NavTwo />
        <PageHeaderBlog title="Article" />

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


                      <div style={{ marginLeft: "5px", color: "black", fontFamily: "Roboto", fontWeight: 350 }} dangerouslySetInnerHTML={{ __html: post.author_name.author }} />

                    </div>
                    <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: post.date }} />

                    <h1 className="blog-one__title">
                      {post.title}
                    </h1>
                    <p className="blog-one__text makingblack">
                      <div className="dynamic-content-div lead" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </p>
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

          

                  </div>
                </div>

                <br />


              </div>
              <div className="col-lg-4">
                <div className="sidebar">

                  <div className="sidebar__single sidebar__post">

                    <div style={{ display: 'inline-block' }}>
                      <img src={lp0} alt="img" />
                    </div>

                    <div style={{ display: 'inline-block', margin: '0 10px' }} >
                      <h4> Recent Articles</h4>
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

                              

                              </h4>
                            </div>
                          </div>

                        )
                      })}
                     

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
