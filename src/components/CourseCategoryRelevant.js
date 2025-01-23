import React from "react";
import { Link } from "gatsby";
import { Carousel } from "react-bootstrap";

const CourseOne = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="course-details__title">Relevant Courses</h3>
      </div>
      
      <Carousel>
        {/* Carousel Item 1 */}
        <Carousel.Item interval={2000}>
          <Link to="/certifications/agile/scrum/product-owner/certified-scrum-product-owner-cspo/" itemProp="url">
            <img
              className="d-block w-100"
              src="https://tryscrumlive.vervebot.io/wp-content/uploads/2024/10/CSPO.png"
              alt="CSPO"
            />
          </Link>
          <Link to="/certifications/agile/scrum/product-owner/certified-scrum-product-owner-cspo/" itemProp="url" className="btn btn-danger explore-btn">
            Explore
          </Link>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item interval={2000}>
          <Link to="/certifications/agile/scrum/product-owner/advanced-certified-scrum-product-owner-acspo/" itemProp="url">
            <img
              className="d-block w-100"
              src="https://tryscrumlive.vervebot.io/wp-content/uploads/2023/05/image-3.png"
              alt="ACSPO"
            />
          </Link>
          <Link to="/certifications/agile/scrum/product-owner/advanced-certified-scrum-product-owner-acspo/" itemProp="url" className="btn btn-danger explore-btn">
            Explore
          </Link>
        </Carousel.Item>

        {/* Carousel Item 3 */}
        <Carousel.Item interval={2000}>
          <Link to="/certifications/agile/scrum/leadership/certified-agile-leadership-ii/" itemProp="url">
            <img
              className="d-block w-100"
              src="https://tryscrumlive.vervebot.io/wp-content/uploads/2023/05/image-2.png"
              alt="CAl2"
            />
          </Link>
          <Link to="/certifications/agile/scrum/leadership/certified-agile-leadership-ii/" itemProp="url" className="btn btn-danger explore-btn">
            Explore
          </Link>
        </Carousel.Item>

        {/* Carousel Item 4 */}
        <Carousel.Item interval={2000}>
          <Link to="/certifications/agile/scrum/scrum-master/professional-scrum-master-i-psm/" itemProp="url">
            <img
              className="d-block w-100"
              src="https://tryscrumlive.vervebot.io/wp-content/uploads/2024/10/PSM-1.png"
              alt="PSM"
            />
          </Link>
          <Link to="/certifications/agile/scrum/scrum-master/professional-scrum-master-i-psm/" itemProp="url" className="btn btn-danger explore-btn">
            Explore
          </Link>
        </Carousel.Item>

        {/* Carousel Item 5 */}
        <Carousel.Item interval={2000}>
          <Link to="/certifications/agile/scrum/scrum-master/professional-scrum-master-ii/" itemProp="url">
            <img
              className="d-block w-100"
              src="https://tryscrumlive.vervebot.io/wp-content/uploads/2024/10/PSM-II.png"
              alt="PSM-II"
            />
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
          <Link to="/certifications/agile/scrum/scrum-master/professional-scrum-master-ii/" itemProp="url" className="btn btn-danger explore-btn">
            Explore
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CourseOne;
