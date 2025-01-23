import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
// import BlogArchive from "../components/BlogArchiveHeaderFilter";


class FilterBlogs extends React.Component {

  constructor(props){ 
    // Set initial state
    super(props);

    // let clicking = this.props.location.state.clicked
     
    // this.state = {
    //   duplicate: false, noDuplicate: false, clickval: clicking
    // };
   
    this.state = {
      duplicate: false, noDuplicate: false
    };

  
    // if(this.props.location.state.tag === "duplicate"){
    //   this.setState({ duplicate: true });
    // }

    // if(this.props.location.state.tag === "noDuplicate"){
    //   this.setState({
    //     noDuplicate: !noDuplicate
    //   })  
    // }

  } 


  componentDidMount() {


    if(this.props.location.state.tag == "duplicate"){
      // console.log("this.props.location.state.duplicateAllValues", this.props.location.state.duplicateAllValues);
      this.setState({ duplicate: true });
    }

    if(this.props.location.state.tag == "noDuplicate"){
      // console.log("this.props.location.state.noDuplicateAllValues", this.props.location.state.finalArraynoDuplicateAllValue);
      this.setState({ noDuplicate: true }); 
    }

  }


  render() {

    // console.log("clickedval",this.props.location.state.clickedval);

    // console.log("this.props.location.state.tag", this.props.location.state.tag);
    // console.log("duplicate state", this.state.duplicate);
    // console.log("no duplicate state", this.state.noDuplicate);

    // if(this.props.location.state.tag === "duplicate"){
    //   this.setState({ duplicate: true });
    //   this.props.location.state.duplicateAllValues.map(val => {
    //     console.log("Props val received in duplicate", val);
    //   })
    // }

    // if(this.props.location.state.tag === "noDuplicate"){
    //   this.props.location.state.noDuplicateAllValues.map(val => {
    //     console.log("Props val received in nonduplicate", val);
    //   })
    // }



    return (
         <>

          <Layout pageTitle="Practical and actionable writings to help you succeed with Agile"  metaDesc="Explore our blogs to gain practical and actionable tips from our coaches to help you expand your repertoire about Agility." pageName="blogs"> 
          
          <NavTwo />

          <section className="inner-banner_blogarchive_filter">
            <div className="container">
              <ul className="list-unstyled thm-breadcrumb">
                
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li className="active">
                  <Link to="/blogs">Blogs</Link> 
                </li>  
                
                { this.state.noDuplicate ?

                 <li className="active">
                   Tag: {this.props.location.state.clickedval}
                 </li> 
                
                : null }

                { this.state.duplicate ?

                  <li className="active">
                    Tag: {this.props.location.state.clickedval}
                  </li> 

                : null }
                 

              </ul>
              <h2 className="inner-banner__title_all_blogs">The tryScrum Blogs</h2>
            </div>
          </section>

          {/* <BlogArchive title="The tryScrum Blogs" tag={this.state.tagname}/>   */}
        
            <br/>

          <ol style={{ listStyle: `none` }}>          
            <section className="about-prokanban">        
              <div className="container">
                <div className="row">

                   {/* Duplicate List */}
                  {this.state.duplicate ? 
                   this.props.location.state.duplicateAllValues.map(val => {

                          // console.log("Props val received in duplicate", val);

                          const title = val.title;
                          const uri = val.uri;
                          const media = val.media;
                          const excerpt = val.excerpt;
                          const date = val.date;

                          // console.log("title", title);

                          // console.log("uri", uri);

                          // console.log("media", media);

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
                                  <div  dangerouslySetInnerHTML={{ __html: excerpt }} />
                                </p>
                                <div className="row readmore">

                                  <div className="col-lg-4">
                                  
                                      <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: date }}>
                                      
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

                    })
                   : null
                  }
                  
                  {/* Non Duplicate List */}
                  {this.state.noDuplicate ? 
                    this.props.location.state.finalArraynoDuplicateAllValue.map(val => {

                          // console.log("Props val received in noduplicate", val);

                          const title = val.title;
                          const uri = val.uri;
                          const media = val.media;
                          const excerpt = val.excerpt;
                          const date = val.date;

                          // console.log("title", title);

                          // console.log("uri", uri);

                          // console.log("media", media);

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
                                  <div  dangerouslySetInnerHTML={{ __html: excerpt }} />
                                </p>
                                <div className="row readmore">

                                  <div className="col-lg-4">
                                  
                                      <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: date }}>
                                      
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

                    })
                   : null
                  }
              {/* {returned.map(post => {

                const title = post.title;
                const uri = post.uri;
                const media = post.featuredImage.node.mediaItemUrl;
                console.log(media);

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
                        <div  dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                      </p>
                      <div className="row readmore">

                        <div className="col-lg-4">
                        
                            <p className="blog-one__link" dangerouslySetInnerHTML={{ __html: post.date }}>
                            
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
              })} */}

              </div>
              </div>  
            </section>     
        </ol>  

            <Footer />
            </Layout>

    </>
    )
  }
}

export default FilterBlogs








