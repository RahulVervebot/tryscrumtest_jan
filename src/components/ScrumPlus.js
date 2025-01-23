import React from "react";
import gallery1 from "../assets/images/try-Scrum-imgaes/tryscrum/png/canvas.png";
import gallery2 from "../assets/images//try-Scrum-imgaes/tryscrum/png/coaching.png";
import gallery3 from "../assets/images//try-Scrum-imgaes/tryscrum/png/design-thinking.png";
import gallery4 from "../assets/images//try-Scrum-imgaes/tryscrum/png/facilitation.png";
import gallery5 from "../assets/images//try-Scrum-imgaes/tryscrum/png/impact-mapping.png";
import gallery6 from "../assets/images//try-Scrum-imgaes/tryscrum/png/roadmaps.png";
import gallery7 from "../assets/images//try-Scrum-imgaes/tryscrum/png/user-stories.png";
import gallery8 from "../assets/images//try-Scrum-imgaes/tryscrum/png/value-metrics.png";

const Gallery = () => {
  return (
    <section className="gallery-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery1} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery2} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery3} alt="" />
             
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery4} alt="" />
              
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery5} alt="" />
             
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery6} alt="" />
             
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery7} alt="" />
             
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="gallery-one__single">
              <img src={gallery8} alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
