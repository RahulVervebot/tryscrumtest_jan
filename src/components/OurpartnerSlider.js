import React from "react";
import Swiper from "react-id-swiper";
import icagile from "../assets/images/support/icagile.png";
import icf from "../assets/images/support/icf.png";
import scrums from "../assets/images/support/scrum.png";
import scrumalliance from "../assets/images/support/scrumalliance.png";
import pro from "../assets/images/pro.png";
import cyberbahn from '../assets/images/cyberbahn.png'

const OurPartnerSlider = () => {
    const params = {
        slidesPerView: 4,
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
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
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
            <div className="block-title__title" style={{ marginTop: "0", marginBottom: "0", textAlign: "center" }}>Our Partners</div>

            {/* <section className="course-one course-one__teacher-details home-one"> */}

            <div className="container mb-1">
                {/* <div className="course-one__carousel"> */}
                <Swiper {...params}>

                    <div className="item">
                        <div className="p-5 text-center">
                            <img src={icagile} alt="icagile" width={200} height={150} />
                        </div>
                    </div>
                    {/* <div className="item">
                        <div className="p-5 text-center">
                            <img src={icf} alt="icagile" width={200} height={150} />
                        </div>
                    </div> */}
                    <div className="item">
                        <div className="p-5 text-center">
                            <img src={scrums} alt="scrums" width={200} height={150} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="p-5 text-center">
                            <img src={scrumalliance} alt="scrumlliance" width={200} height={150} />
                        </div>
                    </div>
                    <div className="item">
                        <div className="p-5 mt-5 text-center">
                            <img src={pro} alt="pro" width={200} height={50} />
                        </div>
                    </div>

                    <div className="item">
                        <div className="p-5 text-center" style={{ marginTop: "35px" }}>
                            <img src={cyberbahn} alt="cyberbahn" width={200} height={80} />
                        </div>
                    </div>

                </Swiper>
                {/* </div> */}
            </div>




            {/* </section> */}
        </>
    );
};
export default OurPartnerSlider;
