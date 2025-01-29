import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
// import BlogArchive from "../components/BlogArchiveHeader";
import blogImg from "../assets/images/socialbanners/blogs.png";
import "../assets/css/searchbox.css"
import Tagdata from "../components/Tagdata";
import PageBanner from "../components/ArticleBanner";
import banner from "../assets/images/blog-banner.jpg";


const BlogIndex = ({ data }) => {
  const returned = data.allWpArticles.nodes
  const [showhide, showhideValue] = useState("");
  const [showhideTag, showhideTagvalue] = useState("");
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(returned);

  ////filteration data by tag//////
  const tagAllData = data.allWpArticles.nodes
  // console.log("tagAllData", tagAllData)

  const tagNewData = tagAllData.map(post => post.tags)
  // console.log("tagNewData", tagNewData)

  const tagNewData2 = tagNewData.map(post => post.nodes)
  // console.log("tagNewData2", tagNewData2)

  const filteredTagVal = [];

  const tagFilterLogic = tagNewData2.map(post => {
    // console.log("post", post.length);
    for (var i = 0; i < post.length; i++) {

      // console.log("post[i]", post[0]);
      filteredTagVal.push(post[0]);

    }
  })

  // console.log(filteredTagVal)

  /////remove repetiton in aaray
  let duplicate = filteredTagVal.map((post) => post.name)

  function removeDuplicates(updatedData) {
    return [...new Set(updatedData)]
  }

  const newData = removeDuplicates(duplicate)


  const filtered = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = returned.filter((post) => {
        return post.title.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(returned);
    }

    setName(keyword);
  };


  const setshowMore = () => {
    showhideTagvalue(s => !s)
  }






  const myTitle = "Agile Articles & Guides for Learners"
  const myDesc = "Explore comprehensive Agile articles and guides designed for learners. Master Agile practices, frameworks, and certifications with expert insights."




  return (

    <>

      <Layout pageTitle={myTitle} metaDesc={myDesc} pageName={blogImg} pageloc="individual">
        <NavTwo />
        <div className="blog-scroll">
          <PageBanner title_1="Articles" title="Articles" image={banner} uri={"articles"} padding={8} icon={<i class="fa fa-search" aria-hidden="true"></i>} search={() => showhideValue(s => !s)}/>
          <div className={showhide ? "drawer2" : "drawer"} >
            <div id="search" class="searchbox">
              <div class="containers text-center">
                <h3>Search Articles</h3>
                <div class="content-narrow">
                  <div className='input-box'>
                    <input
                      value={name}
                      onChange={filtered}
                      placeholder="e.g. scrum"
                      title="Search"
                      type="search"
                    />
                    <div className='searchbutton'>
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* <Tagdata /> */}
          <br />
          <ol style={{ listStyle: `none` }} className="">
            <section className="about-prokanban ">
              <div className="container" >
                <div className="row">
                  {/* <ol style={{ listStyle: `none` }}> */}
                  {foundUsers && foundUsers.length > 0 ? (
                    <>
                      {foundUsers.map((post) => {

                        const title = post.title;
                        const uri = post.uri;
                        const media = post.featuredImage.node.mediaItemUrl;

                        // console.log("vgccc", .length);

                        return (
                          <div className="col-lg-4 ">
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
                                <div style={{padding:"5px"}}></div>

                                <p className="blog-one__text newcontent" >
                                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} style={{fontWeight:"500"}} />
                                </p>

                                <div style={{padding:"10px"}}></div>
                                <div className="row readmore">

                                  <div className="col-lg-4">

                                    <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: post.date }} >
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
                    </>

                  ) : (
                    <>
                      {returned.map((post) => {

                        const title = post.title;
                        const uri = post.uri;
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
                    </>
                  )}
                </div>
              </div>
            </section>
          </ol>
</div>
 <Footer />
</Layout>
    </>
  )

}

export default BlogIndex


export const pageQuery = graphql`
  query WordPressPostArchive1 {
    allWpArticles(sort: {fields: date, order: DESC}){
      nodes {
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










