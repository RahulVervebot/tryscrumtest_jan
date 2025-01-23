import React, { useState, useEffect } from "react"
import Modals from "./Modals"
import axios from "axios"

const CareerContent = () => {
  const useScript = url => {
    useEffect(() => {
      const script = document.createElement("script")

      script.src = url
      script.async = true

      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }, [url])
  }

  useScript("https://embed.typeform.com/next/embed.js")

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    // job: "",
  })
  const [image, setImage] = useState("")
  const [loader, setloader] = useState("")
  const [checked, setChecked] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    // job: "",
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
    if (state.email && state.name && checked) {
      // debuggerss
      setloader("loading")
      const url =
        "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/8258/feedback"
      const formData = new FormData()
      formData.append("your-name", state.name)
      formData.append("your-email", state.email)
      formData.append("your-number", state.phone)
      formData.append("your-job", job_profile)
      // formData.append("your-file", image)
      formData.append("your-file", image)

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
      const res = await axios.post(url, formData, config)
      console.log("response", res)

      setloader(res.data.message)
      if (typeof res.data.message !== undefined) {
        // if (checked) {
        setSubmissionMessage(res.data.message)
        setState({ name: "", email: "" })

        // window.open(
        //   downloadFile,
        //   "_blank" // <- This is what makes it open in a new window.
        // );
        // window.location.href = downloadFile;
        // }
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
      if (checked === false) {
        error = {
          ...error,
          checkbox: "Please check this",
        }
      }
      setErrors(error)
    }
  }

  const job_profile = "Digital Marketing Manager"

  const imageUpload = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    let imageData = []
    reader.onloadend = () => {
      setImage(reader.result.toString())
      imageData.push(reader.result.toString())

      // console.log(imageData, "imgdata")
      console.log(<a href="${image}">Download</a>, "imgdata")
      // axios
      //   .post(
      //     "https://tryscrumlive.vervebot.io//wp-content/uploads/wpcf7_uploads/contact-form-7/v1/contact-forms/8258/feedback",

      //     reader.result.toString()
      //   )
      //   .then(() => {})
    }

    reader.readAsDataURL(file)
  }

  const content = (
    <>
      <form className="row mt-5">
        <div className="form-group col-lg-6 mb-0">
          <label style={{ marginBottom: "0" }} for="formGroupExampleInput mb-0">
            Enter Name
          </label>

          <input
            type="name"
            className="form-control mb-0"
            id="exampleInputEmail1"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
          <small style={{ color: "red" }}>{errors.name}</small>
        </div>
        <div className="form-group col-lg-6 mb-0">
          <label style={{ marginBottom: "0" }} for="exampleInputEmail1 mb-0">
            Email address
          </label>

          <input
            type="email"
            className="form-control mb-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
          <small style={{ color: "red" }}>{errors.email}</small>
        </div>
        <div className="form-group col-lg-6 mb-0">
          <label style={{ marginBottom: "0" }} for="exampleInputEmail1 mb-0">
            Phone{" "}
          </label>

          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="phone"
            value={state.phone}
            onChange={handleInputChange}
          />
          <small style={{ color: "red" }}>{errors.phone}</small>
        </div>
        <div className="form-group col-lg-6 mb-0">
          <label style={{ marginBottom: "0" }} for="exampleInputEmail1 mb-0">
            Job Profile
          </label>

          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="job"
            value={job_profile}
            onChange={handleInputChange}
          />
          <small style={{ color: "red" }}>{errors.job}</small>
        </div>

        <div className="form-group col-lg-12">
          <label htmlFor="fileupload" style={{ marginBottom: "0" }}>
            Upload Resume
          </label>

          <input
            className="form-control"
            id="fileupload"
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
            onChange={e => imageUpload(e)}
          />
        </div>

        <div className="form-group col-lg-12 mb-0">
          <small style={{ color: "red" }}>{errors.checkbox}</small>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={handleCheck}
              value={checked}
              defaultChecked={checked}
            />

            <label
              className="form-check-label mb-0"
              for="exampleCheck1"
              style={{ marginTop: "-20px" }}
            >
              I agree to the tryScrum's
              <a
                className="pl-2"
                href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819"
                target="__blank"
                style={{ background: "none", color: "blue" }}
              >
                Privacy Policy
              </a>
            </label>
          </div>
        </div>

        <div className="form-group col-lg-12 mb-0">
          {loader == "loading" ? (
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-pink ml-0 text-white"
              disabled
            >
              send<div class="loader"></div>
            </button>
          ) : (
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-pink ml-0 text-white"
            >
              send
            </button>
          )}

          <small style={{ color: "green" }}>{submissionMessage}</small>
        </div>
      </form>
    </>
  )

  return (
    <div className="container material-ui-modal">
      <div className="row">
        <div className="col-lg-12">
          <div
            class="card-job hover-up wow animate__ animate__fadeInUp animated border p-3 rounded-3"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <h1
              className="text-center p-4"
              style={{ fontWeight: "600", color: "#f05457" }}
            >
              {/* Join Our Team as a Trainer */}
            </h1>
            
            <div class="card-job-description mt-3">
              <p className="lead" style={{ lineHeight: "25px" }}>
                <b style={{color: "#012237", fontWeight:"600"}}>tryScrum is a mission based organisation.</b> Our mission is
                to humanize Organisations by helping them become fully capable
                and resilient.
              </p>
              <p className="lead">
                We are looking for an experienced and enthusiastic trainer to
                join our team. As a trainer, you will be responsible for
                designing and delivering effective training programs to our
                clients. We are seeking a candidate who is passionate about
                teaching and has a proven track record of creating engaging and
                informative training programs.
              </p>

              {/* <p
                className="lead pb-0"
                style={{ color: "#012237", fontWeight: "500",fontSize:"18px", }}
              >
                Responsibilities:
              </p> */}
              <h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}}>Responsibilities:</h3>

              <p className="pb-0 lead">
                <ul>
                  <li>
                    Design and develop training programs that meet the needs of
                    our clients.
                  </li>
                  <li>
                    Deliver training sessions in a clear, concise, and engaging
                    manner.
                  </li>
                  <li>
                    Evaluate the effectiveness of training programs and make
                    recommendations for improvement.
                  </li>
                  <li>
                    Collaborate with our clients to identify their training
                    needs and develop customized training solutions.
                  </li>
                  <li>
                    Stay up-to-date with industry trends and best practices in
                    training and instructional design.
                  </li>
                  <li>
                    Develop training materials, including presentations,
                    handouts, and assessments.
                  </li>
                 
                  {/* <li>
                    Provide feedback to participants and monitor their progress.
                  </li> */}
                </ul>
              </p>
            </div>

            <h1
              className="text-center p-4"
              style={{ fontWeight: "600", color: "#f05457" }}
            >
              Application Criteria
            </h1>

            {/* <p
              className="lead pb-0"
              style={{ color: "#012237", fontWeight: "500",fontSize:"18px", }}
            >
              Trainer Application Criteria:
            </p> */}

            <h3 style={{"color": "rgb(1, 34, 55)","font-weight": "600", "padding-bottom": "5px"}} >Trainer Application Criteria:</h3>


            <p className="pb-0 lead">
              <ol>
                <li>
                  With four years of trainer experience, we need 50 students’
                  feedback and one client's feedback.
                </li>
                <li>
                  If you have CTC/CEC with Scrum Alliance/ PST with Scrum.org -
                  Step 1 is optional.
                </li>
                <li>
                  We are not looking for SPC Students feedback, the criteria is
                  to assess the Scrum Foundations Learning Objectives. So, at
                  this point we are not accepting SPC classes.
                </li>
                {/* <li>
                  Agile/Scrum Foundations training - a minimum of 20-25
                  students’ feedback and one client recommendation is a must.
                </li> */}
                <li>
                  If you are a CSP-SM or CSP-PO, you must submit at-least 5
                  training feedback on Scrum Foundations that you delivered to
                  the public in addition to point (1).
                </li>
                <li>
                  If you have published white paper or blogs, please send them
                  to us.
                </li>
                <li>
                    If you are a Certified LeSS Coach or a Candidate LeSS Trainer, Step 1 is optional too.
                  </li>
              </ol>
            </p>
            <p className="lead">
              We are an equal opportunity employer and welcome applicants from
              diverse backgrounds. We thank all applicants for their interest,
              however, only those selected for an interview will be contacted.
            </p>

            <p className="lead">
              Join our team and help us deliver exceptional training programs to
              our clients.
            </p>

            {/* <Modals buttonName={"Apply Now"} modalContent={content} /> */}
            <div className="col-lg-12 col-sm-8 col-12 mb-0 text-center">
              <button
                data-tf-popup="VCB2bcQ2"
                data-tf-opacity="100"
                data-tf-size="75"
                data-tf-iframe-props="title=Trainer Application"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
                role="button"
                style={{ letterSpacing: "0.5px" }}
                className="border-0 button_slide slide_down btn btn-small btn-pink  rounded-0 color-white px-3 py-2 text-white rounded"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerContent
