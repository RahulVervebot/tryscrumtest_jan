import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import tuckmanTeam from "../assets/images/tukman.png"
import PageBanner from "../components/PageBanner";
import promoteSelf from "../assets/images/Self-Management2.jpg"
import bannerimage from '../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'
import { Link } from "gatsby";




const PromoteSoftwareCraftsmanship = () => {


    const [position, setPosition] = React.useState(0)

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 80;
    }

    console.log(position, "position")


    const selector = (e, index) => {
        console.log(index)

        let i = 0;
        while (i <= 20) {
            if (index == i) {
                setPosition(index);
                topFunction()
            }
            i++;
        }
    }












    const bullets = [

        {
            nomen: "Promote Software Craftsmanship",
            team: [
                {
                    name: "Software Craftsmanship",
                    radio: "checked"
                },
                {
                    name: "Promote Software Craftsmanship",
                },
                {
                    name: "Benefits of Promoting Software Craftsmanship",
                    border: "none",
                    height: "0"
                }
            ]
        }
        ,



        // {
        //   nomen: "Tips to promote self-management",
        //   team: [

        //     {
        //       name: "Team formation",
        //       radio: "checked"
        //     },
        //     {
        //       name: "Goal-setting",
        //     },
        //     {
        //       name: "Trust Building",

        //     },
        //     {
        //       name: "Self-reflection",
        //     },
        //     {
        //       name: "Pull-based Planning",
        //       border: "none",
        //       height: ""
        //     },

        //   ]
        // }
    ]

    return (
        <Layout metaDesc="Software craftsmanship is a term that refers to the approach of treating software development as a skilled craft rather than a commodity." pageName="promote-software-craftsmanship" pageTitle="Agile Coaching Competencies - Team Coaching Capabilities - Promote Software Craftsmanship | tryScrum
        " image={bannerimage}>

            <NavTwo />
            {/* <PageBanner
                title="Promote Self Management"
                image={promoteSelf}
                uri={"promote-self-management"}
                uri_2={"team-coaching-capabilities"}
                title_2={"Team Coaching Capabilities"}
                // active_2={""}
                active_1={"active"}
                padding={18}
            /> */}

            <div className="container-fluid"
                style={{
                    background: "#022c46",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                <br />
                <div className="w-100 text-center">
                    <ul className="list-unstyled thm-breadcrumb pb-0 mb-0">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/agile-coach-competencies/" >Agile coach Competencies</Link>
                        </li>
                        <li>
                            <Link to="/team-coaching-capabilities/">Team Coaching Capabilities</Link>
                        </li>
                        <li className="screendisplaydesk">
                            <Link to="" style={{ cursor: "default" }}>Promote Software Craftsmanship</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <Link to="/"></Link>
                        </li>
                        <li className="screendisplaymob">
                            <Link to="">Promote Software Craftsmanship</Link>
                        </li>
                    </ul>
                    <br />
                    <span className="align-center text-center text-uppercase text-white" style={{ fontSize: "30px", fontWeight: "600", width: "100%" }}>Promote <br className="screendisplaymob" />Software Craftsmanship</span>
                </div>
                <br />
            </div>


            <div style={{ height: "auto" }}>
                <div className="container py-5">




                    <div className="row margin-auto w-100" style={{ height: "auto" }}>
                        <div className="col-4 screendisplaydesk">
                            {bullets.map((item, indexmain) => (
                                <>
                                    <h3 className="py-4" style={{ fontWeight: "500", color: "#012237" }}>{item.nomen}</h3>
                                    <ul style={{ listStyleType: "none" }} >
                                        {item.team.map((get, index) =>
                                            <li className={`b-4 position-relative border-dark ${get.border ? "border-none" : "border-left"}`} style={{ height: `${get.height ? get.height : "60px"}` }}>
                                                <input
                                                    key={get}
                                                    type="radio"
                                                    id={`radio_${indexmain + "" + index}`}
                                                    name="bullet" treenavigation="checkbox"
                                                    style={{ position: "absolute", left: "-10px", top: "-10px" }}
                                                    onClick={(e) => selector(e, indexmain + "" + index)}
                                                    checked={position == indexmain + "" + index}
                                                />
                                                <div style={{ position: "absolute", top: "-18px" }}>
                                                    <label htmlFor={`radio_${indexmain + "" + index}`}
                                                        className="lead"
                                                        style={{
                                                            paddingLeft: "25px",
                                                            lineHeight: "20px",
                                                            cursor: "pointer",
                                                            userSelect: "none",
                                                            color: `${position == indexmain + "" + index ? "#000000" : ""}`,
                                                        }} onClick={(e) => selector(e, indexmain + "" + index)}>{get.name}</label>
                                                </div>
                                            </li>
                                        )}</ul></>))}
                        </div>

                        <div className="col-8 p-3 border-left overflow-scroll screendisplaydesk">




                            {/* page 0--start*/}
                            {position == 0 && <div>
                                <h2 className="mb-3" style={{ color: "#012237", fontWeight: "500" }}>Software Craftsmanship</h2>

                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Software craftsmanship is a term that refers to the approach of treating software development as a skilled craft rather than a commodity. It emphasises the importance of creating high-quality software that is maintainable, reliable, and easy to change over time. At its core, software craftsmanship is about taking pride in your work and constantly striving to improve.
                                </p>

                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Promoting software craftsmanship is essential in today's technology-driven world. As software continues to play an increasingly important role in our daily lives, the quality of that software becomes more critical. Unfortunately, software defects can cause significant problems, from security vulnerabilities to system crashes, resulting in costly downtime and legal consequences.
                                </p>

                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Promoting software craftsmanship is also a crucial skill for Agile coaches. Agile ways of working rely on collaboration, communication, and continuous improvement. A software craftsman approach fits perfectly within these principles, emphasising the importance of quality and the desire for continuous learning and improvement.
                                </p>
                            </div>
                            }
                            {/* page 0 --end*/}







                            {/* page 1--start*/}
                            {position == 1 && <div>
                                <h2 className="mb-3" style={{ color: "#012237", fontWeight: "500" }}>Promoting Software Craftsmanship</h2>

                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }} >
                                    1. Emphasise Quality Over Speed
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    One of the most significant obstacles to software craftsmanship is the pressure to deliver software quickly. However, prioritising speed over quality often leads to shortcuts, which can compromise the integrity of the software. Therefore, agile coaches must emphasise a culture that values quality over speed to ensure the software is developed with care and attention to detail.
                                </p>


                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }} >
                                    2. Encourage Continuous Learning
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Agile coaches must encourage a culture of continuous learning to promote software craftsmanship. Software development constantly evolves, and keeping up with new technologies, tools, and techniques is crucial. Therefore, agile coaches must encourage their teams to attend conferences, participate in online communities, and pursue additional education.
                                </p>


                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    3. Foster Collaboration and Feedback
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Collaboration and feedback are essential components of software craftsmanship and Agile methodologies. By working together, developers can learn from one another, share knowledge, and identify areas for improvement. Therefore, agile coaches must encourage open communication and constructive feedback to help teams develop better software and create a more positive work environment.
                                </p>

                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    4. Invest in Tools and Infrastructure
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    To produce high-quality software, developers need access to the right tools and infrastructure. Agile coaches must ensure developers have the means to do their job, such as automated testing frameworks and code analysis tools. This will help them catch errors early and ensure high-quality software.
                                </p>

                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    5. Improved Code Quality
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Improving code quality is one of the most significant benefits of promoting software craftsmanship. By taking a craftsman's approach to software development, developers can create more reliable, maintainable, and extensible software. This, in turn, leads to fewer bugs, lower maintenance costs, and faster delivery of new features.
                                </p>

                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    6. Increased Customer Satisfaction
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    By promoting software craftsmanship, Agile coaches can improve the overall quality of the increment, which can lead to increased customer satisfaction. In addition, customers want software that is easy to use, reliable, and bug-free. By emphasising quality over speed, Agile coaches can ensure that the software meets these criteria, leading to happier customers and more repeat business.
                                </p>


                            </div>
                            }
                            {/* page 1 --end*/}






                            {/* tips 1 - start */}
                            {position == 2 &&
                                <>
                                    <div>

                                        <h2 className="mb-3" style={{ color: "#012237", fontWeight: "500" }}>Benefits of Promoting Software Craftsmanship</h2>
                                        <p className="lead " style={{ color: "black", textAlign: "justify" }} >
                                            1. According to a study by software company Cast, technical debt (the cost of maintaining and improving existing code) costs companies an average of $3.61 per line of code per year. However, companies can reduce their accumulated technical debt and save money in the long run by focusing on software craftsmanship and producing high-quality code from the outset.
                                        </p>
                                        <br />
                                        <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                            2. A survey by VersionOne found that organisations that implemented Agile methodologies saw a 75% increase in productivity and a 60% increase in quality. Promoting software craftsmanship is a critical component of Agile methods, so it stands to reason that improving software craftsmanship would contribute to these positive outcomes.
                                        </p>
                                        <br />
                                        <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                            3. A study by the Consortium for IT Software Quality found that poor code quality can lead to a 50% increase in production defects, a 75% increase in downtime, and a 25% increase in development time. However, organisations can avoid these negative consequences and improve their software development process by promoting software craftsmanship and improving code quality.
                                        </p>
                                        <br />
                                    </div>
                                </>
                            }


                        </div>


                        {/* moblie display */}
                        <div className="col-xl-12 p-3 overflow-scroll screendisplaymob">
                            <div>
                                <h2 style={{ color: "#012237", fontWeight: "500" }} id="">Software Craftsmanship</h2>

                                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                                    Software craftsmanship is a term that refers to the approach of treating software development as a skilled craft rather than a commodity. It emphasises the importance of creating high-quality software that is maintainable, reliable, and easy to change over time. At its core, software craftsmanship is about taking pride in your work and constantly striving to improve.
                                </p>

                                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }}>
                                    Promoting software craftsmanship is essential in today's technology-driven world. As software continues to play an increasingly important role in our daily lives, the quality of that software becomes more critical. Unfortunately, software defects can cause significant problems, from security vulnerabilities to system crashes, resulting in costly downtime and legal consequences.
                                </p>

                                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                                    Promoting software craftsmanship is also a crucial skill for Agile coaches. Agile ways of working rely on collaboration, communication, and continuous improvement. A software craftsman approach fits perfectly within these principles, emphasising the importance of quality and the desire for continuous learning and improvement.
                                </p>

                                <h2 style={{ color: "#012237", fontWeight: "500" }} id="">Promote Software Craftsmanship</h2>
                                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                                    Here are a few ways promoting software craftsmanship is one of the essential skills of an Agile Coach:
                                </p>

                            </div>

                            {<div >
                                {/* <h3 style={{ color: "#012237", fontWeight: "600", paddingBottom: "5px" }}>Promote Software Craftsmanship</h3> */}
                                <br />
                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    1. Emphasise Quality Over Speed
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    One of the most significant obstacles to software craftsmanship is the pressure to deliver software quickly. However, prioritising speed over quality often leads to shortcuts, which can compromise the integrity of the software. Therefore, agile coaches must emphasise a culture that values quality over speed to ensure the software is developed with care and attention to detail.
                                </p>
                                <br />
                            </div>}
                            {/* page 1 --end*/}

                            {/* page 2--start*/}
                            {<div>
                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    2. Encourage Continuous Learning
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Agile coaches must encourage a culture of continuous learning to promote software craftsmanship. Software development constantly evolves, and keeping up with new technologies, tools, and techniques is crucial. Therefore, agile coaches must encourage their teams to attend conferences, participate in online communities, and pursue additional education.
                                </p>
                                <br />
                            </div>}
                            {/* page 2 --end*/}

                            {/* page 3--start*/}
                            {<div>
                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    3. Foster Collaboration and Feedback
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Collaboration and feedback are essential components of software craftsmanship and Agile methodologies. By working together, developers can learn from one another, share knowledge, and identify areas for improvement. Therefore, agile coaches must encourage open communication and constructive feedback to help teams develop better software and create a more positive work environment.
                                </p>
                                <br />
                            </div>}
                            {/* page 3 --end*/}


                            {/* page 4--start*/}
                            {<div>
                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    4. Invest in Tools and Infrastructure
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    To produce high-quality software, developers need access to the right tools and infrastructure. Agile coaches must ensure developers have the means to do their job, such as automated testing frameworks and code analysis tools. This will help them catch errors early and ensure high-quality software.
                                </p>
                                <br />
                            </div>}
                            {/* page 4 --end*/}

                            {/* page 4--start*/}
                            {<div>
                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    5. Improved Code Quality
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    Improving code quality is one of the most significant benefits of promoting software craftsmanship. By taking a craftsman's approach to software development, developers can create more reliable, maintainable, and extensible software. This, in turn, leads to fewer bugs, lower maintenance costs, and faster delivery of new features.
                                </p>
                                <br />
                            </div>}
                            {/* page 4 --end*/}


                            {/* page 4--start*/}
                            {<div>
                                <p className="lead mb-0" style={{ color: "#012237", fontWeight: "500" }}>
                                    6. Increased Customer Satisfaction
                                </p>
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    By promoting software craftsmanship, Agile coaches can improve the overall quality of the increment, which can lead to increased customer satisfaction. In addition, customers want software that is easy to use, reliable, and bug-free. By emphasising quality over speed, Agile coaches can ensure that the software meets these criteria, leading to happier customers and more repeat business.
                                </p>
                                <br />
                            </div>}
                            {/* page 4 --end*/}



                            {/* tips 1 - start */}

                            {<div>
                                <h3 style={{ color: "#012237", fontWeight: "500", paddingBottom: "5px" }}>Benefits of Promoting Software Craftsmanship</h3>
                                <br />
                                {/* <h3 style={{ color: "#012237", fontWeight: "500" }}>Team Formation</h3> */}
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    1. According to a study by software company Cast, technical debt (the cost of maintaining and improving existing code) costs companies an average of $3.61 per line of code per year. However, companies can reduce their accumulated technical debt and save money in the long run by focusing on software craftsmanship and producing high-quality code from the outset.
                                </p>
                                <br />
                            </div>
                            }

                            {/* tips 2 - end*/}
                            {<div>
                                {/* <h3 style={{ color: "#012237", fontWeight: "500" }}>Goal Setting</h3> */}
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    2. A survey by VersionOne found that organisations that implemented Agile methodologies saw a 75% increase in productivity and a 60% increase in quality. Promoting software craftsmanship is a critical component of Agile methods, so it stands to reason that improving software craftsmanship would contribute to these positive outcomes.
                                </p>
                                <br />
                            </div>
                            }
                            {/* tips 2 - end*/}


                            {/* tips 2 - end*/}
                            {<div>
                                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                                {/* <h3 style={{ color: "#012237", fontWeight: "500" }}>Trust Building</h3> */}
                                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                                    3. A study by the Consortium for IT Software Quality found that poor code quality can lead to a 50% increase in production defects, a 75% increase in downtime, and a 25% increase in development time. However, organisations can avoid these negative consequences and improve their software development process by promoting software craftsmanship and improving code quality.
                                </p>
                                <br />
                            </div>
                            }
                            {/* tips 2 - end*/}

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex justify-content-start">
                        <Link className="arrow-back" href='/team-coaching-capabilities'>
                            <div className='text-left w-100' style={{ width: "fit-content" }} ><span className='arrow-left'><i class="fa fa-arrow-left" aria-hidden="true"></i> </span>Team Coaching Competencies</div>
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        {/* <Link className="arrow-back">
              <div className='text-end' style={{ width: "fit-content" }} >Next Competency<span className='arrow-left'> <i class="fa fa-arrow-right" aria-hidden="true"></i></span></div>
            </Link> */}
                    </div>
                </div>
            </div>

            {/* <a href="#12" >dddd</a> */}
            <Footer />
        </Layout>
    );
};

export default PromoteSoftwareCraftsmanship;
