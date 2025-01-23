import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "gatsby";

import psm from "../assets/images/try-Scrum-imgaes/course-img/psm.jpg";
import psm2 from "../assets/images/try-Scrum-imgaes/course-img/psm2.jpg";
import psm3 from "../assets/images/try-Scrum-imgaes/course-img/pspo.jpg";
import psm4 from "../assets/images/try-Scrum-imgaes/course-img/pspo-avd.jpg";
import psm5 from "../assets/images/try-Scrum-imgaes/course-img/pal-e.jpg";
import psm6 from "../assets/images/try-Scrum-imgaes/course-img/psk.jpg";
import psm8 from "../assets/images/try-Scrum-imgaes/course-img/sps.jpg";
import psm9 from "../assets/images/try-Scrum-imgaes/course-img/icp-acc.jpg";

const CourseOne = () => {
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
      el: ".swiper-pagination",
      clickable: true,
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
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <>
      {/* <section className="course-one__top-title home-one"> */}
      
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

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    {/* <img src={course1} alt="" className="course-one__image_dimension"/> */}
                      <img src={psm} alt=""/> 
                    {/* <i className="far fa-heart"></i> */}
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      development
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team1} alt="" />
                      by <a href="/teacher-details">Lou Guerrero</a>
                    </div> */}
                    
                      <Link to="/professional-scrum-master/">
                        <h2 className="course-one__title">
                          Professional Scrum Master™
                        </h2>    
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/professional-scrum-master/" className="course-one__link-one">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-2">
                  <div className="course-one__image">
                    <img src={psm2} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      It & Software
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team2} alt="" />
                      by <a href="/teacher-details">Cora Diaz</a>
                    </div> */}
                    
                      <Link to="/professional-scrum-master-ii/">
                      <h2 className="course-one__title">
                        Professional Scrum Master™ II
                       </h2> 
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/professional-scrum-master-ii/" className="course-one__link-two">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-3">
                  <div className="course-one__image">

                    <img src={psm3} alt="" />
                    
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      marketing
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team3} alt="" />
                      by <a href="/teacher-details">Ruth Becker</a>
                    </div> */}
                    
                      <Link to="/professional-scrum-product-owner/">
                      <h2 className="course-one__title">
                        Professional Scrum Product Owner™
                       </h2> 
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/professional-scrum-product-owner/" className="course-one__link-three">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-4">
                  <div className="course-one__image">
                    <img src={psm4} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      Photography
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team4} alt="" />
                      by <a href="/teacher-details">Ernest Rodriquez</a>
                    </div> */}
                    
                      <Link to="/professional-scrum-product-owner-advanced/">
                      <h2 className="course-one__title">
                        Professional Scrum Product Owner™ - Advanced
                      </h2>  
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/professional-scrum-product-owner-advanced/" className="course-one__link-four">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-5">
                  <div className="course-one__image" >

                    <img src={psm5} alt="" />
                    
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      marketing
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team5} alt="" />
                      by <a href="/teacher-details">Isabella Stanley</a>
                    </div> */}
                    
                      <Link to="/professional-agile-leadership-essentials/">
                      <h2 className="course-one__title">
                        Professional Agile Leadership Essentials™
                      </h2>  
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/professional-agile-leadership-essentials/" className="course-one__link-five">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-6">
                  <div className="course-one__image">
                    <img src={psm6} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      Health & Fitness
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team6} alt="" />
                      by <a href="/teacher-details">Katherine Collins</a>
                    </div> */}
                    
                      <Link to="/professional-scrum-with-kanban/">
                      <h2 className="course-one__title">
                        Professional Scrum™ with Kanban
                      </h2>  
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/professional-scrum-with-kanban/" className="course-one__link-six">
                      View Course
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src={psm7} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      development
                    </a> 
                     <div className="course-one__admin">
                      <img src={team1} alt="" />
                      by <a href="/teacher-details">Lou Guerrero</a>
                    </div> 
                    <h2 className="course-one__title">
                      <a href="/course-details">Professional Scrum™ with UX</a>
                    </h2>
                     <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> 
                    <a href="#none" className="course-one__link">
                      View Course
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="item">
                <div className="course-one__single color-2">
                  <div className="course-one__image">
                    <img src={psm8} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      It & Software
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team2} alt="" />
                      by <a href="/teacher-details">Cora Diaz</a>
                    </div> */}
                    
                      <Link to="/scaled-professional-scrum/">
                      <h2 className="course-one__title">
                        Scaled Professional Scrum™ with Nexus
                      </h2>  
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/scaled-professional-scrum/" className="course-one__link-seven">
                      View Course
                    </a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="course-one__single color-3">
                  <div className="course-one__image">
                    <img src={psm9} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    {/* <a href="#none" className="course-one__category">
                      marketing
                    </a> */}
                    {/* <div className="course-one__admin">
                      <img src={team3} alt="" />
                      by <a href="/teacher-details">Ruth Becker</a>
                    </div> */}
                   
                      <Link to="/icagile/">
                        <h2 className="course-one__title">
                          Certified Professional Agile Coaching
                        </h2>  
                      </Link>
                    
                    {/* <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> */}
                    <br/>
                    <a href="/icagile/" className="course-one__link-eight">
                      View Course
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="item">
                <div className="course-one__single color-3">
                  <div className="course-one__image">
                    <img src={psm10} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a> 
                    <div className="course-one__admin">
                      <img src={team3} alt="" />
                      by <a href="/teacher-details">Ruth Becker</a>
                    </div> 
                    <h2 className="course-one__title">
                      <a href="/course-details">
                        Management 3.0
                      </a>
                    </h2>
                     <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.8</span>
                      <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div> 
                    <a href="#none" className="course-one__link">
                      View Course
                    </a>
                  </div>
                </div>
              </div> */}

            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default CourseOne;
