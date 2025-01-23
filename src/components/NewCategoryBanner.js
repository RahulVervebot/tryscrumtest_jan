import React from "react";
import { Link } from "gatsby";

const NewCategoryBanner = (props) => {

    const { heading, breadcrumb, description, image } = props

    return (
        <>
            {/* <section className="new_category_banner position-relative" style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}>
                <p className="container inner-banner__title  margin-0 " style={{paddingBottom:`8px`,  width:"60%",textAlign:"center"}}>{heading}</p> // commented
                <div className="row">
                    <div className="col-md-6 banner_column">
                        <div className="banner_div">
                            <h1 className="banner_heading">{heading}</h1> // commented
                            <div className="banner_heading" dangerouslySetInnerHTML={{ __html: heading }} />
                            <p className="banner_breadcrumb" dangerouslySetInnerHTML={{ __html: breadcrumb }} />

                        </div>
                    </div>
                </div>
            </section> */}

            <section className="inner-banner-scaling-course-page" style={{ fontFamily: "verdana", backgroundImage: `URL(${image})` }}>
                <div className="container-scaling" style={{ padding: "5%" }}>
                    {/* <h1 className="course_page_header text-center" style={{ color: "#fff", fontWeight: 700, marginTop: "2%" }}>Transform your Career with expert Agile Training and Mentoring</h1> */}
                    <h1 className="course_page_header text-center" style={{ color: "#fff", fontWeight: 700, marginTop: "2%" }} dangerouslySetInnerHTML={{ __html: heading }} />
                    <ul className="list-unstyled thm-breadcrumb">
                        <p className="banner_breadcrumb" style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: breadcrumb }} />
                    </ul>
                </div>
            </section>

            <div className="wrapper_div">
                {/* <p className="banner_description">{description}</p> */}
                <div className="banner_description" style={{ color: "#000" }} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </>
    );
};
export default NewCategoryBanner;