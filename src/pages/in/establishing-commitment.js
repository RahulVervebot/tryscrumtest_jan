import React, { useEffect } from "react";
import Footer from "../../components/footer/InFooter";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import tuckmanTeam from "../../assets/images/tukman.png"
import PageBanner from "../../components/PageBanner";
import promoteSelf from "../../assets/images/Establishing-Commitments-Coaching-Techniques.jpg"
import bannerimage from '../../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'
import quitLeadership from "../../assets/images/no_rules_netflix.jpg"
import artofLaser from "../../assets/images/leadership_coaching_followership.jpg"
import { Link } from "gatsby";




const Promoteselfmanagement = () => {


  const [position, setPosition] = React.useState(0)

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 290;
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
      nomen: "Establishing Commitments",
      team: [
        {
          name: "Establishing Commitments in Leadership Coaching",
          radio: "checked"
        },
        {
          name: "What does Establishing Commitments mean?",
        },
        {
          name: "Why is Establishing Commitments necessary?",
        },
        {
          name: "Tips for Establishing Commitments; Coaching Techniques",

        },
        {
          name: "Conclusion"

        },

        {
          name: "References",
          border: "none",
          height: "0"
        }
      ]
    }
  ]

  return (
    <Layout metaDesc="Agile Coaching Competencies- Leadership Coaching - Establish Commitments | tryScrum" pageName="promote-self-management" pageTitle="Agile Coaching Competencies- Leadership Coaching - Establish Commitments | tryScrum" image={promoteSelf}>

      <NavTwo />
      <PageBanner
        title="Establishing Commitments"
        image={promoteSelf}
        uri={"establishing-commitment"}
        uri_2={"leadership-coaching-capabilities"}
        title_2={"Leadership Coaching Capabilities"}
        // active_2={""}
        active_1={"active"}
        padding={18} 
        />

      {/* <div className="container-fluid"
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
              <Link to="" style={{ cursor: "default" }}>Promote Self Management</Link>
            </li>
          </ul>
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <Link to="/"></Link>
            </li>
            <li className="screendisplaymob">
              <Link to="">Promote Self Management</Link>
            </li>
          </ul>
          <br />
          <span className="align-center text-center text-uppercase text-white" style={{ fontSize: "30px", fontWeight: "600", width: "100%" }}>Promote <br className="screendisplaymob" />Self Management</span>
        </div>
        <br />
      </div> */}

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
              {/* page 1--start*/}
              {position == 0 && <div>
                <h2 style={{ color: "#012237", fontWeight: "600" }}>Establishing Commitments in Leadership Coaching</h2>
              <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
 Navigating the challenges of our changing world, leaders face unprecedented obstacles marked
by volatility, uncertainty, complexity, and ambiguity (VUCA). In this context, establishing
commitments emerges as a skill for leaders. It serves as an element in guiding organizations
through change. Optimizing overall efficiency. At tryScrum, our experience underscores the role
of commitment in fostering leadership. We encourage leaders to think and optimize the system.
 </p>
 <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
 The commitment and behavior of leaders significantly impact the success of initiatives. As
highlighted by Rajamanis' study titled "Impact of Leadership on Agile Transformation"
(Rajamani, 2023), it becomes evident that leaders' demonstrated commitment directly
influences transformation outcomes. The behaviors displayed by leaders set the tone for the
workforce, shaping company culture and determining employee engagement levels. In
transformations, specifically, leadership commitment becomes more critical. It acts as a catalyst
for embracing agility and cultivating a culture of improvement. With a commitment from leaders,
the chances of achieving sustainable transformation are significantly higher. This emphasizes
Establishing Commitment's role in guiding organizations toward change.
 </p>
 </div>}
              {position == 1 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "600" }}> What does Establishing Commitments mean?</h2>
 <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >Establishing Commitments refers to the leadership coaching skill that focuses on gaining and
strengthening leaders' dedication to change and improving the system as a whole. It goes
beyond agreement or compliance, involving a shift in leaders' mindsets and their active
involvement with the evolving landscape. At tryScrum, we emphasize cultivating commitment
rather than passively accepting new directives.</p>
            
              </div>}
              {/* page 1 --end*/}

              {/* page 2--start*/}
              {position == 2 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "normal" }}>Why is Establishing Commitments necessary?</h2>
 <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >In today's complex and ambiguous (VUCA) world of constant and unpredictable change, leaders
must align themselves with organizational goals and adapt to evolving circumstances.
Establishing Commitments acts as the adhesive that binds leaders to the vision and strategy,
ensuring a synchronized effort in navigating uncertainties. This commitment goes beyond
compliance; it prompts a mindset shift among leaders, encouraging them to think the picture
and optimize the system holistically</p>

              </div>}
              {/* page 2 --end*/}

              {/* page 3--start*/}
              {position == 3 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
               
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Tips for Establishing Commitments; Coaching Techniques</h2>
                <h3 style={{ color: "#012237", fontWeight: "500" }} id="">1.Listening and Questioning</h3>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Utilize listening techniques to comprehend leaders' perspectives and concerns better. Employ-ended questions that prompt responses encourage leaders to articulate their thoughts while fostering a sense of ownership in decision-making.
                  <br/>*Tip: "Could you please share your insights on the proposed changes? How do they align with your leadership style?
                 </p>

                  <h3 style={{ color: "#012237", fontWeight: "500" }}>2.Providing Feedback for Growth</h3>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                Under the guidance of Reed Hastings, Netflix has become known for its approach and a strong
emphasis on improvement. According to Reed, feedback is deeply embedded in Netflix's
culture, going beyond being a process. At tryScrum, we find inspiration in this culture,
particularly regarding coaching leaders.
</p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                As leadership coaches, we strongly advocate embracing a feedback and feedforward approach.
Like the Netflix model, where every colleague is expected to contribute feedback, leaders
should actively. Provide feedback within their teams. This transparent exchange fosters an
environment that promotes growth and advancement. </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                Let's imagine a scenario at Netflix where a leader named Alex leads a team through a period of
change. As leadership coaches, our advice to Alex would be to offer feedback to team
members, acknowledging their strengths and areas for improvement. Simultaneously, Alex
needs to encourage team members to reciprocate by promoting communication.</p>
<p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
When working with leaders, we stress the importance of establishing an agreement that fosters
an honest culture. This involves setting expectations that are not welcome but actively
encourage feedback. Leadership coaches play a role, in guiding leaders towards initiating
constructive conversations.
</p>
<p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
Leaders should understand that feedback is not one process; it works both ways. Leaders need
to seek feedback on their leadership style and effectiveness actively.
</p>
<p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
Tip; "As we embark on our coaching journey, let's commit to open and honest feedback.
Encourage your team members to share their insights and seek their feedback, on your
leadership. This exchange of perspectives will strengthen the coaching relationship. Contribute
to the growth of your team
</p>
<p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
By incorporating aspects of Netflix's approach to feedback, leadership coaches can guide
leaders in creating an environment where continuous improvement becomes a shared
commitment rather than a goal.</p>

<h3 style={{ color: "#012237", fontWeight: "500" }}>3. Coaching Focused on Strengths</h3>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                Our study on strengths coaching is pivotal for this competency. Leveraging a leader's strengths can enhance their dedication. By aligning initiatives with their strengths, leaders are more likely to embrace change enthusiastically, recognizing it as an opportunity for personal and
professional growth. 
                <br />
                *Tip: "Taking into account your thinking abilities, how can we harness this strength to implement the proposed changes successfully?"
                </p>

                <h3 style={{ color: "#012237", fontWeight: "500" }}>4. Alignment of Goals and Visualization</h3>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                Organizational goals must resonate with leaders on a level. Conduct visualization exercises that
help leaders envision how their commitment contributes to collective success.<br/>
                *Tip: "Let's visualize the outcomes of these changes within your realm of leadership."How do
you imagine your team flourishing in this setting?"
                  </p>
                {/* <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <img src={tuckmanTeam} width="100%" />
                </p> */}

              </div>}
              {/* page 2 --end*/}


              {position == 4 &&
             
                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Conclusion</h2>
                    <p className="lead" style={{ color: "black", textAlign: "justify" }} >In today's changing VUCA world, Establishing Commitments goes beyond a mere checkbox and
becomes a transformative process. At tryScrum, we advocate for a coaching approach that
goes beyond surface-level agreement and dives into the mindset shifts of leaders. By
embracing commitment, leaders become better equipped to think big, optimize the system, and
navigate the complexities of the business landscape.
         </p>
         <p className="lead" style={{ color: "black", textAlign: "justify" }} >
         As Kouzes and Posner (2017) put it, "Leadership isn't about being in charge; it's about taking
care of those under your charge." Establishing Commitments forms the foundation of this
philosophy, fostering a leadership culture that thrives when faced with VUCA challenges.


         </p>
                  </div>
     
              }

              {position == 5 &&
                <>
                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>References</h2>
                    <p className="lead" style={{ color: "black", textAlign: "justify" }} >Kouzes, J. M., & Posner, B. Z. (2017). The Leadership Challenge: How to Make Extraordinary
Things Happen in Organizations. Wiley.
         </p>
         <p className="lead" style={{ color: "black", textAlign: "justify" }} > Grant, A. M. (2017). The Coaching Habit: Say Less Ask More & Change the Way You Lead
Forever—box of Crayons Press. </p>
 <h5 style={{ color: "#012237", fontWeight: "500" }}>Further Reading</h5>
<p className="lead pt-4" style={{ color: "black", textAlign: "justify",display:"flex", gap:5 }} >
                      <img width={240} height={320} src={quitLeadership} alt="quitLeadership" />
                      <img width={240} height={320} src={artofLaser} alt="artofLaser" />
                      
                      </p>
                  </div>




                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                  </div>


                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                  </div>
                </>
              }

            </div>


            {/* moblie display */}

            <div className="col-xl-12 p-3 overflow-scroll screendisplaymob">
              {/* page 1--start*/}
              {<div >
                {/* <h3 style={{ color: "#012237", fontWeight: "600", paddingBottom: "5px" }}>Establishing Commitments
</h3> */}
                <br />
                <h2 style={{ color: "#012237", fontWeight: "600" }}>Establishing Commitments in Leadership Coaching</h2>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
 Navigating the challenges of our changing world, leaders face unprecedented obstacles marked
by volatility, uncertainty, complexity, and ambiguity (VUCA). In this context, establishing
commitments emerges as a skill for leaders. It serves as an element in guiding organizations
through change. Optimizing overall efficiency. At tryScrum, our experience underscores the role
of commitment in fostering leadership. We encourage leaders to think and optimize the system.
 </p>
 <p className="lead" style={{ color: "black", textAlign: "justify" }} >
 The commitment and behavior of leaders significantly impact the success of initiatives. As
highlighted by Rajamanis' study titled "Impact of Leadership on Agile Transformation"
(Rajamani, 2023), it becomes evident that leaders' demonstrated commitment directly
influences transformation outcomes. The behaviors displayed by leaders set the tone for the
workforce, shaping company culture and determining employee engagement levels. In
transformations, specifically, leadership commitment becomes more critical. It acts as a catalyst
for embracing agility and cultivating a culture of improvement. With a commitment from leaders,
the chances of achieving sustainable transformation are significantly higher. This emphasizes
Establishing Commitment's role in guiding organizations toward change.
 </p>

 <h3 style={{ color: "#012237", fontWeight: "500" }} id="">What does Establishing Commitments mean?</h3>
 <p className="lead" style={{ color: "black", textAlign: "justify" }} >Establishing Commitments refers to the leadership coaching skill that focuses on gaining and
strengthening leaders' dedication to change and improving the system as a whole. It goes
beyond agreement or compliance, involving a shift in leaders' mindsets and their active
involvement with the evolving landscape. At tryScrum, we emphasize cultivating commitment
rather than passively accepting new directives.</p>

<h3 style={{ color: "#012237", fontWeight: "500" }} id="">Why is Establishing Commitments necessary?</h3>
 <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >In today's complex and ambiguous (VUCA) world of constant and unpredictable change, leaders
must align themselves with organizational goals and adapt to evolving circumstances.
Establishing Commitments acts as the adhesive that binds leaders to the vision and strategy,
ensuring a synchronized effort in navigating uncertainties. This commitment goes beyond
compliance; it prompts a mindset shift among leaders, encouraging them to think the picture
and optimize the system holistically</p>

                <h3 style={{ color: "#012237", fontWeight: "500" }} id="">Listening and Questioning</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                Utilize listening techniques to comprehend leaders' perspectives and concerns better.
Employ-ended questions that prompt responses encourage leaders to articulate their thoughts
while fostering a sense of ownership in decision-making.<br/>*Tip: "Could you please share your insights on the proposed changes? How do they align with
your leadership style?"</p>

              </div>}
              {/* page 1 --end*/}

              {/* page 2--start*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h3 style={{ color: "#012237", fontWeight: "500" }}>Providing Feedback for Growth</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                Under the guidance of Reed Hastings, Netflix has become known for its approach and a strong
emphasis on improvement. According to Reed, feedback is deeply embedded in Netflix's
culture, going beyond being a process. At tryScrum, we find inspiration in this culture,
particularly regarding coaching leaders.<br/>
As leadership coaches, we strongly advocate embracing a feedback and feedforward approach.
Like the Netflix model, where every colleague is expected to contribute feedback, leaders
should actively. Provide feedback within their teams. This transparent exchange fosters an
environment that promotes growth and advancement.<br/>
Let's imagine a scenario at Netflix where a leader named Alex leads a team through a period of
change. As leadership coaches, our advice to Alex would be to offer feedback to team
members, acknowledging their strengths and areas for improvement. Simultaneously, Alex
needs to encourage team members to reciprocate by promoting communication.<br/>
When working with leaders, we stress the importance of establishing an agreement that fosters
an honest culture. This involves setting expectations that are not welcome but actively
encourage feedback. Leadership coaches play a role, in guiding leaders towards initiating
constructive conversations.<br/>
Leaders should understand that feedback is not one process; it works both ways. Leaders need
to seek feedback on their leadership style and effectiveness actively.<br/>
Tip; "As we embark on our coaching journey, let's commit to open and honest feedback.
Encourage your team members to share their insights and seek their feedback, on your
leadership. This exchange of perspectives will strengthen the coaching relationship. Contribute
to the growth of your team."<br/>
By incorporating aspects of Netflix's approach to feedback, leadership coaches can guide
leaders in creating an environment where continuous improvement becomes a shared
commitment rather than a goal.
 </p>

              </div>}
              {/* page 2 --end*/}

              {/* page 3--start*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h3 style={{ color: "#012237", fontWeight: "500" }}>Coaching Focused on Strengths</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                Our study on strengths coaching is pivotal for this competency. Leveraging a leader's strengths
can enhance their dedication. By aligning initiatives with their strengths, leaders are more likely
to embrace change enthusiastically, recognizing it as an opportunity for personal and
professional growth.<br/>*Tip: "Taking into account your thinking abilities, how can we harness this strength to implement
the proposed changes successfully?"</p>

              </div>}
              {/* page 4 --end*/}

              {/* tips 1 - start */}

              {<div>
                <h3 style={{ color: "#012237", fontWeight: "500", paddingBottom: "5px" }}>Alignment of Goals and Visualization</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >Organizational goals must resonate with leaders on a level. Conduct visualization exercises that
help leaders envision how their commitment contributes to collective success.<br/>
*Tip: "Let's visualize the outcomes of these changes within your realm of leadership."How do
you imagine your team flourishing in this setting?"
 </p>
                <br />
              </div>
              }

              {/* tips 2 - end*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                <h3 style={{ color: "#012237", fontWeight: "500" }}>Conclusion</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >In today's changing VUCA world, Establishing Commitments goes beyond a mere checkbox and
becomes a transformative process. At tryScrum, we advocate for a coaching approach that
goes beyond surface-level agreement and dives into the mindset shifts of leaders. By
embracing commitment, leaders become better equipped to think big, optimize the system, and
navigate the complexities of the business landscape.<br/>
As Kouzes and Posner (2017) put it, "Leadership isn't about being in charge; it's about taking
care of those under your charge." Establishing Commitments forms the foundation of this
philosophy, fostering a leadership culture that thrives when faced with VUCA challenges.</p>
              
              </div>
              }
              {/* tips 2 - end*/}


              {/* tips 2 - end*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                <h3 style={{ color: "#012237", fontWeight: "500" }}>References</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                Kouzes, J. M., & Posner, B. Z. (2017). The Leadership Challenge: How to Make Extraordinary
Things Happen in Organizations. Wiley.<br/>
Grant, A. M. (2017). The Coaching Habit: Say Less Ask More & Change the Way You Lead
Forever—box of Crayons Press.
 </p>
 <h5 style={{ color: "#D1161F", fontWeight: "500" }}>Further Reading</h5>
 <p className="lead pt-4" style={{ color: "black", textAlign: "justify",display:"flex", gap:5 }} >
                      <img width={240} height={320} src={quitLeadership} alt="quitLeadership" />
                      <img width={240} height={320} src={artofLaser} alt="artofLaser" />


                    </p>
              </div>
              }

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6 d-flex justify-content-start">
            <Link className="arrow-back" href='/leadership-coaching-capabilities/'>
              <div className='text-left w-100' style={{ width: "fit-content" }} ><span className='arrow-left'><i class="fa fa-arrow-left" aria-hidden="true"></i> </span>Leadership Coaching Competencies</div>
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

export default Promoteselfmanagement;
