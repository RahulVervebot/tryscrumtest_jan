import React from 'react'
import icagile from "../assets/images/support/icagile.png";
import icf from "../assets/images/support/icf.png";
import scrums from "../assets/images/support/scrum.png";
import scrumalliance from "../assets/images/support/Scrum-alliance.png";
import pro from "../assets/images/pro.png";


const OurPartners = () => {
  return (
    <div>
        <div className="block-title-size" style={{ marginBottom: "50px", marginTop: "0px", textAlign: "center" }}>Our Partners</div>
          <section className="">
            {/* desktop */}
            <div className="desktopdisplay" >
              <div className="container-fluid" style={{ display: "flex", margin: "0 auto" }}>
                <div className="row d-flex" style={{ display: "flex", margin: "0 auto", justifyContent: "space-evenly" }}>
                  <div className="col-2 p-5 ">
                    <img src={icagile} alt="icagile" width={200} height={150} />
                  </div>
                  {/* <div className="col-2 p-5 ">
                    <img src={icf} alt="icagile" width={200} height={150} />
                  </div> */}
                  <div className="col-2 p-5 ">
                    <img src={scrums} alt="scrums" width={200} height={150} />
                  </div>
                  <div className="col-2 p-5 ">
                    <img src={scrumalliance} alt="scrumlliance" width={200} height={150} />
                  </div>
                  <div className="col-2 p-5 mt-5">
                    <img src={pro} alt="scrumlliance" width={200} height={60} />
                  </div>
                </div>
              </div>
            </div>
            {/* tablet */}
            <div className="tabletdisplay" >
              <div className="container-fluid" style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}>
                <div className="row d-flex" style={{ display: "flex", margin: "0 auto", justifyContent: "space-evenly" }}>
                  <div className="col-4 p-5 ">
                    <img src={icagile} alt="icagile" width={200} height={150} />
                  </div>
                  {/* <div className="col-4 p-5 ">
                    <img src={icf} alt="icagile" width={200} height={150} />
                  </div> */}
                  <div className="col-4 p-5 ">
                    <img src={scrums} alt="scrums" width={200} height={150} />
                  </div>
                </div>
                <div className="row d-flex" style={{ display: "flex", margin: "0 auto", justifyContent: "space-evenly" }}>
                  <div className="col-6 p-5 ">
                    <img src={scrumalliance} alt="scrumlliance" width={200} height={150} />
                  </div>
                  <div className="col-6 p-5 mt-5">
                    <img src={pro} alt="scrumlliance" width={200} height={60} />
                  </div>
                </div>

              </div>
            </div>
            {/* mobile */}
            <div className="mobiledisplay">
              <div className="container-fluid" style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}>
                <div className="row d-flex" style={{ display: "flex", margin: "0 auto", justifyContent: "space-evenly" }}>
                  <div className="col-6 p-2">
                    <img src={icagile} alt="icagile" width={150} height={100} />
                  </div>
                  {/* <div className="col-6 p-2">
                    <img src={icf} alt="icagile" width={150} height={100} />
                  </div> */}



                  <div className="row d-flex" style={{ display: "flex", margin: "0 auto", justifyContent: "space-evenly" }}>
                    <div className="col-6 p-2">
                      <img src={scrums} alt="icagile" width={150} height={120} />
                    </div>
                    <div className="col-6 p-2">
                      <img src={scrumalliance} alt="icagile" width={150} height={120} />
                    </div>
                  </div>


                  <div className="row d-flex" style={{ display: "flex", margin: "0 auto", justifyContent: "space-evenly" }}>
                    <div className="col-6 p-2">
                      <img src={pro} alt="pro" width={170} height={50} />
                    </div>
                    <div className="col-6 p-2">
                      {/* <img src={scrumalliance} alt="icagile" width={150} height={120} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default OurPartners