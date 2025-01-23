import React from 'react';
import axios from "axios";

const SubscribeOne = () => {

  const [state, setState] = React.useState({ email: "" });

  const handleInputChange = (event) => { 
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const url =
      "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/3209/feedback";
    const formData = new FormData();
    formData.append("your-email", state.email);

    debugger
    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };
    const res = await axios.post(url, formData, config);
    if (typeof res.data.message !== undefined) {
      alert(res.data.message);
      setState({ email: "" });
    } else {
      alert("please try again");
    }
    console.log(res.data, "res");
  };
  
    return (
        <section className="mailchimp-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 py-5 mb-0">
                        <div className="mailchimp-one__content mb-0">
                            <div className="mailchimp-one__icon">
                                <i className="kipso-icon-email"></i>
                            </div>
                            <h2 className="mailchimp-one__title">Get latest courses <br />
                                updates by signing up</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className="my-auto">
                            
                            {/* <form action="#" className="mailchimp-one__form mc-form">
                                <input type="text" id="mc-email" placeholder="Enter your email" />
                                    <button type="submit" className="thm-btn">Subscribe</button>
                            </form> */}

                            <form action="#" className="mailchimp-one__form mc-form">
                                <input
                                type="text"
                                id="mc-email"
                                name="email"
                                placeholder="Enter your email"
                                value={state.email}
                                onChange={handleInputChange}
                                style={{color:"white"}}
                                />
                                <button
                                type="submit"
                                className="thm-btn"
                                onClick={submitHandler}
                                >
                                Subscribe
                                </button>
                            </form>

                            <div className="mc-form__response"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SubscribeOne;
