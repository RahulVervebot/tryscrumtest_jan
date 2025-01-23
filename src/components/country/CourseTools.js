import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css"
import { Link } from "gatsby";
import psm from "../../assets/images/try-Scrum-imgaes/course-img/agile-combo.png";
import psm2 from "../../assets/images/try-Scrum-imgaes/course-img/icp-acc-2.jpg";
import psm3 from "../../assets/images/try-Scrum-imgaes/course-img/icp-ent.jpg";
import psm4 from "../../assets/images/try-Scrum-imgaes/course-img/icp-cat.jpg";


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
      
      <div className="block-title mb-0">
        
      <h2 className="block-title__title" style={{marginTop: "-100px"}}>
              
              Related Courses
    
      </h2> 

      </div>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                      <img src={psm} alt=""/> 
                  </div>
                  <div className="course-one__content">
                  
                      <a target="_blank" href="/in/certified-agile-leadership-combo/" >
                        <h2 className="course-one__title">
                          Certified Agile Leadership - Combination
                        </h2>    
                      </a>
                    
                 
                    <br/>
                    <a href="/in/certified-agile-leadership-combo/" target="_blank" className="course-one__link-one">
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
                    
                      <a target="_blank" href="/in/icagile/">
                      <h2 className="course-one__title">
                        Certified Professional Agile Coaching (ICP-ACC)
                       </h2> 
                      </a>
                    
                 
                    <br/>
                    <a href="/in/icagile/" target="_blank" className="course-one__link-two">
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
                    
                      <a target="_blank" href="/in/icagile-enterprise-coaching/">
                      <h2 className="course-one__title">
                        Enterprise Transformation (ICP-ENT)
                       </h2> 
                      </a>
                    
                
                    <br/>
                    <a href="/icagile-enterprise-coaching/" target="_blank" className="course-one__link-two">
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
                   
                    
                      <a target="_blank" href="/in/coaching-agile-transitions/">
                      <h2 className="course-one__title">
                        Coaching Agile Transitions (ICP-CAT)
                      </h2>  
                      </a>
                    
                    <br/>
                    <a href="/in/coaching-agile-transitions/" target="_blank" className="course-one__link-two">
                      View Course
                    </a>
                  </div>
                </div>
              </div>

            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default CourseOne;
