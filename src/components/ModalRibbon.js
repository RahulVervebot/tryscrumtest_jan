import React, { useState, useEffect } from "react"
import Modal from "@mui/material/Modal"
import { Box } from "@mui/material"
import axios from "axios"
import City from "../Api/country.json"
import callback from "../assets/images/callback-phone.svg"
import { useStaticQuery, graphql } from "gatsby"

export default function ModalRibbon(props) {
  const ddata = useStaticQuery(graphql`
    query {
      allWpPost {
        nodes {
          uri
          title
          excerpt
          id
          date
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          acfcoursePage {
            options {
              certificate
              certificationBody
              curriculum
              feeStructure
              fieldGroupName
              guidlineUrl
              included
              instructions
              logisticsAndPrerequisites
              pduScrumAllianceSeus
              prerequisites
              trustPilotRating
              video
              whoCanAttend
              why
              duration
              thecourse
            }
            course1 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course2 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course3 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course4 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
          }
        }
      }
    }
  `)

  const returned = ddata.allWpPost.nodes

  console.log(ddata, "datata")

  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: "80%",
    borderRadius: "10px",
    border: "10px solid #fff",
    zIndex: "20000",
  }

  const [cities, setCities] = useState([...City])

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    courses: "",
    cities: "+91",
    group: "I'm an individual learner",
    // job: "",
  })

  const [loader, setloader] = useState("")
  const [checked, setChecked] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    courses: "",
    cities: "",
    group: "",
    checkbox: "",
  })

  const [submissionMessage, setSubmissionMessage] = useState("")

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setState({
      ...state,
      [name]: value,
    })
    setErrors({ ...errors, [name]: "" })
  }

  const handleCheck = event => {
    setChecked(prevCheck => !prevCheck)
    setErrors({
      ...errors,
      checkbox: "",
    })
  }

  const submitHandler = async e => {
    e.preventDefault()
    if (
      state.email &&
      state.name &&
      checked &&
      state.group &&
      state.cities &&
      state.courses
    ) {
      setloader("loading")
      const url =
        "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/8258/feedback"
      const formData = new FormData()
      formData.append("your-name", state.name)
      formData.append("your-email", state.email)
      formData.append("your-number", state.cities + "" + state.phone)
      formData.append("your-courses", state.courses)
      formData.append("your-group", state.group)

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
      const res = await axios.post(url, formData, config)
      console.log("response", res)

      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        setSubmissionMessage(res.data.message)
      } else {
        alert("please try again")
      }
    } else {
      let error = errors
      if (state.name === "") {
        // debugger;
        error = {
          ...error,
          name: "This is required",
        }
      }
      if (state.email === "") {
        error = {
          ...error,
          email: "This is required",
        }
      }
      if (state.group === "") {
        error = {
          ...error,
          group: "This is required",
        }
      }
      if (state.courses === "") {
        error = {
          ...error,
          courses: "This is required",
        }
      }
      if (state.phone === "") {
        error = {
          ...error,
          phone: "This is required",
        }
      }
      if (checked === false) {
        error = {
          ...error,
          checkbox: "Please check this",
        }
      }

      setErrors(error)
    }
  }

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
    // window.location.reload(false);
  }

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then(res => res.json())
      .then(response => {
        console.log("Country: ", response.country)
      })
      .catch((data, status) => {
        console.log("Request failed")
      })
  }, [])

  return (
    <>
      <a
        roll="button"
        onClick={handleOpen}
        style={{ color: "#fff" }}
        className="desktopdisplay"
      >
        <img
          src={callback}
          height="18px"
          width="18px"
          alt="callback"
          style={props.style}
        />
        &nbsp;{buttonName}
      </a>
      <a
        roll="button"
        onClick={handleOpen}
        style={{ color: props.styleText, textDecoration: "none" }}
        className="mobiledisplay"
      >
        <img
          src={callback}
          height="18px"
          width="18px"
          alt="callback"
          style={props.style}
        />
        {buttonName}
      </a>
      <a
        roll="button"
        onClick={handleOpen}
        style={{ filter: props.styleText, textDecoration: "none" }}
        className="tabletdisplay"
      >
        <img
          src={callback}
          height="18px"
          width="18px"
          alt="callback"
          style={props.style}
        />
        {buttonName}
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={"material-ui-modal-ribbon"}>
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
              className="fas fa-close"
              style={{ fontSize: "22px", color: hover }}
              onMouseEnter={() => hoverin()}
              onMouseLeave={() => hoverout()}
            ></i>
          </button>

          <div
            className="p-2"
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: "20",
              cursor: "pointer",
              width: "fit-content",
              background: "none",
              border: "none",
              fontWeight: "600",
              fontSize: "20px",
              // color:"black",
              color: "black",
            }}
            onClick={handleClose}
          >
            Request a call back
          </div>
          <form className="row mt-4">
            <p className="mb-2" style={{ lineHeight: "20px" }}>
              Leave your details and Our training consultant will get back to
              you
            </p>
            <div className="form-group col-lg-6 mb-0">
              <label style={{ marginBottom: "0" }}>Enter Name</label>

              <input
                type="text"
                className="form-control mb-0"
                name="name"
                value={state.name}
                onChange={handleInputChange}
              />
              <small style={{ color: "red" }}>{errors.name}</small>
            </div>
            <div className="form-group col-lg-6 mb-0">
              <label
                style={{ marginBottom: "0" }}
                for="exampleInputEmail1 mb-0"
              >
                Phone{" "}
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <select
                    className="input-group-text px-0"
                    name="cities"
                    value={state.cities}
                    onChange={handleInputChange}
                  >
                    <option selected>+91</option>
                    {cities.map(item => (
                      <option>{item.dial_code}</option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="phone"
                  value={state.phone}
                  onChange={handleInputChange}
                />
              </div>

              <small style={{ color: "red" }}>{errors.phone}</small>
            </div>

            <div className="form-group col-lg-12 mb-0">
              <label
                style={{ marginBottom: "0" }}
                for="exampleInputEmail1 mb-0"
              >
                Email address
              </label>

              <input
                type="email"
                className="form-control mb-0"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
              <small style={{ color: "red" }}>{errors.email}</small>
            </div>

            <div className="form-group col-lg-12 mb-2">
              <label
                style={{ marginBottom: "0" }}
                for="exampleInputEmail1 mb-0"
              >
                Courses
              </label>

              <select
                className="input-group-text px-2"
                id="inlineFormCustomSelectPref"
                name="courses"
                value={state.courses}
                onChange={handleInputChange}
                style={{ width: "100%", textAlign: "left" }}
              >
                <option selected>Select Courses</option>
                {returned.map(item => (
                  <option>{item.title}</option>
                ))}
              </select>

              <small style={{ color: "red" }}>{errors.courses}</small>
            </div>

            <div className="form-group col-lg-12 mb-2">
              <select
                className="input-group-text px-2 mb-0"
                id="inlineFormCustomSelectPref"
                name="group"
                value={state.group}
                onChange={handleInputChange}
                style={{ width: "100%", textAlign: "left" }}
              >
                <option>I'm an individual learner</option>
                <option>I'm a group of 3 or more learner</option>
                <option>I'm a corporate</option>
              </select>
              <small style={{ color: "red" }}>{errors.group}</small>
            </div>

            <div className="form-group col-lg-12 mb-0 mt-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input mt-2"
                  id="exampleCheck1"
                  onChange={handleCheck}
                  value={checked}
                  defaultChecked={checked}
                />

                <p
                  className="form-check-label mb-0"
                  for="exampleCheck1"
                  style={{
                    marginTop: "-20px",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  By providing your contact details, you agree to our
                  <a
                    className="pl-2"
                    href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819"
                    target="__blank"
                    style={{
                      background: "none",
                      color: "blue",
                      display: "inline-block",
                      textAlign: "left",
                    }}
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
              <small style={{ color: "red", marginBottom: "10px" }}>
                {errors.checkbox}
              </small>
            </div>

            <div className="form-group col-lg-12 mb-0">
              {loader == "loading" ? (
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="btn btn-pink ml-0 text-white"
                  disabled
                >
                  SUBMITTING...<div class="loader"></div>
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="btn btn-pink ml-0 text-white"
                >
                  SUBMIT
                </button>
              )}
            </div>
            <small style={{ color: "green", display: "inline-block" }}>
              {submissionMessage}
            </small>
          </form>
        </Box>
      </Modal>
    </>
  )
}
