import React, { useEffect } from "react";
import Footer from "../../components/footer/InFooter";
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import tuckmanTeam from "../../assets/images/tukman.png"
import PageBanner from "../../components/PageBanner";
import promoteSelf from "../../assets/images/mad.png"
import quitLeadership from "../../assets/images/quiet-eadership.jpg"
import artofLaser from "../../assets/images/art-of-laser.jpg"
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
      nomen: "Maintaining Authentic Distance",
      team: [
        {
          name: "Team Coaching & Maintaining Authentic Distance",
          radio: "checked"
        },
        {
          name: "What is Maintaining Authentic Distance?",
        },
        {
          name: "Why 'Maintain Authentic Distance'?",

        },
        {
          name: "Tips to Maintain Authentic Distance"

        },

        {
          name: "Suggested Readings",
          border: "none",
          height: "0"
        }
      ]
    }
  ]

  return (
    <Layout metaDesc="Team Coaching Capabilities - Maintaining Authentic Distance | tryScrum" pageName="maintaining-authentic-distance" pageTitle="Team Coaching Capabilities - Maintaining Authentic Distance | tryScrum" image={promoteSelf}>

      <NavTwo />
      <PageBanner
        title="Maintaining Authentic Distance"
        image={promoteSelf}
        uri={"maintaining-authentic-distance"}
        uri_2={"team-coaching-capabilities"}
        title_2={"Team Coaching Capabilities"}
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
                <h2 style={{ color: "#012237", fontWeight: "500" }} id="">Team Coaching & Maintaining Authentic Distance</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  On interpreting the International Coaching Federation's definition of Team Coaching, we pointed out that it revolves around keeping the team's needs at the centre and serving them by
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  <ul>
                    <li>Elevating the team's relationships through increased understanding of the peers</li>
                    <li>Helping team members uncover their potential or abilities</li>
                    <li>Maximizing opportunities for an unwavering focus on the team's purpose and goals</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  On interpreting the above definition, it points out that,
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  <ul>
                    <li>The coach helps the team to enhance the awareness of their team dynamics</li>
                    <li>The coach enables the team to unlock their abilities and potential themselves</li>
                    <li>Focus is on the team's purpose and goals and not the coach's</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So, as an Agile coach, one needs multiple capabilities to bring this to life in their Team Coaching. From tryScrum, we have listed six capabilities based on our experiences. We at tryScrum strongly believe "Maintaining Authentic Distance" would form one of the core capabilities of Team Coaching Capabilities. It puts the team's needs at the centre rather than the Coach's. By maintaining authentic distance, a coach can better serve the team's needs by being a fly on the wall
                </p>
              </div>}
              {/* page 1 --end*/}

              {/* page 2--start*/}
              {position == 1 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>What is Maintaining Authentic Distance?</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Maintaining Authentic distance is similar to holding a physical space while speaking with a team member, but this is about the mental space instead of physical space. In comparison, a physical space comforts people, and a mental space gives them autonomy to explore their thoughts or ideas.
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  A team with self-management capabilities can
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <ul >
                    <li>Creating a non-threatening space for individuals in the team to open up</li>
                    <li>Acknowledging and empowering the team's inherent capabilities</li>
                    <li>Refraining from dictating solutions</li>
                    <li>Partnering with the team to self-manage their journey</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  For this, the coaches need to exhibit,
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <ul >
                    <li>Self-awareness to know when not to contribute</li>
                    <li>Presence in the moment with a focus on team objective</li>
                    <li>Non-judgmental attitude</li>
                    <li>Active listening</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  By embodying authentic distance, agile coaches create a space where teams flourish with a sense of belonging, tap into their potential autonomously, and stay focused on their objectives. It's a delicate balance that transforms coaching into a collaborative journey of discovery and growth.
                </p>
              </div>}
              {/* page 2 --end*/}

              {/* page 3--start*/}
              {position == 2 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Why 'Maintain Authentic Distance'?</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the third wave of Agility, there isn't any doubt in organisations' minds that Agility is the new currency. A KPMG report on this reveals that "67% of the CEOs feel ‘Agility’ as the new currency of Business, and they can hit bankruptcy if they don't have it".
                </p>
                <br />

                {/* <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <img src={tuckmanTeam} width="100%" />
                </p> */}

                {/* <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <img width="100%" src={tuckmanTeam} />
                      </div>
                    </div>
                  </div>
                </p> */}

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So, the importance of an Agile coach is inherent to embracing Agility in organisations. However, in our experiences consulting different organisations, we observe a pattern of Agile Coaches assuming themselves as process enforcers rather than cultivating adaptability and continuous improvement in teams and organisations. To be fair, on the Agile Coaches, the functional silos, project-based governances, and the need for certainty also constrain them.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In their attempt to guide teams towards Agility, Agile Coches unintentionally slip into a directive and prescriptive approach. This departure from Agile principles brings resistance in team members due to solutions being imposed rather than co-created. Resistance to change is among the top two challenges in the Business Agility report (2022). And this trend has been there consistently since the first Business Agility report in 2018.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >

                  Based on the research insights from Satir's change model, the resistance creeping will affect team members' feelings, thinking, behaviour, and performance. In turn, it impedes the very collaborative spirit that Agile seeks to instil.

                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Summarising the above helps us realise that as an Agile coach, one needs to bring mindful awareness to know the approach that leads to hurdles, resistance, and missed growth opportunities. So, effective Agile Coaching demands a nuanced approach that resonates with maintaining authentic distance and embracing a non-directive coaching style. It acknowledges the human element in the Team Coaching journey and generates an opportunity for creating an environment favourable to self-discovery and team autonomy.
                </p>

                <br />
              </div>}
              {/* page 3 --end*/}


              {/* page 4--start*/}
              {position == 3 && <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Tips to Maintain Authentic Distance</h2>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Here are some practical steps to maintain authentic distance as a coach.
                  <ul>
                    <li>
                      <strong>Guide, Don't Dictate like a GPS:</strong>
                      <ul>
                        <li><strong>Tip:</strong> Think of yourself as a guide on a team journey. Instead of giving step-by-step directions like GPS navigation, guide the team to explore their path.</li>
                        <li><strong>Why:</strong> This way, the team can discover solutions independently, fostering a sense of ownership and self-reliance.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Listen Like a Friend:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Approach conversations as if you're chatting with a friend. Listen without rushing to provide solutions immediately.</li>
                        <li><strong>Why:</strong> Listening helps you understand the team's perspective and demonstrates that you value their thoughts and ideas.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Ask, Don't Tell:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Rather than handing out answers, ask questions that prompt the team to think and find solutions on their own.</li>
                        <li><strong>Why:</strong> Questions spark creativity and help the team tap into their own problem-solving abilities.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Cheerleader, Not Director:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Envision yourself as a cheerleader on the sidelines, cheering the team on instead of a director giving orders.</li>
                        <li><strong>Why:</strong> This creates a positive and empowering atmosphere, motivating the team to take charge.</li>
                      </ul>

                    </li>

                    <li>
                      <strong>Create a "Share Your Thoughts" Space:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Create a specific "Share Your Thoughts" Space within your team events, like in a retrospective or any other event, for sharing thoughts and ideas without fear of judgment.</li>
                        <li><strong>Why:</strong> A safe zone encourages open communication, boosting team morale and collaboration.</li>
                      </ul>

                    </li>

                    <li>
                      <strong>Know When to Step Back:</strong>
                      <ul>
                        <li><strong>Tip:</strong> Be aware of when to step back and allow the team to work independently. Whenever you feel like giving advice or trying to intervene in a conversation, think once before doing that. Resist the urge to micromanage.</li>
                        <li><strong>Why:</strong> Giving the team space fosters trust and allows them to develop their skills.</li>
                      </ul>


                    </li>

                    <li>
                      <strong>Celebrate Small Wins:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Acknowledge and celebrate small achievements, recognizing the team's efforts.</li>
                        <li><strong>Why:</strong> Recognition boosts morale and reinforces the idea that the team can achieve its goals.</li>
                      </ul>

                    </li>

                    <li>
                      <strong>Adapt to Each Team's Style:</strong>
                      <ul>
                        <li><strong>Tip:</strong> Be flexible in your approach, adapting to each team's unique needs and working style.</li>
                        <li><strong>Why:</strong> Every team is different; tailoring your coaching style shows respect for their individuality.</li>
                      </ul>

                    </li>
                  </ul>
                </p>


                <br />
              </div>}
              {/* page 4 --end*/}

              {/* tips 1 - start */}

              {position == 4 &&
                <>
                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Suggested Readings</h2>
                    <p className="lead pt-4" style={{ color: "black", textAlign: "justify",display:"flex", gap:100 }} >
                      <img width={240} height={320} src={quitLeadership} alt="quitLeadership" />
                      <img width={240} height={320} src={artofLaser} alt="artofLaser" />


                    </p>
                    <br />
                  </div>
                </>
              }


            </div>


            {/* moblie display */}

            <div className="col-xl-12 p-3 overflow-scroll screendisplaymob">

              {/* page 1--start*/}
              {/* {position == 0 &&  */}
              <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }} id="">Team Coaching & Maintaining Authentic Distance</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  On interpreting the International Coaching Federation's definition of Team Coaching, we pointed out that it revolves around keeping the team's needs at the centre and serving them by
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  <ul>
                    <li>Elevating the team's relationships through increased understanding of the peers</li>
                    <li>Helping team members uncover their potential or abilities</li>
                    <li>Maximizing opportunities for an unwavering focus on the team's purpose and goals</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  On interpreting the above definition, it points out that,
                </p>
                <p className="lead" style={{ color: "black", textAlign: "justify" }} >
                  <ul>
                    <li>The coach helps the team to enhance the awareness of their team dynamics</li>
                    <li>The coach enables the team to unlock their abilities and potential themselves</li>
                    <li>Focus is on the team's purpose and goals and not the coach's</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So, as an Agile coach, one needs multiple capabilities to bring this to life in their Team Coaching. From tryScrum, we have listed six capabilities based on our experiences. We at tryScrum strongly believe "Maintaining Authentic Distance" would form one of the core capabilities of Team Coaching Capabilities. It puts the team's needs at the centre rather than the Coach's. By maintaining authentic distance, a coach can better serve the team's needs by being a fly on the wall
                </p>
              </div>
      
              {/* page 1 --end*/}

              {/* page 2--start*/}
              {/* {position == 1 && */}
               <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>What is Maintaining Authentic Distance?</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Maintaining Authentic distance is similar to holding a physical space while speaking with a team member, but this is about the mental space instead of physical space. In comparison, a physical space comforts people, and a mental space gives them autonomy to explore their thoughts or ideas.
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  A team with self-management capabilities can
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <ul >
                    <li>Creating a non-threatening space for individuals in the team to open up</li>
                    <li>Acknowledging and empowering the team's inherent capabilities</li>
                    <li>Refraining from dictating solutions</li>
                    <li>Partnering with the team to self-manage their journey</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  For this, the coaches need to exhibit,
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <ul >
                    <li>Self-awareness to know when not to contribute</li>
                    <li>Presence in the moment with a focus on team objective</li>
                    <li>Non-judgmental attitude</li>
                    <li>Active listening</li>
                  </ul>
                </p>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  By embodying authentic distance, agile coaches create a space where teams flourish with a sense of belonging, tap into their potential autonomously, and stay focused on their objectives. It's a delicate balance that transforms coaching into a collaborative journey of discovery and growth.
                </p>
              </div>
              
              {/* page 2 --end*/}

              {/* page 3--start*/}
              {/* {position == 2 &&  */}
              <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Why 'Maintain Authentic Distance'?</h2>
                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In the third wave of Agility, there isn't any doubt in organisations' minds that Agility is the new currency. A KPMG report on this reveals that "67% of the CEOs feel ‘Agility’ as the new currency of Business, and they can hit bankruptcy if they don't have it".
                </p>
                <br />

                {/* <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <img src={tuckmanTeam} width="100%" />
                </p> */}

                {/* <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <img width="100%" src={tuckmanTeam} />
                      </div>
                    </div>
                  </div>
                </p> */}

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  So, the importance of an Agile coach is inherent to embracing Agility in organisations. However, in our experiences consulting different organisations, we observe a pattern of Agile Coaches assuming themselves as process enforcers rather than cultivating adaptability and continuous improvement in teams and organisations. To be fair, on the Agile Coaches, the functional silos, project-based governances, and the need for certainty also constrain them.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  In their attempt to guide teams towards Agility, Agile Coches unintentionally slip into a directive and prescriptive approach. This departure from Agile principles brings resistance in team members due to solutions being imposed rather than co-created. Resistance to change is among the top two challenges in the Business Agility report (2022). And this trend has been there consistently since the first Business Agility report in 2018.
                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >

                  Based on the research insights from Satir's change model, the resistance creeping will affect team members' feelings, thinking, behaviour, and performance. In turn, it impedes the very collaborative spirit that Agile seeks to instil.

                </p>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Summarising the above helps us realise that as an Agile coach, one needs to bring mindful awareness to know the approach that leads to hurdles, resistance, and missed growth opportunities. So, effective Agile Coaching demands a nuanced approach that resonates with maintaining authentic distance and embracing a non-directive coaching style. It acknowledges the human element in the Team Coaching journey and generates an opportunity for creating an environment favourable to self-discovery and team autonomy.
                </p>

                <br />
              </div>
              
              {/* page 3 --end*/}


              {/* page 4--start*/}
              {/* {position == 3 &&  */}
              <div>
                {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Promote Self-Management</h2> */}
                <h2 style={{ color: "#012237", fontWeight: "500" }}>Tips to Maintain Authentic Distance</h2>

                <p className="lead" style={{ color: "black", paddingTop: "20px", textAlign: "justify" }} >
                  Here are some practical steps to maintain authentic distance as a coach.
                  <ul>
                    <li>
                      <strong>Guide, Don't Dictate like a GPS:</strong>
                      <ul>
                        <li><strong>Tip:</strong> Think of yourself as a guide on a team journey. Instead of giving step-by-step directions like GPS navigation, guide the team to explore their path.</li>
                        <li><strong>Why:</strong> This way, the team can discover solutions independently, fostering a sense of ownership and self-reliance.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Listen Like a Friend:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Approach conversations as if you're chatting with a friend. Listen without rushing to provide solutions immediately.</li>
                        <li><strong>Why:</strong> Listening helps you understand the team's perspective and demonstrates that you value their thoughts and ideas.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Ask, Don't Tell:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Rather than handing out answers, ask questions that prompt the team to think and find solutions on their own.</li>
                        <li><strong>Why:</strong> Questions spark creativity and help the team tap into their own problem-solving abilities.</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Cheerleader, Not Director:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Envision yourself as a cheerleader on the sidelines, cheering the team on instead of a director giving orders.</li>
                        <li><strong>Why:</strong> This creates a positive and empowering atmosphere, motivating the team to take charge.</li>
                      </ul>

                    </li>

                    <li>
                      <strong>Create a "Share Your Thoughts" Space:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Create a specific "Share Your Thoughts" Space within your team events, like in a retrospective or any other event, for sharing thoughts and ideas without fear of judgment.</li>
                        <li><strong>Why:</strong> A safe zone encourages open communication, boosting team morale and collaboration.</li>
                      </ul>

                    </li>

                    <li>
                      <strong>Know When to Step Back:</strong>
                      <ul>
                        <li><strong>Tip:</strong> Be aware of when to step back and allow the team to work independently. Whenever you feel like giving advice or trying to intervene in a conversation, think once before doing that. Resist the urge to micromanage.</li>
                        <li><strong>Why:</strong> Giving the team space fosters trust and allows them to develop their skills.</li>
                      </ul>


                    </li>

                    <li>
                      <strong>Celebrate Small Wins:</strong>

                      <ul>
                        <li><strong>Tip:</strong> Acknowledge and celebrate small achievements, recognizing the team's efforts.</li>
                        <li><strong>Why:</strong> Recognition boosts morale and reinforces the idea that the team can achieve its goals.</li>
                      </ul>

                    </li>

                    <li>
                      <strong>Adapt to Each Team's Style:</strong>
                      <ul>
                        <li><strong>Tip:</strong> Be flexible in your approach, adapting to each team's unique needs and working style.</li>
                        <li><strong>Why:</strong> Every team is different; tailoring your coaching style shows respect for their individuality.</li>
                      </ul>

                    </li>
                  </ul>
                </p>


                <br />
              </div>
           
              {/* page 4 --end*/}

              {/* tips 1 - start */}

              {/* {position == 4 && */}
                <>
                  <div>
                    {/* <h2 style={{ color: "#012237"  , fontWeight:"400", paddingBottom: "5px" }}>Tips to promote self-management</h2> */}

                    <h2 style={{ color: "#012237", fontWeight: "500" }}>Suggested Readings</h2>
                    <p className="lead pt-4" style={{ color: "black", textAlign: "justify",display:"flex", gap:5 }} >
                      <img width={240} height={320} src={quitLeadership} alt="quitLeadership" />
                      <img width={240} height={320} src={artofLaser} alt="artofLaser" />


                    </p>
                    <br />
                  </div>
                </>
              {/* } */}



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
