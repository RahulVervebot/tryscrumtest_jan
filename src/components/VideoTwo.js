import React, { Component } from "react";
import strech from "../assets/images/slider-1-scratch.png";
import ModalVideo from "react-modal-video";
export default class VideoTwo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="video-two">
        <div className="container">
          {/* <img src={strech} className="video-two__scratch" alt="" /> */}
          <div className="row">
            {/* <div className="col-lg-7">
              <div className="video-two__content">
                <h2 className="video-two__title">
                  Why tryScrum ?

                </h2>

                <a href="https://trybusinessagility.com" target="_blank" className="thm-btn btn-custom">
                  Let’s humanise
                </a>
              </div>
            </div> */}
            <div className="col-7"></div>
            <div className="col-5 d-flex justify-content-lg-end justify-content-sm-start">
              <div className="my-auto" >
                <div style={{display:"flex",margin : "0 auto", flexDirection:"column"}}>
                  <h4 className="video-two__title">Why tryScrum ?</h4>

                  <a
                    href="https://trybusinessagility.com"
                    target="_blank"
                    className="thm-btn btn-custom text-center"
                    style={{width:"fit-content",margin : "0 auto"}}
                  >
                    Let’s humanise
                  </a>
                  
                </div>
                <div
                  onClick={this.openModal}
                  onKeyDown={this.openModal}
                  role="button"
                  tabIndex={0}
                  className="video-two__popup mt-4"
                  style={{margin : "0 auto"}}
                >
                  <i className="fa fa-play"></i>
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={this.state.isOpen}
                  videoId="KOBtk5u2qQo"
                  onClose={() => this.setState({ isOpen: false })}
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
