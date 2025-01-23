import React, { useState } from "react";
import MessageList from "../../components/Chat/MessageList";

import "../../components/Chat/style.css";
import slidestrech from "../../assets/images/slider-1-scratch.png";
import person from "../../assets/images/twoperson.webp";
import { contains } from "jquery";
import CourseTable from "../CourseTable";

const SliderOne = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState([]);


  // Modified GraphQL data
  props.title.map((elem) => {
    console.log(elem, "elem")

    Object.keys(elem.acfcoursePage).map((e) => {
      elem.acfcoursePage[e].id = elem.id
      elem.acfcoursePage[e].uri = elem.uri
      elem.acfcoursePage[e].title = elem.title
      elem.acfcoursePage[e].option = elem.acfcoursePage.options
    })

  })

  // filter by search
  const handleChange = (e) => {
    var message = e.target.value;

    if (message.length >= 3) {
      const filteredDatalist = props.title.filter((post) => {
        return (
          post.acfcoursePage.options.keywords
            .toLowerCase()
            .includes(message.toLowerCase()) ||
          post.title.toLowerCase().includes(message.toLowerCase())
        );

      });
      setFilteredData(filteredDatalist);
      setQuery(message);
    } else {
      const filteredDatalist = [];
      setFilteredData(filteredDatalist);
      setQuery(message);
    }
  };

  // concat all courses data

  const course1d = filteredData.map((item) => item.acfcoursePage.course1);
  const course2d = filteredData.map((item) => item.acfcoursePage.course2);
  const course3d = filteredData.map((item) => item.acfcoursePage.course3);
  const course4d = filteredData.map((item) => item.acfcoursePage.course4);
  const course5d = filteredData.map((item) => item.acfcoursePage.course5);
  const course6d = filteredData.map((item) => item.acfcoursePage.course6);
  const course7d = filteredData.map((item) => item.acfcoursePage.course7);
  const course8d = filteredData.map((item) => item.acfcoursePage.course8);
  const course9d = filteredData.map((item) => item.acfcoursePage.course9);
  const course10d = filteredData.map((item) => item.acfcoursePage.course10);

  // sorting data

  let d = course1d.concat(course2d, course3d, course4d, course5d, course6d, course7d, course8d, course9d, course10d);
  let f = d.filter(x => x.date1 != "" && x.date1 != "Coming soon")




  console.log(f, "data")

  // const b = f.sort((a, b) => {
  //   return b.date1.split(" ")[2] - a.date1.split(" ")[2]
  // })

  // a='Mar 28-30, 2023'

  // eventA  = new Date(a)

  // console.log(eventA.toISOString())

  const b = f.sort((a, b) => {
    let eventA = new Date(a.date1)
    let eventB = new Date(b.date1)
    const nameA = eventA.toISOString()
    const nameB = eventB.toISOString()

    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });

  const e = b.sort((a, b) => {
    let eventA = new Date(b.date1)
    let eventB = new Date(a.date1)
    const nameA = eventA.getMonth()
    const nameB = eventB.getMonth()

    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });

  // final data for api integration 
  const finalData = e;
 
  console.log("final" , finalData)

  return (
    <>
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">

            <img src={person} className="banner-one__person" alt="" />
            <div className="row no-gutters">
              <div className="col-xl-12">
                 <h1 style={{fontSize:"18px", color:"#fff", fontWeight:"600"}}>Agile Consulting and Training Services</h1>
                <h3 className="banner-one__title banner-one__light-color desktopdisplay">
                  We Humanise <br />
                  Organisations <br />
                </h3>

                <h3 className="banner-one__title_mobile banner-one__light-color mobiledisplay">
                  We Humanise <br />
                  Organisations <br />
                </h3>

                <div style={{ width: "50%" }}>

                  <div className="form-search col-xs-12" >
                    {filteredData.length !== 0 ? (
                      <div style={{ width: "75%" }}>
                        <input
                          type="text"
                          className="text-input-hide form-control-lg placeholder-text-home-search"
                          id="searchBar"
                          placeholder="Search Courses"
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div style={{ width: "75%" }}>
                        <input
                          type="text"
                          className="text-input form-control-lg placeholder-text-home-search"
                          id="searchBar"
                          placeholder="Search Courses"
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {filteredData.length !== 0 ? (
                      <i
                        class="fa fa-search fa-2x faalign "
                        aria-hidden="false"
                        style={{ marginLeft: "10px", zIndex: "-50" }}
                      ></i>
                    ) : (
                      <i
                        class="fa fa-search fa-2x faalign "
                        aria-hidden="false"
                        style={{ marginLeft: "10px" }}
                      ></i>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      {filteredData.length !== 0 ? (
        <MessageList
          newmessage={finalData} />
      ) : null}

    </div>

    <CourseTable />
    </>
  );
};

export default SliderOne;