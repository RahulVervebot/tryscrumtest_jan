import React from "react";
import Swiper from "react-id-swiper";

import { useStaticQuery, graphql, Link } from "gatsby"


const CourseOne = () => {

  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          uri
          title
          id
          excerpt
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          acfcoursePage {
            options {
              certificate
              certificationBody
              colour
              curriculum
              duration
              feeStructure
              fieldGroupName
              guidlineUrl
              included
              instructions
              keywords
              logisticsAndPrerequisites
              pduScrumAllianceSeus
              prerequisites
              thecourse
              trustPilotRating
              video
              whoCanAttend
              why
            }
            course1 {
              country
              date1
              enrolltext
              fieldGroupName
              location
              position
              regularPrice
              salePrice
              time1
              trainer
              url
            }
            course2 {
              country
              date1
              enrolltext
              fieldGroupName
              location
              position
              regularPrice
              salePrice
              time1
              trainer
              url
            }
            course3 {
              country
              date1
              enrolltext
              fieldGroupName
              location
              position
              regularPrice
              salePrice
              time1
              trainer
              url
            }
            course4 {
              country
              date1
              enrolltext
              fieldGroupName
              location
              position
              regularPrice
              salePrice
              time1
              trainer
              url
            }
            course5 {
              country
              date1
              enrolltext
              fieldGroupName
              location
              position
              regularPrice
              salePrice
              time1
              trainer
              url
            }
          }
        }
      }
    }
  `)











  console.log(data, "")







  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      // type: 'fraction',
      // type: 'bullets',
      clickable: true,
      dynamicBullets: true
    },

    // Responsive breakpoints
    breakpoints: {

      1024: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <>
      <section className="py-5">

        <div className="block-title mb-0">
          <h2 className="block-title__title">
            Our Courses

          </h2>
        </div>

        {/*<div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Explore our <br />
              popular courses
            </h2>
          </div>
          </div>
         <div className="course-one__top-title__curve"></div> */}
        {/* </section> */}

        <section className="py-0">
          <div className="container">

            {/* <div className="row">
            <div className="col">
              <div className="course-one__carousel"> */}

            <Swiper {...params}>

              {data.allWpPost.nodes.map(post => {
                const title = post.title;
                const uri = post.uri;
                const media = post.featuredImage.node.mediaItemUrl
                console.log("post", post);

                return (
                  <div className="item py-5" style={{ display:"flex",flexDirection:"row",justifyContent:"space-around" }}>
                    <div className="card rounded-0 border courseone_card" style={{boxShadow: "none" }}>
                      <img className="card-img-top" src={media} width="100%" alt="Card image cap" />
                      <div className="card-body">
                        <a href={post.acfcoursePage.options.trustPilotRating} className="trust-pilot" target="__blank">
                          TrustPilot Rating
                        </a>
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <h5 className="card-title text-dark home-course-title">{post.title}</h5>
                        <hr />
                        <a href={uri}>
                          <p className="course-one__link_course home-courses">
                            Read About Course
                          </p>
                        </a>
                      </div>
                      {/* <span className="course-one__count">
                        <a href={post.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                          TrustPilot Rating
                        </a>
                      </span> */}
                    </div>
                    {/* <div className="course-one__image" >

                    <Link to={uri}>
                      <img src={media} alt="Course Image" />
                    </Link>
                    <i className="far fa-heart"></i>
                  </div> */}

                    {/* <div className="course-one__content">





                    <Link to={uri}>
                      <h1 className="course-one__title">

                        {post.title}
                      </h1>
                    </Link>

                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">
                        <a href={post.acfcoursePage.options.trustPilotRating} className="course-one__category" target="__blank">
                          TrustPilot Rating
                        </a>
                      </span>
                    </div>
                    <div className="course-one__meta">

                    </div>

                    <a href={uri} >
                      <p className="course-one__link_course">
                        Read About Course
                      </p>
                    </a>
                  </div> */}
                  </div>
                )
              })}

            </Swiper>
          </div>
          {/* </div>
          </div>
        </div> */}
        </section>
      </section>
    </>
  );
};
export default CourseOne;
