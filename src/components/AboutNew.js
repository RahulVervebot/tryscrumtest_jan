import React, { Component } from "react";
import partner from "../assets/images/our-partner.png";
import partner2 from "../assets/images/our-partner2.png";
import ourvaluesbanner from "../assets/images/our-values-banner.jpg";
import ptn from "../assets/images/ptn.png";
import mo from "../assets/images/mo.png";
import pro from "../assets/images/pro.png";
import sa from "../assets/images/sa.png";
import award from "../assets/images/Institutes_for_Leadership_Development_Programs_Logo-01.png";
import BrandsAbout from "../components/BrandsAbout";
import gallery1 from "../assets/images/1_about.jpg";
import gallery2 from "../assets/images/2_about.jpg";
import gallery3 from "../assets/images/3_about.jpg";
import gallery4 from "../assets/images/4_about.jpg";
import gallery5 from "../assets/images/5_about.jpg";
import OurpartnerSlider from "./OurpartnerSlider";




class AboutOne extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <div>
        <section className="about-one">

          <div className="container text-center">

            <div className="block-title__title">Our Story</div>
            <div>
              <p className="about-one__text" style={{ marginTop: "50px" }}>
                What started as an experiential idea is now the leading Management Consulting company.
              </p>
            </div>


            <div className="container mt-5 mb-5">

              <div className="row">
                <div className="col-md-6 offset-md-3">

                  <ul className="timeline">
                    <li>
                      <h3 style={{ textAlign: "left", color: "#ED5357", fontWeight: "400" }}>2018</h3>
                      <p style={{ fontSize: "20px" }}> A heroic idea is born.</p>
                      <p style={{ fontSize: "20px" }}>Venkatesh Rajamani founded tryScrum.com.</p>
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left", color: "#F7B950", fontWeight: "400" }}>2019</h3>
                      <p style={{ fontSize: "20px" }}>tryScrum was chosen as a preferred partner by one of the World's most respected non-profit Organisation.</p>
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left", color: "#CCDE7A", fontWeight: "400" }}>2019</h3>
                      <p style={{ fontSize: "20px" }}>tryScrum went partnership and established its headquarters in Chennai.</p>
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left", color: "#73B89E", fontWeight: "400" }}>2020</h3>
                      <p style={{ fontSize: "20px" }}>tryScrum listed as one of the top institutes and positioned itself as one of the most trusted Brands.</p>
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left", color: "#800000", fontWeight: "400" }}>2022</h3>
                      <p style={{ fontSize: "20px" }}>50+ Brands across the Globe Trust tryScrum as their preferred Partner.</p>
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left", color: "#8c91ae", fontWeight: "400" }}>2023</h3>
                      <p style={{ fontSize: "20px" }}>Our coaches have been listed as one of the Top 100 most influential coaching leaders by the Times Ascent and World HRD forum. That means you learn from experts who you can trust.</p>
                      {/* <p style={{ fontSize: "20px" }}>tryScrum appeared as one of the "Top 15 Consulting Companies Revolutionizing Industries in Chennai" by Fupping Media</p> */}
                      {/* tryScrum appreared as one of the "Top 15 Consulting Companies Revolutionizing Industries in Chennai" by Fupping Media */}
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left", color: "#8c91ae", fontWeight: "400" }}>2023</h3>
                      {/* <p style={{ fontSize: "20px" }}>Our coaches have been listed as one of the Top 100 most influential coaching leaders by the Times Ascent and World HRD forum. That means you learn from experts who you can trust.</p> */}
                      <p style={{ fontSize: "20px" }}>tryScrum appeared as one of the "Top 15 Consulting Companies Revolutionizing Industries in Chennai" by Fupping Media</p>
                      {/* tryScrum appreared as one of the "Top 15 Consulting Companies Revolutionizing Industries in Chennai" by Fupping Media */}
                    </li>
                    <li>
                      <h3 style={{ textAlign: "left", color: "#800000", fontWeight: "400" }}>2024</h3>
                      <p style={{ fontSize: "20px" }}>tryScrum coaches ranked among the Top 100 Thought Leaders in APAC by Thinkers360</p>
                    </li>
                  </ul>

                </div>
              </div>

            </div>

          </div>
        </section>

        <div className="contrastcontact">

          <div className="container">
            {/* <img src={strech} className="video-two__scratch" alt="" /> */}
            <div className="row">
              <div className="col-lg-7">
                <div className="contrastcontact__content">
                  <h2 className="contrastcontact__title">
                    Our Accreditations
                  </h2>

                  {/* <h5 className="contrastcontact__secondary"> 
                As the world’s leading local delivery platform, we work with a large global ecosystem of riders, restaurants, shops and partners. From prepared meals to groceries, flowers, coffee, medicine… our fleets deliver whatever you need – fast, easy and to your door 
                  
                </h5> */}

                  {/* <a href="#none" className="thm-btn">
                  Learn More
                </a> */}



                </div>
              </div>

            </div>
          </div>

        </div>


        <section className="about-one">

          <div className="container text-center">

            {/* <div className="block-title__title" style={{marginBottom:"100px", marginTop:"20px"}}>Our Partners</div>  */}


            <div className="row">

              <div className="col-xl">
                <img src={partner2} className="img-fluid" height="500" style={{ marginTop: "-300px" }} />

              </div>

              <div className="col-xl" style={{ marginTop: "-30px" }}>

                <div className="row">

                  <div className="mycolumn">
                    <img src={ptn} className="img-responsive img-center-res" height="150" width="150" alt="" />
                  </div>
                  <div class="mycolumn">
                    <img src={pro} className="img-responsive img-center-res" height="100" width="350" alt="" />
                  </div>

                </div>

                <div className="row">

                  <div className="mycolumn">
                    <img src={mo} className="img-responsive img-center-res" height="150" width="150" alt="" />
                  </div>
                  <div className="mycolumn">
                    <img src={sa} className="img-responsive img-center-res" height="150" width="150" alt="" />
                  </div>

                </div>

                {/* <div className="row desktopdisplay">

                    <div className="mycolumn">
                      <img src={award} className="img-responsive img-center-res"  height="300" width="500" alt="" />
                    </div>

                  </div>  

                   <div className="row mobiledisplay">

                    <div className="mycolumn">
                      <img src={award} className="img-responsive img-center-res"  height="300" width="300" alt="" />
                    </div>

                  </div>   */}

              </div>

            </div>

          </div>

        </section>


        <div className="container-fluid">

          {/* <OurPartners /> */}
          <OurpartnerSlider />

          <div className="block-title-size" style={{ marginBottom: "50px", marginTop: "30px", textAlign: "center" }}>Our Values</div>
          <div className="displaypixels" >
            <div className="container offset-md-1">
              <div className="row">
                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={gallery1} alt="" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={gallery2} alt="" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={gallery3} alt="" />

                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={gallery4} alt="" />

                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="gallery-one__single">
                    <img src={gallery5} alt="" />

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* </div> */}


        <div className="aboutcontact" />



        <div className="ost-multi-header"></div>

        <div className="block-title__title" style={{ marginTop: "70px", marginBottom: "100px", textAlign: "center" }}>Trusted by the world’s leading brands</div>

        <BrandsAbout />

      </div>


      // </section>
    );
  }
}

export default AboutOne;
