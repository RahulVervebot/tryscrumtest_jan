import React, { useState } from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import imgone from "../assets/images/leadership3.png";
import imgtwo from "../assets/images/cultural-assessment2.png";
import imgthree from "../assets/images/organization-design3.png";
import imgfour from "../assets/images/Training2.png";
import imgfive from "../assets/images/improve-teams3.png";
import imgsix from "../assets/images/coaching2.png";
import axios from "axios";
import Popup from 'reactjs-popup';
import Footer from "../components/Footer";
import Svgbanner from "../svg/management.svg";



const Coaching = () => {

  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (state.email && state.name && state.message) {
      debugger;

      const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/94/feedback";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);
      formData.append("your-message", state.message + " - Enterprise Coaching & Consulting Page Popup Contact Inquiry");

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };

      const res = await axios.post(url, formData, config);
      if (typeof res.data.message !== undefined) {
        //alert(res.data.message);
        setSubmissionMessage(res.data.message);
        setState({ name: "", email: "", message: "" });
      } else {
        alert("please try again");
      }
    } else {
      let error = errors;
      if (state.name === "") {
        // debugger;
        error = {
          ...error,
          name: "This is required",
        };
      }
      if (state.email === "") {
        // debugger;
        error = {
          ...error,
          email: "This is required",
        };
      }
      if (state.message === "") {
        // debugger;
        error = {
          ...error,
          message: "This is required",
        };
      }
      setErrors(error);
    }
    //console.log(res.data.message, "res");
  };



  return (
    <Layout pageTitle="Enterprise Coaching & Consulting" metaDesc="Spinning up a single Scrum team is a challenge. Building an agile organization is a journey. We work with you tocreate a plan and execute it to build and sustain an agile organization." pageName="home" >

      <NavTwo />

      {/* <Agilebanner /> */}



      <div className="container mt-5">
        {/* <h1 className="text-center">Apple Like Content Section</h1> */}

        <div className="row align-items-center">
          <div className="col">
            <h1 className="display-4" style={{ color: "#012237", fontWeight: "bold" }}>Building blocks of the next generation of Organisations</h1>
            <p className="lead" style={{ color: "black" }}>No matter what the future brings, building a capable and resilient organisation is the need of the
              hour. At tryScrum, our mission is to help organisations become capable and resilient. In this
              paper, we will share our experience of some of the tenets that helped organisations I worked with.
              This model aims to show you what to strive for and how to get started to become a high-
              performing organisation.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="lead" style={{ color: "black" }}>
              In this constantly changing and challenging world, we need organisations that give everyone the
              power to make decisions and innovate to stay relevant and competitive. We know that you have
              already reimagined your business for efficiency, speed, and responsiveness. Now it’s time to
              resurrect your business for adaptability, innovation, and engagement so that you can stay
              capable. We can help. Let’s try Scrum.
            </p>

            <p className="lead" style={{ color: "black" }}>
              At tryScrum, our mission is to help organisations become more capable and resilient by
              humanising workplaces. Some of the critical building blocks of next-generation organisations
              are illustrated below.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <img Src={svgbanner}  alt = "svg"/> */}
            <Svgbanner />
            {/* <img src=""  alt = "svg" style={{width:"100%"}}/> */}
          </div>
        </div>
        <div className="row"  id="nine">
          <div className="col">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Feature Factory → Zero Distance to Customers</h2>
            <p className="lead" style={{ color: "black" }}>
              The traditional feature factory way of thinking must give way to customer-centric thinking. Team
              communication is lacking in feature factories. Without any kind of feedback, features are passed
              from one team to the next. Teams thus find themselves cut off from clients. It takes dedication
              and practice to transition away from feature factories and toward solving business problems.
              Not all groups have the authority to consider customers. Getting teams to think beyond features
              is the first step. Customers will become a direct extension of your business by working more
              closely with your teams; if engaged, they will stick around.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col" id="one">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Co-workers → Community</h2>
            <p className="lead" style={{ color: "black" }}>
              Coworkers are no longer colleagues. Having devoted communities aid in the organisation&#39;s
              ability to conduct its business, sustain itself, and produce excellent results. A strong community
              is essential to a successful organisation. Candidates seeking jobs are more motivated to work
              for the organisation and advance its mission when they feel they can be themselves at work.
              Factors including mission, values, expectations, goals, and work environment make up an
              organisation&#39;s culture. And company culture can be compared to a company&#39;s &quot;personality.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col" id="two">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Top-down co-ordination → Voluntary co-ordination</h2>
            <p className="lead" style={{ color: "black" }}>
              On the subject of coordination, there is a wealth of information available. Sadly, there is a
              knowledge gap in assisting organisations in understanding strategies that can influence their
              agility and support teams in change. tryScrum is aware of this, and we want to help
              organisations embrace voluntary coordination to release collective intellect. Coordination that is
              voluntary improves commitment and self-control.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col" id="three">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Hierarchy → Accountability</h2>
            <p className="lead" style={{ color: "black" }}>
              The majority of businesses are designed with a rigid hierarchy in place. There is a presumption
              that decision-making is normally done by those in higher positions, which benefits superiors and
              allows businesses to flourish at what they know and do best. However, leaders must accept that
              they can only do so in a more dynamic environment, where good ideas take precedence over
              traditional reporting structures and where everyone, regardless of rank, has the opportunity to
              help the company move in the direction it needs to go. This is especially true for organisations
              that need to change quickly and pursue new strategies.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col" id="four">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Unit Performance → Shared Outcomes.</h2>
            <p className="lead" style={{ color: "black" }}>
              Farm silos are made to separate various ingredients while storing vast quantities of grain.
              Organisational silos in firms have the same result: They restrict communication between teams
              and departments by keeping people and information separate. It can make a significant amount of waste enter the system. Organisational silos must be eliminated as soon as possible for
              enterprises to expand. Silos are more challenging to break down in larger organisations, so it&#39;s
              critical to do so as quickly as possible—or even before they form. All-hands meetings are not
              necessary to maintain your organisation&#39;s focus on common objectives and results; instead, you
              need collaborative settings that emphasise customer-centricity.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col" id="five">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Establishment → Experimentation</h2>
            <p className="lead" style={{ color: "black" }}>
              The traditional approach to strategic Management is essentially sequential. The organisation
              first decides where and how to do business, then plans to execute that decision, and then tries
              to execute the plan. This approach is like placing a bet on the future: one builds an expectation
              of what the distant future will bring and then rushes forward to be the winner in that future. This
              approach is unsuitable for the VUCA world in which it is difficult to predict the distant future
              accurately. For an organisation to be viable, it must be capable of producing a range of
              responses that are as diverse as the challenges posed by the environment.
              In times of uncertainty, embracing an experimental approach is inevitable. Only an experimental
              mindset can embrace experimentation. Equip everyone with the skills they need to design and
              run their own experiments
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col" id="six">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Centralised Innovation → Distributed Innovation</h2>
            <p className="lead" style={{ color: "black" }}>
              Innovation is an ongoing process rather than an event. Due to inadequate product
              segmentation, around 95% of new products fail (Clayton Christensen). The decision-making
              process is frequently centralised in Traditional Organizations. In the VUCA era, decentralisation
              is a concept that increasingly organisations are embracing. Decentralisation moves an
              organisation&#39;s planning and decision-making duties from a single, central location. An alternate
              framework for managing innovation is provided by the successful development of the Linux
              operating system and countless other open-source software (OSS) projects ( The principles of
              Distributed Innovation, 2007).
              The appearance of distributed innovation systems is most fully illustrated by open source
              software (OSS) communities, which feature decentralised problem solving, self-selected
              participation, self-organising coordination and collaboration, &quot;free&quot; revealing of knowledge, and
              hybrid organisational models that combine community success with commercial success. The
              public has become aware of the distributed innovation paradigm because of the successes of
              OSS groups. By putting this concept of distributed innovation into practice, you may include all
              potential groups in the process and involve them at every stage of your strategy. This includes
              all employees, stakeholders, clients, and others who interact with your organisation.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col" id="seven">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Close Department → Open adaptive system</h2>
            <p className="lead" style={{ color: "black" }}>
              Most businesses are structured along functional lines, with departments for related tasks.
              Teams become segregated when departments are staffed by workers specialising in particular

              work areas. Employees from other groups must have the chance to interact and exchange ideas
              in order to ensure the long-term development of the company is maintained. The manager of a
              corporation must accept complexity as a given and comprehend complicated adaptive systems.
              Almost all businesses, big and small, have complexity built into them. An organisation can be
              seen through the same lens as a result. A successful company must continuously adapt to the
              changing global environment. An organisation&#39;s flexibility gives it a substantial competitive
              advantage. If your competitive environment is unstable and undergoing rapid change, you need
              a flexible strategy to stay ahead. Adaptation is tenacity on a larger scale than simply hitting your
              head against a wall and hoping for a different outcome.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col" id="eight">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Practices-Driven → Principles Driven</h2>
            <p className="lead" style={{ color: "black" }}>
              “As to methods, there may be a million and then some, but principles are few. The man who
              grasps principles can successfully select his methods. The man who tries methods, ignoring
              principles, is sure to have trouble.” ― Harrington Emerson.
              Applying procedures and practices without regard for principles is equivalent to throwing darts
              aimlessly at a dartboard in the hopes of connecting. The way we use these tools, tactics, and
              procedures matters; methods should be flexible. Principles guide us in the right direction and
              help us accomplish our objectives while enabling the replication of our achievements and a
              deeper comprehension of our mistakes. Making our principles clearer can help us understand
              the &quot;why&quot; behind the &quot;what&quot; we do as leaders.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>Concluding Thoughts</h2>
            <p className="lead" style={{ color: "black" }}>
              These recommendations are based on our experience and have been able to help
              organisations reimagine their way of working. We hope these tenets will be helpful to the next
              generation of organisations to build a workplace that is capable and sustainable.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 style={{ color: "#012237", fontWeight: "normal" }}>References</h2>
            <p className="lead" style={{ color: "black" }}>
              <a href="">https://www.researchgate.net/publication/24090028_The_Principles_of_Distributed_Innovation </a>
              Sykes T. (2019, December 2). Why you need to learn to adapt. Retrieved December 9, 2019, from <a href="https://www.entrepreneur.com/article/343047">https://www.entrepreneur.com/article/343047</a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container g-0">
        <div className="row g-0">
          <div className="col-sm-6 col-md-3 col-lg-3"><img style={{ width: "100%" }} src={imgone} /></div>
          <div className="col-sm-6 col-md-3 col-lg-3"><img style={{ width: "100%" }} className="" src={imgtwo} /></div>
          <div className="col-sm-6 col-md-3 col-lg-3"><img style={{ width: "100%" }} className="" src={imgthree} /></div>
          <div className="col-sm-6 col-md-3 col-lg-3"><img style={{ width: "100%" }} className="" src={imgfour} /></div>
          <div className="col-sm-6 col-md-3 col-lg-3"><img style={{ width: "100%" }} className="" src={imgfive} /></div>
          <div className="col-sm-6 col-md-3 col-lg-3"><img style={{ width: "100%" }} className="" src={imgsix} /></div>
        </div>
      </div>
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <Popup
              trigger={<button type="button" className="btn btn-danger btn-lg">Engage Us</button>}
              modal
              nested
              style={{ width: "50%" }}
            >
              {close => (
                <div className="modal-popup">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="headertwo"> Enterprise Coaching & Consulting </div>

                  <form
                    action="#"
                    method="POST"
                    className="become-teacher__form-content contact-form-validated col-12"
                  >

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Your Name"
                            id="form_name"
                            className="form-control"
                            name="name"
                            value={state.name}
                            onChange={handleInputChange}
                          />
                          <small style={{ color: "red" }}>{errors.name}</small>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Phone Number"
                            id="form_lastname"
                            className="form-control"
                            name="phone"
                            value={state.phone}
                            onChange={handleInputChange}
                            minLength="10"
                          />
                          <small style={{ color: "red" }}>{errors.phone}</small>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">

                        <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={state.email} onChange={handleInputChange} />

                        <small style={{ color: "red" }}>{errors.email}</small>

                      </div>
                    </div>

                    <div className="row">

                      <div className="col-md-12">
                        <div className="form-group">

                          <textarea id="form_message" name="message" className="form-control" placeholder="Your Query" rows="2" value={state.message} onChange={handleInputChange}></textarea>

                          <small style={{ color: "red" }}>{errors.message}</small>

                        </div>
                      </div>

                      <div className="col-md-12 centered-popup-input">

                        <input type="submit" class="btn btn-success btn-send" value="Send message" onClick={submitHandler} />

                        <br />

                        <small style={{ color: "green" }}>{submissionMessage}</small>

                      </div>

                    </div>

                  </form>
                </div>
              )}
            </Popup>

          </div>
        </div>
      </div>


      <Footer />
    </Layout>
  );
};

export default Coaching;
