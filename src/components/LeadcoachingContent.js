import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import LeadershipIcon from "../assets/images/agilecoach/leadership-coaching.png"
import capabilities from "../assets/images/Leadership-coaching-user.png"
import "../assets/css/list.css"






const BuscoachingContent = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (
        <div>
            <section className="py-2">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                            <p className="display-4" style={{ color: "#012237", paddingTop: "20px", fontWeight: "bold" }}>
                                What is Leadership Coaching ?
                            </p>
                        </div>
                    </div>
                    <div className="row reverse">
                        <div className="col-xl-8 col-sm-12 mb-0">
                            <p className="lead mb-3" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                Leadership Coaching is an established process of guiding leaders to improve their performance, develop new skills, and achieve personal and Organisational goals. In fact, according to a study by the International Coach Federation, 86% of companies reported a positive return on investment from coaching, with an average return on investment of 7 times the initial investment.
                            </p>
                            <p className="lead mb-3" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                At its core, Leadership Coaching is about unlocking a leader's potential and enabling them to be more effective. In another study by the Harvard Business Review, 86% of CEOs who received coaching reported that it positively impacted their leadership, with increased self-awareness, better decision-making, and improved team performance among the reported benefits.
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-12 position-relative mb-0" style={{ height: "250px" }}>
                            <img src={LeadershipIcon} width={250} className="position-absolute top-50 start-50 translate-middle" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 position-relative mb-0" >
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                Leadership Coaching is essential because leadership is a critical factor in organisational success. A study by Gallup found that 70% of the variance in employee engagement scores is attributable to the manager or team leader. Effective leadership requires skills, competencies, and behaviours that coaching can develop and enhance.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 position-relative mb-0">
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                Leadership Coaching is also essential because it enables leaders to navigate the complex and rapidly changing business landscape. According to a survey by Deloitte, 86% of executives believe that leadership readiness is an urgent issue, with the ability to navigate complexity and ambiguity among the top skills required for success.
                            </p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12 position-relative mb-0" >
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                In summary, Leadership Coaching is a powerful tool for unlocking a leader's potential and enabling them to be more effective in their role. It is an essential component of leadership development that can help leaders improve their performance, develop new skills, and achieve their goals. With a high ROI and proven benefits for leaders and organisations, Leadership Coaching is an excellent investment for any company that wants to create a culture of accountability and continuous improvement.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>

                                At tryScrum, we are committed to helping Agile Coaches develop their Leadership Coaching capabilities. Our coaching programs are designed to provide Agile Coaches with the tools, techniques, and insights they need to become more effective leaders and coaches. Leadership Coaching is essential for driving organisational success and creating a culture of accountability and continuous improvement. With our expert coaching, you can enhance your coaching capabilities, develop new skills, and achieve your goals as a coach and leader.
                            </p>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-12 position-relative" >
                            <div className='container'>
                                <div className='row pt-3'>
                                    <div className='col-xl-1 col-sm-12 mr-5 d-flex justify-content-center'>

                                        <img src={capabilities} alt="capability" width="90px" height="90px" data-aos="flip-left"
                                            data-aos-easing="ease-in-cubic"
                                            data-aos-duration="2000" />

                                    </div>
                                    <div className='col-xl-8 col-sm-12 pt-3'>
                                        <span><strong style={{ color: "#012237", fontSize: "22px", fontWeight: "400" }} className="lead" >
                                            The following capabilities will help leadership coaches enable influential leaders to develop new skills and achieve Organisational goals.</strong></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-0">
                                        <ol className='fish-list-lead lead' style={{ color: "#012237" }}>
                                            <li><a href="/establishing-commitment/">Establishing Commitments</a></li>
                                            <li><a>Engagement Conversations to create breakthroughs</a></li>
                                            <li><a>Designing Invented Future</a></li>
                                            <li><a>Creating A Culture of Accountability</a></li>

                                        </ol>
                                    </div>
                                    <div className="col-md-6">
                                        <ol className='fish-list-lead lead' style={{ color: "#012237" }}>
                                            <li><a>Promote openness and vulnerability</a></li>
                                            <li><a>Challenge Established thinking</a></li>
                                            <li><a>Facilitate Behavioural Change</a></li>
                                            <li><a>Facilitate Cultural Intelligence</a></li>
                                            
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-start">
                            <a className="arrow-back" href='/agile-coach-competencies'>
                                <div className='col-xl-12' style={{ width: "fit-content" }} ><span className='arrow-left '><i class="fa fa-arrow-left" aria-hidden="true"></i></span> Back To Overview</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuscoachingContent