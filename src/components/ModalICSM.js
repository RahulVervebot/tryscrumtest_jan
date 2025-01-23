import React, { useState } from "react"
import "../assets/css/modal.css"
import "../assets/css/style.css"
import axios from "axios"

const ModalCSM = props => {
  const { content, image ,row, col } = props

  const btn = {
    width: "150px",
    height: "50px",
    padding: "8px",
  }

  const [modal, modalSet] = useState("")

  const showModal = () => {
    modalSet("flex")
  }

  const hideModal = () => {
    modalSet("none")
  }

  return (
    <>
      <div
        className=""
        onClick={showModal}
        style={{ gridRowStart: row, gridColumnStart: col }}
      >
        {image}
      </div>

      {modal == "flex" ? (
        <div className="modal_background" onClick={hideModal}></div>
      ) : null}
      <div className="modal_container" style={{ display: `${modal}` }}>
        <div className="modal_content  pt-4">
          <i fa className="fa fa-times close_modal" onClick={hideModal}></i>
          <div className="modal_box">{content}</div>
        </div>
      </div>
    </>
  )
}

export default ModalCSM
