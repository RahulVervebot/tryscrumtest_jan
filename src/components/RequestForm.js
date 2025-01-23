import React from "react"
import ModalRibbon from "./ModalRibbon"


const RequestForm = () => {
  return (
    <div
      className="container-fluid mb-0"
      style={{
        backgroundColor: "#f05457",
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="row w-100 mb-0">
        <div className="col-4 mb-0 text-center desktopdisplay">
          <ModalRibbon buttonName="Request a call back" color="#fff" />
        </div>
        <div className="col-md-6 col-lg-4 mb-0 text-center desktopdisplay">
          
          <a
            className="text-white"
            href="tel: +919789490848"
            // style={{ fontSize: "12px" }}
          > 
            <i className="fa fa-phone"></i>
            &nbsp;Call us on&nbsp;+919789490848{" "}
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-0 text-center desktopdisplay">
          <a
            className="text-white"
            href="mailto: help@tryscrum.com"
            // style={{ fontSize: "12px" }}
          >
            <i className="fa fa-envelope"></i>
            &nbsp;help@tryscrum.com{" "}
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-0 text-center mobiledisplay">
          <a
            className="text-white"
            href="tel: +919789490848"
            style={{ fontSize: "12px" }}
          >
            <i className="fa fa-phone"></i>
            &nbsp;Call us on&nbsp;+919789490848{" "}
          </a>
          &nbsp;&nbsp;
          <a
            className="text-white"
            href="mailto: help@tryscrum.com"
            style={{ fontSize: "12px" }}
          >
            <i className="fa fa-envelope"></i>
            &nbsp;help@tryscrum.com{" "}
          </a>
        </div>
        <div className="col-md-6 col-lg-4 mb-0 text-center tabletdisplay">
          <a
            className="text-white"
            href="tel: +919789490848"
            style={{ fontSize: "12px" }}
          >
            <i className="fa fa-phone"></i>
            &nbsp;Call us on&nbsp;+919789490848{" "}
          </a>
          &nbsp;&nbsp;
          <a
            className="text-white"
            href="mailto: help@tryscrum.com"
            style={{ fontSize: "12px" }}
          >
            <i className="fa fa-envelope"></i>
            &nbsp;help@tryscrum.com{" "}
          </a>
        </div>
      </div>
    </div>
  )
}

export default RequestForm
