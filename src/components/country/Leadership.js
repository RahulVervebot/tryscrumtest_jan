import React from "react";
import { Link } from "gatsby";
import Venkateshsmall from "../../svg/Venkateshsmall.svg";
import Farooq from "../../svg/farooq.svg";
import Raosmall from "../../svg/raosmall.svg"
import Arunsmall from "../../svg/arunsmall.svg";
import Kiransmall from "../../svg/kiransmall.svg";
import Buvanasmall from "../../svg/buvana.svg";
import Subhashninismall from "../../svg/subhashnismall.svg";
import Robertsmall from "../../svg/robert-small.svg"
import Maheshsmall from "../../svg/mahesh-small.svg"



const Leadership = () => {
  return (
    <section className="team-one team-page">
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div className="card h-70 border-0">
                
                  <Venkateshsmall />
                  
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Venkatesh is a Founder of tryScrum.com, a Management Consulting firm. He is a Certified Scrum Trainer( CST®) with Scrum Alliance and a Professional Scrum Trainer (PST ®) with Scrum.org.</p>
                  <Link to="/in/venkatesh/" className="btn btn-danger" style={{ backgroundColor:"", color:"white" }}>Visit Profile</Link>
                </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-70 border-0">
               
                  <Arunsmall /> 
            
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Arunvignesh is a Professional Agile trainer in tryScrum.com.  He is a  Professional Scrum Trainer ® with Scrum.org, Certified Team Coach® (CTC) with Scrum Alliance, and ICAgile Authorized Instructor.</p>
                  <Link to="/in/arunvignesh/" className="btn" style={{ backgroundColor:"#73B79E", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>


          <div className="col-lg-6">
            <div className="card h-70 border-0">
           
                  <Raosmall />
              
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Venkateswara Rao is an Agile Evangelist helping Organisations and Individuals in Agile Transformations and make work fun. He is a  Certified Team Coach® (CTC) with Scrum Alliance, and ICAgile Authorized Instructor®.</p>
                  <Link to="/in/venkateswara/" className="btn" style={{ backgroundColor:"#F49B31", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>


          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Robertsmall />
  
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Robert Briese is a Partner Consultant at tryScrum looking after Large Scale Scrum Programs. He is a Certified LeSS Trainer(CLT) with LeSS company.</p>
                  <Link to="/in/robert" className="btn" style={{ backgroundColor:"#8c91ae", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div> 

{/*<div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Maheshsmall />
  
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Mahesh Varadharajan is an Agile Transformation Leader, an Enterprise coach, and a SAFe.
                  Practice Consultant Trainer (SPCT).</p>
                  <Link to="/Mahesh" className="btn" style={{ backgroundColor:"#73B79E", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>*/}

     

          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Kiransmall />
              
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>A passionate product professional believes in the power of data and collective intelligence. Certified in user-centred Analysis & Product management, he brings in various perspectives to make informed decisions.</p>
                  <Link to="/in/kiran/" className="btn" style={{ backgroundColor:"#8C91AE", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Buvanasmall />
              
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Buvana is responsible for providing customer service and support to tryScrum customers. She also manages the course schedule and trainer communication at tryScrum. Her passion is to serve customers, cultivate long-term relationships, and help clients achieve their goals.</p>
                  <Link to="/in/buvana/" className="btn" style={{ backgroundColor:"#CCDE7A", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>  

          
          {/* <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Farooq />
  
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Umar is an “empiricist” who empowers people to explore concrete ways to build customer-centric Product(s) and evoke organisations towards “Value-driven” agility.</p>
                  <Link to="/umar" className="btn" style={{ backgroundColor:"#043754", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>  */}


          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Subhashninismall />
  
                <div className="card-body text-center">
                  <p className="lead" style={{marginLeft:"5%"}}>Subhashini started her career in the IT industry as a developer and later she moved into testing as a test lead for a decade.</p>
                  <Link to="/in/subhashini" className="btn" style={{ backgroundColor:"#fbb33c", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Leadership;
