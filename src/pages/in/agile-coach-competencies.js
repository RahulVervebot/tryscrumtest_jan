import Layout from "../../components/Layout";
import React, {useEffect} from 'react'
import Footer from '../../components/footer/InFooter'
import NavTwo from '../../components/header/NavIn'
import Leader from '../../assets/images/agilecoach/leadership-coaching.png'
import Business from '../../assets/images/agilecoach/business-coaching.png'
import Team from '../../assets/images/agilecoach/team-coaching.png'
import bannerimage from '../../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'
import PageBanner from "../../components/PageBanner";
import { Link } from "gatsby";



const Agilecoachcompetencies = () => {

  // console.log(window.location.pathname, "pathname");
  // useEffect(() => {
  //   // Define the link elements manually
  //   const linkUS = document.createElement("link");
  //   linkUS.rel = "alternate";
  //   linkUS.hreflang = "en-US";
  //   linkUS.href = "https://www.tryscrum.com/agile-coach-competencies/";

  //   const linkIN = document.createElement("link");
  //   linkIN.rel = "alternate";
  //   linkIN.hreflang = "en-IN";
  //   linkIN.href = "https://www.tryscrum.com/in/agile-coach-competencies/";

  //   // Append to head
  //   document.head.appendChild(linkUS);
  //   document.head.appendChild(linkIN);

  //   // Cleanup function to remove the elements when the component unmounts
  //   return () => {
  //     document.head.removeChild(linkUS);
  //     document.head.removeChild(linkIN);
  //   };
  // }, []);

  return (
    <>
      <Layout metaDesc="Agile Coaching Competencies | tryScrum" pageName="agile-coach-competencies" pageTitle="Agile Coaching Competencies | tryScrum" image={bannerimage}>
        <NavTwo />
        <PageBanner
          title="Agile Coach Competencies"
          image={bannerimage} uri={"agile-coach-competencies"}
          padding={35}
          active_2={""}
          active_1={"active"}
        />
        <div className="container my-5">
          <div className="row align-items-center my-2">
            <div className="col mb-0">
              <h1 className="display-4 mb-5" style={{ color: "#012237", fontWeight: "bold" }}>Who is an Agile Coach?</h1>
              <p className="lead" style={{ color: "black" }}>
                Though, there is no universal definition of what is an Agile Coach. We want to define, Someone who developed deep expertise to help people, teams, and organisations enable better customer outcomes by focusing on an organisation’s internal and external orientation. The first Agile Coaching Competency framework was developed by Lyssa Adkins and Michael Spaydback in 2011. The model has been adopted and adapted as the application of Agile has grown over the years. we have taken this model as a reference to help illustrate the focus areas of an Agile coach when it comes to Coaching.
              </p>
            </div>
          </div>
          <div className="row align-items-center my-2">
            <div className="col mb-0">
              <h2 style={{ color: "#012237", fontWeight: "600" }}>Focus areas of an Agile Coach</h2>
              <p className="lead" style={{ color: "black" }}>There are three core ways to serve your client that they could only accomplish with help. Three unique ways an Agile Coach can help their clients are:</p>
            </div>
          </div>

          <div className="row align-items-center my-2">
            <div className="col mb-0">
              <h2 style={{ color: "#012237", fontWeight: "normal" }}>Team Coaching</h2>
              <p className="lead" style={{ color: "black" }}>
                Many teams get so used focus on the execution, which they’ve always done, that they don’t realise they have a shared purpose. As a team Coach, you are responsible for helping teams align around a shared purpose and establish healthy team relationships to make decisions collectively by shifting their perspectives from coworkers to the community.</p>
            </div>
          </div>

          <div className="row align-items-center my-2">
            <div className="col mb-0">
              <h2 style={{ color: "#012237", fontWeight: "normal" }}>Business Coaching</h2>
              <p className="lead mb-0" style={{ color: "black" }}>
                This is tricky for most agile coaches. Here the focus is to coach and seed a Product thinking mindset.
              </p>
              <p className="lead mb-0" style={{ color: "black", width:"fit-content" }}>
                <em>“More businesses die from indigestion than starvation.”<br />
                <p className="text-end lead mb-0 text-black">-David Packard</p>
                </em></p>
              <p className="lead" style={{ color: "black" }}>
                As a business coach, you help people believe that doing less is more. You are responsible for helping teams and organisations discover the benefits of customer-centricity, design thinking and discovery.
              </p>
            </div>
          </div>

          <div className="row align-items-center my-2">
            <div className="col mb-0">
              <h2 style={{ color: "#012237", fontWeight: "normal" }}>Leadership Coaching</h2>
              <p className="lead" style={{ color: "black" }}>
                Many leaders get so used to doing things the way they’ve always done them that they don’t realise they have blind spots. As an Agile leadership Coach, it is your responsibility to bring your outside, objective perspective to help leaders see what they could never
              </p>
            </div>
          </div>

          <div className="row py-2">
            <div className="two-row">
              <div className="two-row-contain two-row-contain-blue lead">
                <img src={Team} alt="Team Coaching Competencies" />
                <h2 style={{ color: "#ccde7a", fontWeight: "normal" }}>Team Coaching Capabilities</h2>
                <ol style={{ color: "#012237", fontWeight: "normal" }}>
                  <li><a href="/in/promote-self-management" target="_blank" className="text-dark text-decoration-underline">Promote Self-Management</a></li>
                  <li><a href="/in/maintaining-authentic-distance" target="_blank" className="text-dark text-decoration-underline">Maintain Authentic Distance</a></li>

                  <li><a>Facilitate Collaboration</a></li>
                  <li><a>Cultivate Systemic Awareness</a></li>
                  <li><a>Exhibit Ethical Behaviors</a></li>
                  <li><a href="/in/promote-software-craftsmanship" target="_blank" className="text-dark text-decoration-underline">Promote Software Craftsmanship</a></li>
                </ol>
                <Link to="/in/team-coaching-capabilities">
                  <button type="submit" style={{ backgroundColor: "#ccde7a", color: "#000" }} className="btn d-flex float-right text-white"><div>READ MORE</div></button>
                </Link>

              </div>

              <div className="two-row-contain two-row-contain-green lead">
                <img src={Business} alt="Business Coaching Capabilities" />
                <h2 style={{ color: "#73b89e", fontWeight: "normal" }}>Business Coaching Capabilities</h2>
                <ol style={{ color: "#012237", fontWeight: "normal" }}>
                  <li><a>Promote Customer Centricity</a></li>
                  <li><a>Replace Output With Outcomes</a></li>
                  <li><a>Facilitate Continuous Learning Through Empiricism</a></li>
                  <li><a>Integrate Learning And Action</a></li>
                  <li><a>Empathise Customers</a></li>
                  <li><a>Cultivate Innovation</a></li>
                </ol>
                <Link to="/in/business-coaching-capabilities">
                  <button type="submit" style={{ backgroundColor: "#73b89e", color: "#000" }} className="btn d-flex float-right text-white"><div>READ MORE</div></button>
                </Link>
              </div>

              <div className="two-row-contain two-row-contain-red lead">
                <img src={Leader} alt="Leadership Coaching Capabilities" />
                <h2 style={{ color: "#8c91ac", fontWeight: "normal" }}>Leadership Coaching Capabilities</h2>
                <ol style={{ color: "#012237", fontWeight: "normal" }}>
                <li><a href="/in/establishing-commitment/" target="_blank" className="text-dark text-decoration-underline">Establishing Commitments</a></li>
                  <li><a>Engagement Conversations to create breakthroughs</a></li>
                  <li><a>Designing Invented Future</a></li>
                  <li><a>Creating A Culture of Accountability</a></li>
                  <li><a>Promote openness and vulnerability</a></li>
                  <li><a>Challenge Established thinking</a></li>
                  <li><a>Facilitate Behavioural Change</a></li>
                  <li><a>Facilitate Cultural Intelligence</a></li>
                </ol>
                <Link to="/in/leadership-coaching-capabilities">
                  <button type="submit" style={{ backgroundColor: "#8c91ac", color: "#000" }} className="btn d-flex float-right text-white"><a><div>READ MORE</div></a></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layout >
    </>
  )
}

export default Agilecoachcompetencies