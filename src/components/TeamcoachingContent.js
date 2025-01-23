import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import businessIcon from "../assets/images/agilecoach/team-coaching.png"
import capabilities from "../assets/images/team-capabilities.png"
import "../assets/css/list.css"
import { Link } from 'gatsby';






const TeamcoachingContent = () => {

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
                                What is Team Coaching ?
                            </p>
                        </div>
                    </div>
                    <div className="row reverse">
                        <div className="col-xl-8 col-sm-12 mb-0">
                            <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }}>
                                Teams are the vehicles that carry an organisation's businesses on the ground. An organisation's ability to deliver value depends on the effectiveness of teams. Many factors contribute to team effectiveness, but the crucial aspects are <strong style={{ color: "#012237" }}>psychological safety, dependability, structure and clarity, purpose and impact.</strong> Furthermore,  For a team to be effective, it must navigate the organisation's complexities. Many modalities like training, consulting or mentoring may help teams perform highly, but team coaching goes deeper than other modalities.
                            </p>
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                The core of Team Coaching is to explore the dynamics of groups, sub-groups and the personalities of individuals that contribute to the team's effectiveness. Unlike individual coaching, the focus is on the team.
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-12 position-relative mb-0" style={{ height: "250px" }}>
                            <img src={businessIcon} width={250} className="position-absolute top-50 start-50 translate-middle" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-0" >
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                Team coaching involves working with teams to develop their capabilities and attitudes to achieve their goals. Some common focus areas include goal setting, building trust, promoting mutual accountability, fostering a culture of continuous learning, and developing a culture of innovation.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-0">
                            <p className="lead" style={{ color: "black",paddingTop: "10px", textAlign: "justify" }}>
                                In our experience, Agile Team coaches use a variety of tools like Team Assessments (Comparative Agility), Communication Style assessment tools (DiSC), Coaching Models(GROW), Facilitation tools (Liberating Structures) etc. While the modalities are different, the aim is to help teams become self-sufficient. Partly, these tools help to enhance transparency and help in team-building processes. In contrast, team coaching rests on the premise that team coaches' effectiveness is high when the coaches remain objective and aware of team dynamics and patterns.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12  mb-0" >
                            <p className="lead" style={{ color: "black",paddingTop: "10px", textAlign: "justify" }}>
                                According to a survey by the International Coach Federation (ICF), 41% of respondents reported that team coaching is the fastest-growing niche.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-0">
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                "United we Conquer, divided we fall" - this phrase highlights the importance of teamwork and unity while emphasising the consequences of not working together effectively. It also highlights that success is not just about individual effort but also about working together as a team towards a shared objective.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-0">
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                            Many coaches have the same question: ‘As a team coach, where do I start? I have to focus on several areas and ensure that it is a simple-to-follow approach for my clients (internal or external). Are there any guidelines?’
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 position-relative mb-0" >
                            <div className='container'>
                                <div className='row pt-3'>
                                    <div className='col-xl-1 col-sm-1 mr-5 d-flex justify-content-center'>

                                        <img src={capabilities} alt="capability" width="90px" data-aos="flip-left"
                                            // data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000" />

                                    </div>
                                    <div className='col-xl-8 col-sm-6 pt-3'>
                                        <span><strong style={{ color: "#012237", fontSize: "22px", fontWeight: "400" }} className="lead" >At tryScrum, the following capabilities will help team coaches enable teams that can be effective and high performing.</strong></span>
                                    </div>
                                    <p className="lead" style={{ textAlign: "justify" }}>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-md-12 mb-0" >
                                        <ol className='fish-list-team lead' style={{ color: "#012237" }}>
                                            <li><Link to="/promote-self-management" target="_blank" style={{ textDecoration: "underline" }}>Promote Self-Management</Link></li>
                                            <li><Link to="/promote-software-craftsmanship" target="_blank" style={{ textDecoration: "underline" }}>Promote Software Craftsmanship</Link></li>
                                            <li><a>Facilitate Collaboration</a></li>
                                        </ol>
                                    </div>
                                    <div className="col-xl-6 col-md-12">
                                        <ol className='fish-list-team lead' style={{ color: "#012237" }}>
                                            <li><Link to="/maintaining-authentic-distance" target="_blank" style={{ textDecoration: "underline" }}>Maintain Authentic Distance</Link></li>
                                            <li><a>Cultivate Systemic Awareness</a></li>
                                            <li><a>Exhibit Ethical Behaviors</a></li>
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

export default TeamcoachingContent