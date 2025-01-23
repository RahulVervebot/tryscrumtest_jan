import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { withPrefix, Link, graphql } from "gatsby";
import Helmet from "react-helmet";
// import FilterTable from "./FilterTable"
// @import url('https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css')
import "./Chat/style.css";
import "./Chat/townscript.css";
import { Alert } from "antd";
import Carousel from 'react-elastic-carousel';
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


class CourseBundleTable extends React.Component {
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


  handleModalClose = (event) => {
    // console.log('handleModalClose: ', event);
    this.setState({ isModalOpen: false });
    document.body.style.overflow = "unset";
  };


  handleDetailClose = (event) => {
    // console.log("handleDetailClose: ", event);
    this.setState({ isDetailOpen: false });
    document.body.style.overflow = "unset";
  };

  handleEnroll = (url, isModalOpen) => {

    this.setState({ url: url, isModalOpen: isModalOpen });
    document.body.style.overflow = "hidden";

  }


  eventBrite = (eventId) => {

    // this.setState({ eventStateId: eventId.substring(1) });
    // console.log("eventStateId", this.state.eventStateId);

    this.setState({ eventStateId: eventId.substring(1) }, () => {
      this.calleventbrite();
    });

    // const warningBar = document.getElementById("example-widget-trigger");
    // console.log("warningBar", warningBar);

    //this.eventBrite2();

  }

  calleventbrite() {
    //console.log("eventStateId", this.state.eventStateId);

    //const calleventbrite = document.getElementById("example-widget-trigger");

    //console.log("value of state variable",this.state.eventStateId)

    var exampleCallback = function () {
      console.log("Order complete!");
    }

    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: this.state.eventStateId,
      modal: true,
      modalTriggerElementId: "example-widget-trigger",
      onOrderComplete: exampleCallback
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

  }

  render() {
    return (
      <div className="messages">
        {/* <FilterTable values={this.props.messages} /> */}
        {this.renderMessages()}
      </div>
    );
  }

  scrollToBottom() {
    var element = document.getElementById("gatsby-focus-wrapper");
    element.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  getUrlTypeNew(value, enrolltext) {

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
            {/* Enroll */}
            <div>
              {enrolltext}
            </div>

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
            {/* Enroll */}
            {enrolltext}
          </button>
        </td>
      )
    }

  }

  renderMessages() {

    let course = this.props.messages;
    let msg = this.props.messages;

    // console.log("Course Information In Bundle", course);
    // console.log("graphql data received is ", this.props.messages );
    console.log("Course Information In Bundle", msg.acfcoursePage);

    return (
      <>

        <div>

          <div className="cor_container">


            <div className="cor2_container">
              {/* <Carousel>
               


                <div >
                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                  


                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                </div>
              

                <div >
                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                 


                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                </div>

               
                <div >
                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                  


                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                </div>

               

                <div >
                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                 


                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                </div>
                


                <div >
                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>




                  <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                    {!msg.acfcoursePage.bundle.category ? (
                      ""
                    ) : (

                      <div className="card" style={{ width: "20rem" }}>

                        <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                        <div className="card-body">

                          <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                        </div>

                        <ul className="list-group list-group-flush">

                          <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                          <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                          <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                        </ul>

                        <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                        <br />
                      </div>
                    )}

                  </div>


                </div>
               

                <div class="float-child" style={{ marginTop: "10px", marginBottom: "10px" }}>

                  {!msg.acfcoursePage.bundle.category ? (
                    ""
                  ) : (

                    <div className="card" style={{ width: "20rem" }}>

                      <center>   <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} /></center>

                      <div className="card-body">

                        <h5 className="card-title">  {msg.acfcoursePage.bundle.category}  </h5>

                      </div>

                      <ul className="list-group list-group-flush">

                        <li className="list-group-item"> <i class="fi fi-bs-calendar"></i> &nbsp;{msg.acfcoursePage.bundle.dates}</li>
                        <li className="list-group-item"><i class="fi fi-bs-clock"></i>&nbsp; {msg.acfcoursePage.bundle.time}</li>
                        <p className="list-group-item">&#8377; &nbsp;<s>50,000</s> {msg.acfcoursePage.bundle.price} </p>

                      </ul>

                      <center><a href={msg.acfcoursePage.bundle.url}><button class="btn btn-danger" style={{ borderRadius: "15px" }}>ENROLL</button></a></center>
                      <br />
                    </div>
                  )}

                </div>

              
              </Carousel> */}



            </div>

          </div>

        </div>


        <div>


          <div className="table-responsive h-25">

            <table className="table borderless table-hover" style={{ height: "auto" }}>
              <thead
                style={{
                  backgroundColor: "white",
                  color: "red",
                  fontWeight: "800",
                }}
              >
                <tr>
                  <th scope="col" style={{fontWeight:"800", fontSize:"18px"}}>Category</th>
                  <th scope="col" style={{fontWeight:"800", fontSize:"18px"}}>Bundle</th>
                  <th scope="col" style={{fontWeight:"800", fontSize:"18px"}}>Price</th>
                  {/* <th scope="col">Schedule</th>
                  <th scope="col">Time</th> */}
                  <th scope="col" style={{fontWeight:"600", fontSize:"20px"}}>Spot***</th>
                </tr>
              </thead>

              <tbody style={{ fontWeight: "bolder", height:"153px" }}>

                {!msg.acfcoursePage.bundle.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle.dates}</td>

                    <td>{msg.acfcoursePage.bundle.time}</td> */}

                    {(msg.acfcoursePage.bundle.url).charAt(0) == "E" || (msg.acfcoursePage.bundle.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle.url)
                          }
                        >

                          {msg.acfcoursePage.bundle.enrolltext}

                        </button>

                      </td>

                    ) : (

                      // this.getUrlType2(msg.acfcoursePage.course1.url)
                      this.getUrlTypeNew(msg.acfcoursePage.bundle.url, msg.acfcoursePage.bundle.enrolltext)

                    )}


                  </tr>
                )}


                {!msg.acfcoursePage.bundle2.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle2.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle2.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle2.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle2.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle2.dates}</td>

                    <td>{msg.acfcoursePage.bundle2.time}</td> */}

                    {(msg.acfcoursePage.bundle2.url).charAt(0) == "E" || (msg.acfcoursePage.bundle2.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle2.url)
                          }
                        >

                          {msg.acfcoursePage.bundle2.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle2.url, msg.acfcoursePage.bundle2.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle3.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle3.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle3.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle3.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle3.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle3.dates}</td>

                    <td>{msg.acfcoursePage.bundle3.time}</td> */}

                    {(msg.acfcoursePage.bundle3.url).charAt(0) == "E" || (msg.acfcoursePage.bundle3.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle3.url)
                          }
                        >

                          {msg.acfcoursePage.bundle3.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle3.url, msg.acfcoursePage.bundle3.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle4.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle4.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle4.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle4.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle4.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle4.dates}</td>

                    <td>{msg.acfcoursePage.bundle4.time}</td> */}


                    {(msg.acfcoursePage.bundle4.url).charAt(0) == "E" || (msg.acfcoursePage.bundle4.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle4.url)
                          }
                        >

                          {msg.acfcoursePage.bundle4.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle4.url, msg.acfcoursePage.bundle4.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle5.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle5.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle5.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle5.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle5.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle5.dates}</td>

                    <td>{msg.acfcoursePage.bundle5.time}</td> */}


                    {(msg.acfcoursePage.bundle5.url).charAt(0) == "E" || (msg.acfcoursePage.bundle5.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle5.url)
                          }
                        >

                          {msg.acfcoursePage.bundle5.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle5.url, msg.acfcoursePage.bundle5.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle6.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle6.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle6.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle6.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle6.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle6.dates}</td>

                    <td>{msg.acfcoursePage.bundle6.time}</td> */}

                    {(msg.acfcoursePage.bundle6.url).charAt(0) == "E" || (msg.acfcoursePage.bundle6.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle6.url)
                          }
                        >

                          {msg.acfcoursePage.bundle6.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle6.url, msg.acfcoursePage.bundle6.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle7.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle7.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle7.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle7.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle7.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle7.dates}</td>

                    <td>{msg.acfcoursePage.bundle7.time}</td> */}

                    {(msg.acfcoursePage.bundle7.url).charAt(0) == "E" || (msg.acfcoursePage.bundle7.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle7.url)
                          }
                        >

                          {msg.acfcoursePage.bundle7.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle7.url, msg.acfcoursePage.bundle7.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle8.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle8.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle8.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle8.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle8.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle8.dates}</td>

                    <td>{msg.acfcoursePage.bundle8.time}</td> */}

                    {(msg.acfcoursePage.bundle8.url).charAt(0) == "E" || (msg.acfcoursePage.bundle8.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle8.url)
                          }
                        >

                          {msg.acfcoursePage.bundle8.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle8.url, msg.acfcoursePage.bundle8.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle9.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle9.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle9.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle9.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle9.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle9.dates}</td>

                    <td>{msg.acfcoursePage.bundle9.time}</td> */}

                    {(msg.acfcoursePage.bundle9.url).charAt(0) == "E" || (msg.acfcoursePage.bundle9.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle9.url)
                          }
                        >

                          {msg.acfcoursePage.bundle9.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle9.url, msg.acfcoursePage.bundle9.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle10.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle10.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle10.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle10.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle10.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle10.dates}</td>

                    <td>{msg.acfcoursePage.bundle10.time}</td> */}

                    {(msg.acfcoursePage.bundle10.url).charAt(0) == "E" || (msg.acfcoursePage.bundle10.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle10.url)
                          }
                        >

                          {msg.acfcoursePage.bundle10.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle10.url, msg.acfcoursePage.bundle10.enrolltext)

                    )}


                  </tr>
                )}

                {!msg.acfcoursePage.bundle11.category ? (
                  ""
                ) : (

                  <tr key={msg.acfcoursePage.bundle11.category} style={{height:"153px"}}>

                    <td>{msg.acfcoursePage.bundle11.category}</td>

                    <th scope="row">
                      <img src={msg.acfcoursePage.bundle11.bundle.mediaItemUrl} style={{ width: "120px", height: "120px" }} />
                    </th>

                    <td>
                      {msg.acfcoursePage.bundle11.price}
                    </td>

                    {/* <td>{msg.acfcoursePage.bundle11.dates}</td>

                    <td>{msg.acfcoursePage.bundle11.time}</td> */}

                    {(msg.acfcoursePage.bundle11.url).charAt(0) == "E" || (msg.acfcoursePage.bundle11.url).charAt(0) == "e" ? (

                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          id="example-widget-trigger"
                          onClick={() =>
                            this.eventBrite(msg.acfcoursePage.bundle11.url)
                          }
                        >

                          {msg.acfcoursePage.bundle11.enrolltext}

                        </button>

                      </td>

                    ) : (


                      this.getUrlTypeNew(msg.acfcoursePage.bundle11.url, msg.acfcoursePage.bundle11.enrolltext)

                    )}


                  </tr>
                )}



              </tbody>
            </table>

            <ReactModal
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleModalClose}
              contentLabel="Buy Course"
              style={customStyles}
            // className="Modal"
            // overlayClassName="Overlay"
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
          </div>
        </div>
      </>
    );
  }

}

export default CourseBundleTable;