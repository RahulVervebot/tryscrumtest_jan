import React ,{useState} from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import Footer from "../../components/footer/InFooter";
import BlogArchive from "../../components/BlogArchiveHeader";
import blogImg from "../../assets/images/socialbanners/blogs.png";
import "../../assets/css/searchbox.css"
import Tagdata from "../../components/Tagdata";
import banner from "../../assets/images/blog-banner.jpg";
import PageBanner from "../../components/PageBanner";

const Tag = ({ data }) => {
  const [showhide, showhideValue] = useState("");
  const returned = data.allWpNews.nodes
  const myTitle = "Practical and actionable writings to help you succeed with Agile"
  const myDesc = "Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility."

  return (

    <>

      {/* <Layout pageTitle="Practical and actionable writings to help you succeed with Agile"  metaDesc="Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility." pageName="blogs">  */}

      <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={blogImg} pageloc="individual" >

        <NavTwo />
        <PageBanner title="The tryScrum blogs" image={banner} uri={"blogs"} padding={35}  />
        <Tagdata />
        

        <br />

        <ol style={{ listStyle: `none` }}>
          <section className="about-prokanban">
            <div className="container">
              <div className="row">

                {returned.map((post) => {

                  const title = post.title;
                  const uri = "in/"+post.uri;
                  const media = post.featuredImage.node.mediaItemUrl;

                  // console.log("vgccc", .length);

                  return (
                    <div className="col-lg-4">
                      <div className="blog-one__single row-eq-height">

                        <div className="blog-one__image">
                          <Link to={uri}>
                            <img src={media} alt="Blogs Images" className="img-fluid" />
                          </Link>
                        </div>

                        <div className="blog-one__content text-centerhome">


                          <Link to={uri}>
                            <h1 className="blog-one__title heading4">
                              <div dangerouslySetInnerHTML={{ __html: title }} />
                            </h1>
                          </Link>

                          <p className="blog-one__text newcontent" >
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                          </p>
                          <div className="row readmore">

                            <div className="col-lg-4">

                              <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: post.date }}>
                                {/* 16-07-2021 */}
                              </p>

                            </div>

                            <div className="col-lg-4">
                            </div>

                            <div className="col-lg-4">
                              <Link to={uri} itemProp="url" >
                                <p className="blog-one__link readbutton" >
                                  Read
                                </p>
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  )
                })}

              </div>
            </div>
          </section>
        </ol>

        <Footer />
      </Layout>

    </>
  )

}

export default Tag



export const query = graphql`
query WordPressPostArchive12($name: String) {
  allWpNews(sort: {fields: date, order: DESC}, filter: {tags: {nodes: {elemMatch: {name: {eq: $name}}}}}) {
    nodes {
      author_name {
        tagName
        author
        fieldGroupName
        filterByTagName
      }
      excerpt
      uri
      date(formatString: "MMMM DD, YYYY")
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      tags {
        nodes {
          name
        }
      }
    }
  }

}
`







