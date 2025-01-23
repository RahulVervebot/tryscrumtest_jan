import React from "react"
import csm from "../assets/images/csm-logo.png"
import acscf from "../assets/images/acs_cf.png"
import acsm from "../assets/images/acsm-lg.png"
import icpacc from "../assets/images/icp-acc-logo.png"
import ctc from "../assets/images/ctc.png"
import CST from "../assets/images/CST.png"
import CEC from "../assets/images/cec.png"
import ModalCSM from "./ModalICSM"
import male from "../assets/images/male.png"
import female from "../assets/images/female.png"
import arrowright from "../assets/images/arrow-right.svg"
import arowrightupdown from "../assets/images/arrow-up-down-right.svg"
import arowrightup from "../assets/images/arrow-up-right.svg"
import arowrightdown from "../assets/images/arrow-down-right.svg"

const Testpage = () => {
  return (
    <>
      <div
        className="border border-top-0"
        style={{
          backgroundColor: "#f9f9f9",
          height: "82vmin",
        }}
      >
        <div
          className="p-4"
          style={{
            backgroundColor: "#f9f9f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            className="blog-one__title mb-0 text-center"
            style={{
              backgroundColor: "#f9f9f9",
              // borderBottom: "5px solid red",
              width: "fit-content",
              textDecoration: "underline wavy #f05457",
            }}
          >
            LEVEL UP YOUR GAME
          </h2>
        </div>

        <div
          className="p-2"
          style={{
            width: "100%",
            height: "60vmin",
            position: "relative",
            backgroundColor: "#f9f9f9",
            display: "grid",
            gridTemplateRows: "repeat(3, 0.5fr)",
            gridTemplateColumns: "repeat(10, 0.5fr)",
          }}
        >
          <div className="" style={{ gridRowStart: "2", gridColumnStart: "1" }}>
            <img
              src={csm}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
              className="scale-image"
            />
          </div>

          <div
            className="p-2"
            style={{ gridRowStart: "2", gridColumnStart: "2" }}
          >
            <img
              src={arrowright}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
            />
          </div>

          <div className="" style={{ gridRowStart: "2", gridColumnStart: "3" }}>
            <img
              src={acsm}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
              className="scale-image"
            />
          </div>

          <div
            className="p-2"
            style={{ gridRowStart: "2", gridColumnStart: "4" }}
          >
            <img
              src={arrowright}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
            />
          </div>

          <div className="" style={{ gridRowStart: "2", gridColumnStart: "5" }}>
            <img
              src={acscf}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
              className="scale-image"
            />
          </div>

          <div
            className="p-2"
            style={{ gridRowStart: "2", gridColumnStart: "6" }}
          >
            <img
              src={arrowright}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
            />
          </div>

          <div className="" style={{ gridRowStart: "2", gridColumnStart: "7" }}>
            <img
              src={icpacc}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
              className="scale-image"
            />
          </div>

          <div
            className="p-2"
            style={{
              gridRowStart: "2",
              gridColumnStart: "8",
              position: "relative",
            }}
          >
            <img
              src={arrowright}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // : "1px solid red",
              }}
            />
          </div>

          <div
            className="p-2"
            style={{ gridRowStart: "1", gridColumnStart: "8" }}
          >
            <img
              src={arowrightup}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "auto auto",
                cursor: "pointer",
                // transform: "rotate(-40deg)",
                // : "1px solid red",
              }}
            />
          </div>

          <div
            className="p-2"
            style={{ gridRowStart: "3", gridColumnStart: "8" }}
          >
            <img
              src={arowrightdown}
              width="100%"
              height="100%"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                cursor: "pointer",
                // transform: "rotate(40deg)",
                // : "1px solid red",
              }}
            />
          </div>

          <ModalCSM
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                minima quas, fuga aperiam quis ratione consectetur, ea sed
                explicabo fugiat harum nesciunt similique soluta, officia
                excepturi inventore? Quos illo possimus fuga nisi sunt atque
                consequatur adipisci repellat voluptas rerum perspiciatis
                magnam, unde iure, id labore consectetur deserunt. Dignissimos,
                veritatis! Perspiciatis?
              </p>
            }
            image={
              <img
                src={ctc}
                height={"100%"}
                width={"100%"}
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                  cursor: "pointer",
                  // : "1px solid red",
                }}
                className="scale-image"
              />
            }
            row={"1"}
            col={"9"}
          />

          <div
            className=""
            style={{ gridRowStart: "1", gridColumnStart: "10" }}
          ></div>

          <ModalCSM
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                minima quas, fuga aperiam quis ratione consectetur, ea sed
                explicabo fugiat harum nesciunt similique soluta, officia
                excepturi inventore? Quos illo possimus fuga nisi sunt atque
                consequatur adipisci repellat voluptas rerum perspiciatis
                magnam, unde iure, id labore consectetur deserunt. Dignissimos,
                veritatis! Perspiciatis?
              </p>
            }
            image={
              <img
                src={CST}
                height={"100%"}
                width={"100%"}
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                  cursor: "pointer",
                  // : "1px solid red",
                }}
                className="scale-image"
              />
            }
            row={"2"}
            col={"9"}
          />

          <div
            className=""
            style={{ gridRowStart: "2", gridColumnStart: "10" }}
          ></div>

          <ModalCSM
            content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                minima quas, fuga aperiam quis ratione consectetur, ea sed
                explicabo fugiat harum nesciunt similique soluta, officia
                excepturi inventore? Quos illo possimus fuga nisi sunt atque
                consequatur adipisci repellat voluptas rerum perspiciatis
                magnam, unde iure, id labore consectetur deserunt. Dignissimos,
                veritatis! Perspiciatis?
              </p>
            }
            image={
              <img
                src={CEC}
                height={"100%"}
                width={"100%"}
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                  cursor: "pointer",
                  // : "1px solid red",
                }}
                className="scale-image"
              />
            }
            row={"3"}
            col={"9"}
          />

          {/* <div className="" style={{ gridRowStart: "1", gridColumnStart: "10" }}>
          <div>
            <h2 className="blog-one__title mb-0 text-center">CTC</h2>
            <p
              className="text-center"
              style={{
                lineHeight: "17px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
         </div> */}

          <div
            className="p-3"
            style={{ gridRowStart: "1", gridColumnStart: "10" }}
          >
            <div>
              <h2 className="blog-one__title mb-0 text-center">CTC</h2>
              <p
                className="text-center"
                style={{
                  lineHeight: "17px",
                  fontSize: "1.7vmin",
                }}
              >
                Practice Multi teams coaching.
              </p>
            </div>
          </div>

          <div
            className="p-3"
            style={{ gridRowStart: "2", gridColumnStart: "10" }}
          >
            <div>
              <h2 className="blog-one__title mb-0 text-center">CST</h2>
              <p
                className="text-center"
                style={{
                  lineHeight: "17px",
                  fontSize: "1.7vmin",
                }}
              >
                Practice as a trainer training.
              </p>
            </div>
          </div>

          <div
            className="p-3"
            style={{ gridRowStart: "3", gridColumnStart: "10" }}
          >
            <div>
              <h2 className="blog-one__title mb-0 text-center">CEC</h2>
              <p
                className="text-center"
                style={{
                  lineHeight: "17px",
                  fontSize: "1.7vmin",
                }}
              >
                Practice Multi Departments and Executive Coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testpage
