import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ReactModal from "react-modal";

const Courses16 = (props) => {
  const [stateId, setStateId] = useState(false);


  const tablecourses = useStaticQuery(graphql`
    {
      allWpPost(
        filter: { acfcoursePage: { course16: { position: { eq: 1 } } } }
      ) {
        nodes {
          uri
          title
          excerpt
          id
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
              keywords
              logocourse {
                mediaItemUrl
              }
            }

            course16 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course2 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course3 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course4 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course5 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course6 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course7 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course8 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course9 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course10 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course11 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course12 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course13 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course14 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course15 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course16 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course17 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course18 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course19 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
            course20 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
              regularPrice
              salePrice
            }
          }
        }
      }
    }
  `);

  // console.log(tablecourses.allWpPost.nodes, "moddata")

  const names = props.api;

  const newdata = tablecourses.allWpPost.nodes.filter((item) => {
    return names.includes(item.title);
  });

  console.log(newdata, "newline-1");
  console.log(tablecourses, "table-1");

  const calleventbrite = () => {
    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: stateId,
      modal: true,
      modalTriggerElementId: "example-widget-trigger",
    });
  };

  const Modal = (props) => {
    const [open, setOpen] = useState(false);


    const handleclose = () => {
      setOpen(false);
    };
  
    const handleopen = () => {
      setOpen(true);
    };
    return (
      <>
        <a
          className="btn btn-danger"
          onClick={handleopen}
          style={{
            height: "auto",
            padding: "5px 17px",
          }}
        >
          Enroll now
        </a>

        <ReactModal
          isOpen={open}
          onRequestClose={handleclose}
          contentLabel="Buy Course"
          className="Modal-course-table"
          overlayClassName="Overlay"
        >
          <div className="modal-body">
              <iframe
                src={props.url}
                style={{ height: "96vh" }}
                width="100%"
              ></iframe>
          </div>
          <div
            className="text-center"
            style={{ position: "absolute", top: "30px", right: "40px" }}
          >
            <button style={{ border: "none" }} onClick={handleclose}>
              <i
                className="fas fa-close"
                style={{ fontSize: "25px", color: "red" }}
              ></i>
            </button>
          </div>
        </ReactModal>
      </>
    );
  };

  return (
    <>
      {newdata.map((e, index) => (
        <tr style={{ "box-shadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
          <td>
            <b style={{ fontSize: "2.3vmin", fontWeight: "600" }}>
              {e.acfcoursePage.course16.time1}
              {" - "}
              {e.acfcoursePage.course16.date1}
            </b>
            <br />
            <b style={{ fontSize: "17px", color: "#2196f3" }}>
              {e.acfcoursePage.course16.trainer}
            </b>
          </td>

          <td>
            <b style={{ textDecoration: "underline" }}>
              <i className="fa fa-map-marker"></i>{" "}
              {e.acfcoursePage.course16.location
                ? e.acfcoursePage.course16.location
                : "Not available"}
            </b>
            <br />
            <img
              src={e.acfcoursePage.options.logocourse?.mediaItemUrl}
              height={"24px"}
              width={"24px"}
              style={{ borderRadius: "50%" }}
            />{" "}
            {e.title}
          </td>

          <td style={{ position: "relative" }}>
            <span
              style={{
                fontSize: "18px",
                cursor: "pointer",
                position: "absolute",
                marginRight: "auto",
                marginLeft: "auto",
                bottom: "20px",
                left: 0,
                right: 0,
              }}
              data-title="The price listed is only for Indian Markets. Please click the enroll button to know the prices for foreign markets."
            >
              <i className="fa fa-info-circle info-detail"></i>
            </span>
          </td>

          <td style={{ width: "20%" }}>
          {/* {e.acfcoursePage.course16.url} */}
            <p
              style={{
                fontSize: "2.3vmin",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              <s>{e.acfcoursePage.course16.regularPrice}</s> {""}{" "}
              {e.acfcoursePage.course16.salePrice}
            </p>
            <Modal url={e.acfcoursePage.course16.url} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Courses16;
