import React from "react"
import { Link } from "gatsby"
import blog1 from "../../assets/images/try-Scrum-imgaes/imgs/scrum-mastery-mentoring-program.jpg"
import blog2 from "../../assets/images/try-Scrum-imgaes/imgs/stages-of-scrum-mastery.jpg"
import blogd3 from "../../assets/images/whitepaper-buildingblocks.png"
import blogd4 from "../../assets/images/noname2.png"


const page =[
  {
    blog_img:blog1,
    blog_title:"The Stages of Scrum Mastery",
    blog_text: "There are four stages of Scrum Mastery, and where you fall will determine both your effectiveness and efficiency as a Servant-Leader",
    blog_link:"/in/resources/whitepaper-stages-of-scrum-mastery"
  },
  {
    blog_img:blog2,
    blog_title:"Scaling Scrum with Nexus",
    blog_text: "In 2016, a leading security products company adopted Scrum to support teams working in complex product development, in order to make the organization more adaptive and able to react faster to change.",
    blog_link:"/in/whitepaper-scaling-scrum"
  },
  {
    blog_img:blogd3,
    blog_title:"Building blocks of the next generation of Organisations",
    blog_text: "In this constantly changing and challenging world, we need organisations that give everyone the power to make decisions and innovate to stay relevant and competitive.",
    blog_link:"/in/building-blocks-of-the-next-generation-of-organisations"
  },
  {
    blog_img:blogd4,
    blog_title:"The Stages of Agile Transformation: Moving from Theory To Practice",
    blog_text: "Are you looking to embark on an Agile transformation journey for your organisation? Look no further than tryScrum's white paper on the Stages of Agile Transformation.",
    blog_link:"/in/the-stages-of-agile-transformation"
  }
]

const Whitepaper = () => {
  return (
    <section className="blog-one blog-page">
      <div className="container">
        <div className="row">
          {page.map((items)=>(<div className="col-lg-4">
            <div className="d-flex flex-column justify-content-around border h-100">

              <div className="blog-one__image" style={{height:"30%"}}>
                <img src={items.blog_img} alt="" />
              </div>

              <div
                className="text-center"
                style={{height:"70%", padding:"40px"}}
              >
                <Link to={items.blog_link}>
                  <h2 className="blog-one__title">
                    {items.blog_title}
                  </h2>
                </Link>

                <p className="blog-one__text">
                  {items.blog_text}
                </p>
                <Link to={items.blog_link} >
                  <p className="blog-one__link">Read More</p>
                </Link>
              </div>

            </div>
          </div>))}
        </div>
      </div>
    </section>
  )
}

export default Whitepaper
