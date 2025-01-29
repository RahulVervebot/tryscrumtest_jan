import React from "react";
import { Link } from "gatsby";

import lp0 from "../assets/images/slider-icon.png";
import lp1 from "../assets/images/1.jpg";
import lp2 from "../assets/images/2.jpg";
import lp3 from "../assets/images/3.jpg";
import lp4 from "../assets/images/4.jpg";

const Support = () => {
  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-one__single">
                {/* <div className="blog-one__image">
                <img src={blogd1} alt="" />
              </div> */}

                <div className="blog-one__content text-center">
                  {/* <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted On Jan 19"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="No Comments"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted By Admin"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div> */}

                  <h2 className="blog-one__title">
                    tryScrum Refund Policy
                  </h2>

                  <p className="blog-one__text">
                    <li style={{ listStyleType: "none" }}>
                      Thank you for choosing tryScrum. We ensure that our candidates have a rewarding experience while discovering, assessing, and purchasing our courses.
                    </li>
                    <p>
                      As with any online purchase experience, some terms and conditions govern the Refund Policy. When you book a training on tryScrum, you agree to our Privacy Policy, Terms of Use and Refund policy.
                    </p>
                    <br />
                    <h4 style={{ listStyleType: "none", color: "red" }}>
                      Our refund policy is as follows:
                    </h4>
                      

                    <br />
                    <li style={{ listStyleType: "none" }}>
                       <strong>Cancellation & Refunds: Virtual Training </strong>
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      tryScrum reserves the right to postpone/cancel an event because of insufficient enrollments, instructor illness or force majeure events (like floods, earthquakes, political instability, etc)
                    </li>
                    <li style={{ listStyleType: "none" }}>
                        If tryScrum cancels an event, a 100% refund will be paid to the candidates. If tryScrum postpones the event, tryScrum will work with the candidates to arrange a different date that works for both candidates and the schedule of tryScrum.
                    </li>
                    <li style={{ listStyleType: "none" }}>
                       If a cancellation is made by a delegate 10 days (or more) before the event, 30% of the total paid fee will be deducted, and the remaining amount will be refunded to the delegate. If a cancellation is made by a delegate within 10 days (or less) of the event, no refunds will be made.   
                    </li>
                    <br />
                    <li style={{ listStyleType: "none" }}>
                     <strong> For candidates opting for bundle bookings:</strong>
                    </li>
                 
        <li> Refunds will not be processed for partially completed bundles.</li>
      	<li>If a cancellation is requested before starting any course in the bundle, the refund will follow the standard policy outlined above, with 30% deducted for cancellations made 10 days or more before the event, and no refunds for cancellations made within 10 days or less of the event.</li>
       <li>No refunds will be entertained after the completion of one or more courses in the bundle.</li>
       <li style={{ listStyleType: "none" }}>
  This policy ensures transparency and fairness while preventing misuse of the bundle booking discounts.</li>
                    <li style={{ listStyleType: "none" }}>
                     <strong> Cancellation & Refunds: Physical Training </strong>
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      tryScrum reserves the right to postpone/cancel an event or change the location of an event because of insufficient enrollments, instructor illness or force majeure events (like floods, earthquakes, political instability, etc.)
                    </li>
                    <li style={{ listStyleType: "none" }}>
                      If tryScrum cancels an event, a 100% refund will be paid to the candidates. If tryScrum postpones the event, tryScrum will work with the candidates to arrange a different date that works for both candidates and the schedule of tryScrum.
                    </li>

                    <li style={{ listStyleType: "none" }}>
                      If a delegate makes a cancellation of the physical event, no refunds will be made since the venue and other related expenses are paid upfront for a physical class.                        
                    </li>
                    <br />


                        
                    <h4 style={{ listStyleType: "none", color: "red" }}>
                      A Refund request can be initiated in two ways
                    </h4>
                    <li>
                      Send out an email to help@tryscrum.com abiding by the above terms and conditions.
                    </li>

                    <li>
                      If the item quantity is more than one, please reach out to our support team through our tryScrum Support Center section on the website. Alternatively, you can email support@tryscrum.com for any group refunds
                    </li>

                    <li>
                      All disputes will be handled in Chennai
                    </li>
                    <br />
                    <h4 style={{ listStyleType: "none", color: "#012237" }}>
                      tryScrum reserves the right to revise the terms & conditions of this policy without any prior notice.
                    </h4>
                    <br />
                    <h4 style={{ listStyleType: "none", color: "#012237" }}>
                      Note: All refunds will be processed within 5 working days after the refund request is approved by tryScrum.
                    </h4>

                    <br />


                  </p>

                </div>

              </div>



            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar__single sidebar__post">

                  <div style={{ display: 'inline-block' }}>
                    <img src={lp0} alt="img" />
                  </div>

                  <div style={{ display: 'inline-block', margin: '0 10px' }} >
                    <h4> Recent Posts</h4>
                  </div>
                  <br />
                  <br />
                  <div className="sidebar__post-wrap">
                    <div className="sidebar__post__single">
                      <div className="sidebar__post-image">
                        <div className="inner-block">
                          <img src={lp1} alt="Awesome alter text" />
                        </div>
                      </div>
                      <div className="sidebar__post-content">
                        <h4 className="sidebar__post-title">
                          <Link to="blogs/challenges-for-shared-accountability/" >
                            Challenges for Shared Accountability
                          </Link>
      
                        </h4>
                      </div>
                    </div>
                    <div className="sidebar__post__single">
                      <div className="sidebar__post-image">
                        <div className="inner-block">
                          <img src={lp2} alt="Awesome alter text" />
                        </div>
                      </div>
                      <div className="sidebar__post-content">
                        <h4 className="sidebar__post-title">
                          <Link to="/blogs/winning-office-politics-3-tips-that-scrum-masters-can-use/">
                            Winning Office Politics – 3 tips that Scrum Masters can use
                          </Link>
                          {/* <a href="#none">
                            Winning Office Politics – 3 tips that Scrum Masters can use
                        </a> */}
                        </h4>
                      </div>
                    </div>
                    <div className="sidebar__post__single">
                      <div className="sidebar__post-image">
                        <div className="inner-block">
                          <img src={lp3} alt="Awesome alter text" />
                        </div>
                      </div>
                      <div className="sidebar__post-content">
                        <h4 className="sidebar__post-title">
                          <Link to="/blogs/who-is-a-product-owner-anyway/">
                            Who is a Product Owner, anyway?
                          </Link>
                          {/* <a href="#none">
                            Who is a Product Owner, anyway?
                        </a> */}
                        </h4>
                      </div>
                    </div>

                    <div className="sidebar__post__single">
                      <div className="sidebar__post-image">
                        <div className="inner-block">
                          <img src={lp4} alt="Awesome alter text" />
                        </div>
                      </div>
                      <div className="sidebar__post-content">
                        <h4 className="sidebar__post-title">
                          <Link to="/blogs/guide-to-building-a-career-as-scrum-master/">
                            Guide to Building a Career as Scrum Master
                          </Link>
                          {/* <a href="#none">
                            Guide to Building a Career as Scrum Master
                        </a> */}
                        </h4>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

        <div>
          <h2 style={{ color: "red", marginTop: "10px"}}>FAQ's</h2>
        </div>

        <div style={{ marginTop: "20px" }} className="accordion " id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What does the registration fee include?
              </button>
            </h2>

            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                The registration fee includes the fees for classroom training, the study material, exam fees.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How many attempts do i get if I attend the classroom training?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                All participants completing the Scrum.org courses will receive a password to attempt the first assessment. The class participants who attempt the assessment within 14 days of receiving their free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.

                For ICAgile courses, there is no exam as of today. However, the trainers will evaluate before issuing the Certificate.

                For other Courses, please speak to our support executive by writing to  help@tryscrum.com
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Which Course is right for me?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Even though it depends on your role and passion, our trainers tried to implement some recommendations based on their experience. Please visit the <Link to="/which-scrum-role-is-right-for-me/">link</Link> here to go through our recommendations.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                How Do I Obtain an Invoice Receipt or Proof of Payment for My Order?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to support@tryscrum.com referencing your order number.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                What if I do not receive a confirmation of My Order?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto support@tryscrum.com">support@tryscrum.com</a>.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                May I know the Refund & Cancellation Policies?
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
