import React from 'react';

const Faq = () => {
    return (
        <section className="faq-one">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">
What does the registration fee include?</h2>
                                <p className="faq-one__text">The registration fee includes the fees for classroom training, the study material, exam fees.

</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">How many attempts do i get if I attend the classroom training?</h2>
                                <p className="faq-one__text">All participants completing the Scrum.org courses will receive a password to attempt the first assessment. The class participants who attempt the assessment within 14 days of receiving their free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.

For ICAgile courses, there is no exam as of today. However, the trainers will evaluate before issuing the Certificate.

For other Courses, please speak to our support executive by writing to <a href="mailto: help@tryscrum.com"> help@tryscrum.com </a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">Which Course is right for me?</h2>
                                <p className="faq-one__text">Even though it depends on your role and passion, our trainers tried to implement some recommendations based on their experience. Please visit the <a href="which-scrum-role-is-right-for-me"> link </a> here to go through our recommendations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">How Do I Obtain an Invoice Receipt or Proof of Payment for My Order?</h2>
                                <p className="faq-one__text">After placing your order, you will receive a confirmation email with a link to download your invoice as a PDF. If the email does not have this link, please send a message to <a href="mailto: support@tryscrum.com"> support@tryscrum.com </a> referencing your order number.

</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">What if I do not receive a confirmation of My Order?</h2>
                                <p className="faq-one__text">After you place your order, please wait for 2 business days to receive your confirmation. If the email does not arrive, please write to <a href="mailto: support@tryscrum.com"> support@tryscrum.com. </a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{paddingBottom: `0px`, borderBottom: `0px none`}}>
                        <div className="faq-one__single">
                            <div className="faq-one__icon">
                                <span>?</span>
                            </div>
                            <div className="faq-one__content">
                                <h2 className="faq-one__title">May I know the Refund & Cancellation Policies?</h2>
                                <p className="faq-one__text">Yes.  All cancellation will incur a processing fee according to the Payment Gateway terms and conditions. The refund and cancellation policies are located at <a href="/refund-policies" target="__blank"> Link </a>. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
