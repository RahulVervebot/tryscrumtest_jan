import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { withPrefix, Link, graphql } from "gatsby";
import Helmet from "react-helmet";

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

class FilterTable extends React.Component {

  constructor(props) {
    super(props);
    };
    

  render() {
    let msg = this.props.values;

    let course1val, course2val, course3val, course4val, course5val, course6val, course7val, course8val, course9val, course10val; 

    let course1obj = <>
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
            
                            {/* { (msg.acfcoursePage.course1.url).charAt(0) == "E" || (msg.acfcoursePage.course1.url).charAt(0) == "e" ? (
      
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
      
                              )}  */}
                            
      
                          </tr>
                        )}
    </>;

    let course2obj = <>

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
            
                            {/* { (msg.acfcoursePage.course2.url).charAt(0) == "E" || (msg.acfcoursePage.course2.url).charAt(0) == "e" ? (
      
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
      
                            )}  */}
      
                          </tr>
      
                          
                        )}
        
    </>;

    let course3obj = <>

        {!msg.acfcoursePage.course3.date1 ? (
              ""
            ) : (
              <tr key={msg.acfcoursePage.course3.url}>
                <th scope="row">
                    
                    {course3val}

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

                {/* { (msg.acfcoursePage.course3.url).charAt(0) == "E" || (msg.acfcoursePage.course3.url).charAt(0) == "e" ? (

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

                )}  */}

              </tr>
            )}
        </>;

    let course4obj = <>

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
      
                          </tr>
                        )}

    </>;

    let course5obj = <>

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
      
                                this.getUrlType2(msg.acfcoursePage.course5.url)
      
                              )}  */}
      
                          </tr>
                        )}
    </>;

    let course6obj = <>

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
      
                                this.getUrlType2(msg.acfcoursePage.course6.url)
      
                              )}  */}
      
                          </tr>
                        )}

    </>;

    let course7obj = <>

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
      
                                this.getUrlType2(msg.acfcoursePage.course7.url)
      
                              )}  */}
      
                          </tr>
                        )}

    </>;

    let course8obj = <>

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
      
                                this.getUrlType2(msg.acfcoursePage.course8.url)
      
                              )}  */}
      
                          </tr>
                        )}

    </>;

    let course9obj = <>

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
      
                                this.getUrlType2(msg.acfcoursePage.course9.url)
      
                              )}  */}
      
                          </tr>
                        )}

    </>;

    let course10obj = <>

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
      
                                this.getUrlType2(msg.acfcoursePage.course10.url)
      
                              )}  */}
      
                          </tr>
                        )}

    </>;

      // Course 1
    if(msg.acfcoursePage.course1.position === 1){
        course1val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 2) {
        course2val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 3) {
        course3val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 4) {
        course4val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 5) {
        course5val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 6) {
        course6val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 7) {
        course7val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 8) {
        course8val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 9) {
        course9val = course1obj;
    }else if(msg.acfcoursePage.course1.position === 10) {
        course10val = course1obj;
    }
                              
     // Course 2
    if(msg.acfcoursePage.course2.position === 1){
        course1val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 2) {
        course2val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 3) {
        course3val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 4) {
        course4val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 5) {
        course5val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 6) {
        course6val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 7) {
        course7val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 8) {
        course8val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 9) {
        course9val = course2obj;
    }else if(msg.acfcoursePage.course2.position === 10) {
        course10val = course2obj;
    }

     // Course 3
    if(msg.acfcoursePage.course3.position === 1){
        course1val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 2) {
        course2val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 3) {
        course3val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 4) {
        course4val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 5) {
        course5val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 6) {
        course6val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 7) {
        course7val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 8) {
        course8val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 9) {
        course9val = course3obj;
    }else if(msg.acfcoursePage.course3.position === 10) {
        course10val = course3obj;
    }

     // Course 4
    if(msg.acfcoursePage.course4.position === 1){
        course1val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 2) {
        course2val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 3) {
        course3val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 4) {
        course4val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 5) {
        course5val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 6) {
        course6val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 7) {
        course7val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 8) {
        course8val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 9) {
        course9val = course4obj;
    }else if(msg.acfcoursePage.course4.position === 10) {
        course10val = course4obj;
    }

     // Course 5
    if(msg.acfcoursePage.course5.position === 1){
        course1val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 2) {
        course2val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 3) {
        course3val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 4) {
        course4val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 5) {
        course5val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 6) {
        course6val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 7) {
        course7val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 8) {
        course8val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 9) {
        course9val = course5obj;
    }else if(msg.acfcoursePage.course5.position === 10) {
        course10val = course5obj;
    }

     // Course 6
    if(msg.acfcoursePage.course6.position === 1){
        course1val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 2) {
        course2val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 3) {
        course3val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 4) {
        course4val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 5) {
        course5val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 6) {
        course6val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 7) {
        course7val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 8) {
        course8val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 9) {
        course9val = course6obj;
    }else if(msg.acfcoursePage.course6.position === 10) {
        course10val = course6obj;
    }

     // Course 7
    if(msg.acfcoursePage.course7.position === 1){
        course1val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 2) {
        course2val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 3) {
        course3val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 4) {
        course4val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 5) {
        course5val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 6) {
        course6val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 7) {
        course7val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 8) {
        course8val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 9) {
        course9val = course7obj;
    }else if(msg.acfcoursePage.course7.position === 10) {
        course10val = course7obj;
    }

     // Course 8
     if(msg.acfcoursePage.course8.position === 1){
        course1val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 2) {
        course2val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 3) {
        course3val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 4) {
        course4val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 5) {
        course5val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 6) {
        course6val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 7) {
        course7val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 8) {
        course8val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 9) {
        course9val = course8obj;
    }else if(msg.acfcoursePage.course8.position === 10) {
        course10val = course8obj;
    }

     // Course 9
    if(msg.acfcoursePage.course9.position === 1){
        course1val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 2) {
        course2val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 3) {
        course3val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 4) {
        course4val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 5) {
        course5val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 6) {
        course6val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 7) {
        course7val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 8) {
        course8val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 9) {
        course9val = course9obj;
    }else if(msg.acfcoursePage.course9.position === 10) {
        course10val = course9obj;
    }

     // Course 10
    if(msg.acfcoursePage.course10.position === 1){
        course1val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 2) {
        course2val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 3) {
        course3val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 4) {
        course4val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 5) {
        course5val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 6) {
        course6val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 7) {
        course7val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 8) {
        course8val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 9) {
        course9val = course10obj;
    }else if(msg.acfcoursePage.course10.position === 10) {
        course10val = course10obj;
    }

    console.log("this.props.values ", this.props.values );

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
                                   
                        {course1val}
                        {course2val}
                        {course3val}
                        {course4val}
                        {course5val}
                        {course6val}
                        {course7val}
                        {course8val}
                        {course9val}
                        {course10val} 
      
                </tbody>
              </table>    
      
                       {/* <ReactModal
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
                        </ReactModal> */}
      
            </div>
          );

  }

}

export default FilterTable;