import React, { useEffect}  from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import businessIcon from "../assets/images/business-icon.png"
import capabilities from "../assets/images/capability.png"
import "../assets/css/list.css"






const BuscoachingContent = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, [])



    return (
        <div>
            <section className="py-2">
                <div className="container my-5">
                    {/* <div className="row" style={{ background: "#ffc200", color: "white" }}>
                        <div className="col-xl-6 mb-0 col-sm-12">
                            <img src={think} width={500} />
                        </div>
                        <div className="col-xl-6 col-sm-12 position-relative">
                            <div
                                style={{
                                    position: "absolute",
                                    transform: "translate(0,-50%)",
                                    top: "50%",
                                    left: 0
                                }}
                            >
                                <p style={{ fontSize: "80px", padding: "10px" }}>What </p>
                                <p style={{ fontSize: "80px", padding: "10px" }}>is</p>
                                <p style={{ fontSize: "80px", padding: "10px" }}>Business</p>
                                <p style={{ fontSize: "80px", padding: "10px" }}>Coaching?</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                            <p className="display-4" style={{ color: "#012237", paddingTop: "20px", fontWeight: "bold" }}>
                                What is Business Coaching ?
                            </p>
                        </div>
                    </div>
                    <div className="row reverse">
                        <div className="col-xl-8 col-sm-12 mb-0">
                            <p className="lead mb-0" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }}>

                                Businesses in the current digital world are complex. They need to maintain their
                                lead over the competitors, be profitable, and make a difference (or stay relevant)
                                to their customers while doing this effectively and more efficiently than ever.
                                Some of this might work smoothly while the business is still growing. But as
                                Scale comes into the picture, it leaves little room for leaders to pause and reflect.
                                One can quickly lose sight and perspective of what is essential when constantly
                                juggling many responsibilities. Business coaching is critical to steer them back
                                on track and be relevant; it is pretty crucial.
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-12 position-relative" style={{ height: "250px" }}>
                            <img src={businessIcon} width={250} className="position-absolute top-50 start-50 translate-middle" />
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-4">
                            <p className="lead" alt="lead" style={{ color:"black", paddingTop: "20px" }}>
                                <img src={businessobject} width={400} className="position-absolute top-50 start-50 translate-middle" />
                            </p>
                        </div> */}
                        <div className="col-12 position-relative mb-0" >
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                At a foundational level, Business coaching involves a coach working with
                                business leaders to assist them in achieving their business objectives. The
                                common focus areas for business coaches include Leadership, strategy, sales,
                                marketing, personal development, and so on.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-0">
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                Business coaching typically entails regular one-on-one or small group sessions in
                                which the coach assists the business leaders in identifying goals, developing a
                                strategy to achieve those goals, and developing the skills and tactics necessary
                                to put the plan into action. To assist the leaders of a business in staying on track
                                and making progress, the coach may also provide feedback, direction, and
                                accountability.
                            </p>
                        </div>
                        {/* <div className="col-4 position-relative">
                            <img src={smallgroup} width={300} className="position-absolute top-50 start-50 translate-middle" />
                        </div> */}
                    </div>

                    <div className="row">
                        {/* <div className="col-4">
                            <p className="lead" alt="lead" style={{ color:"black", paddingTop: "20px" }}>
                                <img src={tools} width={320} className="position-absolute top-50 start-50 translate-middle" />
                            </p>
                        </div> */}
                        <div className="col-12 position-relative mb-0" >
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                Business coaches help their clients develop strategies and action plans for
                                success by identifying areas of their business that can be improved. As every
                                business is different and has different requirements, business coaching is meant
                                to be a highly customised and adaptable process. Some business coaches work
                                with business leaders to develop a comprehensive strategy for the company's
                                growth and development, while others help business owners develop a specific
                                skill or competency.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-0">
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                No one approach fits all. To assist customers in achieving success, business
                                coaches may employ a range of tools, methods, models and techniques such as
                                goal setting, action planning, and progress tracking. Business coaching is a
                                valuable service that can assist individuals and organisations in achieving their
                                objectives more efficiently and enhancing their performance.
                            </p>
                        </div>
                        {/* <div className="col-4 position-relative">
                            <img src={Requirement} width={300} className="position-absolute top-50 start-50 translate-middle" />
                        </div> */}
                    </div>

                    <div className="row">

                        <div className="col-12 position-relative mb-0" >
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                The coaches are also able to ease some of the leaders' burdens to make their
                                journey more accessible and more enjoyable, in addition to enhancing the
                                operation and expansion of a business. They take the aid of the first principles
                                and combine them with the situation at hand, tailoring the approach that best
                                suits the organisation.
                            </p>
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                <em>Define the “first principles” for the situation, the immutable truths that are the
                                    foundation for the company or product, and help guide the decision from those
                                    principles - <strong style={{color:"#012237"}}>Trillion Dollar Coach</strong></em>
                            </p>
                        </div>
                        {/* <div className="col-4">
                            <p className="lead" style={{ color:"black", paddingTop: "20px" }}>
                                <img src={principle} width={320} className="position-absolute top-50 start-50 translate-middle" />
                            </p>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-12 position-relative mb-0" >
                            <p className="lead" style={{ color: "black", paddingTop: "10px", textAlign: "justify" }}>
                                Many coaches have different questions: ‘As a coach, where do I start? I have to
                                focus on several areas and ensure that it is a simple-to-follow approach for my
                                clients (internal or external). Are there any guidelines?’
                            </p>
                            <div className='container'>
                                <div className='row pt-3'>
                                    <div className='col-xl-1 col-sm-1 mr-5 d-flex justify-content-center'>
                                        
                                            <img src={capabilities} alt="capability" width="90px" data-aos="flip-left"
                                            data-aos-easing="ease-in-cubic"
                                            data-aos-duration="2000" />
                                        
                                    </div>
                                    <div className='col-xl-8 col-sm-6 pt-3'>
                                        <span><strong style={{ color: "#012237", fontSize: "22px", fontWeight: "400" }} className="lead" >At tryScrum, the following capabilities will help business coaches build great
                                            organisations with unique cultures.</strong></span>
                                    </div>
                                    <p className="lead" style={{ textAlign: "justify" }}>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 mb-0">
                                        <ol className='fish-list lead' style={{color:"#012237"}}>
                                            <li><a>Promote Customer Centricity</a></li>
                                            <li><a>Replace output with outcomes</a></li>
                                            <li><a>Facilitate Continuous learning through empiricism</a></li>
                                        </ol>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className='fish-list lead' style={{color:"#012237"}}>
                                            <li><a>Integrate learning and action</a></li>
                                            <li><a>Empathise customers</a></li>
                                            <li><a>Cultivate Innovation</a></li>
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