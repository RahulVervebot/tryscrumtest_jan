import React from "react";
import ReactModal from "react-modal";
import Carousel, { consts } from 'react-elastic-carousel';
import "./Chat/style.css";
import "./Chat/townscript.css";
import { set } from "lodash";


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

const customStylesForNoCourse = {
  content: {
    top: "60%",
    left: "50%",
    bottom: "auto",
    marginRight: "-50%",
    width: "55%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#d23f3f",
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    color: 'white',
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.2)",
  }
}


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
      isCoursesOpen: true,
      onlinecourse: [],
      offlinecourse: [],
      allcourses: [],
      countryFiltered: [],
      currenttableview: 1,
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
      button1: "#ff3547",
      button2: "white",
      button3: "white",
      setFoundUsers: "",
      name: "",
      filteredval: "",
      myselect: 3,
      mycourses: "",
      countryData: "",
      countryName: "",

    };
  }

  handleModalClose = (event) => {
    // console.log('handleModalClose: ', event);
    this.setState({ isModalOpen: false });
    document.body.style.overflow = "unset";
  };


  handleCoursesClose = (event) => {
    this.setState({ isCoursesOpen: true });
    document.body.style.overflowX = "none";
  };


  handleDetailClose = (event) => {
    // console.log("handleDetailClose: ", event);
    this.setState({ isDetailOpen: false });

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

  // scrollToBottom() {
  //   var element = document.getElementById("gatsby-focus-wrapper");
  //   element.scrollIntoView({ behavior: "smooth" });
  // }

  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }


  getUrlType2(value) {

    if (value.charAt(0) !== "E" && value.charAt(0) !== "e" && value.charAt(8) !== "f") {
      return (
        <td>
          <button
            type="submit"
            className="enroll-button"
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
            className="enroll-button"
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

  getUrlTypeNew(value, enrolltext) {

    if (value.charAt(0) !== "E" && value.charAt(0) !== "e" && value.charAt(8) !== "f") {
      return (
        <td>
          <button
            type="submit"
            className="enroll-button"
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
            className="enroll-button"
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

    console.log("Course Information", course);

    // Filter Table Logic Starts
    const arr2 = [msg.acfcoursePage.course1, msg.acfcoursePage.course2, msg.acfcoursePage.course3, msg.acfcoursePage.course4, msg.acfcoursePage.course5, msg.acfcoursePage.course6, msg.acfcoursePage.course7, msg.acfcoursePage.course8, msg.acfcoursePage.course9, msg.acfcoursePage.course10, msg.acfcoursePage.course11, msg.acfcoursePage.course12, msg.acfcoursePage.course13, msg.acfcoursePage.course14, msg.acfcoursePage.course15, msg.acfcoursePage.course16, msg.acfcoursePage.course17, msg.acfcoursePage.course18, msg.acfcoursePage.course19, msg.acfcoursePage.course20];
    const barcode = arr2.map(value => value);
    const allbars2 = barcode.sort((a, b) => {

      if (a.position > b.position) {
        return 1;
      }
      if (a.position < b.position) {
        return -1;
      }
      return 0;
    })
















    // const HonlinePlusOffline = () => {
    //   this.setState({ currenttableview: filtered, button1: "#ff3547", button2: "white", button3: "white" })
    //   // window.scrollTo(870, 870)
    // }
    // const HfilterOnline = () => {
    //   this.setState({ currenttableview: this.state.onlinecourse, button1: "white", button2: "#ff3547", button3: "white" })
    //   // window.scrollTo(870, 870)
    //   if (this.state.onlinecourse.length === 0) {
    //     alert("No online courses available")
    //     HonlinePlusOffline()
    //   }
    // }
    // const HfilterOffline = () => {
    //   this.setState({ currenttableview: this.state.offlinecourse, button1: "white", button2: "white", button3: "#ff3547", })
    //   // window.scrollTo(870, 870)
    //   if (this.state.offlinecourse.length === 0) {
    //     alert("No offline courses available")
    //     HonlinePlusOffline()
    //   }
    // }

    // const OnlinePlusOffline = () => {
    //   this.setState({ allcourses: filtered, button1: "#ff3547", button2: "#ff3547", button3: "white" });
    //   console.log("OnlinePlusOffline", this.state.allcourses);
    //   setTimeout(HonlinePlusOffline, 100)
    // }

    // const filterOnline = () => {
    //   var allFiltered = filtered.filter(value => value.location.toLowerCase().includes('online') === true || value.location.toLowerCase().includes('virtual') === true);
    //   this.setState({ onlinecourse: allFiltered, button1: "#f05457", button2: "white", button3: "#f05457" })
    //   console.log("allFiltered", allFiltered)
    //   console.log("filtered", filtered)

    //   setTimeout(HfilterOnline, 100)
    // }


    // console.log("onlinecourse in function", this.state.onlinecourse)

    // const filterOffline = () => {
    //   var allFiltered2 = filtered.filter(value => value.location.toLowerCase().includes('online') === false).filter(value => value.location.toLowerCase().includes('virtual') === false);
    //   this.setState({ offlinecourse: allFiltered2, button1: "#f05457", button2: "#f05457", button3: "white" })
    //   console.log("allFiltered", this.state.offlinecourse)
    //   console.log("filtered", filtered)
    //   setTimeout(HfilterOffline, 100)
    // }









    // console.log("offlinecourse in function", this.state.offlinecourse);
    // console.log("currenttableview", this.state.currenttableview)

    // let course1val, course2val, course3val, course4val, course5val, course6val, course7val, course8val, course9val, course10val;

    // ******Please do not delete this coment. It is used to remember the positon of prexisting code.*******
    // *****removed code will be pased here from removed code.txt file in root folder in case of need******

    // console.log("graphql data received is ", this.props.messages);

    //console.log("graphql data is ",graphqlData);
    // axios.get('https://countriesnow.space/api/v0.1/countries/population/cities').then(resp => {
    // let countryData = resp.data.data.map((x => x.country))
    // console.log((countryData), "country");
    // });

    // const newfilteredData = allbars2.filter(value => value.position <= 20 && value.position > 0);
    // console.log(newfilteredData, "new filtered")

    // const HandleCountry = (e, index) => {
    //   const keyword = e.target.value;
    //   this.setState({ course: keyword })

    //   this.setState({ myselect: 3 })

    //   if (index) {
    //     console.log(index, "index")
    //     this.setState({ myselect: index })
    //   }


    //   const results = newfilteredData.filter((post) => {
    //     if (keyword === 'online') {
    //       return post.location.toLowerCase().includes(keyword.toLowerCase());
    //     } else if (keyword === 'SEARCH BY LOCATION' || keyword === 'ALL' || keyword === 'X' || keyword === 'online') {
    //       return post.location.toLowerCase().includes(''.toLowerCase());
    //     } else if (keyword === 'offline') {
    //       return post.location.toLowerCase().includes('online') === false;
    //     } else {
    //       return post.country.toLowerCase().includes(keyword.toLowerCase());
    //     }
    //   })
    //   this.setState({ setFoundUsers: results });
    //   this.setState({ countryData: results });
    //   console.log(this.state.setFoundUsers)
    //   console.log(results, "this.state.setFoundUsers---")

    // }

    // let newfilteredData2;

    // if (this.state.setFoundUsers) {
    //   newfilteredData2 = this.state.setFoundUsers;
    // } else {
    //   newfilteredData2 = newfilteredData;
    // }
    // console.log(newfilteredData2, "newfilteredData2")


    // const HandleLocation = (e, index) => {
    //console.log(newfilteredData ,"newfiltered")
    // const keyword = e.target.value;
    // console.log("keyword", keyword);
    // this.setState({ mycourses: keyword });
    // if (index) {
    //   console.log(index, "index")
    //   this.setState({ myselect: index })
    // }

    //   if (keyword !== '') {
    //     const results = newfilteredData2.filter((post) => {
    //       if (keyword === 'online') {
    //         return post.location.toLowerCase().includes(keyword.toLowerCase());
    //       } else if (keyword === 'offline') {
    //         return post.location.toLowerCase().includes('online') === false;
    //       } else if (keyword === 'all') {
    //         return post.location.toLowerCase().includes(''.toLowerCase());
    //       }
    //       // Use the toLowerCase() method to make it case-insensitive
    //     });
    //     this.setState({ countryData: results });
    //     console.log(this.state.setFoundUsers, "this.state.setFoundUsers online")
    //   }
    //   else {
    //     console.log("All data", newfilteredData);
    //     this.setState({ countryData: newfilteredData });
    //   }

    //   this.setState({ name: keyword });
    // }

    // let filtered;

    // if (this.state.countryData) {
    // filtered = this.state.countryData;
    // } else {
    let filtered = allbars2.filter(value => value.position <= 20 && value.position > 0);




    // remove all keyword from country
    const removeAllfromcountry = filtered.filter((post) => {
      return post.country.includes('ALL') === false;
    })
    console.log(removeAllfromcountry, "popopop")

    // extract all country
    const filteredcountry = removeAllfromcountry.map((data => data.country))
    console.log(filteredcountry, "filtereddata")


    /// remove duplicates
    const countryList = [...new Set(filteredcountry)]

    console.log(this.state.countryName, "country name ")

    let countryfound;
    if (this.state.countryName) {
      countryfound = countryList.includes(this.state.countryName)
      console.log(countryfound, "fnnfnfnn")
    } else {
      countryfound = false;
    }





    //////filter offline online
    const HandleLocation = (e, index) => {
      const keyword = e.target.value;
      if (index) {
        console.log(index, "index")
        this.setState({ myselect: index })
      }
      const results = filtered.filter((post) => {
        if (keyword === 'online') {
          return post.location.toLowerCase().includes(keyword.toLowerCase());
        } else if (keyword === 'offline') {
          return post.location.toLowerCase().includes('online') === false;
        } else if (keyword === 'all') {
          return post.location.toLowerCase().includes(''.toLowerCase());
        } else {
          return post.location.toLowerCase().includes(''.toLowerCase());
        }
        // Use the toLowerCase() method to make it case-insensitive
      });
      console.log(results, "jjjjjjjjj")
      this.setState({ currenttableview: results });

    }

    /////after filter country




    ///filter country

    const HandleCountry = (e, index) => {
      const keyword = e.target.value;
      this.setState({ countryName: keyword })
      if (index) {
        console.log(index, "index")
        this.setState({ myselect: index })
      }
      const countryresults = filtered.filter((post) => {
        if (keyword == "ALL" || keyword == "SEARCH BY LOCATION" || keyword == "X") {
          return post.country.toLowerCase().includes(''.toLowerCase());
        }
        else {
          return post.country.toLowerCase().includes(keyword.toLowerCase());
        }
      })
      if (countryresults.length != 0) {
        this.setState({ countryList: countryresults });
        this.setState({ currenttableview: countryresults });
      }
      else {
        this.setState({ currenttableview: 0 });
      }
    }

    console.log(this.state.currenttableview.length, "cuurent table view")

    // console.log(this.state.countryFiltered, "country filterd")




    // if (countryfound === true) {
    //   filtered = this.state.currenttableview
    // } else {
    //   filtered = allbars2.filter(value => value.position <= 20 && value.position > 0);
    //   // console.log(filtered)
    // }

    console.log(filtered, "filtered length")


    const HandleLocation2 = (e, index) => {
      const keyword = e.target.value;
      console.log(keyword, "handlelocation2")
      if (index) {
        console.log(index, "index")
        this.setState({ myselect: index })
      }
      const resultsnew = this.state.countryList.filter((post) => {
        if (keyword === 'online') {
          return post.location.toLowerCase().includes(keyword.toLowerCase());
        } else if (keyword === 'offline') {
          return post.location.toLowerCase().includes('online') === false;
        } else if (keyword === 'all') {
          return post.location.toLowerCase().includes(''.toLowerCase());
        }
        // Use the toLowerCase() method to make it case-insensitive
      });
      console.log(resultsnew, "resultnew")
      this.setState({ currenttableview: resultsnew });
    }





















    //  console.log(filtered, "ffffff c c c ")
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];






    return (

      <>

        {filtered == 0 ? "" : <center className="">

          <div className="centered">
            <select
              // className="filter-button"
              className="filter-button-tag"
              onChange={(event) => HandleCountry(event, 3)}
              name={this.state.value}
            ><option>SEARCH BY LOCATION</option>
              <option>ALL</option>
              {countryList.map((post) => (
                <option>{post}</option>
              ))}
            </select>

            {countryfound ?
              <>
                <button
                  type="submit"
                  className={this.state.myselect == 3 ? "filter-button-select" : "filter-button"}
                  onClick={(event) => HandleLocation2(event, 3)}
                  value="all"
                  name={this.state.name}
                >all</button>
                <button
                  type="submit"
                  onClick={(event) => HandleLocation2(event, 1)}
                  value="online"
                  name={this.state.value}
                  className={this.state.myselect == 1 ? "filter-button-select" : "filter-button"}
                >online</button>
                <button
                  type="submit"
                  // className="filter-button"
                  className={this.state.myselect == 2 ? "filter-button-select" : "filter-button"}
                  onClick={(event) => HandleLocation2(event, 2)}
                  value="offline"
                  name={this.state.name}
                >offline</button>
              </>
              :
              <>
                <button
                  type="submit"
                  className={this.state.myselect == 3 ? "filter-button-select" : "filter-button"}
                  onClick={(event) => HandleLocation(event, 3)}
                  value="all"
                  name={this.state.name}
                >all</button>
                <button
                  type="submit"
                  onClick={(event) => HandleLocation(event, 1)}
                  value="online"
                  name={this.state.value}
                  className={this.state.myselect == 1 ? "filter-button-select" : "filter-button"}
                >online</button>
                <button
                  type="submit"
                  // className="filter-button"
                  className={this.state.myselect == 2 ? "filter-button-select" : "filter-button"}
                  onClick={(event) => HandleLocation(event, 2)}
                  value="offline"
                  name={this.state.name}
                >offline</button>
              </>
            }

          </div>

        </center>}

        {/* <button className="filter-button" onClick={OnlinePlusOffline}><div>ALL</div></button> */}

        {this.state.currenttableview.length >= 1 ?
          <Carousel breakPoints={breakPoints} itemPosition={consts.START} showEmptySlots>
            {this.state.currenttableview.map((filtered) => (
              <div className="card-container"  >
                <div className="card-main">
                  <div className="card-body">
                    <div className="card-title card-title-color" style={{ fontSize: "1.3rem", fontWeight: "200" }}>  {course.title}  </div>
                  </div>
                  <ul className="list-group list-group-flush" >
                    <li style={{ fontWeight: "200" }} className="list-group-item card-list"> <i class="fa fa-calendar"></i> &nbsp;{filtered.date1}</li>
                    <li style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-clock"></i>&nbsp; {filtered.time1}</li>
                    <li style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-map-marker"></i>&nbsp; {filtered.location}</li>
                    <li style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-user"></i>&nbsp; {filtered.trainer}</li>
                    <p style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-tag"></i>&nbsp; <strike>
                      {filtered.regularPrice}
                    </strike> &nbsp;{filtered.salePrice} </p>
                  </ul>
                  <center>
                    {filtered.url[0] == "E" || filtered.url[0] == "e" ? (
                      <button
                        type="submit"
                        className="enroll-button"
                        id="example-widget-trigger"
                        onClick={() =>
                          this.eventBrite(filtered.url)
                        }
                      >
                        {/* Enroll */}
                        {filtered.enrolltext}
                      </button>
                    ) : (
                      // this.getUrlType2(filtered[2].url)
                      this.getUrlTypeNew(filtered.url, filtered.enrolltext)
                    )}
                  </center>
                </div>
              </div>
            ))}
          </Carousel> : this.state.currenttableview.length == 0 ?
            <>
              <div id="close" className="modal-overlay">
                {countryfound ?
                  <div className="popupbox">
                    <a className="close" href="#close" ><button
                      type="search"
                      style={{ background: "none", border: "none" }}
                      onClick={(event) => HandleLocation2(event, 3)}
                      value="all"
                      name={this.state.name}
                    >&times;</button></a>
                    <div className="content">
                      <h2 className="desktopdisplay">Sorry, no courses found! Please contact our support to schedule one</h2>
                    </div>
                  </div> :
                  <div className="popupbox">
                    <a className="close" href="#close" ><button
                      type="search"
                      style={{ background: "none", border: "none" }}
                      onClick={(event) => HandleLocation(event, 3)}
                      value="all"
                      name={this.state.name}
                    >&times;</button></a>
                    <div className="content">
                      <h2 className="desktopdisplay">Sorry, no courses found! Please contact our support to schedule one</h2>
                    </div>
                  </div>
                }
              </div>
            </> :
            <>
              {filtered.length == 0 ? " " : <Carousel breakPoints={breakPoints} showEmptySlots>
                {filtered.map((filtered) => (
                  <div className="card-container">

                    <div class="card-main">
                      <div className="card-body">
                        <div className="card-title card-title-color" style={{ fontSize: "1.3rem", fontWeight: "200" }}>  {course.title}  </div>
                      </div>
                      <ul className="list-group list-group-flush"  >
                        <li style={{ fontWeight: "200" }} className="list-group-item card-list"> <i class="fa fa-calendar"></i> &nbsp;{filtered.date1}</li>
                        <li style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-clock"></i>&nbsp; {filtered.time1}</li>
                        <li style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-map-marker"></i>&nbsp; {filtered.location}</li>
                        <li style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-user"></i>&nbsp; {filtered.trainer}</li>
                        <p style={{ fontWeight: "200" }} className="list-group-item card-list"><i class="fa fa-tag"></i>&nbsp; <strike>
                          {filtered.regularPrice}
                        </strike> &nbsp;{filtered.salePrice} </p>
                      </ul>
                      <center>
                        {filtered.url[0] == "E" || filtered.url[0] == "e" ? (
                          <td>
                            <button
                              type="submit"
                              className="enroll-button"
                              id="example-widget-trigger"
                              onClick={() =>
                                this.eventBrite(filtered.url)
                              }
                            >
                              {/* Enroll */}
                              {filtered.enrolltext}
                            </button>
                          </td>

                        ) : (
                          // this.getUrlType2(filtered[2].url)
                          this.getUrlTypeNew(filtered.url, filtered.enrolltext)
                        )}
                      </center>
                    </div>
                  </div>
                ))}
              </Carousel>}

            </>
        }

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
      </>
    )
  }
}


export default CourseEnrollTable;