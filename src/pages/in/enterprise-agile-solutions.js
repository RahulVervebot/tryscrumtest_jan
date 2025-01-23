import React from 'react'
import Layout from "../../components/Layout";
import NavTwo from "../../components/header/NavIn";
import Footer from "../../components/footer/InFooter";
import awardwinning from '../../assets/images/Award_Winning_Instructors.png'
import TrustedBrand from '../../assets/images/Trusted_Brand.png'
import ProvenResults from '../../assets/images/Proven_Results_01.png'
import EnterprisesSolutionsHeader from '../../components/EnterprisesSolutionsHeader.js';
import tablebg from '../../assets/images/success_dark.jpg'
//import awardsvg from '../../assets/images/capabilities/finance-strategy.svg'
import ContactEnterprise from '../../components/ContactEnterprise.js';
import TrustScore from '../../assets/images/TrustScore-01.png'
export default function enterpriseagilesolutions() {
  return (
    <div>
   <Layout pageTitle="Enterprise Agile Solutions" pageName="enterprise-agile-solutions" ></Layout>
  <NavTwo/>
  <EnterprisesSolutionsHeader/>
  <div className='taining_consulting'  style={{ backgroundImage: `url(${tablebg})` }}>
   <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col">
            <div class="row">
    <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_1_enterprise" style={{marginTop:"20%"}}>
            <div class="p-4" style={{textAlign:"justify"}}>
                <span class="price"  style={{background: "#1d66b5",textAlign:"center", padding:"10% 5%"}}><span class="number" style={{color: "#fff"}}>Agile Training </span></span>
                <ul class="pricing-text">
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}><span>Comprehensive Agile training programs for teams at all levels, including Scrum Master, Product Owner, and Agile Leadership.</span></li>
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Hands-on workshops and interactive sessions led by certified Agile trainers with real-world experience.</li>
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Practical tools and techniques to implement Agile methodologies effectively and drive continuous improvement.</li>
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Flexible training formats, including in-person workshops, virtual sessions, and self-paced online courses to accommodate diverse learning preferences.</li>
                </ul>
                </div>
                </div>
                </div>
         <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_1_careers" style={{marginTop:"20%"}}>
            <div class="p-4" style={{textAlign:"justify"}}>
                <span class="price"  style={{background: "#1d66b5", textAlign:"center",padding:"10% 5%"}}><span class="number" style={{color: "#fff"}}>Transformation Consulting</span></span>
                <ul class="pricing-text">
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}><span>Comprehensive Agile training programs for teams at all levels, including Scrum Master, Product Owner, and Agile Leadership.</span></li>
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Hands-on workshops and interactive sessions led by certified Agile trainers with real-world experience.</li>
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Practical tools and techniques to implement Agile methodologies effectively and drive continuous improvement.</li>
                    <li style={{listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Flexible training formats, including in-person workshops, virtual sessions, and self-paced online courses to accommodate diverse learning preferences.</li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_1_careers" style={{marginTop:"20%"}}>
            <div class="p-4" style={{textAlign:"justify"}}>
                <span class="price"  style={{background: "#1d66b5", padding:"10% 5%", textAlign:"center"}}><span class="number" style={{color: "#fff"}}>Customized Solutions<br/></span></span>
                <ul class="pricing-text">
                    <li style={{ listStyle:"inside", paddingRight:"14px",   background:"#fff"}}><span>Comprehensive Agile training programs for teams at all levels, including Scrum Master, Product Owner, and Agile Leadership.</span></li>
                    <li style={{ listStyle:"inside", paddingRight:"14px",   background:"#fff"}}>Hands-on workshops and interactive sessions led by certified Agile trainers with real-world experience.</li>
                    <li style={{ listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Practical tools and techniques to implement Agile methodologies effectively and drive continuous improvement.</li>
                    <li style={{ listStyle:"inside", paddingRight:"14px",  background:"#fff"}}>Flexible training formats, including in-person workshops, virtual sessions, and self-paced online courses to accommodate diverse learning preferences.</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
      </div>
      <section className="contact-info-one">
        <div className="container">
        <h2 className="contact-one__title text-center">
        Why Choose Us?
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-one__single contain-floating"  style={{minHeight:"440px"}}>
            
                 {/* <img style={{width:"120px"}}src={awardsvg} /> */}
                
                <h2 className="contact-info-one__title">Award-Winning Instructors</h2>
                <p className="contact-info-one__text" style={{padding:"10px"}}>
                Our certified Agile trainers bring years of industry experience and expertise to deliver engaging and impactful training sessions. </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single contain-floating1"  style={{minHeight:"440px"}}>
              <img style={{width:"120px"}}src={TrustedBrand} />
                <h2 className="contact-info-one__title">Trusted Brand</h2>
                <p className="contact-info-one__text" style={{padding:"10px"}}>
                Trusted by 100+ big and small brands across the globe
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single contain-floating2" style={{minHeight:"440px"}}>
              <img style={{width:"120px"}}src={ProvenResults} />
                <h2 className="contact-info-one__title">Proven Results</h2>
                <p className="contact-info-one__text" style={{padding:"10px"}}>
                Join the ranks of satisfied clients who have seen tangible improvements in team productivity, project delivery, and overall business outcomes after completing our training programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        {/* <h1 className="text-center">Apple Like Content Section</h1> */}

        <div className="row align-items-center">
          <div className="col">
          <h3 style={{ marginTop:"70px", marginBottom:"100px", textAlign:"center", color: "#012237", fontWeight: "bold"}}>Success Stories. 100% Outcome Oriented</h3>
            <div class="row">
    <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_1_careers" style={{marginTop:"20%"}}>
            <div class="text-center p-4">
         <p>“The best in class training by tryScrum“ </p>
                <p style={{color:"#000"}}>It has been an absolute pleasure working with the tryscrum team, delivering the best
in-class non-certification program Scrum Master, for one of our integral teams of Evolent
Health. Our ask was challenging, as we requested two separate batches for India and the
US. We wanted the content and the facilitator for both the batches to be the same. Our
stakeholders were amazed to see how the team tryscrum took ownership by keeping our
participants engaged for four days, working in two different time zones and studying
each and every aspect of our product, services and acquisitions. We are looking forward
to many more successful batches!</p>
                <ul class="pricing-text">
                    <li style={{background:"#fff", listStyle:"inside"}}><span>Juhi  L&D , Evolent Health Care</span></li>
                   </ul>
                </div>
                </div>
                </div>
                <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_1_careers" style={{marginTop:"20%"}}>
            <div class="text-center p-4">
          
                <p style={{color:"#000"}}>It's been an excellent experience working with tryScrum. We had many batches with tryScrum and we already have many employees who were part of this training . Looking forward to collaborating in the future too.</p>
                <ul class="pricing-text">
                    <li style={{background:"#fff", listStyle:"inside"}}><span>Chaithali , L&D, Technotree Corporation</span></li>
                   </ul>
                </div>
                </div>
                </div>
                <div class="col-md-4 ftco-animate fadeInUp ftco-animated">
        <div class="block-7 col_1_careers" style={{marginTop:"20%"}}>
            <div class="text-center p-4">
          
                <p style={{color:"#000"}}>I am delighted to recommend tryScrum. In 2019, my organization selected tryScrum to deliver three Scrum courses in Switzerland and Germany.</p><p>The feedback we received from my colleagues who attended tryScrum courses was overwhelmingly positive, both from a course perspective and instructor perspective. I would definitely ask tryScrum to deliver future Scrum courses should my colleagues require it. </p>
                <ul class="pricing-text">
                    <li style={{background:"#fff", listStyle:"inside"}}><span>Andre, Learning Officer , United Nations</span></li>
                   </ul>
                </div>
                </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    <ContactEnterprise/>
    <section className="surveyed_partner">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="about-two__content">

                <div className="about-two__text">
                  <p>  
                    <span style={{fontSize:"28px",color:"#000000", marginLeft:"10%"}}>99% of our clients </span>
                    <p> 
                     <span style={{fontSize:"28px",color:"#000000"}}> surveyed prefer </span> <span style={{fontSize:"28px",color:"red"}}> tryScrum </span>
                      <p style={{marginLeft:"5%"}}>
                        <span style={{fontSize:"28px",color:"red"}}>as their  </span> <span style={{fontSize:"28px",color:"green"}}> preferred partner.</span>
                      </p>
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-7 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="enterprise__image">
                {/* <span className="about-two__image-dots"></span> */}
                <img  style={{width:"500px"}} src={TrustScore} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer/>
  <Layout/>
  </div>
  )
}
