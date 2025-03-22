import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ScrumTabs = ({
  testimonialOne,
  testimonialTwo,
  testimonialThree,
  testimonialFour,
  testimonialFive
}) => {
  // Collect the five props into an array
  const allTestimonials = [
    testimonialOne,
    testimonialTwo,
    testimonialThree,
    testimonialFour,
    testimonialFive
  ];

  const backgroundColors = [
    "#A7DFF2",
    "#CCDE7B",
    "#8C91AE",
    "#73B89E",
    "#FABA51",
  ];
  // Filter out empty or undefined values
  const filteredTestimonials = allTestimonials.filter(
    (testimonial) => testimonial && testimonial.trim() !== ""
  );

  // If there are no valid testimonials, render nothing (or render a message)
  if (filteredTestimonials.length === 0) {
    return null;
  }

  return (
    <Carousel>
      {filteredTestimonials.map((testimonial, index) => (
        <div className="trest">
          
        <Carousel.Item interval={4000} key={index}>
          <div className="item">
            <div
              className="wQuote__Marker card wCard-quote text-center text-lg-start"
              style={{background: backgroundColors[index % backgroundColors.length],
                 fontFamily: "verdana" }}
            >
              <div className="py-0 flex-grow-1">
                <p className="wCard-quote__text"
                dangerouslySetInnerHTML={{
                            __html: testimonial,
                          }}
                  
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        </div>
      ))}
    </Carousel>
  );
};

export default ScrumTabs;
