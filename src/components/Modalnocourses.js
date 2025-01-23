import React, { useState }from 'react'
import "../assets/css/modal.css"
import "../assets/css/style.css";
import axios from "axios";






const Modalnocourses = (props) => {

  const { content, onClick } = props

  const btn = {
    width: "150px",
    height: "50px",
    padding: "8px"
  }


  const [modal, modalSet] = useState("");

  const showModal = () => {
    modalSet("flex")
  }

  const hideModal = () => {
    modalSet("none")
  }






  




  return (
    <>
      <button onClick={showModal} class="thm-btn course-details__price-btn hide_mobile" style={btn} ><i class="fa fa-download"></i>&nbsp;&nbsp;Brochure</button>
      {modal == "flex" ? <div className="modal_background" onClick={hideModal}></div> : null}
      <div className='modal_container' style={{ display: `${modal}` }}>
        <div className='modal_content'>
          <i fa className='fa fa-times close_modal' onClick={hideModal}></i>
          <div className='modal_box'>
            <h5>{content}</h5>
          </div>
        </div>
      </div>

    </>
  )
}

export default Modalnocourses