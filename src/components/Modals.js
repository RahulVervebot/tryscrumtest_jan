import * as React from "react"
import Modal from "@mui/material/Modal"
import { Box } from "@mui/material"

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f9f9f9",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  // width: "50%",
  borderRadius: "20px",
  border: "10px solid #fff",
  zIndex: "20000",
}

export default function Modals(props) {
  const { modalContent, buttonName } = props

  const [open, setOpen] = React.useState(false)
  const [hover, sethover] = React.useState("black")

  const hoverin = () => {
    sethover("#f05457")
  }

  const hoverout = () => {
    sethover("black")
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    sethover("black")
  }

  return (
    <>
      {/* <div className="card-job-bottom mt-25 mb-0">
        <div className="row">
          <div className="col-lg-12 col-sm-8 col-12 mb-0 text-center">
            <a
              onClick={handleOpen}
              roll="button"
              className="btn btn-small btn-pink mr-5"
              style={{background:"#f05457 !important", fontSize:"15px"}}
            >
              <span className="card-job-top--company p-1 f-20" >{buttonName}</span>
            </a>
          </div>
        </div>
      </div> */}

      <a
        onClick={handleOpen}
        style={{ background: "#f05457 !important", fontSize: "15px" }}
      >
        {buttonName}
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={"material-ui-modal"}>
          <button
            className="p-2"
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              zIndex: "20",
              cursor: "pointer",
              width: "fit-content",
              background: "none",
              border: "none",
            }}
            onClick={handleClose}
          >
            <i
              className="fa fa-close"
              style={{ fontSize: "22px", color: hover }}
              onMouseEnter={() => hoverin()}
              onMouseLeave={() => hoverout()}
            ></i>
          </button>
          {modalContent}
        </Box>
      </Modal>
    </>
  )
}
