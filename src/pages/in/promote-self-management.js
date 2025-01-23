import React, { useEffect } from "react";
import Footer from "../../components/footer/InFooter";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import tuckmanTeam from "../../assets/images/tukman.png"
import PageBanner from "../../components/PageBanner";
import promoteSelf from "../../assets/images/Self-Management2.jpg"
import bannerimage from '../../assets/images/try-Scrum-imgaes/banner-imgs/agilecct.jpg'
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
      nomen: "Promote Self Management",
      team: [
        {
          name: "Team Coaching",
          radio: "checked"
        },
        {
          name: "Why Self Management",
        },
        {
          name: "Increasing Awareness To Promote Self Management",

        },
        {
          name: "Benefits Of Self Management"

        },

        {
          name: "Tips To Promote Self Management",
          border: "none",
          height: "0"
        }
      ]
    }
  ]

  return (
    <Layout metaDesc="Agile Coaching Competencies - Team Coaching Capabilities - Promote self management | tryScrum" pageName="promote-self-management" pageTitle="Agile Coaching Competencies - Team Coaching Capabilities - Promote self management | tryScrum" image={promoteSelf}>

      <NavTwo />
      <PageBanner
        title="Promote Self Management"
        image={promoteSelf}
        uri={"promote-self-management"}
        uri_2={"team-coaching-capabilities"}
        title_2={"Team Coaching Capabilities"}
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
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }} id="">Team Coaching</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  "Team Coaching is partnering in a co-creative and reflective process with a team on its dynamics and relationships in a way that inspires them to maximise their abilities and potential to reach their common purpose and shared goals."
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  <ul style={{ listStyle: "none", paddingInlineStart: "10px" }}>
                    <li> <b>—</b> International Coaching Federation</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify", listStyle: "__" }} >
                  On interpreting the above definition, it points out that,
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "", textAlign: "justify" }} >
                  <ul>
                    <li>The coach helps the team to enhance the awareness of their team dynamics</li>
                    <li>The coach enables the team to unlock their abilities and potential themselves</li>
                    <li>Focus is on the team's purpose and goals and not the coach's</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Team Coaches do these standing on the belief that the team has all the capabilities, and as a coach, partner with the teams to help them self-manage their way forward, not dictate it.
                </p>
              </div>}
              {/* page 1 --end*/}

              {/* page 2--start*/}
              {position == 1 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Why Self Management</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  At the end of the day, an organisation's teams exist to create value by solving specific needs. Now while trying to create value, the teams may have to overcome many challenges. When the team isn't self-sufficient to decide or change a direction, it delays customer value delivery. Now with the daunting demands in the market, even the slightest delay diminishes the value the team produces.
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  A team with self-management capabilities can
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <ul >
                    <li>Adapt to challenges as they will have the autonomy to decide within boundaries. They don't have to wait for approval outside of the team.</li>
                    <li>Adapt to changing needs as they can re-order their work based on priority or value.</li>
                    <li>This autonomy, in turn, increases team engagement as they will feel accountable as a team.</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So a team to be responsive, self-management is one of the crucial components. It often differentiates a great team from a good team.
                </p>
              </div>}
              {/* page 2 --end*/}

              {/* page 3--start*/}
              {position == 2 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Increasing Awareness To Promote Self Management</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Teams are not effective teams right from day one. It goes through a journey before becoming a real or performing team. We have representations from J-Cure or Tuckman's team development model to help us understand the journey.
                </p>
                <br />

                {/* <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <img src={tuckmanTeam} width="100%" />
                </p> */}

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <img width="100%" src={tuckmanTeam} />
                      </div>
                    </div>
                  </div>
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So, for a team to be self-managing, the foundations of self-management capabilities need to be built into the team.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>forming</strong> stage, the team members will have limited information about their existence as a team. Like, they may need clarity about their roles & responsibilities, team goals, team values, relationship with other team members, and their relationship with other teams in the organisation.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Here is where the team coach needs to increase the awareness of what they need to know about themselves. Then, coaches introduce tools like <a href="https://theteamcanvas.com/" target="_blank">Team Canvas</a> to help teams create their identity and understand their existence as a team.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>storming</strong> stage, the team members will start to have ideological differences, cultural differences, political differences, etc. The differences will inherently create the toxins like blaming, contempt, stonewalling, and defensiveness (Four Team Toxins from ORSC) within the team.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Here is where the team coach needs to be mindful of helping them to create trust & Psychological safety within the team. This stage can easily break or make the team. Coaches can introduce tools like <a href="https://crrglobal.com/wp-content/uploads/2022/01/Figure-17-Example-Designing-The-Team-Alliance-DTA.pdf" target="_blank">Design Team Alliance (DTA)</a> and <a href="https://responsibility.com/responsibility-process/" target="_blank">Responsibility</a> Process to help teams understand how they want to be when things are difficult.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>Norming</strong> stage, the team starts forming their processes and working ways. Then, the team begins to make consensus-based decisions for themselves. Here is where the coach helps the team accumulate the benefits of teamwork.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Introducing Self-assessment tools like <a href="https://www.comparativeagility.com/capabilities/psychological-safety-assessment" target="_blank">Psychological safety assessment</a> and <a href="https://www.comparativeagility.com/capabilities/inspired-teams-assessment" target="_blank">Team Maturity Assessment</a> helps the team understand their current maturity and take actionable steps to improve their effectiveness as a team continuously.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>Performing</strong> stage, the team knows their strategic connect and alignment towards the organisation's vision. Then, it starts achieving its goals to deliver value. Here, the coach can promote a high degree of self-management by being invisibly present.
                </p>
                <br />
              </div>}
              {/* page 3 --end*/}


              {/* page 4--start*/}
              {position == 3 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Benefits Of Self Management</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <strong style={{ color: "#012237" }}>Better Outcomes:</strong> When the team members can manage their work without needing much external help, they can prioritise and re-order their work based on the Customer Value, Risk or Dependencies. Re-ordering helps the team focus on delivering better outcomes rather than wasting time waiting for approvals.
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <strong style={{ color: "#012237" }}>Better Customer Satisfaction:</strong> People on the ground have better visibility of end-user problems. So autonomy in decision-making within boundaries leads to a faster turnaround time for customer requests or issues. A shorter turnaround time for serving customers helps improve customer satisfaction.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <strong style={{ color: "#012237" }}>Better Customer Satisfaction:</strong> People on the ground have better visibility of end-user problems. So autonomy in decision-making within boundaries leads to a faster turnaround time for customer requests or issues. A shorter turnaround time for serving customers helps improve customer satisfaction.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <strong style={{ color: "#012237" }}>Better Commitment:</strong> When the team members have an environment to decide on what they will work on and set up goals for themselves, they will sense the need for accountability as they are answerable for their goals and will exhibit high commitment.
                </p>
                <br />
              </div>}
              {/* page 4 --end*/}

              {/* tips 1 - start */}

              {position == 4 &&
                <>
                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Team Formation</h2>
                    <p className="lead" style={{ color: "black", textAlign: "justify" }} >A cross-functional team with all the necessary skills to fulfil any need or add value is the foundation for any team's self-management. So a coach working with organisation leaders to set guardrails for team formation, considering technical and functional expertise needed for a team, can lay the foundation for self-management. Then, when team members can choose their teams based on the guardrails set, it can set the tone for self-management.
                    </p>
                    <br />
                  </div>




                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Goal Setting</h2>
                    <p className="lead" style={{ color: "black", textAlign: "justify" }} >Goals enable the team to focus. It is essential for self-management as it will serve as transparent information to help the team know what is necessary at any given time.
                    </p>
                    <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >Goals provide flexibility for trade-offs. For example, requirements change and scope creep significantly constrains the team's ability to deliver the end user value within the timelines. So the goals are handy in negotiating the minimum work the team can do to reach the goal.
                    </p>
                    <br />
                  </div>


                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Trust Building</h2>
                    <p className="lead" style={{ color: "black", textAlign: "justify" }} >To promote self-management, open communication within a team is essential as it helps them identify problems early. Lack of trust is a critical challenge for open communication.
                    </p>
                    <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >Only when people trust each other, the team members will have the psychological safety to open up under challenging circumstances. But, unfortunately, trust-building in a team isn't an overnight thing. Soft starters, like, teams getting to know each other about strengths, weaknesses, interests etc., create an environment of vulnerability.
                    </p>
                    <br />
                  </div>



                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Self Reflection</h2>
                    <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                      Teams providing feedback among themselves shall help them hold their peers accountable. Self-reflection activities like retrospectives allow share feedback on each other's work and identify improvements for themselves. In addition, enabling them with resources they need to achieve their goals faster, like contemporary tools (CI/CD), training on modern engineering practices or access to information through learning portals, improves self-management.
                    </p>
                    <br />
                  </div>


                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Pull Based Planning</h2>
                    <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                      Enabling the team members to pull their work based on their areas of interest or strengths and weaknesses increases their commitment. Also, when finished early, team members can self-manage and pull the next highest order of work based on their set goal. Any work that takes longer than forecasted can be brought to the team's attention to seek help.
                    </p>
                  </div>
                </>
              }


            </div>


            {/* moblie display */}

            <div className="col-xl-12 p-3 overflow-scroll screendisplaymob">
              {/* page 1--start*/}
              {<div >
                <h3 style={{ color: "#012237", fontWeight: "600", paddingBottom: "5px" }}>Promote Self Management</h3>
                <br />
                <h3 style={{ color: "#012237", fontWeight: "500" }} id="">Team Coaching</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  "Team Coaching is partnering in a co-creative and reflective process with a team on its dynamics and relationships in a way that inspires them to maximise their abilities and potential to reach their common purpose and shared goals."
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <ul style={{ listStyle: "none", paddingInlineStart: "10px" }}>
                    <li> <b>—</b> International Coaching Federation</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  On interpreting the above definition, it points out that,
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  <ul style={{ listStyle: "none", paddingInlineStart: "10px" }}>
                    <li> <b>—</b> The coach helps the team to enhance the awareness of their team dynamics</li>
                    <li> <b>—</b> The coach enables the team to unlock their abilities and potential themselves</li>
                    <li> <b>—</b> Focus is on the team's purpose and goals and not the coach's</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Team Coaches do these standing on the belief that the team has all the capabilities, and as a coach, partner with the teams to help them self-manage their way forward, not dictate it.
                </p>
                <br />
              </div>}
              {/* page 1 --end*/}

              {/* page 2--start*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h3 style={{ color: "#012237", fontWeight: "500" }}>Why Self Management</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  At the end of the day, an organisation's teams exist to create value by solving specific needs. Now while trying to create value, the teams may have to overcome many challenges. When the team isn't self-sufficient to decide or change a direction, it delays customer value delivery. Now with the daunting demands in the market, even the slightest delay diminishes the value the team produces.
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  A team with self-management capabilities can
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  <ul style={{ listStyle: "none", paddingInlineStart: "10px" }}>
                    <li> <b>—</b> Adapt to challenges as they will have the autonomy to decide within boundaries. They don't have to wait for approval outside of the team.</li>
                    <li> <b>—</b> Adapt to changing needs as they can re-order their work based on priority or value.</li>
                    <li> <b>—</b> This autonomy, in turn, increases team engagement as they will feel accountable as a team.</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So a team to be responsive, self-management is one of the crucial components. It often differentiates a great team from a good team.
                </p>
                <br />
              </div>}
              {/* page 2 --end*/}

              {/* page 3--start*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h3 style={{ color: "#012237", fontWeight: "500" }}>Increasing Awareness To Promote Self Management</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  Teams are not effective teams right from day one. It goes through a journey before becoming a real or performing team. We have representations from J-Cure or Tuckman's team development model to help us understand the journey.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3">
                        <img width="100%" src={tuckmanTeam} />
                      </div>
                    </div>
                  </div>
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So, for a team to be self-managing, the foundations of self-management capabilities need to be built into the team.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>forming</strong> stage, the team members will have limited information about their existence as a team. Like, they may need clarity about their roles & responsibilities, team goals, team values, relationship with other team members, and their relationship with other teams in the organisation.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Here is where the team coach needs to increase the awareness of what they need to know about themselves. Then, coaches introduce tools like <a href="https://theteamcanvas.com/" target="_blank">Team Canvas</a> to help teams create their identity and understand their existence as a team.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>storming</strong> stage, the team members will start to have ideological differences, cultural differences, political differences, etc. The differences will inherently create the toxins like blaming, contempt, stonewalling, and defensiveness (Four Team Toxins from ORSC) within the team.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Here is where the team coach needs to be mindful of helping them to create trust & Psychological safety within the team. This stage can easily break or make the team. Coaches can introduce tools like <a href="https://crrglobal.com/wp-content/uploads/2022/01/Figure-17-Example-Designing-The-Team-Alliance-DTA.pdf" target="_blank">Design Team Alliance (DTA)</a> and <a href="https://responsibility.com/responsibility-process/" target="_blank">Responsibility</a> Process to help teams understand how they want to be when things are difficult.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>Norming</strong> stage, the team starts forming their processes and working ways. Then, the team begins to make consensus-based decisions for themselves. Here is where the coach helps the team accumulate the benefits of teamwork.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Introducing Self-assessment tools like <a href="https://www.comparativeagility.com/capabilities/psychological-safety-assessment" target="_blank">Psychological safety assessment</a> and <a href="https://www.comparativeagility.com/capabilities/inspired-teams-assessment" target="_blank">Team Maturity Assessment</a> helps the team understand their current maturity and take actionable steps to improve their effectiveness as a team continuously.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the <strong style={{ color: "#012237" }}>Performing</strong> stage, the team knows their strategic connect and alignment towards the organisation's vision. Then, it starts achieving its goals to deliver value. Here, the coach can promote a high degree of self-management by being invisibly present.
                </p>

              </div>}
              {/* page 4 --end*/}

              {/* tips 1 - start */}

              {<div>
                <h3 style={{ color: "#012237", fontWeight: "500", paddingBottom: "5px" }}>Tips To Promote Self Management</h3>
                <br />
                <h3 style={{ color: "#012237", fontWeight: "500" }}>Team Formation</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >A cross-functional team with all the necessary skills to fulfil any need or add value is the foundation for any team's self-management. So a coach working with organisation leaders to set guardrails for team formation, considering technical and functional expertise needed for a team, can lay the foundation for self-management. Then, when team members can choose their teams based on the guardrails set, it can set the tone for self-management.
                </p>
                <br />
              </div>
              }

              {/* tips 2 - end*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                <h3 style={{ color: "#012237", fontWeight: "500" }}>Goal Setting</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >Goals enable the team to focus. It is essential for self-management as it will serve as transparent information to help the team know what is necessary at any given time.
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >Goals provide flexibility for trade-offs. For example, requirements change and scope creep significantly constrains the team's ability to deliver the end user value within the timelines. So the goals are handy in negotiating the minimum work the team can do to reach the goal.
                </p>
                <br />
              </div>
              }
              {/* tips 2 - end*/}


              {/* tips 2 - end*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                <h3 style={{ color: "#012237", fontWeight: "500" }}>Trust Building</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >To promote self-management, open communication within a team is essential as it helps them identify problems early. Lack of trust is a critical challenge for open communication.
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >Only when people trust each other, the team members will have the psychological safety to open up under challenging circumstances. But, unfortunately, trust-building in a team isn't an overnight thing. Soft starters, like, teams getting to know each other about strengths, weaknesses, interests etc., create an environment of vulnerability.
                </p>
                <br />
              </div>
              }
              {/* tips 2 - end*/}


              {/* tips 3 - end*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                <h3 style={{ color: "#012237", fontWeight: "500" }}>Self Reflection</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  Teams providing feedback among themselves shall help them hold their peers accountable. Self-reflection activities like retrospectives allow share feedback on each other's work and identify improvements for themselves. In addition, enabling them with resources they need to achieve their goals faster, like contemporary tools (CI/CD), training on modern engineering practices or access to information through learning portals, improves self-management.
                </p>
                <br />
              </div>
              }
              {/* tips 3 - end*/}


              {/* tips 4 - end*/}
              {<div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                <h3 style={{ color: "#012237", fontWeight: "500" }}>Pull Based Planning</h3>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  Enabling the team members to pull their work based on their areas of interest or strengths and weaknesses increases their commitment. Also, when finished early, team members can self-manage and pull the next highest order of work based on their set goal. Any work that takes longer than forecasted can be brought to the team's attention to seek help.
                </p>
              </div>
              }
              {/* tips 4 - end*/}

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

export default Promoteselfmanagement;
