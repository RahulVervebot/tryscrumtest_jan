import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { withPrefix, Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import "./Chat/style.css";
import "./Chat/townscript.css";
import { Alert } from "antd";

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


class CourseEnrollTable extends React.Component {
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
      stateinstructions:"",
      statethecourse:"",
      statewhoCanAttend:"",
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

    var exampleCallback = function() {
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
        <FilterTable values={this.props.messages} />
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


  getUrlType2(value){

    if (value.charAt(0) !== "E" && value.charAt(0) !== "e" && value.charAt(8) !== "f" ) {
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

    if (value.charAt(8) === "f" ) {
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

  let course = this.props.messages;
  let msg = this.props.messages;

  console.log("graphql data received is ", this.props.messages );
  //console.log("graphql data is ",graphqlData);

    return (
      <div className="table-responsive">
        <table className="table borderless table-hover">
          <thead
            style={{
              backgroundColor: "white",
              color: "red",
              fontWeight: "800",
            }}
          >
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
              <th scope="col">Price</th>
              <th scope="col">Trainer</th>
              <th scope="col">Spot</th>
            </tr>
          </thead>

          <tbody style={{fontWeight:"bolder"}}>

            {/* 
            {graphqlData.map((msg) => { 
              return ( 
                <> 
            */}                
          
                
                {!msg.acfcoursePage.course1.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course1.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course1.date1}
                        <br />
                        {msg.acfcoursePage.course1.time1}
                      </th>

                      <td>{msg.acfcoursePage.course1.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course1.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course1.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course1.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course1.url)} */}

                      { (msg.acfcoursePage.course1.url).charAt(0) == "E" || (msg.acfcoursePage.course1.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course1.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course1.url)

                        )} 
                      
                      {/* { (msg.acfcoursePage.course1.url).charAt(0) == "E" || (msg.acfcoursePage.course1.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                // id="example-widget-trigger"
                                onClick={() =>
                                  this.eventBrite(msg.acfcoursePage.course1.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                               <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() =>
                                  this.handleEnroll(msg.acfcoursePage.course1.url, true) 
                                }
                              >
                              Enroll
                            </button>

                            </td>

                      )} */}

                    </tr>
                  )}
 
                {!msg.acfcoursePage.course2.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course2.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course2.date1}
                        <br />
                        {msg.acfcoursePage.course2.time1}
                      </th>

                      <td>{msg.acfcoursePage.course2.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course2.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course2.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course2.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course2.url)} */}

                      { (msg.acfcoursePage.course2.url).charAt(0) == "E" || (msg.acfcoursePage.course2.url).charAt(0) == "e" ? (

                      <td>
                        <button
                            type="submit"
                            className="btn btn-danger"
                            id="example-widget-trigger"
                            onClick={() =>
                              this.eventBrite(msg.acfcoursePage.course2.url) 
                            }
                          >
                            Enroll
                        </button> 

                      </td>

                      ) : (

                        this.getUrlType2(msg.acfcoursePage.course2.url)

                      )} 

                      {/* { (msg.acfcoursePage.course2.url).charAt(0) == "E" || (msg.acfcoursePage.course2.url).charAt(0) == "e"  ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course2.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          <td>
                            <button
                              type="submit"
                              className="btn btn-danger"
                              onClick={() =>
                                this.handleEnroll(msg.acfcoursePage.course2.url, true) 
                              }
                            >
                            Enroll
                          </button>

                          </td>

                        )} */}

                    </tr>

                    
                  )}

                  {!msg.acfcoursePage.course3.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course3.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course3.date1}
                        <br />
                        {msg.acfcoursePage.course3.time1}
                      </th>

                      <td>{msg.acfcoursePage.course3.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course3.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course3.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course3.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course3.url)} */}

                      { (msg.acfcoursePage.course3.url).charAt(0) == "E" || (msg.acfcoursePage.course3.url).charAt(0) == "e" ? (

                      <td>
                        <button
                            type="submit"
                            className="btn btn-danger"
                            id="example-widget-trigger"
                            onClick={() =>
                              this.eventBrite(msg.acfcoursePage.course3.url) 
                            }
                          >
                            Enroll
                        </button> 

                      </td>

                      ) : (

                        this.getUrlType2(msg.acfcoursePage.course3.url)

                      )} 

                      {/* { (msg.acfcoursePage.course3.url).charAt(0) == "E" || (msg.acfcoursePage.course3.url).charAt(0) == "e"  ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course3.url) 
                              }
                            >
                              Enroll 
                          </button> 

                        </td>

                        ) : (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() =>
                                  this.handleEnroll(msg.acfcoursePage.course3.url, true) 
                                }
                              >
                                Enroll
                            </button>

                          </td>

                        )} */}

                    </tr>
                  )}

                  {!msg.acfcoursePage.course4.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course4.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course4.date1}
                        <br />
                        {msg.acfcoursePage.course4.time1}
                      </th>

                      <td>{msg.acfcoursePage.course4.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course4.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course4.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course4.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course4.url)} */}

                      { (msg.acfcoursePage.course4.url).charAt(0) == "E" || (msg.acfcoursePage.course4.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course4.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course4.url)

                        )} 

                      {/* { (msg.acfcoursePage.course4.url).charAt(0) == "E" || (msg.acfcoursePage.course4.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course4.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course4.url)

                        )}  */}

                      {/* { (msg.acfcoursePage.course4.url).charAt(0) == "E" || (msg.acfcoursePage.course4.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course4.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course4.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                    </tr>
                  )}

                  {!msg.acfcoursePage.course5.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course5.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course5.date1}
                        <br />
                        {msg.acfcoursePage.course5.time1}
                      </th>

                      <td>{msg.acfcoursePage.course5.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course5.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course5.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course5.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course5.url)} */}

                      { (msg.acfcoursePage.course5.url).charAt(0) == "E" || (msg.acfcoursePage.course5.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course5.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course5.url)

                        )} 

                       {/* { (msg.acfcoursePage.course5.url).charAt(0) == "E" || (msg.acfcoursePage.course5.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course5.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course5.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )}  */}

                    </tr>
                  )}

                  {!msg.acfcoursePage.course6.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course6.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course6.date1}
                        <br />
                        {msg.acfcoursePage.course6.time1}
                      </th>

                      <td>{msg.acfcoursePage.course6.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course6.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course6.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course6.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course6.url)} */}

                      { (msg.acfcoursePage.course6.url).charAt(0) == "E" || (msg.acfcoursePage.course6.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course6.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course6.url)

                        )} 

                      {/* { (msg.acfcoursePage.course6.url).charAt(0) == "E" || (msg.acfcoursePage.course6.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course6.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course6.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                    </tr>
                  )}

                  {!msg.acfcoursePage.course7.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course7.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course7.date1}
                        <br />
                        {msg.acfcoursePage.course7.time1}
                      </th>

                      <td>{msg.acfcoursePage.course7.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course7.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course7.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course7.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course7.url)} */}

                      { (msg.acfcoursePage.course7.url).charAt(0) == "E" || (msg.acfcoursePage.course7.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course7.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course7.url)

                        )} 

                      {/* { (msg.acfcoursePage.course7.url).charAt(0) == "E" || (msg.acfcoursePage.course7.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course7.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course7.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                    </tr>
                  )}

                  {!msg.acfcoursePage.course8.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course8.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course8.date1}
                        <br />
                        {msg.acfcoursePage.course8.time1}
                      </th>

                      <td>{msg.acfcoursePage.course8.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course8.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course8.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course8.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course8.url)} */}

                      { (msg.acfcoursePage.course8.url).charAt(0) == "E" || (msg.acfcoursePage.course8.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course8.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course8.url)

                        )} 

                      {/* { (msg.acfcoursePage.course8.url).charAt(0) == "E" || (msg.acfcoursePage.course8.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course8.url) 
                                }
                              >
                                Enroll
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course8.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}


                    </tr>
                  )}

                  {!msg.acfcoursePage.course9.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course9.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course9.date1}
                        <br />
                        {msg.acfcoursePage.course9.time1}
                      </th>

                      <td>{msg.acfcoursePage.course9.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course9.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course9.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course9.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course9.url)} */}

                      { (msg.acfcoursePage.course9.url).charAt(0) == "E" || (msg.acfcoursePage.course9.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course9.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course9.url)

                        )} 

                      {/* { (msg.acfcoursePage.course9.url).charAt(0) == "E" || (msg.acfcoursePage.course9.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course9.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course9.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}

                    </tr>
                  )}

                  {!msg.acfcoursePage.course10.date1 ? (
                    ""
                  ) : (
                    <tr key={msg.acfcoursePage.course10.url}>
                      <th scope="row">
                        {msg.acfcoursePage.course10.date1}
                        <br />
                        {msg.acfcoursePage.course10.time1}
                      </th>


                      <td>{msg.acfcoursePage.course10.location}</td>
                      <td>
                        <strike>
                          {msg.acfcoursePage.course10.regularPrice}
                        </strike>
                        <br />
                        {msg.acfcoursePage.course10.salePrice}
                      </td>
                      <td>{msg.acfcoursePage.course10.trainer}</td>

                      {/* {this.getUrlType(msg.acfcoursePage.course10.url)} */}

                      { (msg.acfcoursePage.course10.url).charAt(0) == "E" || (msg.acfcoursePage.course10.url).charAt(0) == "e" ? (

                        <td>
                          <button
                              type="submit"
                              className="btn btn-danger"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(msg.acfcoursePage.course10.url) 
                              }
                            >
                              Enroll
                          </button> 

                        </td>

                        ) : (

                          this.getUrlType2(msg.acfcoursePage.course10.url)

                        )} 

                      {/* { (msg.acfcoursePage.course10.url).charAt(0) == "E" || (msg.acfcoursePage.course10.url).charAt(0) == "e" ? (

                          <td>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                id="example-widget-trigger"
                                onClick={() =>
                                   this.eventBrite(msg.acfcoursePage.course10.url) 
                                }
                              >
                                Enroll 
                            </button> 

                          </td>

                          ) : (

                            <td>
                              <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.handleEnroll(msg.acfcoursePage.course10.url, true) 
                                  }
                                >
                                  Enroll
                              </button>

                            </td>

                      )} */}


                    </tr>
                  )}


            {/*  <ReactModal
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

                  <Helmet>

                        <script>
                          {`
                            console.log("value of state variable",${this.state.eventStateId})

                            var exampleCallback = function() {
                              console.log("Order complete!");
                            }
                          
                            window.EBWidgets.createWidget({
                              widgetType: "checkout",
                              eventId: ${this.state.eventStateId},
                              modal: true,
                              modalTriggerElementId: "example-widget-trigger",
                              onOrderComplete: exampleCallback
                            })
                          `}
                        </script>
   

                  </Helmet>


                  <ReactModal
                    isOpen={this.state.isDetailOpen}
                    onRequestClose={this.handleDetailClose}
                    contentLabel="Buy Course"
                    //style={customStyles}
                    className="Modal"
                    overlayClassName="Overlay"
                  >
                      <div className="modal-body">

                      <h5 className="modal-title" style={{marginBottom:"10px", color:"red"}}> {this.state.statetitle}</h5>
                      
                       <h5 style={{color:"red"}}>Course Details </h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.statethecourse}}/>

                       <h5 style={{color:"red"}}>Certification </h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.statecertificate}}/> 

                       <h5 style={{color:"red"}}>Virtual class Instructions</h5>
                       <p dangerouslySetInnerHTML={{__html: this.state.stateinstructions}}/>

                       <a href={this.state.statepageurl} target="_blank">More Details</a>
                       
                       </div>    
                       <div class="text-center">
                         <button className="btn btn-danger" onClick={this.handleDetailClose}>Close</button> 
                       </div>
                  </ReactModal>   
                </>
              ); 
           })} */}
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

                  {/* <Helmet>

                        <script>
                          {`
                            console.log("value of state variable",${this.state.eventStateId})

                            var exampleCallback = function() {
                              console.log("Order complete!");
                            }
                          
                            window.EBWidgets.createWidget({
                              widgetType: "checkout",
                              eventId: ${this.state.eventStateId},
                              modal: true,
                              modalTriggerElementId: "example-widget-trigger",
                              onOrderComplete: exampleCallback
                            })
                          `}
                        </script>
   

                  </Helmet> */}

      </div>
    );
  }

}

export default CourseEnrollTable;