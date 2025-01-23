import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";

import "./style.css";
import "./townscript.css";

ReactModal.setAppElement("#___gatsby");

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    // right: 'auto',
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
    this.calleventbrite = this.calleventbrite.bind(this);
    this.state = {
      isModalOpen: false,
      isModalOpen1: false,
      isModalOpen2: false,
      isModalOpen3: false,
      isModalOpen4: false,
      isModalOpen5: false,

      url: "",

      // Details Button State Below
      isDetailOpen: false,

      statepageurl: "",
      statetitle: "",
      statecertificate: "",
      statecertificationBody: "",
      statecurriculum: "",
      stateduration: "",
      statefeeStructure: "",
      stateguidlineUrl: "",
      stateincluded: "",
      stateinstructions: "",
      statethecourse: "",
      statewhoCanAttend: "",
      statewhy: "",

      // Event-Brite
      eventStateId: '',

    };
  }

  // handleModalOpen = (event) => {
  //   console.log("handleModalOpen: ", event);
  //   this.setState({ isModalOpen: true });
  //   document.body.style.overflow = "hidden";
  // };

  handleModalClose = (event) => {
    // console.log('handleModalClose: ', event);
    this.setState({ isModalOpen: false });
    document.body.style.overflow = "unset";
  };

  // handleDetailOpen = (event) => {
  //   console.log("handleDetailOpen: ", event);
  //   this.setState({ isDetailOpen: true });
  //   document.body.style.overflow = "hidden";
  // };

  handleDetailClose = (event) => {
    // console.log("handleDetailClose: ", event);
    this.setState({ isDetailOpen: false });
    document.body.style.overflow = "unset";
  };

  // handleModalOpen1 = (event) => {
  //   //console.log("handleModalOpen1: ", event);
  //   this.setState({ isModalOpen1: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose1 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen1: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen2 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen2: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose2 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen2: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen3 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose3 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen4 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose4 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: false });
  //   document.body.style.overflow = "unset";
  // };

  // handleModalOpen5 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: true });
  //   document.body.style.overflow = "hidden";
  // };

  // handleModalClose5 = (event) => {
  //   // console.log('handleModalOpen: ', event);
  //   this.setState({ isModalOpen3: false });
  //   document.body.style.overflow = "unset";
  // };

  handleEnroll = (url, isModalOpen) => {

    this.setState({ url: url, isModalOpen: isModalOpen });
    document.body.style.overflow = "hidden";

  }

  eventBrite = (eventId) => {
    //this.setState({ eventStateId: eventId.substring(1) });
    //console.log("Eventbrite: ", this.state.eventStateId);

    this.setState({ eventStateId: eventId.substring(1) }, () => {
      this.calleventbrite();
    });
  }

  calleventbrite() {

    // var exampleCallback = function() {
    //   console.log("Order complete!");
    // }

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: this.state.eventStateId,
      modal: true,
      modalTriggerElementId: "example-widget-trigger",
    })

  }

  handleDetail = (statepageurl, statetitle, statecertificate, statecertificationBody, statecurriculum, stateduration, statefeeStructure, stateguidlineUrl, stateincluded, stateinstructions, statethecourse, statewhoCanAttend, statewhy) => {

    this.setState({
      statepageurl: statepageurl,
      statetitle: statetitle,
      statecertificate: statecertificate,
      statecertificationBody: statecertificationBody,
      statecurriculum: statecurriculum,
      stateduration: stateduration,
      statefeeStructure: statefeeStructure,
      stateguidlineUrl: stateguidlineUrl,
      stateincluded: stateincluded,
      stateinstructions: stateinstructions,
      statethecourse: statethecourse,
      statewhoCanAttend: statewhoCanAttend,
      statewhy: statewhy,

      isDetailOpen: true

    })
    document.body.style.overflow = "hidden";
    // console.log("In handleDetail Value of statepageurl: ", statepageurl);
    // console.log("In handleDetail Value of isDetailOpen: ", this.state.isDetailOpen);
  }

  render() {
    // console.log("on message.js file", this.props.messages);
    // console.log(this.props.messages);

    return (
      <div className="messages">
        {this.renderMessages()}
        <div
          ref={(el) => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }

  scrollToBottom() {
    // const node = ReactDOM.findDOMNode(this.messagesEnd);
    // node.scrollIntoView({ behavior: "smooth" });
    var element = document.getElementById("gatsby-focus-wrapper");
    element.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  getUrl(value) {

    if (value.charAt(0) !== "E" && value.charAt(0) !== "e" && value.charAt(8) !== "f") {
      return (
        <td>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() =>
              this.handleEnroll(value, true)
            }
          >
            Enroll
          </button>
        </td>
      )
    }

    if (value.charAt(8) === "f") {
      return (
        <td>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() =>
              window.open(value, "_blank")
            }
          >
            Enroll
          </button>
        </td>
      )
    }

  }

  renderMessages() {

    // console.log("Messages data is ",this.props.messages);

    return (

      <div className="table-responsive">
        <table class="table borderless table-hover table-sm">
          <thead
            style={{
              backgroundColor: "white",
              color: "red",
              fontWeight: "500",
            }}
          >
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Location</th>
              <th scope="col">Price</th>
              <th scope="col">Trainer</th>
              <th scope="col">Spot</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {this.props.newmessage.map((msg) =>
            (
              <tr>
                <td>
                  {msg.date1 == "Jan 10-10,1000" ? "Coming Soon!" : msg.date1 }
                  <br />
                  {msg.time1}
                </td>
                <td>{msg.title}</td>
                <td>{msg.location}</td>
                <td>{msg.salePrice}</td>
                <td>{msg.trainer}</td>
                {(msg.url).charAt(0) == "E" || (msg.url).charAt(0) == "e" ? (

                  <td>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      id="example-widget-trigger"
                      onClick={() =>
                        this.eventBrite(msg.url)
                      }
                    >
                      Enroll
                    </button>

                  </td>

                ) : (

                  this.getUrl(msg.url)

                )}
                <td>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() =>
                      this.handleDetail(msg.uri, msg.title, msg.option.certificate, msg.option.certificationBody, msg.option.curriculum, msg.option.duration, msg.option.feeStructure, msg.option.guidlineUrl, msg.option.included, msg.option.instructions, msg.option.thecourse, msg.option.whoCanAttend, true)
                    }
                  >
                    Details
                  </button>
                </td>
              </tr>))}
          </tbody>
        </table>

        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Buy Course"
          style={customStyles}
        >
          <div>
            <button
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={this.handleModalClose}
            >
              [X]
            </button>
            <iframe
              id="ts-iframe"
              src={this.state.url}
              height="600"
              width="100%"
            >



            </iframe>
          </div>
        </ReactModal>

        <ReactModal
          isOpen={this.state.isDetailOpen}
          onRequestClose={this.handleDetailClose}
          contentLabel="Buy Course"
          //style={customStyles}
          className="Modal"
          overlayClassName="Overlay"
        >
          {/* <button onClick={this.handleDetailClose}>Close</button> */}
          <div className="modal-body">

            <h5 className="modal-title" style={{ marginBottom: "10px", color: "red" }}> {this.state.statetitle}</h5>

            <h5 style={{ color: "red" }}>Course Details </h5>
            <p dangerouslySetInnerHTML={{ __html: this.state.statethecourse }} />

            <h5 style={{ color: "red" }}>Certification </h5>
            <p dangerouslySetInnerHTML={{ __html: this.state.statecertificate }} />


            {/* <h5 style={{color:"red"}}>Course Fee</h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.statefeeStructure}}/> */}

            <h5 style={{ color: "red" }}>Virtual class Instructions</h5>
            <p dangerouslySetInnerHTML={{ __html: this.state.stateinstructions }} />

            <a href={this.state.statepageurl} target="_blank">More Details</a>

          </div>
          <div class="text-center">
            <button className="btn btn-danger" onClick={this.handleDetailClose}>Close</button>
          </div>
        </ReactModal>







        {/* { this.state.isModalOpen ?  */}

        {/* <div className="modal fade" id="enroll1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
        {/* <div className="modal hide" style={{cursor:"pointer", overflowY:"auto"}} id="enroll1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" style={{color:"red"}} id="exampleModalLabel">Enroll Now</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                          <iframe
                              id="ts-iframe"
                              src={this.state.url}
                              frameborder="0"
                              height="600"
                              width="100%"
                            >

                            </iframe>

                        </div>

                      </div>
                    </div>
                  </div> */}

        {/* : null } */}


        {/* {this.state.isDetailOpen ?  */}

        {/* <div className="modal fade" id="detail1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
        {/* <div className="modal hide" style={{cursor:"pointer", overflowY:"auto"}} id="detail1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"> {this.state.statetitle} Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                       
                        <h5 style={{color:"red"}}>Course Details </h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statethecourse}}/>

                        <h5 style={{color:"red"}}>Certification </h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statecertificate}}/> */}


        {/* <h5 style={{color:"red"}}>Course Fee</h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statefeeStructure}}/> */}

        {/* <h5 style={{color:"red"}}>Virtual class Instructions</h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.stateinstructions}}/>

                        <h5 style={{color:"red"}}>Why tryScrum</h5>
                        <p dangerouslySetInnerHTML={{__html: this.state.statewhy}}/>
                        
                        </div>
                        
                        </div>
                      </div>
                    </div> */}

        {/* : null} */}

      </div>
    );
  }

  // MessageList.propTypes = {
  //   messages: PropTypes.arrayOf(
  //     React.PropTypes.shape({
  //       by: PropTypes.string.isRequired,
  //       body: PropTypes.string.isRequired,
  //       time: PropTypes.instanceOf(Date).isRequired
  //     })
  //   )
  // };
}
export default MessageList;
