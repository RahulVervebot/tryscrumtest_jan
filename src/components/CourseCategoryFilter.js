import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Carousel } from "react-bootstrap";

const CourseOne = (props) => {

  const data = useStaticQuery(graphql`
    query Category {
        allWpPost {
        nodes {
            categories {
            nodes {
                name
                uri
              }
            }
         title    
         uri
         featuredImage {
            node {
              mediaItemUrl
            }
          }
          acfcoursePage {
            options {
               country
               customUrl
             }
            }
        }
      }
    }
  `)

  if (props.title === "Professional Scrum Master (PSM I)") {

    return (
      <div>

        <div className="text-center">
          <h3 className="course-details__title">
            Relevant Courses
          </h3>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/professional-scrum-master-ii/" || value.uri === "/professional-scrum-with-kanban/" || value.uri === "/icagile/" || value.uri === "/icagile-enterprise-coaching/" || value.uri === "/coaching-agile-transitions/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-70"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>

      </div>
    )
  }

  else if (props.title === "Advanced Scrum Master (PSM II)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/professional-scrum-master/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "/icagile/" || value.uri === "/icagile-enterprise-coaching/" || value.uri === "/coaching-agile-transitions/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  else if (props.title === "Professional Scrum Product Owner(PSPO I)") {

    return (
      <div>

        <div className="text-center">
          <h3 className="course-details__title">
            Relevant Courses
          </h3>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/professional-scrum-product-owner/" || value.uri === "/professional-scrum-product-owner-advanced/" || value.uri === "/icagile-product-management/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>

      </div>
    )
  }

  else if (props.title === "Advanced Product Owner (PSPO-A)") {

    return (
      <div>

        <div className="text-center">
          <h3 className="course-details__title">
            Relevant Courses
          </h3>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/professional-scrum-product-owner/" || value.uri === "/icagile-product-management/" || value.uri === "/professional-scrum-with-kanban/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  //icp-acc
 else if (props.title === "Certified Professional Agile Coaching (ICP-ACC)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/coaching-agile-transitions/" || value.uri === "/icagile-enterprise-coaching/" || value.uri === "/certified-agile-leadership-combo/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  //icp-ent
  else if (props.title === "Enterprise Transformation(ICP-ENT)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/coaching-agile-transitions/" || value.uri === "/icagile/" || value.uri === "/certified-agile-leadership-combo/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  //icp-cat
 else if (props.title === "Coaching Agile Transitions (ICP-CAT)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/icagile-enterprise-coaching/" || value.uri === "/icagile/" || value.uri === "/certified-agile-leadership-combo/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  // PSM
  else if (props.title === "Professional  Scrum with Kanban (PSK)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/professional-scrum-master-ii/" || value.uri === "/professional-scrum-master/" || value.uri === "/icagile/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  // SPS
 else if (props.title === "Scaled Professional Scrum (SPS)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/professional-scrum-master-ii/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "/professional-scrum-product-owner-advanced/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  // Cal-Combo
 else if (props.title === "Certified Agile Leadership for Organization(CAL-O)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/certified-agile-leadership-essentials/" || value.uri === "/certified-agile-leadership-combo/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  // Cal-E
  else if (props.title === "Certified Agile Leadership Essentials(CAL-E)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/certified-agile-leadership-essentials/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "certified-agile-leadership-for-teams-cal-t/") {

              return (
                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

  // Cal-O
 else if (props.title === "Certified Agile Leadership for Organization(CAL-O)") {

    return (
      <div>

        <div className="text-center">
          <h1 className="course-details__title">
            Relevant Courses
          </h1>
        </div>


        <Carousel>
          {data.allWpPost.nodes.map(value => {

            if (value.uri === "/certified-agile-leadership-essentials/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "certified-agile-leadership-for-teams-cal-t/") {

              return (

                <Carousel.Item key={value.uri} interval={2000}>
                  <Link to={value.uri} itemProp="url" >

                    <img
                      className="d-block w-100"
                      src={value.featuredImage.node.mediaItemUrl}
                      alt="Blogs Images"
                    />

                  </Link>

                  <Carousel.Caption>

                  </Carousel.Caption>

                  <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

                </Carousel.Item>

              )
            }
          })
          }
        </Carousel>


      </div>
    )
  }

//CAl 1
else if (props.title === "Certified Agile Leadership -I") {

  return (
    <div>

      <div className="text-center">
        <h3 className="course-details__title">
          Relevant Courses
        </h3>
      </div>

      <Carousel>
        {data.allWpPost.nodes.map(value => {

          if (value.uri === "/certified-agile-leadership-essentials/" || value.uri === "/certified-agile-leadership-combo/" || value.uri === "certified-agile-leadership-for-teams-cal-t/") {

            return (

              <Carousel.Item key={value.uri} interval={2000}>
                <Link to={value.uri} itemProp="url" >

                  <img
                    className="d-block w-100"
                    src={value.featuredImage.node.mediaItemUrl}
                    alt="Blogs Images"
                  />

                </Link>

                <Carousel.Caption>

                </Carousel.Caption>

                <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>

              </Carousel.Item>

            )
          }
        })
        }
      </Carousel>

    </div>
  )
}

else {

    return (
      <div>
        <div className="text-center">
          <h3 className="course-details__title">
            Relevant Courses
          </h3>
        </div>
        
        <Carousel>
        
          {data.allWpPost.nodes.map(value => {
            return (
            
              <Carousel.Item key={value.uri} interval={2000}>
            {  value.acfcoursePage.options.customUrl ?
                <Link to={`/${value.acfcoursePage.options.customUrl}/`} itemProp="url" >

                  <img className="d-block w-100"
                    src={value.featuredImage.node.mediaItemUrl}
                    alt="Blogs Images"
                  />

                </Link>
:
<Link to={value.uri} itemProp="url" >

<img className="d-block w-100"
  src={value.featuredImage.node.mediaItemUrl}
  alt="Blogs Images"
/>

</Link>
            }
                <Carousel.Caption>

                </Carousel.Caption>
                { value.acfcoursePage.options.customUrl ?
                <Link to={`/${value.acfcoursePage.options.customUrl}/`} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>
               
                :
                <Link to={value.uri} itemProp="url" className="btn btn-danger explore-btn">Explore</Link>
                }
              </Carousel.Item>

            )


          })
          }
        </Carousel>
      </div>
    )
  }


};
export default CourseOne;